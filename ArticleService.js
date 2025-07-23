/**
 *   등록일 : 2025.07.22
 *   등록자 : 변재윤
 *   수정내역 : 버전 올림  v1.0
 * */
import axios from 'axios';

// #[Get Request 예제1]
// 설문객체 목록
// Request 보낼때 쿼리 스트링 추가 가능: mbti limit, offset
export async function getColorSurveyList(){
  //URL객체 사용
  const url = new URL('https://learn.codeit.kr/api/color-surveys'); 
  //URL객체의 searchParams 라는 프로퍼티에 추가
  url.searchParams.append('offset', 1);
  url.searchParams.append('limit', 5);
  url.searchParams.append('mbti', 'ISTJ');

  const res = await fetch(url);
  const data = await res.json();
  return data;
}

// #[Get Request 예제2]
// 설문객체 1개
export async function getColorSurvey(id){
  const url = new URL(`https://learn.codeit.kr/api/color-surveys/${id}`);

  const res = await fetch(url);
  const data = await res.json();
  return data;
}


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
