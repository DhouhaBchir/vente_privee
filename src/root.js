import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import HeroDetails from './containers/hero.details.container'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={App} exact />
                <Route path="/characters/:characterId?" component={HeroDetails} />
            </div>
        </Router>
    </Provider>
)
export default Root