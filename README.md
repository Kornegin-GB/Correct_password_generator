# Correct password generator

The function of creating correct passwords that will be resistant to unauthorized access. To create them, you must specify the length of the generated password from 8 to 20 characters.  
If you specify to generate a password of less than 8 or more than 20 characters, the function throws an Error exception.

## Installing

```npm
npm i correct_password_generator
```

## Usage example

```js
const password = require('correct_password_generator').generatePassword;
console.log(password(10));
// or
const { generatePassword } = require('correct_password_generator');
console.log(generatePassword(10));
```
