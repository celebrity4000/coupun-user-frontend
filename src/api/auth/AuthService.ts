import { BaseService } from "../base/BaseService";

interface LoginPayload {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
  user: string; // adjust to your actual user type
}

class AuthService extends BaseService {
  login(payload: LoginPayload) {
    return this.post<LoginResponse>("/login", payload);
  }

  register(data: { username: string; password: string; email: string }) {
    return this.post("/register", data);
  }

  getProfile() {
    return this.get("/profile");
  }
}

export const authService = new AuthService();
