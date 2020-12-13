export interface ICountry {
  name_en: string;
  name_es: string;
  dial_code: string;
  code: string;
}

export interface IUser {
  name: string;
  password: string;
  email?: string;
  country?: string;
}
