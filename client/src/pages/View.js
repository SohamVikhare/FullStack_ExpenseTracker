import React from 'react'
import Graph from '../component/Graph'
import Navbar from '../component/Navbar'
import SumByType from '../component/Sum'

export default function View() {
  return (
    <div>
        <div><Navbar/></div>
        <div><SumByType/></div>
    </div>
  )
}
