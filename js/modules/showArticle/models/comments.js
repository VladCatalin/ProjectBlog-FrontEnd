define(function(require, exports, module) {
    var Backbone = require('backbone');
    var comment = require('./comment');


    module.exports = Backbone.Collection.extend({
        model :comment,
        url :function() {
            return 'http://localhost:8081/blog-rest-service/article/' + this.id + '/comment/';
        }
    });
});

