setInterval(() => {
let imgs = document.querySelectorAll("img");
for (let i of imgs) {
    i.src = 'https://www.collinsdictionary.com/images/full/cat_156310937.jpg';
}
}, 500);