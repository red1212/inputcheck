/**
 * lodash在全局引入，包太大可能引入没有用的属性，现在通过polyFill层进行拆分，只引入使用的属性
 */

 import toNumber from 'lodash/toNumber'
 
 const _ ={
     toNumber
 }

 export default _