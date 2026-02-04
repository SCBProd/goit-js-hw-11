import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const keyP = '54466384-09b1ba24b9e280fec4b671a93';

const getImagesByQuery = async (query, page) => {
  try {
    const response = await axios.get('', {
      params: {
        key: keyP,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page: page
      }
    });

    return response.data;
  } catch (error) {
    console.log('Помилка запиту:', error);
  }
};

export { getImagesByQuery };
