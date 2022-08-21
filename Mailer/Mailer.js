const { error } = require('console');
const nodeMailer = require('nodemailer'); // nodeMailer는 변수명
const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "b5e54ef6554aed",
      pass: "bb65c7bd06812a"
    }
};


const send = async (option) => {
    nodeMailer.createTransport(email).sendMail(option, (error, info) => {
        if(error) {
            console.log(error); // 에러가 났을떄 정보 출력
        }else {
            console.log(info); // 에러가 나지 않았을때 정보 출력
            return info.response; // 에러가 나지 않았을 떄의 리턴값
        }
    });
};

let email_data = {
    from : "jms3800@gmail.com",
    to : "soomb777@naver.com",
    subject : "테스트 메일 입니다.",
    text : "위대한 첫걸음"
};

send(email_data);

