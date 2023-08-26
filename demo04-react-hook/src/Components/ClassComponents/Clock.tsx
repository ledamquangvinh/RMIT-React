import React from "react";

type DataProps = {
  message: string
}

type DataState = {
  value: number
  timer: Date
}

export default class Clock extends React.Component<DataProps, DataState> {
  state: DataState = {
    value: 0,
    timer: new Date()
  }

  timeID!: number

  public constructor(props: DataProps) {
    super(props)
    console.log("Step 1 constructor")
  }

  componentDidMount(): void {
    console.log("Step4: component did mount")
    this.timeID = setInterval(() => this.timer_tick(), 1000)
  }

  timer_tick = () => {
    console.log("Timer")
    this.setState({
      value: this.state.value,
      timer: new Date()
    })
  }

  timer_stop = () => {
    clearInterval(this.timeID)
    //console.log("Stop")
  }

  timer_start = () => {
    //console.log("Start")
    this.timeID = setInterval(() => this.timer_tick(), 1000)
  }


  componentWillUnmount(): void {
    console.log("Step5: component witll unmount")
    clearInterval(this.timeID)
  }

  onButton_Click = (e: React.FormEvent<HTMLButtonElement>) : void => {
    e.preventDefault()
    console.log("Step3 - event click button ")
    this.setState(
    { 
      value: this.state.value + 1,
      timer : this.state.timer 
    }) // re-render
  }

  render(): React.ReactNode {
    console.log("Step 2 - render")
    return(
      <div>
        <p>{this.props.message} with value:</p>
        <ul>
          <li>value: {this.state.value}</li>
          <li>this time is: {this.state.timer.toLocaleTimeString()}</li>
        </ul>
        <button type='button' onClick={this.onButton_Click}>Refresh</button>
        <button type='button' onClick={() => this.timer_stop()}>Stop</button>
        <button type='button' onClick={() => this.timer_start()}>Start</button>
      </div>
    )
  }
}