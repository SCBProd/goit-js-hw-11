import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/'; 
const keyP = '54466384-09b1ba24b9e280fec4b671a93';
const getImagesByQuery = query =>
  axios.get('', {
    params: {
      key: keyP,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: false
    }
  })
    .then(response => {
		console.log(response.data);
      console.log(response.status);
      console.log(response.statusText);
      console.log(response.headers);
    console.log(response.config);
    return response.data
})
  	  .catch(error => console.log('Помилка запиту:', error));
    export { getImagesByQuery };