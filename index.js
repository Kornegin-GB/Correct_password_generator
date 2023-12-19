function generatePassword (lengthGeneratedPassword) {
   const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
   const numberChars = "0123456789";
   const specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
   const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
   let password = "";
   if (lengthGeneratedPassword < 8) {
      throw new Error("The length is too short for a strong password")
   } else if (lengthGeneratedPassword > 20) {
      throw new Error("The password length is too long")
   } else {
      for (let i = 0; i < lengthGeneratedPassword; ++i) {
         password += allChars.charAt(Math.floor(Math.random() * allChars.length));
      }
   }

   return password;
}
module.exports = { generatePassword };