/**
 *  등록일자 : 2025.07.22
 *  등록자 : 변재윤
 *  수정내역 : 버전올림  v1.0
 *
 */

import { getColorSurveyList, getColorSurvey, createColorSurvey, getColorSurveys, getAxiosColorSurvey, 
         getAxiosColorSurveys,  createAxiosColorSurvey, 
         getArticleList, getArticle, getAxisArticle } from './ArticleService.js'

async function main(){
    /* #[Get Request 예제1] */
    // const colorDataList = await getColorSurveyList();
    // console.log(colorDataList);
    /* #[Get Request 예제2] */
    // const colorData = await getColorSurvey(52);
    // console.log(colorData);

    /* #[Post Request 예제1] */
    const surveyData = {
      mbti: 'ISTJ',
      colorCode: '#110000',
      password: '0000'
    };
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


    // ############### [1] Article ########################
    // const articleList = await getArticleList();
    // console.log(articleList);

    // const articleData = await getArticle(1905);
    // console.log(articleData);

    // const articleAxisData = await getAxisArticle(1905);
    // console.log(articleAxisData);

};

main();





