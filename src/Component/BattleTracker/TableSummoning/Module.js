import React, { Component } from 'react';

class TableSummoning extends Component {
    constructor (props) {
        super(props);
        this.state = {
            bloodtidePoints: this.props.bloodtidePoints,
            tableSummoning: this.props.tableSummoning
        }
    };

    componentWillReceiveProps(newProps) {
        this.setState({
            bloodtidePoints: newProps.bloodtidePoints
        });
    };


    render () {
        const {
            bloodtidePoints,
            tableSummoning
        } = this.state;

        const {
            useSummon
        } = this.props;

        return (
            <ul>
                {tableSummoning.map((summon, index) => (
                    <li key={index} className={summon.points <= bloodtidePoints ? ('summon summon--available') : ('summon')}>
                        <div className='summon__header'>
                            <span className='summon__points'>
                                {summon.points}
                            </span>
                            <span className='summon__unit'>
                                {summon.unit}
                            </span>
                        </div>
                        <div className='summon__controls'>
                            <button value={index} className='icon--droplet' disabled={summon.points > bloodtidePoints} name={summon.title} onClick={useSummon} />
                        </div>
                    </li>
                ))}
            </ul>
        );
    }
}

export default TableSummoning;