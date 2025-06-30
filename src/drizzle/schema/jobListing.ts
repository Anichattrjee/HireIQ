import { integer, pgEnum, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { id } from "../schemaHelpers";
import { OrganizationTable } from "./organization";

export const wageIntervals= ['hourly', 'yearly'] as const
//wageIntervals[number] is TypeScript syntax to index the tuple with the number type.
// it means: “Give me the type of any element in this tuple. like wageIntervals[0] or [1]” 
type WageInterval = typeof wageIntervals[number];
export const wageIntervalEnum= pgEnum("job_listings_wage_interval", wageIntervals);


export const JobListingTable=pgTable("job_listings",{
    id,
    organizationId:varchar().references(()=>OrganizationTable.id, { onDelete:"cascade"}).notNull(),
    title: varchar().notNull(),
    description :text().notNull(),
    wage:integer(),
    wageInterval: wageIntervalEnum()
})