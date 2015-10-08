this["JST"] = this["JST"] || {};

this["JST"]["#app-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="banner"></div><div id="sidebar"></div><div id="container" class="container"></div>';

}
return __p
};

this["JST"]["#articole-item"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img src="' +
((__t = ( model.url_image )) == null ? '' : __t) +
'" align="left" class="postPhotos"/><h1 class="titleArticle">' +
__e( model.title ) +
'</h1><div class="description">' +
__e( model.description ) +
'</div><div href="#" class="moreDetail">' +
__e( createDate() ) +
'<a href="#show-article/' +
__e( model.id ) +
'"><button data-action="bea" class="moreDetailButton">Citeste mai mult...</button></a><a href="#update-article/' +
__e( model.id ) +
'"><button data-action="bea" class="ButtonEdit">Edit</button></a><button data-action="bea" class="ButtonDel">Delete</button></div>';

}
return __p
};

this["JST"]["#articole-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-md-10 col-md-offset-1"><div class="wrapper col-md-10 col-md-offset-1"><div class="left-contain col-md-8"><li class="articleWrap"><img src="./static/post1.jpg" align="left" class="postPhotos"/><h1 class="titleArticle">Ne pare rau :(</h1><div class="description">Baza de date nu functioneaza<a href="#" class="moreDetail"><button data-action="bea" class="moreDetailButton">Citeste mai mult...</button></a></div></li></div><div class="right-contain col-md-3 col-md-offset-1"><div class="social"><a href="www.facebook.com"><img src="./static/facebook.png"/></a><a href="www.pinterest.com"><img src="./static/pinterest.png"/></a><a href="www.twitter.com"><img src="./static/twitter_bird.png"/></a></div></div></div></div>';

}
return __p
};

this["JST"]["#banner-banner"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img src="./static/banner.jpg" width="100%" height="237px"/>';

}
return __p
};

this["JST"]["#contact-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="form"><div class="form-container">First name:<br/><input type="text" name="firstname"/><br/>Last name:<br/><input type="text" name="lastname"/><br/><input type="radio" name="sex" value="male"/>Male<br/><input type="radio" name="sex" value="female"/>Female<input type="submit" value="Submit"/></div></div>';

}
return __p
};

this["JST"]["#create-article-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="formContent" class="col-md-6"><h2 class="titleForm">New Article Model</h2><div class="input-group"><input id="articleTitle" placeholder="Titlu articol" aria-describedby="basic-addon1" class="text form-control"/></div><br/><div class="input-group"><textarea id="articleDescription" placeholder="Descriere articol" aria-describedby="basic-addon1" class="text form-control"></textarea></div><br/><div class="input-group"><textarea id="articleContent" placeholder="Content articol" aria-describedby="basic-addon1" class="text form-control"></textarea></div><br/><div class="input-group"><input id="articleUrl" placeholder="Url imagine" aria-describedby="basic-addon1" class="text form-control"/></div><br/><button id="saveButton" class="btn btn-default">Save</button></div>';

}
return __p
};

this["JST"]["#create-comment-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="formContent" class="col-md-6"><h2 class="titleForm">Update Comment</h2><div class="input-group">Comentariul<textarea id="commentContent" placeholder="Comentariu" aria-describedby="basic-addon1" class="text form-control"></textarea></div><button id="saveButtonCom" class="btn btn-default">Save</button></div>';

}
return __p
};

this["JST"]["#home-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="content" class="col-md-5 col-md-offset-2"><div class="welcomeText">WELCOME TO MY BLOG</div></div>';

}
return __p
};

this["JST"]["#navigation-navbar"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="navbar-container row"><div class="navbar col-md-7 col-centered"><div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse"><ul id="navigation" class="nav navbar-nav"><li class="navbar-ch"><a href="#" title="Acasa">Acasa</a></li><li class="navbar-ch dropdown"><a href="#articole" title="Articole" class="dropdown-toggle">Articole<span class="caret"></span></a><ul id="nav2" class="dropdown-menu"><li class="navbar-ch2"><a href="#" title="Sport">Sport</a></li><li class="navbar-ch2"><a href="#" title="Calatorii">Calatorii</a></li><li class="navbar-ch2"><a href="#" title="IT">IT</a></li></ul></li><li class="navbar-ch"><a href="#" title="Despre Mine">Despre Mine</a></li><li class="navbar-ch"><a href="#contact" title="Contact">Contact</a></li></ul><a href="#create-article"><button id="newArt" class="btn btn-default"></button></a></div></div></div>';

}
return __p
};

this["JST"]["#showArticle-article-comment"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="commentId">Comment with ID : ' +
__e( model.id ) +
' (' +
((__t = ( createDate() )) == null ? '' : __t) +
')</div><div class="commentContent">' +
__e( model.content ) +
'</div><div class="CommentButtons"><button id="ButtonDelComment" data-action="bea">Delete</button><a href="#show-article/' +
__e( model.articleId ) +
'/update-comment/' +
__e( model.id ) +
'"><button id="ButtonEditComment" data-action="bea">Edit</button></a></div>';

}
return __p
};

this["JST"]["#showArticle-article-details"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="article-details"><img src="' +
((__t = ( model.url_image )) == null ? '' : __t) +
'" align="right" class="postPhotosArticle"/><h1 class="titleShowArticle">' +
__e( model.title ) +
'</h1><div class="contentShowArticle">' +
__e( model.content ) +
'<div id="show-addComReg"><a href="#show-article/' +
__e( model.id ) +
'/create-comment/"><button id="AddNewComment" data-action="bea">Add New Comment</button></a></div></div></div>';

}
return __p
};

this["JST"]["#showArticle-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="show-article-details"></div><h5 class="commentSectionTitle">Comment Section</h5><div id="show-com" class="col-md-12"><div id="show-article-comments" class="col-md-10"></div></div>';

}
return __p
};

this["JST"]["#showArticle-no-comment"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>NU EXISTA COMENTARII</h2><a href="#show-article/' +
__e( model.articleId ) +
'/create-comment/"><button id="CreateComments" data-action="bea">Add Comment</button></a>';

}
return __p
};

this["JST"]["#update-article-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="formContent" class="col-md-6"><h2 class="titleForm">Update Article Model</h2><div class="input-group"><input id="updateTitle" value="' +
((__t = ( model.title )) == null ? '' : __t) +
'" aria-describedby="basic-addon1" class="text form-control"/>Titlu Articol</div><br/><div class="input-group">Descriere Articol<textarea id="updateDescription" aria-describedby="basic-addon1" class="text form-control">' +
__e( model.content ) +
'</textarea></div><br/><div class="input-group">Content Articol<textarea id="updateContent" aria-describedby="basic-addon1" class="text form-control">' +
__e( model.content ) +
'</textarea></div><br/><div class="input-group">URL Imagine<input id="updateUrl" value="' +
((__t = ( model.url_image )) == null ? '' : __t) +
'" aria-describedby="basic-addon1" class="text form-control"/></div><br/><button id="saveButton" class="btn btn-default">Update Article</button><button data-action="bea" class="ButtonDel btn btn-default">Delete</button></div>';

}
return __p
};

this["JST"]["#updateComment-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="formContent2" class="col-md-6"><h2 class="titleForm">Update Comment</h2><div class="input-group">Content Articol<textarea id="updateContent" aria-describedby="basic-addon1" class="text form-control">' +
__e( model.content ) +
'</textarea></div><button id="saveButtonCom" class="btn btn-default">Update Comment</button><button data-action="bea" class="ButtonDelCom btn btn-default">Delete</button></div>';

}
return __p
};