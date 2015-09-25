define(function(require, exports, module) {
    var app = require('app');
    var HomeRouter = require('modules/home/router');
    var ArticoleRouter = require('modules/articole/router');
    var ContactRouter = require('modules/contact/router');

    var RouterInitializer = Marionette.Controller.extend({
        initialize: function() {
            app.on('initialize:after', function(){
                new HomeRouter();
                new ArticoleRouter();
                new ContactRouter();
            });
        }
    });

    module.exports = new RouterInitializer();
});
