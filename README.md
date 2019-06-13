# plaid-quickstart-go
# plaid-quickstart-go
## Client
`cd client`  
`npm install`  
`npm start`  

## Server
`cd server`  
`go run server.go`  

Note: 
`server.go` assumes you have a `.env` file in the server directory.  
Create your own .env file using the following format:  
```
PLAID_CLIENT_ID=...
PLAID_SECRET=...
PLAID_PUBLIC_KEY=...
```