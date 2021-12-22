# 🤹‍ WEHOTEL

---

## 목차

1. [프로젝트 소개](##프로젝트-소개)<br/>
3. [깃 저장소](##-깃-저장소)<br/>
4. [Tools](##-tools-🛠)<br/>
5. [주요기능 및 역할](##-주요-기능-및-역할)<br/>

---

## 프로젝트 소개

- [데일리 호텔](https://www.dailyhotel.com/) 을 클론코딩 하였습니다.
- 데일리 호텔은 전국 호텔 검색 및 예약정보 조회 와 예약까지 처리 해 주는 웹 사이트 입니다.
- 기간 : 2021-10-25 ~ 2021-11-05 (2주간 작성) / 2021-11-8 ~ 2021-11-12( 1주간 리팩토링)


<프론트엔드>

- [윤창현](https://github.com/YOON-CH) : 호텔 리스트 페이지, 마이데일리(마이페이지) 페이지

## 깃 저장소

- [프론트엔드](https://github.com/wecode-bootcamp-korea/fullstack2-2nd-We-Hotel-frontend)
- [백엔드](https://github.com/wecode-bootcamp-korea/fullstack2-2nd-We-Hotel-backend)

## tools 🛠

```

- View (React with JavaScript, React-Router, Styled-components)
- Build Tool (Create React App)
- Code Quality Tool (Prettier)
- Other Tools (Git, Github, notion, Slack etc.)

```

---

## 주요 기능 및 역할

### 1. 공통 구현 사항

#### - Footer - 윤창현
  - footer 레이아웃 구현

<br>
<br>

### 4. 호텔 리스트 페이지 - 윤창현

- 로그인 전 위시리스트(하트버튼) 클릭 시 로그인 페이지로 이동.
- 로그인 후 위시리스트(하트버튼) 클릭 시 위시리스트에 데이터 전송
- 위치 모달창 클릭에 따른 지역 별 리스트 페이지 구현

<img width="500" alt="호텔 리스트" src="https://images.velog.io/images/goplanit/post/9d9e7749-03d8-4bef-bf6b-744198511211/image.png">

<br>
<br>

### 7. 마이데일리 페이지 - 윤창현

- 로그인 전 & 후

  - 로그인 박스 및 페이지 소개글 구현
  - 개인 정보 및 위시리스트, 최근 본 상품, 리뷰 페이지 연동 기능 구현

- 호텔 예약/구매 내역 페이지 구현
  - 예약/구매 내역이 없을 시 ‘상품 둘러보기’ 버튼 구현
  - 예약/구매 내역이 있을 시 해당 레이아웃 구현

<img width="500" alt="리뷰페이지" src="https://images.velog.io/images/goplanit/post/1f2e3367-f05e-449a-983c-88e761602719/image.png">
<img width="500" alt="이용예정" src="https://images.velog.io/images/goplanit/post/869956cb-ba39-49de-aff0-58cb2822471e/image.png">
<img width="500" alt="이용완료" src="https://images.velog.io/images/goplanit/post/0be8564a-e591-41da-8d13-4c6475996975/image.png">
