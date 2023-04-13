import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryMarkup = document.querySelector(".gallery");

const galleryUsage = galleryItems
  .map(({ preview, original, description }) => {
    return `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
  })

  .join("");
galleryMarkup.insertAdjacentHTML("beforeend", galleryUsage);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
