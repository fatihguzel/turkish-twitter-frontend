import { ApiENUM } from "./enum";

const createApiTypes = (namespace: string) => ({
  LOGIN: `${namespace}/login`,
  REGISTER: `${namespace}/register`,
  LOGOUT: `${namespace}/logout`,
  GET_PROFILE: `${namespace}/profile`,
  VERIFY_ACCOUNT: `${namespace}/confirm`,
});

export const authTypes = createApiTypes(ApiENUM.AUTH);
