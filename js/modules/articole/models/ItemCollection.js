define(function(require, exports, module) {
    var Backbone = require('backbone');
    var ItemModel = require('./Item')

    module.exports = Backbone.Collection.extend({
        url:'http://localhost:8081/blog-rest-service/article/'
        , model: ItemModel
    });
});
