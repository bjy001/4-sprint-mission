/**
 *  등록일자 : 2025.07.22
 *  등록자 : 변재윤
 *  수정내역 : 버전올림  v1.0
 *
 */

// import { fetchSampe, getArticle, getBadArticle, createArticle, getArticleList, deleteArticle, 
//          getAxiosArticle, getAxiosArticleList, createAxiosArticle, deleteAxiosArticle } from './article/ArticleService.js';
// import { getProduct, getProductList, createProduct, deleteProduct, patchProduct,
//          getAxiosProduct, getAxiosProductList, createAxiosProduct, deleteAxiosProduct } from './product/ProductService.js';

import { getColorSurveyList, getColorSurvey, getArticleList, getArticle, getAxisArticle } from './ArticleService.js'

async function main(){
    /* #[Get Request 예제1] */
    // const colorDataList = await getColorSurvey();
    // console.log(colorDataList);
    /* #[Get Request 예제2] */
    const colorData = await getColorSurvey(52);
    console.log(colorData);

    // ############### [1] Article ########################
    // const articleList = await getArticleList();
    // console.log(articleList);

    // const articleData = await getArticle(1905);
    // console.log(articleData);

    // const articleAxisData = await getAxisArticle(1905);
    // console.log(articleAxisData);

};

main();





