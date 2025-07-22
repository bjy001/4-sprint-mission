/**
 *  등록일자 : 2025.07.22
 *  등록자 : 변재윤
 *  수정내역 : 버전올림  v1.0
 *
 */

import { fetchSampe, getArticle, getBadArticle, createArticle, getArticleList, deleteArticle, 
         getAxiosArticle, getAxiosArticleList, createAxiosArticle, deleteAxiosArticle } from './article/ArticleService.js';
import { getProduct, getProductList, createProduct, deleteProduct, patchProduct,
         getAxiosProduct, getAxiosProductList, createAxiosProduct, deleteAxiosProduct } from './product/ProductService.js';

async function articleMain(){
    
    // ############### [1] Fetch ########################
    // const sampleData = await fetchSampe();
    // console.log(sampleData);

    const data = await getArticle();
    console.log(data);

    // const saveResult = await createArticle();
    // console.log(saveResult);

    // const queryResult = await getArticleList(1679);
    // console.log(queryResult);

    // const deleteResult = await deleteArticle(1681);
    // console.log(deleteResult);

    // try {
    //     const badData = await getBadArticle();
    //     console.log(badData);
    // } catch (e){
    //     console.log('조회 오류가 발생했습니다:');
    //     console.log(e.message);
    // }

    // article 클래스에 new 프로퍼티 추가 ( deletedAt )
    // const saveResult = await createArticle();
    // console.log(saveResult);

    // ############### [2] Axios ########################
    // const data = await getAxiosArticle();
    // console.log(data);

    // try{
    //     const data2 = await getAxiosArticleList('1673');
    //     console.log(data2);
    // } catch(e) {
    //     console.log('조회 중 오류가 발행했습니다');
    //     // console.log(e);
    // }
    
    // try{
    //     let articleData = {
    //         title: '변재윤 작성 테스트',
    //         content: '변재윤 게시글 작성입니다. 곧 삭제예정',
    //         image: 'https://example.com'
    //     };
    //     const data3 = await createAxiosArticle(articleData);
    //     console.log(data3);
    // }catch(e){
    //     console.log('저장중 오류가 발생했습니다');
    //     console.log(e);
    // }

    // try{
    //     const data4 = await deleteAxiosArticle(1673).then(getAxiosArticle);
    //     console.log(data4);
    // }catch(e){
    //     console.log('삭제중 오류가 발행했습니다');
    //     console.log(e);
    // }

};


