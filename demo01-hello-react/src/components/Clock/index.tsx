import React from "react";
import './style.css'

type Type = {
  date : Date
}

export default class Clock extends React.Component<Type> {
  // Define state (statement of class component, treat as an attribute of class)
  state : Type = {
    date : new Date()
  }

  timeID! : number

  // Define Constructop
  public constructor(props : Type) {
    super(props)
  }

  // Define event handle Pre-render
  public componentDidMount() {
    this.timeID = setInterval(() => this.timer_tick(), 1000)
  }

  // Define event after handle Render
  public componentWillUnmount() {
    clearInterval(this.timeID)
  }

  private timer_tick() {
    this.setState({date : new Date()})
  }

  public render() {
    return (
      <div className='timer'>
        Now is <span>{this.state.date.toLocaleTimeString()}</span>
      </div>
    )
  }
}