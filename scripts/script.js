let qField = $('q_field').html()
let answ1 = $('answ1').html()
let answ2 = $('answ2').html()
let answ3 = $('answ3').html()
let answ4 = $('answ4').html()
let body = $('body')

class TriviaGame {
  constructor () {
    this.number = Math.floor(Math.random() * 4)

    qField = questions.number.question
    answ1 = questions.number.answ1
    answ2 = questions.number.answ2
    answ3 = questions.number.answ3
    answ4 = questions.number.answ4
    // counter starts at 1
    
    body.addEventListener('click', checkAnswer() {
        if (click === this.corAnsw) {
            console.log(`You've got it!`)
        } else { console.log('Nope!') }
              
    })
  }
//   checkAnswer (click) {
//     if (click === this.corAnsw) {
//       console.log(`You've got it!`)
//     } else { console.log('Nope!') }
//   }
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
