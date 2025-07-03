import db from "#db/client";

import { createTask } from "#db/queries/tasks";
import { createUser } from "#db/queries/users";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // TODO
  await createTask('title1', false, user.id);
  await createTask('title2', false, user.id);
  await createTask('title3', false, user.id);
}
