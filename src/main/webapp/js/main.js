loadI18n();

function loadI18n(){
	lang = currentLanguage();

	jQuery.i18n.properties({
	    name:'messages',
	    path:'/site/bundle/',
	    mode:'map',
	    cache : true,
	    language: lang,
	});
}


function currentLanguage(){
	var clang = getCookie("language");
	if(clang == null || clang == ''){
		setCookie("language","pt_br");
		clang = getCookie("language");
	}
	return clang;
}

var prop = jQuery.i18n.prop;
jQuery.i18n.prop = function() {
	var value = prop.apply(jQuery.i18n, arguments);
	if (/\[.*\]/.test(value)) {
		value = value.substring(1,value.length - 1);
	}
	return value;
};

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}

function setCookieExpire(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue;
}