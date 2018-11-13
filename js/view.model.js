/**
 * Created by Administrator on 2018/4/19.
 */
var viewObj=window.parent.viewObj;
var commModel=window.parent.commModel;
var gameModel=window.parent.gameModel;

//渲染视图组件
var viewCT=[
    {
        "ctName": "topBasis1",
        "cnName": "顶部浮动容器1",
        "creatHtml":function(obj){
            var rhtml='<div class="topBasis1" style="color:'+obj.fontColor+';background-color:'+obj.bgColor+';background-image:url('+obj.bgImg+');">';
            rhtml+='<img class="iconImg" src="'+obj.iconImg+'" alt=""/>';
            rhtml+='<p class="p1">'+obj.gameName+'<span><em style="color:'+obj.downNumColor+';">'+obj.downNum+'</em>次下载</span></p>';
            rhtml+='<p class="p2"><img class="startImg" src="'+obj.startImg+'" alt=""/><span>无病毒</span><span>无广告</span></p>';
            rhtml+='<div class="downBtn">';
            rhtml+='<a href="javascript:alert(\'这已是下载区域，预览视图不提供下载\');"></a>';
            rhtml+='<img src="'+obj.downImg+'" alt=""/>';
            rhtml+='</div>';
            rhtml+='</div>';
            $(".wrap").before(rhtml);
        }
    },
    {
        "ctName": "bottomBasis1",
        "cnName": "底部浮动容器1",
        "creatHtml":function(obj){
            var rhtml='<div class="bottomBasis1">';
            rhtml+='<a href="javascript:alert(\'这已是下载区域，预览视图不提供下载\');" class="downBtn"></a>';
            rhtml+='<img src="'+obj.bgImg+'" alt=""/>';
            rhtml+='<br style="clear:both;"></div>';
            $(".wrap").before(rhtml);
        }
    },
    {
        "ctName": "basis1",
        "cnName": "基础容器1",
        "creatHtml":function(obj){
            var rhtml='<div class="basis1" style="background:'+obj.bgColor+';">';
                rhtml+='<img src="'+obj.img+'" alt=""/>';
                rhtml+='<br style="clear:both;"></div>';
            $(".wrap").append(rhtml);
        }
    },
    {
        "ctName": "textBasis",
        "cnName": "文字容器",
        "creatHtml":function(obj){
            var rhtml='<div class="textBasis" style="background:'+obj.bgColor+';color:'+obj.txtColor+';">';
            rhtml+='<p>'+obj.txt+'</p>';
            rhtml+='</div>';
            $(".wrap").append(rhtml);
        }
    },
    {
        "ctName": "downBasis",
        "cnName": "下载容器",
        "creatHtml":function(obj){
            var rhtml='<div class="downBasis" style="background:'+obj.bgColor+';">';
            rhtml+='<img src="'+obj.img+'" alt=""/>';
            rhtml+='<div class="downBtn"><a href="javascript:alert(\'这已是下载区域，预览视图不提供下载\');"></a></div>';
            rhtml+='<br style="clear:both;"></div>';
            $(".wrap").append(rhtml);
        }
    },
    {
        "ctName": "bnBasis1",
        "cnName": "轮播容器1",
        "creatHtml":function(obj){
            var bgH=(obj.bgHeight/commModel.uiWidth).toFixed(3);
            var bW=(obj.bWidth/commModel.uiWidth).toFixed(3);
            var bH=(obj.bHeight/commModel.uiWidth).toFixed(3);
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
            $(".wrap").append(styleHtml);
            $(".wrap").append(rhtml);
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
            new Swiper ('#'+obj.boxID+' .swiper-container', swObj);
        }
    }
];