import { IDTO } from "@/http/DTO/IDTO";

export interface UserDTO extends IDTO<string> {
  name: string;
  role: string;
  email: string;
  password: string;
}

export interface UserUpdateDTO extends IDTO<string> {
  name?: string;
  role?: string;
  email?: string;
  password?: string;
}