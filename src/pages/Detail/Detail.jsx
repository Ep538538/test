import React from 'react'
import PatientList from '../Main/PatientList'
import Column from './Column'
import Graphic from './Graphic'
import Chart from './Chart'

const Detail = () => {
  return (
    <div>
        <PatientList/>
        <Column/>
        <Graphic/>
        <Chart/>
    </div>
  )
}

export default Detail