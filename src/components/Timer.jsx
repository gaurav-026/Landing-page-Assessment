import React from 'react'
import timeIcon from "../assets/bx-time-five.svg"
// import arrowIcon from "../assets/scribble-final-version-24.svg"
import { Slider } from '@mui/material'
import { styled } from '@mui/material/styles';

const Timer = () => {
  const CustomSlider = styled(Slider)({
    color: '#FFC41B', // Custom color


    '& .MuiSlider-thumb': {
      backgroundColor: '#fff', // Custom thumb color
      height: 24,
      width: 24,

    },
    '& .MuiSlider-rail': {
      color: 'rgba(255, 255, 255, 0.15)', // Custom rail color
      height: 10,
    },
    '& .MuiSlider-track': {
      color: '#FFC41B', // Custom track color
      height: 10,

    },
  });
  return (

    <div className="time-card">

      <span className='refund'>100% Refund Offer 😎 </span>

      <p className='seats'>20 Seats Left</p>
      <div style={{ width: "100%" }}>
        <CustomSlider
          defaultValue={20}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </div>

      <div className="offer">
        <img src={timeIcon} alt="timeIcon" /> Offer ends in 10:00 Mins
      </div>
    </div>
  )
}

export default Timer
