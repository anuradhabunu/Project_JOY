import React, {Component} from 'react'

import Login_Page from '../components/Login_Page';

require('../../scss/main.scss');

class App extends Component{
	render() {
    return(
  		<div>
        <Login_Page/>
      </div>
    );
	}
}

export default App;
