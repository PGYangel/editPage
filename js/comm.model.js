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
    "copyright":"版权所有",
    //request地址
    "requestUrl":"",
    //cnzz统计代码
    "statisUrl":"",
    //游戏keywords文案
    "pageKeywords":"游戏keywords文案",
    //游戏Description文案
    "pageDescription":"游戏Description文案",
    //html文件存放目录
    "saveUrl":""
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
    "bottomImg":"http://img.res.szgla.com/yzsy/images/login_sj/login_180402/botDownBtn_v1.jpg?v=1",
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
        "img":"http://img.res.szgla.com/editPage/img/mrImg.jpg"
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