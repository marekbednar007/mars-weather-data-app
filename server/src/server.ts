import path from 'path';
import express, { Request, Response, ErrorRequestHandler } from 'express';
// import cors from 'cors';
import dotenv from 'dotenv';
// import router from '../routes/api';

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
// app.use(cors());
app.use(express.urlencoded());
app.use(express.static(path.resolve(__dirname, '../client')));
// app.use('/api', router);

// DEFINE ROUTER HANDLERS HERE
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('API is working.');
});

app.listen(PORT, () => {
  console.log(`Listening to the port: ${PORT}`);
});
