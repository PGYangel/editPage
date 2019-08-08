/**
 * Created by Administrator on 2018/4/25.
 */

//初始化页面,json:传入的json字符串，pType:初始化类型，1表示新增，2表示编辑
function initPageFn(mJson, pType) {
    var myJson = eval('[' + mJson + ']');
    var cm = myJson[0].configModel;
    gameModel.gameName = cm.gameName;
    gameModel.gameIcon = cm.gameIcon;
    gameModel.copyright = cm.copyright;
    gameModel.requestUrl = cm.requestUrl;
    gameModel.statisUrl = cm.statisUrl;
    gameModel.pageKeywords = cm.pageKeywords;
    gameModel.pageDescription = cm.pageDescription;
    gameModel.saveUrl = cm.saveUrl;
    commModel.isDomain = cm.isDomain;
    commModel.domainTxt = cm.domainTxt;
    if (pType == 2) {
        var em = myJson[0].editModel;
        commModel.pageTitle = em.pageTitle;
        commModel.bodyBgColor = em.bodyBgColor;
        commModel.bnNum = em.bnNum;
        commModel.nowBNNum = em.nowBNNum;
        commModel.fileName = em.fileName;
        viewObj.topCTObj = em.topCTObj;
        viewObj.bottomCTObj = em.bottomCTObj;
        viewObj.htmlList = em.htmlList;
        editObj.isTopCT = em.isTopCT;
        editObj.isBottomCT = em.isBottomCT;
        resultUrlTxt = em.resultUrlTxt;
        initLArea();
        initRArea();
       // loadColorPicker();

    } else {
        initRArea();

       // loadColorPicker();
    }

   
}
function updateBorders(color) {
    var hexColor = "transparent";
    if (color) {
        hexColor = color.toHexString();
    }
    $("#docs-content").css("border-color", hexColor);
}

function loadColorPicker()
{
    $(".txtColor").spectrum({
        allowEmpty: true,
        //color: $(this).val(),
        showInput: true,
        containerClassName: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        showAlpha: true,
        maxPaletteSize: 10,
        preferredFormat: "hex",
        localStorageKey: "color_picker",
        move: function (color) {
            updateBorders(color);
        },
        show: function () {

        },
        beforeShow: function () {

        },
        hide: function (color) {
            updateBorders(color);
        },

        palette: [
            ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)", /*"rgb(153, 153, 153)","rgb(183, 183, 183)",*/
            "rgb(204, 204, 204)", "rgb(217, 217, 217)", /*"rgb(239, 239, 239)", "rgb(243, 243, 243)",*/ "rgb(255, 255, 255)"],
            ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
            "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
            ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
            "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
            "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
            "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
            "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
            "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
            "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
            "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
            /*"rgb(133, 32, 12)", "rgb(153, 0, 0)", "rgb(180, 95, 6)", "rgb(191, 144, 0)", "rgb(56, 118, 29)",
            "rgb(19, 79, 92)", "rgb(17, 85, 204)", "rgb(11, 83, 148)", "rgb(53, 28, 117)", "rgb(116, 27, 71)",*/
            "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
            "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]
        ]
    });

}

//保存对象
function saveObjFn() {
    creatHtmlString();
    var result;
    var resultObj = {
        //编辑信息
        "editModel": {
            "pageTitle": commModel.pageTitle, //页面title文案
            "pageRemark":commModel.pageRemark, //页面备注
            "bodyBgColor": commModel.bodyBgColor,//页面背景色
            "bnNum": commModel.bnNum,//创建过轮播容器数量
            "nowBNNum": commModel.nowBNNum,//当前轮播容器数量
            "fileName": commModel.fileName,//生成文件名
            "topCTObj": viewObj.topCTObj,//顶部浮动容器拼接参数
            "bottomCTObj": viewObj.bottomCTObj,//底部浮动容器拼接参数
            "htmlList": viewObj.htmlList,//顶部浮动容器拼接参数
            "isTopCT": editObj.isTopCT,//是否有顶部浮动容器
            "isBottomCT": editObj.isBottomCT,//是否有底部浮动容器
            "resultUrlTxt": resultUrlTxt//最终生成URL地址
        },
        //配置信息
        "configModel": {
            "pageRemark": commModel.pageRemark, //页面备注
            "gameName": gameModel.gameName,//游戏名
            "gameIcon": gameModel.gameIcon,//游戏Icon地址
            "copyright": gameModel.copyright,//版权信息
            "requestUrl": gameModel.requestUrl,//request地址
            "statisUrl": gameModel.statisUrl,//cnzz统计代码
            "pageKeywords": gameModel.pageKeywords,//游戏keywords文案
            "pageDescription": gameModel.pageDescription,//游戏Description文案
            "saveUrl": gameModel.saveUrl,//html文件存放目录
            "isDomain": commModel.isDomain,//是否调用document.domain
            "domainTxt": commModel.domainTxt//调用document.domain域
        }
    };
    result = JSON.stringify(resultObj);
    return result;
}



