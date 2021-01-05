import pageRouter from './router.config'
export default {
    plugins: [
        // ref: https://umijs.org/plugin/umi-plugin-react.html
        ['umi-plugin-react', {
          antd: true,
          dva: true,
          dynamicImport: false,
          title: '测试',
          dll: false,
        }],
       
      ],
     
    routes:pageRouter
}