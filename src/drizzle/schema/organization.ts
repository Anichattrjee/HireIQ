import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";

export const OrganizationTable= pgTable("orgnizations", {
    id:varchar().primaryKey(),
    name:varchar().notNull(),
    imageUrl:varchar(),
    createdAt,
    updatedAt
});