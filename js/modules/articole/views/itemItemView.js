define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');


    module.exports = Marionette.ItemView.extend({
        tagName: 'li',
        className :'articleWrap',
        template: '#articole-item'

    });
});