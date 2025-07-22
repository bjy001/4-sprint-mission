
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
    }
  ],
  totalCount: 810
};

// const {  list: productItems } = productList;

/**
 * JavaScript 프로그래밍 시작하기 (7)  객체 구조 분해 쪽 예시에 있습니다~
 * ************   [ 객체 구조 분해 ] (Object Destructuring) ****************
 * 객체 내부의 키를 꺼내와서 새로운 변수로 할당
 * 구조분해할당 : 배열이나 객체의 속성(값)을 해체 하여 개별 변수에 쉽게 할당해주는 문법
 * 객체구조분해 : 객체의 속성(키)을 기준으로 변수에 할당할 때 사용한다.  속성 이름과 동일한 이름의 변수를 선언한다.
 */
// const user = {
//     name: "Jane",
//     age: 28,
//     city: "New York"
// };

//객체 속성을 변수에 할당 => 객체의 속성(키)을 기준으로 변수에 할당
// const { name, age } = user;
// console.log('name: ' , name);
// console.log('age: ' , age);

// 변수 이름을 다르게 하고 싶을 때 (콜론 사용)
// const { name: userName, city: userCity } = user;
// console.log('userName: ' , userName);
// console.log('userCity: ' , userCity);

// 기본값 할당 : 겍체에 해당 속성이 없을 경우 기본값을 사용 할 수 있다.
// const { country = "Unknown", age: userAge } = user;
// console.log('country: ' , country);
// console.log('userAge: ' , userAge);

// 나머지 속성을 객체로 모으기 (Rest Property)
// const { name: n, ...rest } = user;
// console.log('n: ' , n);
// console.log('rest: ', rest);

// 함수 매개변수에서 객체 구조 분해 사용 (자주 사용되는 패턴)
function printUserInfo({ name, age, city = "미상" }){
    console.log(`이름: ${name}, 나이: ${age}, 거주지: ${city}`);
}
// printUserInfo(user);

/**
 * 연습문제  배열 Destructuring 연습하기
 */
// 1. Destructuring 문법을 활용해서 numbers 배열의 각 요소를 one, two, three라는 
// 변수에 할당해보세요
const numbers = [1, 2, 3];
const [one, two, three] = numbers;
// console.log([one, two, three]);


// 2. Destructuring 문법을 활용해서 TV는 livingRoom, 나머지 요소들(배열)은 kitchen 
// 변수에 할당해 주세요
const products = ['TV', '식탁', '냉장고', '전기밥솥', '전자레인지', '오븐', '식기세척기'];
const [livingRoom, ...kitchen] = products;
// console.log([livingRoom, ...kitchen]);
// console.log([livingRoom]);
// console.log([kitchen]);

// 3. Destructuring 문법을 활용해서 두 변수의 값을 서로 바꿔주세요
let firstName = 'Kang';
let lastName = 'Young';
[ firstName, lastName ] = [ lastName, firstName];
// console.log('firstName: ', firstName);
// console.log('lastName: ', lastName);

/**
 * 연습문제  객체 Destructuring 연습하기
 */
// 1. Destructuring 문법을 사용해서 title, artist, year, medium 변수에 
// myBestArt 객체의 각 프로퍼티를 할당해 주세요
// const myBestArt = {
//   title: '프로그래밍 개론',
//   artist: '변재윤',
//   year: '2025',
//   medium: 'high'
// }
// const { title, artist, year, medium } = myBestArt;
// console.log('title: ' + JSON.stringify({title}));
// console.log('title: ' + title );


// 2. Destructuring 문법을 활용해서 myBestSong의 프로퍼티 중 title과 artist는 
// 각각 songName과 singer라는 변수에, 나머지는 orest라는 변수에 객체로 할당해 주세요
const myBestSong = {
  title: '봄의연가',
  artist: '변재윤',
  year: '2025',
  author: '이문세'
};
const { title: songName, artist: singer, ...orest } = myBestSong;
// console.log('title: ', title);
// console.log('songName: ', songName);
// console.log('singer: ', singer);
// console.log('orest: ', orest);

// 3. printMenu 함수 안에 잘못 작성된 Destructuring 코드를 수정해 주세요
const menu = {
  name: '메가커피',
  ice: 'hot'
};
function printMenu(menu) {
	//  menu 파라미터로 전달되는 객체에 ice 프로퍼티가 없을 경우 기본값은 true여야 합니다
	const { name, ice = true } = menu;
	console.log(`주문하신 메뉴는 '${ice ? '아이스' : '따뜻한'} ${name}'입니다.`);
};
// printMenu(menu);

/**
 * [for 반복문]
 *  for (초기화부분; 조건부분; 추가동작부분){
 *   동작부분
 *  }
 */
// for(let i = 1; i <= 10; i++){
//   console.log(`${i} 코드잇 최고!`);
// };


/**
 * [ 객체 ]
 *  여러가지 값을 1개에 전부 저장.
 *  연관된 여러가지 값을 활용하기 위해 객체를 활용.
 *  객체만드는 법 : {} (중괄호)를 이용해서 만듬. 중괄호 안에 여러가지 다양한 값들을
 *                쉼표로 구분해서 저장함. 그리고 다양한 값들을 구분하기 위해
 *                콜론(:)과 함께 이름을 붙여주어야 한다.
 *                값들을 value 라고 하고 값의 이름을 key 라고 부른다.
 *                속성(Property) 은 key : value 한쌍을 의미한다.
 */
// console.log(typeof {
//   brandName: '코드잇',
//   bornYear: 2017,
//   isVeryNice: true,
//   worstCourse: null,
//   bestCorse: {
//     title: '자바스크릅트 프로그래밍 기초',
//     language: 'Javascript'
//   }
// });


/**
 * 객체를 다루기 위해서는 변수에 할당하기 위한 이름을 만들어 주여야 함
 * 객체를 codeit 이라는 변수에 담고 있음
 */
let codeit = {
  name: '코드잇',
  bornYear: 2017,  // 'born Year': 2017 (점표기법 접근불가)
  isVeryNice: true,
  worstCourse: null,
  bestCourse: {
    title: '자바스크립트 프로그래밍 기초',
    language: 'Javascript',
    'sub title': '자바완전정복'
    }
};

/**
 * 위 객체에 접근(Property)하기 위한 2가지 방법
 * : 1) 점 표기법
 */
//1. 점표기법. 단점은 따옴표를 생략할 수 있는 propertyName에 접근할 수 없다. 'born Year'
// console.log(codeit.bornYear);
//2. 대괄호표기법
// console.log(codeit['bornYear']);
let propertyName = 'name'; //프로퍼티명을 전달할 수도 있음
// console.log(codeit[propertyName]);
//3. 객체안의 객체를 접근하는 방법 : propertyName을 계속 연결하여 접근
// console.log(codeit.bestCourse.title);
//만약 객체안의 객체의 propertyName을 사용할 수 없다면 대괄호 표기법을 사용
// console.log(codeit.bestCourse['sub title']);
//4. 존재하지 않는 프로퍼티 접근하면 에러가 나는게 아니라 undefined 값이 출력된다.
// console.log(codeit.bestCourse['teacher']);

/**
 * 객체의 프로퍼티에 수정, 추가, 삭제하는 방법
 * 1. 객체 프로퍼티 수정방법 : 새로운 값을 할당
 */

// 1. 객체 프로퍼티 수정방법 : 새로운 값을 할당 (변수에 값을 재할당 하는것과 동일)
// console.log(codeit.name);
// codeit.name = 'codeit';
// console.log(codeit.name);

// 2. 객체에 프로퍼티 추가방법 : 존재하지 않는 프로퍼티명에 새로운 값을 할당하면 
//                           프로퍼티가 추가된다.
// console.log(codeit.ceo);
// codeit.ceo = '강영훈';
// console.log(codeit.ceo);

//3. 객체에 프로퍼티 삭제방법 : 
//    1) delete 키워드를 사용하여 프로퍼티명을 삭제
//    2) 프로퍼티 존재여부 확인
//       : 2-1) 브런치 기호(===)를 사용하여 객체의 존재여부 확인
//              ex) console.log(codeit.name !== undefined);
//         2-2) in 이용하여 프로퍼티 존재여부 확인
//              - 'propertyName' in object   
//              ex) console.log('name' in codeit)

// console.log(codeit.worstCourse);
// delete codeit.worstCourse;
// console.log(codeit.worstCourse);

// console.log(codeit.name !== undefined); 
// 실수로 undefined 값을 할당하면 결과 다름.. 아래 in 을 사용하는게 안전
// 좀더 안전하게 property 값을 확인하기 위해서는 in 연산자를 사용
// console.log('name' in codeit); //프로퍼티명 검색하여 boolean 형태로 값을 리턴

// if( 'name' in codeit ){
//   console.log(`name 값은 ${codeit.name} 입니다`);
// } else {  // codeit 겍체에서 name 프로퍼터 제거후 
//   console.log('name 프로퍼티는 존재하지 않습니다.');
// };


