## Unit1.1：pseudo code 練習：印出 1-100 的奇數

```javascript=
for(i from 1 to 100) do
  if (n mod 2 === 1) then
    print i
  end if
end for
```

## Unit1.2：pseudo code 練習：fizz buzz

給一個數字 n，印出 1~n
但如果是 3 的倍數，改印 Fizz
碰到 5 的倍數，改印 Buzz
若同時為 3 和 5 的倍數，則印 FizzBuzz

```javascript=
for(i from 1 to n) do
  if(i % 15 === 0) print "FizzBuzz"
  else if(i % 3 === 0) print "Fizz"
  else if(i % 5 === 0) print "Buzz"
end for
```

## Unit1.3：pseudo code 練習：找最小值

假設有一副撲克牌，一次只能看一張牌，如何找到最小的牌

```javascript=
let min = arr[0]
for(i from 0 to n-1) do
  if(arr[i]< min) do
    min = arr[i]
  end if
end for
```

## Unit1.4：Homework：字串反轉

給一個字串 str，請輸出 str 反過來的結果
範例輸入：hello
範例輸出：olleh

```javascript=
let s = ""
for(i from n-1 to 0) do
  s += str[i]
end for
print s
```

## Unit1.5：Homework：陣列總和

給一個陣列 arr，裡面全都包含了數字（整數），請輸出陣列加總的結果（總和保證不超過 int 範圍）
範例輸入：[1, 2, 3]
範例輸出：6

```javascript=
let sum = 0
for(i from 0 to n-1) do
  sum += arr[i]
end for
print sum
```

## Unit1.6：Homework：找最大值

給一個陣列 arr，裡面全都包含了數字（整數），請輸出陣列中的最大值
範例輸入：[1, 2, 3]
範例輸出：3

```
let max = arr[0]
for (i from 0 to n-1) do
  if (arr[i]>max) do
    max = arr[i]
  end if
end for
print max
```
