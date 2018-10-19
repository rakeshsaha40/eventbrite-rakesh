function showCat(gifURL) {
    const numberOfCats = 4;
    const chosenCat = Math.floor(Math.random() * numberOfCats);
    var img = new Image();
    img.src = `/static/img/cat${chosenCat}.jpg`;
    const catHolder = document.querySelector('div#cat-holder');
    catHolder.appendChild(img);
}
showCat();
