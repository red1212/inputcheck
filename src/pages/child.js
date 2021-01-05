/**
 * 子组件
 */
import { values } from 'lodash'
import React from 'react'
export default class Child extends React.Component{
  state={
    Text : '子组件的文本',
    cc :'dfdfdf'
  }
  static getDerivedStateFromProps(props,state){
    console.log('子组件getDerivedStateFromProps方法执行')
    return {
      fatherText:props.Text
    }
  }
  //组件更新时调用
getSnapshotBeforeUpdate(prevProps,prevState){
  console.log('子组件的getSnapshotBeforeUpdate方法执行')
  console.log(prevProps)
  console.log(prevState)
  console.log('子组件的getSnapshotBeforeUpdate方法执行')
  return '哈哈'
}
  render(){
    return(
    <div>
      {this.props.Text}
    </div>
    )
  }
}