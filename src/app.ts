// src/app.ts
import express from 'express';
import bodyParser from 'body-parser';
// import routes, middleware, db init, etc.

const app = express();
app.use(bodyParser.json());
// ... your routes and middleware
export default app;
