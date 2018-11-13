/**
 * Created by Administrator on 2018/4/25.
 */
//初始化页面,json:传入的json字符串，pType:初始化类型，1表示新增，2表示编辑
function initPageFn(mJson,pType){
    var myJson=eval('['+mJson+']');
    var cm=myJson[0].configModel;
    gameModel.gameName=cm.gameName;
    gameModel.gameIcon=cm.gameIcon;
    gameModel.copyright=cm.copyright;
    gameModel.requestUrl=cm.requestUrl;
    gameModel.statisUrl=cm.statisUrl;
    gameModel.pageKeywords=cm.pageKeywords;
    gameModel.pageDescription=cm.pageDescription;
    gameModel.saveUrl=cm.saveUrl;
    commModel.isDomain=cm.isDomain;
    commModel.domainTxt=cm.domainTxt;
    if(pType==2){
        var em=myJson[0].editModel;
        commModel.pageTitle=em.pageTitle;
        commModel.bodyBgColor=em.bodyBgColor;
        commModel.bnNum=em.bnNum;
        commModel.nowBNNum=em.nowBNNum;
        commModel.fileName=em.fileName;
        viewObj.topCTObj=em.topCTObj;
        viewObj.bottomCTObj=em.bottomCTObj;
        viewObj.htmlList=em.htmlList;
        editObj.isTopCT=em.isTopCT;
        editObj.isBottomCT=em.isBottomCT;
        resultUrlTxt=em.resultUrlTxt;
        initLArea();
        initRArea();
    }else{
        initRArea();
    }
}

// initPageFn(vv,2);

//保存对象
function saveObjFn(){
    creatHtmlString();
    var result;
    var resultObj={
        //编辑信息
        "editModel": {
            "pageTitle":commModel.pageTitle, //页面title文案
            "bodyBgColor":commModel.bodyBgColor,//页面背景色
            "bnNum":commModel.bnNum,//创建过轮播容器数量
            "nowBNNum":commModel.nowBNNum,//当前轮播容器数量
            "fileName":commModel.fileName,//生成文件名
            "topCTObj":viewObj.topCTObj,//顶部浮动容器拼接参数
            "bottomCTObj":viewObj.bottomCTObj,//底部浮动容器拼接参数
            "htmlList":viewObj.htmlList,//顶部浮动容器拼接参数
            "isTopCT":editObj.isTopCT,//是否有顶部浮动容器
            "isBottomCT":editObj.isBottomCT,//是否有底部浮动容器
            "resultUrlTxt":resultUrlTxt//最终生成URL地址
        },
        //配置信息
        "configModel": {
            "gameName":gameModel.gameName,//游戏名
            "gameIcon":gameModel.gameIcon,//游戏Icon地址
            "copyright":gameModel.copyright,//版权信息
            "requestUrl":gameModel.requestUrl,//request地址
            "statisUrl":gameModel.statisUrl,//cnzz统计代码
            "pageKeywords":gameModel.pageKeywords,//游戏keywords文案
            "pageDescription":gameModel.pageDescription,//游戏Description文案
            "saveUrl":gameModel.saveUrl,//html文件存放目录
            "isDomain":commModel.isDomain,//是否调用document.domain
            "domainTxt":commModel.domainTxt//调用document.domain域
        }
    };
    result=JSON.stringify(resultObj);
    console.log(result);
    return result;
}



