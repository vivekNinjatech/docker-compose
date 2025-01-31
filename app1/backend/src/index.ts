import express, { Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import { decrementCount, getCount, incrementCount, resetCount } from './controllers';
import cors from 'cors';

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.get('/api/count', getCount);
app.post('/api/increase', incrementCount);
app.post('/api/decrease', decrementCount);
app.post('/api/reset', resetCount);

app.listen(port, () => {
  console.log(`Server is burning at http://localhost:${port}`);
});
