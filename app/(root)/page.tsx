import React from 'react';
import '../globals.css';
import HeaderBox from '@/components/headerbox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSideBar from '@/components/RightSideBar';


const Dashboard = () => {
    const loggedIn ={
      "firsName":"Ditoma",
      "lastName":"Rigobert",
      "email":"ditoma@gmail.com",
    }
  return (
    <section className='home font-poppins'> 
    <div className='home-content'>
    <header className='home-header'>
       <HeaderBox 
       type ="greeting"
       title="Welcome"
       user={loggedIn?.firsName || "Guest"}
       subtext='Access and manage your account and transactions efficiently'
       />
       <TotalBalanceBox 
    accounts={[]}
    totalBanks = {1}
    totalCurrentBalance={25234.45}
    />
    </header>
    
    REcent TRansac
    </div>
    <RightSideBar
    user={loggedIn}
    transactions = {[]}
    banks ={[]}
    />
    </section>
  )
}

export default Dashboard;