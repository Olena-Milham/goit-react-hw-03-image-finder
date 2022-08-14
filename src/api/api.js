import axios from 'axios';
import { BASE_URL, KEY } from 'constants/api';

export const api = axios.create({
  baseUrl: BASE_URL,
  params: {
    key: KEY,
  },
});
