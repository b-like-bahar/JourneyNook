import axios from "axios";
import { createTripPrompt } from "../middleware/middleware.js";

const generateItinerary = async (req, res) => {

  const { days, budget, tripType, cityName } = req.body;

  if (!days || !budget || !tripType || !cityName) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OpenAI API key is missing' });
  }

  let content = createTripPrompt(days, budget, tripType, cityName);

  let maxTokens = days > 5 ? 1500 : 700;

  const messages = [
    {
      role: "system",
      content: "You are an expert travel planner.",
    },
    {
      role: "user",
      content: content,
    }
  ];
  let generatedItinerary = "";
  let finishReason = null;
  let continuationAttempts = 0;
  const maxContinuationAttempts = 3;

  try {
    while (finishReason !== "stop" && continuationAttempts <= maxContinuationAttempts) {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: messages,
          max_tokens: maxTokens,
          temperature: 0.3,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
        }
      );
      const newContent = response.data.choices[0].message.content;
      finishReason = response.data.choices[0].finish_reason;

      generatedItinerary += newContent;
      if (finishReason === "length") {
        messages.push({
          role: "assistant",
          content: "Please continue the itinerary without repeating the previous steps."
        });
        continuationAttempts++;
        maxTokens = 1000;
      } else if (finishReason !== "length" && finishReason !== "stop") {
        break;
      }
    }

    res.status(200).json({ itinerary: generatedItinerary });
  } catch (error) {
    console.error(
      "Error generating itinerary:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Failed to generate itinerary" });
  }
};

export { 
  generateItinerary 
}
