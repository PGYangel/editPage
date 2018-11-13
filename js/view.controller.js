/**
 * Created by Administrator on 2018/4/19.
 */
initView();
//渲染视图
function initView(){
    commStyle();
    for(var i in viewObj.htmlList){
        for(var j in viewCT){
            if(viewCT[j].ctName==viewObj.htmlList[i].classType){
                viewCT[j].creatHtml(viewObj.htmlList[i]);
            }
        }
    }
    //顶部浮动渲染
    if(viewObj.topCTObj.length>0){
        for(var i in viewCT){
            if(viewCT[i].ctName==viewObj.topCTObj[0].classType){
                viewCT[i].creatHtml(viewObj.topCTObj[0]);
            }
        }
    }
    //底部浮动渲染
    if(viewObj.bottomCTObj.length>0){
        for(var i in viewCT){
            if(viewCT[i].ctName==viewObj.bottomCTObj[0].classType){
                viewCT[i].creatHtml(viewObj.bottomCTObj[0]);
            }
        }
    }
}

function commStyle(){
    try{
        document.body.style.backgroundColor=commModel.bodyBgColor;
    }catch (e){}
}
