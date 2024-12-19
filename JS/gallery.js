const images = [
    {
      preview: './images/1.jpg',
      original: './images/1.jpg',
      description: 'Собака породи Хаскі',
    },
    {
      preview: './images/2.jpg',
      original: './images/2.jpg',
      description: 'Собака породи Бігль',
    },
    {
      preview: './images/3.jpg',
      original: './images/3.jpg',
      description: 'Собака породи Лабрадор',
    },
    {
        preview: './images/4.jpg',
        original: './images/4.jpg',
        description: 'Собака породи Мальтіпу',
    },
    {
        preview: './images/5.jpg',
        original: './images/5.jpg',
        description: 'Собака породи Доберман',
    },
    {
        preview: './images/6.jpg',
        original: './images/6.jpg',
        description: 'Собака породи Джекрасел тер\'єр',
    },
];
  
const galleryContainer = document.querySelector('.gallery');
  
const galleryMarkup = images
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery-item">
        <img src="${preview}" data-source="${original}" alt="${description}" class="gallery-image">
      </li>`
  )
  .join('');

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryClick);

// function onGalleryClick(event) {
//   event.preventDefault();

//   if (event.target.nodeName !== 'IMG') return;

//   console.log(event.target.dataset.source);
// }

function onGalleryClick(event) {
  event.preventDefault();

  const isImage = event.target.classList.contains('gallery-image');
  if (!isImage) return;

  const imageUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imageUrl}" alt="${event.target.alt}">
  `);

  instance.show();
}
