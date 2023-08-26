import React from 'react';
import './Modal.css';

class Modal extends React.Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown',this.handleKeyDown)
    }
    
    handleKeyDown = evt => {            
        if (evt.code==='Escape') {
            this.props.onClose()    
        }
    }

    handleDackDropClick = evt => { 
        if (evt.target===evt.currentTarget) {
            this.props.onClose()
        }
    }

    render() {
        return (
            <div className='Overlay'>
                <div className='Modal'>{ this.props.children }</div>
            </div>
        )
    }
    
}

export default Modal