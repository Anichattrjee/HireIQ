import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";
import { relations } from "drizzle-orm";
import { JobListingTable } from "./jobListing";
import { OrganizationUserSettingsTable } from "./organizationUserSettings";

export const OrganizationTable= pgTable("orgnizations", {
    id:varchar().primaryKey(),
    name:varchar().notNull(),
    imageUrl:varchar(),
    createdAt,
    updatedAt
});

//organization table will have many relationship with jobs (one organization -> multiple jobs)
//and another many relationship with organizationUserSettngs(many users subcribed -> one organization for new updates through email)
export const organizationRelations=relations(OrganizationTable, ({ many })=>({
    jobListings: many(JobListingTable),
    organizationUserSettings: many(OrganizationUserSettingsTable),
}));
