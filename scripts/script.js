/*
  Global variables reside here.
  First 5 are JQuery shortcuts, and then counters for displays fields 
*/

var qField = $('.q_field')
var answ1 = $('.answ1')
var answ2 = $('.answ2')
var answ3 = $('.answ3')
var answ4 = $('.answ4')
var body = $('.section2')
var lvlCounter = 1
var rightAnswers = 0

//$('.section2').addEventListener("click", this.helloWorld, false);

/* 
  The main game class.
  Structure goes like this:
  1. Constructor launches the newLvl() which accesses the local
  object with questions and places them in the DOM according
  to tags conveniently established in the head.

  2. Also constructor launches the eventListener for clicks which
  in it's term lauches the checkAnswerw()

  3. checkAnswerw() provides a check and iterates the counters.
  After that it launches the nextLevel() which iterates the main
  caunter. It's used for the ID pickup from the DB. And relaunching
  the this.newLvl() with iterated ID.
*/

class TriviaGame {
  constructor () {
    
    console.log(`lvlCounter in constructor=${lvlCounter}`)
    this.newLvl(lvlCounter)
    
    $('.section2').click(this.checkAnswer.bind(this));
    
  }
  newLvl(lvlCounter) {
    console.log(`lvlCounter in newLvl=${lvlCounter}`)
    qField.html(questions[lvlCounter].question) 
    answ1.html(questions[lvlCounter].answ1)
    answ2.html(questions[lvlCounter].answ2)
    answ3.html(questions[lvlCounter].answ3)
    answ4.html(questions[lvlCounter].answ4)

    //$('.section2').click(this.helloWorld.bind(this));
    //$('.section2').click(this.checkAnswer.bind(this));
  }

  // helloWorld (event) {
  //   console.log('HelloWorld!', this, event)
  //   // $
  //   let text = $(event.target).html()
  //   // vanilla
  //   let otherText = event.target.innerHTML
  //   console.log(text, otherText)
  // }

  nextLevel () {
    lvlCounter++
    console.log(`lvlCounter=${lvlCounter}`)
    this.newLvl(lvlCounter)
  }

  checkAnswer(event) {
    // =================== checks and logs ==================
    console.log(`event target= ${$(event.target).html()}`)
    console.log(`corAnsw= ${questions[lvlCounter].corAnsw}`)
    // ======================================================

    if ($(event.target).html() === questions[lvlCounter].corAnsw) {
      console.log(`You're right!!! C/A ${questions[lvlCounter].corAnsw}`)
      this.nextLevel()
    } else {
      console.log(`You're wrong!!!`)
      this.nextLevel()
    }
  }
 }

let questions = {
  1: {
    question: `What is Sandro's name?`,
    answ1: 'Sandro',
    answ2: 'David',
    answ3: 'Zack',
    answ4: 'Pete',
    corAnsw: 'Sandro'
  },

  2: {
    question: `What is Zack's name?`,
    answ1: 'Sandro',
    answ2: 'David',
    answ3: 'Zack',
    answ4: 'Pete',
    corAnsw: 'Zack'
  },

  3: {
    question: `What is David's name?`,
    answ1: 'Sandro',
    answ2: 'David',
    answ3: 'Zack',
    answ4: 'Pete',
    corAnsw: 'David'
  },

  4: {
    question: `What is Pete's name?`,
    answ1: 'Sandro',
    answ2: 'David',
    answ3: 'Zack',
    answ4: 'Pete',
    corAnsw: 'Pete'
  },

  5: {
    question: `What is Sandro's name?`,
    answ1: 'Sandro',
    answ2: 'David',
    answ3: 'Zack',
    answ4: 'Pete',
    corAnsw: 'Sandro'
  },

  6: {
    question: `What is Zack's name?`,
    answ1: 'Sandro',
    answ2: 'David',
    answ3: 'Zack',
    answ4: 'Pete',
    corAnsw: 'Zack'
  },

  7: {
    question: `What is David's name?`,
    answ1: 'Sandro',
    answ2: 'David',
    answ3: 'Zack',
    answ4: 'Pete',
    corAnsw: 'David'
  },

  8: {
    question: `What is Pete's name?`,
    answ1: 'Sandro',
    answ2: 'David',
    answ3: 'Zack',
    answ4: 'Pete',
    corAnsw: 'Pete'
  },

  9: {
    question: `What is Sandro's name?`,
    answ1: 'Sandro',
    answ2: 'David',
    answ3: 'Zack',
    answ4: 'Pete',
    corAnsw: 'Sandro'
  },

  10: {
    question: `What is Zack's name?`,
    answ1: 'Sandro',
    answ2: 'David',
    answ3: 'Zack',
    answ4: 'Pete',
    corAnsw: 'Zack'
  },

  11: {
    question: `What is David's name?`,
    answ1: 'Sandro',
    answ2: 'David',
    answ3: 'Zack',
    answ4: 'Pete',
    corAnsw: 'David'
  },

  12: {
    question: `What is Pete's name?`,
    answ1: 'Sandro',
    answ2: 'David',
    answ3: 'Zack',
    answ4: 'Pete',
    corAnsw: 'Pete'
  }
}

var Game = new TriviaGame()
