define(function(require, exports, module) {
    var Backbone = require('backbone');


    module.exports = Backbone.Model.extend({

        url: 'http://localhost:8081/blog-rest-service/article/'
    });
});