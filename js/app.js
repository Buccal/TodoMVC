/*
添加了
使用hash实现路由功能
 */

(function (window) {
	'use strict';
	var app = new Vue({
		el: ".todoapp",
		data: {
			todos: Storage.find(),
			newTodo: "",
			curEdit: null,
			todos_temp: [],
			tag: '/',
		},
		computed: {
			isToggleAll: {
				get: function(){
					return false;
					// 干嘛的？？？！！！！
					// return this.todos.every(t => t.completed); //如果函数对每一项都返回 true，则返回 true
					// return this.leftNum === 0;
				},
				set: function(value){
					if(value){
						this.todos_temp = JSON.parse(JSON.stringify(this.todos));
						this.todos.forEach(item => item.completed = true);
					}else{
						this.todos = this.todos_temp;
					}
				}
			},
			leftNum: function(){
				return this.todos.filter(item => !item.completed).length;
			},
			todo_show: function(){
				switch(this.tag){
					case '/': return this.todos; break;
					case '/active': return this.todos.filter(item => !item.completed); break;
					case '/completed': return this.todos.filter(item => item.completed); break;
				}
			}
		},
		filters: {
			pluralize: function (n) {
				return n === 1 ? 'item' : 'items';
			}
		},
		methods: {
			createTodo: function(){
				if(this.newTodo.trim()){
					this.todos.push({
						text: this.newTodo,
						completed: false,
					});
				}
				this.newTodo = ""; //如果声明v-model.trim="newTodo"，此条在为空时不起作用！！！！
			},
			editComplete: function(todo, index, event){
				if(this.curEdit === todo.text) return;//按esc再失去焦点
				todo.text = event.target.value.trim();
				if(!todo.text){
					this.todos.splice(index, 1);
				}
				this.curEdit = null;
			},
		},
		directives: {
			"focus": {
				inserted: function(el){
					el.focus();
				}
			},
			"editing-focus": {
				// update: function(el){
				componentUpdated: function(el){
					el.focus();
				}
			}
		},
		watch: {
			todos: {
				handler: (todos)=>{
					console.log(this);//undefined
					Storage.save(todos);
				},
				// handler: (todos)=>Storage.save(todos),
				// handler: ()=>Storage.save(this.todos),
				deep: true,
			}
		}
	});
	window.onhashchange = function(){
		app.tag = location.hash.slice(1);
	};
})(window);
/*
watch-handler里的作用域搞不清楚，为啥可以直接取todo？为啥this指向undefined
 */