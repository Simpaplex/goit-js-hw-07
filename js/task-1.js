const createList = arr => {
  console.log(`Number of categories: ${arr.length}`);
  arr.forEach(function (element) {
    console.log(
      `Category: ${element.querySelector('.categories-item-title').textContent}`
    );
    console.log(
      `Elements: ${
        element.querySelectorAll('.categories-item-list-elem').length
      }`
    );
  });
};

createList(document.querySelectorAll('.categories-item'));
