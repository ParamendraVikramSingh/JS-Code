// Stack (used for  premetive datatypes) , heap(for non-premitive)
// In premetive call by value works means a copy of variable is passed.
// In non-premetive call by refrences works means the address is passed

let myName = "Param";

let anotherName = myName;

anotherName = "Paramendra";
console.log(myName)
console.log(anotherName);

// here myName gives output Param because it uses stack;

let userOne = {
    userId:  1,
    userName: "Khabbu"
}

let userTwo = userOne;
userTwo.userId = 68;
console.log(userOne.userId)
console.log(userTwo.userId);

//output --> 68 & 68
