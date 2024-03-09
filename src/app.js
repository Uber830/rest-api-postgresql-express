import Express from "express";
import morgan from "morgan";
import cors from 'cors';

const app = Express();

// Middleware
app.use(morgan('dev'))
app.use(Express.json())
app.use(cors())


export default app;
