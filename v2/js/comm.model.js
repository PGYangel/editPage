/**
 * Created by Administrator on 2018/4/20.
 * 配置model
 */
//最终生成html页面的字符串
var resultHtml="";
//游戏相关model
var gameModel={
    "gameName":"御龙决",
    //游戏Icon
    "gameIcon":"http://img.res.szgla.com/yzsy/images/login_sj/login_180323/icon_ylj.png?v=1",
    //版权信息
    "copyright":"Copyright © 2009 - 2019 Glacier,Inc. All Rights Reserved.深圳冰川网络股份有限公司 版权所有",
    //request地址
    "requestUrl":"https://yzsy.ssl.q1.com/js/request_ylj.js?v=2",
    //cnzz统计代码
    "statisUrl":"https://css.ssl.q1.com/yzsy/js/statis.js?v=1",
    //游戏keywords文案
    "pageKeywords":"御龙决,御龙决手游,御龙决手机版,国战,新国战,国战手游,休闲国战,社交国战,手游,手机游戏",
    //游戏Description文案
    "pageDescription":"《御龙决》由端游原班人马打造，完美继承并延续端游背景及设定，万人国战激情上演。百套个性时装，720°全域动态视角，邀您与四千万用户再聚《御龙决》世界！",
    //html文件存放目录
    "saveUrl":"http://yzsy.q1.com/login_sj/"
};

//页面公用model
var commModel={
    //页面UI宽度
    "uiWidth":"750",
    //页面title文案
    "pageTitle":"《御龙决》",
    //是否调用document.domain
    "isDomain":true,
    "domainTxt":"q1.com",
    //页面背景色
    "bodyBgColor":"#fff",
    //生成文件名
    "fileName":"",
    "bnNum":0,//创建过轮播容器数量
    "nowBNNum":0,//当前轮播容器数量
    "bottomImg":"https://img.ssl.q1.com/editPage/img/mrImg4.png?v=2",
    //轮播插件1
    "banner1":{
        "cssUrl":"https://css.ssl.q1.com/yzsy/css/login/swiper.min.css?v=1",
        "jsUrl":"https://css.ssl.q1.com/yzsy/js/login/swiper.min.js?v=1"
    }
};

//最终生成URL地址
var resultUrlTxt="";

//预览区对象
var viewObj = {
    //顶部浮动容器拼接参数
    topCTObj:[],
    //底部浮动容器拼接参数
    bottomCTObj:[],
    //拼接html列表
    htmlList: [],
    //图片占位默认值
    defaultObj:{
        "img":"https://img.ssl.q1.com/editPage/img/mrImg1.png",
        "img2":"https://img.ssl.q1.com/editPage/img/mrImg2.png",
        "txt":"文字文字"
    }
};

//编辑区对象
var editObj ={
    nowCTSH: 0,//当前总容器高度
    addNewCT:{},//添加新容器对象
    isTopCT:false,//是否有顶部浮动容器
    addNewTopCT:{},//添加顶部浮动容器对象
    isBottomCT:false,//是否有底部浮动容器
    addNewBottomCT:{}//添加底部浮动容器对象
};
