# <!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>프로젝트기본 레이아웃 실습</title>
    <link rel="stylesheet" href="./css/font.css">
    <link rel="stylesheet" href="./css/reset.css">
</head>
    <style>
    #wrap{
        width: 1200px;
        height: 800px;
        margin: 0 auto;
        text-align: center;
        position: relative;
    }
    /* 해더 */
    .dong:after {
        content: "";
        display: block;
        clear: both;
    }
    header h1{
        background-color: gray;
        width:180px;
        height:80px;
        line-height: 80px;
        /* 플롯 */
        float: left;
    }
    header .topmenu article{
        background-color: red;
        width: 1020px;
        height: 80px;
        line-height: 80px;
        /* 플롯 */
        float: left;
    }
    header .topmenu li {
        /* 플롯 */
        float: left;
        margin: 0 auto;
        margin-right: 20px;
        margin-left: 20px;
    }
    /* 메인 */
    main .lnb section {
        width: 450px;
        height: 640px;
        background-color: pink;
        /* 플롯 */
        float: left;
        line-height: 640px;
        
    }
    main .content section {
        width: 750px;
        height: 640px;
        background-color: green;
        /* 플롯 */
        float: left;
        line-height: 640px;
    }
    /* 하단 */
    footer {
        width: 1200px;
        height: 80px;
        background-color: blue;
        line-height: 80px;
    }
    /* 퀵메뉴 */
    .quick_menu {
        width: 70px;
        height: 150px;
        background-color: skyblue;
        line-height: 150px;
        position: absolute;
        left: 1200px;
        z-index: 1;
    } 

    ul li a:hover {
            color: #662;
    }
    </style>
<body>
    <div id="wrap">
        <!-- 해더 -->
        <div class="dong">
            <header>
                <h1>로고</h1>
                <div class="topmenu">
                    <article>
                        <nav>
                            <ul>
                                <li><a href="#"></a>GNB</li>
                                <li><a href="#"></a>유틸리티메뉴</li>
                                <li><a href="#"></a>검색창</li>
                            </ul>
                        </nav>    
                    </article>
                </div>
            </header>
            <!-- 헤더끝 -->
            <!-- 메인 -->
            <main role="main">
                <div class="lnb">
                    <section>
                        <p>LBB</p>
                    </section>
                </div>
                <div class="content">
                    <section>
                    <p>콘텐츠 내용들</p>
                    </section>
                </div>
                <div class="quick_menu">
                    <article>
                    <p>퀵메뉴</p>
                    </article>
                </div>
            </main>
        </div>
        <!-- 메인끝 -->
        <!-- 하단 -->
        <footer>
            <p>하단메뉴, 주소 저작권</p>
        </footer>
        <!-- 하단끝 -->

    </div>
</body>
</html>
