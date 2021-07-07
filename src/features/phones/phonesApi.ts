import { ApiResponse, baseApi } from '../../base/api';

export interface Phone {
  name: string;
  manufacturer: string;
  description: string;
  color: string;
  price: number;
  imageFileName: string;
  screen: string;
  processor: string;
  ram: number;
}

interface GetPhoneResponse extends ApiResponse {
  data: {
    phones: Phone[];
  }
}

export const getPhones = async (): Promise<GetPhoneResponse> => {
  const { data } = await baseApi.get<GetPhoneResponse>('/phones');

  return data;
};