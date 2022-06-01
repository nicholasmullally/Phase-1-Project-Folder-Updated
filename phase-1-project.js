//First Event Listener
document.addEventListener("DOMContentLoaded", (e) => {
    let generateBtn = document.querySelector(".generateBtn");
    let feedbackForm = document.querySelector("form");
    let feedbackInput = document.querySelector("#myFeedback");
    let feedbackContainer = document.querySelector("#feedbackContainer");


    generateBtn.addEventListener("click", fetchPics);
    feedbackForm.addEventListener("submit", addFeeback)

// Add "like" functionality? 


    function fetchPics() {
        let catsImgDiv = document.querySelector(".catsImgDiv")
        fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => response.json())
            .then(data => {
                let catsImgUrl = data[0].url
                let catsImgDiv = document.querySelector("#catImage")
                catsImgDiv.setAttribute("src", catsImgUrl)
            }).catch(err => console.log(err))

    }

    function addFeeback(e) {
        e.preventDefault()
        let newParagraph = document.createElement("p")
        newParagraph.innerText = feedbackInput.value
        feedbackContainer.appendChild(newParagraph)
        feedbackForm.reset();
    }


});
