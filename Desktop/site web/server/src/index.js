import app from './app.js';
import { connectDb } from './config/db.js';
import { env } from './config/env.js';
import { ensureDefaultAdmin } from './services/adminService.js';

const start = async () => {
  await connectDb();
  await ensureDefaultAdmin();

  app.listen(env.port, () => {
    console.log(`🚀 Server ready on port ${env.port}`);
  });
};

start().catch((err) => {
  console.error('Startup error', err);
  process.exit(1);
});

