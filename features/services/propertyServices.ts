// features/auth/services/authService.ts
import axiosInstance from "../../utils/axios";

export const retrievePropertyOptions = async () => {
  try {
    const response = await axiosInstance.get("/properties/options");

    console.log(response.data);
    return response.data; // Return the response data
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message || "Property options retrieve failed");
  }
};
export const createPropertyService = async (propertyData: object) => {
  try {
    const response = await axiosInstance.post("/properties", propertyData);

    console.log(response.data);
    return response.data; // Return the response data
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message || "Property options retrieve failed");
  }
};
