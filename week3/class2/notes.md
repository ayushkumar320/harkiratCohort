# Fetch 
- Fetch is a method used to retrieve data from a server.
- It returns a Promise that resolves to the Response object representing the response to the request.
- The Fetch API is more powerful and flexible than the older XMLHttpRequest.

# Authentication
- Authentication is the process of verifying the identity of a user or system.
- It ensures that users are who they claim to be and grants them access to resources based on their identity.
- Common methods of authentication include:
  - Password-based authentication
  - Token-based authentication (e.g., JWT)
  - OAuth and OpenID Connect

## Hashing 
- Hashing is a one-way function that converts data into a fixed-size string of characters, which is typically a hash code.
- It is commonly used in password storage and data integrity verification.
- Hashing algorithms include MD5, SHA-1, and SHA-256.
- The gibberish hashed password is stored in database and when we sign in with real password it again gets converted to hashed using the same algorithm and is then compared for authentication.

## Encryption
- Encryption is the process of converting plaintext data into a coded form (ciphertext) to prevent unauthorized access.
- It ensures data confidentiality and integrity during transmission and storage.
- Common encryption algorithms include AES, RSA, and Blowfish.
- It is different from hashing in that encryption is reversible (with the right key), while hashing is not.
- When we fetch data from a server, which is often encrypted to protect it during transmission. The server will decrypt the data before sending it to the client.
- Hashing is more secure than encryption for storing passwords because even if the hashed password is exposed, it cannot be easily reversed to obtain the original password.

## Json Web Token (JWT)
- It takes JSON data and encodes it into a compact, URL-safe string.
- Takes the JSON and converts it into a token.
- Whoever has the token can access the protected resources.
- JWT is a compact, URL-safe means of representing claims to be transferred between two parties.
- It allows you to verify the authenticity of the claims using a digital signature.
- A JWT is typically composed of three parts: Header, Payload, and Signature.
- It is commonly used for authentication and information exchange in web applications.

## Local Storage 
- Local Storage is a web storage mechanism that allows websites to store data in the user's browser.
- Generally, it is used to store key-value pairs and can persist even after the browser is closed.
- JSON web tokens (JWT) can be stored in Local Storage for client-side authentication.
- When we logout, we should remove the JWT from Local Storage to prevent unauthorized access.

## Things in a nutshell
- The frontend sends a JWT in the Authorization header when making requests to protected resources.
- The server verifies the JWT and grants access if it is valid.
- Local Storage is used to store the JWT on the client-side.
- Hashing is used to securely store passwords in the database.
- Encryption is used to protect sensitive data during transmission.