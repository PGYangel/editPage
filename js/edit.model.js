/**
 * Created by Administrator on 2018/4/19.
 */
//左侧导航
(function(){
    var rhtml='<ul>\
                    <li><span>顶部浮动容器1</span><a href="javascript:;" onclick="addTopCTFn(\'topBasis1\')">添加</a></li>\
                    <li><span>底部浮动容器1</span><a href="javascript:;" onclick="addBottomCTFn(\'bottomBasis1\')">添加</a></li>\
                    <li><span>基础容器1</span><a href="javascript:;" onclick="addCTFn(\'basis1\')">添加</a></li>\
                    <li><span>文字容器</span><a href="javascript:;" onclick="addCTFn(\'textBasis\')">添加</a></li>\
                    <li><span>下载容器</span><a href="javascript:;" onclick="addCTFn(\'downBasis\')">添加</a></li>\
                    <li><span>轮播容器1</span><a href="javascript:;" onclick="addCTFn(\'bnBasis1\',1)">添加</a></li>\
                </ul>';
    $(".leftNav .unit").html(rhtml);
})();

//容器组件
var baseCTObj = [
    {
        "ctName": "topBasis1",
        "cnName": "顶部浮动容器1",
        "creatHtmlTxt":function(obj){
            var bindObj={
                "downNum":"275695",
                "downNumColor":"#ff302c",
                "bgColor":"#202020",
                "fontColor":"#fff"
            };
            if(obj){
                bindObj.downNum=obj.downNum;
                bindObj.downNumColor=obj.downNumColor;
                bindObj.bgColor=obj.bgColor;
                bindObj.fontColor=obj.fontColor;
            }
            var rhtml='<div class="topCT">\
                        <div class="topCTnav">\
                            <span>顶部浮动容器1</span>\
                            <a href="javascript:;" class="delBtn" onclick="delTopCTFn()">删除</a>\
                        </div>\
                        <div class="topCTrow">\
                            <span>更改ICON图：</span>\
                            <input type="file" class="topImgChange" data-type="iconImg"/>\
                        </div>\
                        <div class="topCTrow">\
                            <span>更改下载按钮图片：</span>\
                            <input type="file" class="topImgChange" data-type="downImg"/>\
                        </div>\
                        <div class="topCTrow">\
                            <span>更改星星图片：</span>\
                            <input type="file" class="topImgChange" data-type="startImg"/>\
                        </div>\
                        <div class="topCTrow">\
                            <span>下载次数：</span>\
                            <input type="text" class="textInput topValChange" value="'+bindObj.downNum+'" data-type="downNum"/>\
                        </div>\
                        <div class="topCTrow">\
                            <span>下载次数字体颜色：</span>\
                            <input type="text" class="textInput topValChange" data-type="downNumColor" value="'+bindObj.downNumColor+'" maxlength="20">\
                        </div>\
                        <div class="topCTrow">\
                            <span>更改背景图：</span>\
                            <input type="file" class="topImgChange" data-type="bgImg"/>\
                        </div>\
                        <div class="topCTrow">\
                            <span>背景色：</span>\
                            <input type="text" class="textInput topValChange" data-type="bgColor" value="'+bindObj.bgColor+'" maxlength="20">\
                        </div>\
                        <div class="topCTrow">\
                            <span>其他字体颜色：</span>\
                            <input type="text" class="textInput topValChange" data-type="fontColor" value="'+bindObj.fontColor+'" maxlength="20">\
                        </div>\
                    </div>';
            return rhtml;
        },
        "creatViewObj": function () {
            var rObj = {
                "classType":"topBasis1","gameName":gameModel.gameName,"iconImg":gameModel.gameIcon,"bgColor":"#202020","downNum":"275695",
                "downImg":"http://img.res.szgla.com/editPage/img/downBtn1.png","startImg":"http://img.res.szgla.com/editPage/img/start1.png","bgImg":"","downNumColor":"#ff302c","fontColor":"#fff"
            };
            return rObj;
        }
    },
    {
        "ctName": "bottomBasis1",
        "cnName": "底部浮动容器1",
        "creatHtmlTxt":function(obj){
            var rhtml='<div class="bottomCT">\
                        <div class="bottomCTnav">\
                            <span>底部浮动容器1</span>\
                            <a href="javascript:;" class="delBtn" onclick="delBottomCTFn()">删除</a>\
                        </div>\
                        <div class="bottomCTrow">\
                            <span>更改背景图片：</span>\
                            <input type="file" class="bottomImgChange" data-type="bgImg"/>\
                        </div>\
                    </div>';
            return rhtml;
        },
        "creatViewObj": function () {
            var rObj = {"classType":"bottomBasis1","bgImg":commModel.bottomImg};
            return rObj;
        }
    },
    {
        "ctName": "basis1",
        "cnName": "基础容器1",
        "creatHtmlTxt":function(obj){
            var bindObj={"bgColor":"#fff"};
            if(obj){
                bindObj.bgColor=obj.bgColor;
            }
            var rhtml=  '<div class="baseCT">\
                        <div class="CTnav">\
                            <span>基础容器1</span>\
                            <a href="javascript:;" class="delBtn" onclick="delCTFn(this)">删除</a>\
                            <a href="javascript:;" class="btn" onclick="downCTFn(this)">下移</a>\
                            <a href="javascript:;" class="btn" onclick="upCTFn(this)">上移</a>\
                        </div>\
                        <div class="CTrow">\
                            <span>更改背景图：</span>\
                            <input type="file" class="imgChange" data-type="img"/>\
                        </div>\
                        <div class="CTrow">\
                            <span>设置背景色：</span>\
                            <input type="text" class="textInput valChange" data-type="bgColor" value="'+bindObj.bgColor+'" maxlength="20">\
                        </div>\
                    </div>';
            return rhtml;
        },
        "creatViewObj": function () {
            var rObj = {"classType":"basis1","img":viewObj.defaultObj.img,"bgColor":"#fff"};
            return rObj;
        }
    },
    {
        "ctName": "textBasis",
        "cnName": "文字容器",
        "creatHtmlTxt":function(obj){
            var bindObj={
                "bgColor":"#fff",
                "txtColor":"#000",
                "txt":""
            };
            if(obj){
                bindObj.bgColor=obj.bgColor;
                bindObj.txtColor=obj.txtColor;
                bindObj.txt=obj.txt;
            }
            var rhtml='<div class="baseCT">\
                        <div class="CTnav">\
                            <span>文字容器</span>\
                            <a href="javascript:;" class="delBtn" onclick="delCTFn(this)">删除</a>\
                            <a href="javascript:;" class="btn" onclick="downCTFn(this)">下移</a>\
                            <a href="javascript:;" class="btn" onclick="upCTFn(this)">上移</a>\
                        </div>\
                        <div class="CTrow">\
                            <span>设置背景色：</span>\
                            <input type="text" class="textInput valChange" data-type="bgColor" value="'+bindObj.bgColor+'" maxlength="20">\
                        </div>\
                        <div class="CTrow">\
                            <span>文字颜色：</span>\
                            <input type="text" class="textInput valChange" data-type="txtColor" value="'+bindObj.txtColor+'" maxlength="20">\
                        </div>\
                        <div class="CTrow">\
                            <p>编辑文字：</p>\
                            <textarea class="textArea valChange" data-type="txt">'+bindObj.txt+'</textarea>\
                        </div>\
                    </div>';
            return rhtml;
        },
        "creatViewObj": function () {
            var rObj ={"classType":"textBasis","txt":"","bgColor":"#fff","txtColor":"#000"};
            return rObj;
        }
    },
    {
        "ctName": "downBasis",
        "cnName": "下载容器",
        "creatHtmlTxt":function(obj){
            var bindObj={
                "bgColor":"#fff",
                "downNotes":"top"
            };
            if(obj){
                bindObj.bgColor=obj.bgColor;
                bindObj.downNotes=obj.downNotes;
            }
            var rhtml='<div class="baseCT">\
                        <div class="CTnav">\
                            <span>下载容器</span>\
                            <a href="javascript:;" class="delBtn" onclick="delCTFn(this)">删除</a>\
                            <a href="javascript:;" class="btn" onclick="downCTFn(this)">下移</a>\
                            <a href="javascript:;" class="btn" onclick="upCTFn(this)">上移</a>\
                        </div>\
                        <div class="CTrow">\
                            <span>更改背景图：</span>\
                            <input type="file" class="imgChange" data-type="img"/>\
                        </div>\
                        <div class="CTrow">\
                            <span>设置背景色：</span>\
                            <input type="text" class="textInput valChange" data-type="bgColor" value="'+bindObj.bgColor+'" maxlength="20">\
                        </div>\
                        <div class="CTrow">\
                            <span>设置下载记录位置：</span>\
                            <input type="text" class="textInput valChange" data-type="downNotes" value="'+bindObj.downNotes+'" maxlength="20">\
                            <span class="red">注：该参数只能为英文</span>\
                        </div>\
                    </div>';
            return rhtml;
        },
        "creatViewObj": function () {
            var rObj = {"classType":"downBasis","img":viewObj.defaultObj.img,"bgColor":"#fff","downNotes":"top"};
            return rObj;
        }
    },
    {
        "ctName": "bnBasis1",
        "cnName": "轮播容器1",
        "creatHtmlTxt":function(obj){
            var bindObj={
                "bnType":"0",
                "bgColor":"#fff",
                "bgHeight":"300",
                "bWidth":commModel.uiWidth,
                "bHeight":"300",
                "isAutoplay":"1",
                "isLoop":"1",
                "isPagin":"0",
                "paginBG1":"#ccc",
                "paginBG2":"#007aff",
                "paginBorder1":"#ccc",
                "paginBorder2":"#007aff",
                "paginSize":"8",
                "isBtns":"0",
                "bnImgsLength":1
            };
            if(obj){
                bindObj.bnType=obj.bnType;
                bindObj.bgColor=obj.bgColor;
                bindObj.bgHeight=obj.bgHeight;
                bindObj.bWidth=obj.bWidth;
                bindObj.bHeight=obj.bHeight;
                bindObj.isAutoplay=obj.isAutoplay;
                bindObj.isLoop=obj.isLoop;
                bindObj.isPagin=obj.isPagin;
                bindObj.paginBG1=obj.paginBG1;
                bindObj.paginBG2=obj.paginBG2;
                bindObj.paginBorder1=obj.paginBorder1;
                bindObj.paginBorder2=obj.paginBorder2;
                bindObj.paginSize=obj.paginSize;
                bindObj.isBtns=obj.isBtns;
                bindObj.bnImgsLength=obj.bnImgs.length;
            }
            var shtml={
                "bnType":'<option value="0">平面左右轮播</option><option value="1">立体左右轮播</option>',
                "isAutoplay":'<option value="1">是</option><option value="0">否</option>',
                "isLoop":'<option value="1">是</option><option value="0">否</option>',
                "isPagin":'<option value="0">否</option><option value="1">是</option>',
                "isBtns":'<option value="0">否</option><option value="1">是</option>',
                "bnImgs":'<div class="CTrow BNImgs">\
                            <span>轮播图片：</span>\
                            <input type="file" class="bnImgChange" data-type="bnImgs" data-num="0"/>\
                        </div>'
            };
            //轮播形式
            if(bindObj.bnType=="1"){
                shtml.bnType='<option value="0">平面左右轮播</option><option value="1" selected>立体左右轮播</option>';
            }
            //是否自动轮播
            if(bindObj.isAutoplay=="0"){
                shtml.isAutoplay='<option value="1">是</option><option value="0" selected>否</option>';
            }
            //是否无缝轮播
            if(bindObj.isLoop=="0"){
                shtml.isLoop='<option value="1">是</option><option value="0" selected>否</option>';
            }
            //是否显示分页器
            if(bindObj.isPagin=="1"){
                shtml.isPagin='<option value="0">否</option><option value="1" selected>是</option>';
            }
            //是否显示分页器
            if(bindObj.isBtns=="1"){
                shtml.isBtns='<option value="0">否</option><option value="1" selected>是</option>';
            }
            //轮播图片
            if(bindObj.bnImgsLength>1){
                for(var i=1;i<bindObj.bnImgsLength;i++){
                    shtml.bnImgs+='<div class="CTrow BNImgs">\
                                        <span>轮播图片：</span>\
                                        <input type="file" class="bnImgChange" data-type="bnImgs" data-num="'+i+'"/>\
                                        <input value="删除" type="button" class="delBNBtn" onclick="delBNImgs(this)"/>\
                                    </div>';
                }
            }
            var rhtml='<div class="baseCT">\
                        <div class="CTnav">\
                            <span>轮播容器1</span>\
                            <a href="javascript:;" class="delBtn" onclick="delCTFn(this,1)">删除</a>\
                            <a href="javascript:;" class="btn" onclick="downCTFn(this)">下移</a>\
                            <a href="javascript:;" class="btn" onclick="upCTFn(this)">上移</a>\
                        </div>\
                        <div class="CTrow">\
                            <span>轮播形式：</span>\
                            <select class="valChange" data-type="bnType">'+ shtml.bnType + '</select>\
                        </div>\
                        <div class="CTrow">\
                            <span>更改背景图：</span>\
                            <input type="file" class="imgChange" data-type="bgImg"/>\
                        </div>\
                        <div class="CTrow">\
                            <span>更改背景色：</span>\
                            <input type="text" class="textInput valChange" data-type="bgColor" value="'+bindObj.bgColor+'" maxlength="20">\
                        </div>\
                        <div class="CTrow">\
                            <span>背景高度：</span>\
                            <input type="text" class="textInput valChange" data-type="bgHeight" value="'+bindObj.bgHeight+'" maxlength="20">\
                            <span>px</span>\
                        </div>\
                        <div class="CTrow">\
                            <span>添加轮播图片：</span>\
                            <input value="添加" type="button" class="addBNBtn" onclick="addBNImgs(this)"/>\
                        </div>'
                        +shtml.bnImgs+
                        '<div class="CTrow">\
                            <span>轮播图片宽度：</span>\
                            <input type="text" class="textInput valChange" data-type="bWidth" value="'+bindObj.bWidth+'" maxlength="20">\
                            <span>px</span>\
                        </div>\
                        <div class="CTrow">\
                            <span>轮播图片高度：</span>\
                            <input type="text" class="textInput valChange" data-type="bHeight" value="'+bindObj.bHeight+'" maxlength="20">\
                            <span>px</span>\
                        </div>\
                        <div class="CTrow">\
                            <span>是否自动轮播：</span>\
                            <select class="valChange" data-type="isAutoplay">'+shtml.isAutoplay+'</select>\
                        </div>\
                        <div class="CTrow">\
                            <span>是否无缝轮播：</span>\
                            <select class="valChange" data-type="isLoop">'+shtml.isLoop+'</select>\
                        </div>\
                        <div class="CTrow">\
                            <span>是否显示分页器：</span>\
                            <select class="valChange" data-type="isPagin">'+shtml.isPagin+'</select>\
                        </div>\
                        <div class="CTrow">\
                            <span>分页器默认背景色：</span>\
                            <input type="text" class="textInput valChange" data-type="paginBG1" value="'+bindObj.paginBG1+'" maxlength="20">\
                        </div>\
                        <div class="CTrow">\
                            <span>分页器经过背景色：</span>\
                            <input type="text" class="textInput valChange" data-type="paginBG2" value="'+bindObj.paginBG2+'" maxlength="20">\
                        </div>\
                        <div class="CTrow">\
                            <span>分页器默认边框颜色：</span>\
                            <input type="text" class="textInput valChange" data-type="paginBorder1" value="'+bindObj.paginBorder1+'" maxlength="20">\
                        </div>\
                        <div class="CTrow">\
                            <span>分页器经过边框颜色：</span>\
                            <input type="text" class="textInput valChange" data-type="paginBorder2" value="'+bindObj.paginBorder2+'" maxlength="20">\
                        </div>\
                        <div class="CTrow">\
                            <span>分页器大小：</span>\
                            <input type="text" class="textInput valChange" data-type="paginSize" value="'+bindObj.paginSize+'" maxlength="20">\
                            <span>px</span>\
                        </div>\
                        <div class="CTrow">\
                            <span>是否显示切换按钮：</span>\
                            <select class="valChange" data-type="isBtns">'+shtml.isBtns+'</select>\
                        </div>\
                        <div class="CTrow">\
                            <span>更改左按钮图片：</span>\
                            <input type="file" class="imgChange" data-type="leftBtn"/>\
                        </div>\
                        <div class="CTrow">\
                            <span>更改右按钮图片：</span>\
                            <input type="file" class="imgChange" data-type="rightBtn"/>\
                        </div>\
                    </div>';
            return rhtml;
        },
        "creatViewObj": function () {
            var rObj = {"classType":"bnBasis1","boxID":"bnBasis"+commModel.bnNum,"bnType":"0","bgImg":"","bgColor":"#fff","bgHeight":"300",
                "bnImgs":[{"img":""}],"bWidth":commModel.uiWidth,"bHeight":"300", "isLoop":1,"isAutoplay":1,"isPagin":0,
                "paginBG1":"#ccc","paginBG2":"#007aff","paginBorder1":"#ccc","paginBorder2":"#007aff","paginSize":"8","isBtns":0,"leftBtn":"","rightBtn":""
            };
            return rObj;
        }
    }
];


