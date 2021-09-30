const quizDB=[
  { question: "1. The Astronomical Unit (AU) Is A Unit Of Measurement Based On The Average Distance Between What Two Bodies?",
    a:"Earth and the sun",
    b:" two stars ",
    c:" any two celestrial bodies",
    d:" Earth and the moon ",
    ans:"ans1"
}

,

{ question: "2.The day on which the Sun’s direct rays cross the celestial equator is called:",
a:"the ecliptic",
b:"the aphelion",
c:"the solstice",
d:"the equinox ",
ans:"ans4"
}

,

{ question: "3.Which of these objects is the farthest from the Sun?",
a:" Saturn",
b:"90377 Sedna ",
c:" Neptune",
d:" Kuiper belt ",
ans:"ans2"
}
,

{ question: "4.What is the smallest planet in the solar system by mass?",
a:" Jupiter",
b:" Venus ",
c:"Mercury",
d:" Pluto ",
ans:"ans3"
}

,

{ question: "5.Which of the following phenomena cannot be observed on the surface of the Moon?",
a:" Rising and setting of the Sun",
b:"Twinkling of stars ",
c:" Motion of comets",
d:" Solar eclipse ",
ans:"ans2"
}


,

{ question: "6. What is the name of the first woman space tourist?",
a:"Jullian Moore",
b:" Namira Salim ",
c:" Paula Radcliffe",
d:"Anousheh Ansari",
ans:"ans4"
}


,

{ question: " 7.Which of the following planets has a revolution time which is shorter than its rotation time??",
a:" Jupiter",
b:"Venus ",
c:" Uranus",
d:" Mars",
ans:"ans2"
}


,

{ question: "8.Which of the following planets rotates in a direction opposite to the direction of earth's rotation??",
a:"Venus",
b:" Jupiter ",
c:" Neptune",
d:" Saturn",
ans:"ans1"
}



]

const question=document.querySelector(".question") ;
const option2=document.querySelector("#option2") ; ;
const option3=document.querySelector("#option3") ;
const option4=document.querySelector("#option4") ;
const submit=document.querySelector("#submit");

const answers=document.querySelectorAll('.answer')
const showscore=document.querySelector('#showscore');
let questionCount=0;
let score=0;

const loadQuestion = ()=> {
   const questionlist = quizDB[questionCount];
   question.innerText =questionlist.question ;
    option1.innerText=questionlist.a;
   option2.innerText=questionlist.b;
     option3.innerText=questionlist.c;
     option4.innerText=questionlist.d;
   
   

};

loadQuestion(); 

getCheckAnswer=()=>{
 let answer;

 answers.forEach((curAnsElem) => {
if(curAnsElem.checked){
 answer=curAnsElem.id
}


 });
 return answer;

};

const deselectAll=()=>{
 answers.forEach((curAnsElem)=> curAnsElem.checked = false);
};

submit.addEventListener('click',()=>{
 const checkanswer=getCheckAnswer();
 console.log(checkanswer);

 if(checkanswer==quizDB[questionCount].ans){
   score++;
 };

 questionCount++;

 deselectAll();

 if(questionCount<quizDB.length){
   loadQuestion(); 
 }
 else {
   showscore.innerHTML=`
   <h3> You scored ${score}/${quizDB.length}  !! <br> Congratulations, Continue your journey as a space enthusiast ✌<h3>
   <button class="btn" onclick="location.reload()">Play Again</button `;
 
showscore.classList.remove("scorearea");
}
})