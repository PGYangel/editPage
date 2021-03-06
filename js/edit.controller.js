﻿/**
 * Created by Administrator on 2018/4/18.
 * 模块生成js
 */
//图片上传的控件变化触发
$(".rightMain .leftBox").on("change",".imgChange",function(){
    var box=$(this).parent().parent();
    var rNum=parseInt(box.attr("data-sort"));
    var dType=$(this).attr("data-type");
    imgChange(this,rNum,dType,0);//图片传入预览视图
});

//轮播图片上传控件变化触发
$(".rightMain .leftBox").on("change",".bnImgChange",function(){
    var box=$(this).parent().parent();
    var rNum=parseInt(box.attr("data-sort"));
    var dType=$(this).attr("data-type");
    var other=[$(this).attr("data-num")];
    imgChange(this,rNum,dType,1,other);//图片传入预览视图
});

//值变化的控件触发
$(".rightMain .leftBox").on("change",".valChange",function(){
    var box=$(this).parent().parent();
    var rNum=parseInt(box.attr("data-sort"));
    var dType=$(this).attr("data-type");
    viewObj.htmlList[rNum][dType]=$(this).val();
});

//顶部浮动图片上传的控件变化触发
$(".rightMain .leftBox").on("change",".topImgChange",function(){
    var dType=$(this).attr("data-type");
    imgChange2(this,dType,1);//图片传入预览视图
});

//顶部浮动值变化的控件触发
$(".rightMain .leftBox").on("change",".topValChange",function(){
    var dType=$(this).attr("data-type");
    viewObj.topCTObj[0][dType]=$(this).val();
});

//底部浮动图片上传的控件变化触发
$(".rightMain .leftBox").on("change",".bottomImgChange",function(){
    var dType=$(this).attr("data-type");
    imgChange2(this,dType,2);//图片传入预览视图
});
//底部浮动值变化的控件触发
$(".rightMain .leftBox").on("change",".bottomValChange",function(){
    var dType=$(this).attr("data-type");
    viewObj.bottomCTObj[0][dType]=$(this).val();
});

//右侧属性值变化
$(".rightMain .rightBox").on("change",".valChange",function(){
    var dType=$(this).attr("data-type");
    eval(dType+'="'+$(this).val()+'"');
});
//生成文件名
$(".rightMain .rightBox").on("change",".pageName",function(){
    var pageName=$(this).val();
    joinResultUrl(pageName);
    $("#pageUrl").val(resultUrlTxt);
    creatCodeImg();
});
function joinResultUrl(txt){
    commModel.fileName=txt;
    resultUrlTxt=gameModel.saveUrl+txt+".html";
}

//编辑
function editBtnFn(){
    $(".editArea").show();
    $(".viewArea").hide();
    initCTwz();
}
//预览
function viewBtnFn(){
    initView();
    $(".editArea").hide();
    $(".viewArea").show();
}

//添加
function addCTFn(ctName,ctType){
    if(ctType==1){
        commModel.bnNum++;
        commModel.nowBNNum++;
    }
    for (var prop in baseCTObj) {
        if(ctName==baseCTObj[prop].ctName){
            editObj.addNewCT=baseCTObj[prop];
            viewObj.htmlList.push(baseCTObj[prop].creatViewObj());
            break;
        }
    }
    $("#editBox").append(editObj.addNewCT.creatHtmlTxt());
    initCTwz();
    initView();
}

//上移容器
function upCTFn(e){
    var box=$(e).parent().parent();
    var rNum=parseInt(box.attr("data-sort"));
    if(rNum==0){
        return false;
    }
    var oldArr=viewObj.htmlList[rNum];
    viewObj.htmlList[rNum]=viewObj.htmlList[rNum-1];
    viewObj.htmlList[rNum-1]=oldArr;
    var clone=box.clone();
    clone.insertBefore(".baseCT[data-sort="+(rNum-1)+"]");
    box.remove();
    initCTwz();
    initView();
}

//下移容器
function downCTFn(e){
    var box=$(e).parent().parent();
    var rNum=parseInt(box.attr("data-sort"));
    if(rNum==($(".baseCT").length-1)){
        return false;
    }
    var oldArr=viewObj.htmlList[rNum];
    viewObj.htmlList[rNum]=viewObj.htmlList[rNum+1];
    viewObj.htmlList[rNum+1]=oldArr;
    var clone=box.clone();
    clone.insertAfter(".baseCT[data-sort="+(rNum+1)+"]");
    box.remove();
    initCTwz();
    initView();
}

//删除容器
function delCTFn(e,ctType){
    if(ctType==1){
        commModel.nowBNNum--;
        if(commModel.nowBNNum==0){
            commModel.bnNum=0;
        }
    }
    var box=$(e).parent().parent();
    viewObj.htmlList.splice(box.attr("data-sort"),1);
    $(e).parent().parent().remove();
    initCTwz();
    initView();
}

