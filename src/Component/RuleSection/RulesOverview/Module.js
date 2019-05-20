import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class RulesOverview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accordionOpen: ''
        }
    }

    accordionOpenItem = (itemKey) => {

        this.setState({
            accordionOpen: itemKey !== this.state.accordionOpen ? itemKey : ''
        });
    }

    render() {
        const {
            rules,
            closeRules,
        } = this.props;

        const {
            accordionOpen
        } = this.state;

        return(
            <div className='rules-overview popup'>
                <div className={'popup-content'}>
                    <a href='#close' onClick={closeRules} className='button button-close'>
                        <span>Close</span>
                    </a>
                    <ul className='rules-list accordion'>
                        {rules.map((ruleSection, index) => (
                            <li key={index}
                                className={'accordion-item' + (accordionOpen === index ? ' active' : '')}
                            >
                                <h3 className='accordion-title'
                                    onClick={() => this.accordionOpenItem(index)}>
                                    <span>
                                        {ruleSection.section}
                                    </span>
                                </h3>
                                <div className='accordion-content'>
                                    {ruleSection.description && (
                                        <p className='description'>{ruleSection.description}</p>
                                    )}
                                    {ruleSection.commandAbility.length ? (
                                        <div className='command-abilities'>
                                            <strong>Command Ability:</strong>
                                            <ul className='abilities'>
                                                {ruleSection.commandAbility.map((ability, abilityIndex) => (
                                                    <li key={index} className='ability'>
                                                        <h4>{abilityIndex.name}</h4>
                                                        <p>{ReactHtmlParser (ability.description)}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ) : ''}
                                    {ruleSection.fluf && (
                                        <p className='fluf'>{ruleSection.fluf}</p>
                                    )}
                                    {ruleSection.factionAbility && (
                                        <p className='faction-ability'><strong>Faction Ability:</strong> {ruleSection.factionAbility}</p>
                                    )}
                                    {ruleSection.ruleSection && (
                                        <ul className='rules'>
                                            {ruleSection.ruleSection.map((rule, ruleIndex) => (
                                                <li key={ruleIndex} className='rule'>
                                                    {rule.part === 1 && (
                                                        <h3>{rule.title}</h3>
                                                    )}
                                                    {rule.rule}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default RulesOverview;