// Frontend code in scripts.js
$(document).ready(function () {
	// Fetch and display user's collections when the page loads
	fetchCollections();

	// Handle the "Add New Collection" button click event
	$('#add-collection-btn').click(function () {
		// Implement logic to add a new collection
		// You can display a modal or redirect to another page for creating a new collection
		// For example, you can use window.location.href to navigate to a new collection creation page
		// window.location.href = '/app/collections/new';
	});

	// Fetch and display achievements when the page loads
	fetchAchievements();

	// Handle the "Add Achievement" button click event
	$('#add-achievement-btn').click(function () {
		// Implement logic to add a new achievement
		// You can display a modal or redirect to another page for creating a new achievement
		// For example, you can use window.location.href to navigate to a new achievement creation page
		// window.location.href = '/app/collections/new-achievement';
	});
});

function fetchCollections() {
	// Make a GET request to retrieve user's collections
	$.ajax({
		type: 'GET',
		url: '/api/collections', // Replace with the actual URL for fetching collections
		success: function (collections) {
			// Handle the successful response here
			const collectionsList = $('#collections-list');

			collections.forEach(function (collection) {
				// Create list items for each collection
				const listItem = $('<li>').text(collection.name);
				collectionsList.append(listItem);
			});
		},
		error: function (error) {
			// Handle errors here
			console.error('Error retrieving collections:', error);
		},
	});
}

function fetchAchievements() {
	// Sample data for achievements (replace with your actual data retrieval logic)
	const achievementsData = [
		// Add more achievement objects here
	];

	const collection_name = "collection1";

	// Make a GET request to retrieve user's collections
	$.ajax({
		type: 'GET',
		url: `/api/collections/${collection_name}/achievements`, // Replace with the actual URL for fetching collections
		success: function (achievementsData) {
			const collectionContainer = $('#collection-container');

			achievementsData.forEach(function (achievement) {
				// Create an achievement element
				const achievementElement = $('<div class="achievement-container">');

				// Add achievement icon
				if (achievement.emoji) {
					const iconElement = $('<span class="achievement-icon">' + achievement.emoji + "</span>");
					achievementElement.append(iconElement);
				} else {
					const iconElement = $('<img class="achievement-icon" src="' + achievement.iconUrl + '">');
					achievementElement.append(iconElement);
				}

				// Add achievement details
				const detailsElement = $('<div class="achievement-details">');
				const titleElement = $('<div class="achievement-title">' + achievement.title + '</div>');
				const descriptionElement = $('<div class="achievement-description">' + achievement.description + '</div>');
				detailsElement.append(titleElement, descriptionElement);
				if (achievement.completed) {
					achievementElement.addClass("completed");

					if (achievement.completionDate) {
						const date = new Date(achievement.completionDate);
						const nthNumber = (number) => {
							return number > 0 ? ["th", "st", "nd", "rd"][(number > 3 && number < 21) || number % 10 > 3 ? 0 : number % 10]: "";
						};

						const day = date.getDate();
						const month = date.toLocaleString("default", { month: "long" });
						const year = date.getFullYear();
						const dayName = date.toLocaleDateString('en-us', { weekday: 'long' });

						const dateStr = `${dayName}, ${day}${nthNumber(day)} ${month}, ${year}`;
						const dateElement = $(`<div class="completion-date">Completed on ${dateStr}</div>`);
						detailsElement.append(dateElement);
					}
				}
				
				achievementElement.append(detailsElement);

				// Append the achievement to the container
				collectionContainer.append(achievementElement);
			});
		},
		error: function (error) {
			// Handle errors here
			console.error('Error retrieving collections:', error);
		},
	});
}