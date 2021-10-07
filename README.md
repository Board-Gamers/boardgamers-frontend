# frontend

## frontend 폴더 구조

```
.
├─ README.md
├─ index.html
├─ package.json
├─ gitignore
├─ public
│  └─ index.html
└─ src
   ├─ main.js
   ├─ App.vue
   ├─ components        컴포넌트
   │  ├─ main
   │  ├─ boardgame
   │  ├─ user
   │  ├─ profile
   │  └─ qna
   ├─ routes            라우터
   │  └─ index.js
   ├─ views             라우터 페이지
   │  ├─ MainView.vue
   │  ├─ boardgame
   │  ├─ user
   │  ├─ profile
   │  └─ qna
   ├─ store             상태 관리
   │  └─ index.js
   ├─ api               api 함수
   │  ├─ boardgameApi
   │  ├─ QnaApi
   │  ├─ RecommendApi
   │  ├─ UserApi
   │  ├─ YoutubeApi
   │  └─ intercepter.js
   ├─ assets            기타 자원
   │  ├─ images
   │  └─ css
   └─ fonts            폰트
```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
