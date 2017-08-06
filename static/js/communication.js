// Vue.component('toggle-btn',{
// 	template:'<button @click="emmitToggle" class="btn btn-info">点我一下</button>',
// 	methods:{
// 		emmitToggle:function(){
// 			this.$emit('toggled')
// 		}
// 	}
// })
var bus = new Vue()
Vue.component('toggle-btn',{
	template:'<button @click="emmitToggle" class="btn btn-info">点我啊</button>',
	methods:{
		emmitToggle:function(){
			bus.$emit('any-thing-you-want','one','two')
		}
	}
})

Vue.component('listener',{
	template:'<h5>组件之间的通信</h5>',
	mounted:function(){
		bus.$on('any-thing-you-want',function(data1,data2){
			console.log(data1,data2)
		})
	}
})
var app = new Vue({
	el:'#app',
	data:{
		showBox:true
	},
	methods:{
		toggleBox:function(){
			this.showBox = !this.showBox
		}
	}
})