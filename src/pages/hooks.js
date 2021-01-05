import React, { useState } from 'react'
export default function HookFn() {
  //集中定义变量
  let name, age, career, setName, setCareer;
  //获取名字的状态
  [name, setName] = useState('名字')
  //获取年龄的状态
  [age] = useState('12')
  //获取职业的状态
  [career, setCareer] = useState('职业')

  return (
    <div>
      <p>姓名:{name}</p>
      <p>年龄:{age}</p>
      <p>职业:{career}</p>
      <div onClick={()=>{
        setName('小红')
      }}>修改姓名</div>
    </div>
  )
}