import http from "./httpService";
import { apiUrl } from "../config.json";
import { func } from "prop-types";
const apiEndpoint = apiUrl + "users/registration";
console.log(apiEndpoint, "kjkjkljkljkljklj");

export function register(user) {
  console.log(user);
  return http.post(apiEndpoint, {
    name: user.Name,
    email: user.username,
    password: user.password,
  });
}
