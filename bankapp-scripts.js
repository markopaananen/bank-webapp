var bankapp = {};

bankapp.ui = {
    addUser: function () {
//            console.log('Testi Pelle Peloton');
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
//            console.log(firstName, lastName);
        var user = bankapp.createUser(firstName,lastName);
        bankapp.userList.push(user);
    }
};

var name;
var anothername = 'Roope Ankka';
var randomName = 'Touho Serkku';
name = 'Milla Magia';

console.log(name + ' ja ' + anothername);

var kanta = 3;
var korkeus = 4;

console.log((kanta * korkeus)/2);
console.info(name);

bankapp.user = {

    firsName: 'Hessu',
    lastName:  'Hopo'
};
console.log(bankapp.user);

bankapp.userList = [1,2,3,'Matami Mimmi', name];
console.log('userList');

bankapp.userList.push(anothername);
console.log('userList');

bankapp.addUserToList = function(user) {
    bankapp.userList.push(user);
};

bankapp.doSomething = function () {
    console.log('doSomething');
};

bankapp.testFunction = function (functionToCall) {
    functionToCall();
    console.log('testFunction');

    (function doSomethingElse() {
        console.log('doSomethingElse');
    })();
    //doSomethingElse();//
};

/*
      bankapp.createUser = function () {
        return {
            firstName: 'Putte',
            lastName: 'Possu'
        };
    };
        Kommentoitu ja korvattu seuraavalla, koska harjoituksen alkuun lisätty inputit ja nappi.
*/
bankapp.createUser = function (firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    };
};



bankapp.addUserToList(bankapp.user);
bankapp.testFunction(bankapp.doSomething);
console.log(bankapp.userList);

var userCreated = bankapp.createUser();
console.log(userCreated);