// a simple node app for kakao api
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/',function(req,res){
  res.send('Server Open')
});
app.get('/keyboard',function(req,res){ // setting keyboard for first open
  let keyboard = {
    "type" : "text"
  };
  res.send(keyboard);
});

app.post('/message', function(req,res){
  let user_key = decodeURIComponent(req.body.user_key); // user's key
  let type = decodeURIComponent(req.body.type); // message type
  let content = decodeURIComponent(req.body.content); // user's message
  console.log(user_key);
  console.log(type);
  console.log(content);
  //case 문
  //추가할 목록, khuwifi-guest 비밀번호, 단과대 행정실 위치 및 전화번호., 수업정보.
  if(content == "개발자"){
    let answer = {
      "message":{
        "text":"김민규" // in case 'text'
      }
    }
    res.send(answer);
  }
  if(content == "학식" || content == '1'){
    let answer = {
      "message":{
        "text":"학생회관, 공대 학식\n http://community.khu.ac.kr/forum/fldentry_list?cid=0000a\n\n"+
        "우정원 학식 \n http://www.woojungwon.net/Ghostel/mall_main.php\n\n"+
        "제2 기숙사 학식 \n https://dorm2.khu.ac.kr/dorm2/40/4051.kmc"
      }
    }
    res.send(answer);
  }
  else{
    let answer = {
      "message":{
        "text":"your message is arrieved server : "+content // in case 'text'
      }
    }
    res.send(answer);
  }

});

app.listen(9999,function(){
  console.log('Connect 9999 port!')
});
