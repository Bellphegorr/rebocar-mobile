export interface Provider {
  fetchUser: (accessToken: string) => Promise<UserProviderResponse>;
}

export interface UserProviderResponse {
  email: string;
  email_verified: boolean;
  family_name: string;
  given_name: string;
  locale: string;
  name: string;
  picture: string;
  sub: string;
}
