import { toast } from 'react-toastify';
import { api } from './api';

export const getImages = async (page, q) => {
  try {
    const response = await api.get('', {
      params: {
        page,
        q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: '12',
      },
    });
    return response;
  } catch (error) {
    toast.error(error);
  }
};
