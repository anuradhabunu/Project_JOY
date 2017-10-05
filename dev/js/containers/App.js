import React, {Component} from 'react'

import LoginPage from '../components/LoginPage';

require('../../scss/main.scss');

class App extends Component{
	render() {
    return(
      <div>
        <LoginPage/>
      </div>
    );
	}
}

export default App;
