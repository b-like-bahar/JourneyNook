# Project Title
JourneyNook

## Overview
JourneyNook is a user-friendly travel itinerary planner that helps users create and manage personalized trip plans. Users can explore new destinations, add landmarks to their itinerary, and keep track of daily activities. The app also includes budget management, allowing users to enter and monitor their expenses, with automatic calculation of the remaining budget. Additionally, users can edit or delete items from their itinerary and leave or view comments on landmarks, creating an interactive and flexible travel planning experience.

### Problem Space
Planning a trip can be overwhelming, especially when trying to organize activities, manage a budget, and keep track of the best places to visit. JourneyNook addresses this issue by offering users a convenient and intuitive tool to design itineraries with detailed information on attractions, travel tips, and cost management.

### User Profile
- Travel enthusiasts who are planning a trip and need a structured way to organize their daily activities.
- Frequent travelers looking to create multiple itineraries for different destinations.
-Casual explorers wanting suggestions for landmarks and travel tips in various cities.

### Features
- Explore Destinations: As a user, I want to browse different cities, each featuring iconic landmarks and scenic spots, and view detailed descriptions of each location.

- Customizable Itinerary: As a user, I want to create a personalized itinerary by adding, editing, or deleting activities for each day of my trip. I can organize my itinerary based on my preferred schedule and update it as plans change.

- Budget Management: As a user, I want to track my trip's expenses by adding costs to each item in my itinerary. The app will automatically calculate my remaining budget as I add activities, helping me stay within my travel budget.

- Comments and Reviews: As a user, I want to leave comments on landmarks and activities and view other users' feedback. This allows me to gain insights and recommendations from fellow travelers before finalizing my itinerary.

- Trip Planning: As a user, I want to plan my trip by selecting the "Plan My Trip" option, which will navigate me to the itinerary page where I can start organizing my days and activities.

- Login and User Account: As a user, I want to log in, and save my itineraries for future reference. This ensures my trip plans are accessible across sessions.

## Implementation

### Tech Stack
- React
- MySQL
- Express
- JWT for authentication (diving deeper)
- Client libraries: 
    - react
    - react-router
    - react-router-dom
    - react-svg 
    - axios
    - dotenv
    - react-dom
    - sass
    - uui
    - Numeral

- Server libraries:
    - knex
    - express
    - dotenv
    - cors
    - mysql2
    - uuid

### APIs
No external APIs will be used in this initial implementation. All data will be stored and managed internally, with potential for future integration of location-based services like Google Maps.

### Sitemap

- Home Page: Displays cities and a short description.
- City Detail Page: Offers in-depth information on landmarks and an option to start planning.
- Itinerary Page: Users can build their travel plans for each day.
- Login Page: Allows users to access their account to save itineraries.

### Mockups
#### Home Page
![](HomePage.png)
It can be found in assets folder

#### City Detail Page
![](CityDetailPage.png)
It can be found in assets folder

#### Itinerary Page
![](ItineraryPage.png)
It can be found in assets folder

#### Login Page
![](LoginPage.png)
It can be found in assets folder


### Data
![](SQLDiagram.png)
It can be found in assets folder

### Endpoints

**GET /cities**
- Get a list of all cities

Response:
```
[
  {
    "city_id": 1,
    "name": "Paris",
    "description": "City of Lights, rich in history and culture."
  },
    ...
]
```
**GET /landmarks?city_id=
- Get all landmarks in a specific city by city_id

Response:
```
  {
    "landmark_id": 1,
    "name": "Eiffel Tower",
    "description": "A global cultural icon of France."
  },
    ...
```

**POST /itineraries
- Create a new itinerary

Parameters:
- user_id: User creating the itinerary (integer)
- city_id: City for the itinerary (integer)
- start_date: Start date of the trip (string, formatted date)
- end_date: End date of the trip (string, formatted date)
- total_budget: Total budget for the trip (decimal)

Response:
```
{
  "itinerary_id": 1,
  "user_id": 1,
  "city_id": 1,
  "start_date": "2024-09-15",
  "end_date": "2024-09-20",
  "total_budget": 1000.00,
  "remaining_budget": 1000.00
}
```
**GET /itineraries
- Get details for a specific itinerary.

Response:
```
{
  "itinerary_id": 1,
  "user_id": 1,
  "city_id": 1,
  "start_date": "2024-09-15",
  "end_date": "2024-09-20",
  "total_budget": 1000.00,
  "remaining_budget": 800.00
}
```
**PUT /itineraries/
- Update an itinerary item

