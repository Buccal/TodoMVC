(function(exports) {
	'use strict';
	const STORAGE_KEY = "todo";
	exports.Storage = {
		save: function(todos) {
			// 将对象数组转换为字符串
			localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
		},
		find: function() {
			return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
		}
	}
})(window);