var Drupal = require('./index');
var client = new Drupal('http://localhost/api/v1');

client.login('admin', 'root')
  .then(function(user) { console.log(client.isLoggedIn()); })
  .catch(console.error);

// client.user.create({
//   mail:'denis@taller.net.br',
//   name:'denis',
//   password:'putão',
// }).then(function(users) { console.log(users); });


//{"email":"denis@taller.net.br","username":"denis","password":"putão"}
client.isLoggedIn(); // => Boolean
//console.log(client.isLoggedIn());

// client.logout().then(function() { });
//
// /* Nodes */
//
// client.index().then(function(nodes) { });
//
// client.index({limit: 10}).then(function(max10nodes) { });
//
// client.index(null, {title: 'something'}).then(function(nodesWhereTitleIsSomething) { });
//
// client.index({limit: 1}, {title: 'something'}).then(function(nodesWhereTitleIsSomethingButOnly1) { });
//
// client.retrieve(2).then(function(nodeWithNid2) { });
//
// client.create({
//   type: 'article',
//   title: 'something'
// }).then(function(newArticle) { });
//
// client.update(2, {
//   title: 'something'
// }).then(function(updatedNode) { });
//
// client.delete(2).then(function() { });
//
// /* Taxonomy */
//
// client.taxonomyVocabulary.index().then(function(vocabulary) { });

// client.taxonomyVocabulary.getTree(vid).then(function(termsForVid) { });
//
// /* File */
//
// client.file.index().then(function(files) {  });
//
// client.file.index({limit: 10}).then(function(max10files) { });
//
// client.file.index(null, {filename: 'something'}).then(function(filesWhereOrigNameIsSomething) { });
//
// /* User */
//
// client.user.index().then(function(users) {  });
//
// client.user.retrieve(1).then(function(userWithIdOf1) {  });
