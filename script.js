function About_page(){
    window.location.href = "About.html";
}

function p1(){
    window.open("https://github.com/AMK210821/College-Project/tree/main/Smart%20Cane")
}

function p2(){
    window.open("https://github.com/AMK210821/portfoliowebsite")
}

let images = [
    "imgs/A Manoj Kumar - Participation Certificate (1)_page-0001.jpg", 
    "imgs/Certificate - 2025-01-24T235914.360.jpg"
];

let index = 0;
let imgElement = document.getElementById("image");

function nextImage() {
    imgElement.style.transform = "translateX(100%)"; // Move out
    imgElement.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % images.length;
        imgElement.src = images[index];
        imgElement.style.transform = "translateX(-100%)"; // Move new image in
    }, 500);

    setTimeout(() => {
        imgElement.style.transform = "translateX(0%)";
        imgElement.style.opacity = 1;
    }, 600);
}

function prevImage() {
    imgElement.style.transform = "translateX(-100%)"; // Move out
    imgElement.style.opacity = 0;

    setTimeout(() => {
        index = (index - 1 + images.length) % images.length;
        imgElement.src = images[index];
        imgElement.style.transform = "translateX(100%)"; // Move new image in
    }, 500);

    setTimeout(() => {
        imgElement.style.transform = "translateX(0%)";
        imgElement.style.opacity = 1;
    }, 600);
}

function i1(){
    window.open("https://drive.google.com/file/d/1Y9zTu7mv0pG41H2H7g8FAS_LW3hFD1aV/view?usp=sharing")
}

function i2(){
    window.open("https://www.linkedin.com/in/amindyala-manoj-kumar-335410293/overlay/about-this-profile/")
}

function i3(){
    window.open("https://github.com/AMK210821")
}

function i4(){
    window.open("https://mail.google.com/mail/u/0/#inbox?compose=new")
}


function i5(){
    window.open("https://www.instagram.com/amk2_10821?igsh=MWdlczc1ZjdmOXNlcQ==")
}

