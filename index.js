// Matthew Kopay Assignment 3 COM6338 Quiz Game

var questionsArr = [
    {
        question: 'France originally owned the U.S. Virgin Islands.',
        answer: false
    } ,

    {
        question: 'In 1900, Andrew Carnegie earned $23 million',
        answer: true 
    } ,

    {
        question: 'General George Armstrong Custer\'s troops were victorious at the Battle of Little Bighorn.',
        answer: false
    } ,

    {
        question: 'The Civil Service Act of 1883 marked the first step in establishing a professional civil service and removing office holding from the hands of political machines.',
        answer: true
    } ,

    {
        question: 'The Sherman Antitrust Act of 1890, which banned combinations and practices that restrain free trade, proved an immediate success, both for its clarity of language and ease of enforcement.',
        answer: false
    } ,

    {
        question: 'In 1869, President Ulysses S. Grant announced a new "peace policy" in the West.',
        answer: true
    } ,

    {
        question: 'According to Social Darwinism, government should seek to help the poor and build an activist state to regulate the nation\'s corporations.',
        answer: false
    }
]


function runQuiz() {
    var answersArr = [7];
    for(let i = 0; i < questionsArr.length; i++) {
        answersArr[i] = confirm(questionsArr[i].question);
    }

    var counter = 0;
    
    for (let i = 0; i < questionsArr.length; i++) {
        if (answersArr[i] === questionsArr[i].answer) {
            counter++
        }
    }
    
    let message = 'Your score is ' + Math.round((counter / questionsArr.length) * 100) + '%';
    alert(message);
}