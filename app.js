let menmen = 'Hello World';
alert(menmen);

let str1 = 'Hello'
let str2 = 'World!!'
alert(str1 + str2);

let orange = 100;
let apple = 120;
if(orange < apple){
  alert('みかんの値段がリンゴより安い');
} else if(orange == apple){
  alert('みかんとリンゴが同じ値段');
} else{
  alert('リンゴの値段がみかんより安い');
}

let max = 100
let num = 1
let count = 0
while(num < max){
  num = num * 2
  count = count + 1
}
alert('2をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

let i;
let num = 0;

for(i = 1; i < 11; i++){
  num = num + i;
}

alert('1から10まで足し算した結果は' + num + 'です');
