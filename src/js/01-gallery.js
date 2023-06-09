"use strict";

import { galleryItems } from "./gallery-items.js";

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const makeGalleryCard = ({ preview, original, description }) =>
  `<li class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;

const markup = galleryItems.map((el) => makeGalleryCard(el)).join("");

galleryEl.insertAdjacentHTML("afterbegin", markup);
console.log(galleryEl);

galleryEl.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  const largeImageUrl = e.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${largeImageUrl}" width="800" height="600">`
  );
  instance.show();

  document.body.addEventListener("keyup", (e) => {
    if (e.key === "Escape") {
      instance.close();
    }
  });
});