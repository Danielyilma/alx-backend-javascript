import express from 'express';
import routes from './routes/index';

const port = 1245;

const app = express();

app.use('/', routes);

app.listen(port, () => {
  console.log('server running on localhost port 1245');
});

export default app;
