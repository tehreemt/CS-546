const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
    const info = await aboutInfo();
    
		res.json(info);
	} catch (e) {
		res.status(500).json({ error: e });
	}
});


async function aboutInfo(){
    let obj1=
    {
        "name": "Tehreem Tungekar",
        "cwid": "10457940",
        "biography": "Tehreem is talented at understanding complex engineering problems and their underlying theories. In her final year, she worked on an extraordinary one semester long thesis project titled as ‘Automatic Controlling of Office Appliances’. In this project she used Arduino technology coupled with her exceptional programming skills. When called upon in front of her peers, Tehreem spoke clearly and eloquently about her conclusions and addressed all the questions in a thoughtful way. Outside the classroom, she was the Students’ Chief Coordinator of the Institutes’ national level technical fiesta, PRAGYAA, where she demonstrated her technical and managerial skills to work and coordinate with a team of 500 students.\n Apart from having an outstanding academic record,Tehreem has excellent communication skills. She was awarded the Best Anchor by Cognizant Technology Solutions in 2013. Tehreem’s personal strengths are as impressive as her intellectual accomplishments. She is an insightful, dedicated, and focused individual driven to explore new technologies, current challenges in the information technology domain, and also possesses a deeper understanding of possible solutions.Tehreem has demonstrated excellence in all that she puts her mind to, whether it’s designing a program or collaborating with others to work on a project. Tehreem consistently seeks out constructive feedback so she can improve her technical and soft skills, which is a rare and impressive quality.", 
        "favoriteShows": ["OnePiece", "Attack On Titan", "Stranger Things", "Death Note"],
        "hobbies": ["Reading", "Music", "Cooking"]
      }
      return obj1;
}


module.exports = router;