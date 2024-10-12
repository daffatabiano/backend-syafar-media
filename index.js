import express from 'express';
import cors from 'cors';
import JemaahRoutes from './routes/JemaahRoutes.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(JemaahRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
