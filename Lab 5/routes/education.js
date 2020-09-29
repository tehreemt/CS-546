const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const educate = await myEducation();
		res.json(educate);
	} catch (e) {
		res.status(500).json({ error: e });
	}
});

async function myEducation(){
let school1=
[
    {
      "schoolName": "St. Marys Convent",
      "degree": "High School",
      "favoriteClass": "Mathematics",
      "favoriteMemory": "In school, I and my two other friends were(coincidentally) the tallest ones in the class, so being tall comes with a price, the teachers always force you to sit on the last bench; well, we did not enjoy sitting in the last rows but the funny thing is we used to eat and talk a lot during some boring lectures like History and Geography because the teachers' focus would always be on the front rows. Those two are still my best friends and we laugh whenever we remember those days!"
    },
    {
      "schoolName": "SGGSIET",
      "degree": "Bachelors in Information Technology",
      "favoriteClass": "E-Commerce",
      "favoriteMemory": "During my Bachelors, Sem VI actually, I was the Students Chief Coordinator for a national level technical event in my institute, so I remember, that time, I used to leave my room at 6 am, work in the office till 12 pm, without any breaks, attend college till 6 pm(as my college was damn strict about attendence) and then work again for the event till 12 am. So basically there used to be days on which I just used to forget I did not eat anything since morning; but my friend Sneha, always used to get something for me before the hostel mess closed so that I can eat something. I will never forget her caring nature and thoughtfulness."
    },
    {
      "schoolName": "Stevens Institute of Technology",
      "degree": "Masters in Computer Science",
      "favoriteClass": "Web Programming",
      "favoriteMemory": "Well, since this is my first semester, there are not many memories, but I do remember one incident- I am enrolled in one of the web based courses, so I have not met the professor for the course personally, just saw him in the web lectures in videos.One day I was in the Gateway South building where I have my other on-campus classes and I saw the professor(the web course) and I thought he would not recognise me but I was surprised when he did! The Professor has pretty good memory it seems. Trust me, if I would have been in his place, I would not have recognised my student, as my memory is not that good."
    }
];
let school2=
[
    {
      "schoolName": "SGGSIET",
      "degree": "Bachelors in Information Technology",
      "favoriteClass": "E-Commerce",
      "favoriteMemory": "A memorable memory from your time in that school"
    }
];
let school3=
[
    {
      "schoolName": "Stevens Institute of Technology",
      "degree": "Masters in Computer Science",
      "favoriteClass": "Web Programming",
      "favoriteMemory": "A memorable memory from your time in that school"
    }
];
return school1;
}

module.exports = router;