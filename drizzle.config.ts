import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  //driver: "pg",
  dialect: 'postgresql',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL,
  },
  tablesFilter: ["t3stack-file_gallery_*"],
} satisfies Config;
