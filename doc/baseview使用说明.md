
### View

*生命周期Hook*

- rawLoader：返回一个模板字符串，并使用$el.append(html)
- beforeMount：在模板载入到真实dom之前调用
- afterMount：在模板载入到真实dom之后调用
- ready：base.View内部初始化完成之后调用
- beforeDestroy：base.View实例销毁之前
- destroyed：base.View实例销毁之后


*Context Hook*

- context：上下文钩子函数，可以通过`triggerContextHook`来反向通信

```
//JavaScript
this.triggerContextHook({'github':'icepy'}) //默认向父节点发送消息

this.triggerContextHook('root',{'github':'icepy'}) //向root节点发送消息

```

**实例方法**

- compileHTML(template, data)：编译模板
- destroy：销毁当前实例对象（删除DOM，卸载事件监听等）
- triggerContextHook：触发父实例对象或者root实例对象的上下文钩子事件
- on(name,callback,[context]): 定义一个自定义事件处理
- trigger(name,data): 触发某个自定义事件

*实例属性*

- $parameter：路由参数（#index/12），此参数为12
- $root：根View实例对象
- $parent：父实例对象
- $children：子实例对象数组


**生命周期**
![生命周期](https://raw.githubusercontent.com/sapling-team/base-extend-backbone/master/doc/img/BaseView%20Life%20Cycle.png)