/**
 *  등록일자 : 2025.07.22
 *  등록자 : 변재윤
 *  수정내역 : 버전올림  v1.0
 *
 */

import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle } from './ArticleService.js';
import { getProductList, getProduct, createProduct, patchProduct, deleteProduct } from './ProductService.js';

async function main(){

  /**
   *   ###################
   *    스프린트 미션2 시작
   *   ##################
   *  
   * */ 

    // ############### [1] Article API ########################
    
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

    // ############### [2] Product API ########################

    const prdData = {
      name: '변재윤 노트북',
      description: '노트북 모델번호 BJ2456P',
      price: 1500000,
      tags: [],
      images: 'https://example.com/...'
    };

    const prdUpdData = {
      name: '변재윤 노트북(수정)',
      description: '노트북 모델번호 BJ2456P(수정)',
      price: 1500000,
      tags: [],
      images: 'https://example.com/...'
    };

    /** 1. getProductList */
    const prodParams = {
      page: 1,
      pageSize: 5,
      keyWord: ''
    };
    const prodList = await getProductList(prodParams);
    console.log(prodList);

    /** 2. getProductList */
    const prodData = await getProduct(1426);
    console.log(prodData);

    /** 3. createProduct */  
    try{
      const res = await createProduct(prdData);
      console.log(res);
    } catch(e) {
      if(e.response){
        console.log(e.response.data);
      }else{
        console.log('리퀘스트에 실패했습니다!')
      }
    };

    /** 4. patchProduct */  
    try{
      const updRes = await patchProduct(prdUpdData, 1426);
      console.log(updRes);
    } catch(e) {
      if(e.response){
        console.log(e.response.data);
      }else{
        console.log('리퀘스트에 실패했습니다!')
      };
    };

    /** 5. deleteProduct */  
    try{
      const delRes = await deleteProduct(1426);
      console.log(delRes);
    } catch(e) {
      if(e.response){
        console.log(e.response.data);
      }else{
        console.log('리퀘스트에 실패했습니다!')
      };
    };

};

main();





