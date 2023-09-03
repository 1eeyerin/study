const { merge } = require('webpack-merge'); // 웹팩 설정 병합을 위한 모듈 가져오기
const common = require('./webpack.common'); // 공통 웹팩 설정 가져오기

module.exports = merge(common, {
  mode: 'development', // 개발 모드 설정
  devtool: 'cheap-module-source-map', // 소스 맵 설정
  devServer: {
    historyApiFallback: true, // 모든 요청을 인덱스 페이지로 리다이렉트하여 SPA의 라우팅 지원
    port: 3000, // 개발 서버 포트 설정
    hot: true, // 핫 모듈 리플레이스먼트 활성화 (HMR)
  },
});
