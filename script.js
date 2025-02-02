// let mood = '';
// let genre = '';
// let language = '';

// // Function to move to the next step of the quiz
// function nextStep(step) {
//     if (step === 1) {
//         mood = document.getElementById('mood').value;
//         document.getElementById('step1').style.display = 'none';
//         document.getElementById('step2').style.display = 'block';
//     } else if (step === 2) {
//         genre = document.getElementById('genre').value;
//         document.getElementById('step2').style.display = 'none';
//         document.getElementById('step3').style.display = 'block';
//     }
// }

// // Function to show the movie recommendation based on mood, genre, and language
// function showRecommendation() {
//     language = document.getElementById('language').value;

//     // Hide the quiz sections
//     document.getElementById('step3').style.display = 'none';
//     document.getElementById('recommendation').style.display = 'block';

//     let recommendation = '';

//     // Logic to suggest a movie based on mood, genre, and language
// if (mood === "happy" && genre === "comedy" && language === "english") {
//     recommendation = "We recommend: 'The Hangover' (English Comedy)";
// } else if (mood === "sad" && genre === "comedy" && language === "english") {
//     recommendation = "We recommend: 'Superbad' (English Comedy)";
// } else if (mood === "excited" && genre === "comedy" && language === "english") {
//     recommendation = "We recommend: 'Deadpool' (English Comedy)";
// } else if (mood === "sad" && genre === "comedy" && language === "hindi") {
//     recommendation = "We recommend: 'Chupke Chupke' (Hindi Comedy)";
// } else if (mood === "excited" && genre === "comedy" && language === "hindi") {
//     recommendation = "We recommend: 'Hera Pheri' (Hindi Comedy)";
// } else if (mood === "happy" && genre === "comedy" && language === "malayalam") {
//     recommendation = "We recommend: '3 Kings' (Malayalam Comedy)";
// } else if (mood === "sad" && genre === "comedy" && language === "malayalam") {
//     recommendation = "We recommend: 'Meesa Madhavan' (Malayalam Comedy)";
// } else if (mood === "excited" && genre === "comedy" && language === "malayalam") {
//     recommendation = "We recommend: 'Ramji Rao Speaking' (Malayalam Comedy)";
// } else if (mood === "happy" && genre === "horror" && language === "english") {
//     recommendation = "We recommend: 'The Cabin in the Woods' (English Horror)";
// } else if (mood === "sad" && genre === "horror" && language === "english") {
//     recommendation = "We recommend: 'Shaun of the Dead' (English Horror)";
// } else if (mood === "excited" && genre === "horror" && language === "english") {
//     recommendation = "We recommend: 'A Nightmare on Elm Street' (English Horror)";
// } else if (mood === "happy" && genre === "horror" && language === "hindi") {
//     recommendation = "We recommend: 'Stree' (Hindi Horror)";
// } else if (mood === "excited" && genre === "horror" && language === "hindi") {
//     recommendation = "We recommend: 'Tumbbad' (Hindi Horror)";
// } else if (mood === "happy" && genre === "horror" && language === "malayalam") {
//     recommendation = "We recommend: 'Winter' (Malayalam Horror)";
// } else if (mood === "sad" && genre === "horror" && language === "malayalam") {
//     recommendation = "We recommend: 'Pretham' (Malayalam Horror)";
// } else if (mood === "excited" && genre === "horror" && language === "malayalam") {
//     recommendation = "We recommend: 'Bhoothakalam' (Malayalam Horror)";
// } else if (mood === "happy" && genre === "action" && language === "english") {
//     recommendation = "We recommend: 'The Avengers' (English Action)";
// } else if (mood === "sad" && genre === "action" && language === "english") {
//     recommendation = "We recommend: 'Guardians of the Galaxy' (English Action)";
// } else if (mood === "excited" && genre === "action" && language === "english") {
//     recommendation = "We recommend: 'Mad Max Fury Road' (English Action)";
// } else if (mood === "happy" && genre === "action" && language === "hindi") {
//     recommendation = "We recommend: 'Chennai Express' (Hindi Action)";
// } else if (mood === "sad" && genre === "action" && language === "hindi") {
//     recommendation = "We recommend: 'Rowdy Rathore' (Hindi Action)";
// } else if (mood === "excited" && genre === "action" && language === "hindi") {
//     recommendation = "We recommend: 'Sulthan' (Hindi Action)";
// } else if (mood === "happy" && genre === "action" && language === "malayalam") {
//     recommendation = "We recommend: 'Aavesham' (Malayalam Action)";
// } else if (mood === "sad" && genre === "action" && language === "malayalam") {
//     recommendation = "We recommend: 'CID Moosa' (Malayalam Action)";
// } else if (mood === "happy" && genre === "romance" && language === "english") {
//     recommendation = "We recommend: 'Notting Hill' (English Romance)";
// } else if (mood === "sad" && genre === "romance" && language === "english") {
//     recommendation = "We recommend: 'The Proposal' (English Romance)";
// } else if (mood === "excited" && genre === "romance" && language === "english") {
//     recommendation = "We recommend: '50 First Dates' (English Romance)";
// } else if (mood === "happy" && genre === "romance" && language === "hindi") {
//     recommendation = "We recommend: 'Dilwale Dulhania Le Jayenge' (Hindi Romance)";
// } else if (mood === "sad" && genre === "romance" && language === "hindi") {
//     recommendation = "We recommend: 'Jab We Met' (Hindi Romance)";
// } else if (mood === "excited" && genre === "romance" && language === "hindi") {
//     recommendation = "We recommend: 'Queen' (Hindi Romance)";
// } else if (mood === "happy" && genre === "romance" && language === "malayalam") {
//     recommendation = "We recommend: 'Thattathin Marayathu' (Malayalam Romance)";
// } else if (mood === "sad" && genre === "romance" && language === "malayalam") {
//     recommendation = "We recommend: 'Bangalore Days' (Malayalam Romance)";
// } else if (mood === "excited" && genre === "romance" && language === "malayalam") {
//     recommendation = "We recommend: 'Premam' (Malayalam Romance)";
// } else {
//     recommendation = "We recommend: 'The Shawshank Redemption' (English Drama)";
// }