/**
 * [메소드] 연관된 여러가지 함수를 하나로 묶음
 *         이때도 객체를 사용함. 즉 객체의 프로퍼티로 함수도 사용가능.(함수명은 프로퍼티명으로 함)
 *         객체의 포로퍼티에는 어떠한 자료형도 저장할 수 있기 때문에
 *         프로퍼티 값으로 함수를 넣어줌 ==> 이러한 함수를 객체의 매소드 라고 부름
 *         (사용이유) 메소드는 어느 객체의 고유의 동작으로써 함수에 의미를 부여할 수 있음 
 */

// 객체의 프로퍼티 값으로 함수를 정의하고 있음.
// greetins라는 객체에 3가지 메소드가 정의됨.
let greetings = {
  sayHello: function () { // 함수이름은 property Name이 대신해주고 있음.
    console.log('Hello!');
  },
  sayHello2: function (name) {
    console.log(`Hello ${name}!`);
  },
  sayHi: function() {
    console.log('Hi!');
  },
  sayBye: function() {
    console.log('Bye!');
  }
};

// 위 메소드를 사용하기 위해서는 점표기법으로 접근
// 프로퍼티명 써주고 함수를 호출하는 것처럼 소괄호(())로 열고 닫아주면 됨.
// greetings.sayHello();

// 파라미터가 필요하면 소괄호안에 파라미터 활용하여 작성
// 메소드 호출시 파라미터로 값을 전달.
// greetings.sayHello2('Codeit');

//아래과 같이 대괄호 표기법 으로도가능
// greetings['sayHello2']('Codeit');

/**
 * 메소드를 그냥 사용하지 않고 겍체에 할당하는 이유
 *  : 메소드는 어느 객체의 고유의 동작으로써 함수에 의미를 부여할 수 있음 
 * 
 * getArea() 넓이를 구하는 이름은 같지만 어떤 객체의 메소드 인지에 따라서
 * 그 객체에 맞는 동작을 할때 메소드를 사용 .
 * 일반적인 함수로 사용해야 하면 함수명이 동일하도록 정의해야 하고..
 * 하나의 함수로 만든다고 하면 내부에서 처리가 각각 다르도록 복잡한 고민을 해야 함.
 * 
 * 즉 객체의 매소드로 활용하면 다름 함수와의 이름중복도 피할 수있고 
 * 좀더 객체에 집중해서 메소듸의 동작을 지칭 할 수가 있음 
 * 
 * 사용할 때도 이 객체의 고유한 동작으로 구분할 수 있음. ==> 좀더 의미있는
 * 코드로 활용할 수 있는 장점도 있음.
 */
let rectAangle = {
  width: 30,
  height: 50,
  getArea: function() {
    return rectAangle.width * rectAangle.height;
  }
};

let triAngle = {
  width: 15,
  height: 40,
  getArea: function() {
    return triAngle.width * triAngle.height / 2;  //넓이를 구하는 방법이 다르다.
  }
};
// console.log('rectAangle: ', rectAangle.getArea());
// console.log('triAngle: ', triAngle.getArea());

/**
 * [ for..in 반복문 ]
 *  : 객체안의 프로퍼티를 가지고 반복적인 동작을 수행하기 위해 사용.
 *    (객체의 여러 값을 하나로 다룰때 사용)
 *    객체의 property name을 가져오는 반복문이기 때문에 일반적인 for문으로는 대체할 수 없는
 *    조금은 특별한 반복문 임.
 *    [ 기본구조 ]
 *    for (변수 in 객체) {  //소괄호내에 인위적인 변수 만들고 in 다음에 반복할 객체 지정하면
 *     동작부분              겍체의 propertyNmae이 변수에 할당되고 
 *                          객체의 property 개수만큼 반복동작을 하게 됨.
 *    }
 */

let codeit2 = {
  name: '코드잇',
  bornYear: 2017,  // 'born Year': 2017 (점표기법 접근불가)
  isVeryNice: true,
  worstCourse: null,
  bestCourse: '자바스크립트기초'
};
//key라는 변수명은 그때그때 상황에 맞는 변수명으로 ..
for(let key in codeit2){ //codeit2 객체의 프로퍼티들이 key라는 변수에 차례대로 전달됨
  // console.log(key); //property name 들이 순서대로 출력됨. key라는 변수명은 자유로이 명명가능
  //대괄호표기법 을 활용하여 property 값에도 접근가능
  // console.log(codeit2[key]);
};


/**
 * [ 배열 ]
 *  : 배열의 각 요소 이름이 중요하지 않고 값만 중요할때. 
 *    값들의 순서만 중요하다고 할때 사용
 */
// 아래 겍체를 배열로 만드는 예
let courseRanking = {
  '1st': '자바스크립트 프로그래맹 기초',
  '2nd': 'Git으로 배우는 버전 관리',
  '3rd': '컴퓨터 개론',
  '4rd': '파이썬 프로그래밍 기초'
};
// 배열은 중괄호대신 대괄호([])로 만들고 그냥 쉼표로 구분해서 
// 순서대로 값을 입력하면 배열이 만들어짐
// 배열안의 값들은 요소(element)라고 불린다는 것을 기억.
// 배열의 독특한 점은 대괄호 안의 각 요소별로 순서를 알려주는 숫자가 매겨진다는 점
// 이 숫자값을 index 라고 부르고 이 index가 객체랑 비교했을 때 PropertyName 역할을 함.
let aryCourseRanking = [
  '자바스크립트 프로그래맹 기초',
  'Git으로 배우는 버전 관리',
  '컴퓨터 개론',
  '파이썬 프로그래밍 기초'
];

// index를 통해서 배열의 요소를 가져와 봅시다.
// 배열의 요소를 가져오는 방법은 객체의 대괄호 표기법과 동일
// ex)  배열이름[index]
// index를 통해서 원하는 요소에 접근하는 방식을 인덱싱 이라 함.
// 한가지 주의할 점은 index는 1부터 시작하는 것이 아니라 0부터 시작함

//배열의 첫번째 요소에 접근
// console.log(aryCourseRanking[0]);
// console.log(aryCourseRanking[2]);
// console.log(aryCourseRanking[2 + 1]);

// #배열 특징
//객체와는 다르게 단순히 여려개의 값들을 쉼표로만 구분해서
//대괄호로 담고있는 형태로 각 값들은 요소(element)라고 부르고 
//이 요소들은 index들을 가지는 특징이 있음
// 랭킹같은 순서를 가지는 구조를 만들려면 객체보단 배열을 만드는 것이 더 간단하고
// 더 효율적임.


// 배열 사용하기 좋을때는 순서가 있는 여러값들의 묶음음 아래와 같이 다양함.
// 객체를 사용하는 것보다 간단하에 사용 가능함
let airportLines = [ '인천공항 2터미널', '인천공항 1터미널',
  '검앙', '계양', '김포공항', '마곡나루',
  '디지털미디어시티', '홍대입구', '공덕', '서울역'];

let harryPotterSeries = [ '마법사의 돌', '비밀의 방',
   '아즈카반의 죄수', '불의 잔', '불사조 기사단', '혼혈왕자',
   '죽음의 성물'
];

// 또는 순서에 상관하지 않고 여러값의 묶음 사용 가능
// 좋아하는 과일 묶음
let fruits = [ '사과', '청포도', '딸기', '수박', '체리' ];
// 좋아하는 메뉴 묶음
let menus = [ '짜장면', '짬뽕', '탕수육' ];

/**
 *  [ 배열을 다루는 방법 ]
 */
// 배열도 객체임. ==> typeof 연산자로 자료형 확인해봄
let members = [  '큰갈레', 'Zerrad66', '우리생각해써',
  '흙또끼', 'End Miracle'];
// 결과 : object, 배열도 자바스크립트 에서 미리 만들어둔 특별한 형태의 객체임을 확인
// console.log(typeof(members));

//배열도 단순히 여러값들을 묶어주는 역할 뿐만 아니라
//객체의 일종 이므로 여러가지 메소드를 제공해서 활용 가능

//배열의 총개수 : 배열안에 몇개의 데이터가 들어있는지 쉽게 파악
// 프로퍼티 이기 때문에 점표기법을 사용할 수 있지만 
// console.log(members.length);
// 대괄호 표기법도 사용가능함.
// console.log(members['length']);
// 배열의 마지막 요소 접근
// console.log(members[members.length -1]);

/**
 * [ 배열의 요소 추가 또는 수정 방법]
 */
// 배열이 객체인 만큼 배열에 요소를 추가하거나 수정하는 방식도 객체와 비슷함.
//존재하지 않는 요소 접근
// console.log(members[5]);
//존재하지 않는 요소에 새로운 값을 할당해주면 배열의 요소가 추가되고
//이미 존재하고 있는 요소에 접근하면 요소에 있는 값이 수정되는 형식임(객체방식)
// members[5] = 'NiceCodeit';
// console.log(members[5]);
// 배열의 요소를 인덱스를 잘못 할당(건너뛰기) 하면 그 요소는 undefined 라는
// 값을 자동 할당받게되고 콘솔로그로 찍으면 empty로 찍힘.  length는 증가

