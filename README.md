# 보드게이머스

> 보드게임 추천 서비스

여러 가지 보드게임의 설명, 정보, 플레이 방법 등을 제공하고 QnA를 통해 다른 사용자들과 정보를 공유할 수 있습니다. <br>
별점과 리뷰를 작성할 수 있으며, 게임에 매긴 별점에 따라 내가 좋아할 만한 보드게임을 추천받을 수 있습니다.

## 주요기능
<img src="https://user-images.githubusercontent.com/68420164/147869929-6b7483f2-7e1f-4766-886a-1a68863f063e.png" width="70%" height="70%">


## 아키텍처
<img src="https://user-images.githubusercontent.com/68420164/147869967-b4e6d30f-9716-4e7a-9d79-67617bf5790a.png" width="70%" height="70%">

## 설치
```
sudo git clone <프로젝트레포>
yarn install
yarn serve
```

## 사용 예시
<img src="https://user-images.githubusercontent.com/68420164/147870334-4a56ea8e-5062-4cad-9475-a0040f9e85c2.png" width="70%" height="70%">
<img src="https://user-images.githubusercontent.com/68420164/147870336-7701d965-fbf6-48bd-bad5-239ae8e07756.png" width="70%" height="70%">
<img src="https://user-images.githubusercontent.com/68420164/147870337-dcd23bab-27ce-4439-af93-5c5fc75d71ba.png" width="70%" height="70%">
<img src="https://user-images.githubusercontent.com/68420164/147870338-1efe6b07-31ae-4264-9553-a40e36e49cfe.png" width="70%" height="70%">
<img src="https://user-images.githubusercontent.com/68420164/147870340-c86fb7f5-c6da-42ba-90a7-6ed581d58380.png" width="70%" height="70%">
<img src="https://user-images.githubusercontent.com/68420164/147870341-39521062-998d-43d0-901d-8c9c023edfe3.png" width="70%" height="70%">
<img src="https://user-images.githubusercontent.com/68420164/147870343-ca8bb1dd-61a2-4bb1-a312-3efbbf872ce4.png" width="70%" height="70%">
<img src="https://user-images.githubusercontent.com/68420164/147870345-eb5b513a-3756-4407-948e-635dd088c7e4.png" width="70%" height="70%">
<img src="https://user-images.githubusercontent.com/68420164/147870346-1ebb460c-9d6a-40fe-8504-bfd9c8b72461.png" width="70%" height="70%">

## 기여

1. 해당 프로젝트를 Fork 하세요
2. feature 브랜치를 생성하세요 (`git checkout -b feature/fooBar`)
3. 변경사항을 commit 하세요 (`git commit -am 'Add some fooBar'`)
4. 브랜치에 Push 하세요 (`git push origin feature/fooBar`)
5. 새로운 Merge Request를 요청하세요


## Frontend 폴더 구조

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
   ├─ routes            페이지 라우팅
   │  └─ index.js
   │
   ├─ views             
   │  ├─ MainView.vue   메인 페이지
   │  ├─ boardgame      보드게임 검색, 상세 페이지
   │  ├─ user           유저 관리 페이지(로그인, 회원가입 등)
   │  ├─ profile        유저 정보 페이지
   │  └─ qna            사이트 QnA 페이지
   │
   ├─ store             상태 관리
   │  └─ index.js
   ├─ api               api 함수
   │  ├─ boardgameApi   보드게임 정보(GET)
   │  ├─ QnaApi         QnA 작성(GET, POST, DELETE)
   │  ├─ RecommendApi   추천 결과 가져오기(GET)
   │  ├─ UserApi        로그인 및 회원가입(POST)
   │  ├─ YoutubeApi     유튜브 영상 가져오기(GET)
   │  └─ intercepter.js
   ├─ assets            기타 자원
   │  ├─ images
   │  └─ css
   └─ fonts            폰트
```
