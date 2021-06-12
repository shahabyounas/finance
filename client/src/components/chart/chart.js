import React from 'react'
import { Chart as ReactChart } from 'react-charts'
 
const Chart = ({ d = [], a = [] , width = '400px', height = '300px' }) => {
  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[0, 4], [1, 2], [2, 4], [3, 2], [4, 8]]
      },
      {
        label: 'Series 2',
        data: [[0, 3.5], [1, 2], [2, 5], [3, 3], [4, 6]]
      }
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom' },
      { type: 'time', position: 'left' }
    ],
    []
  )
 
  return (
    <div style={{ width, height, marginLeft: '2rem', transform: 'scale(1.08)' }}>
      <ReactChart data={data} axes={axes} />
    </div>
  )
}

export default Chart;