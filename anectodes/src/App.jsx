import { useState } from 'react'

const Button = (props) => {
  return (
    <div>
      <p>{props.text} </p>
      <p>has {props.vote} votes</p>

      <button onClick={props.onClick}>next anectode</button>
      
    </div>
  )
}

const Vote = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>vote</button>
    </div>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]


  
  const [selected, setSelected] = useState(0)
  const [vote,setVote] = useState({0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0})

  const handleNext = () => {
    let broj=Math.floor(Math.random() * anecdotes.length)
    return setSelected(broj)
  }
  const handleVote = () => {
    const mijau={...vote}
    mijau[selected]+=1
    return setVote(mijau)
  }
  let max=0
  let ind=0

  for (let i=0; i<anecdotes.length; i++) {
    if(vote[i]>max){
      max=vote[i]
      ind=i
    }
  }
  

  return (
    <div>
      <h2>Anectode of the day</h2>
      <Button onClick={handleNext} text={anecdotes[selected]} vote={vote[selected]} />
      <Vote onClick={handleVote} vote={vote[selected]} />
      <h2>Anectode with most votes</h2>
      <p>{anecdotes[ind]}</p>
    </div>
  )
}

export default App