import { LoginAPIValues, LoginValues } from "../models";

export const loginToAPI = (data: LoginValues): LoginAPIValues => ({
  email: data.email,
  password: data.password,
});
