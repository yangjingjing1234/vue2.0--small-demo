# vue2.0 初学者实例

> 基础知识参考官方文档
>
> [安装环境教程](https://github.com/yangjingjing1234/installvue)
>
> [vue2.0官网](https://cn.vuejs.org/)
>
> [vue-router](https://router.vuejs.org/zh-cn/)
>
> [vue-vuex](https://vuex.vuejs.org/zh-cn/)

## 应用外部组件

> axios 用来做ajax请求
>
> vue-lazyload 图片懒加载
>
> [vue-awesome-swiper](https://surmon-china.github.io/vue-awesome-swiper/) 轮播图
>
> vue-infinite-scroll 瀑布流加载
>
> vuex 状态管理
>
> vue-router  路由管理

``` 
npm install vue-lazyload vue-awesome-swiper vue-infinite-scroll  axios vuex--save
``` 
## vuex简单理解

> 1,组件之间通信
>
> 2,父子组件至今简单通信可通过props传递，$emit()触发，$on()监听，当然如果你不想用可以用vuex代替
>
> 3,Vuex 通过 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store访问到。路由也是同样道理.
>
> 4,Actions(处理异步操作,之后commit() ,Mutations 里的函数),组件中通过dispatch来触发 Actions
>
> 5,Mutations(同步处理state),mutation 的 载荷（payload）传入额外的参数,最好是对象形式，组件中通过commit触发mutations
>
> 6,getters可以认为是store 的计算属性，当不需要改变state状态，又要获取state的中间状态时调用，比如过滤器，输入框此时的state的值
>
> 7,vuex 应用mapActions(调用action.js的方法),mapMutations(调用mutation.js里的方法) ,mapState(获取state状态),mapGetters(获取getters里的方法)
>

``` 

//当一个组件需要获取多个状态时候，将这些状态都声明为计算属性,或者方法会有些重复和冗余。为了解决这个问题，我们可以使用 mapState ,mapMutations,mapActions辅助函数帮助我们生成计算属性，让你少按几次键。
//因为用到模块products，因此获取模块中的常量就要带上模块的前缀，组件中也是如此，但是模块中的方法 是直接访问不用带前缀,使用的时候跟普通的一样，通过输出this.$store.state可以查看层级关系
//3种不同的方式获取方式是相同的,详细可查看本例中用到的官网购物车实例。
//1,mapGetters获得现在数据
//2,mapState一样可以获得现在数据
//3,$store一样可以获得现在数据
//4,mutations中的方法名字可以重名，都会执行，没有覆盖，至于先后顺序我就不知道了。注：还可以重名使用。
 methods: {
    ...mapMutations([
      'increment' // 映射 this.increment() 为 this.$store.commit('increment')
    ]),
    ...mapMutations({
      add: 'increment' // 映射 this.add() 为 this.$store.commit('increment')
    }),
     ...mapActions([
      'increment' // 映射 this.increment() 为 this.$store.dispatch('increment')
    ]),
    ...mapActions({
      add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
    })
  },
  computed:mapState({
   // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',
    //如果状态管理用到modules,那么在模块products中的state获取就要用下边的加上模块前缀的方式获取
    //箭头函数this指向这个组件，因此前边不能用this来获取状态值
    productall: state => state.products.all ,
    //普通函数this指向局部状态
    countPlusLocalState (state) {
       console.log(this.$store.state)//可以获取状态值
    }
  })

``` 

## 生命周期
#### 生命周期是有先后顺序的.

> 父组件：
>
> beforeCreate(创建前)
>
> created(已创建)
>
> beforeMount(安装之前)
>
> > 子组件：
>
> > beforeCreate
>
> > created
>
> > beforeMount
>

> 父组件：
>
> beforeDestroy(销毁之前)
>
> destroyed(销毁之后)
>
> > 子组件：
>
> > beforeDestroy
>
> > destroyed
>
> > mounted 
>
> 父组件：    
>
> mounted (安装之后)
>

## 其他知识点
> 1,组件之间，参数至今 注意驼峰命名的规则
>
> 2,vue方法的理解，过滤器(filters)，计算属性(computed),自定义方法(methods),观察(watch)
>
> 3,axios 跨域反向代理配置
>
> 4,axios post参数，如果后台接受不到，需要处理一下
>
> 5,build文件不再根目录，路径配置

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

### 字符串拼接有2种方式

```
es5
this.$http.get('https://www.baidu/10/'+this.page)
es6
this.$http.get(`https://www.baidu/10/${this.page}`)

```


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


###后续还有很多知识点慢慢加入！有什么问题也欢迎指正！