//요소수정은 이미 존재하고 있는 요소에 접근해서 할당
// members[3] = '달토끼';
// console.log(members);

//요소삭제는 객체의 delete를 사용하면 요소는 지워지지만 해당 요소는 empty 로 남아있음.
//length도 기존 유지 ==> 완벽한 요소 삭제라 보기 힘듬.
// console.log(members);
// delete members[4];
// console.log(members);

// 배열의 요소를 완벽히 삭제하려면 배열이 가지고 있는 메소드를 활용 (아래 계속)
/**
 * [ 배열 메소드] splice
 *  : 배열을 더욱더 안전하고 효과적으로 다루기 위함
 */
// 배열의 요소를 삭제하기 위해 많이 사용하는 메소도는 splice 메소드임
// 아래와 같이 점표기법 으로 splice 메소드를 호출 (삭제하고자 하는 인덱스를 파라미터로 전달)
// console.log(members);
// members.splice(4);
// console.log(members);

//splice 에 인덱스 1개를 전달하면 그 인덱스 이후에 모든 요소를 삭제하게 됨.
// console.log(members);
// members.splice(1);
// console.log(members);

//그래서 splice 메소드에 숫자1개를 더 전달해주면 삭제할 개수를 지정할 수가 있음.
// 1, 2 이렇게 전달하면  1번 인덱스 부터 2개가 삭제됨.
// 1번째 파라미터 : 삭제를 시작할 인덱스 (startIndex)
// 2번째 파라미터 : 삭제할 개수 (deleteCount)
// console.log(members);
// members.splice(1, 2);
// console.log(members);

// 3번째 파라미터 : 삭제된 요소에 값이 추가 됨 (item)  ==> 이 점이 이메소드의 장점
//                나머지 부분들은 순서가 하나씩 밀리게 됨
// console.log(members);
// members.splice(1, 1, 'NiceCodeit', 'HiceCodeit');
// console.log(members);

// splice 메소드를 가지고 요소를 추가하고 수정하고 삭제할 수 있음.
// 2번째 파리미터(삭제할 개수)를 0 으로 만들어주면 첫번째와 세번째 이후 파라미터로
// 배열안의 어느곳이든 요소를 추가할 수가 있음.
// console.log(members);
// members.splice(1, 0, 'NiceCodeit', 'HiceCodeit');
// console.log(members);

// 2번 인덱스 요소를 삭제하고 수정. 이와 같은 방식으로 여려요소 수정가능
// console.log(members);
// members.splice(2, 1, 'MaumNo');
// console.log(members);

// console.log(members);
// members.splice(2, 2, 'MaumNo', '산토끼');
// console.log(members);

// 위와 같이 splice 메소드를 잘 활용하면 배열을 자유롭게 다룰 수 있다.
// console.log(members);
//1)배열의 첫 요소를 삭제
// members.splice(0, 1);
//2)배열의 마지막 요소를 삭제
// members.splice(members.length-1, 1);
//3) 배열의 첫 요소로 값 추가
// members.splice(0, 0, 'NiceCodeit');
//4) 배열의 마지막 요소로 값 추가
// members.splice(members.length,0,'NiceCodeit');
// console.log(members);

/**
 * splice 보다 좀더 간결하게 작성할 수 있는 메소드가 있음.
 */
// console.log(members);

//1)배열의 첫 요소를 삭제 : shift(), 파라미터 없음. 배열의 첫 요소를 삭제하고
//                       나머지 요소들을 앞으로 밀어준다.
// members.shift();       

//2)배열의 마지막 요소를 삭제 : pop(), 파라미터 없고 순서변경 없다.
// members.pop();

//3) 배열의 첫 요소로 값 추가 : unshift(value), 메소드를 추가할때 추가할 값을 파라미터로 전달함
// members.unshift('NiceCodeit');

//4) 배열의 마지막 요소로 값 추가 : push(value), 어떤 값을 파라미터로 전달함
// members.push('HiCodeit');

// console.log(members);

/**
 * [ for .. of 반복문 ]
 */
// 평이한 (기존)방법
let influencer = [ 'suwonlog', 'smaill.tiger', 
  'Minam.ludens', 'cu_convenience24'];

// for(let i = 0; i < influencer.length; i++) {
//   console.log(influencer[i]);
// };
// for..of 문으로 하면 훨씬 더 간결하게 코드를 작성할 수있다.
// 객체를 반복할 때 사용했던 for..in 문과 비슷
/**
 *  for (변수 of 배열) { //변수에 배열의 요소가 할당됨(객체에서는 배열의 property가 할당)
 *      동작부분;
 *   }
 */
// 훨씬 더 코드가 간결해짐. 별수의 길이만큼 반복해서 할당된 변수에 요소가 할당되는 구조임
// for (let element of influencer){
//   console.log(element);
// };

// 배열도 객체이므로 for .. in 문도 작성 가능
// for..in 문은 앞에 변수에 property name이 들어가니까 배열의 경우에는
// index가 들어감. (객체일 경우에는 property name, 배열의 경우에는 index)
// 배열을 가지고 for..in 문을 사용하면 배열이 가지고 있는 특성..length 같은 것들이
// 변수에 할당될 가능성이 있음. for..in 문은 일반적인 객체에 좀더 최적화가 되어 있음.
// 배열에는 사용하지 말것을 권장.. 배열의 index를 활용하고 싶다면 기존 for문으로 하는게 안전
// for (let index in influencer) {
//   console.log(influencer[index]);
// };

/**
 * [ 다차원 배열 ]
 *  배열 역시 배열의 어떤 요소가 될 수 있음
 *  배열안에 배열의 요소가 들어가는 것을 다차원 배열 이라고 함
 */
let twoDimensinal = [ [1, 2], [3, 4] ]; //배열안의 배열 (2차원 배열)

//2 에 접근
// console.log(twoDimensinal[0][1]);

// ######## 다차원배열 활용예
// 값들에 대한 의미 보다는 값들에 대한 위치나 순서에 더 큰 의미가 느껴짐..
// 만일 그렇다면 배열을 만드는 것보다는 property를 만들 수 있는 객체가 더 효과적임.

//냉장고 음식 
// 배열..(의미 보다는 순서나 위치가 중요한 정보)
let myFridge = [
  ['참외', '토마토', '오이', '양파'],
  ['멸치', '장조림', '김치'],
  ['얼음'],
  ['사이다', '콜라', '물', '쥬스'],
  ['메론바', '찰떡아이스', '투게더', '누가바']
];
// 객체..(순서 위치 보다는 의미가 중요)
let otherFridge = {
  fridge: {
    '채소층': ['참외', '토마토', '오이', '양파'],
    '반찬층': ['멸치', '장조림', '김치'],
    '음료층': ['사이다', '콜라', '물', '쥬스']             
  },
  freezer: {
    '얼름층': ['얼음'],
    '아이스크림층': ['메론바', '찰떡아이스', '투게더', '누가바']
  }
};


//아파트 우편함
let mailbox = [
  [101, 201, 301, 501, 601],
  [102, 202, 302, 502, 602],
  [103, 203, 303, 503, 603],
  [103, 203, 303, 503, 603],
  [105, 205, 305, 505, 605]
];


/**
 *  [기본형과 참조형]
 */

//기본형 : 객체를 제외한 나머지 자료형
//        Number, String, Boolean, Null, Undefined
/**
 *  자바스크립트 에서 기본형 값을 할당한다는 의미는 해당되는 변수이름에
    가 값을 넣어준다는 의미로 해석 가능함.

    [기본형]
    let x = 3; ==> 변수 x라는 값에 숫자 3 을 담았다는 의미..
    let y = x; ==> 변수 y라는 값에 x가 가지고 있는 값을 복사해서 가지고 있음.
    y = 5; ==> 변슈 y값에는 새로운 값 5가 할당
    
    위와 같이 변수이름에 기본형 값을 가지고 있는 형태는 모두 똑같음

    [객체]
    let x = {name: 'Codeit'};
    let y = x;

    console.log(x);
    console.log(y);
    y.birth = 2017;  //y에 새로운 프로퍼티 추가
    //서로 다른 결과가 출력될것 같은데 x에도 추가됨
    console.log(x);  
    console.log(y);

    자바스크립트에서 변수에 객체를 할당하는 케이스는 특별하게 동작하는데
    개체값이 어디에선가 만들어지고 변수에는 그 객체값으로 가는 주소값이 저장된다.
    즉 변수상자와 객체값과의 사이에 길이 열리는 형태..
    
 */
    // 어디에선가 객체가 생성.. 그리고 이 객체와 이어진 길이
    // 변수 x에 이어지게 됨.
    // let x = {name: 'Codeit'}; 
    // 변수x 에는 객체값이 담긴것이 아니라 객체로 가는 길이 열려있기 때문에 
    // 뱐수y 에는 이 길이 복사됨.
    // let y = x;
    // 변수 x,y는 서로 같은 객체를 바라보게 되고 
    // y만 수정했지만 x도 같이 수정한 것 처럼 보이게 되는 것임.
    // 이렇게 주소값에 접근해서 그 값에 접근하기 때문에 객체와 같은 자료형을 
    // 참조형(Reference Type)이라고 부름.
    // console.log(x);
    // console.log(y);
    // console.log('=============');
    // y.birth = 2017;
    // console.log(x);
    // console.log(y);

    /**
     * 배열도 객체 이므로 Reference Type임
     * 
     */
  // let x = [1, 2, 3]; //변수에 할당될때 배열 자체가 변수에 담기는게 아니라 
  //                    //주소값이 담긴다.
  // let y = x; //변수x를 y에 복사하게 되면 주소값이 복사되고 
  // console.log(x);
  // console.log(y);
  // y[2] = 4;  //y의 인덱스 값을 수정 
  // console.log(x); //결과적으로 수정결과 x도 같이 수정된다.
  // console.log(y);

  /**
   * 최종 정리
   *  : 기본형 값을 변수에 담게되면 그 기본값이 그대로 할당되고
   *    참조형 값을 변수에 담아 사용하게 되면 해당 객체를 가르키는 주소값이 할당된다.
   */
  

  /**
   * [ 참조형 복사하기 ]
   *  : 참조형 값은 변수에 할당될때 값 자체가 아니라 주소값이 할당된다.
   */
