import axios from "axios";

interface AuthProps {
  email: string;
  password: string;
}

interface AuthResponse {
  user: any;
  token: string;
}
export async function signIn(
  email: string,
  password: string
): Promise<AuthResponse> {
  const response = await axios.post("http://192.168.2.145:3333/login", { email, password });
  const { user, token } = response.data;
  return { user, token };
}
