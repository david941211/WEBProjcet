/**
 * Created by ACER on 2015/10/31.
 */


var weight = 0.0;
var height = 100.0;

function sendWandH(){
    var text_height = document.getElementById("header_F11_tfHeight");
    var text_weight = document.getElementById("header_F11_tfWeight");
    weight = text_weight.value;
    height = text_height.value;
    var p_bmi = document.getElementById("p_11_1");
    var p_docAdv = document.getElementById("p_11_2");
    var bmi = parseFloat(getBMI()).toFixed(1);
    p_bmi.innerHTML = bmi;
    p_docAdv.innerHTML = getDocAdviseOnBMI();
}

function getWeight(){
    return weight;
}

function getHeight(){
    return height/100;
}

function getBMI(){
    return getWeight()/(getHeight()*getHeight());
}

function getDocAdviseOnBMI(){
    var BMI = getBMI();
    var lowW = parseFloat(18.5*getHeight()*getHeight()).toFixed(0);
    var highW = parseFloat(25*getHeight()*getHeight()).toFixed(0);
    var stillNeed = parseFloat((18.5*getHeight()*getHeight()-getWeight())*2988.4).toFixed(1);
    var needToReduce = parseFloat((getWeight()-24.9*getHeight()*getHeight())*2988.4).toFixed(1);
    if(BMI < 15){
        return "根据BMI分析结果显示，你的身体现在处于严重偏瘦的状态。需要多摄取点能量来补充给身体啦！你的身高的标准体重区间为"+lowW+"公斤~"+highW+"公斤。加油补充能量，还需要补充"+stillNeed+"大卡能量才能达到健康的体重哦！"
    }else if(BMI >= 15 && BMI < 18.5){
        return "根据BMI分析结果显示，你的身体现在处于偏瘦的状态。不用太过担心，可以不用只啃苹果，多吃点美食啦！保持健康的心情，再胖一点也没事！你的身高的标准体重区间为"+lowW+"公斤~"+highW+"公斤。还需要补充"+stillNeed+"大卡能量就可以达到理想的体重哦！"
    }else if(BMI >=18.5 && BMI < 25){
        return "恭喜你！根据BMI分析结果显示，你的身体现在处于最合适的状态。你的身高的标准体重区间为"+lowW+"公斤~"+highW+"公斤。继续保持良好的心态以及习惯，让你的身体一直保持在健康的状态吧！"
    }else if(BMI >= 25 && BMI < 30){
        return "根据BMI分析结果显示，你的身体现在处于轻度超重的状态。不用担心，只要适当的做一点锻炼就可以达到苗条的身材了。你的身高的标准体重区间为"+lowW+"公斤~"+highW+"公斤。只需要燃烧"+needToReduce+"大卡能量就可以达到理想的体重哦！"
    }else{
        return "根据BMI分析结果显示，你的身体现在处于肥胖的状态。加油进行一些健身活动，保持健康的心态。你的身高的标准体重区间为"+lowW+"公斤~"+highW+"公斤。还需要燃烧"+needToReduce+"大卡能量才能达到健康的体重哦！"
    }
}