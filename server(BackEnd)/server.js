import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import citiesRouter from "./routes/cities.js";
import attractionsRouter from "./routes/attractions.js"

const app = express();
const{ PORT, CORS_ORIGIN } = process.env;

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json()); 
app.use('/images', express.static("public/images"));

app.use('/cities', citiesRouter);
app.use('/attractions', attractionsRouter);

app.use('*', (_req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

app.use((err, _req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error'});
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})