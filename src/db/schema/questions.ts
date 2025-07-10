import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { rooms } from "./rooms.ts";

export const questions = pgTable('questions', {
    id: uuid().primaryKey().defaultRandom(),
    roomId: uuid().references(() => rooms.id).notNull(),
    question: text().notNull(),
    answer: text(),
    creeatedAt: timestamp().defaultNow().notNull(),
})