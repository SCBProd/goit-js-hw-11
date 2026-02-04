import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

// Створює галерею
const createGallery = images => {
  if (!gallery) return;

  const markup = images
    .map(img => `
      <li class="photo-card">
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
        </a>
        <div class="photo-info">
          <p><b>Likes:</b> ${img.likes}</p>
          <p><b>Views:</b> ${img.views}</p>
          <p><b>Comments:</b> ${img.comments}</p>
          <p><b>Downloads:</b> ${img.downloads}</p>
        </div>
      </li>
    `)
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
};

// Очищає галерею
const clearGallery = () => {
  if (!gallery) return;
  gallery.innerHTML = '';
};

// Показує лоадер
const showLoader = () => {
  if (!loader) return;
  loader.classList.remove('hidden');
};

// Ховає лоадер
const hideLoader = () => {
  if (!loader) return;
  loader.classList.add('hidden');
};

// Показує кнопку Load more
const showLoadMoreButton = () => {
  if (!loadMoreBtn) return;
  loadMoreBtn.classList.remove('hidden');
};

// Ховає кнопку Load more
const hideLoadMoreButton = () => {
  if (!loadMoreBtn) return;
  loadMoreBtn.classList.add('hidden');
};

export {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
};