//最终页面生成组件
var resultHtmlCT=[
    {
        "ctName": "topBasis1",
        "cnName": "顶部浮动容器1",
        "creatHtml":function(obj){
            var rhtml='<div class="topBasis1" style="color:'+obj.fontColor+';background-color:'+obj.bgColor+';background-image:url('+obj.bgImg+');">';
            rhtml+='<img class="iconImg" src="'+obj.iconImg+'" alt=""/>';
            rhtml+='<p class="p1">'+obj.gameName+'<span><em style="color:'+obj.downNumColor+';">'+obj.downNum+'</em>次下载</span></p>';
            rhtml+='<p class="p2"><img class="startImg" src="'+obj.startImg+'" alt=""/><span>无病毒</span><span>无广告</span></p>';
            rhtml+='<div class="downBtn">';
            rhtml+='<script type="text/javascript">ShowDownLoad("下载_'+gameModel.gameName+'_"+terminal+"_hearder","立即下载")</script>';
            rhtml+='<img src="'+obj.downImg+'" alt=""/>';
            rhtml+='</div>';
            rhtml+='</div>';
            return rhtml;
        }
    },
    {
        "ctName": "bottomBasis1",
        "cnName": "底部浮动容器1",
        "creatHtml":function(obj){
            var rhtml='<div class="bottomBasis1">';
            rhtml+='<script type="text/javascript">ShowDownLoad("下载_'+gameModel.gameName+'_"+terminal+"_footer","立即下载")</script>';
            rhtml+='<img src="'+obj.bgImg+'" alt=""/>';
            rhtml+='<br style="clear:both;"></div>';
            return rhtml;
        }
    },
    {
        "ctName": "basis1",
        "cnName": "基础容器1",
        "creatHtml":function(obj){
            var rhtml='<div class="basis1" style="background:'+obj.bgColor+';">';
            rhtml+='<img src="'+obj.img+'" alt=""/>';
            rhtml+='<br style="clear:both;"></div>';
            return rhtml;
        }
    },
    {
        "ctName": "textBasis",
        "cnName": "文字容器",
        "creatHtml":function(obj){
            var rhtml='<div class="textBasis" style="background:'+obj.bgColor+';color:'+obj.txtColor+';">';
            rhtml+='<p>'+obj.txt+'</p>';
            rhtml+='</div>';
            return rhtml;
        }
    },
    {
        "ctName": "downBasis",
        "cnName": "下载容器",
        "creatHtml":function(obj){
            var rhtml='<div class="downBasis" style="background:'+obj.bgColor+';">';
            rhtml+='<img src="'+obj.img+'" alt=""/>';
            rhtml+='<div class="downBtn">';
            rhtml+='<script type="text/javascript">ShowDownLoad("下载_'+gameModel.gameName+'_"+terminal+"_'+obj.downNotes+'","立即下载")</script>';
            rhtml+='</div>';
            rhtml+='<br style="clear:both;"></div>';
            return rhtml;
        }
    },
    {
        "ctName": "bnBasis1",
        "cnName": "轮播容器1",
        "creatHtml":function(obj){
            var bgH=(obj.bgHeight/commModel.uiWidth).toFixed(3);
            var bW=(obj.bWidth/commModel.uiWidth).toFixed(3);
            var bH=(obj.bHeight/commModel.uiWidth).toFixed(3);
            var rTxt="";
            var rhtml='';
            var styleHtml='<style type="text/css">';
            if(obj.bgImg!=""){
                styleHtml+='#'+obj.boxID+'{background-color:'+obj.bgColor+';height:'+bgH+'rem;background-image:url('+obj.bgImg+');}';
            }else{
                styleHtml+='#'+obj.boxID+'{background-color:'+obj.bgColor+';height:'+bgH+'rem;}';
            }

            if(obj.bnType=="1"){
                styleHtml+='#'+obj.boxID+' .swiper-container{height:'+bgH+'rem;}';
            }else{
                styleHtml+='#'+obj.boxID+' .swiper-container{width:'+bW+'rem;height:'+bgH+'rem;margin-left:-'+(bW/2)+'rem;margin-top:-'+(bgH/2)+'rem;top:50%;left:50%;}';
            }
            styleHtml+='#'+obj.boxID+' .swiper-slide{height:'+bH+'rem;width:'+bW+'rem;}';

            styleHtml+='#'+obj.boxID+' .swiper-pagination .swiper-pagination-bullet{border-width:1px;border-style:solid;opacity:1;border-color:'+obj.paginBorder1+';background:'+obj.paginBG1+';width:'+obj.paginSize+'px;height:'+obj.paginSize+'px;}';
            styleHtml+='#'+obj.boxID+' .swiper-pagination .swiper-pagination-bullet-active{background:'+obj.paginBG2+';border-width:1px;border-style:solid;border-color:'+obj.paginBorder2+';}';
            if(parseInt(obj.isBtns)){
                if(obj.leftBtn!=""){
                    styleHtml+='#'+obj.boxID+' .swiper-button-prev{background-image:url('+obj.leftBtn+')}';
                }
                if(obj.rightBtn!=""){
                    styleHtml+='#'+obj.boxID+' .swiper-button-next{background-image:url('+obj.rightBtn+')}';
                }
            }
            styleHtml+='</style>';

            rhtml+='<div class="bnBasis1" id="'+obj.boxID+'">';
            rhtml+='<div class="swiper-container"><div class="swiper-wrapper">';
            for(var prop in obj.bnImgs){
                rhtml+='<div class="swiper-slide" style="background-image:url('+obj.bnImgs[prop]["img"]+');"></div>';
            }
            rhtml+='</div>';
            //是否显示分页器
            if(parseInt(obj.isPagin)){
                rhtml+='<section class="swiper-pagination swiper-pagination-bullets">';
                for(var prop in obj.bnImgs){
                    rhtml+='<span class="swiper-pagination-bullet"></span>';
                }
                rhtml+='</section>';
            }
            //是否显示按钮
            if(parseInt(obj.isBtns)){
                rhtml+='<div class="swiper-button-prev"></div><div class="swiper-button-next"></div>';
            }
            rhtml+='</div>';
            rhtml+='</div>';

            rTxt+=styleHtml;
            rTxt+=rhtml;
            var swObj={
                loop: obj.isLoop=="1"?true:false,
                autoplay:obj.isAutoplay=="1"?3000:0,
                autoplayDisableOnInteraction:false,
                initialSlide :0,
                slidesPerView:1,
                grabCursor: true,
                centeredSlides: true,
                nextButton:'#'+obj.boxID+' .swiper-button-next',
                prevButton:'#'+obj.boxID+' .swiper-button-prev',
                pagination:'#'+obj.boxID+' .swiper-pagination',
                coverflow: {
                    rotate:50,
                    stretch: 10,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                }
            };
            if(obj.bnType=="1"){
                swObj["effect"]='coverflow';
                swObj["initialSlide"]=1;
                swObj["slidesPerView"]='auto';
            }
            var jsHtml='<script type="text/javascript">';
            jsHtml+='new Swiper ("#'+obj.boxID+' .swiper-container", {';
            if(obj.bnType=="1"){
                jsHtml+='effect:"'+swObj.effect+'",';
            }
            jsHtml+='loop:'+swObj.loop+',';
            jsHtml+='autoplay:'+swObj.autoplay+',';
            jsHtml+='autoplayDisableOnInteraction:'+swObj.autoplayDisableOnInteraction+',';
            jsHtml+='initialSlide:'+swObj.initialSlide+',';
            jsHtml+='slidesPerView:"'+swObj.slidesPerView+'",';
            jsHtml+='grabCursor:'+swObj.grabCursor+',';
            jsHtml+='centeredSlides:'+swObj.centeredSlides+',';
            jsHtml+='nextButton:"'+swObj.nextButton+'",';
            jsHtml+='prevButton:"'+swObj.prevButton+'",';
            jsHtml+='pagination:"'+swObj.pagination+'",';
            jsHtml+='coverflow:{';
            jsHtml+='rotate:'+swObj.coverflow.rotate+',';
            jsHtml+='stretch:'+swObj.coverflow.stretch+',';
            jsHtml+='depth:'+swObj.coverflow.depth+',';
            jsHtml+='modifier:'+swObj.coverflow.modifier+',';
            jsHtml+='slideShadows:'+swObj.coverflow.slideShadows;
            jsHtml+='}';
            jsHtml+='});';
            jsHtml+='</script>';
            rTxt+=jsHtml;
            return rTxt;
        }
    }
];
