import jwt from 'jsonwebtoken';

// There are 3 things
// 1. Decode
// 2. Verify
// 3. Generate

const value = {
  name: "ayush",
  accountNumber: 123123123
}

// JWT Secret Key
const JWT_SECRET = "secret";

// Generating JWT token: We can generate tokens using the sign() method

const token = jwt.sign(value, JWT_SECRET);
console.log(token);  // This gives a very long string
// If we loose this exact token, our user will not be able to access protected routes and will be vulnerable

// This jwt can be decoded without verification (secret key)

const decoded = jwt.decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYXl1c2giLCJhY2NvdW50TnVtYmVyIjoxMjMxMjMxMjMsImlhdCI6MTc1NTYwNzg0NX0.zkxMukqDwEwa-MMTcJOGD_yPpzBLqt8y5DLDcAiiGrI");
console.log(decoded);  // This will give us the original value object 
// But this is not secure, anyone can decode it and see the value
// However it is not sufficient to access protected routes as we still need to verify the token, and it can be done only with the secret key

const verified = jwt.verify(token, JWT_SECRET);
console.log(verified);  // This will give us the original value object (original signature)