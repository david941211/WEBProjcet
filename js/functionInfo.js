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
    if(!(BMI > 0)){
        return "医师建议你检查一下有没有将您的体重或者身高输入错误哦。否则无法帮您正确地判断BMI健康指数。";
    }
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

    function drawWeightChart(type){
        if(type == 0) {
            var data = [
                {
                    name: '体重（公斤）',
                    value: [48.2, 49.1, 49.3, 49.3, 49.2, 50.1, 49.2],
                    color: '#1f7e92',
                    line_width: 3
                }
            ];
            var chart;
            chart = new iChart.LineBasic2D({
                render: 'chart_div',
                data: data,
                title: '我的体重变化(过去7次)',
                width: 800,
                height: 400,
                coordinate: {height: '90%', background_color: '#f6f9fa'},
                sub_option: {
                    hollow_inside: false,//设置一个点的亮色在外环的效果
                    point_size: 16
                },
                labels: ["10/26", "10/27", "10/28", "10/29", "10/30", "10/31", "11/1"]
            });
        }else{
            var data = [
                {
                    name: '体重（公斤）',
                    value: [48.2, 49.1, 49.3, 49.3, 49.2, 50.1, 49.2, 49.5, 49.2],
                    color: '#1f7e92',
                    line_width: 3
                }
            ];
            var chart;
            chart = new iChart.LineBasic2D({
                render: 'chart_div',
                data: data,
                title: '我的体重变化(月)',
                width: 800,
                height: 400,
                coordinate: {height: '90%', background_color: '#f6f9fa'},
                sub_option: {
                    hollow_inside: false,//设置一个点的亮色在外环的效果
                    point_size: 16
                },
                labels: ["1号", "4号", "8号", "11号", "15号", "18号", "22号","25号","28号"]
            });
        }
        chart.draw();
    }

    function sendBFR(){
        var _age = document.getElementById("tf_age").value;
        var _height = document.getElementById("tf_height").value;
        var _weight = document.getElementById("tf_weight").value;
        var bfr = getBFR(_age, _height, _weight);
        var result;

        if(!(bfr > 0)){
            result = "建议你检查一下数据是否有输入错误。否则无法帮您正确地判断体脂率指数哦。";
        }
        if(bfr < 21){
            result = "经鉴定，你的体脂肪仅为"+parseFloat(bfr).toFixed(1)+"%!脂肪可能略微有点少咯。适当补充一些能量，保持健康的心态！";
        }else if(bfr >= 21 && bfr < 35){
            result = "经鉴定，你的体脂肪为"+parseFloat(bfr).toFixed(1)+"%!恭喜你，处于最健康的状态。继续保持良好的心情以及习惯，维持良好的身材！";
        }else if(bfr > 35){
            result = "经鉴定，你的体脂肪为"+parseFloat(bfr).toFixed(1)+"%!脂肪可能略微多了一点哦。在日常生活中抽时间做适当的运动，燃烧掉一些脂肪吧！";
        }
        var p_bfr = document.getElementById("p_12_1");
        var p_bfr_result = document.getElementById("p_12_2");
        p_bfr.innerHTML = parseFloat(bfr).toFixed(1);
        p_bfr_result.innerHTML = result;
    }

    function getBFR(_age, _height, _weight){
         //BFR% = getBFR();
         //正常体脂率17～30%
         //每超过50岁5岁便增加2~3%
        _height = _height/100;
        var _bmi = _weight / (_height * _height);
        return 1.2*_bmi - 0.23*_age - 4.4;
    }