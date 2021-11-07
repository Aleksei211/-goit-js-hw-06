const allCategories = document.querySelectorAll('.item');
console.log('Number of categories:', allCategories.length);

for (const item of allCategories) {
    console.log('Category:', item.querySelector('h2').textContent);
    console.log('Elements:', item.querySelectorAll('li').length);
};