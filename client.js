const btnElement = document.querySelector('button');
const divElement = document.querySelector('div');

btnElement.addEventListener('click', () => {
   fetch('http://localhost:3000').then(res => {
      return res.json();
   }).then(data => {
      console.log(data);
   })
});
