/**
 *  등록일자 : 2025.07.22
 *  등록자 : 변재윤
 *  수정내역 : 버전올림  v1.0
 *
 */

import { getColorSurveyList, getColorSurvey, createColorSurvey, getColorSurveys, getAxiosColorSurvey, 
         getAxiosColorSurveys,  createAxiosColorSurvey, getAxiosInstanceColorSurveys, createAxiosInstanceColorSurvey,
         getArticleList, getArticle, createArticle, patchArticle, deleteArticle } from './ArticleService.js'

async function main(){
    /* #[Get Request 예제1] */
    // const colorDataList = await getColorSurveyList();
    // console.log(colorDataList);
    /* #[Get Request 예제2] */
    // const colorData = await getColorSurvey(52);
    // console.log(colorData);

    /* #[Post Request 예제1] */
    // const surveyData = {
    //   mbti: 'ISTJ',
    //   colorCode: '#110000',
    //   password: '0000'
    // };
    // const resData = await createColorSurvey(surveyData);
    // console.log(resData);

    /* #[Fetch함수 사용시 오류처리] */
    // try {
    //  const resErrData = await getColorSurveys();
    //  console.log(resErrData);
    // } catch (e) {
    //   console.log('오류가 발생했습니다.');
    //   console.log(e.message); //Promise 객체가 rejected 상태
    // }

    /* #[Axios Get Request 예제1] */
    // const axiosData = await getAxiosColorSurvey(52);
    // console.log(axiosData);
    /* #[Axios Get Request 예제2] */
    // const axiosList = await getAxiosColorSurveys();
    // console.log(axiosList);
    /* #[Axios Post Request 예제1] */
    // const rstAxiosData = await createAxiosColorSurvey(surveyData);
    // console.log(rstAxiosData);
    /* #[Axios Get Request 예제2]  */
    // const axiosInstanceList = await getAxiosInstanceColorSurveys();
    // console.log(axiosInstanceList);
    /* #[Axios Post Request 예제3]  */
    // const rstAxiosInstanceData = await createAxiosInstanceColorSurvey(surveyData);
    // console.log(rstAxiosInstanceData);

  /* [Axions 오류 처리 예제1] */
  /**
   * - fetch함수는 Request 자체가 실패했을 때만 Promise가 reject 되고
   *   400, 500 response가 돌아왔을 때는 Promise가 reject 되지 않는다.
   * - axios는 fetch와 다른데 axios는 400, 500 response가 돌아와도
   *   promise가 reject 된다.
   * - request가 성공하고 200번대의 상태코드를 가진 respons가 돌아와야만 
   *   promise가 fulfilled 된다. ==> 오류를 처리하기가 좀더 편하다.
   * - 방법은 axios 함수를 호출할 때 try..catch 로 감싸주면 됨.
   * - error response 가 돌아오면 axios는 에러메시지를 에러객체에 저장해 줌
   */
  //  try{
  //     const survey = await getAxiosColorSurvey(123);
  //     console.log(survey)
  //  } catch(e) {
  //    console.log('오류가 발생했습니다.');
  //    console.log(e.message);
     // error response 가 돌아오면 axios는 에러메시지를 에러객체에 저장해 줌
     // ==> response 프로퍼티로 접근
    //  console.log(e.response);
     /* ==> status 와 data 프로퍼티를 출력 */
    //  console.log(e.response.status);
    //  console.log(e.response.data);
  //  }
/* [Axions 오류 처리 예제2] */
/**
 * 주의할 점 : response 가 돌아왔을 때만 response객체가 존재한다.
 *           status, data 프로퍼티를 접근할 거라면 response객체의 존재유무를 먼저
 *           확인하는 것이 좋다.
 */
/**
 * color 코드 겂이 데이터 전송
 */
  // const surveyErrData = {
  //   mbti: 'ISTJ',
  //   // colorCode: '#110000',
  //   password: '0000'
  // };

  // try{
  //   const survey2 = await createAxiosColorSurvey(surveyErrData);
  //   console.log(survey2);
  // } catch(e) {
  //    //response 객체 존재유무 확인
  //    if (e.response) { 
  //     console.log('오류가 발생했습니다.');
  //     console.log(e.response.status);
  //     console.log(e.response.data);
  //    } else {
  //     console.log('리퀘스트가 실패했습니다.') //이상한 주소로 변경하면 에러 나옴
  //    }
  // }

  /**
   *   ###################
   *    스프린트 미션2 시작
   *   ##################
   *  
   * */ 

    // ############### [1] Article ########################
    const requestData = {
      title: 'codeit 테스트북',  //id: 1937
      content: '테스트 내용 codeit 시작..끝',
      image: 'https://example.com/..'
    };

    const modifyData = {
      title: 'codeit 테스트북(수정)', //id: 1937
      content: '테스트 내용 codeit 시작..끝(수정)',
      image: 'https://example.com/..(수정)'
    };

    /** 1. getArticleList */
    const articleList = await getArticleList();
    console.log(articleList);

    /** 2. getArticle */
    const articleData = await getArticle(1905);
    console.log(articleData);
    
    /** 3. createArticle */
    try{
      const resData = await createArticle(requestData);
      console.log(resData);
    } catch(e){
      if (e.response){
        console.log(e.response.data);
      } else {
        console.log('리퀘스트가 실패했습니다!');
      }
    }

    /** 4. patchArticle */
    try{
      const updData = await patchArticle(modifyData, 1937);
      console.log(updData);
    } catch(e) {
      if(e.response){
        console.log(e.response.data);
      } else {
        console.log('리퀘스트가 실패했습니다.');
      }
    };

    /** 5. deleteArticle */
    try{
      const delData = await deleteArticle(1937);
      console.log(delData);
    } catch(e) {
      if(e.response){
        console.log(e.response.data);
      } else {
        console.log('리퀘스트가 실패했습니다.');
      }
    };


};

main();





