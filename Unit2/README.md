## Unit2.1：實戰練習：找次大值

```javascript=
let arr = [5, 8, 6];
let max = -Infinity;
let max2 = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max2 = max;
    max = arr[i];
  } else if (arr[i] > max2) {
    max2 = arr[i];
  }
}
console.log(max, max2);
```

## Unit2.2：實戰練習：字串轉大寫

```javascript=
let str = "Hi";
let ans = "";
for (let i = 0; i < str.length; i++) {
  let code = str.charCodeAt(i);
  if (code >= 97 && code <= 122) {
    ans += String.fromCharCode(code - 32);
  } else {
    ans += str[i];
  }
}
console.log(ans);
```

## Unit2.3：實戰練習：刪除特定字元

```javascript=
let str = "hello";
let deleted = "l";
let ans = "";
for (let i = 0; i < str.length; i++) {
  if (str[i] !== deleted) {
    ans += str[i];
  }
}
console.log(ans);
```

## Unit2.4：Homework：找次小值

給一個陣列，裡面全都包含了數字（整數），請輸出陣列中的次小值
範例輸入：[1, 2, 3]
範例輸出：2

```javascript=
let arr = [10, 8, 6];
let min = Infinity;
let min2 = Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min2 = min;
    min = arr[i];
  } else if (arr[i] < min2) {
    min2 = arr[i];
  }
}
console.log(min, min2);
```

## Unit2.5：Homework：大小寫互換

給一個字串，請把字串裡的大小寫互換
範例輸入：hELLo
範例輸出：HellO

```javascript=
let str = "hELLo";
let ans = "";
for (let i = 0; i < str.length; i++) {
  let code = str.charCodeAt(i);
  if (code >= 97 && code <= 122) {
    ans += String.fromCharCode(code - 32);
  } else if (code >= 65 && code <= 90) {
    ans += String.fromCharCode(code + 32);
  } else {
    ans += str[i];
  }
}
console.log(ans);
```

## Unit2.6：Homework：印出因數

給一個正整數，請輸出他的所有因數
範例輸入：15
範例輸出：

```
1
3
5
15
```

```javascript=
let num = 30;
for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}
```
