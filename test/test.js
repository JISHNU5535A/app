var Lab = require("lab"),    // the Lab
    server = require("../"); // require index.js
Lab.experiment("Basic HTTP Tests", function() {
    // tests
    Lab.test("Main endpoint /{yourname*} ", function(done) {
        var options = {
            method: "GET",
            url: "/Timmy"
        };
        // server.inject lets you similate an http request
        server.inject(options, function(response) {
            Lab.expect(response.statusCode).to.equal(200);  //  Expect http response status code to be 200 ("Ok")
            Lab.expect(response.result).to.have.length(12); // Expect result to be "Hello Timmy!" (12 chars long)
            done();                                         // done() callback is required to end the test.
        });
    });
});
