import React from 'react'

import "./ScoreBoard.css"

export const ScoreBoard = ({scores}) => {
  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
       <span className="score score-x">X-{xScore}</span>
       <span className='score score-o'>O-{oScore}</span>
    </div>
  )
}