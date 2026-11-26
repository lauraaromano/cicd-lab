import express from 'express';

const app = express();

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
  });
});

app.get('/api/version', (_request, response) => {
  response.json({
    version: process.env.APP_VERSION ?? 'development',
  });
});

export default app;
