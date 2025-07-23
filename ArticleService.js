/**
 *   등록일 : 2025.07.22
 *   등록자 : 변재윤
 *   수정내역 : 버전 올림  v1.0
 * */
import axios from 'axios';

// #[Get Request 보내기 예제1]
// 설문객체 목록
// Request 보낼때 쿼리 스트링 추가 가능: mbti limit, offset
export async function getColorSurveyList(){
  //URL객체 사용
  const url = new URL('https://learn.codeit.kr/api/color-surveys'); 
  //URL객체의 searchParams 라는 프로퍼티에 추가
  url.searchParams.append('offset', 0);
  url.searchParams.append('limit', 5);
  url.searchParams.append('mbti', 'ISTJ');

  const res = await fetch(url);
  const data = await res.json();
  return data;
}

// #[Get Request 보내기 예제2]
// 설문객체 1개
export async function getColorSurvey(id){
  const url = new URL(`https://learn.codeit.kr/api/color-surveys/${id}`);

  const res = await fetch(url);
  const data = await res.json();
  return data;
}

// #[Post Request 보내기 예제1]
/**
 *  fetch 함수는 기본적으로 GET Request를 보냄
 *  - POST나 다른 종류의 Request를 보낼때 사용 .. 두번째 아규먼트에 method를 POST 로 설정하면 됨
 *    POST 뿐만 아니라 PATCH, DELETE도 사용
 *  - POST Request는 보통 body를 같이 전달함.
 * 
 *  survey 객체를 만들고 그것을 POST Request의 body로 전달해서 설문결과를 생성
 */
  export async function createColorSurvey(surveyData){
    console.log('====> (API) createColorSurvey..');
    // survey 데이터는 자바스크립트 객체이고 외부로 문자를 주고 받을때는 JSON문자열을 사용한다.
    // 그래서 survey 문자열을 JSON 문자열로 변환해 주어야 한다.
    // const surveyData = {
    //   mbti: 'ISTJ',
    //   colorCode: '#110000',
    //   password: '0000'
    // };
    //Request 롤 아래와 같이 옵션으로 설정한다.
    const res =  await fetch('https://learn.codeit.kr/api/color-surveys', {
                  method: 'POST',
                  //survey 데이터는 자바스크립트 객체이고 외부로 문자를 주고 받을때는 JSON문자열을 사용한다.
                  body: JSON.stringify(surveyData), 
                  //데이터 보낼때 어떤 형식의 데이터를 보낼 것인지 알려주는게 좋다. ==> headers프로퍼티로 헤더 설정
                  //필요하다면 다른 헤더도 아래에 추가
                  headers: {
                    'Content-Type': 'application/json'
                  }
              });

     if (!res.ok) {
        throw new Error('데이터를 생성하는데 실패했습니다.'); //응답Response가 제대로 안올때... 200 이 true
     };

    //Post Request로 데이터를 생성하면 서버가 생성된 데이터를 Response 로 돌려주는 경우가 많은데
    //설문생성 결과가 Response로 돌아오면 json() 메소드로 Response를 파싱해서 출력.          
    const data = await res.json();

    //새로 생성된 설문 객체가 응답된 것을 볼 수 있다
    return data;
 };

// #[Fetch함수 사용시 오류처리]
/**
 *  Fetch 오류는 2가지 형태 .. 1.URL이 이상하거나 헤더정보가 이상해서 Request 자체가 실패하는 경우
 *                               ==> try..catch 문을 이용한다 (이 케이스만 Promise 상태가 REJECT 가 됨)
 *   2. Request는 성공적인데 상태코드가 실패를 나타내는 경우
 *                               ==> 또는 응답 Response 결과를 보고 Error를 리턴한다. (수동적으로 오류를 throw함)
 *  ==> Response가 성공적인 결과가 돌아왔을때만 데이터를 리턴하고 나머지 모든 경우에는 오류를 발생
 * 
 * */
export async function getColorSurveys(params = {}){
  const url = new URL('https://learn.codeit.krrr/api/color-surveys');

  const res = await fetch(url);

/**
  * 400, 500 Response 에러는 Fetch Promise는 fulfilled 상태가 됨
  *   ==> 깔끔하게 처리하는 방법은 Response의 상태가 성공을 나타내지 않으면 오류를 발생시킴
  * 예를 들면 잘못된 mbti 파라미터를 전달하면 상태코드 400이 돌아옴. 상태코드 400이 돌아와도
  * 아무문제 없이 res.json()이 실행됨.  ==> 그대로 응답body가 리턴됨(함수안에서 아예 오류가 발생안함)
  */
  if(!res.ok){ //Response 의 상태코드가 2로 시작하면 true 아니먄 false
    throw new Error('데이터를 불러오는데 실패했습니다.');
  }
  
  const data = await res.json();
  return data;
}

