/*Je commence par declarer mes Variable Dont je vais utiliser dans mon js */
const bouttonStart = document.querySelector('#start-btn')
const bouttonSuivant = document.querySelector('#next-btn')
const LeContainerDeQuestion = document.querySelector('#question-container')
const LesQuestion = document.querySelector('#question')
const answerButtonsElement = document.querySelector('#answer-buttons')
const ChangementdeQuizz = document.querySelector ('#image')
/*Je declare les paramettre dont j'ai besoin Pour creer mon compteur*/
let i = 0;
let j = -1;
let k = 0;


/*Je configure Mon Bouton start et apres l'apuit du bouton Je Commencer les question */
let shuffledQuestions, currentQuestionIndex
 bouttonStart.addEventListener('click', startGame)
bouttonSuivant.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

/*Creer une fonction Qui me commence Mon quizz et m'affiche mes question dans un ordre aleatoire */
function startGame() {
 bouttonStart.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  LeContainerDeQuestion.classList.remove('hide')
  setNextQuestion()
}
/*Fonction Pour ramener ma prochaine question*/
function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}
/*Fonction  pour etablir un schema d'affichage des question (Le titre,L'image,Les differente question),Et j'ai mis une condition pour que les bouton change d'attribut*/
function showQuestion(question) {
  LesQuestion.innerHTML = question.question + "<img src="+ question.image +">";
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}
/*Fonction pour effacer la question precedante pour afficher la nouvelle question*/
function resetState() {
  clearStatusClass(document.body)
  bouttonSuivant.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}
/*Fonction pour etablir le nombre de question et a la fin afficher le boutton revenir au menu */
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    bouttonSuivant.classList.remove('hide')
    j--
  } else {
    const a = document.getElementById("Retour");
    a.innerHTML = '<a href="page.html" class="ad">acceuil</a>';
    k = i + j;
    const score = document.querySelector ('#container-score')
    score.innerHTML = '<div id="ip">Score ='+ k +"/"+(currentQuestionIndex + 1)+'</div>';
    if(k<5){
      const p = document.getElementById("ip").style.color="red"
    }
    else{
      const pm = document.getElementById("ip").style.color="green"
    }
  }
}
/*Fonction pour changer le statue du bonton et pour rajouter un point dans le score */
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    i++
  } else {
    element.classList.add('wrong')
  }
}
/* fonction pour reinitialiser la couleur des bouton*/
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
/* tableau pour contenir Toute mes question que je souhaite mettre (je peut rajouter autant de question que je souhaite cela n'affectera pas mon code)*/
const questions = [
  {
    question: 'Qui est ce perso?',
    image:'Rengar.jpg',
    answers: [
      { text: 'Rengar', correct: true },
      { text: 'Gnar', correct: false },
      { text: 'Sivir', correct: false },
      { text: 'Malphite', correct: false },
    ]
  },
  {
    question: 'Qui est ce perso?',
    image:'malphite.jpg',
    answers: [
      { text: 'Sivir', correct: false },
      { text: 'Gnar', correct: false },
      { text: 'Malphite', correct: true },
      { text: 'Riven', correct: false },
    ]
  },{
    question: 'Qui est ce perso?',
    image:'Sett.jpg',
    answers: [
      { text: 'Rakan', correct: false },
      { text: 'Viego', correct: false },
      { text: 'Katarina', correct: false },
      { text: 'Sett', correct: true },
    ]
  },
  {
    question: 'Qui est ce perso?',
    image:'Yasuo.jpg',
    answers: [
      { text: 'Viktor', correct: false},
      { text: 'Talon', correct: false },
      { text: 'Yasuo', correct: true },
      { text: 'Malphite', correct: false },
    ]
  },
  {
    question: 'Qui est ce perso?',
    image:'Lucian.jpg',
    answers: [
      { text: 'Morgana', correct: false },
      { text: 'Lucian', correct: true },
      { text: 'Zoe', correct: false },
      { text: 'Pantheon', correct: false },
    ]
  },
  {
    question: 'Quelle item permet de faire cette effets ?',
    image:'Zonhia.jpg',
    answers: [
      { text: "Zhonya", correct: true },
      { text: 'Rabadon', correct: false },
      { text: 'Luden', correct: false },
      { text: 'Percepteur', correct: false },
    ]
  },
  {
    question: 'A qui app ce skin ?',
    image:'Sion.jpg',
    answers: [
      { text: 'Tahm kench', correct: false },
      { text: 'Gnar', correct: false },
      { text: 'Sion', correct: true },
      { text: 'Malphite', correct: false },
    ]
  },
  {
    question: 'De quelle groupe de skin est ce Skin de Kayn?',
    image:"Skindel'aube.jpg",
    answers: [
      { text: "L'aube", correct: true },
      { text: 'Lune de sang', correct: false },
      { text: 'Seducteur', correct: false },
      { text: 'Gardien des etoiles', correct: false },
    ]
  },
    {
    question: 'Qui est ce Skin?',
    image:'Kindred.jpg',
    answers: [
      { text: 'Ashe', correct: false},
      { text: 'Varus', correct: false },
      { text: 'Sivir', correct: false },
      { text: 'Kindred', correct: true },
    ]
  },
  {question: 'Qui est ce perso?',
  image:'Daruis.jpg',
  answers: [
    { text: 'Neekko', correct: false },
    { text: 'Viego', correct: false },
    { text: 'Swain', correct: false },
    { text: 'Daruis', correct: true },
  ]
},


]
/*Le Style pour Mes question leur taille ect...*/
LesQuestion.style.display ="flex";
LesQuestion.style.flexDirection = "column";
LesQuestion.style.fontSize = "30px";
LesQuestion.style.height = "500px";
LesQuestion.style.width = "750px";
LesQuestion.style.color = "red"
