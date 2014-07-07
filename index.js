var Hapi = require('hapi'),
    Joi  = require('joi');

var server = new Hapi.Server('0.0.0.0', 3000);

server.route({
    method: 'GET',
    path: '/{yourname*}',
    config: {  // validate will ensure YOURNAME is valid before replying to your request
        validate: { params: { yourname: Joi.string().max(40).min(2).alphanum() } },
        handler: function (req,reply) {
            reply('Hello '+ req.params.yourname + '!');
        }
    }
});

server.start(function() {
    console.log('Now Visit: http://localhost:3000/YOURNAME');
});

module.exports = server;
