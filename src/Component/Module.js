import React, { Component } from 'react';
import PointCounter from './PointCounter/Module';
import TableRewards from './TableRewards/Module';
import TableSummoning from './TableSummoning/Module';
import Message from './Message/Module';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commandPoints: 0,
            score: 0,
            bloodtidePoints: 0,
            message: '',
            tableSummoning: [{
                points: '2',
                unit: 'Bloodmaster Herald of Khorne',
            },{
                points: '2',
                unit: '5 Bloodletters',
            },{
                points: '3',
                unit: 'Skullmaster Herald of Khorne',
            },{
                points: '3',
                unit: '5 Flesh Hounds',
            },{
                points: '4',
                unit: 'Herald of Khorne onBlood Throne',
            },{
                points: '4',
                unit: '10 Bloodletters',
            },{
                points: '5',
                unit: '1 Skullcannon',
            },{
                points: '5',
                unit: '3 Bloodcrushers',
            },{
                points: '6',
                unit: '10 Flesh Hounds',
            },{
                points: '6',
                unit: '15 Bloodletters',
            },{
                points: '7',
                unit: '20 Bloodletters',
            },{
                points: '8',
                unit: 'Bloodthirster of Unfettered Fury',
            },{
                points: '8',
                unit: 'Bloodthirster of Insensate Rage',
            },{
                points: '8',
                unit: 'Wrath of Khorne Bloodthirster',
            }],
            tableRewards: [{
                points: 1,
                title: 'Bloody Exemplar',
                effect: 'Gain a command point.',
                fluf: '',
            }, {
                points: 2,
                title: 'Spelleater Curse',
                effect: ' Choose this reward immediately after a WIZARD has cast a spell anywhere on the battlefield; it is automatically unbound. ',
                fluf: '',
            }, {
                points: 3,
                title: 'Murderlust',
                effect: 'Select a Khorne unit from your army; that unit can move as if it were the movement phase. If it is within 12" of an enemy model, it can either move as if it were the movement phase or charge as if it were the charge phase.',
                fluf: '',
            }, {
                points: 4,
                title: 'Apocalyptic Frenzy',
                effect: 'Select a Khorne unit from your army that is within 3" of an enemy model; that unit can immediately pile in and attack as if it were the combat phase.',
                fluf: '',
            }, {
                points: 5,
                title: 'Brass Skull Meteor',
                effect: 'Pick a single unit anywhere on the battlefield; that unit immediately suffers D3 mortal wounds. In addition, roll a dice for each unit within 8" of the unit you picked; on a roll of 3 or more, the unit being rolled for suffers a mortal wound. If the roll is a 6, the unit takes D3 mortal wounds instead.',
                fluf: '',
            }, {
                points: 6,
                title: 'Relentless Fury',
                effect: 'Until your next hero phase, each time a KHORNE model in your army is slain in the combat phase, you can make a pile in move and then attack with the model before you remove it',
                fluf: '',
            }, {
                points: 7,
                title: 'Crimson Rain',
                effect: 'You may use this once per battle. Immediately after you use it, and every one of your hero phases afterwards, you may heal all friendly Khorne units on the battlefield D3.',
                fluf: '',
            }, {
                points: 8,
                title: 'Slaughter Triumphant',
                effect: 'You may use this once per battle. Effects all friendly Khorne units. Unmodified melee hit rolls of 6 count as 2 hits instead of 1.',
                fluf: '',
            }]
        }
    };

    onSubstract = (event) => {
        const counter = event.target.name;
        const setValue = this.state[counter] - 1;

        if(setValue >= 0) {
            this.setState ({
                [counter]: setValue
            });
        }
    };

    onAdd = (event) => {
        const counter = event.target.name;
        const setValue = this.state[counter] + 1;

        this.setState ({
            [counter]: setValue
        });
    };

    onDeclineReward = () => {
        this.setState ({
            message: ''
        });
    }

    onAcceptReward = (event) => {
        this.setState ({
            bloodtidePoints: 0,
            message: ''
        });
    }

    useReward = (event) => {
        const index = event.target.value;
        const reward = this.state.tableRewards[index];
        const title = 'Bloodtide Reward ' + reward.title;
        const mainMessage = 'Are you sure you want to use ' +  reward.title + ' as your reward. When you accept all Bloodtide point\'s will be spended.';
        const effect = 'The following effect will occure' + reward.effect;

        this.setState ({
            message: {
                title: title,
                content: mainMessage,
                result: effect,
                accept: this.onAcceptReward,
                decline: this.onDeclineReward
            }
        })
    };

    useSummon = (event) => {
        const index = event.target.value;
        const reward = this.state.tableSummoning[index];
        const title = 'Summon ' + reward.unit;
        const mainMessage = 'Are you sure you want to summon a unit of' +  reward.unit + '. When you accept all Bloodtide point\'s will be spended.';
        const effect = '';

        this.setState ({
            message: {
                title: title,
                content: mainMessage,
                result: effect,
                accept: this.onAcceptReward,
                decline: this.onDeclineReward
            }
        })
    };

    render () {
        const {
            commandPoints,
            score,
            message,
            bloodtidePoints,
            tableSummoning,
            tableRewards
        } = this.state;

        return (
            <div className="App">
                <Message message={message} />
                <section>
                    <div className='point-counter'>
                        <PointCounter
                            title = {'Command Points'}
                            count = {'commandPoints'}
                            counter = {commandPoints}
                            onSubstract = {this.onSubstract}
                            onAdd = {this.onAdd}/>
                        <PointCounter
                            title = {'Score'}
                            count = {'score'}
                            counter = {score}
                            onSubstract = {this.onSubstract}
                            onAdd = {this.onAdd}/>
                        <PointCounter
                            title = {'Bloodtide Points'}
                            count = {'bloodtidePoints'}
                            counter = {bloodtidePoints}
                            onSubstract = {this.onSubstract}
                            onAdd = {this.onAdd}/>
                    </div>
                    {bloodtidePoints ? (
                        <div className='table'>
                            <div className='table__rewards'>
                                <TableRewards
                                    tableRewards={tableRewards}
                                    bloodtidePoints={bloodtidePoints}
                                    useReward = {this.useReward}
                                />
                            </div>
                            <div className='table__summoning'>
                                <TableSummoning
                                    tableSummoning={tableSummoning}
                                    bloodtidePoints={bloodtidePoints}
                                    useSummon = {this.useSummon}
                                />
                            </div>
                        </div>
                    ) : ''}
                </section>
            </div>
        );
    }
}

export default App;
