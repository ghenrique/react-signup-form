import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Containers
import Home from '../containers/Home/Home';
import SignUp from '../containers/SignUp/SignUp';
import Confirmation from '../containers/Confirmation/Confirmation';

class AppRouter extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/sign-up" component={SignUp} />
				<Route exact path="/confirmation" component={Confirmation} />
			</Switch>
		)
	}
}

export default AppRouter;