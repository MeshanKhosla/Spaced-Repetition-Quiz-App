import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useDispatch } from 'react-redux';
import { updateRemainingTime } from '../actions';

const Timer = ({ duration, key, isQuestionTimer }) => {
    const dispatch = useDispatch();
    return (
        <>
            <CountdownCircleTimer
                key={key}
                isPlaying
                duration={duration}
                colors={[
                    ['#004777', 0.33],
                    ['#F7B801', 0.33],
                    ['#A30000', 0.33],
                ]}
                // onComplete={() => {
                //     // dispatch(nextQuestion())
                //     // dispatch(replaceTimer(15))
                // }}
            >
                {({ remainingTime }) => {
                    if (isQuestionTimer) {
                        dispatch(updateRemainingTime(remainingTime))
                    }
                    return remainingTime
                }}
            </CountdownCircleTimer>
        </>
    )
}


export default Timer;