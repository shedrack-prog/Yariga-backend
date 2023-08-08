import express from 'express';
const app = express();
import dotenv from 'dotenv';
import connectDb from './db/connectDb.js';
dotenv.config();
import propertyRouter from './routes/propertyRoutes.js';

// middlewaress>.>>>>>>>>>>>>>>
app.use(express.json());

app.get('/', (req, res) => res.send('welcome to Home'));
app.use('/api/v1/properties', propertyRouter);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(port, () => console.log(`app listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
