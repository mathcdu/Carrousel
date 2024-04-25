(function () {
  let carrousel = document.querySelector('.carrousel');
  let carrousel__x = document.querySelector('.carrousel__x');

  let galerie = document.querySelector('.galerie');
  let carrousel__figure = document.querySelector('.carrousel__figure');
  let galerie__img = galerie.querySelectorAll('img');

  let radioContainer = document.querySelector('.carrousel__form');

  let index = 0;
  for (const elm of galerie__img) {
    creer_image_carrousel(index, elm);
    creer_radio_carrousel(index); // corrected function name
    index = index + 1;
  }

  /**
   * Créer une image du carrousel à partir d'une image de la galerie
   * @param {*} index Numéro de l'image
   * @param {*} elm Images de la galerie
  */

  function creer_image_carrousel(index, imgGalerie) {
    let imgCarrousel = document.createElement('img');
    imgCarrousel.classList.add('carrousel__img');
    imgCarrousel.dataset.index = index;
    imgCarrousel.src = imgGalerie.src;
    carrousel__figure.appendChild(imgCarrousel);

    imgGalerie.addEventListener('click', function () {
      carrousel.classList.add('carrousel--ouvrir');
      let imagesCarrousel = document.querySelectorAll('.carrousel__img');
      for (let img of imagesCarrousel) {
        img.style.opacity = 0;
      }
      let imgSelectionnee = document.querySelector('.carrousel__img[data-index="' + index + '"]');
      imgSelectionnee.style.opacity = 1;

      // Mettre à jour la sélection du bouton radio
      let radioSelectionnee = document.querySelector('input[type="radio"][value="' + index + '"]');
      radioSelectionnee.checked = true;
    });
  }

  carrousel__x.addEventListener('mousedown', function () {
    carrousel.classList.remove('carrousel--ouvrir');
  });

  /**
   * Créer un bouton radio pour le carrousel
   * @param {*} index Index du bouton radio
   */

  function creer_radio_carrousel(index) {
    // Créer input radio
    let radio = document.createElement('input');
    // Modifier le type
    radio.type = 'radio';
    // Modifier le name
    radio.name = 'carrousel';
    // Modifier la valeur
    radio.value = index;
    // Ajouter le radio button au formulaire
    radioContainer.appendChild(radio);

    radio.addEventListener('change', function () {
      let carrousel__img = document.querySelectorAll('.carrousel__img');
      for (let img of carrousel__img) {
        img.style.opacity = 0;
      }

      let selectedImg = document.querySelector('.carrousel__img[data-index="' + this.value + '"]');
      selectedImg.style.opacity = 1;
    });
  }
})();
