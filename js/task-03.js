const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
  // const container = document.querySelector('.gallery');
  // const cardMarkup = createMarkup(images);

  // container.insertAdjacentHTML('beforeend', cardMarkup)

  // function createMarkup(images) {
  //   return images
  //     .map(({ url, alt }) => {
  //     return `<li>
  //     <img
  //     src="${url}"
  //     alt="${alt}"
  //     width="100%"
  //     >
  //     </li>`;
  //   })
  //     .join('');
    
  // }
  // console.log(cardMarkup)

const gallery = document.querySelector('.gallery')

const createMarkup = images.map(({ url, alt }) => {
  return `<li><img
  src = '${url}'
  alt = '${alt}'
  width = '100%'
  ></li>`
}).join('');
//console.log(markup)
gallery.insertAdjacentHTML('beforeend', createMarkup);