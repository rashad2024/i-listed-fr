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

export const createDraftPropertyService = async (propertyData: object) => {
  try {
    const response = await axiosInstance.post(
      "/properties/drafts",
      propertyData
    );

    console.log(response.data);
    return response.data; // Return the response data
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message || "Property options retrieve failed");
  }
};

export const retrievePropertyData = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/properties/${id}`);

    console.log(response.data);
    return response.data; // Return the response data
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message || "Property options retrieve failed");
  }
};

export const deletePropertyService = async (id: string) => {
  try {
    const response = await axiosInstance.delete("/properties/" + id);

    console.log(response.data);
    return response.data; // Return the response data
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message || "Property options retrieve failed");
  }
};

export const fetchPropertiesServices = async (
  page: number,
  filterData: any
) => {
  try {
    console.log(filterData);
    const response = await axiosInstance.get(`/properties/?page=${page}`, {
      params: filterData,
    });

    console.log(response.data);
    return response.data; // Return the response data
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message || "Property options retrieve failed");
  }
};
export const batchDeleteService = async (propertyIds: any) => {
  try {
    const response = await axiosInstance.delete(`/properties/bulk`, {
      data: propertyIds,
    });

    console.log(response.data);
    return response.data; // Return the response data
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message || "Property options retrieve failed");
  }
};