// let numbers1 = [1, 2, 3]; //배열에 대한 값이 아니라 주소값이 할당(복사)
// let numbers2 = numbers1;  //역시 주소값이 복사
// numbers2.push(4); //numbers2 만 변경했지만 numbers1 값도 바뀜
// console.log(numbers1);
// console.log(numbers2);

/**
 * 만일 위 경우에서 numbers2만 변경하고 싶을때는 ?
 *   ==> slice 메소드를 이용하여 간단히 해결
 *       slice 에 아무 파라미터 넣지 않으면 원래값이 그대로 전달되는 특성 이용
 */
// 배열
// let numbers1 = [1, 2, 3]; 
// let numbers2 = numbers1.slice(); // 마치 배열을 복사한것과 같은 효과
// numbers2.push(4); 
// console.log(numbers1);
// console.log(numbers2);

// 객체 : 참조형 복사하기 (Reference Type Copy)
// 객체에는 slice 같은 메소드가 없다.
// 사실 객체에는 자바스크립트가 미리 만들어둔 Object 라는 객체에 
// assign 메소드를 활용화면 객체복사를 할 수 있다.
// let course1 = {
//   title: '파이썬 프로그래밍 기초',
//   language: 'Python'
// };

// // let course2 = course1;  
// let course2 = Object.assign({}, course1); // 객체 복사
// course2.title = '알고리즘의 정석';

// console.log(course1);
// console.log(course2);

/**
 * 위 예를 가지고 좀더 직관적으로 사용하기  위해 for..in 문을 활용
 */
// let course1 = {
//   title: '파이썬 프로그래밍 기초',
//   language: 'Python'
// };
// let course2 = {}; //빈 객체를 생성
//for..in 을 이용하여 독립적인 객체로 복사
// for (let key in course1) { // 가. course1 으로 for..in 문을 작성해서 
  // 나. 각 프로퍼티들을 넣어준다 ==> 똑같은 프로퍼티를 가지고 있지만 독립적인 객체로
  //     복사가 가능하다.    
  // course2[key] = course1[key];
// };
// course2.title = '알고리즘의 정석';
// console.log(course1);
// console.log(course2);

/**
 * 위의 예는 course1, course2 에만 한정적..
 * course3, course4 ... 이렇게 생기면 어떡할 것인가?
 *  
 */
// 위에 for문을 활용해서 함수로 만들어 줌
// function cloneObject(object){ // 파라미터로 복사할 객체를 전달받고
//   let temp = {}; // 임시로 빈 객체를 만든 후 

//   for (let key in object){ // for..in 문을 통해서 객체를 복사하고 
//     temp[key] = object[key];
//   }
//   return temp; // 임시객체를 리턴
// };

// let course1 = {
//   title: '파이썬 프로그래밍 기초',
//   language: 'Python'
// };

// let course2 = cloneObject(course1); //복사된 객체가 course2에 할당
// let course3 = cloneObject(course1); //course3 이 생겨도 활용가능
//                                     //또는 다른 객체로 복사할때도 활용 가능(파라미터만 바꿈)
// course2.title = 'AI프로그래밍 정석';
// course3.title = '객체 지향 프로그래밍';

// console.log('course1: ', course1);
// console.log('course2: ', course2);
// console.log('course3: ', course3);


/**
 * 주의할 점
 *  : 객체나 배열안에 중첩해서 배열이나 객체가 있는 경우 복사할때 또
 *    주소값이 복사되기 때문에 예상치 못한 결과를 얻을 수 있음.
 */
//문제발생
// function cloneObject(object){ 
//   let temp = {}; 

//   for (let key in object){ 
//     temp[key] = object[key];
//   }
//   return temp; 
// };

// 해결 
// function cloneObject(object){ 
//   if (object === null || typeof object !== 'object' ){
//     return object;
//   }
//   let temp = {}; 
//   if( Array.isArray(object)){
//     temp = [];
//   } else {
//     temp = {};
//   }

//   for (let key of Object.keys(object)) {
//     temp[key] = cloneObject(object[key]);
//   }
//   return temp; 
// };


// let course1 = {
//   title: '파이썬 프로그래밍 기초',
//   language: 'Python',
//   prerequisite: []    //추가. 배열이기 때문에 주소값이 복사됨..
// };

// let course2 = cloneObject(course1); 
                                    
// course2.title = 'AI프로그래밍 정석';
// course2.prerequisite.push('자바프로그래밍 기초');

// console.log('course1: ', course1); //course1의 prerequisite 값 할당됨..(주소값 복사로)
// console.log('course2: ', course2);

/**
 *  [ const 변수와 상수]
 *   분명 상수 만들때 const 사용한다고 배웠는데 변수만들때
 *   let을 사용하지 않고 const를 사용하는 것인가..
 * 
 *   const 와 let 의 가장 큰 차이점 : 재할당이 불가능 함
 * 
 */
// 변수는 const 로 선언하세요...

//const 와 let 의 가장 큰 차이점 : 재할당이 불가능 함
//let 으로 선언한 변수는 재할당이 가능..계속해서 값을 바꿀 수 있음
// let x = 1;
// console.log(x);
// x = 2;
// console.log(x);
//const 로 선언한 다음에 재할당을 하면 오류가 발생
// const y = 3;
// console.log(y);
// y = 4;
// console.log(y);

/**
 * 이런 특성 때문에 변하지 않는 고정된 값을 사용할 때 
 * const 키워드로 상수를 만듬..
 * 좀더 안전하게 작성한다는 의미에서 const 키워드를 사용하기 시작함
 * 값이 변하지 않고 일관된 값을 가짐.  중간에 값이 바뀔거라는 불안 요소제거 
 */


/**
 *  [ 모던 자바스크립트 ]
 * 
 *  ECMAScript : 자바스크립트 표준 명세서
 *  ecma : 국체 표준화 기구
 *  ECMA-262 : 표준 명시 문서.. 이 문서의 내용이 ECMAScript
 *  버전 정식명칭 : ES2015, ES2016...
 *  ES6 버전이 가장 큰 영향.. 코드를 더 안정적이고 간결하게 작성할수 있는 유용한 문법 등장
 *  브라우저가 ES6 지원 가능한지 여부가 중요한 화두..
 *  ==> 현시점에 사용하기 적합한 범위내에서 최신버전의 표준을 준수하는 자바스크립트
 *      이것을 모던 자바스크립트 라고 불리움.
 */

/**
 * [ 데이터 타입의 특징과 종류 ]
 *  유연한 데이터 타입 : 자바스크립트는 다른 언어에 비해 테이터 타입이 유연한 특징이 있음.
 *  유연한 의미 : 데이터 타입이 상황에 따라 별할 수 있다.
 *              즉 연산을 할때 데이터 타입이 자유로이 바뀔수 있다..
 *              ex) 2 * "4" = 6 (가능)
 *   - 자바스크립트 자료형 종류 -
 *   (기본형) Primitive Type
 *    : Number, String, Boolean, Null, Undefined, 
 *      Symbol(es2015), //다른값과 중복되지 않는 유일한 값을 만들 때
 *      BigInt(es2020)  //엄청 큰 숫자를 다룰 때
 *   (참조형) Reference Type
 *    : Object 
 * 
 */


/**
 * [ 변수와 스코프 ]
 *   변수 : 이름을 통해서 어떤 값에 특별한 의미를 부여할 수 있는 1개의 상자
 *         프로그래밍 에서 추상화의 가장 기본적인 수단
 *         변수 만드는 방식이 ES2015 기준으로 변화가 생김.
 */
// ES2015 이전
// 약간의 문제 발생
// var title = 'Codeit';

