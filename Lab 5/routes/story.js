const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const story = await myStory();
		res.json(story);
	} catch (e) {
		res.status(500).json({ error: e });
	}
});

async function myStory(){
let obj2={
	"storyTitle":  "My story",
	//\\n's!",//"Story Title/\"\'\b\f\r\n.",
	"story": "I am originally from Mumbai in India.\n After completing my Bachelors in Information Technology, I worked at a multinational company in India. \n I applied for Masters in Computer Science program to a few colleges and selected Stevens. This is my first semester at Stevens and I have registered for four subjects: Web Programming I, Foundations of Cryptography, Introduction to Cloud Computing and Fundamentals of Cybersecurity. Although I have enrolled for Masters in Computer Science program, my inclination is more towards Cybersecurity. I hope I will be more clear about my interests after I am through with this first semester.  So far, studying at Stevens has been enjoyable and interesting! Thank you for reading my story!"
  };
  return obj2;
}

module.exports = router;