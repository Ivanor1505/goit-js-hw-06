const catList = document.querySelector('#categories');
const items = catList.children;

// console.log(items);
// console.log(catList);
console.log('Number of categories:', items.length);

for (let i = 0; i < items.length; i+=1) {
  const item = items[i];
  const catTitle = item.firstElementChild.textContent;
  const elements = item.lastElementChild.children;
  console.log('Category:', catTitle);
  console.log('Elements:', elements.length);
};