[다시 이전으로 가기](../README.md)
<br/>

## Client part

## Client Table of Contents

* [기획의도](#client-roadmap)
    * [About Me](#about-me)
    * [URL Picker](#url-picker)
    * [Quote](#quote)
    * [유저 편의](#user-benefit)
* [기능구현](#client-function)
    * [회원가입 / 로그인]()
    * [URL 직접 접근 막기]()
    * [Single Page Application ( feat. React-Router )]()
    * [Dark Mode]()
    * [SideBar]()
    * [Responsive Web]()
    * [GUEST]()
    * [Rating]()
* [후기](#client-epilogue)


## 기획의도 <a id="client-roadmap"/>
해당 프로젝트는 저 개인의 실력을 활용하여 많은 사람들이 볼 수 있는 사이트를 제작하는 것에 의의를 두고 있습니다.
정식으로 관리되는 포털사이트가 아니기 때문에 Admin의 역활은 배제한체 진행하였고, User와 Guest 오직 두가지로 나눠진 Role에 따라 사이트를 이용할 수 있도록 제작하였습니다.
간단한 회원가입을 진행하면 사이트에 접속이 가능해지며, 제 이력과 자기소개가 있는 페이지에서 Github 방문, 카카오톡 오픈채팅, 이력서 PDF 파일을 볼 수 있습니다.
웹사이트 이용 컨텐츠로는 각 유저 개인만 이용할 수 있는 URL Picker와 모두에게 공유되는 Quote가 있습니다. <br/>

   - ### About Me <a id="about-me"/>
  본 사이트에서 가장 핵심적이고 중요한 역활을 담당하고 있습니다. 바로 포트폴리오로써 가치를 가질 수 있도록 저 개인의 정보 전달 및 상호작용 스위칭 역활입니다. 개발자로써 제 이력과 자기소개, 자격증 현황등의 정보 전달과 제 repository를 찾아 볼 수있도록 깃허브 링크가 연결 되어있으며 , 카카오톡 오픈채팅 연결을 통해 전화/ 이메일보다 쉽고 빠른 연락을 주고 받을 수 있도록 조치를 취하고 있습니다.
  문서상의 이력서 또한 열람 가능하도록 링크되어있습니다.
  
  - ### URL Picker (개인용) <a id="url-picker"/>
  기본적으로 기능은 웹 브라우저의 즐겨찾기의 기능과 같습니다. 각자 자신이 원하는 웹사이트 주소와 타이틀 제목을 입력하여 쉽게 방문하기 위한 도구로써 만들어졌습니다.
  다만 여기서 추가적으로 QR code 생성 기능을 만들어서 데스크탑에서 모바일로, 혹은 모바일에서 모바일로, 웹캠이 있다면 모바일에서 데스크탑으로 주소 공유및 접속을 보다 쉽게 할 수있도록 개선하였습니다.
  그러므로 방문했던 유용한 사이트를 모바일이나 데스크탑에서 좀 더 쉽게 찾아 들어갈 수 있는 장점이 있습니다.
  
  - ### Quote (공용) <a id="quote"/>
  자유 게시판의 기능을 모티브로 하고 있으며, 각자 좋아하는 명언이나 인용구를 작성하고 볼 수 있도록 제작하였습니다. 기능적으로는 완성되었으나 디자인적으로 아직 개선점이나 변경점이 존재하며, 차후 댓글(comments)과 좋아요(Like) 기능을 추가
  예정입니다. 디테일 페이지에서는 해당 게시물을 작성한 유저만이 편집 및 삭제가 가능하도록 구현되었으며, 검색 기능을 넣어 원하는 게시물을 쉽게 찾을 수 있도록 개선하였습니다.
  
  - ### User 편의적 기능 <a id="user-benefit"/>
  유저 정보 페이지에서 이용가능하며, 현재 '비밀번호 변경'과 '사이트 평가'만 이용 가능합니다. 
  기능 구현 항목에서 자세히 설명하겠지만, 비밀번호는 bcrypt 함수를 사용하여 암호화되어 데이터베이스에 적용되기 때문에 해독이 사실상 불가능합니다.
  해당 사이트가 포트폴리오 사이트지만 최소한의 보안은 고려하여 만들어졌습니다.
  사이트 평가는 포트폴리오 사이트를 이용한 유저 한정으로 개발자인 저에게 던져주는 피드백 영역입니다. 5점 만점인 별점 등록과 코멘트 작성하여 제출하면 마무리되며, 유저마다 1회 한정으로 작성 가능하도록 설정하였습니다. 


## 기능구현 <a id="client-function"/>
  - 회원가입 / 로그인
  - URL 직접 접근 막기
  - Single Page Application (feat. React-Router)
  - Dark Mode
  - SideBar
  - Responsive Web
  - Guest
  - Rating

## 후기 <a id="client-epilogue"/>
다년간 미국 서부 실리콘밸리에서 Front-end 개발자로 일을 하였지만, 이번 프로젝트를 혼자서 개발하면서 느낀점은 Junior 개발자로써 아직 부족한 부분이 많다는 것을 자각하는 것이였습니다. 
하지만 그렇기때문에 모자란 부분을 배우고, 응용해 볼 수 있었고 조금씩 성장하는 계기 또한 존재한다고 생각합니다. 한가지 성공에 안주하며 멈춰있기보단 알고리즘 공부와 새로운 기술들을 공부하여 다각화된 시야로 
앞으로도 개발에 임할 수 있도록 바라고, 효율적인 시간 관리, 적용한 코드를 문서화하며 기록하고 재응용 가능하도록 항상 노력하겠습니다.
