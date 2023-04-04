import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryElements = galleryItems
  .map(({ preview, original, description }) => {
    return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}" 
      data-source="${original}" 
      alt="${description}" 
    />
  </a>
</li>`;
  })
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryElements);

gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
  const waySrc = event.target.dataset.source;
  const instance = basicLightbox.create(
    `  
    <img src="${waySrc}" width="800" height="600"> 
`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );
  instance.show();
  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
});
console.log(galleryItems);
