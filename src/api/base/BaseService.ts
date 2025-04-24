import axiosInstance from "../../services/axiosInstance";

export abstract class BaseService {
  protected axios = axiosInstance;

  protected get<T>(url: string, config = {}) {
    return this.axios.get<T>(url, config);
  }

  protected post<T>(url: string, data: unknown, config = {}) {
    return this.axios.post<T>(url, data, config);
  }

  protected put<T>(url: string, data: unknown, config = {}) {
    return this.axios.put<T>(url, data, config);
  }

  protected delete<T>(url: string, config = {}) {
    return this.axios.delete<T>(url, config);
  }
}
