const catList = document.querySelector('#categories');
const items = catList.querySelectorAll('.item');

// console.log(items);
// console.log(catList);
console.log('Number of categories:', items.length);

items.forEach((item) => {
  const catTitle = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li');
  console.log('Category:', catTitle);
  console.log('Elements:', elements.length);
});