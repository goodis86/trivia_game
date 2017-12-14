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
var questionNum = $('.q_counter')
var rightAnswers = 0
var lvlCounter = 1


/* 
  The main game class.
  Structure goes like this:
  1. Constructor launches the newLvl() which accesses the local
  object with questions and places them in the DOM according
  to tags conveniently established in the head.

  2. Also constructor launches the eventListener for clicks which
  in it's term launches the checkAnswers()

  3. checkAnswers() provides a check and iterates the counters.
  After that it launches the nextLevel() which iterates the main
  counter. It's used for the ID pickup from the DB. And relaunching
  the this.newLvl() with iterated ID.
*/

class TriviaGame {
    constructor() {

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
    nextLevel() {
        if (lvlCounter === 10) {
            this.terminator();
            return
        }
        else {
            ++lvlCounter
            questionNum.html(`${lvlCounter}/10`)
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

    animate() {

    }

    terminator() {
        console.log(`Terminator online! Terminating Sarah Connor!`)
        $('.section2').off();
    }
}

let questions = {
    1: {
        question: `What was this scientist's nationality at birth?
Daniel Bernoulli`,
        answ1: 'Swiss',
        answ2: 'French',
        answ3: 'Belgian',
        answ4: 'Italian',
        corAnsw: 'Swiss'
    },

    2: {
        question: `This is the study or science of what?
dermatology`,
        answ1: 'of plants',
        answ2: 'of skin',
        answ3: 'of matter',
        answ4: 'of animals',
        corAnsw: 'of skin'
    },

    3: {
        question: `Which person is associated with this invention or discovery?
Microwave oven`,
        answ1: 'Percy Spencer',
        answ2: 'Dennis Gabor',
        answ3: 'James Hargreaves',
        answ4: 'Raymond Kurzweil',
        corAnsw: 'Percy Spencer'
    },

    4: {
        question: `This is the study or science of what?
botany`,
        answ1: 'of animals',
        answ2: 'of environment',
        answ3: 'of life',
        answ4: 'of plants',
        corAnsw: 'of plants'
    },

    5: {
        question: `This is the study or science of what?
cytology`,
        answ1: 'of saints',
        answ2: 'of hands',
        answ3: 'of flags',
        answ4: 'of living cells',
        corAnsw: 'of living cells'
    },

    6: {
        question: `What is the name of this Greek letter?
Ξ`,
        answ1: 'Xi',
        answ2: 'Sigma',
        answ3: 'Epsilon',
        answ4: 'Eta',
        corAnsw: 'Xi'
    },

    7: {
        question: `This person is associated with the invention or discovery of what?
Johann Maria Farina`,
        answ1: 'Neon lamp',
        answ2: 'Eau de Cologne',
        answ3: 'Stainless steel',
        answ4: 'Chocolate milk',
        corAnsw: 'Eau de Cologne'
    },

    8: {
        question: `What is this study or science called?
study of signs and symbols`,
        answ1: 'vexillology',
        answ2: 'urbanology',
        answ3: 'semiotics',
        answ4: 'chiropody',
        corAnsw: 'semiotics'
    },

    9: {
        question: `What is this study or science called?
study of handwriting`,
        answ1: 'graphology',
        answ2: 'phonology',
        answ3: 'paleontology',
        answ4: 'ornithology',
        corAnsw: 'graphology'
    },

    10: {
        question: `This is the study or science of what?
ornithology`,
        answ1: 'of poisons',
        answ2: 'of birds',
        answ3: 'of spiders',
        answ4: 'of bones',
        corAnsw: 'of birds'
    },

    11: {
        question: `What specific isoline is described here?
Line of equal pressure`,
        answ1: 'Isotach',
        answ2: 'Isobar',
        answ3: 'Isotherm',
        answ4: 'Isohuman',
        corAnsw: 'Isobar'
    },

    12: {
        question: `This is the study or science of what?
physics`,
        answ1: 'of substances',
        answ2: 'of sound',
        answ3: 'of mind',
        answ4: 'of matter and energy',
        corAnsw: 'of matter and energy'
    }
}

// Creating the instance of the game below
var Game = new TriviaGame()
