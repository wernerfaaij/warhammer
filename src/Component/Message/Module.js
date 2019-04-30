import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: this.props.message
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            message: newProps.message
        });
    };

    render () {
        const {
            message
        } = this.state;


        return (
            <div className={(message ? 'message message--show' : 'message')}>
                <div className='message__wrapper'>
                    <h3 className='message__title'>{message.title}</h3>
                    <div className='message__content'>
                        {message.content}
                    </div>
                    <div className='message__result'>
                        {message.result}
                    </div>
                    <div className='message__controls'>
                        {message.accept ? (
                            <button className='button button__primary' onClick={message.accept}>Accept</button>
                        ) : ''}
                        {message.decline ? (
                            <button className='button button__secondary' onClick={message.decline}>Decline</button>
                        ): ''}
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;