this["JST"] = this["JST"] || {};

this["JST"]["#app-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="banner" class="row"></div><div id="sidebar"></div><div id="container" class="container"></div>';

}
return __p
};

this["JST"]["#articole-item"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<img src="./static/post1.jpg" align="left" class="postPhotos"/><h1 class="titleArticle">' +
__e( model.title ) +
'</h1><div class="description">' +
__e( model.description ) +
'<a href="#" class="moreDetail"><button data-action="bea" class="moreDetailButton">Citeste mai mult...</button></a></div>';

}
return __p
};

this["JST"]["#articole-layout"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div class="col-md-10 col-md-offset-1"><div class="wrapper col-md-10 col-md-offset-1"><div class="left-contain col-md-8"><li class="articleWrap"><img src="./static/post1.jpg" align="left" class="postPhotos"/><h1 class="titleArticle">Despre experien?a culinar? din Asia</h1><div class="description">M? g�ndesc c? deja ?i s-a f?cut un pic foame sau poft? c�nd ai auzit de m�ncare asiatic?. Tot conceptul ?sta are o alur? exotic?, interesant?, apetisant? ?i este adev?rat, o mare partedin preparatele din Asia sunt delicioase, �ns? experien?a de la fa?a locului este un pic diferit? fa?? de cea de la un restaurant exotic din Europa, a?a c? m-am g�ndit...<a href="#" class="moreDetail"><button data-action="bea" class="moreDetailButton">Citeste mai mult...</button></a></div></li><li class="articleWrap"><img src="./static/post2.jpg" align="left" class="postPhotos"/><h1 class="titleArticle">Prima dat? �n Cambodgia<div class="description">?tiam prea putine lucruri despre Cambodgia �nainte s? o vizit?m, �ns? turul de 10\nzile pe care l-am f?cut aici ne-a �nv??at mai multe dec�t orice lec?ie de istorie si civiliza?ie. Am\nstr?b?tut Cambodgia de la nord la sud �ntr-o c?l?torie care ne-a trecut treptat de la extaz, la\nvederea complexului Angkor Wat, la pu?in? agonie...<a href="#" class="moreDetail"><button data-action="bea" class="moreDetailButton">Citeste mai mult...</button></a></div></h1></li><li class="articleWrap"><img src="./static/post3.jpg" align="left" class="postPhotos"/><h1 class="titleArticle">15 lucruri pe care merit? s? le iei cu tine c�nd c?l?tore?ti<div class="description">C�nd e?ti acas? ai de toate la �ndem�n? sau m?car ?tii de unde s? faci rost.\nC�nd c?l?tore?ti lucrurile stau pu?in altfel. Nu prea po?i s? iei multe lucruri cu tine pentru c? vrei s? ai\nun bagaj c�t mai mic, nu po?i nici s? prevezi toate situa?iile, mai mult sau mai pu?in limit?, �n care vei fi pus ?i nici nu o s? ?tii mereu de unde s? faci rost...<a href="#" class="moreDetail"><button data-action="bea" class="moreDetailButton">Citeste mai mult...</button></a></div></h1></li><li class="articleWrap"><img src="./static/post4.jpg" align="left" class="postPhotos"/><h1 class="titleArticle">Despre experien?a culinar? din Asia<div class="description">M? g�ndesc c? deja ?i s-a f?cut un pic foame sau poft? c�nd ai auzit de m�ncare asiatic?. Tot conceptul ?sta are o alur? exotic?, interesant?, apetisant? ?i este adev?rat, o mare partedin preparatele din Asia sunt delicioase, �ns? experien?a de la fa?a locului este un pic diferit? fa?? de cea de la un restaurant exotic din Europa, a?a c? m-am g�ndit...<a href="#" class="moreDetail"><button data-action="bea" class="moreDetailButton">Citeste mai mult...</button></a></div></h1></li></div><div class="right-contain col-md-3 col-md-offset-1"><div class="social"><a href="www.facebook.com"><img src="./static/facebook.png"/></a><a href="www.pinterest.com"><img src="./static/pinterest.png"/></a><a href="www.twitter.com"><img src="./static/twitter_bird.png"/></a></div></div></div></div>';

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
__p += '<div class="form"><div class="form-container">First name:<br/><input type="text" name="firstname"/><br/>Last name:<br/><input type="text" name="lastname"/><input type="radio" name="sex" value="male"/>Male<br/><input type="radio" name="sex" value="female"/>Female<input type="submit" value="Submit"/></div></div>';

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
__p += '<div class="navbar-container row"><div class="navbar col-md-7 col-centered"><div id="bs-example-navbar-collapse-1" class="collapse navbar-collapse"><ul id="navigation" class="nav navbar-nav"><li class="navbar-ch"><a href="#" title="Acasa">Acasa</a></li><li class="navbar-ch dropdown"><a href="#articole" title="Articole" class="dropdown-toggle">Articole<span class="caret"></span></a><ul id="nav2" class="dropdown-menu"><li class="navbar-ch2"><a href="#" title="Sport">Sport</a></li><li class="navbar-ch2"><a href="#" title="Calatorii">Calatorii</a></li><li class="navbar-ch2"><a href="#" title="IT">IT</a></li></ul></li><li class="navbar-ch"><a href="#" title="Despre Mine">Despre Mine</a></li><li class="navbar-ch"><a href="#contact" title="Contact">Contact</a></li></ul></div></div></div>';

}
return __p
};