import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
    state ={count:0}

    onIncrement=()=>{
        this.setState(prevState=>{
            return {count:prevState.count+1}
        })
    }
  render() {
    const {count}=this.state
    return (
      <div>
        <h1>This Button has been clicked {count} times</h1>
        <p>click on the button</p>
        <button onClick={this.onIncrement}>clickme</button>
      </div>
    )
  }
}

export default ClickCounter