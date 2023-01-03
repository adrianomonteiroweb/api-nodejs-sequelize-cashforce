import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';

dotenv.config({ path: path.join(__dirname, '../../../.env') });

import app from './app';

import { routes } from './routes';

app.use(routes);
app.use(cors());

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, () => {
  const statusServer =
    process.env.NODE_ENV === 'test'
      ? `Server running on http://${HOST}:${PORT}`
      : `Server running on ${process.env.DEPLOY_URI}`;

  console.log(statusServer);
});
