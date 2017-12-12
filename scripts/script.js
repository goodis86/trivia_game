//  class TriviaGame {
//      constructor() {
//          this.randomNumber = Math.floor(Math.random() * 20)
//      }

//      questionPrinter (randomNumber) {
        
//      }
//  }

var guestions = {
  question1: {
    question: '',
    answ1: '',
    answ2: '',
    answ3: '',
    answ4: '',
    corAnsw: '',
    check: function (click) {
      if (click === this.corAnsw) {
        console.log(`You've got it!`)
      } else { console.log('Nope!') }
    }
  },

  question2: {
    question: '',
    answ1: '',
    answ2: '',
    answ3: '',
    answ4: '',
    corAnsw: '',
    check: function (click) {
      if (click === this.corAnsw) {
        console.log(`You've got it!`)
      } else { console.log('Nope!') }
    }
  },

  question3: {
    question: '',
    answ1: '',
    answ2: '',
    answ3: '',
    answ4: '',
    corAnsw: '',
    check: function (click) {
      if (click === this.corAnsw) {
        console.log(`You've got it!`)
      } else { console.log('Nope!') }
    }
  }
}