Response:
```
{
  "item_id": 1,
  "activity_name": "Visit Eiffel Tower at night",
  "time_spent": 3,
  "cost": 60.00
}
```

**DELETE /itineraries/
- Delete an itinerary

Response:
```
{
  "message": "Itinerary deleted successfully"
}
```
**POST /landmarks/comments
- Add a comment to a landmark

Response:
```
{
  "comment_id": 1,
  "landmark_id": 1,
  "user_id": 1,
  "comment_text": "Beautiful view from the top!",
  "date_posted": "2024-09-11"
}
```
**GET /landmarks/comments
 - Get all comments for a specific landmark

 Response:
 ```
 [
  {
    "comment_id": 1,
    "landmark_id": 1,
    "user_id": 1,
    "comment_text": "Beautiful view from the top!",
    "timestamp": "1234566"
  },
  ...
]
```
**POST /users/login
- Log in an existing user

Parameters:
email: User's email (string)
password: User's password (string)

Response:
{
  "token": "JWT Token"
}

## Roadmap

1. Initial Setup (Days 1-2)

    Set up Version Control (Git):

    Initialize a Git repository.
    Create the main branch.
    Initialize Frontend and Backend Projects:
    Create the React frontend.
    Set up the backend with Express.
    Install Required Libraries:
    Frontend: react, react-router, react-router-dom, react-svg, axios, dotenv, react-dom, sass, uui, and Numeral
    Backend: knex, express, bcrypt (diving deeper), dotenv, cors, mysql2, uuid

    Set Up Database:
    Create the schema for users, cities, landmarks, itineraries, comments, and itinerary items.
    Use Knex.js to handle database migrations and seeds.


2. Cities and Landmarks (Days 3-4)

    City Management:
    Create backend routes to fetch cities and their descriptions.
    Build the frontend to display cities on the main page.

    Landmark Display:
    Create backend routes to get landmarks for a city.
    Design the frontend to show landmarks when a city is clicked.
    Add landmark descriptions and suggested places to visit for each city.

3. Itinerary Management (Days 5-6)

    Create and View Itineraries:
    Create the form for users to plan their trip (start date, end date, budget).
    Add logic to calculate the remaining budget and show it on the frontend.
    Fetch and display all itineraries created by a user.

    Add and Update Itinerary Items:
    Allow users to add items (landmarks/activities) to their itinerary.
    Build functionality for editing and deleting itinerary items.

    Budget Tracking:
    Implement logic to subtract costs of activities from the total budget.
    Display remaining budget dynamically on the itinerary page.

4. Commenting System (Days 7-8)

    Comments for Landmarks:
    Backend: Set up endpoints for posting and fetching comments related to landmarks.
    Frontend: Display comments on each landmark's details page and allow users to post comments.
    (diving deeper: Comment Management:
    Allow users to delete or edit their own comments.)

5. Itinerary Editing & Deletion (Day 9)

    Edit Itinerary:
    Implement a feature allowing users to edit existing itineraries (update dates, budget, etc.).

    Delete Itinerary:
    Add functionality for users to delete entire itineraries and remove all related items.

6. User Login and Authentication (Day 10)

    Login Page:
    Implement a simple login page using React.
    Allow users to log into their account using email and password.

    Backend Routes for Login:
    Create backend routes to handle login.
    Use bcrypt to verify hashed passwords.(diving deeper)
    Basic Form Validation:
    Implement frontend form validation to ensure correct user inputs.

7. Final Touches & Testing (Day 11)
    Frontend Polishing:
    Improve the UI and add any missing elements (form validation, loading states, etc.) and check if everything is consistent in the code.

    Backend Testing:
    Test all API endpoints with Postman or another API testing tool.

    Error Handling:
    Make sure to add error handling and validation for form submissions on both frontend and backend.

8. Deployment and Demo Preparation (If I have extra time)

    Deployment:
     Deploy the frontend and backend.


## Future Implementations
JWT Authentication: Implement JWT-based authentication for more secure and scalable user login.

Registration for Deep-Diving Features: Offer registration for users to unlock deeper features such as detailed trip analysis, sharing trips, and itinerary recommendations.

Integration with third-party APIs: Consider integrating travel or map APIs like Google Maps for better location data and suggestions.

Add deleting and editing functionality to the comment section

Add rating system to each landmark

enable liking  comments

Social Features: Add features like sharing trips or places on social media or among friends.
