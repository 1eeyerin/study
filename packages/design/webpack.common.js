const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  // 엔트리 포인트 설정
  entry: './index.tsx',

  module: {
    rules: [
      {
        // JavaScript와 TypeScript 파일을 위한 룰 설정
        test: /\.(js|jsx|ts|tsx)$/,
        use: ['babel-loader', 'ts-loader'], // babel-loader와 ts-loader 사용
      },
      {
        // 이미지 파일을 위한 룰 설정
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader', // file-loader를 사용하여 이미지 처리
          },
        ],
      },
    ],
  },

  resolve: {
    // 파일 확장자 해결을 위한 설정
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  output: {
    // 번들된 파일 출력 경로 설정
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js', // 번들된 JavaScript 파일 이름
  },

  plugins: [
    // HtmlWebpackPlugin 플러그인 설정
    // 웹팩에서 HTML 파일을 생성하고 해당 HTML 파일에 번들된 자바스크립트 파일을 자동으로 추가해주는 플러그인입니다.
    // 개발할 때 HTML 파일을 생성하고 번들된 자바스크립트 파일을 자동으로 삽입해주는 작업을 간편하게 처리할 수 있도록 도와줍니다.
    new HtmlWebpackPlugin({
      template: './public/index.html', // HTML 템플릿 파일 지정
    }),

    // CleanWebpackPlugin 플러그인 설정
    new CleanWebpackPlugin(), // 빌드 이전의 내용을 정리하는 플러그인
  ],
};
