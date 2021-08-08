import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import History from '../pages/History'

class Router extends React.Component{
    render(){
        return(
            <Switch>

                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/history">
                    <History />
                </Route>
                
            </Switch>
        )
    }
}

export default Router