<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
        배열객체(Arry) : 같은 변수명에 여러개의 데이터 저장
    </title>
    <script>
        /* 1. 배열선언방법 */
        /* 1-1 배열선언 */
        var aa = new Array();
        // 배열에 데이터 할당(메모리 번짓수는 0부터 시작)
        aa[0] = "가";
        aa[1] = 3;
        aa[2] = "김명철";
        aa[3] = "대한";
        aa[5] = "배열추가";
        console.log(aa);
        /* 1-2 배열 선언 + 배열에 데이터 할당(메모리 번짓수는 0부터 시작) */
        var bb = new Array("국어", "영어", "수학");
        console.log(bb);
        /* 1-3. 배열 선언 + 배열에 데이터 할당(메모리 번짓수는 0부터 시작)*/
        var cc = [1,2,3,4,5];
        console.log(cc);

        /* 2. 배열데이터 호출 */
        document.write(aa[2]+"<br>");
        document.write("aa 배열의 길이 : " + aa.length + "<br>");
        // bb에서는 영어, 배열 길이 출력
        document.write(bb[1]+"<br>");
        document.write("bb배열의 길이: "+bb.length+ "<br>");
    
        // cc에서는 3, 배열 길이 출력
        document.write(cc[2]+"<br>");
        document.write("cc배열의 길이: "+cc.length+ "<br>");
    </script>
</head>
<body>
    
</body>
</html>
