const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const listItems = ingredients.map((ingredient) => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  return listItem;
});

ingredientsList.append(...listItems);


// const listItems = ingredients.forEach((ingredient) => { 
//   const item = document.createElement("li");
//   item.textContent = ingredient;
//   ingredientsList.append(item);
//   item.classList.add('item');
//   return item;
// })