// ES2015 이후 let, const 키워드 등장
// 재할당 필요할때는 let, 재할당이 필요치 않을때는 const 사용 권장
// let age = 20;
// const PI = 3.14;


/**
 * 왜 let, const 사용해야 하는지 알아보자
 * 1) 변수를 사용하는 시점에 대한 문제
 *    var 키워드는 변수를 만들기도 전에 사용이 가능..
 */
//var 키워드는 변수를 만들기도 전에 사용이 가능..
//호이스팅(Hoisting) 현상 : 선언이 분명 나중에 되었지만 마치 선언이 위로
//                        올라간 듯한 현상.                          
// console.log(title); //에러가 발생안하고 undefined 값이 출력
// var title = 'codeit'
// console.log(title);

//let, const는 변수 선언 이전에 접근 불가
//예상하지 못하는 에러 방지
// console.log(title); // 선언하기 이전에 실행할 수 없다는 에러 메시지 생성
// let title;

/**
 * 2) 중복 선언의 차이 
 *   var 키워드는 중복 선언이 가능..
 *   let, const는 중복 선언 불가
 */
// var title = 'Codeit';
// console.log(title);
// var title = 'JavaScript';
// console.log(title);

/**
 * 3) 변수의 유효 범위(Scope)의 차이
 */
// var x = 3; //전역변수 : 함수밖이나 안이나 자유롭게 사용 가능

// function myFunc() {
//   var y = 4; //지역변수 : 함수밖에서는 사용 불가
//   console.log(`x in myFunc: ${x}`);
//   console.log(`y in myFunc: ${y}`);
// };

// myFunc();
// console.log(x);
// console.log(y);

/**
 * var 키워드는 함수 단위로만 구분되기 때문에 
 * 조건문이나 반복문 안에서 새로운 변수를 만들게 되더라도 모두 전역변수로 평가됨
 *  ==> 즉 어떤 조건문이나 반복문 안에서 사용할 수 있는 지역변수를 만들수 없는 문제 발생
 *  이 문제를 해결하기 위해서 let, const는 중괄호({})가 사용하기 시작하는 부분에서
 *  변수의 유효범위가 시작됨.
 *  자바스크립트 에서는 {} (중괄호)가 감싸는 부분을 코드블록 이라 함.
 *  
 */
// var x = 3;

// if (x < 4){
//   var y = 3;
// }

// for(var i = 0; i < 5; i++){
//   console.log(i);
// }

// console.log('x: ', x);
// console.log('y: ', y);
// console.log('i: ', i);

/**
 * let, const 로 변경
 */
// let x = 3;

// if (x < 4){
//   let y = 3; // y는 코드블록 안의 지역변수로 평가되었기 때문에 오류발생
// }

// for(let i = 0; i < 5; i++){
//   console.log(i);
// }

// console.log('x: ', x);
// console.log('y: ', y); //y는 지역변수 이므로 if문 밖에서는 사용 불가
// console.log('i: ', i);

/**
 * 코드블록 안에서는 잘 실행되지만 코드블록 밖에서는 에러 남
 */
// {
//   let title = 'Codeit';
//   console.log(title);
// }
// console.log(title);

/**
 * var 키워드는 함수를 기준으로만 스코프가 결정
 * let, const 키워드는 블록을 기준으로 스코프가 결정
 */
// var x; // 함수 스코프(function scope)
// let y; // 블록 스코프(block scope)
// const z; // 블록 스코프(block scope)


/**
 * [ 함수를 만드는 방법 ]
 *   (함수선언 방식) ==> function키워드 사용해서 함수 만드는 방식
 *   function 함수이름(파라미터) {
 *    동작
 *    return 리턴값
 *   }
 */

/**
 *  [ 함수 표현식 ]
 * 기존의 함수선언 방식 말고 함수선언을 값 처럼 활용하는 방식.
 * 
 */
//printCodeit 이라는 변수에 함수선언을 값처럼 활용하는 방식
// 이렇게 함수선언을 값처럼 할당하는 방식을 함수표현식(Function Expression)이라 부름
// const printCodeit = function() {
//   console.log('Codeit');
// };

// printCodeit();

/**
 * [ 함수 표현식 예]
 *  함수 선언을 값 처럼 활용하고 있음
 * 즉 함수 표현식은 변수에 할당하는게 포인트가 아니라 함수선언을 값으로 사용하고 
 * 있다는 점이 포인트임.
 */
// const myBtn = document.querySelector('#myBtn');

// myBtn.addEventListener('click', function() {
//   console.log('button is clicked!');
// });

/**
 * 함수선언방식과 함수표현식의 차이점
 */
// 함수선언식은 호출하기 전에 선언이 가능함
// 함수선언보다 먼저 함수를 호출했는데도 아무런 문제없이 코드가 잘 동작함
// 이렇게 선언문이 위쪽으로 끌어올려지는 현상을 호이스팅(Hoisting) 이라 함.
// printCodeit();

// function printCodeit(){
//   console.log('Codeit');
// };

// 반면에 변수에 할당해서 함수를 표현하는 함수표현식은 
// 변수의 특성상 선언이전에 접근을 할 수 없음.
// printCodeit();

// const printCodeit = function() {
//   console.log('Codeit');
// };

// 또 다른점은 스코프의 차이
// 함수 선언은 var 키워드 처럼 함수스코프를 가집니다.
// function printCodeit() {
//   function printJS() {  // ==> #함수안에 선언된 함수는 함수밖에서는 호출할수 없다.
//     console.log('JavaScript');
//   }
//   console.log('Codeit');
//   printJS();
// };

// printCodeit();
// printJS(); // ReferencedError

/**
 * 위에서는 함수안의 함수선언 ...
 * 만일 이렇게 함수가 아닌 다른 코드 블록에서 함수를 선언하게 되면
 * 모두 전역적으로 호출이 가능해집니다.
 */
// const x = 4;

// if(x < 5){
//   function printJS() { // 코드블록 안에 위치
//     console.log('JavaScript');
//   }
// }

// {
//   function printCodeit() {
//     console.log('Codeit');
//   }
// }

// printCodeit();
// printJS();



// 반면에 함수표현식의 경우에는 할당된 변수에 따라 scope가 결정된다.
/**
 * 함수선언식 : 변수선언과 함수선언 부분을 명확히 구분할 수 있고 
 *            함수를 호출 할 때도 자유로운 위치에서 함수를 호출 할 수 있다는 장점.
 * 함수표현식 : 반드시 선언 이후에 호출 할 수 있다는 점이 가독성 면에서는 오히려 코드의
 *            흐름을 더 쉽게 파악할 수 있고 변수의 스코프도 이용할 수 있다는 장점.
 * 
 */
// var printJS = function () {
//   console.log('JavsScript');
// };

// let printHi = function() {
//   console.log('Hi');
// };

// const printCodeit = function () {
//   console.log('Codeit');
// };


/**
 * [ 값의로서 함수 ]
 *  : 자바스크립트는 함수를 특별한 형태의 값으로 취급합니다.
 *    그래서 함수표현식이 가능 
 *  
 * 
 */

// 값으로서의 함수
// const printJS = function() {
//   console.log('JavaScript');
// };
// type연산자로 함수의 타입을 출력해보자
// function 이라고 나오지만 함수의 구체적인 데이터 타입은 객체임.
// console.log(typeof printJS); // function 이라고 나옴

// 아래 함수가 객체와 비슷한 타입임을 알수 있음(콘솔모드)
// console.dir(0);
// console.dir('codeit');
// console.dir(true);
// console.dir(null);
// console.dir(undefined);
// console.dir({});
// console.dir([]);
// console.dir(printJS); //형태가 객체 형태 (콘솔로 풀어보면 여러 행태의 프로퍼티를 가진 객체형태)

// #####>  자바스크립트에서 함수가 객체 타입의 값으로 평가됨
//  이런 특징으로 어떤 방식으로 활용할 수 있는지 살펴보자..
//  함수를 호출하고 선언하는 방식이 다양 하다. 
/**
 * 자바스크립트의 함수는 어디에서나 할당 될 수 있고 
 * 다양한 형태로 호출 될 수 있다.
 *  ex) 1) 함수표현식 선언 후 호출 
 *      2) 객체안의 메소드로 사용
 * 
 */

//1) 함수표현식 선언 후 호출 
// const printJS = function() {
//   console.log('JavaScript');
// };
// printJS();

//2) 객체안의 메소드로 사용(값으로서 함수)
// const myObject = {
//   brand: 'Codeit',
//   bornYear: 2017,
//   isVeryNice: true,
//   sayHi: function(name) { // 프로퍼티로 함수를 선언
//     console.log(`Hi! ${name}`);
//   }
// };
// myObject.sayHi('JavaScript');  // 프로퍼티로 접근해서 함수를 호출

//3) 배열에 담아서 함수를 호출 (흔하지 않음)
// const myArray = [
//   'codeit',
//   2017,
//   true,
//   function(name) { // 배열의 요소로 함수를 선언 
//     console.log(`Hi! ${name}`);
//   }
// ];
// myArray[3]('Codeit');  // 배열의 요소로 접근해서 함수를 호출

