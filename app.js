const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// express 구동, 포트 설정, 함수
app.listen(3000, function() {
  console.log('start node.js');
})

//public 폴더 안의 js파일을 모두 허용
app.use(express.static('public'))
// request body의 정보들을 json(객체) 형식으로 사용???
app.use(bodyParser.json());
// 모르겠다..
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/main.html`);
})

app.post('/ajax_send', (req, res) => {
  // String 형식으로 받는 request body의 내용을 서버에 출력
  console.log(req.body.data);
  // 요청 정보를 객체 형식으로 다시 응답해줌
  var responseData = {'result': 'ok', 'data': req.body.data};
  res.json(responseData);
})
