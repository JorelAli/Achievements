import express from 'express';

const router = express.Router();

// Sample collections data (replace with your actual data retrieval logic)
const collectionsData = [
	{ name: 'Collection 1' },
	{ name: 'Collection 2' },
	// Add more collection objects here
];

// Sample data for achievements (replace with your actual data retrieval logic)
const achievementsData = {
	
	'collection1': [
		{
			title: 'Just walk it off',
			iconUrl: 'icon2.png',
			description: 'Get your first bruise',
			completed: true,
			completionDate: '2023-09-18',
			emoji: '🚶'
		},
		{
			title: 'A Blade Is Like A Tea-Leaf',
			iconUrl: 'icon2.png',
			description: 'Have a sword break during a match',
			completed: false,
			emoji: '🍃'
		},
		{
			title: "Over the edge",
			description: "Force your opponent off the end of the piste",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "Handling the situation",
			description: "First hand touch scored",
			completed: false,
			emoji: '👋'
		},
		{
			title: "First win to 5",
			description: "",
			completed: true,
			emoji: '5️⃣'
		},
		{
			title: "First win to 10",
			description: "",
			completionDate: "2023-09-28",
			completed: true,
			emoji: '⚠️'
		},
		{
			title: "First win to 15",
			description: "",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "Untouchable!",
			description: "Win a match without the opponent scoring a point",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "La Belle",
			description: "Win the deciding hit during a match ",
			completionDate: "2023-09-28",
			completed: true,
			emoji: '🛎️'
		},
		{
			title: "Foiled again",
			description: "Lose the deciding hit during a match",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "A come-back",
			description: "Win after being down 5 points ",
			completionDate: "2023-09-28",
			completed: true,
			emoji: '⚠️'
		},
		{
			iconUrl: "pretty_lucky.png",
			title: "Pretty Lucky",
			description: "Win after being down 10 points",
			completed: false
		},
		{
			iconUrl: "peril_strats.png",
			title: "Peril Strats",
			description: "Win from 0 points when the opponent has one more point to win",
			completed: false
		},
		{
			title: "Jack of All Blades",
			description: "Win one match with every weapon",
			completed: false,
			emoji: '⚠️',
			subAchievements: [
				{
					title: "Foil",
					completed: true,
					completionDate: "2023-09-25",
					emoji: '🤺',
				},
				{
					title: "Epée",
					completed: false,
					emoji: '🤺⚠️',
				},
				{
					title: "Sabre",
					completed: false,
					emoji: '🤺⚠️',
				}
			]
		},
		{
			title: "Grand Arbiter",
			description: "Successfully referee a match with no mistakes",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "We'll call it a draw",
			description: "Lose 15 - 0",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "Don't Forget Me!",
			description: "Win a rematch ",
			completionDate: "2023-09-25",
			completed: true,
			emoji: '⚠️'
		},
		{
			title: "Time for swordplay",
			description: "Enter a tournament",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "Do You Think You Can Beat Me?",
			description: "Win a match without your opponent beating your blade",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "I'll Beat You!",
			description: "Beat an opponent's blade ",
			completionDate: "2023-09-18",
			completed: true,
			emoji: '⚠️'
		},
		{
			title: "Locked On To Target",
			description: "Win a match without beating your opponent's blade",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "Full Counter!",
			description: "Counter an opponent... And score a point",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "Back so soon?",
			description: "Score a hit on the back with a flick in foil",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "Swords, Descend!",
			description: "Successfully parry an opponent attack with a vertical cut in foil",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "Everyday's a training day",
			description: "Score a hit on an opponent with a move you learned just before a match",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "Spin to Win",
			description: "Win a match with a hit after a series of circular parries",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "Hit Right In The Heart",
			description: "Stagger an opponent with a forceful hit in epée",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "God-like Speed",
			description: "Hit an opponent with a flèche in epée",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "Beyond God-like Speed",
			description: "Hit an opponent with a flunge in epée",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "I think I just got taller",
			description: "Score a hit in epée while pomelling a French grip",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "Happy Feet",
			description: "Score a hit on a foot in epée",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "Double Down",
			description: "Win a match in epée by using a double hit",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "Keep Moving Forward Until I Crush My Enemies",
			description: "Break an opponent's sword",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "A Blade Is Like A Tea-Leaf",
			description: "Have a sword break during a match",
			completed: false,
			emoji: '⚠️'
		},
		{
			title: "Just walk it off",
			description: "Get your first bruise ",
			completionDate: "2023-09-18",
			completed: true,
			emoji: '🚶'
		},
		{
			title: "You're Running Out Of Road!",
			description: "Be pushed off the end of the piste",
			completed: false,
			emoji: '⚠️'
		},
	],
	'collection2': [
		// Achievements for collection2
	],
	// Add more collections and achievements here
};

// GET endpoint to retrieve user's collections
router.get('/', (req, res) => {
	res.json(collectionsData);
});

// GET endpoint to retrieve achievements for a specific collection
router.get('/:collection_name/achievements', (req, res) => {
	const collectionName = req.params.collection_name;

	// Check if the collection exists
	if (achievementsData[collectionName]) {
		const achievements = achievementsData[collectionName];
		res.json(achievements);
	} else {
		// Collection not found
		res.status(404).json({ error: 'Collection not found' });
	}
});

// Add routes for creating collections, updating, or deleting them as needed

export default router;
