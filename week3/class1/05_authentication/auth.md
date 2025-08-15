# Authentication

## Dumb way to authenticate
- Ask user about email and password to send as headers
- Better way is using jsonwebtokens

## JSONWebTokens
- JSON Web Tokens (JWT) generates a hashed token that can be sent as an authorization header in requests.
- The server can then verify the token and authenticate the user without needing to store session information.
- Tokens are generally sent to the browser as a cookie or in local storage or in session storage and then included in the headers of subsequent requests.
- That token is verified using a secret key known only to the server.
