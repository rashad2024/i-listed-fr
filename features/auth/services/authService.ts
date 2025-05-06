// features/auth/services/authService.ts
import axiosInstance from "../../../utils/axios";

export const loginService = async (
  email: string,
  password: string,
  rememberMe?: boolean
) => {
  try {
    const userData = { email, password, rememberMe };

    const response = await axiosInstance.post("/auth/login", userData);
    const authData = response.data;

    console.log(response.data);
    if (rememberMe) {
      localStorage.setItem("authUser", JSON.stringify(authData));
    }

    return authData; // Return the response data
  } catch (error: any) {
    throw new Error(error.message || "Login failed");
  }
};

export const logoutService = async () => {
  try {
    await axiosInstance.post("/logout");
    return true; // Log out successful
  } catch (error: any) {
    throw new Error(error.message || "Logout failed");
  }
};

// export const retrieveUserRoles = async () => {
//   try {
//     const response = await axiosInstance.get("/auth/login");
//     const roleData = response.data;

//     console.log(response.data);

//     return roleData; // Return the response data
//   } catch (error: any) {
//     throw new Error(error.message || "User role retrieve failed");
//   }
// };
