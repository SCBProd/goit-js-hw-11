import { getImagesByQuery } from './js/pixabay-api'
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let images;
const inputEl = document.querySelector('.inpt');
const btnSearch = document.querySelector('.inptButton');

btnSearch.addEventListener('click', event => {
  event.preventDefault();

  const query = inputEl.value.trim();
  if (!query) {
    iziToast.show({
      position: 'topRight',
      color: 'red',
      title: 'Error',
      message: 'Please enter a search query',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      images = data;

      if (images.hits.length === 0) {
        iziToast.show({
          position: 'topRight',
          color: 'red',
          title: 'Sorry',
          message: 'there are no images matching your search query.Please try again!',
          iconUrl: 'https://img.icons8.com/?size=100&id=12405&format=png&color=000000',
        });
        return;
      }

      createGallery(images.hits);
    })
    .catch(() => {
      iziToast.show({
        position: 'topRight',
        color: 'red',
        title: 'Error',
        message: 'Something went wrong. Please try again later!',
      });
    })
    .finally(() => {
      hideLoader();
    });
});
