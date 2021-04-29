import express from 'express';
import { Response } from './utils/response/response';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  const message = `Welcome to express`;
  
  const sendResponse:Response = new Response(res);
  return sendResponse.responseOk(message,null);
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});