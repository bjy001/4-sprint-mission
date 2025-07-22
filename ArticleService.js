/**
 *   등록일 : 2025.07.22
 *   등록자 : 변재윤
 *   수정내역 : 버전 올림
 * */
import axios from 'axios';

export async function fetchSampe(){
  const res = await fetch('https://learn.codeit.kr/api/color-surveys');
  const data = await res.json();
  return data;
}

export async function getArticle(){
  const url = new URL('https://panda-market-api-crud.vercel.app/articles');
  const result = await fetch(url);
  const data = await result.json();
  return data;
}

export async function getBadArticle(){
  const url = new URL('https://panda-market-api-crud.vercel.app/articlesrrr'); //url이 틀림 
  const result = await fetch(url);

  if (!result.ok) {  // 이걸로 하면 잡혀요 !!!
    throw new Error('데이터를 불러오는데 실패했습니다.');
  }

  const data = await result.json();
  return data;
}


export async function getArticleList(id){
  const url = new URL(`https://panda-market-api-crud.vercel.app/articles/${id}`);
  const result2 = await fetch(url);

  const data2 = await result2.json();
  return data2;
}

export async function createArticle(){
  const reqBody = {
        title: '변재윤 작성 테스트',
        content: '변재윤 게시글 작성입니다. 곧 삭제예정',
        image: 'https://example.com'
    };
  let resMsg;
  const res = await fetch('https://panda-market-api-crud.vercel.app/articles', {
              method: 'POST',
              body: JSON.stringify(reqBody),
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(response => {
              resMsg = '성공적으로 저장되었습니다.';
            }).catch(error => {
              resMsg = '저장 실패하였습니다. 서버 확인.';
            });
  // const data3 = await res.json();
  return resMsg;
};

export async function deleteArticle(id){
    let resMsg;
    const res = await fetch(`https://panda-market-api-crud.vercel.app/articles/${id}`, {
                method: 'DELETE'
    }).then(response => {
        resMsg = '성공적으로 삭제되었습니다.';
    }).catch(error => {
        resMsg = '삭제 실패하였습니다. 서버확인.';
    })
    return resMsg;
}


export async function getAxiosArticle(){
  const res = await axios.get('https://panda-market-api-crud.vercel.app/articles');
  return res.data;
};

export async function getAxiosArticleList(id){
    let res;
    try{
        res = await axios.get(`https://panda-market-api-crud.vercel.app/articles/${id}`);
    }catch(error){
        console.error('API(getAxiosArticleList) 오류..');
    }
    
    return res.data;
};

export async function createAxiosArticle(articleData){
    const res = await axios.post('https://panda-market-api-crud.vercel.app/articles', articleData);
    return res.data;
};

export async function deleteAxiosArticle(id){
    const res = await axios.delete(`https://panda-market-api-crud.vercel.app/articles/${id}`);
    return res.data;
}
