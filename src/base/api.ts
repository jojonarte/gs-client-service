import axios from 'axios'

export interface ApiResponse {
  success: boolean;
  message?: string;
  errorCode?: string;
  data: Record<string, unknown>;
}

export const baseApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})