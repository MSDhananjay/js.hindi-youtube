const accountId = 54467
let accountEmail = "dhdubey@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 // it is not allowed

console.log(accountId);

accountEmail = "h1@google.com"
accountPassword = "12987"
accountCity = "Bangaluru"
/*
 prefer not to use var
 because of issue in block scope and functional scope.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);