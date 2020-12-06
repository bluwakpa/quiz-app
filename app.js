/**
 * Example store structure
 */
const STORE = {

  // 5 or more questions are required

  questions: [
    {
      question: 'Which is the first internet search engine?',
      answers: [
        'Google',
        'Archie',
        'Altavista',
        'WAIS'
      ],
      correctAnswer: 'Archie'
    },

    {
      question: 'Which is the first internet web browser invented in 1990?',
      answers: [
        'Internet Explorer',
        'AOL',
        'Mosiac',
        'Nexus'
      ],
      correctAnswer: 'Nexus'
    },
 

    {
      question: 'Which was the first computer virus?',
      answers: [
        'Trojan',
        'Elk Cloner',
        'SCA Virus',
        'Creeper Virus'
      ],
      correctAnswer: 'Creeper Virus'
    },

    {
      question: 'Which programming language is exclusively used for artificial intelligence?',
      answers: [
        'Prolog',
        'C',
        'Java',
        'J2EE'
      ],
      correctAnswer: 'Prolog'
    },

    {
      question: 'Who is known as the father of the internet?',
      answers: [
        'Alan Perlis',
        'Jean E. Sammet',
        'Vint Cerf',
        'Steve Lawrence'
      ],
      correctAnswer: 'Vint Cerf'
    },

],
quizStarted: false,
questionNumber: 0,
score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)