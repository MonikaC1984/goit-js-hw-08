// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const photoPalette = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    img => `<div class="gallery__item">
    <a class="gallery__link" href="${img.original}">
      <img
        class="gallery__image"
        src="${img.preview}"
            data-source="${img.original}"
             alt="${img.description}"
      />
    </a>
  </div>`
  )
  .join('');

photoPalette.insertAdjacentHTML('afterbegin', markup);
let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
