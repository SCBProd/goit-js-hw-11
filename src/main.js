import { getImagesByQuery } from './js/pixabay-api'
import { createGallery, showLoader, hideLoader } from './js/render-functions';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let images;
const inputEl = document.querySelector('.inpt');
const btnSearch = document.querySelector('.inptButton');

btnSearch.addEventListener('click', event => {
    event.preventDefault();
    showLoader();
    const query = inputEl.value;
    if (!query) return;

    
   

    getImagesByQuery(query).then(data => {
        images = data;
        if (images.hits.length === 0) {
             hideLoader();
            iziToast.show({
                position: 'topRight',
                color: 'red',
                title: 'Sorry',
                message: 'there are no images matching your search query.Please try again!',
                iconUrl: 'https://img.icons8.com/?size=100&id=12405&format=png&color=000000',
            });
        }

 

        else {
            createGallery(images.hits);
            hideLoader(); 
        }
        
    });
    
});