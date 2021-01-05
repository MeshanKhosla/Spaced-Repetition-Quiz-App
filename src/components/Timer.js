import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useDispatch } from 'react-redux';
import { nextQuestion, replaceTimer } from '../actions';

const Timer = (props) => {
    const dispatch = useDispatch()
    return (
        <>
            <CountdownCircleTimer
                key={props.key}
                isPlaying
                duration={props.duration}
                colors={[
                    ['#004777', 0.33],
                    ['#F7B801', 0.33],
                    ['#A30000', 0.33],
                ]}
                onComplete={() => {
                    dispatch(nextQuestion())
                    dispatch(replaceTimer(15))
                }}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </>
    )
}


export default Timer;