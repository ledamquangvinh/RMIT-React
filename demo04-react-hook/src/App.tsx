import './App.sass'
import Clock from './Components/ClassComponents/Clock'
import Board from './Components/FunctionComponents/Board'

function App() {

  return (
    <div>
      <Clock message={''}/>
      <hr />
      <Board/>
    </div>
  )
}

export default App
