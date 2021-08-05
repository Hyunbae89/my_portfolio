이 프로젝트는 개인 포토폴리오용으로 만들어졌습니다. <br/>
React를 사용하여 Front-end 웹사이트를 개발, Node.js(express.js)를 사용하여 Back-end 서버를 구현하고, <br/>
MySQL을 데이터베이스로 사용 및 Axois를 사용하여 RESTfull API 통신 설계하였습니다. <br/>
그래서 최종적으로 Client의 요청을 Server에서 처리하도록 구현하였습니다. <br/>
웹사이트 둘러보기 : [ [James Works](https://jamesworks.netlify.app/) ]


# Table of Contents

 * [개발 스펙](#chapter-1)
 * [Server part](#chapter-2)
 * [Client part](client/README.md)
 * [Server repository](https://github.com/Hyunbae89/my_portfolio_server#readme)
 * [Client repository](https://github.com/Hyunbae89/my_portfolio_client#readme)



## 개발 스펙 <a id="chapter-1"/>
- Front-end  
  - React.js, Javascript

- Back-end
  - Node.js , Express.js , Axios

- Layout / UI
  - Bootstrap(v4.6.x) , animate.css , CSS3

- Database
  - AWS RDS , MySQL

- IDE
  - Pycharm

- Tools
  - Github , Sourcetree , HeidiSQL
  
- Deploy
  - Netlify, Heroku
<br/>
    
>Bootstrap과 CSS를 활용하여 Page Layout, UI를 구성. <br/>
> AWS RDS(Amazon Web service Relational Databases)를 통해 host 생성 후 데이터베이스 연결 <br/> (개발환경에선 JSON 형태로 저장후 사용, 배포 환경에서는 env 형태로 변경  * 보안이슈)<br/>
> HeidiSQL 프로그램을 사용하여 데이터베이스 테이블 구성, 값 확인  
> Netlify를 통한 Client side 배포, Heroku를 통한 Server side 배포



## Server part <a id="chapter-2"/>
  * 디렉토리 구성
    ```
    my_portfolio/
      node_modules/
      client/
      routes/
        config.js
      README.md
      package.json  
      database.json
    ```
> node_modules와 database.json은 gitignore 설정하였으므로,<br>
> github에서 확인 안되는 점 참고하시기 바랍니다.

<br/>

```json
{
  "name": "webportfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "client": "cd client && yarn start",
    "server": "nodemon server.js",
    "dev": "concurrently --kill-others-on-fail \"yarn server\" \"yarn client\""
  },
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "mysql": "^2.18.1",
    "nodemon": "^2.0.7"
  },
  "devDependencies": {
    "concurrently": "^6.1.0"
  }
}
```
> local 환경에서 개발시, server와 함께 동작해야 하기때문에 해당 스크립트 작성 후 개발 진행. <br/>
> server.js 코드를 변경하면 자동으로 서버를 재시작하는 nodemon 사용. <br/>
> client : localhost:3000  ,  server : localhost:5000 <br/>

서버 개발환경 구축할때 참고한 강의 : [Node.js Express 서버 개발환경 구축하기](https://youtu.be/YO9CqrnxbFU)