async function productMain(){
        let requestBody = {
            name: '변재윤 테스트제품 (수정)',
            description: '곧 삭제예정 제품 (수정)',
            price: 35000,
            tags: ['#삼성(수정)', '#TV', '#삭제제품'],
            images: 'https://www.samsung.com(수정)'
        };
    // ############### [1] Fetch ########################
    //############### 1. #################
    // const res = await getProductList();
    // console.log(res);

    //############### 2. #################
    // const res = await getProduct(1225);
    // console.log(res);
    
    //############### 3. #################
    // try{
    //     const res = await createProduct(requestBody);
    //     console.log(res);
    // }catch(e){
    //     console.log('저장중 오류가 발행했습니다.');
    //     console.log(e);
    // }

    //############### 4. #################
    // try{
    //     const res = await deleteProduct(1233);
    //     console.log(res);
    // }catch(e){
    //     console.log('삭제중 오류가 발생했습니다.');
    //     console.log(e);
    // }

    //############### 5. #################
    // try{
    //     const res = await patchProduct(1233, requestBody);
    //     console.log(res);
    // }catch(e){
    //     console.log('수정중 오류가 발생했습니다.');
    //     console.log(e);
    // }

    //############### 6. #################
    /**
     * getProductList()를 통해서 받아온 상품 리스트를 각각 인스턴스로 만들어 products 배열에 저장해 주세요.
     * - 해시태그에 “**전자제품**”이 포함되어 있는 상품들은 `Product` 클래스 대신 `ElectronicProduct` 클래스를 사용해 
     *   인스턴스를 생성해 주세요.
       - 나머지 상품들은 모두 `Product` 클래스를 사용해 인스턴스를 생성해 주세요.
     */
    // const res = await getProductList();
    // console.log(res);


const productList =
{
  list: [
    {
      id: 1243,
      name: '상품 이름',
      description: 'string',
      price: 0,
      tags: [Array],
      images: [Array],
      createdAt: '2025-07-15T07:08:57.163Z',
      updatedAt: '2025-07-15T07:08:57.163Z'
    },
    {
      id: 1242,
      name: 'iphone18',
      description: 'apple',
      price: 10000,
      tags: [Array],
      images: [],
      createdAt: '2025-07-15T06:45:37.480Z',
      updatedAt: '2025-07-15T07:10:06.069Z'
    },
    {
      id: 1239,
      name: 'S30',
      description: '삼성',
      price: 10000,
      tags: [Array],
      images: [],
      createdAt: '2025-07-15T06:41:19.716Z',
      updatedAt: '2025-07-15T06:41:19.716Z'
    },
    {
      id: 1238,
      name: 'S30',
      description: '삼성',
      price: 10000,
      tags: [Array],
      images: [],
      createdAt: '2025-07-15T06:40:13.421Z',
      updatedAt: '2025-07-15T06:40:13.421Z'
    },
    {
      id: 1235,
      name: 'S25',
      description: '삼성',
      price: 10000,
      tags: [Array],
      images: [Array],
      createdAt: '2025-07-15T06:06:06.428Z',
      updatedAt: '2025-07-15T06:06:06.428Z'
    },
    {
      id: 1228,
      name: '아이팟',
      description: 'mp3 플레이어',
      price: 35000,
      tags: [Array],
      images: [Array],
      createdAt: '2025-07-14T09:45:57.274Z',
      updatedAt: '2025-07-14T09:45:57.274Z'
    },
    {
      id: 1227,
      name: '아이팟',
      description: 'mp3 플레이어',
      price: 35000,
      tags: [Array],
      images: [Array],
      createdAt: '2025-07-14T09:43:24.982Z',
      updatedAt: '2025-07-14T09:43:24.982Z'
    },
    {
      id: 1226,
      name: '에어컨',
      description: 'string',
      price: 0,
      tags: [Array],
      images: [Array],
      createdAt: '2025-07-14T09:18:13.536Z',
      updatedAt: '2025-07-14T09:18:13.536Z'
    },
    {
      id: 1225,
      name: '전자제품',
      description: '맥북 에어 2029',
      price: 3000000,
      tags: [Array],
      images: [Array],
      createdAt: '2025-07-14T09:11:35.513Z',
      updatedAt: '2025-07-14T09:11:35.513Z'
    },
    {
      id: 1224,
      name: '에어프라이어',
      description: '에어프라이어 없이 못살아',
      price: 100000,
      tags: [Array],
      images: [Array],
      createdAt: '2025-07-14T09:09:41.110Z',
      updatedAt: '2025-07-14T09:09:41.110Z'
    }
  ],
  totalCount: 810
};

// console.log(Object.keys(productList));
/**
 * JavaScript 프로그래밍 시작하기 (7)  객체 구조 분해 쪽 예시에 있습니다~
 * 객체 내부의 키를 꺼내와서 새로운 변수로 할당
 */
const {  list: productItems } = productList;
// console.log('list: ', productItems );

// const products = {};
productItems.forEach((prod) => {
    // const { id, name, description, price, tags, images, createdAt, updatedAt } = prod;
    console.log('prod: ' + JSON.stringify(prod));
    // console.log('tags: ' + JSON.stringify(tags));

});


// Object.keys(productItems).forEach(function(key) {
//     console.log('key: ' +  productItems[key] );
// });

// for(value in productList){
//     console.log(productList[value]);
// }

// productList.array.forEach(element => {
//     if( element.type === "tags" ){
//         console.log(element.name);
//     }
// });

    // const res = await getProduct(1224);
    // const products = [];
    // products[0] = res.id;
    // products[1] = res.name;
    // products[2] = res.description;
    // products[3] = res.price;
    // products[4] = res.tags;
    // products[5] = res.images;

    // console.log('array: ', products);

    // const tags = products[4];
    // if( tags.indexOf('전자제품') == 1 ){
    //     let product = new Product(
    //         res.id, res.name, res.description, res.price, res.tags, res.images
    //     );
    //     console.log('Product: ', product);
    // } else {
    //     let electronicProduct = new ElectronicProduct(
    //         res.id, res.name, res.description, res.price, res.tags, res.images
    //     );
    //     console.log('ElectronicProduct: ', electronicProduct);
    // }

    
    // console.log('class[Product]: ' + product.id);


    // ############### [2] Axios ########################
    // const res = await getAxiosProductList();
    // console.log(res);
    
    // try{
    //     const res = await getAxiosProduct(1225);
    //     console.log(res);
    // } catch(e) {
    //     console.log('상품을 찾을 수 없습니다.');
    // }

    // try{
    //     const res = await createAxiosProduct(requestBody);
    //     console.log(res);
    // }catch(e){
    //     console.log('저장중 오류가 발생했습니다.')
    //     console.log(e);
    // }    

    // try{
    //     const res = await deleteAxiosProduct(1241);
    //     console.log(res);
    // }catch(e){
    //     console.log('삭제중 오류가 발생했습니다.');
    //     console.log(e);
    // }

}

class Product {
    constructor(id, name, description, price, tags, images) {
        this.id = id;
        this.name = name;
        this.description;
        this.price = price;
        this.tags = tags;
        this.images = images;
    }
}

class ElectronicProduct {
    constructor(id, name, description, price, tags, images) {
        this.id = id;
        this.name = name;
        this.description;
        this.price = price;
        this.tags = tags;
        this.images = images;
    }
}

// articleMain();
productMain();




