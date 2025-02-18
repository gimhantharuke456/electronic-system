import instance from "./instance";

export const userApi = {
  getAll: () => instance.get("/users"),
  getById: (id) => instance.get(`/users/${id}`),
  create: (data) => instance.post("/users", data),
  update: (id, data) => instance.put(`/users/${id}`, data),
  delete: (id) => instance.delete(`/users/${id}`),
  // Additional user-specific endpoints
  login: (credentials) => instance.post("/users/login", credentials),
  register: (userData) => instance.post("/users/register", userData),
  updateProfile: (id, data) => instance.patch(`/users/${id}/profile`, data),
  changePassword: (id, passwords) =>
    instance.post(`/users/${id}/change-password`, passwords),
};
