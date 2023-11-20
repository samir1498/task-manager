// types.ts
import { z } from "zod";

export const TaskSchema = z
  .object({
    id: z.number().or(z.undefined()),
    title: z
      .string()
      .min(3, { message: "Title should be at least 3 characters long." })
      .default(""),
    description: z
      .string()
      .min(5, { message: "Description should be at least 5 characters long." }),
    dueDate: z.date(),
    priority: z.enum(["High", "Medium", "Low"], {
      errorMap: (_issue, _ctx) => ({ message: "You must choose an option" }),
    }),
    status: z.enum(["In Progress", "Completed"]).default("In Progress"),
  })
  .required();

export type TaskType = z.infer<typeof TaskSchema>;
