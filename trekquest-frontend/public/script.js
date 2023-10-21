// Fetch the data from tours.json
document.addEventListener("DOMContentLoaded", function () {
  // your fetch code here
  fetch("/tours.json")
    .then((response) => {
      // Parse the JSON data from the response
      return response.json();
    })
    .then((tours) => {
      // Container to append our tour cards to
      const container = document.querySelector("#touchcards");

      // Loop through each tour and create an HTML representation
      tours.forEach((tour) => {
        const tourCard = `
                <div class="card">
                    <div class="card__header">
                        <div class="card__picture">
                            <div class="card__picture-overlay">&nbsp;</div>
                            <img src="img/${tour.coverPhoto}" alt="${tour.title}" class="card__picture-img" />
                        </div>

                        <h3 class="heading-tertirary">
                            <span>${tour.title}</span>
                        </h3>
                    </div>

                    <div class="card__details">
                        <h4 class="card__sub-heading">${tour.challenge} ${tour.length}-day tour</h4>
                        <p class="card__text">
                            ${tour.details}
                        </p>
                        <div class="card__data">
                            <svg class="card__icon">
                                <use xlink:href="img/icons.svg#icon-user"></use>
                            </svg>
                            <span>${tour.groupLimit} people</span>
                        </div>
                    </div>

                    <div class="card__footer">
                        <p class="card__ratings">
                            <span class="card__footer-value">${tour.averageRating}</span>
                            <span class="card__footer-text">rating (${tour.reviewsCount})</span>
                        </p>
                        <a href="#" class="btn btn--green btn--small">Details</a>
                    </div>
                </div>
            `;

        // Append the tour card to the container
        container.innerHTML += tourCard;
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});
