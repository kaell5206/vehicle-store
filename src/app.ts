import express from 'express';
import 'express-async-errors';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware';
import carRoute from './routes/carRoute';
import motorRoute from './routes/motorRoute';

const app = express();

app.use(express.json());

app.use('/cars', carRoute);

app.use('/motorcycles', motorRoute);

app.use(errorHandlerMiddleware);

export default app;
