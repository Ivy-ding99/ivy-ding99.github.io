




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

function generateReviewerCard(data) {
  const ratingStars = createStars(data.rating);
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

document.addEventListener("DOMContentLoaded", function() {
  // Get the reviewer container
  const reviewerContainer = document.getElementById('reviewer-container');

  // Generate and add the reviewer cards to the container
  reviewData.forEach(data => {
    const cardHtml = generateReviewerCard(data);
    reviewerContainer.innerHTML += cardHtml;
  });

  // Add click event listener to the reviewer cards
 

const reviewerCards = document.querySelectorAll('.reviewer-card');
reviewerCards.forEach(card => {
  card.addEventListener('click', () => {
    console.log('Reviewer card clicked');
    card.classList.toggle('show');
  });
});

  // Handle new review submission
  const form = document.getElementById("reviewForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const nameField = document.getElementById("name");
    const reviewField = document.getElementById("review");
    const trimmedName = nameField.value.trim();
    const trimmedReview = reviewField.value.trim();

    if (trimmedName === "" || trimmedReview === "") {
      alert("Name and review cannot be empty, please fill in both fields.");
      return;
    }

    // Create the new review data
    const newReviewData = {
      name: trimmedName,
      date: new Date().toISOString().substring(0, 10),
      rating: 5, // You can update this with the actual rating value
      review: trimmedReview,
      image: "", // You can update this with the actual image path
    };

    // Create the new review card
    const newReviewCard = generateReviewerCard(newReviewData);

    // Append the new review card to the review cards container
    reviewerContainer.innerHTML += newReviewCard;

    // Clear the form fields
    nameField.value = "";
    reviewField.value = "";
  });
});

    
    