//拼接最终html字符串
function creatHtmlString() {
    var isDomainTxt = isDomainFn();
    var topTxt = creatTopBoxFn();
    var bottomTxt = creatBottomBoxFn();
    var mainTxt = creatMainFn();
    resultHtml = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8">\
    <title>'+ commModel.pageTitle + '</title>\
    <meta name="Keywords" content="'+ gameModel.pageKeywords + '"/>\
    <meta name="Description" content="'+ gameModel.pageDescription + '"/>\
    <meta name="renderer" content="webkit">\
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">\
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>\
    <meta name="format-detection" content="telephone=no"/>\
    <meta name="apple-mobile-web-app-capable" content="yes"/>\
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>\
    <script src="https://css.ssl.q1.com/jquery/jquery-1.11.1.min.js?v=20170506" type="text/javascript"></script>'
    + isDomainTxt +
    '<script src="' + gameModel.requestUrl + '" type="text/javascript"></script>' +
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
    </head><body style="background-color:'+ commModel.bodyBgColor + ';">'
    + topTxt + bottomTxt +
    '<div class="wrap">' + mainTxt + '</div>\
    <script type="text/javascript" src="'+ gameModel.statisUrl + '"></script>\
    </body>\
    </html>';

    return resultHtml;
}

function isDomainFn() {
    var rhtml = "";
    if (commModel.isDomain) {
        rhtml = '<script type="text/javascript">document.domain = "' + commModel.domainTxt + '";</script>';
    }
    return rhtml;
}

//创建顶部浮动块
function creatTopBoxFn() {
    var rhtml = "";
    if (viewObj.topCTObj.length > 0) {
        for (var i in resultHtmlCT) {
            if (resultHtmlCT[i].ctName == viewObj.topCTObj[0].classType) {
                rhtml = resultHtmlCT[i].creatHtml(viewObj.topCTObj[0]);
            }
        }
    }
    return rhtml;
}
//创建底部浮动块
function creatBottomBoxFn() {
    var rhtml = "";
    if (viewObj.bottomCTObj.length > 0) {
        for (var i in resultHtmlCT) {
            if (resultHtmlCT[i].ctName == viewObj.bottomCTObj[0].classType) {
                rhtml = resultHtmlCT[i].creatHtml(viewObj.bottomCTObj[0]);
            }
        }
    }
    return rhtml;
}
//创建中间内容
function creatMainFn() {
    var rhtml = "";
    for (var i in viewObj.htmlList) {
        for (var j in resultHtmlCT) {
            if (resultHtmlCT[j].ctName == viewObj.htmlList[i].classType) {
                rhtml += resultHtmlCT[j].creatHtml(viewObj.htmlList[i]);
            }
        }
    }
    return rhtml;
}

//初始化左侧编辑区
function initLArea() {
    //顶部浮动
    if (viewObj.topCTObj.length > 0) {
        for (var prop in baseCTObj) {
            if (viewObj.topCTObj[0].classType == baseCTObj[prop].ctName) {
                editObj.addNewTopCT = baseCTObj[prop];
                viewObj.topCTObj[0].gameName = gameModel.gameName;
                viewObj.topCTObj[0].iconImg = gameModel.gameIcon;
                break;
            }
        }
        editObj.isTopCT = true;
        $("#topBox").append(editObj.addNewTopCT.creatHtmlTxt(viewObj.topCTObj[0])).show();
    }
    //底部浮动
    if (viewObj.bottomCTObj.length > 0) {
        for (var prop in baseCTObj) {
            if (viewObj.bottomCTObj[0].classType == baseCTObj[prop].ctName) {
                editObj.addNewBottomCT = baseCTObj[prop];
                break;
            }
        }
        editObj.isBottomCT = true;
        $("#bottomBox").append(editObj.addNewBottomCT.creatHtmlTxt(viewObj.bottomCTObj[0])).show();
    }
    //内容容器
    if (viewObj.htmlList.length > 0) {
        for (var i in viewObj.htmlList) {
            for (var prop in baseCTObj) {
                if (viewObj.htmlList[i].classType == baseCTObj[prop].ctName) {
                    editObj.addNewCT = baseCTObj[prop];
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
function initRArea() {
    $("#pageTitle").val(commModel.pageTitle);
    $("#bodyBgColor").val(commModel.bodyBgColor);
    $("#fileName").val(commModel.fileName);
    $("#pageUrl").val(resultUrlTxt);
    //creatCodeImg();
}
