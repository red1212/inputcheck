
import styles from './index.css';
import { Input, Button } from 'antd'
import React from 'react';
import CheckInput from './CheckInput'
import Child from './child'
import "animate.css";                            // 引入动画库
import HookFn from './hooks'

@CheckInput
class Page extends React.Component {
  constructor(props){
    super(props);
    this.state={
      Text:'父组件的文本',
      title:'我是Provider'
    }
  }
  //初始化和更新时调用
static getDerivedStateFromProps(props,state){
  console.log('getDerivedStateFromProps方法执行')
  return {
    fatherText:props.Text
  }
}
//初始化渲染执行
componentDidMount(){
  console.log('componentDidMount方法执行')
}

shouldComponentUpdate(prevProps,nextState){
  console.log('shouldComponentUpdate 方法执行')
  return true
}
//组件更新时调用
getSnapshotBeforeUpdate(prevProps,prevState){
  console.log('getSnapshotBeforeUpdate方法执行')
  return '哈哈'
}

componentDidUpdate(nextProps,nextState,valueFromSnapshot){
  console.log('componentDidUpdate方法 执行')
  console.log('从getSnapshotBeforeUpdate获取到的值是',valueFromSnapshot)
}

  onsubmit = () => {
    this.props.verificateAll((isverify, allVal) => {
      if (isverify) {
        console.log('校验成功', allVal)
      }
    })
  }
  render() {
    console.log('render执行')
    const { gradeInput } = this.props;
    return (
      <div className={styles.normal} onClickCapture={()=>{
        console.log('捕获经过div')
        
      }}
      onClick={()=>{
        console.log('冒泡经过div')
      }}
      >
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>
            用户名：
            {
              gradeInput('userName', {
                rules: [
                  { required: true, message: '用户名不能为空' },
                ]
              })(<Input />)
            }
          </li>
          <li>
            密码：
            {
              gradeInput('password', {
                rules: [
                  { required: true, message: '密码不能为空' }
                ]
              })(<Input />)
            }
          </li>
        </ul>
        <Button onClick={this.onsubmit} className={"animate__animated animate__bounce "}>提交</Button>
        <Button onClick={()=>{
          this.setState({Text:'dfdfdfdf'})
        }}>改变值</Button>
        <Child Text={this.state.Text}/>
        <HookFn/>
      </div>
    );
  }

}
export default Page