// 4) 값으로 평가되는 함수는 다른 함수의 파라미터로도 전달이 가능하다.
// dom 이벤트를 다룰때 파라미터를 전달하는 이벤트 에서 함수를 선언하는 것 뿐만 아니라
// const myBtn = document.querySelector('#myBtn');

// myBtn.addEventListener('click', function () {
//   console.log('button is clicked!');
// });

//[5] 이런식으로 함수를 호출 할 때 
// function makeQuiz(quiz, answer, success, fail) {
//   // 조건에 따라 그 함수가 나중에 호출됨
//   if(prompt(quiz) === answer ){
//     console.log(success()); // 미리선언 함수 호출 .. 
//   } else {
//     console.log(fail()); // 미리선언 함수 호출
//   }
// };

// function getSucess() { // 미리선언된 함수 (콜백함수)
//   return '정답!';
// };

// function getFail() { // 미리 선언된 함수 (콜백함수)
//   return '오답!';
// };

// const question = '5 + 3 = ?';
// /**
//  * 참고로 다른 함수의 파라미터로 전달 된 함수를 
//  * 콜백함수(Callback Fuction)라고 한다.
//  * 
//  */
// makeQuiz(question, '8', getSucess, getFail); // 미리 선언된 함수를 전달

/**
 * [ 고차함수(Higer Order Function) ]
 *  : 함수를 리턴하는 함수 
 * 
 * 그리고 함수가 하나의 값으로 취급되는 특성은 어떤 함수의 리턴값이
 * 함수가 될수 있다는 뜻.
 * 
 */
// function getPrintHi() { // 함수를 리턴하는 함수를 고차함수(Higer Order Function)이라 함
//   return function () { // 함수를 리턴
//     console.log('Hi!?');
//   };
// };

/**
 * 1)고차함수는 변수에 호출된 된 값을 할당해서 활용하기도 하지만 
 */
// const sayHi = getPrintHi(); // 리턴한 함수를 sayHi 변수에 할당

// sayHi(); // 변수에 호출된 된 값을 할당해서 활용


/**
 *  2) 이중괄호를 사용해서 고차함수로 리턴되는 함수를 
 *     바로 호출할 수도 있다.
 */
// getPrintHi()();

/**
 * [ 최종 정리 ]
 * 
 *  값 으로서의 함수를 살펴봄.
 *  간단히 요악하면 자바스크립트 에서 함수는 
 *    1) 변수나 다른 데이터 구조안에 할당 될수 있고
 *    2) 다른 함수의 파라미터로 전달 될 수 있고
 *    3) 다른 함수의 리턴값이 될수도 있다,
 
*  프로그래밍 에서 이와 같은 특징을 가진 함수를 일급함수(First Class Function)
   이라 불리우며 자바스크립트는 일급함수를 가지고 있는 프로그래밍 언어이다.
 */

/**
 *  [ Parameter ]
 * 
 *   : 함수 밖에서 안쪽으로 다양한 값들을 전달받고자 한다면 파라미터를 활용
 * 
 */
//Parameter
// function greeting(name){ //name 이 파라미터
//   console.log(`Hi! My name is ${name}`); // 함수내에서 변수처럼 활용
// };

// 파라미터를 활용하여 다양한 값들을 전달하여 다양하게 동작
// 아규먼트(Argument) : 파라미터로 전달하는 값
// greeting('JavaScript'); //'javsScrip'가 아규먼트
// greeting('Codeit');
// greeting('World');

// 아규먼트를 생략하면 undefined 값을 가지고 동작
// greeting();

// 파라미터에 할당연산자를 사용해서 기본값을 작성해주게 되면
// 함수를 호출할 때 아규먼트를 전달하지 않은 경우에 
// 파라미터가 기본값을 가지고 동작하게 된다.
// function greeting2(name = 'Codeit'){
//   console.log(`Hi! My name is ${name}`);
// };
// greeting2();


/**
 * 하나 이상의 파라미터를 선언한 가운데
 * 아규먼트를 부분적으로 생갹하게 되면 .. 
 * 
 * 아규먼트가 파라미터로 전달될 때에는 파라미터의 기본값 설정과 관계없이
 * 함수를 호출할 때 선언한 순서 그대로 전달되기 때문에
 * 아규먼트를 생략할 필요가 있어서 기본값이 필요한 파라미터는 
 * 가급적 오른쪽에 작성하는 것이 권장됨
 * 
 */
// function greeting3(name = 'Codeit', interest) {
//   console.log(`Hi! My name is ${name}!`);
//   console.log(`I LIKE ${interest}!`);
// };
// greeting3('JavaScript');


// function greeting4(name = 'Codeit', interest = 'JavaScript'  ) {
//   console.log(`Hi! My name is ${name}!`);
//   console.log(`I LIKE ${interest}!`);
// };
// // name 에는 undefied가 전달되서 기본값으로 동작한다.
//    /*** ===> undefied 값을 사용해서 기본값을 사용할 수 있다. ***/
// // interest 에는 Python이 전달되서 동작
// greeting4(undefined, 'Python'); //아규먼트가 undefined 값으로 전달


/**
 * [다른 예]  함수를 호출 할 때 아규먼트 1개 생각
 *   아규먼트가 설정안되면 기본값을 사용
 *   아규먼트가 설정되면 전달된 야규먼트값을 사용
 */
// 2) 파라미터 y는 기본값을 사용. x가 기본값인 y에 활용되면서 결과 5 나옴.
// function defaultTest(x, y = x + 3){
//   console.log(`x: ${x}`);
//   console.log(`y: ${y}`);
// };
// // defaultTest(2); // 1) 아규먼트로 숫자2가 파라미터로 전달되고 

// //만약 두번째 아규먼트가 있다면 그냥 그 값을 사용한다.
// defaultTest(2, 3);

/**
 * [ 정리 ] 파라미터에 기본값을 설정하는 문법은
 *         ES2015 에서 등장하는 문법이기 때문에 혹시 ES2015문법을
 *         지원하지 않는 환경에서는 사용 불가.
 */


/**
 * [ Arguments ]
 * 
 *  : 함수를 호출할 때 사용하는 아규먼트를 다루는 특별한 형태를 살펴보자
 * 
 */
// 외부로부터 값을 전달받기 위해 소괄호() 안에 작성하는 것을 파라미터
// function printArguments(a, b, c){
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log('----------------');
// };
// 함수를 호출할 때 파라미터로 전달하는 값을 아규먼트 
// 이런 형태는 꼭 아규먼트를 3개를 작성해 주어야 하는 문제가 있다.
// printArguments('Young', 'Mark', 'Koby');

//만약 아규먼트를 1개나 2개 이상을 전달하게 되면
//아무런 값도 전달받지 못한 파라미터가 undefined 값을 갖고 동작하게 되고
// printArguments('Young', 'Mark', 'Koby');
// printArguments('Captaion');
// printArguments('Jayden', 'Scott');

//3개보다 많은 아규먼트를 전달하게 되면
//3개 이후에 전달되는 값은 그냥 무시되는 문제가 발생
// printArguments('Suri', 'Jack', 'Jayden', 'Scott');

/**
 * 위와 같이 전달하는 아규먼트의 패턴이 다양할때
 * 아규먼트가 1개가 전달되면 1개만 출력하고
 * 4개가 전달되면 4개 모두가 출력하도록 
 * 아규먼트 개수에 따라 유연하게 동작하는 함수를 만들려면
 * 어떻게 해야 할것인가?
 
* 자바스크립트에서 함수를 선언할 때 함수 내부에서는
  arguments 라는 특별한 객체를 사용할 수 있다.
  * 
 */
//arguments 라를 객체를 콘솔에 출력해보자..
/**
 * 아래 결과를 보면 파라미터와 관계없이 함수를 호출할 때 전달한
 * 아규먼트 들이 대괄호 안의 각 요소로 담겨져 있는 모습을 확인할 수 있다.
 * 아규먼트 객체는 배열과 비슷한 모양을 하고 있긴 하지만
 * 모양만 비슷하고 배열의 메소드는 사용할 수 없는 유사배열 이다.
 * 
 * length 프로퍼티로 아규먼트 개수 확인 가능
 */
// function printArguments(a, b, c){
//   console.log(a);
//   console.log(b);
//   console.log(c);
//   console.log(arguments);
//   console.log(arguments.length); //1)length 프로퍼티로 아규먼트 개수 확인 가능
//   //2)인덱싱을 통해서 아규먼트 개별로 접근 가능
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   //3) for of 문을 통해서 반복작업도 가능
//   for(const arg of arguments){
//     console.log(`[for..of]: ${arg}`);
//   }
//   console.log('----------------');
// };
// printArguments('Young', 'Mark', 'Koby');
// printArguments('Captaion');
// printArguments('Jayden', 'Scott');
// printArguments('Suri', 'Jack', 'Jayden', 'Scott');

