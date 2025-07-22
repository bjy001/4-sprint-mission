import axios from 'axios';

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

