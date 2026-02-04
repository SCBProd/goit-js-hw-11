import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const inputEl = document.querySelector('.inpt');
const formEl = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');

let query = '';
let page = 1;
const perPage = 15;

// Обробка форми
formEl.addEventListener('submit', async event => {
  event.preventDefault();

  query = inputEl.value.trim();
  if (!query) {
    iziToast.show({
      position: 'topRight',
      color: 'red',
      title: 'Error',
      message: 'Please enter a search query',
    });
    return;
  }

  page = 1;
  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (!data || data.hits.length === 0) {
      iziToast.show({
        position: 'topRight',
        color: 'red',
        title: 'Sorry',
        message: 'there are no images matching your search query. Please try again!',
        iconUrl: 'https://img.icons8.com/?size=100&id=12405&format=png&color=000000',
      });
      return;
    }

    createGallery(data.hits);

    if (data.totalHits > perPage) {
      showLoadMoreButton();
    }
  } catch {
    iziToast.show({
      position: 'topRight',
      color: 'red',
      title: 'Error',
      message: 'Something went wrong. Please try again later!',
    });
  } finally {
    hideLoader();
  }
});

// Обробка кнопки Load more
loadMoreBtn.addEventListener('click', async () => {
  page += 1;
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);

    const totalPages = Math.ceil(data.totalHits / perPage);
    if (page >= totalPages) {
      hideLoadMoreButton();
      iziToast.show({
        position: 'topRight',
        color: 'blue',
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

    // Прокрутка
    const cardHeight = document.querySelector('.gallery').firstElementChild.getBoundingClientRect().height;
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  } catch {
    iziToast.show({
      position: 'topRight',
      color: 'red',
      title: 'Error',
      message: 'Something went wrong. Please try again later!',
    });
  } finally {
    hideLoader();
  }
});
