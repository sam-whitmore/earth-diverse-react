import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";
 
const schema = defineSchema({
  ...authTables,
  courses: defineTable({
    category: v.string(),
    code: v.string(),
    currentlyEnrolled: v.float64(),
    hook: v.array(v.string()),
    image: v.string(),
    instructor: v.string(),
    locationCode: v.string(),
    priceNZD: v.float64(),
    sessions: v.array(
      v.object({
        date: v.string(),
        day: v.string(),
        description: v.string(),
        files: v.optional(v.array(v.any())),
        image: v.string(),
        topic: v.string(),
        video: v.optional(v.string()),
      })
    ),
    subtitle: v.string(),
    term: v.float64(),
    times: v.array(v.string()),
    timezone: v.string(),
    title: v.string(),
    year: v.float64(),
    zoom_link: v.string(),
  }),
});
 
export default schema;