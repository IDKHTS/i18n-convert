const path = require('path')
const fs = require('fs')
const vm = require('vm')
const babel = require('@babel/core')
const Json2csv = require('@json2csv/plainjs')

const ASSETS_PATH = path.resolve(__dirname, 'assets')
const OUTPUT_PATH = path.resolve(__dirname, 'output')
console.log('222', ASSETS_PATH, OUTPUT_PATH)

function jsToJson(path) {
  const fileContent = fs.readFileSync(path)

  // 使用babel将ES6代码转换为CommonJS模块化代码
  const { code: transformedCode } = babel.transform(fileContent, {
    presets: ['@babel/preset-env'],
  })

  // 将代码包装成一个匿名函数
  const wrapper = `${transformedCode}`

  // 执行JS代码
  const context = {
    exports: {},
    module: {
      exports: {},
    },
  }
  vm.runInNewContext(wrapper, context)
  const json = JSON.stringify(
    context.exports.default || context.module.exports,
    null,
    2
  )
  return json
}

function createFileOrDirAndWrite(filePath, content) {
  // 检查文件是否存在，如果不存在则创建文件或目录
  if (!fs.existsSync(filePath)) {
    const dirname = path.dirname(filePath)

    // 检查目录是否存在，如果不存在则创建目录
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname, { recursive: true })
    }

    fs.writeFileSync(filePath, content)
    console.log(`The file "${filePath}" has been created!`)
  } else {
    console.log(`The file "${filePath}" already exists!`)
  }
}

function csvToJson(csv) {
  const results = []
  csv.split('\n').forEach((line) => {
    csvParser(line, {}, (err, data) => {
      if (data) {
        results.push(data)
      }
    })
  })
  return results
}

function main() {
  if (!fs.existsSync(ASSETS_PATH)) return

  const assetsFiles = fs.readdirSync(ASSETS_PATH)
  console.log(assetsFiles)

  const jsonArr = assetsFiles.map((name) => {
    const json = jsToJson(path.resolve(ASSETS_PATH, name))
    const nameWithoutExt = name.split('.').slice(0, -1).join()
    createFileOrDirAndWrite(
      path.resolve(OUTPUT_PATH, nameWithoutExt + '.json'),
      json
    )

    const parser = new Json2csv.Parser({})
    const csv = parser.parse(JSON.parse(json), {flatten: true})

    createFileOrDirAndWrite(
      path.resolve(OUTPUT_PATH, nameWithoutExt + '.csv'),
      csv
    )
    // console.log(csv)
  })

  //   jsonArr.forEach(json => {

  //   })
}

main()
