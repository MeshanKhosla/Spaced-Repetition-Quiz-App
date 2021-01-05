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
}
export default Question;