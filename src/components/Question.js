/**
 * Represents a Question.
 * @param {string} text - The question text.
 * @param {array} options - The options for the question.
 * @param {string} answer - The answer for the question.
 */
class Question {
    STARTING_POINTS = 100;
    INITIAL_TIME = 20;
    constructor(text, options, answer) {
        this.text = text;
        this.options = options;
        this.answer = answer;
        this.points = this.STARTING_POINTS;
        this.timeAllowed = this.INITIAL_TIME;
    }
    
    // Updates the points and timeAllowed of the question instance
    correctAnswer(timeRemaining) {
        this.points += timeRemaining
        this.timeAllowed = Math.max(
            5,
            this.timeAllowed - this.getChangeTimeAmt(true, timeRemaining)
        )
    }
    
    incorrectAnswer(timeRemaining)  {
        this.points -= timeRemaining
        this.timeAllowed = Math.min(
            60,
            this.timeAllowed + this.getChangeTimeAmt(false, timeRemaining)
        )
    }

    getChangeTimeAmt(correctAns, timeRemaining) {
        let thresholdOne = 5;
        let thresholdTwo = 2.5;
        if (!correctAns) {
            thresholdOne = 10
            thresholdTwo = 5;
        }

        let distanceToT1 = Math.abs(timeRemaining / 2 - thresholdOne);
        let distanceToT2 = Math.abs(timeRemaining / 2 - thresholdTwo);

        if (distanceToT1 <= distanceToT2) {
            return thresholdOne;
        }
        return thresholdTwo
    }
}
export default Question;