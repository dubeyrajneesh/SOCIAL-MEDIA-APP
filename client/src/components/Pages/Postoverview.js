import React from 'react'
import './Postoverview.css'
import Card from './Card'

const Postoverview = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">

          <Card />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12">

          <Card />
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12">

          <Card />
        </div>


      </div>


    </div>
  )
}

export default Postoverview
