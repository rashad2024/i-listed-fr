import { z } from "zod";

export const propertyFormSchema = z.object({
  title: z
    .string()
    .nonempty("Please enter a valid title")
    .min(3, "Title must be at least 3 characters long"),
  categoryId: z.string().nonempty("Please select a category"),
  ownershipTypeId: z.string().nonempty("Please select a valid ownership type"),
  subcategoryId: z.string().nonempty("Please select a subcategory"),
  transactionTypeId: z.string().nonempty("Please select a transaction type"),
  propertyStatusId: z.string().nonempty("Please select a property status"),
  landSize: z.string().nonempty("Please enter a valid land size"),
  builtUpArea: z.string().nonempty("Please enter a valid built up area"),
  address: z
    .string()
    .nonempty("Please enter a valid address")
    .min(3, "Address must be at least 3 characters long"),
  location: z.string().nonempty("Please enter a valid location"),
  zipCode: z.string().nonempty("Please enter a valid zip code"),
  googleMapLink: z.string().nonempty("Please enter a valid google map link"),
  roadAccessId: z.string().nonempty("Please select a valid road access"),
  landUnitId: z.string().nonempty("Please select a valid land unit"),
  totalPrice: z.string().nonempty("Please enter a valid total price"),
  beds: z.string().nonempty("Please enter a valid number of beds"),
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
