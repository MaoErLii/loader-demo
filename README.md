# 编写loader

## 步骤

三种方法在本地开发和测试编写的loader
  
  ***

  example:(webpack.congif.js)

  测试 单 loader

  ```javaScript
    module.exports = {
      // ...
      module: {
        rules: [
          {
            test: /\.js$/,
            use: [
              {
                loader: path.resolve('path/to/loader.js'),
                options: {/*...*/}
              }
            ]
          }
        ]
      }
    };
  ```

   测试 多 loader
  
  ```javaScript
  module.exports = {
    resolveLoader: {
      modulser: [
        'node_mudules',
        path.resolve(__dirname, 'loaders')
      ]
    }
  }
  ```

## 简单使用

***
  单个 loader 作用时， loader 只被一个源文件的js字符串调用;

  loader 应该返回1个或2个值

  第一个值未 字符串（String）或  缓存（buffer）;
  
  第二个可选值 是js对象的 sourceMap

## 复杂使用

***

使用多个loader的时候，需要注意它们的顺序

* 在数组最后的loader,将会是第一个执行的,并传递原始资源
* 数组里第一个loader, 最后执行，并且返回js和可选的source map（源映射）
* 这之间的loader 将会和之前的loader的结果链式返回

示例

```javaScript

module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\/js/,
        use: [
          'bar-loader',
          'foo-loader'
        ]
      }
    ]
  }
}

```

## loader编写的方针

* 简单（keep them simple）
* 链式（utilize chaining）
* 模块发散（emit modular output）
* 无状态（make sure they're stateless）
* （employ loader utilities）
* 标记loader依赖（mark loader dependencies）
* 解析模块依赖（resolve module dependencies）
* 提取公共代码（extract common code）
* 避免绝对路径（avoid absolute paths）
* 使用对等依赖（use peer dependencies）