//添加顶部浮动容器
function addTopCTFn(ctName){
    if(!editObj.isTopCT){
        for (var prop in baseCTObj) {
            if(ctName==baseCTObj[prop].ctName){
                editObj.addNewTopCT=baseCTObj[prop];
                viewObj.topCTObj.push(baseCTObj[prop].creatViewObj());
                break;
            }
        }
        editObj.isTopCT=true;
        $("#topBox").append(editObj.addNewTopCT.creatHtmlTxt()).show();
        initView();
    }else{
        alert("顶部浮动容器只允许添加一个！");
    }
}
//删除顶部浮动容器
function delTopCTFn(){
    editObj.isTopCT=false;
    viewObj.topCTObj.splice(0,1);
    $("#topBox").html("").hide();
}

//添加底部浮动容器
function addBottomCTFn(ctName){
    if(!editObj.isBottomCT){
        for (var prop in baseCTObj) {
            if(ctName==baseCTObj[prop].ctName){
                editObj.addNewBottomCT=baseCTObj[prop];
                viewObj.bottomCTObj.push(baseCTObj[prop].creatViewObj());
                break;
            }
        }
        editObj.isBottomCT=true;
        $("#bottomBox").append(editObj.addNewBottomCT.creatHtmlTxt()).show();
        initView();
    }else{
        alert("底部浮动容器只允许添加一个！");
    }
}
//删除顶部浮动容器
function delBottomCTFn(){
    editObj.isBottomCT=false;
    viewObj.bottomCTObj.splice(0,1);
    $("#bottomBox").html("").hide();
}

//初始化容器位置
function initCTwz(){
    editObj.nowCTSH=0;
    $(".baseCT").each(function(index){
        $(this).css({"top":editObj.nowCTSH+"px"}).attr("data-sort",index);
        editObj.nowCTSH+=$(this).height()+20;
    });
}

//刷新预览视图
function initView(){
    document.getElementById('view').contentWindow.location.reload(true);
}

//图片预览
function imgChange(fileEl,rNum,dType,cType,other) {
    cType=(cType == "" || cType == undefined || cType == null) ? 0 : cType;
    var file = fileEl;
    var ext=file.value.substring(file.value.lastIndexOf(".")+1).toLowerCase();
    // gif在IE浏览器暂时无法显示
    if(ext!='png'&&ext!='jpg'&&ext!='jpeg'&&ext!='gif'){
        alert("图片的格式必须为png或者jpg或者jpeg格式！");
        return;
    }
    var isIE = navigator.userAgent.match(/MSIE/)!= null;
    if(isIE) {
        alert("IE内核浏览器不支持图片预览！");
    }else {
        var fileF = file.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(fileF);
        reader.onload = function(e){
            //cType上传控件类型：1、轮播图片，else、单张图片
            if(cType==1){
                viewObj.htmlList[rNum][dType][other[0]]["img"]=this.result;
            }else{
                viewObj.htmlList[rNum][dType]=this.result;
            }
        }
    }
}

//顶部和底部图片预览
function imgChange2(fileEl,dType,cType) {
    var file = fileEl;
    var ext=file.value.substring(file.value.lastIndexOf(".")+1).toLowerCase();
    // gif在IE浏览器暂时无法显示
    if(ext!='png'&&ext!='jpg'&&ext!='jpeg'&&ext!='gif'){
        alert("图片的格式必须为png或者jpg或者jpeg格式！");
        return;
    }
    var isIE = navigator.userAgent.match(/MSIE/)!= null;
    if(isIE) {
        alert("IE内核浏览器不支持图片预览！");
    }else {
        var fileF = file.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(fileF);
        reader.onload = function(e){
            if(cType==1){
                viewObj.topCTObj[0][dType]=this.result;
            }else{
                viewObj.bottomCTObj[0][dType]=this.result;
            }
        }
    }
}

//添加轮播图片
function addBNImgs(el){
    var box=$(el).parent().parent();
    var rNum=parseInt(box.attr("data-sort"));
    var bIndex=box.find(".BNImgs").length;
    var bHtml='<div class="CTrow BNImgs">\
                    <span>轮播图片：</span>\
                    <input type="file" class="bnImgChange" data-type="bnImgs" data-num="'+bIndex+'"/>\
                    <input value="删除" type="button" class="delBNBtn" onclick="delBNImgs(this)"/>\
                </div>';
    $(bHtml).insertAfter(box.find(".BNImgs:last"));
    viewObj.htmlList[rNum]["bnImgs"].push({"img":""});
    initCTwz();
    initView();
}
//删除轮播图片
function delBNImgs(el){
    var box=$(el).parent().parent();
    var rNum=parseInt(box.attr("data-sort"));
    viewObj.htmlList[rNum]["bnImgs"].pop();
    $(el).parent().remove();
    initCTwz();
    initView();
}
//重置
function resetEditFn(){
    delTopCTFn();
    delBottomCTFn();
    viewObj.htmlList.splice(0,viewObj.htmlList.length);
    $("#editBox").html("");
    initView();
}

//下载
function downEditFn(){
    creatHtmlString();
    var blob = new Blob([resultHtml], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "test.html");
}

//二维码生成
function creatCodeImg(){
    var dataUriPngImage = document.getElementById('rwCodeImg');
    var u = resultUrlTxt,
        s = QRCode.generatePNG(u, {
            ecclevel: "M",
            format: "html",
            fillcolor: "#FFFFFF",
            textcolor: "#373737",
            margin: 4,
            modulesize: 8
        });
    dataUriPngImage.src = s;
}





