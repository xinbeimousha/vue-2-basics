Vue.component('one',{
	template:'<div>this is a easy component</div>'
})

Vue.component('two',{
	template:'<div>{{item.name}}</div>',
	data:function(){
		return {
			item:window.games[0]
		}
	}
})

Vue.component('three',{
	template:'<li><slot></slot></li>'
})

Vue.component('four',{
	template:'<li><slot>这是默认内容</slot></li>'
})

Vue.component('five',{
	template:`
		<div>
    		<div class="top-nav">
    			<slot name="header"></slot>
    		</div>
    		<div class="main">
    			<slot name="content"></slot>
    		</div>
    	</div>
	`
})

Vue.component('six',{
	props:['userName'],
	template:'<div>{{uppercaseName}}</div>',
	computed:{
		uppercaseName:function(){
			return this.userName.trim().toUpperCase()
		}
	}
})

Vue.component('gamelist',{
	template:`<ul>
	<three v-for="game in games" :key="game.id">{{game.name}}</three>
	</ul>
	`,
	data:function(){
		return {
			games:window.games
		}
	}
})

var app = new Vue({
	el:'#app',
	data:{
		inputMsg:''
	}
})