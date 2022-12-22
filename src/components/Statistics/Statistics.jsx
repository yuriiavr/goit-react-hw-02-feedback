import React from "react";
import propTypes from 'prop-types';
import css from '../Statistics/Statistics.module.css';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <h2>Statistics</h2>
            <ul className={css.statistics__data__thumb}>
                <li className={css.statistics__data}>Good: {good}</li>
                <li className={css.statistics__data} >Neutral: {neutral}</li>
                <li className={css.statistics__data} >Bad: {bad}</li>
                <li className={css.statistics__underlined__data} >Total: {total()}</li>
                <li className={css.statistics__underlined__data} >Positive feedback: { positivePercentage()} %</li>
            </ul>
        </div>
    )
    
}

Statistics.propTypes = {
    good: propTypes.number.isRequired,
    neutral: propTypes.number.isRequired,
    bad: propTypes.number.isRequired,
    total: propTypes.func.isRequired,
    positivePercentage: propTypes.func.isRequired,
}


export default Statistics;