/**
 * 위와 같이 arguments객체를 활용하면 호출할 때 전달되는 아규먼트 에 따라
 * 유연하게 동작하는 함수를 만들어낼 수 있다.
 */

/**
 * [ 정리 ]  함수내에서 자동으로 만들어지는 argemnts 라는 객체를 통해서 
 *          함수를 호출할 때 전달한 아규먼트 들을 유연하게 다루는 방법애
 *          대해 살펴봄. 
 *          (주의점)
 *          아규먼트 라는 객체가 함수 내부에 특정한 기능으로 존재하기 때문에
 *          파라미터의 이름을 arguments 로 짓는 다거나 함수 내부에서
 *          arguments라는 이름의 변수나 함수를 만드는 것도 피해야 함
 */


/**
 * [ Rest Parameter ]
 * 
 *  : 함수내에서 arguments 객체를 활용하면 불규칙하게 아규먼트가 사용되는
 *    환경에서도 유연하게 arguments들을 다룰 수 있다고 배웟음.
 *    그러나 arguments 객체에도 몇가지 아쉬운 부분이 있음.
 *     1) 아규먼트 객체가 유사배열 이기 때문에 배열의 메소드는 사용할 수 없다.
 *     2) 항상 함수를 호출할 때 전달한 이 아규먼트 전체를 다루기 때문에
 *        마지막 2개만 아니면 3개만 묶어서 다루려면 인덱싱을 통해서 
 *        한번 더 세분화 해야 하는 과정이 필요하다는 점.
 
*    ES2015 이후에 이런 arguments 객체의 아쉬움을 해결해주는 Rest Parameter 
     문법이 등장하게 됨.  
 * 
 */
// arguments 를 활용한 예
// function printArguments() {
//   for (const arg of arguments){
//     console.log(arg);
//   }
//   console.log('--------------');
// };
// printArguments('Young', 'Mark', 'Koby');
// printArguments('Captaion');
// printArguments('Jayden', 'Scott');
// printArguments('Suri', 'Jack', 'Jayden', 'Scott');


// Rest Parameter 활용한 예
/**
 *  1.파라미터 한개를 만들어서 마침표 3개를 붙여줌
 *  일반 파라미터 앞에 마침표 3개를 붙여준것을 Rest Parameter 라고 함.
 
* 아규먼트 객체는 유사배열 이기 때문에 배열의 메소드를 사용할 수 없고
  Rest Parameter는 배열이기 때문에 배열의 메소드를 자유롭게 사용할 수 잇다.
 */
// function printArguments(...args) {
  // for (const arg of args){ //2. 아규먼트 객체대신 사용함
  //   console.log(arg);
  // }
  // 3. 배열이기 때문에 splice 메소드 활용
//    console.log(args.splice(0, 2));
//   console.log('--------------');
// };
// printArguments('Young', 'Mark', 'Koby');
// printArguments('Captaion');
// printArguments('Jayden', 'Scott');
// printArguments('Suri', 'Jack', 'Jayden', 'Scott');

// 4. Rest Parameter는 일반 파라미터와 함계 사용가능
// ...others 를 통해서 나머지 아규먼트 들을 배열로 묶는 역할을 한다.
// 일반 파라미터와 함께 사용할 때에는 가장 마지막위치에 작성되어야 한다.

// 항상 전달된 모든 아규먼트를 다루는 argements 객체 와는 다르게
// 명확하게 구분해서 다루어야 하는은 일반 파라미터를 사용하고
// 유연하게 다룰수 있는 부분은 Rest Parameter로 나누어서
// 필요에 따라 부분적으로 유연하게 활용할 수 있다.
// es2015이후 지원버전만 가능.. 그전 버전은 arguments 객체 이용
// function printRank(first, second, ...others) {
//   console.log('코드잇 레이스 최종 결과');
//   console.log(`우승: ${first}`);
//   console.log(`준우승: ${second}`);
//   for(const arg of others) {
//     console.log(`참가자: ${arg}`);
//   }
// };
// printRank('Phil', 'Won', 'Emma', 'Min', 'Luke'  );

/**
 * [ Arrow Function ]
 * 
 *  : ES2015에서 새롭게 등장.
 *   기존의 함수 선언 방식을 더욱 더 간결하게 만들어 주는 문법.
 * 
 *   이름이 없는 익명함수 이기 때문에 일반적으로 이름을 가진 변수에 
 *   할당 하거나 다름 함수의 아규먼트로 함수를 선언할 때 주로 활용됨.
 * 
 */
//일반적 함수
// const getTwice = function(number) {
//   return number * 2;
// };
// console.log(getTwice(5));

// const myBtn = document.querySelector('#myBtn');

// myBtn.addEventListener('click', function () {
//   console.log('button is clicked!');
// });

// # Arrow 함수 (기본적인 형태)
//function 키워드를 지워주고 소괄호 오늘편에서 등호(=)롸 부등호(>)를 사용하여
//이름처럼 화살표 기호를 표시해 주는 것이다.
// const getTwice2 = (number) =>  {  
//   return number * 2;
// };
// console.log(getTwice2(5));

// const myBtn2 = document.querySelector('#myBtn');

// myBtn2.addEventListener('click',  () => {
//   console.log('button is clicked!');
// });

// Arrow 함수는 기존의 function 키워드 함수를 좀더 간결하게 표현하고자 
// 등장한 것이기 때문에 상황에 따라서는 위 기본형태 보다 훨씬 더 
// 짧게 표현될 수 있다.
// const getTwice3 = number => number * 2;
// console.log(getTwice3(5));

/**
 * 함수 선언식과 함수 표현식과 비교해도 Arrow Function이 훨씬 더
 * 간결하게 코드를 작성할 수 있다.
 */
// 함수선언식
// function getTwice4(number) {
//   return number * 2;
// };

// // 함수표현식
// const getTwice5 = function(number) {
//   return number * 2;
// };

// //Arrow 함수
// const getTwice6 = number => number * 2;



/**
 *  [ 파라미터가 1개일 경우 ]
 *   소괄호 생략 가능.. 다만 가독성 위해 생략 자제하라는 가이드도 있음
 */
// 일반적인 Arrow함수
// 이렇게 파라미터가 1개인 Arrow함수는 파라미터를 감싸는 소괄호 부분을 
// 생략할 수가 있다.
// const getTwice = (number) => {
//   return number * 2;
// };

// 파라미터가 1개 일때 소괄호 부분 생략
// const getTwice2 = number => {
//   return number * 2;
// };

// console.log(getTwice2(3));

/**
 * [ 파라미터가 2개 이상 있거나 없을 경우 ]
 *  소괄호를 반드시 작성해야 함
 */
// const sum = (a, b) => {
//   return a * b;  
// };

// const getCodeit = () => {
//   return {  name: 'Codeit' };
// };

// console.log(sum(10, 5));
// console.log(getCodeit());

/**
 * Arrow 함수에서는  내부의 동작 부분이 return문 1개로만 이루어져 있다면
 * 증괄호({})와 함께 return 키워드도 생략할 수 있다.
 */
// const getTwice = (number) => {
//   return number * 2;
// };
//다음과 같이 생략 가능
// const getTwice2 = number => number * 2;
// console.log(getTwice2(5));

/**
 * 그러나 함수내부에서 조건문이나 반복문.. 값을 할당하는 것같이
 * return 문 외에 다른 표현들이 더 필요하다면 증괄호({})와 return 키워드는 생략
 * 할 수 없다.
 */


/**
 * [ 리턴값이 1개 이지만 리턴값이 객체인 경우 ]
 */
//AS-IS
// const getCodeit = () => {
//   return { name: 'Codeit' };
// };

//TO-BE : 이런 경우에 중괄호와 리턴값을 생략하게 되면 에러가 발생
// 왜냐하면 우리가 객체라고 작성했던 중괄호({}) 를  함수의 동작구분을 구분하는
// 중괄호로 해석하기 때문. ==> 이런 경우에는 중괄호 바깥에 소괄호를 한번 더 
// 감싸주게 되면 해결 가능

// AS-IS (오류)
// const getCodeit2 = () => { name: 'Codeit' };
// console.log(getCodeit2());
// TO-BE (정상)
// const getCodeit3 = () => ({ name: 'Codeit' });
// console.log(getCodeit3());

/**
 * [정리] 한가지 유의할 점은 Arrow Function에는 argument 객체가 없다는 점이다.
 * 일반함수와 arrow 함수에서 argements 객체를 출력해보면 에러 발생 확인
 *  ==> 만약 arguments 객체를 사용하는 함수라면 Arrow함수로 대체하기 어렵다.(주의)
 */
//일반함수
// function normalFunc() {
//   console.log(arguments);
// };

// //Arrow함수
// const arrowFunc = () => {
//   console.log(arguments);
// };

// normalFunc(1, 2, 3);
// arrowFunc(1, 2, 3);

/**
 * [ this 키워드 ]
 * 
 *  : 자바스크립트 에서 this 라는 키워드는 특별한 동작을 함.
 *    this 키워드는 일반적으로 사용되지 않고 함수내부에서 사용됨.
 *  특히 객체의 메소드를 만들때 중요한 역할을 함.
 * 
 */
