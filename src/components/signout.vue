<template>
	<div>
	    <div @click="$router.go(-1)">返回</div>
		<div class="btn">
			<button v-on:click="submit">确认退出</button>
		</div>
	</div>
</template>
<script type="text/javascript">
	import { mapActions } from 'vuex'
	export default {
        methods: {
            ...mapActions(['USER_SIGNOUT']),
            submit() {
            	console.log(223)
                this.USER_SIGNOUT()
				this.$router.replace({ path: '/login' })
            }
        }
    }
</script>
<style type="text/css">
	.btn {
		padding: 50px;
		text-align: center;
	}
	.btn button {
		padding: 5px 10px;
	}
</style>