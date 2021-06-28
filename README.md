# React, Node.js, MySQL을 활용한 Web Site Portfolio.

* My Portfolio Web Site -> </> [웹 호스팅 준비중...]


## Table of Contents

* [개발 스펙](#chapter-1)
* [Server part](#chapter-2)
* [Client part](client/README.md)


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
<br/>

```
React를 통해서 Front-end 전반적인 개발을 진행하였고,    
Bootstrap과 CSS를 활용하여 Page Layout, UI를 구성하였습니다.  
Node.js 를 통해 MySQL database에 접근하여 필요한 Server side 프로그래밍도 진행하였습니다.
```


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
client 폴더내 Front-side와 API 통신을 주고받으며 상호 작동해야하기 때문에  
한번에 server와 client를 작동하도록 스크립트를 작성하였습니다.
Dev 환경에서 server port :5000, client port :3000
