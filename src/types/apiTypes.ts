import { ApiENUM } from "./enum";

const createApiTypes = (namespace: string) => ({
  LOGIN: `${namespace}/login`,
  LOGOUT: `${namespace}/logout`,
  GET_PROFILE: `${namespace}/profile`,
});

export const authTypes = createApiTypes(ApiENUM.AUTH);
