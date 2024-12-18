const images = [
    {
      preview: 'https://www.akc.org/wp-content/uploads/2017/11/Siberian-Husky-standing-outdoors-in-the-winter.jpg',
      original: 'https://via.placeholder.com/600',
      description: 'Sample Image 1',
    },
    {
      preview: 'https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg',
      original: 'https://via.placeholder.com/600',
      description: 'Sample Image 2',
    },
    {
      preview: 'https://roxysdogranch.com/wp-content/uploads/2024/04/Golden-Retriever-Puppies.jpeg',
      original: 'https://via.placeholder.com/600',
      description: 'Sample Image 3',
    },
    {
        preview: 'https://dogtime.com/wp-content/uploads/sites/12/2023/07/GettyImages-182188522.jpg?w=1024',
        original: 'https://via.placeholder.com/600',
        description: 'Sample Image 4',
    },
    {
        preview: 'https://www.akc.org/wp-content/uploads/2017/11/Doberman-Pinscher-standing-outdoors.jpg',
        original: 'https://www.akc.org/wp-content/uploads/2017/11/Doberman-Pinscher-standing-outdoors.jpg',
        description: 'Sample Image 5',
    },
    {
        preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Patron_in_Ohmatdyt%2C_28_April_2022_%2804%29.jpg/640px-Patron_in_Ohmatdyt%2C_28_April_2022_%2804%29.jpg',
        original: 'https://via.placeholder.com/600',
        description: 'Sample Image 6',
    },
];
  
const galleryContainer = document.querySelector('.gallery');
  
const galleryMarkup = images.map(({ preview, original, description }) =>
    `<li class="gallery-item">
        <img src="${preview}" data-source="${original}" alt="${description}" />
     </li>`)
    .join('');
  
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') return;

  console.log(event.target.dataset.source);
}
