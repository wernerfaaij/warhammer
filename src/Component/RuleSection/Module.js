import React, { Component } from 'react';
import RulesSearch from "./RulesSearch/Module";
import RulesOverview from "./RulesOverview/Module";

class RuleSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showRules : '',
            rules: [{
                phase: '1',
                section: 'Hero Phase',
                description: 'Cast spells, use heroic abilities',
                fluf: '',
                factionAbility: 'Use Bloodtide points for the reward table',
                commandAbility: [],
                ruleSection: [{
                    title: 'Hero Phase',
                    part: 1,
                    rule: 'Many of the abilities found' +
                    'on warscrolls are used in your hero' +
                    'phase. In addition, Wizards in' +
                    'your army can cast spells in this' +
                    'phase.'
                },{
                    title: 'Command Ablities',
                    part: 1,
                    rule: 'If you have any Heroes in your' +
                    'army, you can use command' +
                    'abilities. Some command abilities' +
                    'are available to all armies, like the' +
                    'three on the right, while others are' +
                    'specific to certain models and appear' +
                    'on their warscroll. Some of these' +
                    'command abilities can only be used' +
                    'if that model is your general; when' +
                    'this is the case, it will be noted in the' +
                    'rules for the command ability'
                },{
                    title: 'Command Ablities',
                    part: 2,
                    rule: 'In order to use any command ability' +
                    'you must spend 1 command point.' +
                    'You start the battle with 1 command' +
                    'point for each warscroll battalion' +
                    'you have in your army. In addition,' +
                    'you receive 1 command point at the' +
                    'start of each of your hero phases.' +
                    'You can use the same command' +
                    'ability several times in the same' +
                    'phase as long as you have enough' +
                    'command points to do so. Any' +
                    'command points you do not use can' +
                    'be used in a future turn. A command' +
                    'ability will usually specify when it is' +
                    'used; if it does not, it is used in your' +
                    'hero phase.'
                }]
            },{
                phase: '2',
                section: 'Movement Phase',
                description: 'Move units across the battlefield.',
                fluf: '',
                factionAbility: 'Use Bloodtide points to Summon demons',
                commandAbility: [{
                    name: 'At the double',
                    description: 'You can use this command ability after you make a' +
                    'run roll for a friendly unit that is within 6" of a friendly <strong>Hero</strong>, or 12"  of a friendly' +
                    '<strong>Hero</strong> that is a general. If you do so, the run roll is treated as being a 6.'
                }],
                ruleSection: [{
                    title: 'Movement Phase',
                    part: 1,
                    rule: 'Start your movement phase' +
                    'by picking one of your units and' +
                    'moving each model in that unit until' +
                    'you’ve moved all the models you' +
                    'want to. You can then pick another' +
                    'unit to move, until you have moved' +
                    'as many of your units as you wish.' +
                    'No unit can be moved more than' +
                    'once in each movement phase. '
                },{
                    title: 'Movement',
                    part: 1,
                    rule: 'You can change the position of a' +
                    'model on the battlefield by making a' +
                    'move with the model. Models can be' +
                    'moved in the movement phase, the' +
                    'charge phase and the combat phase,' +
                    'and some abilities may allow a model' +
                    'to make a move in other phases too.'
                }, {
                    title: 'Movement',
                    part: 2,
                    rule: 'Whenever you move a model, it' +
                    'can be moved in any direction or' +
                    'combination of directions, but' +
                    'cannot be moved across other' +
                    'models or their bases, nor can it' +
                    'cross the edge of the battlefield. You' +
                    'can pivot the model at the end of' +
                    'the move so that it is facing in any' +
                    'direction. The distance a model' +
                    'moves is measured using the part of' +
                    'the model’s base that moves furthest' +
                    'from its starting position (including' +
                    'pivoting). If the model has no base,' +
                    'measure the move using whichever' +
                    'part of the model moves furthest' +
                    'from its starting position.'
                }, {
                    title: 'Movement',
                    part: 3,
                    rule: 'Remember that a unit must finish' +
                    'any type of move as a single' +
                    'group, with all models within 1"' +
                    'horizontally, and 6" vertically, of' +
                    'at least one other model from their' +
                    'unit. If this is impossible, then the' +
                    'move cannot be made.'
                }, {
                    title: 'Moving over terrain',
                    part: 1,
                    rule: 'Unless stated otherwise, a model can' +
                    'be moved over a terrain feature but' +
                    'not through it (so models can’t move' +
                    'through a wall, or pass through a' +
                    'tree, but can climb up or over them).'
                }, {
                    title: 'Moving over terrain',
                    part: 2,
                    rule:'A model can be moved vertically' +
                    'in order to climb or cross a terrain' +
                    'feature, counting the vertical' +
                    'distance up and/or down as part of' +
                    'its move.'
                }, {
                    title: 'Normal moves',
                    part: 1,
                    rule:'Moves made in the movement phase' +
                    'are referred to as normal moves,' +
                    'to differentiate them from charge' +
                    'moves (made in the charge phase)' +
                    'and pile-in moves (made in the' +
                    'combat phase). A model making a' +
                    'normal move can move a distance in' +
                    'inches equal to or less than the Move' +
                    'characteristic shown on its warscroll. '
                }, {
                    title: 'Enemy units and retreats',
                    part: 1,
                    rule:'When you make a normal move for' +
                    'a model, no part of the move can be' +
                    'within 3" of an enemy unit.' +
                    'Units starting a normal move within' +
                    '3" of an enemy unit can either' +
                    'remain stationary or retreat. If a unit' +
                    'retreats, it can move within 3" of an' +
                    'enemy, but must end the move more' +
                    'than 3" from all enemy units. Models' +
                    'in a unit that retreats can’t shoot or' +
                    'charge later in the same turn'
                }, {
                    title: 'Running',
                    part: 1,
                    rule:'When you pick a unit to make a' +
                    'normal move, you can declare that' +
                    'it will run. Make a run roll for' +
                    'the unit by rolling a dice. Add the' +
                    'result of the run roll to the Move' +
                    'characteristic of all models in the' +
                    'unit for that movement phase.' +
                    'The unit can then move up to that' +
                    'distance in inches. Models in a unit' +
                    'that runs can’t shoot or charge later' +
                    'in the same turn.'
                }, {
                    title: 'Flying',
                    part: 1,
                    rule:'If the warscroll for a model says that' +
                    'the model can fly, it can pass across' +
                    'models and terrain features as if they' +
                    'were not there when it makes any' +
                    'type of move. Any vertical distance' +
                    'up and/or down is ignored when' +
                    'measuring a flying model’s move.' +
                    'It cannot finish the move on top of' +
                    'another model.'
                }]
            },{
                phase: '3',
                section: 'Shooting Phase',
                description: 'Attack with missile weapons',
                fluf: '',
                factionAbility: '',
                ruleSection: [
                    {
                        title: 'SHOOTING PHASE',
                        part: 1,
                        special: '',
                        rule:'In your shooting phase, you' +
                        'can shoot with models armed with' +
                        'missile weapons. Pick one of your' +
                        'units. Each model in the unit attacks' +
                        'with all of the missile weapons it is' +
                        'armed with (see Attacking, opposite).' +
                        'Remember that models that have run' +
                        'or retreated cannot shoot in the same' +
                        'turn. After all models in the unit have' +
                        'shot, you can choose another unit to' +
                        'shoot with, until all units that you' +
                        'want to shoot with have done so.'
                    },{
                        title: 'ENEMY UNITS',
                        part: 1,
                        special: '',
                        rule:'A unit can shoot when it is within' +
                        '3" of the enemy, but if it does so it' +
                        'can only target enemy units that' +
                        'are within 3" of it with its shooting' +
                        'attacks. A unit can shoot at an enemy' +
                        'unit that is within 3" of another' +
                        'friendly unit without penalty'
                    },{
                        title: 'LOOK OUT, SIR!',
                        part: 1,
                        special: '',
                        rule:'You must subtract 1 from hit rolls' +
                        'made for missile weapons if the' +
                        'target of the attack is an enemy' +
                        'Hero that is within 3" of an enemy' +
                        'unit that has 3 or more models. The' +
                        'Look Out, Sir! rule does not apply if' +
                        'the target Hero is a Monster.'
                    },
                ],
                commandAbility: [],
            },{
                phase: '4',
                section: 'Charge Phase ',
                description: 'Charge unit\'s into combat',
                fluf: '',
                factionAbility: '',
                ruleSection: [
                    {
                        title: 'CHARGE PHASE',
                        part: 1,
                        special: '',
                        rule:'Any of your units within 12"' +
                        'of the enemy in your charge phase' +
                        'can attempt to make a charge move.' +
                        'Pick an eligible unit and make a' +
                        'charge roll for it by rolling 2D6.' +
                        'Each model in the unit can move a' +
                        'number of inches equal to the charge' +
                        'roll. You cannot make a charge move' +
                        'with a unit that has run or retreated' +
                        'earlier in the turn, or with a unit that' +
                        'is within 3" of an enemy unit'
                    }, {
                        title: 'CHARGE PHASE',
                        part: 2,
                        special: '',
                        rule:'The first model you move from a unit' +
                        'making a charge move must finish' +
                        'the move within ½" of an enemy' +
                        'model (you do not have to pick the' +
                        'target for the charge before making' +
                        'the charge roll). If that’s impossible,' +
                        'or you decide not to make the charge' +
                        'move, the charge fails and no models' +
                        'in the unit can move in this phase.'
                    }, {
                        title: 'CHARGE PHASE',
                        part: 3,
                        special: '',
                        rule:'Once all models in one unit have' +
                        'made their charge moves, you can' +
                        'pick another eligible unit to make a' +
                        'charge attempt, until all units that' +
                        'you want to make charge attempts' +
                        'have done so.'
                    }
                ],
                commandAbility: [{
                    name: 'Forward to Victory',
                    description: 'You can use this command ability after you make' +
                    'a charge roll for a friendly unit that is  within 6" of a friendly <strong>Hero</strong>, or 12"'+
                    'of a friendly <strong>Hero</strong> that is a general. If you do so, re-roll the charge roll.'
                }],
            }, {
                phase: '5',
                section: 'Combat Phase',
                description: 'Pile in and attack with units',
                fluf: '',
                factionAbility: '',
                ruleSection: [
                    {
                        title: 'COMBAT PHASE',
                        part: 1,
                        special: '',
                        rule:'In the combat phase, the' +
                        'players take it in turn to pick units' +
                        'to fight with, starting with the player' +
                        'whose turn is taking place.'
                    }, {
                        title: 'COMBAT PHASE',
                        part: 2,
                        special: '',
                        rule:'When it is your turn, you must' +
                        'either pick an eligible unit to fight' +
                        'with, or pass (note that you cannot' +
                        'pass if there is an eligible unit from' +
                        'your army that can fight). A unit is' +
                        'eligible to fight if it is within 3" of an' +
                        'enemy unit, or if it made a charge' +
                        'move in the same turn. No unit' +
                        'can fight more than once in each' +
                        'combat phase.'
                    }, {
                        title: 'COMBAT PHASE',
                        part: 3,
                        special: '',
                        rule:'If you pick a unit to fight, it first piles' +
                        'in, and then the models in the unit' +
                        'must attack.'
                    }, {
                        title: 'COMBAT PHASE',
                        part: 4,
                        special: '',
                        rule:'If you pass, you do nothing, and' +
                        'the option to fight or pass goes back' +
                        'to your opponent. If both players' +
                        'pass in succession, the combat' +
                        'phase ends.'
                    }, {
                        title: 'PILING IN',
                        part: 1,
                        special: '',
                        rule:'A unit can make a pile-in move if it' +
                        'is within 3" of an enemy unit or has' +
                        'made a charge move in the same' +
                        'turn. If this is the case, you can' +
                        'move each model in the unit up to' +
                        '3". Each model must finish its pile-in' +
                        'move at least as close to the nearest' +
                        'enemy model as it was at the start of' +
                        'the move.'
                    }, {
                        title: 'FIGHTING',
                        part: 1,
                        special: '',
                        rule:'Each model in the unit must attack' +
                        'with all of the melee weapons it is' +
                        'armed with (see Attacking).'
                    }
                ],
                commandAbility: [],
            }, {
                phase: '6',
                section: 'Battleshock Phase',
                description: 'Thest the resolve of depleted units.',
                fluf: '',
                factionAbility: '',
                ruleSection: [
                    {
                        title: 'BATTLESHOCK PHASE',
                        part: 1,
                        special: '',
                        rule:'In the battleshock phase, both' +
                        'players must take battleshock tests' +
                        'for units from their army that have' +
                        'had models slain during the turn.' +
                        'The player whose turn it is tests first.'
                    }, {
                        title: 'BATTLESHOCK PHASE',
                        part: 2,
                        special: '',
                        rule:'You must make a battleshock' +
                        'roll for each unit that has to take' +
                        'a battleshock test. To make a' +
                        'battleshock roll, roll a dice. Add the' +
                        'number of models from the unit that' +
                        'have been slain this turn to the dice' +
                        'roll, and add 1 to the unit’s Bravery' +
                        'characteristic for every 10 models' +
                        'that are in the unit when the test' +
                        'is taken. '
                    }, {
                        title: 'BATTLESHOCK PHASE',
                        part: 3,
                        special: '',
                        rule:'If the modified battleshock roll is' +
                        'greater than the unit’s modified' +
                        'Bravery characteristic, the' +
                        'battleshock test has been failed. If' +
                        'the test is failed, for each point by' +
                        'which the modified roll exceeds' +
                        'the unit’s modified Bravery' +
                        'characteristic, one model in that' +
                        'unit must flee. You decide which of' +
                        'the models from your units flee –' +
                        'remove them from play and count' +
                        'them as having been slain.'
                    }, {
                        title: 'SPLIT UNITS ',
                        part: 1,
                        special: '',
                        rule:'At the end of each turn, you must' +
                        'remove models from any of the' +
                        'units in your army that are split up' +
                        'into two or more groups, until only' +
                        'one group of models from the unit' +
                        'remains in play. The models you' +
                        'remove count as having been slain.'
                    }
                ],
                commandAbility: [{
                    name: 'Inspiring Presence',
                    description: 'You can use' +
                    'this command ability at the start of' +
                    'the battleshock phase. If you do so,' +
                    'pick a friendly unit that is within 6"' +
                    'of friendly <strong>Hero</strong>, or 12" of a friendly' +
                    '<strong>Hero</strong> that is a general. That unit' +
                    'does not have to take battleshock' +
                    'tests in that phase.'
                }],
            }, {
                phase: '',
                section: 'Attacking',
                description: '',
                fluf: 'Battles are decided by the spilling of blood. Arrows fall like rain, war machines hurl their deadly payloads at' +
                'the foe, and warriors cut and stab at each other with blade and claw. Soldiers fall from grievous wounds and' +
                'fortifications burn as carnage engulfs the battlefield.',
                factionAbility: '',
                ruleSection: [
                    {
                        title: 'Attacking',
                        part: 1,
                        special: '',
                        rule:'When a unit shoots or fights, it' +
                        'makes attacks with the weapons it' +
                        'is armed with. A unit attacks with' +
                        'all the weapons it is armed with,' +
                        'including any used by its mount. '
                    }, {
                        title: 'Attacking',
                        part: 2,
                        special: '',
                        rule:'The weapon options a model has' +
                        'are listed on its warscroll. Missile' +
                        'weapons can only be used in' +
                        'the shooting phase, and melee' +
                        'weapons can only be used in the' +
                        'combat phase.'
                    }, {
                        title: 'PICKING TARGETS',
                        part: 1,
                        special: '',
                        rule:'When a unit shoots or fights, you' +
                        'must first pick the target unit(s) for' +
                        'all of the weapons it is using, before' +
                        'any of the attacks with the weapons' +
                        'are resolved. Only enemy units can' +
                        'be chosen as the target for an attack. '
                    }, {
                        title: 'PICKING TARGETS',
                        part: 2,
                        special: '',
                        rule:'If a unit can use two or more' +
                        'different weapons in the same phase,' +
                        'the unit can use the weapons in any' +
                        'order you wish after targets have' +
                        'been picked, but you must resolve all' +
                        'of the attacks for one type of weapon' +
                        'before using the next type of weapon.'
                    }, {
                        title: 'MISSILE WEAPONS',
                        part: 1,
                        special: '',
                        rule:'In order to attack with a missile' +
                        'weapon, the model using the weapon' +
                        'must be in range of the target unit' +
                        '(i.e. within the maximum distance,' +
                        'in inches, of the Range listed for the' +
                        'weapon making the attack), and the' +
                        'target unit must be visible to the' +
                        'model with the weapon (if unsure,' +
                        'stoop down and look from behind' +
                        'the shooting model to see if a model' +
                        'from the target unit is visible).' +
                        'For the purposes of determining' +
                        'visibility, a model can see through' +
                        'other models in its unit.'
                    }, {
                        title: 'MISSILE WEAPONS',
                        part: 2,
                        special: '',
                        rule:'The maximum number of attacks' +
                        'that can be made by a weapon is' +
                        'equal to its Attacks characteristic.' +
                        'Make the attacks one at a time,' +
                        'unless you are using the rules for' +
                        'Multiple Attacks (pg 7).'
                    }, {
                        title: 'ATTACKS CHARACTERISTIC',
                        part: 1,
                        special: '',
                        rule:'Some missile weapons have a Range' +
                        'characteristic with a minimum' +
                        'range, for example 6"-48". Such' +
                        'weapons cannot attack units that are' +
                        'wholly within the shorter range.'
                    }, {
                        title: 'ATTACKS CHARACTERISTIC',
                        part: 2,
                        special: '',
                        rule:'If a weapon has an Attacks' +
                        'characteristic of more than one,' +
                        'you can split the attacks between' +
                        'any eligible target units you wish.' +
                        'When you split the attacks made' +
                        'by a weapon between two or more' +
                        'enemy units, you must resolve all of' +
                        'the attacks against one unit before' +
                        'moving on to the next one. '
                    }, {
                        title: 'ATTACKS CHARACTERISTIC',
                        part: 3,
                        special: '',
                        rule:'Some models are armed with' +
                        'two identical weapons. When' +
                        'attacking with these weapons, do' +
                        'not double the number of attacks' +
                        'that the weapons make; either' +
                        'the Attacks characteristic for the' +
                        'weapon will already take the extra' +
                        'weapon into account, or the model' +
                        'will get an ability on its warscroll' +
                        'that represents the effect of the' +
                        'additional weapon'
                    }, {
                        title: 'MAKING ATTACKS',
                        part: 1,
                        special: 'highlight',
                        rule:'Attacks are resolved one at a time using the following attack sequence.' +
                        'In some cases, you can resolve all of the attacks made by the same type' +
                        'of weapon at the same time (see Multiple Attacks, below). '
                    }, {
                        title: 'MAKING ATTACKS',
                        part: 2,
                        special: 'list',
                        rule:'1. Hit Roll: Roll a dice. If the roll equals or beats the attacking weapon’s' +
                        'To Hit characteristic, then it scores a hit and you must make a wound' +
                        'roll. If not, the attack fails and the attack sequence ends. A hit roll of' +
                        '1 before modification always fails to hit the target, and a hit roll of 6' +
                        'before modification always hits the target.'
                    }, {
                        title: 'MAKING ATTACKS',
                        part: 3,
                        special: 'list',
                        rule:'2. Wound Roll: Roll a dice. If the roll equals or beats the attacking' +
                        'weapon’s To Wound characteristic, then it is successful and the' +
                        'opposing player must make a save roll. If not, then the attack' +
                        'fails and the attack sequence ends. A wound roll of 1 before' +
                        'modification always fails, and a wound roll of 6 before modification' +
                        'is always successful.'
                    }, {
                        title: 'MAKING ATTACKS',
                        part: 4,
                        special: 'list',
                        rule:'3. Save Roll: The opposing player rolls a dice, modifying the roll by the' +
                        'attacking weapon’s Rend characteristic. For example, if a weapon has' +
                        'a -1 Rend characteristic, then 1 is subtracted from the save roll. If' +
                        'the result equals or beats the Save characteristic of the models in the' +
                        'target unit, the save succeeds and the attack sequence ends without' +
                        'causing any damage. If not, the save fails and the attack is successful,' +
                        'and you must determine damage on the target unit. A save roll of 1' +
                        'before modification always fails.'
                    }, {
                        title: 'MAKING ATTACKS',
                        part: 5,
                        special: 'list',
                        rule:'4. Determine Damage: Each successful attack inflicts damage on the' +
                        'target unit equal to the Damage characteristic of the weapon making' +
                        'the attack. Most weapons have a Damage characteristic of 1, but some' +
                        'have a Damage characteristic of 2 or more. '
                    }, {
                        title: 'MULTIPLE ATTACKS',
                        part: 1,
                        special: '',
                        rule:'In order to resolve several attacks' +
                        'at once, all of the attacks must be' +
                        'made by models from the same unit,' +
                        'with the same type of weapon, and' +
                        'against the same target unit. If this' +
                        'is the case, make all of the hit rolls at' +
                        'the same time, then all of the wound' +
                        'rolls, and finally all of the save rolls.'
                    }, {
                        title: 'MULTIPLE HITS',
                        part: 1,
                        special: '',
                        rule:'Sometimes a single successful hit roll' +
                        'will score 2 or more hits. If this is the' +
                        'case, make all of the wound rolls for' +
                        'those hits at the same time, and then' +
                        'all of the save rolls.'
                    }, {
                        title: 'ALLOCATING WOUNDS',
                        part: 1,
                        special: '',
                        rule:'Once all of a unit’s attacks have been' +
                        'resolved, add up the damage that was' +
                        'inflicted. The player commanding' +
                        'the target unit must then allocate' +
                        'a number of wounds to the target' +
                        'unit equal to the damage that' +
                        'was inflicted. '
                    }, {
                        title: 'ALLOCATING WOUNDS',
                        part: 2,
                        special: '',
                        rule:'Wounds are allocated one at a time' +
                        'to models in the target unit. You can' +
                        'allocate the wounds inflicted on your' +
                        'units as you see fit (the models do' +
                        'not have to be within range or visible' +
                        'to the attacking unit). However, if' +
                        'you allocate a wound to a model,' +
                        'you must keep on allocating wounds' +
                        'to that model until it is slain – a' +
                        'unit can never have more than one' +
                        'wounded model. '
                    }, {
                        title: 'ALLOCATING WOUNDS',
                        part: 3,
                        special: '',
                        rule:'Some abilities allow you to make' +
                        'a roll to negate a wound or mortal' +
                        'wound allocated to a model; in' +
                        'this case the roll is made for each' +
                        'individual wound or mortal wound' +
                        'as it is allocated to the model in' +
                        'question. If the wound or mortal' +
                        'wound is negated it has no effect on' +
                        'the model.'
                    }, {
                        title: 'Cover',
                        part: 1,
                        special: 'highlight',
                        rule:'Add 1 to save rolls for a unit' +
                        'if all of its models are wholly' +
                        'on or within a terrain feature' +
                        'when the rolls are made. This' +
                        'modifier does not apply in the' +
                        'combat phase if the unit you' +
                        'are making save rolls for made' +
                        'a charge move in the same' +
                        'turn, and never applies to units' +
                        'containing models with the' +
                        'Monster or War Machine' +
                        'keyword that have a Wounds' +
                        'characteristic of 8 or more.'
                    }, {
                        title: 'MORTAL WOUNDS',
                        part: 1,
                        special: 'highlight',
                        rule:'Some attacks, spells and' +
                        'abilities inflict mortal wounds.' +
                        'Do not make hit, wound or' +
                        'save rolls for mortal wounds.' +
                        'Instead, the damage inflicted' +
                        'on the target is equal to the' +
                        'number of mortal wounds' +
                        'that were suffered. Allocate' +
                        'any mortal wounds that are' +
                        'caused while a unit is attacking' +
                        'at the same time as any other' +
                        'wounds caused by the unit’s' +
                        'attacks, after all of the unit’s' +
                        'attacks have been completed.' +
                        'Mortal wounds caused at other' +
                        'times are allocated to models' +
                        'in the target unit as soon as' +
                        'they occur, in the same manner' +
                        'as wounds caused by damage' +
                        'from an attack.'
                    }, {
                        title: 'MORTAL WOUNDS',
                        part: 2,
                        special: '',
                        rule:'After they have been allocated,' +
                        'a mortal wound is treated in' +
                        'the same manner as any other' +
                        'wound for all rules purposes.'
                    }, {
                        title: 'SLAIN MODELS',
                        part: 2,
                        special: '',
                        rule:'Once the number of wounds' +
                        'allocated to a model during' +
                        'the battle equals its Wounds' +
                        'characteristic, the model is slain.' +
                        'Place a slain model to one side – it is' +
                        'removed from play. '
                    }, {
                        title: 'HEALING WOUNDS',
                        part: 2,
                        special: '',
                        rule:'Some abilities allow wounds that' +
                        'have been allocated to a model to' +
                        'be healed. For each wound that is' +
                        'healed, remove one of the wounds' +
                        'that have been allocated to the' +
                        'model. You can’t heal wounds on a' +
                        'model that has been slain.'
                    }
                ],
                commandAbility: [],
            }, {
                phase: '',
                section: 'Wizards',
                description: '',
                fluf: 'The realms are saturated with magic, a seething source of power for those with the wit to wield it. In battle, magic' +
                'is a force as real and potent as a sword blade. It can be used to infuse allies with strength and valour, and enemies' +
                'with frailty and dread. More commonly, wizards unshackle the raw power of magic to smite their foes with bolts' +
                'of eldritch power',
                factionAbility: '',
                ruleSection: [
                    {
                        title: 'Wizards',
                        part: 1,
                        special: '',
                        rule: 'Some units have the Wizard' +
                        'keyword on their warscroll. You can' +
                        'use a wizard to cast spells in your' +
                        'hero phase, or to unbind spells in' +
                        'your opponent’s hero phase.'
                    }, {
                        title: 'Wizards',
                        part: 2,
                        special: '',
                        rule: 'Sometimes an ability will allow a' +
                        'model that is not a wizard to attempt' +
                        'to cast or unbind spells. They do' +
                        'so using the rules below and are' +
                        'affected by abilities that modify' +
                        'casting or unbinding rolls, but' +
                        'they are not a wizard for any other' +
                        'rules purposes.'
                    }, {
                        title: 'Casting spells',
                        part: 1,
                        special: '',
                        rule: 'Sometimes an ability will allow a' +
                        'model that is not a wizard to attempt' +
                        'to cast or unbind spells. They do' +
                        'so using the rules below and are' +
                        'affected by abilities that modify' +
                        'casting or unbinding rolls, but' +
                        'they are not a wizard for any other' +
                        'rules purposes.'
                    }, {
                        title: 'Casting spells',
                        part: 2,
                        special: '',
                        rule: 'In order to cast a spell, first say' +
                        'which spell the wizard is going to' +
                        'attempt to use (it must be one they' +
                        'know). To cast the spell, roll 2D6. If' +
                        'the total is equal to or greater than' +
                        'the casting value of the spell, the' +
                        'spell is successfully cast.'
                    }, {
                        title: 'Casting spells',
                        part: 3,
                        special: '',
                        rule: 'If a spell is cast, the opposing player' +
                        'can choose one of their Wizards' +
                        'that is within 30" of the caster to' +
                        'attempt to unbind the spell before' +
                        'its effects are applied. To unbind a' +
                        'spell, roll 2D6. If the roll beats the' +
                        'roll used to cast the spell, then the' +
                        'spell is not successfully cast. Only' +
                        'one attempt can be made to unbind' +
                        'a spell.'
                    }, {
                        title: 'Lores of magic',
                        part: 1,
                        special: '',
                        rule: 'The spells a Wizard knows, and the' +
                        'number of spells it can attempt to' +
                        'cast or unbind in a hero phase, are' +
                        'detailed on the wizard’s warscroll.' +
                        'Most wizards know the following' +
                        'Arcane Bolt and Mystic Shield spells.'
                    }, {
                        title: 'Lores of magic',
                        part: 2,
                        special: '',
                        rule: 'Arcane Bolt: Arcane Bolt has a' +
                        'casting value of 5. If successfully' +
                        'cast, pick an enemy unit within' +
                        '18" of the caster that is visible to' +
                        'them. That unit suffers 1 mortal' +
                        'wound. If the casting roll was 10' +
                        'or more, the unit suffers D3 mortal' +
                        'wounds instead.'
                    }, {
                        title: 'Lores of magic',
                        part: 3,
                        special: '',
                        rule: 'Mystic Shield: Mystic Shield has' +
                        'a casting value of 6. If successfully' +
                        'cast, pick a friendly unit within 18"' +
                        'of the caster that is visible to them.' +
                        'Re-roll save rolls of 1 for that unit' +
                        'until your next hero phase. '
                    }, {
                        title: 'Units of wizards',
                        part: 3,
                        special: 'highlight',
                        rule: 'Wizards are usually fielded' +
                        'as a unit consisting of just' +
                        'one model. If a unit with the' +
                        'Wizard keyword has more' +
                        'than one model, it counts as' +
                        'a single wizard for all rules' +
                        'purposes, and you must pick' +
                        'a model from the unit to cast' +
                        'or unbind a spell before you' +
                        'attempt to cast or unbind it;' +
                        'measure the distance and' +
                        'check visibility using the model' +
                        'you picked.'
                    }
                ],
                commandAbility: [],
            }]
        }
    };

    navigate = (target) => {
        this.setState({
            showRules: target
        });
    };

    closeRules = () => {
        this.setState({
            showRules: ''
        });
    };

    render () {
        const {
            rules,
            showRules
        } = this.state;

        const rulesPopup = () => {
            switch (showRules) {
                case 'rules':
                    return <RulesOverview rules={rules} closeRules={this.closeRules} />;
                    break;
                case 'search':
                    return <RulesSearch rules={rules} closeRules={this.closeRules} />;
                    break;
                default:
                    return '';
            }
        }

        return (
            <div className="rule-section">
                <ul className='navigation'>
                    <li className='navigation-item'>
                        <a href='#search'
                           className='navigation-link'
                           onClick={() => this.navigate('search')}>
                            <span>Search</span>
                        </a>
                    </li>
                    <li className='navigation-item'>
                        <a href='#rules'
                           className='navigation-link'
                           onClick={() => this.navigate('rules')}>
                            <span>Rules</span>
                        </a>
                    </li>
                </ul>
                {rulesPopup()}
            </div>
        );
    }
}

export default RuleSection;
