import { timestamp, uuid } from "drizzle-orm/pg-core";

export const id=uuid().defaultRandom().notNull();//for generating random id used as a priamry key or a key
export const createdAt=timestamp({withTimezone:true}).notNull().defaultNow();

export const updatedAt=timestamp({withTimezone:true}).notNull().defaultNow().$onUpdate(()=>new Date());