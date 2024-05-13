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
    creer_radio_carrousel(index);
    index = index + 1;
  }

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

      // Update the index variable
      this.index = index;

      carrousel.style.width = imgSelectionnee.naturalWidth + 'px';
      carrousel.style.height = imgSelectionnee.naturalHeight + 'px';


    });
  }

  carrousel__x.addEventListener('click', function () {
    carrousel.classList.remove('carrousel--ouvrir');
  });

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

      let imageSelectionnee = document.querySelector('.carrousel__img[data-index="' + this.value + '"]');
      imageSelectionnee.style.opacity = 1;
    });
  }

  let flecheGauche = document.querySelector('.carrousel__fleche-gauche');
  let flecheDroite = document.querySelector('.carrousel__fleche-droite');

  flecheGauche.addEventListener('click', function () {
    let indexDeLimageCourante = parseInt(document.querySelector('.carrousel__img[style="opacity: 1;"]').dataset.index);
    index = (indexDeLimageCourante - 1 + galerie__img.length) % galerie__img.length;
    changeImage(index);
  });

  flecheDroite.addEventListener('click', function () {
    let indexDeLimageCourante = parseInt(document.querySelector('.carrousel__img[style="opacity: 1;"]').dataset.index);
    index = (indexDeLimageCourante + 1) % galerie__img.length;
    changeImage(index);
  });

  function changeImage(index) {
    let carrousel__img = document.querySelectorAll('.carrousel__img');
    for (let img of carrousel__img) {
      img.style.opacity = 0;
    }

    let imageSelectionnee = document.querySelector('.carrousel__img[data-index="' + index + '"]');
    imageSelectionnee.style.opacity = 1;

    carrousel.style.width = imageSelectionnee.naturalWidth + 'px';
    carrousel.style.height = imageSelectionnee.naturalHeight + 'px';

    let radioSelectionnee = document.querySelector('input[type="radio"][value="' + index + '"]');
    radioSelectionnee.checked = true;
  }

})();
