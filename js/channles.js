/* #6 start the #external #action and say hello */
console.log("App is alive X2");

var yummy = {
    name: '#Yummy', 
    createdOn: new Date(2016, 03, 1), 
    createdBy: 'minus.plus.yummy',
    starred: false,
    expiresIn: 100,
    messageCount: 999
};

var sevenContinents = {
    name: '#SevenContinents', 
    createdOn: new Date(2016, 03, 1), 
    createdBy: 'minus.plus.yummy',
    starred: true,
    expiresIn: 100,
    messageCount: 999
};

var killerApp = {
    name: '#KillerApp', 
    createdOn: new Date(2016, 03, 1), 
    createdBy: 'minus.plus.yummy',
    starred: false,
    expiresIn: 100,
    messageCount: 999
};

var firstPersonOnMars = {
    name: '#FirstPersonOnMars', 
    createdOn: new Date(2016, 03, 1), 
    createdBy: 'minus.plus.yummy',
    starred: true,
    expiresIn: 100,
    messageCount: 999
};

var octoberfest = {
    name: '#Octoberfest', 
    createdOn: new Date(2016, 03, 1), 
    createdBy: 'minus.plus.yummy',
    starred: false,
    expiresIn: 100,
    messageCount: 999
};

function listChannels(){
    $('channel-list').append(<li></li>);
}