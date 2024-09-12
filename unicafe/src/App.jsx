import { useState } from 'react'


const Stats = ({ good, neutral, bad }) => {
  if (good == 0 && neutral == 0 && bad == 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={good + bad + neutral} />
      <StatisticLine text="average" value={(good + bad + neutral) / 3} />
      <StatisticLine text="positive" value={good / (good + neutral + bad) * 100} />
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td width="150px">{props.text}</td>
            <td>{props.value}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}



const App = () => {
  const [clicks, setClicks] = useState({ good: 0, neutral: 0, bad: 0 })


  const handleGood = () => setClicks({ ...clicks, good: clicks.good + 1 })
  const handleBad = () => setClicks({ ...clicks, bad: clicks.bad + 1 })
  const handleNeutral = () => setClicks({ ...clicks, neutral: clicks.neutral + 1 })

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <h1>statistics</h1>
      <Stats good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} />

    </div>
  )
}

export default App