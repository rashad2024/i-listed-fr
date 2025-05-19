import { z } from "zod";

export const propertyFormSchema = z.object({
  title: z
    .string({ required_error: "Please enter a title" })
    .nonempty("Please enter a valid title")
    .min(3, "Title must be at least 3 characters long"),
  categoryId: z
    .string({ required_error: "Please select a category" })
    .nonempty("Please select a category"),
  ownershipTypeId: z
    .string({ required_error: "Please select a ownership type" })
    .nonempty("Please select a valid ownership type"),
  subcategoryId: z
    .string({ required_error: "Please select a subcategory" })
    .nonempty("Please select a subcategory"),
  transactionTypeId: z
    .string({ required_error: "Please select a transaction type" })
    .nonempty("Please select a transaction type"),
  propertyStatusId: z
    .string({ required_error: "Please select a property status" })
    .nonempty("Please select a property status"),
  landSize: z
    .string({ required_error: "Please enter a land size" })
    .nonempty("Please enter a valid land size"),
  builtUpArea: z
    .string({ required_error: "Please enter a built up area" })
    .nonempty("Please enter a valid built up area"),
  address: z
    .string({ required_error: "Please enter an address" })
    .nonempty("Please enter a valid address")
    .min(3, "Address must be at least 3 characters long"),
  location: z
    .string({ required_error: "Please enter a location" })
    .nonempty("Please enter a valid location"),
  zipCode: z
    .string({ required_error: "Please enter a zip code" })
    .nonempty("Please enter a valid zip code"),
  googleMapLink: z
    .string({ required_error: "Please enter a google map link" })
    .nonempty("Please enter a valid google map link"),
  roadAccessId: z
    .string({ required_error: "Please select a road access" })
    .nonempty("Please select a valid road access"),
  landUnitId: z
    .string({ required_error: "Please select a land unit" })
    .nonempty("Please select a valid land unit"),
  totalPrice: z
    .string({ required_error: "Please enter a total price" })
    .nonempty("Please enter a valid total price"),
  beds: z
    .string({ required_error: "Please enter a number of beds" })
    .nonempty("Please enter a valid number of beds"),
  baths: z.string().nonempty("Please enter a valid number of baths"),
  showPreview: z.boolean().optional(),
});

export const validateForm = (formData: any, Schema: any) => {
  const result = Schema?.safeParse(formData);

  const validationMessage: any = {};

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    Object.keys(errors).forEach((key) => {
      if (
        formData.categoryId &&
        formData.categoryId != "1" &&
        (key == "baths" || key == "beds")
      ) {
      } else {
        validationMessage[key] = { message: errors[key][0] };
      }
    });
  }

  return validationMessage;
};
