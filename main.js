const catImage = document.querySelector("img");

catImage.onclick = () => {
    const catSrc = catImage.getAttribute("src");
    if(catSrc === "images/cat.png"){
        catImage.setAttribute("src", "images/cat1.png");
    }
    else{
        catImage.setAttribute("src", "images/cat.png");
    }
};