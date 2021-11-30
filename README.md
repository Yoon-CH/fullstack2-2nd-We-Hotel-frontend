# 🤹‍ WEHOTEL

---

## 목차

1. [프로젝트 소개](##프로젝트-소개)<br/>
2. [팀원소개](##-팀원소개)<br/>
3. [깃 저장소](##-깃-저장소)<br/>
4. [Tools](##-tools-🛠)<br/>
5. [주요기능 및 역할](##-주요-기능-및-역할)<br/>

---

## 프로젝트 소개

- [데일리 호텔](https://www.dailyhotel.com/) 을 클론코딩 하였습니다.
- 데일리 호텔은 전국 호텔 검색 및 예약정보 조회 와 예약까지 처리 해 주는 웹 사이트 입니다.
- 기간 : 2021-10-25 ~ 2021-11-05 (2주간 작성) / 2021-11-8 ~ 2021-11-12( 1주간 리팩토링)

## 팀원소개

<프론트엔드>

- [고원구](https://github.com/goplanit) : Main페이지, 리뷰 페이지
- [안다빈](https://github.com/dabin219) : 회원가입&로그인 페이지, 검색페이지, 예약상세 페이지
- [박정훈](https://github.com/pakjonghun) : 상세페이지, 달력 기능
- [윤창현](https://github.com/YOON-CH) : 호텔 리스트 페이지, 마이데일리(마이페이지) 페이지

<백엔드>

- 신기철
- 신정호

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

- Header - 안다빈

  - 로그인 및 마이데일리 페이지로 이동하는 아이콘 기능 구현
  - 검색 페이지로 이동하는 링크 구현

- 슬라이더 - 고원구

  - React Slick을 이용한 프로모션 슬라이더 컴포넌트 구현

- 지도 - 고원구

  - 네이버 맵 API를 연동하여 지도 구현
    - 호텔 주소를 통해 좌표를 계산하여 지도내 위치 마커 구현
    - 예약페이지 내 호텔 위치 배너 구현
    - 상세페이지 내 호텔 위치 모달창 구현

- 모달 - 박정훈

  - context api를 이용한 모달 구현

- 로딩 Icon - 박정훈

  - 페이지 로딩 시 Icon 구현

- Tab Navigation - 박정훈
  - 홈, 예약/구매내역, 마이데일리로 이동하는 네비게이션 구현


#### - Footer - 윤창현
  - footer 레이아웃 구현

<br>
<br>

#### 2. 메인페이지 - 고원구

- react-slick 라이브러리를 이용하여 메인 슬라이드 컴포넌트 구현
- 서울, 부산, 제주, 강원 지역별 추천 호텔 컴포넌트 구현
- 지역별 카테고리 리스트 컴포넌트 구현

  <img width="500" alt="메인페이지 슬라이드, 카테고리 리스트" src="https://images.velog.io/images/goplanit/post/43d55220-f466-4515-b84d-2acc522601e4/image.png">
  <img width="500" alt="지역별 추천 호텔 컴포넌트" src="https://images.velog.io/images/goplanit/post/c9184499-e783-4ef3-a4e6-58efba10e3ea/image.png">

<br>
<br>

#### 3. 회원가입 & 로그인 페이지 - 안다빈

- 정규표현식을 활용하여 입력한 이름/생년월일/휴대폰번호의 타당성 검사 기능 구현
- 카카오 소셜 로그인 API 연동
- 처음 로그인시 회원가입 페이지로 이동하는 기능 구현
- 로그인 페이지에서 로그인 성공 시, 메인 페이지로 이동하는 기능 구현
- 로그인 페이지에서 로그인 성공 시, Header의 ‘로그인’ 링크가 개인정보로 변경되는 기능 구현
- 로그인 페이지에서 로그인 실패 시, 경고창 Popup으로 로그인 실패 사실에 대한 알림 기능 구현

  <img width="500" alt="카카오 로그인" src="https://images.velog.io/images/goplanit/post/fb87b4dd-745b-4df6-a63f-87ff41cc6f74/image.png">
  <img width="500" alt="회원가입" src="https://images.velog.io/images/goplanit/post/3e90a24d-0b90-4753-bb69-c46bdcf58c5b/image.png">

<br>
<br>

### 4. 호텔 리스트 페이지 - 윤창현

- 로그인 전 위시리스트(하트버튼) 클릭 시 로그인 페이지로 이동.
- 로그인 후 위시리스트(하트버튼) 클릭 시 위시리스트에 데이터 전송
- 위치 모달창 클릭에 따른 지역 별 리스트 페이지 구현

<img width="500" alt="호텔 리스트" src="https://images.velog.io/images/goplanit/post/9d9e7749-03d8-4bef-bf6b-744198511211/image.png">

<br>
<br>

#### 5. 호텔 상세 페이지 - 박정훈 & 고원구

- 달력 라이브러리 검색 및 적용 - 박정훈
- Context API를 적용한 모달 및 달력 구현 - 박정훈

<img width="500" alt="객실 예약 리스트" src="https://images.velog.io/images/goplanit/post/52d494fd-6379-47ce-9609-5d24ffbd620f/image.png">
<img width="500" alt="달력 기능" src="https://images.velog.io/images/goplanit/post/d1c4a6d4-3cdf-41b0-8d36-bc5fdfba038c/image.png">

<br>

- 주소 복사 기능 구현 - 고원구
- 호텔 위치를 나타내는 배너 구현 - 고원구
  - 호텔 주소를 복사할 수 있는 복사하기 버튼 기능 구현
  - 지도 아이콘 클릭 시 모달 창을 통해 지도를 나타내는 기능 구현
  - 호텔 주소를 좌표로 변환하여 호텔 위치에 마커 구현
- 대표리뷰 배너 구현 - 고원구
  - React Slider 라이브러리를 이용하여 슬라이더 기능 구현
  - 리뷰 더보기를 누를 시 모든 리뷰를 볼 수 있는 리뷰 페이지로 이동

<img width="500" alt="지도 컴포넌트" src="https://images.velog.io/images/goplanit/post/79e0a240-078d-4909-8bb9-728497e07397/image.png">
<img width="500" alt="지도 모달" src="https://images.velog.io/images/goplanit/post/63c22c6a-bd9c-4396-bd6b-01f5a0c514ac/image.png">
<img width="500" alt="트루리뷰" src="https://images.velog.io/images/goplanit/post/96d3b797-5999-479c-ba50-9500b267c067/image.png">

<br>
<br>

#### 6. 리뷰 페이지 - 고원구

- 호텔 리뷰 페이지 구현
  - 리뷰 만족도, 평점 기능 구현
  - 방문객 사진 리스트 페이지 구현
  - 객실 카테고리별 리뷰 모아보기 구현

<img width="500" alt="리뷰페이지" src="https://images.velog.io/images/goplanit/post/1ec425d0-3c89-4f4c-b55b-ff7386d7cb6c/image.png">

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

<br>
<br>

### 8. 검색 & 예약 상세페이지 - 안다빈

- 로그인 및 마이데일리 페이지로 이동하는 아이콘 기능 구현
- 검색어 입력창 구현
  - 달력 모달 창으로 연결되어 기간을 선택할 수 있는 기능 구현
  - 검색 버튼 클릭시 검색어와 기간을 쿼리스트링을 통해 API로 전달하는 기능 구현
  - 검색어와 기간을 로컬스토리지에 저장하여 해당 검색 리스트 페이지로 이동할 수 있는 기능 구현

<img width="500" alt="로그인 모달창" src="https://images.velog.io/images/goplanit/post/fea3feea-9dc5-44d4-be74-1bd1b9175853/image.png">

<img width="500" alt="검색어 입력창" src="https://images.velog.io/images/goplanit/post/f4a33689-6058-45d9-a18e-987792d80f14/image.png">
