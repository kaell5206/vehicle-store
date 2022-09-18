import express from 'express';
import 'express-async-errors';
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware';
import carRoute from './routes/carRoute';

const app = express();

app.use(express.json());

app.use('/cars', carRoute);

app.use(errorHandlerMiddleware);

export default app;
