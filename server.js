import express from 'express';
import cors from 'cors';
import router from './routes/routes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use(express.static('./client'));

app.use('/', router);

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`));