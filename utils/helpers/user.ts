import { retrieveUserRoles } from "@/features/services/authService";

export const getRoles = async () => {
  const userRoles = await retrieveUserRoles();

  const options: Array<{ label: string; value: string }> = [];
  if (userRoles?.data?.length) {
    userRoles.data.map((role: any) => {
      const { name, id } = role;
      options.push({ label: name, value: id });
    });
  }
  return options;
};
