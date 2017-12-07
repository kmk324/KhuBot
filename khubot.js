// a simple node app for kakao api
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cheerio = require('cheerio');

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/',function(req,res){
  res.send('<img src="/khubotmain.jpg">')
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
  let content = decodeURIComponent(req.body.content); // user's message, string형


  //추가할 목록, khuwifi-guest 비밀번호, 단과대 행정실 위치 및 전화번호., 수업정보.
  if(content == "개발자"){
    let answer = {
      "message":{
        "text":"김민규" // in case 'text'
      }
    }
    res.send(answer);
    return;
  }
  else if(content == "1" || content.indexOf("학식") !== -1 ){
    console.log('학식')
    let answer = {
      "message":{
        "text":"학식 정보 입니다.\n"+
        "학생회관, 공대 학식\n http://community.khu.ac.kr/forum/fldentry_list?cid=0000a\n\n"+
        "우정원 학식 \n http://www.woojungwon.net/Ghostel/mall_main.php\n\n"+
        "제2 기숙사 학식 \n https://dorm2.khu.ac.kr/dorm2/40/4051.kmc"
      }
    }
    res.send(answer);
    return;
  }
  else if(content == "2" || content.indexOf('종합정보시스템') !==-1 || content.indexOf('종정시') !==-1 ){
    console.log('종정시')
    let answer = {
      "message":{
        "text":"경희대학교 종합정보 시스템 정보 입니다.\n https://khuis.khu.ac.kr/"
      }
    }
    res.send(answer);
    return;
  }
  else if(content =='3'|| content.indexOf('교내연락처') !==-1){
    console.log('교내연락처')
    let answer = {
      "message":{
        "text":"경희대학교 교내 연락처 정보 입니다.\n "+
        " "
      }
    }
    res.send(answer);
    return;
  }
  else if(content == '4' || content=='컴퓨터공학과 교수님연구실 및 연락처 정보'){
    console.log('컴퓨터공학과 교수님연구실 및 연락처')
    var url = 'http://ce.khu.ac.kr/index.php?hCode=MEMBERS_LIST&gubun=P';
    request(url, (error,response,body) => {
      const $ = cheerio.load(body);

    let answer = {

    }
  }



  else if(content == '5'||content == "khuwifi-guest 비밀번호"){
    console.log('비밀번호')
    let answer = {
      "message":{
        "text":"khuwifi-guest 비밀번호는 'vision2020' 입니다."
      }
    }
    res.send(answer);
    return;
  }

  else{
    console.log('나머지')
    let answer = {
      "message":{
        "text":"죄송합니다. "+content + "에 대한 정보가 없습니다."
      }
    }
    res.send(answer);
    return;
  }

});

app.listen(9999,function(){
  console.log('Connect 9999 port!')
});
