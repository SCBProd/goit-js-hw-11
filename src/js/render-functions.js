import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox;
const loader = document.querySelector(".loader") 


// Створює галерею
const createGallery = images => {
  const gallery = document.querySelector('.gallery');
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

  gallery.innerHTML = markup;

  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captions: true,
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh(); 
  }
};

// Очищає галерею
function clearGallery() {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;
  gallery.innerHTML = '';
}

// Показує лоадер
function showLoader() {
  if (!loader) return;
  loader.classList.remove('hidden');
}

// Ховає лоадер
function hideLoader() {
  if (!loader) return;
  loader.classList.add('hidden');
}

export { createGallery, clearGallery, showLoader, hideLoader };
