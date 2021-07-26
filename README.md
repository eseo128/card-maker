# Eunseo's card maker
 
- React와 Firebase를 이용해서 카드 메이커 만들기<br>

# Tool Stack
<p>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/HTML-E34F26?style=flat&logo=HTML5&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=flat&logo=PostCSS&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=Yarn&logoColor=white"/>&nbsp;&nbsp;
    <img src="https://img.shields.io/badge/Firebase-69e729?style=flat&logo=Firebase&logoColor=white"/>&nbsp;&nbsp;

# How
- 배열이 아닌 오브젝트 형태로 관리 (시간이 오래 걸릴 수도 있으니까 오브젝트를 이용하면 빠르게 가능)
- Hooks를 통해 렌더링 최적화, 동적인 페이지 구현
- firebase, cloudinary를 이용
- Firebase의 Auth를 이용하여 Google, Github으로 간편로그인을 할 수 있음
- firebase.js 파일을 생성하여 SDK를 불러온 뒤 Auth와 Database를 사용하기위해 export함
- Cloudinary를 이용하여 이미지 파일을 업로드합니다
- PostCSS로 CSS 스타일링 모듈화
- Netlify로 배포하기 (깃허브 페이지보다 훨씬 사용범위가 넓었고 yarn을 통해 쉽게 배포할 수 있다)

# Functions

- 반응형 페이지로 만든다<br>
- 첫 화면은 로그인 페이지를 보여주며, Google, Github로 간편로그인을 한다<br>
- AuthService 클래스에 로그인과 로그아웃을 위한 함수를 생성하고 각 요청에 맡는 서비스를 처리한다.<br>
- authService 클래스를 props로 받아 로그인, 로그아웃을 해준다.<br>
- 로그인 시 firebase를 연동해 기존에 있던 데이터를 보여준다.<br>
- form 마다 글 작성 시 실시간으로 카드에도 반영된다.<br>
- CardRepository 클래스에 불러오기, 저장, 삭제 기능을 수행하는 함수를 생성한다. <br>
- user 사진을 등록하게 되면 업로딩하는 애니메이션을 보여준 후 완료되면 파일 이름으로 표기한다.<br>
- user 사진이 있을 시 LightPink색으로 제시되며, no file일 시 LightGrey색으로 제시한다.<br>
- Maker 컴포넌트에서 카드를 생성하는 함수를 카드를 추가하는 Form 컴포넌트에 props로 전달한다.<br>
- 기존에 등록된 카드의 내용 수정이 가능하며, 해당 내용 또한 firebase에 연동된다.<br>
- Maker 컴포넌트에서 각 컴포넌트에서 수정, 생성, 삭제를 수행하는 함수를 호출하여 Database를 수정한다.<br>
- Maker 컴포넌트가 마운트 되면 CardRepository 클래스에 syncCards 함수를 호출하여 해당 카드들을 불러와서 cards State에 저장한다.<br>
- 카드를 delete 버튼으로 삭제할 수 있다.<br>
- logout 버튼으로 로그아웃이 가능하며, 로그아웃 시 로그인 화면으로 돌아간다. <br>
- 배포 사이트 : 

# images
  ![image](https://user-images.githubusercontent.com/34049770/126957899-7da7eb83-2763-4276-880c-360d9d8d2ed7.png)
  ![image](https://user-images.githubusercontent.com/34049770/126957929-2a66297c-9c34-4e2a-8582-4b93f440b0b0.png)
![image](https://user-images.githubusercontent.com/34049770/126957980-8291c2da-6851-4b73-b3a6-d12543203b7c.png)

