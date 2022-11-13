export interface Auth {
  isAuthorised: boolean;
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
}

export interface RegisterAPIValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  accountType: string;
}

export interface RegisterValues {
  firstName: string;
  lastName: string;
  password: string;
  role: string;
  email: string;
}

export interface LoginAPIValues {
  email: string;
  password: string;
}

export interface LoginValues {
  email: string;
  password: string;
  invalid?: string;
}
