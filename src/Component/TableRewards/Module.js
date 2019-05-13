import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class TableRewards extends Component {
    constructor (props) {
        super(props);
        this.state = {
            bloodtidePoints: this.props.bloodtidePoints,
            tableRewards: this.props.tableRewards,
            toggledIndex: ''
        }
    };

    componentWillReceiveProps(newProps) {
        this.setState({
            bloodtidePoints: newProps.bloodtidePoints
        });
    };

    toggleContent = (index) => {
        this.setState({
            toggledIndex: index === this.state.toggledIndex ? '' : index
        })
    };


    render () {
        const {
            bloodtidePoints,
            tableRewards,
            toggledIndex
        } = this.state;

        const {
            useReward
        } = this.props;

        return (
            <ul>
                {tableRewards.map((reward, index) => (
                    <li key={index} className={reward.points <= bloodtidePoints ? ('reward reward--available') : ('reward')}>
                        <div className='reward__header' onClick={(event) => this.toggleContent(index)}>
                            <span className='reward__points'>
                                {reward.points}
                            </span>
                            <span className='reward__title'>
                                {ReactHtmlParser (reward.title)}
                            </span>
                        </div>
                        <div className={(toggledIndex === index ? 'reward__content content--show' : 'reward__content')}>
                            {reward.fluf ? (
                                <span className='reward_fluf'>
                                    {ReactHtmlParser (reward.fluf)}
                                </span>
                            ) : ''}
                            {reward.effect ? (
                                <span className='reward_fluf'>
                                    {ReactHtmlParser (reward.effect)}
                                </span>
                            ) : ''}
                        </div>
                        <div className='reward__controls'>
                            <button value={index} className='icon--droplet' disabled={reward.points > bloodtidePoints} name={reward.title} onClick={useReward} />
                        </div>
                    </li>
                 ))}
            </ul>
        );
    }
}

export default TableRewards;