// #[Axios Get Request 예제1]
/**
 *  - Fetch보다 문법이 간단하고 다양한 편의 기능을 제공하기 때문에 실무에서 많이 사용
 *  - 3rd Party 모듈이기 때문에 설치 필요.(터미널)
 *     : npm install axios
 *  
 */
export async function getAxiosColorSurvey(id){
  console.log('====> (API) getAxiosColorSurvey..');
  const url = new URL(`https://learn.codeit.kr/api/color-surveys/${id}`);
  /**
   * Axios로 Get Request를 보내려면 axios.get 메소드를 사용
   * Axios도 Promise를 리턴하기 때문에 await 사용
   */
  const res = await axios.get(url);
  // Axios 에서는 body내용을 파실할 필요 없이 그냥 data 프로퍼티로 가져오면 됨.
  // data변수에 할당 할 필요없이 그대로 리턴
  return res.data;
}

// #[Axios Get Request 예제2]
/**
 *  - 쿼리 파라미터도 좀더 쉽게 처리가능한데 URL객체를 사용할 필요 없이 
 *    params 옵션을 사용하면 됨.
 */
 export async function getAxiosColorSurveys(params = {}){
  console.log('====> (API) getAxiosColorSurveys..');
  /**
   * params 라는 프로퍼티로 params라고 객체를 설정하는것
   *  : 이렇게 쿼리 파라미터를 담고있는 객체를 전달하면 객체에 있는 프로퍼티별로 
   *    알아서 쿼리스트링을 만들고 URL뒤에 붙여서 Request를 보내줌.
   *    만약 프로퍼티값이 null이나 undefined 이면 그 프로퍼티를 무시하고
   *    쿼리스트링을 만들어 줌.
   */
  const res = await axios.get('https://learn.codeit.kr/api/color-surveys', 
      { params }
    );
  return res.data;
 }

 // #[Axios Post Request 예제1]
 /**
  *  - Get Request는 axios.get 을 사용하고 Post Request는 axios.post 를 사용함
  *  - Post 메소드는 body로 전달할 데이터를 두번째 Argument로 받는데 자바스크립트 객체를
  *    그대로 사용할 수 있다. ==> axios 가 알아서 자바스크립트 객체를 JSON 문자열로 변환해 준다.
  *  - 헤더도 body데이터를 보고 알아서 설정하기 때문에 우리가 설정해줄 필요가 없다.
  */
  export async function createAxiosColorSurvey(surveyData) {
    const res = await axios.post('https://learn.codeit.kr/api/color-surveys',
      surveyData  //body 데이터를 2번째 아규먼트로 받는다
    );
    return res.data;
  };

// #[Axios Get Request 예제2]  
/**
 *  - Axios 에서는 인스턴스를 만들수 있는데 Request 마다 공통되는 부분이 있으면 그것을
 *    인스턴스화 해서 설정할 수 있음.
 *  - 예를들어 Request URL은 보통 경로만 다르고 앞부분은 항상 똑같은데
 *    BASE URL으로 앞부분을 설정하고 Request Time out도 설정
 */
  const instance = axios.create({
    baseURL: 'https://learn.codeit.kr/api', //URL은 대문자
    timeout: 3000
  });
  //baseURL을 인스턴스화 해서 아래 부분처럼 사용
 export async function getAxiosInstanceColorSurveys(params = {}){
  console.log('====> (API) getAxiosInstanceColorSurveys..');
  const res = await instance.get('/color-surveys', {
               params
             });
  return res.data;
 }

 // #[Axios Post Request 예제3]  
 /**
  *  - Instance로 Request를 보내고 있기 때문에 모두 baseURL 과 timeout이 설정되어 있다.
  *  - 앞으로 URL이 바뀌거나 해도 한군데서만 변경하면 된다.
  */
  export async function createAxiosInstanceColorSurvey(surveyData){
    const res = await instance.post('/color-surveys', surveyData);
    return res.data;
  }

  /* [Axions 오류 처리 예제1] */
  /**
   * - fetch함수는 Request 자체가 실패했을 때만 Promise가 reject 되고
   *   400, 500 response가 돌아왔을 때는 Promise가 reject 되지 않는다.
   * - axios는 fetch와 다른데 axios는 400, 500 response가 돌아와도
   *   promise가 reject 된다.
   * - request가 성공하고 200번대의 상태코드를 가진 respons가 돌아와야만 
   *   promise가 fulfilled 된다. ==> 오류를 처리하기가 좀더 편하다.
   * - 방법은 axios 함수를 호출할 때 try..catch 로 감싸주면 됨.
   */

