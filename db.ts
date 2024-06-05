// db.ts
import { Database } from "bun:sqlite";

const db = new Database("/tmp/article/db.sqlite", { create: true });

export default db;
