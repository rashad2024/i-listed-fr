// features/auth/services/authService.ts
import axiosInstance from "../../utils/axios";

export const retrievePropertyOptions = async () => {
  try {
    const response = await axiosInstance.get("/properties/options");

    return response.data; // Return the response data
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message || "Property options retrieve failed");
  }
};
export const createPropertyService = async (
  propertyData: object,
  propertyId?: string
) => {
  try {
    const response = await axiosInstance.post("/properties", propertyData);
    return response.data; // Return the response data
  } catch (error: any) {
    console.log("add: ", error);
    throw new Error(error.message || "Create property failed");
  }
};

export const createDraftPropertyService = async (propertyData: object) => {
  try {
    const response = await axiosInstance.post(
      `/properties/drafts`,
      propertyData
    );
    return response.data; // Return the response data
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message || "Property options retrieve failed");
  }
};
export const updateDraftPropertyService = async (
  propertyId: string,
  propertyData: object
) => {
  try {
    const response = await axiosInstance.put(
      `/properties/drafts/${propertyId}`,
      propertyData
    );
    return response.data; // Return the response data
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message || "Draft property update failed");
  }
};
export const updatePropertyService = async (
  propertyId: string,
  propertyData: object
) => {
  try {
    const response = await axiosInstance.put(
      `/properties/${propertyId}`,
      propertyData
    );
    return response.data; // Return the response data
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message || "Property update failed");
  }
};

export const retrievePropertyData = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/properties/${id}`);
    return response.data; // Return the response data
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message || "Property options retrieve failed");
  }
};

export const deletePropertyService = async (id: string) => {
  try {
    const response = await axiosInstance.delete("/properties/" + id);

    return response.data; // Return the response data
  } catch (error: any) {
    console.log(error);
    throw new Error(error.message || "Property options retrieve failed");
  }
};

export const fetchPropertiesServices = async (
  page: number,
  filterData: any,
  status?: string
) => {
  try {
    const url = status
      ? `/properties/${status}?page=${page}`
      : `/properties/?page=${page}`;

    console.log(url, status);
    const response = await axiosInstance.get(url, {
      params: filterData,
    });

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
