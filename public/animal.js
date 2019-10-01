const animalWidget = (function() {
  let $document = $(document);
  let $animalContainer;
  let $animals;
  let $activeAnimal;
  let $moveButton;
  let $createButton;
  let counter = 0;
  
  function init() {
    $animalContainer = $('.animal-container');
    $moveButton = $('.js-animal-move-button');
    $createButton = $('.js-animal-create-button');

    getAnimals();
    getActiveAnimal();
    addEvents();
  }

  function getAnimals() {
    $animals = $('.animal');
  }

  function getActiveAnimal() {
    $activeAnimal = $('.animal--active');
  }

  function addEvents() {
    $animals.each((i, el) => addAnimalEvents($(el)))
    
    $createButton.on('click', function() {
      counter++;
      let $newAnimal = $(
        `<li />`,
        { class: 'animal', text: `Новое животное ${counter}` }
      );
      
      $animalContainer.append($newAnimal);

      addAnimalEvents($newAnimal);
      getAnimals();
    });

    $moveButton.on('click', function() {
      if ($activeAnimal.length === 0) return;

      $activeAnimal.css({
        top: null,
        left: null
      });
      $activeAnimal.toggleClass('animal--movable');
    })

    $document.on('click', function(e) {
      if ($activeAnimal.length === 0) return;
      const { clientX, clientY } = e;
      const { top, left } = $animalContainer.offset();

      $activeAnimal.css({
        top: clientY - top,
        left:  clientX - left
      });
    });
  }

  function addAnimalEvents($animalElement) {
    $animalElement.click(() => {
      const isActive = $animalElement.hasClass('animal--active');

      $animals.each((index, el) => {
        $(el).removeClass('animal--active');
      });

      if (isActive) {
        $animalElement.removeClass('animal--active');
      } else {
        $animalElement.addClass('animal--active');
      }
      
      getActiveAnimal();
    });

    $animalElement.tooltip('New animal!');
  }

  return {
    init
  }
})();

$(document).ready(() => {
  animalWidget.init();
});
