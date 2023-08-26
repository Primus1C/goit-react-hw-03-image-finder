import React from 'react';
import './Modal.css' from "react";

export default class Modal extends React.Components {

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className='Overlay'>
                <div className='Modal'>{ this.props.children}</div>
            </div>
        )
    }
}