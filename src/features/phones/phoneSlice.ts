import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { RootState } from '../../app/store';
import { ApiResponse } from '../../base/api';
import { getPhones, Phone } from './phonesApi';


export interface PhonesState {
  phones: Phone[];
  isFetching: boolean;
  isError: boolean;
  errorCode?: string;
}

const initialState: PhonesState = {
  phones: [],
  isFetching: false,
  isError: false,
}

export const listPhonesAsync = createAsyncThunk<
  { phones: Phone[] },
  void,
  { rejectValue: { errorCode?: string } }
>('phones/get-list', async (_, { rejectWithValue }) => {
  try {
    const { data } = await getPhones();

    return data;
  } catch (error) {
    const axiosError: AxiosError<ApiResponse> = error;
    if (!axiosError.response) {
      throw error;
    }

    return rejectWithValue({
      errorCode: axiosError.response.data.errorCode
    })
  }
})

export const phonesSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(listPhonesAsync.pending, state => {
        state.isFetching = true
      })
      .addCase(listPhonesAsync.fulfilled, (state, action) => {
        state.isFetching = false;
        state.phones = action.payload.phones
      })
      .addCase(listPhonesAsync.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;

        if (action.payload) {
          state.errorCode = action.payload.errorCode;
        }
      })
  }
})

export const phonesStateSelector = (state: RootState) => state.phones;

export default phonesSlice.reducer;