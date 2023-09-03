const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge'); // 웹팩 설정 병합을 위한 모듈 가져오기
const common = require('./webpack.common'); // 공통 웹팩 설정 가져오기

module.exports = merge(common, {
  plugins: [new Dotenv()]
})