//拼接最终html字符串
function creatHtmlString(){
    var isDomainTxt=isDomainFn();
    var topTxt=creatTopBoxFn();
    var bottomTxt=creatBottomBoxFn();
    var mainTxt=creatMainFn();
    resultHtml='<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">\
    <title>'+commModel.pageTitle+'</title>\
    <meta name="Keywords" content="'+gameModel.pageKeywords+'"/>\
    <meta name="Description" content="'+gameModel.pageDescription+'"/>\
    <meta name="renderer" content="webkit">\
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">\
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>\
    <meta name="format-detection" content="telephone=no"/>\
    <meta name="apple-mobile-web-app-capable" content="yes"/>\
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>\
    <script src="https://css.ssl.q1.com/jquery/jquery-1.11.1.min.js?v=20170506" type="text/javascript"></script>'
    +isDomainTxt+
    '<script src="'+gameModel.requestUrl + '" type="text/javascript"></script>'+
    '<link rel="stylesheet" type="text/css" href="https://css.ssl.q1.com/yzsy/css/login/swiper.min.css?v=1">\
    <script type="text/javascript" src="https://css.ssl.q1.com/yzsy/js/login/swiper.min.js?v=1"></script>\
    <script type="text/javascript">\
    var html = document.getElementsByTagName("html")[0];\
    var pageWidth = html.getBoundingClientRect().width;\
    if(pageWidth>640){\
        html.style.fontSize="640px"\
    }else{\
        html.style.fontSize = pageWidth + "px";\
    }\
    window.onresize = function() {\
        html = document.getElementsByTagName("html")[0];\
        pageWidth = html.getBoundingClientRect().width;\
        if(pageWidth>640){\
            html.style.fontSize="640px"\
        }else{\
            html.style.fontSize = pageWidth + "px";\
        }\
    }\
    </script>\
    <link href="https://css.ssl.q1.com/editPage/css/view.css?v=1" rel="stylesheet">\
    </head><body style="background-color:'+commModel.bodyBgColor+';">'
    +topTxt+bottomTxt+
    '<div class="wrap">'+mainTxt+'</div>\
    <script type="text/javascript" src="'+gameModel.statisUrl+'"></script>\
    </body>\
    </html>';
}

function isDomainFn(){
    var rhtml="";
    if(commModel.isDomain){
        rhtml='<script type="text/javascript">document.domain = "'+commModel.domainTxt+'";</script>';
    }
    return rhtml;
}

//创建顶部浮动块
function creatTopBoxFn(){
    var rhtml="";
    if(viewObj.topCTObj.length>0){
        for(var i in resultHtmlCT){
            if(resultHtmlCT[i].ctName==viewObj.topCTObj[0].classType){
                rhtml=resultHtmlCT[i].creatHtml(viewObj.topCTObj[0]);
            }
        }
    }
    return rhtml;
}
//创建底部浮动块
function creatBottomBoxFn(){
    var rhtml="";
    if(viewObj.bottomCTObj.length>0){
        for(var i in resultHtmlCT){
            if(resultHtmlCT[i].ctName==viewObj.bottomCTObj[0].classType){
                rhtml=resultHtmlCT[i].creatHtml(viewObj.bottomCTObj[0]);
            }
        }
    }
    return rhtml;
}
//创建中间内容
function creatMainFn(){
    var rhtml="";
    for(var i in viewObj.htmlList){
        for(var j in resultHtmlCT){
            if(resultHtmlCT[j].ctName==viewObj.htmlList[i].classType){
                rhtml+=resultHtmlCT[j].creatHtml(viewObj.htmlList[i]);
            }
        }
    }
    return rhtml;
}

//初始化左侧编辑区
function initLArea(){
    //顶部浮动
    if(viewObj.topCTObj.length>0){
        for (var prop in baseCTObj) {
            if(viewObj.topCTObj[0].classType==baseCTObj[prop].ctName){
                editObj.addNewTopCT=baseCTObj[prop];
                viewObj.topCTObj[0].gameName=gameModel.gameName;
                viewObj.topCTObj[0].iconImg=gameModel.gameIcon;
                break;
            }
        }
        editObj.isTopCT=true;
        $("#topBox").append(editObj.addNewTopCT.creatHtmlTxt(viewObj.topCTObj[0])).show();
    }
    //底部浮动
    if(viewObj.bottomCTObj.length>0){
        for (var prop in baseCTObj) {
            if(viewObj.bottomCTObj[0].classType==baseCTObj[prop].ctName){
                editObj.addNewBottomCT=baseCTObj[prop];
                break;
            }
        }
        editObj.isBottomCT=true;
        $("#bottomBox").append(editObj.addNewBottomCT.creatHtmlTxt(viewObj.bottomCTObj[0])).show();
    }
    //内容容器
    if(viewObj.htmlList.length>0){
        for(var i in viewObj.htmlList){
            for (var prop in baseCTObj) {
                if(viewObj.htmlList[i].classType==baseCTObj[prop].ctName){
                    editObj.addNewCT=baseCTObj[prop];
                    $("#editBox").append(editObj.addNewCT.creatHtmlTxt(viewObj.htmlList[i]));
                    break;
                }
            }
        }
    }
    initCTwz();
    initView();
}
//初始化右侧属性区
function initRArea(){
    $("#pageTitle").val(commModel.pageTitle);
    $("#bodyBgColor").val(commModel.bodyBgColor);
    $("#fileName").val(commModel.fileName);
    $("#pageUrl").val(resultUrlTxt);
    creatCodeImg();
}

