import { z } from "zod";

export const propertyFormSchema = z.object({
  //   username: z.string().min(3, "Username must be at least 3 characters"),

  title: z.string({ required_error: "Please enter a valid title" }),
  category: z.string({ required_error: "Please select a category" }),
  subcategories: z.string({ required_error: "Please select a subcategory" }),
  ownershipType: z.string({ required_error: "Please select a ownership type" }),
  transactionType: z.string({
    required_error: "Please select a transaction type",
  }),
  propertyStatus: z.string({
    required_error: "Please select a property status",
  }),
  landSize: z.string({ required_error: "Please enter a valid land size" }),
  builtUpArea: z.string({
    required_error: "Please enter a valid built up area",
  }),
  address: z.string({ required_error: "Please enter a valid address" }),
  location: z.string({ required_error: "Please enter a valid location" }),
  zipCode: z.string({ required_error: "Please enter a valid zip code" }),
  totalPrice: z.string({ required_error: "Please enter a valid total price" }),
  beds: z.string({ required_error: "Please enter a valid number of beds" }),
  baths: z.string({ required_error: "Please enter a valid number of baths" }),
});
