import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from '@emotion/styled';
import Header from '../components/Header';
import CounterContainer from '../containers/CounterContainer';

const Container = styled.div`
	text-align: center;
`;
export const history = createBrowserHistory();

function Routes() {
	return (
		<Router history={history}>
			<Container>
				<Header />
				<Switch>
					<Route path="/" component={CounterContainer} />
				</Switch>
			</Container>
		</Router>
	);
}

export default Routes;
