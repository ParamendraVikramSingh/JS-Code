const accountId = 23456;
let accountName = "Param";
var accountPassword = "123456"
accountCity = "Jaipur"
accountState; //Print as "undefined"
//accountId = 122222; // Not Allowed
accountName = "emp";
accountPassword = "3333";
accountCity = "jmp";

console.table([accountId, accountName, accountPassword, accountCity, accountState]);
/*
prefer not to use var because of issue in block scope and functional scope.
*/