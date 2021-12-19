export interface IPostChallenge {
  name: string;
  workout: number;
  message: string;
}

export interface IAuth {
  token: string;
  user: string;
}

export interface ICredentials {
  username: string;
  password: string;
}

export interface IUserInfo {
  address: string;
  authType: number;
  description: string;
  email: string;
  photo: string;
  title: string;
  firstName: string;
  lastName: string;
  status: number;
  weight: number;
  height: number;
  validFrom: string;
  validTo: string;
  id: string;
}

export interface IContacts {
  contacts: IUserInfo[];
}