//Article 목록
export async function getArticleList(page = 1, pageSize = 5, keyword = ""){
  const url = new URL('https://panda-market-api-crud.vercel.app/articles');
  url.searchParams.append("page", page);
  url.searchParams.append("pageSize", pageSize);
  if(typeof keyword === "string" && keyword.trim()){
    url.searchParams.append("keyword", keyword.trim());
  }
  const res = await fetch(url);
  return res.json();
};

//Article 상세
export async function getArticle(id){
  console.log('====> (API) getArticle..');
  const url = new URL(`https://panda-market-api-crud.vercel.app/articles/${id}`);
  //fetch함수에 url 전달하면 Promise 객체가 반환됨.
  const res = await fetch(url);
  //Promise 객체 반환 후 확인 ( body는 json메소드로 확인)
  console.log('Satus Code: ', res.status);
  console.log('Header: ' + res.headers);
  //body 내용은 프로퍼터 집근은 어렵고 아래와 같이 json() 메소드를 사용한다.
  //body 내용이 일반 문자열이면 text메소드, json문자열이면 json() 메소드를 사용한다.
  //json() 메소드는 Promise 객체의 body를 읽어서 자바객체로 변환해준다. 비동기 함수 이므로 await를 사용함
  //data는 자바스크립트 객체이므로 Destriucturing 문법으로 데이터를 쉽게 가져올 수 있다.
  const data = await res.json();
  return data;
};

//Article 상세 (Axios)
export async function getAxisArticle(id){
  console.log('====> (API) getAxisArticle..');
  const url = new URL(`https://panda-market-api-crud.vercel.app/articles/${id}`);

  return axios.get(url).then((res) => {
    return res.data;
  }).catch((error) => {
    console.log("getArticle 에러(API)");
    console.error(error.message);
  })
};



// export async function createArticle(){
//   const reqBody = {
//         title: '변재윤 작성 테스트',
//         content: '변재윤 게시글 작성입니다. 곧 삭제예정',
//         image: 'https://example.com'
//     };
//   let resMsg;
//   const res = await fetch('https://panda-market-api-crud.vercel.app/articles', {
//               method: 'POST',
//               body: JSON.stringify(reqBody),
//               headers: {
//                 'Content-Type': 'application/json'
//               }
//             }).then(response => {
//               resMsg = '성공적으로 저장되었습니다.';
//             }).catch(error => {
//               resMsg = '저장 실패하였습니다. 서버 확인.';
//             });
//   // const data3 = await res.json();
//   return resMsg;
// };

// export async function deleteArticle(id){
//     let resMsg;
//     const res = await fetch(`https://panda-market-api-crud.vercel.app/articles/${id}`, {
//                 method: 'DELETE'
//     }).then(response => {
//         resMsg = '성공적으로 삭제되었습니다.';
//     }).catch(error => {
//         resMsg = '삭제 실패하였습니다. 서버확인.';
//     })
//     return resMsg;
// }


// export async function getAxiosArticle(){
//   const res = await axios.get('https://panda-market-api-crud.vercel.app/articles');
//   return res.data;
// };

// export async function getAxiosArticleList(id){
//     let res;
//     try{
//         res = await axios.get(`https://panda-market-api-crud.vercel.app/articles/${id}`);
//     }catch(error){
//         console.error('API(getAxiosArticleList) 오류..');
//     }
    
//     return res.data;
// };

// export async function createAxiosArticle(articleData){
//     const res = await axios.post('https://panda-market-api-crud.vercel.app/articles', articleData);
//     return res.data;
// };

// export async function deleteAxiosArticle(id){
//     const res = await axios.delete(`https://panda-market-api-crud.vercel.app/articles/${id}`);
//     return res.data;
// }
