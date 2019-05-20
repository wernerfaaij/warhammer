import React, { Component } from 'react';
import PointCounter from './PointCounter/Module';
import TableRewards from './TableRewards/Module';
import TableSummoning from './TableSummoning/Module';
import Message from '../Message/Module';

class BattleTracker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commandPoints: 0,
            score: 0,
            bloodtidePoints: 0,
            message: '',
            tabsOpend: 'rewards',
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
                effect: 'You receive 1 command point.',
                fluf: '',
            }, {
                points: 2,
                title: 'Spelleater Curse',
                effect: ' Choose this reward immediately after a <strong>WIZARD</strong> has cast a spell anywhere on the battlefield, before any attempts to unbind that spell are made. That spell is not successfully cast.',
                fluf: '',
            }, {
                points: 3,
                title: 'Murderlust',
                effect: 'Pick 1 friendly <strong>KHORNE</strong> unit; that unit can make a normal move. If it is within 12" pf an enemy model, it can either make a normal move or attempt to make a charge move.',
                fluf: '',
            }, {
                points: 4,
                title: 'Apocalyptic Frenzy',
                effect: 'Pick 1 friendly <strong>KHORNE</strong> unit within 3" of an enemy unit. That <strong>KHORNE</strong> unit can make a pile in move and then attack with all of the melee weapons it is armed width.',
                fluf: '',
            }, {
                points: 5,
                title: 'Brass Skull Meteor',
                effect: 'Pick 1 unit anywhere on the battlefield; that unit suffers D3 mortal wounds. In addition, roll a dice for each unit within 8" of that unit on a 3+ the unit beinig rolled for suffers 1 mortal wound. On a 6, the unit being rolled for suffers D3 mortal wounds instead.',
                fluf: '',
            }, {
                points: 6,
                title: 'Relentless Fury',
                effect: 'Until your next hero phase, each time a friendly <strong>KHORNE</strong> model is slain in the combat phase, before the model is removed from play, it can make a pile-in move and then attack with all of the melee weapons it is armed with.',
                fluf: '',
            }, {
                points: 7,
                title: 'Crimson Rain',
                effect: 'You can choose this reward once per battle. Immediately after you do so, and at the start of each of your subsequent hero phases, you can heal up to D3 wounds allocated to each friendly <strong>KHORNE</strong> unit on the battlefield.',
                fluf: '',
            }, {
                points: 8,
                title: 'Slaughter Triumphant',
                effect: 'You can choose this reward once per battle. After you do so, if the unmodified hit roll for an attack made with a melee weapon by a friendly <strong>KHORNE</strong> unit is 6, that attack scores 2 hits on the target instead of 1. Make a wound and save roll for each hit.',
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

    onAcceptReward = () => {
        this.setState ({
            bloodtidePoints: 0,
            message: ''
        });
    }

    selectTab = (tab) => {
        this.setState ({
            tabsOpend: tab
        });
    }

    useReward = (event) => {
        const index = event.target.value;
        const reward = this.state.tableRewards[index];
        const title = 'Bloodtide Reward ' + reward.title;
        const mainMessage = 'Are you sure you want to use <strong>' +  reward.title + '</strong> as your reward. When you accept all Bloodtide point\'s will be spended.';
        const effect = '<strong>The following effect will occure:</strong><br /> ' + reward.effect;

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
        const mainMessage = 'Are you sure you want to summon a unit of <strong>' +  reward.unit + '</strong>. When you accept all Bloodtide point\'s will be spended.';
        const effect = '';

        this.setState ({
            message: {
                title: title,
                content: mainMessage,
                result: effect,
                accept: this.onAcceptReward,
                decline: this.onDeclineReward
            }
        });
    };

    render () {
        const {
            commandPoints,
            score,
            message,
            bloodtidePoints,
            tableSummoning,
            tableRewards,
            tabsOpend
        } = this.state;

        const amountContent = (table,  bloodtidePoints) => {
            const availableRewards = table.filter(i => i.points <= bloodtidePoints);
            const numberOfRewards = availableRewards.length;

            return (numberOfRewards <= 9 ? '0' + numberOfRewards : numberOfRewards);
        };

        return (
            <div className="BattleTracker">
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
                        <div className='tabs'>
                            <div className='tabs__controls'>
                                <div className={'tabs__control tabs--button' + (tabsOpend === 'rewards' ? ' active' : '')}
                                     data-tab="rewards">
                                    <span onClick={() => this.selectTab('rewards')}>Rewards {amountContent(tableRewards,  bloodtidePoints)}</span>
                                </div>
                                <div className={'tabs__control tabs--button' + (tabsOpend === 'summoning' ? ' active' : '')}
                                     data-tab="summoning">
                                    <span onClick={() => this.selectTab('summoning')}>Summoning {amountContent(tableSummoning, bloodtidePoints)}</span>
                                </div>
                            </div>
                            <div className='tabs__content'>
                                <div className={'tab tab--rewards' + (tabsOpend === 'rewards' ? ' active' : '')}>
                                    <h2>Rewards</h2>
                                    <TableRewards
                                        tableRewards={tableRewards}
                                        bloodtidePoints={bloodtidePoints}
                                        useReward = {this.useReward}
                                    />
                                </div>
                                <div className={'tab tab--summoning' + (tabsOpend === 'summoning' ? ' active' : '')}>
                                    <h2>Summoning</h2>
                                    <TableSummoning
                                        tableSummoning={tableSummoning}
                                        bloodtidePoints={bloodtidePoints}
                                        useSummon = {this.useSummon}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : ''}
                </section>
            </div>
        );
    }
}

export default BattleTracker;
