'use strict';

/* Directives */

angular.module('directives', []);


/**
 * Diretiva responsavel pelo i18n. Converte o conteudo 'key' em seu valor.
 */
angular.module('directives').directive('translate', [
function() {
	return {
		restrict : 'A',
		link : function(scope, element, attributes) {
			var node = element;
			var tagName = node.prop('tagName');
			var translateValuesArray = (attributes.translateValues) ? translateValues(attributes.translateValues) : [];

			if (tagName == 'INPUT' || tagName == 'TEXTAREA') {
				translateAttr(node, 'placeholder');
			} else if (tagName == 'BUTTON') {
				translateAttr(node, 'title');
			} else {
				translateGeneric(node);
			}

			function translateAttr(element, attr) {
				var key = element.attr(attr);
				if (key) {
					var value = jQuery.i18n.prop.apply(this, [key].concat(translateValuesArray));
					element.attr(attr, value);
				}
			}

			function translateGeneric(element) {
				var key = element.html();
				var value = jQuery.i18n.prop.apply(this, [key].concat(translateValuesArray));

				element.html(value);
			}

			function translateValues(translateValuesString) {
				var resultArray = [];

				if (translateValuesString) {
					var array = translateValuesString.replace('[', '').replace(']', '').replace("'", '').replace("'", '').split(',');

					for (var i = 0; i < array.length; i++) {
						var key = array[i];

						if (jQuery.i18n.map[key]) {
							resultArray.push(jQuery.i18n.prop(array[i]));
						} else {
							resultArray.push(key);
						}
					}
				}
				return resultArray;
			}

		}
	};
}]);