# vue2.0 初学者实例

>基础知识参考官方文档
> [安装环境教程](https://github.com/yangjingjing1234/installvue)
> [vue2.0官网](https://cn.vuejs.org/)
> [vue-router](https://router.vuejs.org/zh-cn/)
> [vue-vuex](https://vuex.vuejs.org/zh-cn/)
## 应用外部组件

>axios 用来做ajax请求
>vue-lazyload 图片懒加载
>[vue-awesome-swiper](https://surmon-china.github.io/vue-awesome-swiper/) 轮播图
>vue-infinite-scroll 瀑布流加载
>vuex 状态管理
>vue-router  路由管理

``` 
npm install vue-lazyload vue-awesome-swiper vue-infinite-scroll  axios vuex--save
``` 
## vuex简单理解
>组件之间通信
>父子组件至今简单通信可通过props传递，$emit()触发，$on()监听，当然如果你不想用可以用vuex代替
> vuex 应用mapActions(调用action.js的方法),mapMutations(调用mutation.js里的方法) ,mapState(获取state状态)
## 生命周期
####生命周期是有先后顺序的.

> 父组件：
> beforeCreate(创建前)
> created(已创建)
> beforeMount(安装之前)
>> 子组件：
>> beforeCreate
>> created
>> beforeMount

> 父组件：
> beforeDestroy(销毁之前)
> destroyed(销毁之后)
>> 子组件：
>> beforeDestroy
>> destroyed
>> mounted 
> 父组件：    
> mounted (安装之后)

##其他知识点
> 组件之间，参数至今 注意驼峰命名的规则
> 个个vue方法的理解，过滤器(filters)，计算属性(computed),自定义方法(methods),观察(watch)
> axios 跨域反向代理配置
> axios post参数，如果后台接受不到，需要处理一下
```

Vue.prototype.$http = axios;

this.$http.post(url, {a: 1, b:2}, {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
}).then(response => response.data)
  .then(data => {
    console.log(data);
  });
  //参数形式如果后台无法获取，需要处理一下
var qs = require('qs');
this.$http.post('/foo', qs.stringify({ 'bar': 123 });
```
> build文件不再根目录，路径配置
> 字符串拼接有2种方式
```
es5
this.$http.get('https://www.baidu/10/'+this.page)
es6
this.$http.get(`https://www.baidu/10/${this.page}`)

```


##

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


###后续还有很多知识点慢慢加入吧！
