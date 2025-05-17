import { z } from "zod";

export const propertyFormSchema = z
  .object({
    //   username: z.string().min(3, "Username must be at least 3 characters"),

    title: z.string({ required_error: "Please enter a valid title" }),
    categoryId: z.string({ required_error: "Please select a category" }),
    ownershipTypeId: z.string({
      required_error: "Please select a valid ownership type",
    }),
    subcategoryId: z.string({ required_error: "Please select a subcategory" }),
    transactionTypeId: z.string({
      required_error: "Please select a transaction type",
    }),
    propertyStatusId: z.string({
      required_error: "Please select a property status",
    }),
    landSize: z.string({ required_error: "Please enter a valid land size" }),
    builtUpArea: z.string({
      required_error: "Please enter a valid built up area",
    }),
    address: z.string({ required_error: "Please enter a valid address" }),
    location: z.string({ required_error: "Please enter a valid location" }),
    zipCode: z.string({ required_error: "Please enter a valid zip code" }),
    googleMapLink: z.string({
      required_error: "Please enter a valid google map link",
    }),
    roadAccessId: z.string({
      required_error: "Please select a valid Road access type",
    }),
    landUnitId: z.string({ required_error: "Please select a valid unit" }),
    totalPrice: z.string({
      required_error: "Please enter a valid total price",
    }),
    pricePerYear: z
      .number()
      .min(0, { message: "Price per year cannot be negative" })
      .optional(),
    // pricePerUnit: z
    //   .number()
    //   .min(0, { message: "Price per unit cannot be negative" })
    //   .optional(),
    beds: z.string().optional(),
    baths: z.string().optional(),
    showPreview: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    const categoryIds = ["2", "3", "4"];

    const requiresBed = !categoryIds.includes(data.categoryId);

    if (requiresBed) {
      if (!data.beds) {
        ctx.addIssue({
          code: "custom",
          message: "Please enter a valid number of beds",
          path: ["beds"],
        });
      }

      if (!data.baths) {
        ctx.addIssue({
          code: "custom",
          message: "Please enter a valid number of beds",
          path: ["baths"],
        });
      }
    }
  });
