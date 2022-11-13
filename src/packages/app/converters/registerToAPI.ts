import { RegisterAPIValues, RegisterValues } from "../models";

export const registerToAPI = (data: RegisterValues): RegisterAPIValues => ({
  firstName: data.firstName,
  lastName: data.lastName,
  email: data.email,
  password: data.password,
  accountType: data.role,
});
