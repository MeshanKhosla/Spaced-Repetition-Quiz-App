import React from 'react'

/**
 * Component that renders either "Toggle quiz timer" or "Toggle question timer"
 */
const Trigger = ({ text }) => {
    return (
        <div className="timer-trigger">
            <h4>{text}</h4>
        </div>
    )
}

export default Trigger
