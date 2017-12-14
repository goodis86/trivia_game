/*
  Global variables reside here.
  First 5 are JQuery shortcuts, and then counters for display fields 
*/

var qField = $('.q_field')
var answ1 = $('.answ1')
var answ2 = $('.answ2')
var answ3 = $('.answ3')
var answ4 = $('.answ4')
var section = $('.section2')
var points = $('.q_points')
var rightAnswers = 0
var lvlCounter = 1


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
    
    // The main construction proccess of the game is fired up below
    this.newLvl(lvlCounter)
    
    // The main event listener that registers the click
      section.click(this.checkAnswer.bind(this));
    
  }

  // Question population is done below
  newLvl(lvlCounter) {
    console.log(`lvlCounter in newLvl=${lvlCounter}`)
    qField.html(questions[lvlCounter].question) 
    answ1.html(questions[lvlCounter].answ1)
    answ2.html(questions[lvlCounter].answ2)
    answ3.html(questions[lvlCounter].answ3)
    answ4.html(questions[lvlCounter].answ4)
  }

  /* Next level is fired up below, also there is a check
   so you wouldn't play too long :) */
  nextLevel () {
    if (lvlCounter === 3) {this.terminator(); return}
    else {
      lvlCounter++
      console.log(`lvlCounter=${lvlCounter}`)
      this.newLvl(lvlCounter)
    }
  }

  //
  checkAnswer(event) {
    // =================== checks and logs ==================
    console.log(`event target= ${$(event.target).html()}`)
    console.log(`corAnsw= ${questions[lvlCounter].corAnsw}`)
    // ======================================================

    if ($(event.target).html() === questions[lvlCounter].corAnsw) {
      points.html(`${++rightAnswers} pnts`)
      console.log(`You're right!!! C/A ${questions[lvlCounter].corAnsw}`)

      this.nextLevel()
    } else {
      console.log(`You're wrong!!!`)
      this.nextLevel()
    }
  }

  terminator(){
    console.log(`Terminator online! Terminating Sarah Connor!`)
    $('.section2').off();
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

//JSon engaged. Formating ans storing data in JSon file
// var dataStore = JSON.stringify(questions)
// storage.setItem('someData', dataToStore);
// var localData = JSON.parse(localStorage.getItem('someData'));

// $.each(localData, function(key, value){
//   console.log(key + ' = ' + value);
// });

// I won't tell you what this string below does, sorry.
var Game = new TriviaGame()
