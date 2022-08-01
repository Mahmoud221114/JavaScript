// check if there local storage color option
let mainColors = localStorage.getItem("color_option");

// check if there local storage background option
let mainBackground = localStorage.getItem("background_option")

// // random background opiton
// let backgroundOption = true;

// // variable to control the interval
// let backgroundInterval;
// local storage color
if (mainColors !== null) {
    document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));

    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");

        if (element.dataset.color === mainColors) {
            element.classList.add("active");
        };
    });

};
// local storage background

if (mainBackground !== null) {
    document.documentElement.style.setProperty('--main-background', localStorage.getItem("background_option"));

    document.querySelectorAll(".background-list img").forEach(element => {
        element.classList.remove("active");

        if (element.dataset.imge === mainBackground) {
            element.classList.add("active");
        };
    });

};

// toggle spin class on icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    // toggle class fa-spin change
    this.classList.toggle("fa-spin");
    // toggle class open change
    document.querySelector(".settings-box").classList.toggle("open");
};


// switch colors
let colorsLi = document.querySelectorAll(".colors-list li");
// loop li lest
colorsLi.forEach(li => {
    li.addEventListener("click", (e) => {
        // set color on root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
        // set color on localstorage
        localStorage.setItem("color_option", e.target.dataset.color);

        // remove active class from all childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        // add active class
        e.target.classList.add("active");
    });
});

// switch colors
let backgroundLi = document.querySelectorAll(".background-list img");
// loop li lest
backgroundLi.forEach(img => {
    img.addEventListener("click", (e) => {
        // set color on root
        document.documentElement.style.setProperty('--main-background', e.target.dataset.imge);
        // set color on localstorage
        localStorage.setItem("background_option", e.target.dataset.imge);

        // remove active class from all childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        // add active class
        e.target.classList.add("active");
    });
});

// // switch background option
// let randomBackgroundEl = document.querySelectorAll(".random-backgrounds span");
// // loop span
// randomBackgroundEl.forEach(span => {
//     span.addEventListener("click", (e) => {
//         // remove active class from all childrens
//         e.target.parentElement.querySelectorAll(".active").forEach(element => {
//             element.classList.remove("active");
//         });
//         // add active class
//         e.target.classList.add("active");

//         if (e.target.dataset.background === 'yes') {

//             backgroundOption = true;

//             randomizeImgs();

//             localStorage.setItem("background_option", true);

//         } else {

//             backgroundOption = false;

//             clearInterval(backgroundInterval);

//             localStorage.setItem("background_option", false);

//         }
//     });
// });




// select landing page element
// let landingPag = document.querySelector(".landing-page");

// // get array of imgs
// let imgsArray = ["../imgs/lan1.jpg","../imgs/lan2.jpg","../imgs/lan3.jpg","../imgs/lan4.jpg","../imgs/lan5.jpg"];


// // Function To Randomize Imgs
// function randomizeImgs() {

//     if (backgroundOption === true) {

//         backgroundInterval = setInterval(() => {

//         // Get Random Number
//         let randomNumber = Math.floor(Math.random() * imgsArray.length);

//         // Change Background Image Url 
//         landingPag.style.backgroundImage = 'url("imgs/' + imgsArray[randomNumber] + '")';

//     }, 10000);

//     }

// }

// randomizeImgs();


// Select Skills Selector

let ourSkills = document.querySelector(".skills");

window.onscroll = function () {

  // Skills Offset Top
    let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
    let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
    let windowHeight = this.innerHeight;

  // Window ScrollTop
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
        console.log("2")

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;

        });

    };

};

// create popup with the image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {

        // create overlay element
        let overlay = document.createElement("div");

        // add class to overlay 
        overlay.className = 'popup-overlay';

        // append overlay to the bady
        document.body.appendChild(overlay);

        // create the popup
        let popupBox = document.createElement("div");

        // add class to overlay 
        popupBox.className = 'popup-box';

        if (img.alt !== null) {

            // create heading
            let imgHeading = document.createElement("h3");

            // create text heading
            let imgText = document.createTextNode(img.alt);

            // append the text to the heading
            imgHeading.appendChild(imgText);

            // append heading to popup
            popupBox.appendChild(imgHeading);

        };

        // create the imags
        let popupImage = document.createElement("img");

        // set image source
        popupImage.src = img.src;

        // add image to popup
        popupBox.appendChild(popupImage);

        // append the popup box to body
        document.body.appendChild(popupBox);

        // Create The Close Span
        let closeButton = document.createElement("span");

        // Create The Close Button Text
        let closeButtonText = document.createTextNode("X");

        // Append Text To Close Button
        closeButton.appendChild(closeButtonText);

        // Add Class To Close Button
        closeButton.className = 'close-button';

        // Add Close Button To The Popup Box
        popupBox.appendChild(closeButton);


    });

});

// close popup 
document.addEventListener('click', (e) => {

    if (e.target.className == 'close-button') {

        // remove the popup
        e.target.parentNode.remove();

        // remove overlay
        document.querySelector(".popup-overlay").remove();

    };

});

// Select All Bullets
const allBullets = document.querySelectorAll(".nav-bullets .bullet");

// Select All Links
const allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {

    elements.forEach(ele => {

        ele.addEventListener("click", (e) => {
    
            e.preventDefault();
        
            document.querySelector(e.target.dataset.section).scrollIntoView({
        
                behavior: 'smooth'
        
            });
    
        });
    
    });

}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);

// Handle Active State
function handleActive(ev) {

    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");

    });

    // Add Active Class On Self
    ev.target.classList.add("active");

}

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletLocalItem = localStorage.getItem("bullets_option");

if (bulletLocalItem !== null) {

    bulletsSpan.forEach(span => {

        span.classList.remove("active");

});

if (bulletLocalItem === 'block') {

        bulletsContainer.style.display = 'block';

        document.querySelector(".bullets-option .yes").classList.add("active");

    } else {

        bulletsContainer.style.display = 'none';

        document.querySelector(".bullets-option .no").classList.add("active");

    };

};

bulletsSpan.forEach(span => {

    span.addEventListener("click", (e) => {

        if (span.dataset.display === 'show') {

            bulletsContainer.style.display = 'block';

            localStorage.setItem("bullets_option", 'block');

        } else {

            bulletsContainer.style.display = 'none';

            localStorage.setItem("bullets_option", 'none');

        }

        handleActive(e);

    });

});

// Reset Button
document.querySelector(".reset-options").onclick = function () {

    // localStorage.clear();
    localStorage.removeItem("color_option");
    localStorage.removeItem("background_option");
    localStorage.removeItem("bullets_option");

    // Reload Window
    window.location.reload();

};

// Toggle Menu 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");

toggleBtn.onclick = function (e) {

    // Stop Propagation
    e.stopPropagation();

    // Toggle Class "menu-active" On Button
    this.classList.toggle("menu-active");

    // Toggle Class "open" On Links
    tLinks.classList.toggle("open");

};

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

    if (e.target !== toggleBtn && e.target !== tLinks) {

        // Check If Menu Is Open
        if (tLinks.classList.contains("open")) {

            // Toggle Class "menu-active" On Button
            toggleBtn.classList.toggle("menu-active");

            // Toggle Class "open" On Links
            tLinks.classList.toggle("open");

        }

    }

});

// Stop Propagation On Menu 
tLinks.onclick = function (e) {
    e.stopPropagation();
};