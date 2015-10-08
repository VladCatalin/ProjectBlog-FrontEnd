define(function(require, exports, module) {
    var Backbone = require('backbone');
    var Marionette = require('marionette');
    var moment = require('moment');

    module.exports = Marionette.ItemView.extend({
        tagName: 'li',
        className :'articleWrap',
        template: '#articole-item',


        events:{

            'click .ButtonDel' :'deleteArticle'
        },

        initialize:function(){

            this.model.fetch();
            this.listenTo(this.model,'destroy', this.goHome);
        },
        goHome:function(){
            Backbone.history.navigate('#articole', true);
        },

        templateHelpers:{
            createDate: function(){
                var date = moment(new Date(this.model.date)).format("MMM Do YY");
                return date;
            }
        }
        ,deleteArticle : function(){

            this.model.destroy().then(function(){
                this.render();
            });
        }
    });


});