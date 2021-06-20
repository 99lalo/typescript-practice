var user = {
    name: "Monster",
    age: 30,
    getMessage: function () {
        return 'Hello' + name;
    }
};
var user2 = {
    name: "Monster",
    getMessage: function () {
        return 'Hello' + name;
    }
};
console.log(user.getMessage());
