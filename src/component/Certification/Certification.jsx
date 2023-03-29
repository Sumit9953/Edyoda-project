import React from 'react'
import './style.css'
import DataAnalysis from '../Icons/Data-Analysis.png'

const Certification = () => {
  return (
    <div>
      <h1 style={{marginLeft: "40px"}}>Upcoming Certification</h1>
      <div className='Home_card'>
        <div style={{display: 'flex' , alignItems: 'center'}}>
        <img style={{width: "70px" , height: '70px' , borderRadius:'100%'}} src={DataAnalysis} alt="" />
          <div className='certification_type'>
          <p className='certification'>CERTIFICATION | ATTEMPT 1</p>
          <h2 className='certification_title'>DATA ANALYSIS CERTIFICATION</h2>
          <p className='status'>COMPLETED  |  21 MAR 2022</p>
        </div>
        </div>
        <div className='ex_stru'>
          <h1 className='exam_strut_title'>Exam Structure</h1>
          <div className='round'>
            <p>Round 1</p>
            <button className='btn'>MCQS</button>
            <button className='btn'>CODING</button>
          </div>
          <div className='round'>
            <p>Round 2</p>
            <button className='btn'>PROJECT</button>
          </div>
        </div>
        <div>
          <button className='btn_details'>VIEW EXAM DETAILS</button>
        </div>
      </div>
    </div>
  )
}

export default Certification