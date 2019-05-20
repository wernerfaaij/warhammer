import React, { Component } from 'react';

class PointCounter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            title: this.props.title,
            count: this.props.count,
            counter: this.props.counter
        }
    };

    componentWillReceiveProps(newProps) {
        this.setState({
            counter: newProps.counter
        });
    };


    render () {
        const {
            title,
            count,
            counter
        } = this.state;

        const {
            onSubstract,
            onAdd
        } = this.props;

        return (
            <div className="counter">
                <div className="counter__content">
                    <label className="counter__title">{title}</label>
                    <span className="counter__counter">{counter <= 9 ? '0' + counter : counter}</span>
                </div>
                <div className="counter__controls">
                    <button disabled={counter <= 0 } className='controls__button button--subtract' name={count} onClick={onSubstract}>-</button>
                    <button className='controls__button button--add' name={count} onClick={onAdd}>+</button>
                </div>
            </div>
        );
    }
}

export default PointCounter;