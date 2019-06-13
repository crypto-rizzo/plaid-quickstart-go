import React, { Component } from 'react'
import PlaidLink from 'react-plaid-link'
import Authenticated from './components/Authenticated'

class App extends Component {
	constructor(props){
		super(props);
			this.state = {
				authenticated: false
			}
	}

  handleOnSuccess(token, metadata) {
	  fetch('/api/set_access_token', {
	    method: 'POST',
	    body: token
			})
	 	 this.setState({authenticated: true})
	 }

	handleOnExit() {
  	
  }

  render() {
    return (
    	<div>
    	{!this.state.authenticated ?
	    	<React.Fragment>
		    	<h1>Welcome to Submarine!</h1>
			    	<button onClick={this.handleHello}>Hello API</button>
			      <PlaidLink
			        clientName="Submarine"
			        env="sandbox"
			        product={["auth", "transactions"]}
			        publicKey="fb64499b9c41ee942240074998de28"
			        onExit={this.handleOnExit.bind(this)}
			        onSuccess={this.handleOnSuccess.bind(this)}>
			        Open Link and connect your bank!
			      </PlaidLink>
		   	</React.Fragment>
	    : <Authenticated/> }
      </div>
    )
  }
}
export default App