//     // Display the recommendation
//     document.getElementById('movieRecommendationText').textContent = recommendation;
// }


let mood = '';
let genre = '';
let language = '';

// Function to move to the next step of the quiz
function nextStep(step) {
    if (step === 1) {
        mood = document.getElementById('mood').value;
        document.getElementById('step1').style.display = 'none';
        document.getElementById('step2').style.display = 'block';
    } else if (step === 2) {
        genre = document.getElementById('genre').value;
        document.getElementById('step2').style.display = 'none';
        document.getElementById('step3').style.display = 'block';
    }
}

// Function to show the movie recommendation based on mood, genre, and language
function showRecommendation() {
    language = document.getElementById('language').value;
    document.getElementById('step3').style.display = 'none';
    document.getElementById('recommendation').style.display = 'block';

    let recommendation = '';
    let imageUrl = '';

   // Logic to suggest a movie based on mood, genre, and language
if (mood === "happy" && genre === "comedy" && language === "english") {
    recommendation = "We recommend: 'The Hangover' (English Comedy)";
    imageUrl = "images/1.jpg";
} else if (mood === "sad" && genre === "comedy" && language === "english") {
    recommendation = "We recommend: 'Superbad' (English Comedy)";
    imageUrl = "images/2.jpg";
} else if (mood === "excited" && genre === "comedy" && language === "english") {
    recommendation = "We recommend: 'Deadpool' (English Comedy)";
    imageUrl = "images/3.jpg";
} else if (mood === "sad" && genre === "comedy" && language === "hindi") {
    recommendation = "We recommend: 'Chup Chupke' (Hindi Comedy)";
    imageUrl = "images/4.jpg";
} else if (mood === "excited" && genre === "comedy" && language === "hindi") {
    recommendation = "We recommend: 'Hera Pheri' (Hindi Comedy)";
    imageUrl = "images/5.jpg";
} else if (mood === "happy" && genre === "comedy" && language === "malayalam") {
    recommendation = "We recommend: '3 Kings' (Malayalam Comedy)";
    imageUrl = "images/6.jpg";
} else if (mood === "sad" && genre === "comedy" && language === "malayalam") {
    recommendation = "We recommend: 'Meesa Madhavan' (Malayalam Comedy)";
    imageUrl = "images/7.jpg";
} else if (mood === "excited" && genre === "comedy" && language === "malayalam") {
    recommendation = "We recommend: 'Ramji Rao Speaking' (Malayalam Comedy)";
    imageUrl = "images/8.jpg";
} else if (mood === "happy" && genre === "horror" && language === "english") {
    recommendation = "We recommend: 'The Cabin in the Woods' (English Horror)";
    imageUrl = "images/9.jpg";
} else if (mood === "sad" && genre === "horror" && language === "english") {
    recommendation = "We recommend: 'Shaun of the Dead' (English Horror)";
    imageUrl = "images/10.jpg";
} else if (mood === "excited" && genre === "horror" && language === "english") {
    recommendation = "We recommend: 'A Nightmare on Elm Street' (English Horror)";
    imageUrl = "images/11.jpg";
} else if (mood === "happy" && genre === "horror" && language === "hindi") {
    recommendation = "We recommend: 'Stree' (Hindi Horror)";
    imageUrl = "images/12.jpg";
} else if (mood === "excited" && genre === "horror" && language === "hindi") {
    recommendation = "We recommend: 'Tumbbad' (Hindi Horror)";
    imageUrl = "images/13.jpg";
} else if (mood === "happy" && genre === "horror" && language === "malayalam") {
    recommendation = "We recommend: 'Winter' (Malayalam Horror)";
    imageUrl = "images/14.jpg";
} else if (mood === "sad" && genre === "horror" && language === "malayalam") {
    recommendation = "We recommend: 'Pretham' (Malayalam Horror)";
    imageUrl = "images/15.jpg";
} else if (mood === "excited" && genre === "horror" && language === "malayalam") {
    recommendation = "We recommend: 'Bhoothakalam' (Malayalam Horror)";
    imageUrl = "images/16.jpg";
} else if (mood === "happy" && genre === "action" && language === "english") {
    recommendation = "We recommend: 'The Avengers' (English Action)";
    imageUrl = "images/17.jpg";
} else if (mood === "sad" && genre === "action" && language === "english") {
    recommendation = "We recommend: 'Guardians of the Galaxy' (English Action)";
    imageUrl = "images/18.jpg";
} else if (mood === "excited" && genre === "action" && language === "english") {
    recommendation = "We recommend: 'Mad Max Fury Road' (English Action)";
    imageUrl = "images/19.jpg";
} else if (mood === "happy" && genre === "action" && language === "hindi") {
    recommendation = "We recommend: 'Chennai Express' (Hindi Action)";
    imageUrl = "images/20.jpg";
} else if (mood === "sad" && genre === "action" && language === "hindi") {
    recommendation = "We recommend: 'Rowdy Rathore' (Hindi Action)";
    imageUrl = "images/21.jpg";
} else if (mood === "excited" && genre === "action" && language === "hindi") {
    recommendation = "We recommend: 'Sulthan' (Hindi Action)";
    imageUrl = "images/22.jpg";
} else if (mood === "happy" && genre === "action" && language === "malayalam") {
    recommendation = "We recommend: 'Aavesham' (Malayalam Action)";
    imageUrl = "images/23.jpg";
} else if (mood === "sad" && genre === "action" && language === "malayalam") {
    recommendation = "We recommend: 'CID Moosa' (Malayalam Action)";
    imageUrl = "images/24.jpg";
} else if (mood === "happy" && genre === "romance" && language === "english") {
    recommendation = "We recommend: 'Notting Hill' (English Romance)";
    imageUrl = "images/25.jpg";
} else if (mood === "sad" && genre === "romance" && language === "english") {
    recommendation = "We recommend: 'The Proposal' (English Romance)";
    imageUrl = "images/26.jpg";
} else if (mood === "excited" && genre === "romance" && language === "english") {
    recommendation = "We recommend: '50 First Dates' (English Romance)";
    imageUrl = "images/27.jpg";
} else if (mood === "happy" && genre === "romance" && language === "hindi") {
    recommendation = "We recommend: 'Dilwale Dulhania Le Jayenge' (Hindi Romance)";
    imageUrl = "images/28.jpg";
} else if (mood === "sad" && genre === "romance" && language === "hindi") {
    recommendation = "We recommend: 'Jab We Met' (Hindi Romance)";
    imageUrl = "images/29.jpg";
} else if (mood === "excited" && genre === "romance" && language === "hindi") {
    recommendation = "We recommend: 'Queen' (Hindi Romance)";
    imageUrl = "images/30.jpg";
} else if (mood === "happy" && genre === "romance" && language === "malayalam") {
    recommendation = "We recommend: 'Thattathin Marayathu' (Malayalam Romance)";
    imageUrl = "images/31.jpg";
} else if (mood === "sad" && genre === "romance" && language === "malayalam") {
    recommendation = "We recommend: 'Bangalore Days' (Malayalam Romance)";
    imageUrl = "images/32.jpg";
} else if (mood === "excited" && genre === "romance" && language === "malayalam") {
    recommendation = "We recommend: 'Premam' (Malayalam Romance)";
    imageUrl = "images/33.jpg";
} else {
    recommendation = "We recommend: 'Golmal' (Hindi comedy)";
    imageUrl = "images/34.jpg";
}

    document.getElementById('movieRecommendationText').innerText = recommendation;
    const movieImage = document.getElementById('movieImage');

    if (imageUrl) {
        movieImage.src = imageUrl;
        movieImage.style.display = 'block';
    } else {
        movieImage.style.display = 'none';
    }
}

// Restart the quiz
function restartQuiz() {
    document.getElementById('recommendation').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
}
