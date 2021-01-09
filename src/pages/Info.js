import React from "react";
import Highlight from "react-highlight.js";

const code = `
from queue import PriorityQueue

class Question:
    def __init__(self, text, options, answer):
        self.text = text
        self.options = options
        self.answer = answer
        self.points = 100
        self.time_allowed = 20


questions = [
    (0, Question("Question 1", ["a", "b"], "a")),
    (1, Question("Question 2", ["a", "b"], "a")),
    (2, Question("Question 3", ["a", "b"], "b")),
    (3, Question("Question 4", ["a", "b"], "b")),
]

pq = PriorityQueue()

def alg():
    # Initial questions
    for q in questions:
        ask_question(q[1])

    update_pq()
    # Subsequent questions
    for _ in range(10): # Arbitrary amount
        curr_pq = pq.get()
        curr_question = curr_pq[1][1]
        ask_question(curr_question)
        pq.put((curr_question.points, (curr_pq[1][0], curr_question))) # .get() removes elem from a pq

    # Compute final score
    total = sum([q[1].points for q in questions])
    print(f"Result: {total / len(questions)}")

def update_pq():
    for q in questions:
        pq.put((q[1].points, q))

def ask_question(q):
    print(f"You have {q.time_allowed} seconds")
    print(q.text)
    correct = q.answer
    user_answer = input("Which is correct? " + str(q.options))
    if user_answer == correct:
        correct_answer(q)
    else:
        incorrect_answer(q)
    print("")

def correct_answer(q):
    print("Correct")
    time_remaining = int(input("Time remaining: "))
    q.points += time_remaining
    q.time_allowed -= get_change_time_amt(True, time_remaining)

    
def incorrect_answer(q):
    print("Incorrect")
    time_remaining = int(input("Time remaining: "))
    q.points -= time_remaining
    q.time_allowed += get_change_time_amt(False, time_remaining)


def get_change_time_amt(correct_ans, time_remaining):
    threshold_1, threshold_2 = 5, 2.5
    if not correct_ans:
        threshold_1, threshold_2 = 10, 5

    change_time = min(threshold_1, threshold_2, 
                     key=lambda x: abs((time_remaining / 2) - x))
    return change_time


alg()
`;

const Info = () => {
    return (
        <>
            <div className="info">
                <h3>
                    The idea of spaced learning is that you see more frequent
                    and more difficult questions more often than easier ones.
                    This is a quiz app implementing that technique.
                </h3>
                <p>
                    To do this, I implemented a priority queue system where all
                    questions are given a score of 100 points at the begining.
                    Then, that score is changed based on how well they performed
                    on that question previously. This includes whether they got
                    that question right and how much time they took on the
                    question. The points are changed based on how many seconds
                    are remaining on the timer. The time allowed for the
                    question is also based on the time remaining along with a
                    few thresholds. The question asked is the one with the least
                    amount of points in the queue.
                </p>
                <p>Python code I used to test the concept:</p>
            </div>
            <Highlight className="python-code" language={"python"}>{code}</Highlight>
        </>
    );
};

export default Info;
