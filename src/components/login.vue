<template>
	<div>
	    <h4 class="title">登录</h4>
		<form class="login" v-on:submit.prevent="submit">
			<div class="line">	
				<div v-show="btn && !form.id">id不能为空</div>
				<input type="number" placeholder="输入你的id" v-model="form.id">
			</div>
			<div class="line">
				<div v-show="btn && !form.name">用户名不能为空</div>
				<input type="text" placeholder="输入你的用户名" v-model="form.name">
			</div>
			<button>登录</button>
		</form>
		<div class="bottom">	
			<router-link :to="{name:'Home'}">首页</router-link>		
		</div>
		
	</div>
</template>
<script type="text/javascript">
	import { mapActions } from 'vuex'
	export default {
        data() {
			return {
				btn: false, //true 已经提交过， false没有提交过
				form: {
					id: '',
					name: ''
				}
			}
		},
		methods: {
            ...mapActions(['USER_SIGNIN']),
			submit() {
				this.btn = true;
				if(!this.form.id || !this.form.name) {
					return false
				}
				this.USER_SIGNIN(this.form)
				this.$router.replace({ path: '/' })
			}
		}
    }
</script>
<style scoped>
.login {
	padding: 50px;
	text-align: center;
}
.login .line {
	padding: 5px;
}
.login	button {
	padding: 0 20px;
	margin-top: 20px;
	line-height: 28px;
	background: #03a9f4;
	color:#fff;
}
.login	input {
	padding: 0 10px;
	line-height: 28px;
}
.title{
	font-size: 20px;
	text-align: center;
	padding-top: 20px;
}
.bottom{
	text-align: center;
}
</style>