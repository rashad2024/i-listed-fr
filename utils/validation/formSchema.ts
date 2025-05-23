import { z } from "zod";

export const registerFormSchema = z.object({
  //   username: z.string().min(3, "Username must be at least 3 characters"),
  email: z
    .string({
      required_error: "Please enter a valid email",
    })
    .email({ message: "Please enter a valid email" }),
  role: z.string({
    required_error: "Please select a valid role",
  }),
});

export const loginFormSchema = z.object({
  //   username: z.string().min(3, "Username must be at least 3 characters"),
  email: z
    .string({
      required_error: "Please enter a valid email",
    })
    .email({ message: "Please enter a valid email" }),
  password: z.string({
    required_error: "Incorrect Password",
  }),
});
