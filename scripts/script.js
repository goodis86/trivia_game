var qField = $('.q_field')
var answ1 = $('.answ1')
var answ2 = $('.answ2')
var answ3 = $('.answ3')
var answ4 = $('.answ4')
var body = $('.section2')
var lvlCounter = 1
var rightAnswers = 0

//$('.section2').addEventListener("click", this.helloWorld, false);


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
