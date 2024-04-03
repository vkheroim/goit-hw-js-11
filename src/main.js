import { searchImages } from './js/pixabay-api.js';
import { renderImages, showAlert } from './js/render-functions.js';

const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const gallery = document.getElementById('gallery');
const loader = document.getElementById('loader');

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (query === '') return;
  loader.style.display = 'block';
  gallery.innerHTML = '';
  try {
    const images = await searchImages(query);
    if (images.length === 0) {
      showAlert('No images found. Please try again.');
    } else {
      renderImages(images, gallery);
    }
  } catch (error) {
    showAlert(
      'An error occurred while fetching images. Please try again later.'
    );
  }
  loader.style.display = 'none';
});

// Initialize SimpleLightbox or any other functionality here if needed
