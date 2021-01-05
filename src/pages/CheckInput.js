//创建input校验的高阶组件
import React from 'react';
export default function CheckInput(Com) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.obj = {};  //定义一个空对象存放验证信息
      this.state = {};  //定义一个状态保存input值和输入有误时的提示信息
    }
//校验所有的input
verificateAll=(callback)=>{
  const ispass = Object.keys(this.obj).map(item=>{
    return this.verificatedFiled(item)
  })
    //返回的ispass是true或false
    callback(!ispass.includes(false),this.state);
}

    //这个方法用来校验
    gradeInput = (name, option) => {
      this.obj[name] = option  //将传递过来的对象通过计算属性存入obj
      return Iptcomp => {   //返回一个带参数的函数，我们将<input/>输入框作为参数传入，来为他添加属性和方法
        return (
          <div>
            {
              //由react.createElement生成的元素不能直接修改，我们需要克隆一份
              React.cloneElement(Iptcomp, {
                name: name,   //给input添加name属性并将传入的name付给他
                value: this.state[name] || '',
                onChange: this.handleChange  //为input添加方法
              })
            }
            {
              //如果有提示信息，一样通过计算属性存到状态，如果有的话就展示
              this.state[name + 'msg'] && <p style={{color:'red'}}>{this.state[name + 'msg']}</p>
            }
          </div>
        )
      }
    }
    //校验
    verificatedFiled = (name) => {  //校验输入框，在handleChange里面调用
      //我们之前把校验信息存入到obj的计算属性中，通过遍历去挨个校验
      const isverif = this.obj[name].rules.map(item => {
        if (item.required) {
          //校验必填项
          if (this.state[name]) {
            this.setState({ [name + "msg"]: "" });//校验成功清空提示信息并返回true否则返回false
            return true
          }
          this.setState({ [name + "msg"]: item.message })
          return false
        }
      })
      //遍历完会返回一个true和false的数组isverif，只要有一个为false则为不通过
      return isverif.indexOf(false) > -1 ? false : true;
    }

    handleChange = (e) => {
      const { name, value } = e.target;
      //值改变时就开始校验，因为状态的异步更新机制，要在setState的回调函数中调用，保障每次拿到的是最新的值
      this.setState(
        { [name]: value }, () => {
          this.verificatedFiled(name)
        }
      )
    }

    render() {
      return (
        //将方法传递给要修饰的组件
        <Com {...this.props} gradeInput={this.gradeInput} verificateAll={this.verificateAll}/>
      )
    }
  }
}