const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production', // 프로덕션 모드 설정
  devtool: 'hidden-source-map', // 숨겨진 소스 맵 설정 (배포용)
});
