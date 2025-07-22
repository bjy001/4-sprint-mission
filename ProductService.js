/**
 *  등록일 : 2025.07.22
 *  등록자 : 변재윤
 *  수정내역 : 버전올림
 *
 */
import axios from 'axios';

export async function getProductList() {
    const res = await fetch('https://panda-market-api-crud.vercel.app/products');
    const data = res.json();
    return data;
}

export async function getProduct(id) {
    const res = await fetch(`https://panda-market-api-crud.vercel.app/products/${id}`);
    const data = res.json();
    return data;
}

export async function createProduct(reqBody){
    let resMsg;
    const res = await fetch('https://panda-market-api-crud.vercel.app/products', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        resMsg = '성공적으로 저장되었습니다.'
    }).catch(error => {
        resMsg = '저장에 실패하였습니다.'
    });
    return resMsg;
}

export async function deleteProduct(id){
    let resMsg;
    const res = await fetch(`https://panda-market-api-crud.vercel.app/products/${id}`, {
        method: 'DELETE'
    }).then(response => {
        resMsg = '성공적으로 삭제되었습니다.'
    }).catch(error => {
        resMsg = '삭제에 실패하였습니다.'
    });
    return resMsg;
}

export async function patchProduct(id, reqBody){
    let resMsg;
    const res = await fetch(`https://panda-market-api-crud.vercel.app/products/${id}`, { 
        method: 'PATCH',
        body: JSON.stringify(reqBody),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if( response.ok ){
            resMsg = '성공적으로 수정되었습니다.';
        }else {
            resMsg = '수정할 대상이 없습니다..';
        }
    }).catch(error => {
        resMsg = '수정에 실패하였습니다.';
    });
    return resMsg;
}

export async function getAxiosProductList() {
    const res = await axios.get('https://panda-market-api-crud.vercel.app/products');
    return res.data;
}

export async function getAxiosProduct(id) {
    const res = await axios.get(`https://panda-market-api-crud.vercel.app/products/${id}`);
    return res.data;
}

export async function createAxiosProduct(reqBody){
    let resMsg;
    const res = await axios.post('https://panda-market-api-crud.vercel.app/products', reqBody).then(
        response => { resMsg = '(API)성공적으로 저장되었습니다.' }
    ).catch(
        error => { resMsg = '(API)저장에 실패하였습니다.'  }
    );
    return resMsg;
}

export async function deleteAxiosProduct(id){
    let resMsg;
    const res = await axios.delete(`https://panda-market-api-crud.vercel.app/products/${id}`).then(
        response => { resMsg = '(API)성공적으로 삭제되었습니다.'; }
    ).catch(
        error => { resMsg = '(API)삭제에 실패하였습니다'; }
    );
    return resMsg;
}
