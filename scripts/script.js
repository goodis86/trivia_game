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
    
    this.newLvl(lvlCounter)
    
    
  }
  newLvl(lvlCounter) {
    qField.html(questions[lvlCounter].question) 
    answ1.html(questions[lvlCounter].answ1)
    answ2.html(questions[lvlCounter].answ2)
    answ3.html(questions[lvlCounter].answ3)
    answ4.html(questions[lvlCounter].answ4)

    //$('.section2').addEventListener("click", this.helloWorld, false);
  }

  helloWorld(){
    consoloe.log('HelloWorld!')
  }

  nextLevel() {
    lvlCounter++
    this.newLvl(lvlCounter)
  }

  checkAnswer(click) {
    if (click.html() === questions[lvlCounter].corAnsw) {
      console.log(`You're right!!!`)
      rightAnswers++
      nextLevel()
    } else {
      console.log(`You're wrong!!!`)
      nextLevel()
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
    corAnsw: 'Zack',
    check: function (click) {
      if (click === this.corAnsw) {
        console.log(`You've got it!`)
      } else { console.log('Nope!') }
    }
  },

  3: {
    question: `What is David's name?`,
    answ1: 'Sandro',
    answ2: 'David',
    answ3: 'Zack',
    answ4: 'Pete',
    corAnsw: 'David',
    check: function (click) {
      if (click === this.corAnsw) {
        console.log(`You've got it!`)
      } else { console.log('Nope!') }
    }
  },

  4: {
    question: `What is Pete's name?`,
    answ1: 'Sandro',
    answ2: 'David',
    answ3: 'Zack',
    answ4: 'Pete',
    corAnsw: 'Pete',
    check: function (click) {
      if (click === this.corAnsw) {
        console.log(`You've got it!`)
      } else { console.log('Nope!') }
    }
  }
}

var Game = new TriviaGame()
