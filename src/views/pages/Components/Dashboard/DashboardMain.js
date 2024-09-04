import React from 'react'
import InfoCard from './InfoCard'
import ActivityCard from './ActivityCard'

const DashboardMain = () => {
  return (
    <div className='main' id='main'>
       <div className="pagetitle">
  <h1>Dashboard</h1>
  <nav>
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="index.html">Home</a></li>
      <li className="breadcrumb-item active">Dashboard</li>
    </ol>
  </nav>
</div>
<section className="section dashboard">
    <div className="row">
        <div className="col-lg-8">
            <div className="row">
            <InfoCard
          type="sales"
          title="Sales"
          amount="145"
          percentage="12%"
          increaseDecrease="increase"
          timeFrame="day"
        />
        <InfoCard
          type="revenue"
          title="Revenue"
          amount="$3,264"
          percentage="8%"
          increaseDecrease="increase"
          timeFrame="month"
        />
        <InfoCard
          type="customers"
          title="Customers"
          amount="1244"
          percentage="12%"
          increaseDecrease="decrease"
          timeFrame="year"
        />
            </div>
        </div>
        <div className="col-lg-4">
            <ActivityCard/>
        </div>
    </div>
</section>
    </div>
  )
}

export default DashboardMain