export interface authSliceDTO {
  user: {
    id: number;
    username: string;
    email: string;
    isLogined: boolean;
    isBlocked: boolean;
    role: string;
    isConfirmed: boolean;
    confirmCode: string;
  };
}
