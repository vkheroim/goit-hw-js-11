export function renderImages(images, container) {
  container.innerHTML = '';
  images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = image.webformatURL;
    imgElement.alt = image.tags;
    imgElement.dataset.large = image.largeImageURL;
    container.appendChild(imgElement);
  });
}

export function showAlert(message) {
  alert(message);
}
