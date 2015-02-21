var ES     = require('esta');
var Bcrypt = require('bcrypt');
var perma  = require('perma'); // use hash of email address as person.id

module.exports = function validate (email, password, callback) {
  var record =  {
    index: "people",
    type: "person",
    id: perma(email, 24) // exceptionally low collision probability
  }

  ES.READ(record, function(res) {
    if(res.found) { // compare to bcrypt hash on file
      Bcrypt.compare(password, res.password, function (err, isValid) {

        callback(err, isValid, { id: user.id, name: user.name });
      });
    } else {
      // person has not registered
      callback(null, false);
    }
  });
};
