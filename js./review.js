
// Review data
const reviewData = [
    {
      name: "David",
      date: "2023-03-25",
      rating: 4,
      review: "I had a great time playing this game with my family. It's a classic that never gets old!",
      image:"./img/r1.jpg"
    },
    {
      name: "Jane",
      date: "2023-02-15",
      rating: 5,
      review: "The Hanging Man game is so much fun! It's a fantastic way to spend time with friends and improve vocabulary skills.",
      image: "./img/rv2.jpg"
    },
    {
      name: "Emily",
      date: "2023-01-30",
      rating: 3,
      review: "It's an enjoyable game, but can get repetitive after a while. Good for occasional play.",
      image: "./img/r3.jpg"
    },
    {
      name: "Samantha",
      date: "2023-03-10",
      rating: 4,
      review: "I love the challenge of guessing words in this game. It's a great way to test your knowledge and learn new words.",
      image: "./img/r4.jpg"
    },
    {
      name: "Michael Johnson",
      date: "2023-02-28",
      rating: 5,
      review: "Hanging Man is an all-time favorite of mine. It's a great game to play with a group or just with one other person.",
      image: "./img/r5.jpg"
    }
  ];
  
  // Function to generate the reviewer card HTML
  function generateReviewerCard(data) {
    const ratingStars = "⭐".repeat(data.rating);
    const cardHtml = `
      <div class="reviewer-card">
        <img class="reviewer-image" src="${data.image}" alt="${data.name}" />
        <h3>${data.name}</h3>
        <p>${data.date}</p>
        <p>${ratingStars}</p>  
        <input type="button" value="click">     
        
        <div class="review-content">${data.review}</div>
      </div>
    `;
    return cardHtml;
  }
  
  
// Get the reviewer container
const reviewerContainer = document.getElementById('reviewer-container');

// Generate and add the reviewer cards to the container
reviewData.forEach(data => {
  const cardHtml = generateReviewerCard(data);
  reviewerContainer.innerHTML += cardHtml;
});


const reviewerCards = document.querySelectorAll('.reviewer-card');
reviewerCards.forEach(card => {
  card.addEventListener('click', () => {
    console.log('Reviewer card clicked');
    card.classList.toggle('show');
  });
});
 
document.addEventListener("DOMContentLoaded", function() {
    window.reviewData = [];

    function createStars(rating) {
        let stars = "";
        for (let i = 0; i < 5; i++) {
            if (i < rating) {
                stars += "★";
            } else {
                stars += "☆";
            }
        }
        return stars;
    }

    function displayReview(review) {
        const reviewContainer = document.getElementById("reviewContainer");

        const card = document.createElement("div");
        card.className = "card";

        const name = document.createElement("h2");
        name.textContent = review.name;

        const date = document.createElement("p");
        date.textContent = new Date(review.date).toLocaleDateString();

        const rating = document.createElement("p");
        rating.className = "rating";
        rating.textContent = createStars(review.rating);

        const reviewText = document.createElement("p");
        reviewText.textContent = review.review;

        card.append(name, date, rating, reviewText);
        reviewContainer.appendChild(card);
    }

    function displayReviews() {
        for (const review of window.reviewData) {
            displayReview(review);
        }
    }

    displayReviews();

    document.getElementById("reviewForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const newReview = {
            name: document.getElementById("name").value,
            date: new Date(document.getElementById("date").value).toISOString().substring(0, 10),
            rating: parseInt(document.getElementById("rating").value),
            review: document.getElementById("review").value
        };

        window.reviewData.push(newReview);
        displayReview(newReview);    
        event.target.reset();
    });
});
        document.addEventListener("DOMContentLoaded", function() {
            const form = document.getElementById("reviewForm");
            form.addEventListener("submit", function(event) {
                const nameField = document.getElementById("name");
                if (nameField.value === "") {
                  
                    alert("Name cannot be empty, please enter your name");
                }
            });
        });
        
    
    
    
