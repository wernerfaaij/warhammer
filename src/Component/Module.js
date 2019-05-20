import React, { Component } from 'react';
import BattleTracker from './BattleTracker/Module';
import RuleSection from './RuleSection/Module';

class App extends Component {
    render () {
        return (
            <div className="App">
                <RuleSection />
                <BattleTracker />
                <div>
                    <span>All content and names that are used within this page are owned by Games Workshop. I just borrow it to create this web app.</span>
                </div>
            </div>
        );
    }
}

export default App;
