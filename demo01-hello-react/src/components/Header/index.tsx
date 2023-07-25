/**
 * Define calss component for React Header of page
 */

import React, {Component} from "react";
import reactLogo from '../../assets/react.svg'

type Props = {
    title : string
}

class Header extends React.Component<Props> {
    public constructor(prop : Props) {
        super(prop)
    }

    public render() {
        return (
            <header>
                <h1>{ this.props.title }</h1>
                <img src={reactLogo} className='logo react'/>
            </header>
        )
    }
}

export default Header