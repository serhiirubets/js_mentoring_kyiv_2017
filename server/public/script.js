const form = document.querySelector('.form');
const name = form.querySelector('[data-name]');
const brand = form.querySelector('[data-brand]');
const price = form.querySelector('[data-price]');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const request = new XMLHttpRequest();
  console.log(name);

  const json = JSON.stringify({
    name: name.value,
    brand: brand.value,
    price: price.value
  });

  request.open('POST', '/medicals/');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(json);

  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) return;

    console.log(request.statusText);
  });
});
