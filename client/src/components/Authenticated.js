import React from 'react'

class Authenticated extends React.Component {
	async GetBalances(){
		const response = await fetch("/api/balances")
		console.log(response)
	}
	async GetAuth(){
		const response = await fetch("/api/auth")
		console.log(response)
	}
	async GetAccount(){
		const response = await fetch("/api/accounts")
		console.log(response)
	}
	async GetTransactions(){
		const response = await fetch("/api/transactions")
		console.log(response)
	}

  render(){
    return (
    	<React.Fragment>
    	<div>
    		<h1>Get Balances</h1>
    		<button onClick={this.GetBalances}>Balances</button>
    	</div>
    	<div>
    		<h1>Get Accounts</h1>
    		<button onClick={this.GetAccount}>Accounts</button>
    	</div>
    	<div>
    		<h1>Get Auth</h1>
    		<button onClick={this.GetAuth}>Auth</button>
    	</div>
    	<div>
    		<h1>Get Transactions</h1>
    		<button onClick={this.GetTransactions}>Transactions</button>
    	</div>
  	 </React.Fragment>
    )
  }
}


export default Authenticated