/**
 * 브라우저 안에서 자바스크립트가 동작한다면 전역 객체인 window 객체가 
 * this 의 기본값이 됨.
 */
// console.log(this); // window 객체가 줄력됨(브라우저 에서만)

// this키워드는 객체의 메소드를 만들때 중요한 역할을 한다.
// const user = {
//   firstName: 'Tess',
//   lastName: 'Jang',
//   getFulName: function() {
//     return `${user.firstName} ${user.lastName}`;
//   }
// };

// console.log(user.getFulName());

// 그런데 이 메소드(getFulName())를 다른 객체에서도 적용하고 싶어서
// 다음과 같이 함수 외부로 분리하게 된다면 
// 이때부터 문제가 발생하기 시작...
// function getFulName() {
//   return `${user.firstName} ${user.lastName}`;
// };

// const user = {
//   firstName: 'Tess',
//   lastName: 'Jang',
//   getFulName: getFulName
// };

// const admin = {
//   firstName: 'Alex',
//   lastName: 'Kim',
//   getFulName: getFulName
// };

// console.log('user: ', user.getFulName());
// // user객체만 바라보기 때문에 admin 객체에서 호출하더라도
// // 결과적으로 user객체의 프로퍼티만 사용하게 됨.
// console.log('admin: ', admin.getFulName()); 

/**
 * 위와 같은 상황에서 this 키워드가 유용하게 활용됨
 */
// function getFulName() {
  // this로 바꾸어줌
  // 자바스크립트 에서 this는 함수를 호출한 객체를 가르키는 키워드
  
  // 코드를 작성할 때 값이 미리 결정되는게 아니라 ..
  // 함수가 호출될 때 어떤 객체가 그 함수를 호출했는지에 따라..
  // 상대적으로 값이 변하게 된다는 특징이 있음.
//   return `${this.firstName} ${this.lastName}`;
// };

// const user = {
//   firstName: 'Tess',
//   lastName: 'Jang',
//   getFulName: getFulName
// };

// const admin = {
//   firstName: 'Alex',
//   lastName: 'Kim',
//   getFulName: getFulName
// };

// console.log('user: ', user.getFulName());
// console.log('admin: ', admin.getFulName()); 

/**
 * this 키워드 : 어떤 객체의 메소드로 호출되는 경우
 *              함수를 호출한 this가 객체에 담기기 때문에
 *              똑같은 함수를 호출했지만 콘솔에는 각각 다른 객체가 출력된다.
 */
// function printThis(){
//   console.log(this); // this 객체 
// };

// const myObj = {
//   content: 'myObj',
//   printThis: printThis
// };

// const otherObj = {
//   content: 'otherObj',
//   printThis: printThis
// };

// myObj.printThis();
// otherObj.printThis();

/**
 *  [ 주의할 점 ]
 *  Arrow함수와 일반함수 와의 가장 중요한 차이가 this 키워드 이다.
 *  일반함수와 Arrow함수는 this 를 다루는 방식이 다르다.
 * 
 *   
 */

// print 함수를 arrow 함수로 바꾸어서 실행하면
// 모든 결과가 window 객체임(콘솔모드)
/**
 *  (원인) Arrow함수 에서의 this값은 일반함수 처럼 호출한 대상에 따라
 *  상대적으로 변하는게 아니라 Arrow함수가 선언되기 직전의 this값과 
 *  똑같은 값을 가지고 동작하게 되는데..  아래 코드에서 arrow 코드가
 *  선언되기 직전의 this는 윈도우 객체이다.
 *  그래서 코드를 실행 했을때 윈도우 객체가 출력된다. 
 *  ==> 이런 케이스 에는(this)  Arrow함수 보다는 일반 함수가 권장됨
 */
// const printThis = () => {
//   console.log(this); // this 객체 
// };

// const myObj = {
//   content: 'myObj',
//   printThis: printThis
// };

// const otherObj = {
//   content: 'otherObj',
//   printThis: printThis
// };

// myObj.printThis();
// otherObj.printThis();

/**
 * [ 정리 ] 자바스크립트 에서 this 키워드가 동작하는 방식
 *  
 */


/**
 *  [ 4. 자바스크립틔 문법과 표현 ]
 * 
 *  [ 조건을 다루는 표현식 ]
 *   :  조건연산자 (Conditional operator)
 *    ES2015이전 에서는 조건을 다루는 방법이 if문과 switch문 뿐이었음   
 */

//ES2015 이전
// if (조건)  {
//   //조건이 true 일때 동작
// } else {
//   //조건이 false 일때 동작
// }

// switch (값) {
//   case A:
//       //값이 A와 일치할 때 동작
//       break;
//     default:
//       // 값과 일치하는 case 없을때 동작  
// }

/**
 * ES2015 이후 조건연산자는 위와 같은 문장을 다루는 방식을 
 * 사용하지 않고 표현식을 사용하여 간결하게 표현 가능.
 */
// 조건 ? true 할때 표현식 : false 할때 표현식
/**
 *  조건이 true 일때는 물음표(?) 다음에 false 일때는 콜론(:) 다음에 표현식을
 *  작성해 주면 된다.
 *  삼항 연산자 (Ternary operator) 라고 불리기도 함
 */
// 조건연산자 코드 예 (시험의 결과를 알려주는 코드)
// const CUT_OFF = 80;

// function passChecker(score) {
//   // return score > CUT_OFF ? '합격' : '불합격'; //좀더 간결한 코드
//   if (score > CUT_OFF) {
//     return '합격';
//   } else {
//     return '불합격';
//   }
// };

// console.log(passChecker(75));

/** 
 * 조건 연산자가 모든 if를 대체할 수 없다
 * if내에 return 한다던가 변수를 할당한다던가 하면 사용불가
 */


/**
 *  [ Spread 구문 ]
 * 
 *  : ES2015 에서 새롭게 등장한 문법.
 *    배열을 다룰때 유용하게 활용됨.  펼치다 라는 의미처럼 여러개의 값을 
 *    묶은 배열을 다시 각각의 개별값으로 펼치는 문법이다.
 * 
 *    사용법 : 배열앞에 마침표 3개를 붙여준다.
 */
// Spread 구문
// const iNumbers = [1, 2, 3];
// console.log(...iNumbers);  // 앞에 마침표 3개를 붙여준다
// // 대괄호가 벗겨지고 아래 개별값 처럼 펼쳐진다고 보면 된다.
// console.log(1, 2, 3);

/**
 * 마침표3개 붙이는 방식이 Rest Parameter 와 유사함.
 * (차이점)
 * Rest Parameter는 여려개의 아규먼트를 하나의 파라미터로 묶는 방식이고
 * Spread 구분은 하나로 묶여있는 값을 각각의 개별값으로 펼치는 방식이다.
 */
/**
 * Spread 구문을 활용하면 배열을 좀 더 편리하게 복사할 수 있다.
 */

// Spread 구문
// const iNumbers = [1, 2, 3];
// console.log(...iNumbers); 

// // Rest Parameter
// const sumAll = (...args) => {
//   let sum = 0;
//   for (let arg of args) {
//     sum += arg;
//   }
//   return sum;
// };
// console.log(sumAll(1, 2, 3, 4));



// 1) 객체 타입의 값들은 변수에 직접 할당되는게 아니라 주소값이 참조된다.
// const webPublishing = ['HTML', 'CSS'];
// const interactiveWeb = webPublishing;

// interactiveWeb.push('JavaScript');

// console.log('webPublishing: ', webPublishing);
// console.log('interactiveWeb: ', interactiveWeb);

// 2) 그래서 이런 경우는 slice 메소드를 활용해서 배열을 복사해야 한다고 배웟다.
// const webPublishing = ['HTML', 'CSS'];
// const interactiveWeb = webPublishing.slice();

// interactiveWeb.push('JavaScript');

// console.log('webPublishing: ', webPublishing);
// console.log('interactiveWeb: ', interactiveWeb);

// 3) 이렇게 spread구문을 활용하면 메소드를 사용하지 않고도 배열을 복사할 수 있다.
// const webPublishing = ['HTML', 'CSS'];
// const interactiveWeb = [...webPublishing];

// interactiveWeb.push('JavaScript');

// console.log('webPublishing: ', webPublishing);
// console.log('interactiveWeb: ', interactiveWeb);

// 4) 심지어 spread구문을 사용할 때는 바로 요소를 추가 할 수도 있다.
// 좀더 직관적이고 간단하게 배열을 다룰 수 있게 된다.
// const webPublishing = ['HTML', 'CSS'];
// const interactiveWeb = [...webPublishing, 'Javascript'];

// console.log('webPublishing: ', webPublishing);
// console.log('interactiveWeb: ', interactiveWeb);

// 5) 여러배열을 합칠때도 각 배열을 spread 구문으로 펼쳐서 
//    두 배열이 합쳐진 새로운 배열을 간단하게 만들 수 있다.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);




















































































































































