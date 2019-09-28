const animalWidget = (function() {
  let animalContainer;
  let animals;
  let activeAnimal;
  let moveButton;
  let createButton;
  let counter = 0;
  
  function init() {
    animalContainer = document.querySelector('.animal-container');
    moveButton = document.querySelector('.js-animal-move-button');
    createButton = document.querySelector('.js-animal-create-button');

    getAnimals();
    addEvents();
  }

  function getAnimals() {
    animals = document.querySelectorAll('.animal');
  }

  function getActiveAnimal() {
    activeAnimal = document.querySelector('.animal--active')
  }

  function addEvents() {
    animals.forEach(addAnimalEvents)
    
    createButton.addEventListener('click', function() {
      let newAnimal = document.createElement('li');
      counter++;
      newAnimal.classList.add('animal');
      newAnimal.textContent = `Новое животное ${counter}`;
      animalContainer.appendChild(newAnimal);

      addAnimalEvents(newAnimal);
      getAnimals();
    });

    moveButton.addEventListener('click', function() {
      if (!activeAnimal) return;

      activeAnimal.style.top = null;
      activeAnimal.style.left = null;
      activeAnimal.classList.toggle('animal--movable');
    })

    document.addEventListener('click', function(e) {
      if (!activeAnimal) return;
      const { clientX, clientY } = e;
      const { top, left } = animalContainer.getBoundingClientRect();

      activeAnimal.style.top = clientY - top;
      activeAnimal.style.left = clientX - left;
    });
  }

  function addAnimalEvents(animalElement) {
    animalElement.addEventListener('click', function() {
      const isActive = animalElement.classList.contains('animal--active');

      animals.forEach((el) => {
        el.classList.remove('animal--active');
      });

      if (isActive) {
        animalElement.classList.remove('animal--active');
      } else {
        animalElement.classList.add('animal--active');
      }
      
      getActiveAnimal();
    });
  }

  return {
    init
  }
})();

document.addEventListener('DOMContentLoaded', function() {
  animalWidget.init();
});