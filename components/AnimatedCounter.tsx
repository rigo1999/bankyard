'use client'
import React from 'react';
import CountUp from 'react-countup'

const AnimatedCounter = ({amount}:{amount: number}) => {
  return (
    <div className='w-full'>
    <CountUp 
    prefix='CFA'
    decimals={2}
    decimal='.'
    end={amount}
    duration={3.75}
    />
    </div>
  )
}

export default AnimatedCounter