define(function(require, exports, module) {
    var Backbone = require('backbone');


    module.exports = Backbone.Model.extend({
        url :function() {
            debugger;

            return 'http://localhost:8081/blog-rest-service/article/' + this.get('articleId') + '/comment/'
                + this.get('commentId');
        }
    });
});
