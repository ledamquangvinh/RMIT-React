/**
 * Define func component for Footer 
 */
import React from "react"

type Props = { message: string}

const Footer : React.FC<Props> = (props :Props) => {
  return (
    <footer>
      <h3>{props.message}</h3>
    </footer>
  )
}

export default Footer