/**
 * Created by ACER on 2015/10/28.
 */

    //回归初始状态
    function create() {
        var board = document.getElementById("mainBoard");
        for (var j = 0; j < 10; j++) {
            for (var i = 0; i < 19; i++) {
                var block = document.createElement("div");
                block.setAttribute("id", "div_block_" + j + "_" + i);
                var block_bottom = document.createElement("button");
                block_bottom.setAttribute("class","block");
                block_bottom.setAttribute("id", "button_block_" + j + "_" + i);
                block_bottom.setAttribute("type","button");
                block_bottom.setAttribute("style", "top: " + j * 10 + "%;left:" + i * 5.263 + "%;");
                block.appendChild(block_bottom);
                board.appendChild(block);
            }
        }
        var block_function1 = document.getElementById(getBlankID("function_1"));
        block_function1.setAttribute("class","function_1");
        var block_function2 = document.getElementById(getBlankID("function_2"));
        block_function2.setAttribute("class","function_2");
        var block_function3 = document.getElementById(getBlankID("function_3"));
        block_function3.setAttribute("class","function_3");
        var block_function4 = document.getElementById(getBlankID("function_4"));
        block_function4.setAttribute("class","function_4");
        var block_function5 = document.getElementById(getBlankID("function_5"));
        block_function5.setAttribute("class","function_5");
        gainAllOnclick();
    }

    //改变背景视频是否静音
    function changeVideoMute()
    {
        var video = document.getElementById("bacVideo");
        if(video.muted){
            video.muted = false;
        }else{
            video.muted = true;
        }
    }

    //获取特殊按钮的ID
    function getBlankID(str){
        switch(str){
            case "function_1":return "button_block_3_4";
            case "function_2":return "button_block_4_4";
            case "function_3":return "button_block_5_4";
            case "function_4":return "button_block_4_5";
            case "function_5":return "button_block_5_5";
            case "f_1_1":return "button_block_3_5";
            case "f_1_2":return "button_block_4_4";
            case "f_1_new":return "button_block_3_3";
            case "f_3_1":return "button_block_4_4";
            case "f_3_2":return "button_block_5_5";
            case "f_3_3":return "button_block_6_4";
            case "f_3_new":return "button_block_5_3";
            case "f_4_1":return "button_block_4_6";
            case "f_4_2":return "button_block_5_5";
            case "f_4_new":return "button_block_3_5";

        }
    }

    function removeAllOnclick(){
        var blank_function_1 = document.getElementById(getBlankID("function_1"));
        var blank_function_2 = document.getElementById(getBlankID("function_2"));
        var blank_function_3 = document.getElementById(getBlankID("function_3"));
        var blank_function_4 = document.getElementById(getBlankID("function_4"));
        var blank_function_5 = document.getElementById(getBlankID("function_5"));
        var blank_f_1_1 = document.getElementById(getBlankID("f_1_1"));
        var blank_f_1_2 = document.getElementById(getBlankID("f_1_2"));
        var blank_f_1_new = document.getElementById(getBlankID("f_1_new"));
        var blank_f_3_1 = document.getElementById(getBlankID("f_3_1"));
        var blank_f_3_2 = document.getElementById(getBlankID("f_3_2"));
        var blank_f_3_3 = document.getElementById(getBlankID("f_3_2"));
        var blank_f_3_new = document.getElementById(getBlankID("f_3_new"));
        var blank_f_4_1 = document.getElementById(getBlankID("f_4_1"));
        var blank_f_4_2 = document.getElementById(getBlankID("f_4_2"));
        var blank_f_4_new = document.getElementById(getBlankID("f_4_new"));
        blank_function_1.removeAttribute("onclick");
        blank_function_2.removeAttribute("onclick");
        blank_function_3.removeAttribute("onclick");
        blank_function_4.removeAttribute("onclick");
        blank_function_5.removeAttribute("onclick");
        blank_f_1_1.removeAttribute("onclick");
        blank_f_1_2.removeAttribute("onclick");
        blank_f_1_new.removeAttribute("onclick");
        blank_f_3_1.removeAttribute("onclick");
        blank_f_3_2.removeAttribute("onclick");
        blank_f_3_3.removeAttribute("onclick");
        blank_f_3_new.removeAttribute("onclick");
        blank_f_4_1.removeAttribute("onclick");
        blank_f_4_2.removeAttribute("onclick");
        blank_f_4_new.removeAttribute("onclick");
    }

    function gainAllOnclick(){
        var blank_function_1 = document.getElementById(getBlankID("function_1"));
        var blank_function_2 = document.getElementById(getBlankID("function_2"));
        var blank_function_3 = document.getElementById(getBlankID("function_3"));
        var blank_function_4 = document.getElementById(getBlankID("function_4"));
        var blank_function_5 = document.getElementById(getBlankID("function_5"));
        blank_function_1.setAttribute("onclick","goFunction1()");
        blank_function_2.setAttribute("onclick","goFunction2()");
        blank_function_3.setAttribute("onclick","goFunction3()");
        blank_function_4.setAttribute("onclick","goFunction4()");
        blank_function_5.setAttribute("onclick","goFunction5()");
    }

    function goFunction1(){
        var blank_function_1 = document.getElementById(getBlankID("function_1"));
        var blank_function_2 = document.getElementById(getBlankID("function_2"));
        var blank_function_3 = document.getElementById(getBlankID("function_3"));
        var blank_function_4 = document.getElementById(getBlankID("function_4"));
        var blank_function_5 = document.getElementById(getBlankID("function_5"));
        var blank_f_1_1 = document.getElementById(getBlankID("f_1_1"));
        var blank_f_1_2 = document.getElementById(getBlankID("f_1_2"));
        var blank_f_1_new = document.getElementById(getBlankID("f_1_new"));
        removeAllOnclick();
        blank_function_1.setAttribute("class","function_1_back");
        blank_function_1.setAttribute("onclick","backFunction1()");
        blank_function_2.setAttribute("class","block");
        blank_function_3.setAttribute("class","block");
        blank_function_4.setAttribute("class","block");
        blank_function_5.setAttribute("class","block");
        blank_f_1_1.setAttribute("class","f_1_1");
        blank_f_1_1.setAttribute("onclick","initF_1_1()");
        blank_f_1_2.setAttribute("class","f_1_2");
        blank_f_1_2.setAttribute("onclick","initF_1_2()");
        blank_f_1_new.setAttribute("class","f_1_new");
        var newWindow = document.getElementById("window_f_1_1");
        newWindow.setAttribute("class","byeWindow");
        var newWindow2 = document.getElementById("window_f_1_2");
        newWindow2.setAttribute("class","byeWindow");
    }

    function backFunction1(){
        var blank_function_1 = document.getElementById(getBlankID("function_1"));
        var blank_function_2 = document.getElementById(getBlankID("function_2"));
        var blank_function_3 = document.getElementById(getBlankID("function_3"));
        var blank_function_4 = document.getElementById(getBlankID("function_4"));
        var blank_function_5 = document.getElementById(getBlankID("function_5"));
        var blank_f_1_1 = document.getElementById(getBlankID("f_1_1"));
        var blank_f_1_2 = document.getElementById(getBlankID("f_1_2"));
        var blank_f_1_new = document.getElementById(getBlankID("f_1_new"));
        removeAllOnclick();
        gainAllOnclick();
        blank_f_1_1.setAttribute("class","block");
        blank_f_1_2.setAttribute("class","block");
        blank_f_1_new.setAttribute("class","block");
        blank_function_1.setAttribute("class","function_1");
        blank_function_2.setAttribute("class","function_2");
        blank_function_3.setAttribute("class","function_3");
        blank_function_4.setAttribute("class","function_4");
        blank_function_5.setAttribute("class","function_5");
    }

    function removeALLFromF1(index){
        var blank_function_1 = document.getElementById(getBlankID("function_1"));
        var blank_f_1_1 = document.getElementById(getBlankID("f_1_1"));
        var blank_f_1_2 = document.getElementById(getBlankID("f_1_2"));
        var blank_f_1_new = document.getElementById(getBlankID("f_1_new"));
        blank_function_1.setAttribute("class","block");
        blank_f_1_1.setAttribute("class","block");
        blank_f_1_2.setAttribute("class","block");
        blank_f_1_new.setAttribute("class","block");
        removeAllOnclick();
        switch (index){
            case 1:
                blank_f_1_1.setAttribute("class","f_1_1_back");
                blank_f_1_1.setAttribute("onclick","goFunction1()");
                break;
            case 2:
                blank_f_1_2.setAttribute("class","f_1_2_back");
                blank_f_1_2.setAttribute("onclick","goFunction1()");
                break;
        }
    }

    function initF_1_1(){
        removeALLFromF1(1);
        var newWindow = document.getElementById("window_f_1_1");
        newWindow.setAttribute("class","newWindow");
        var leftVW = 5.263 * 6 - 0.14;
        newWindow.setAttribute("style","left:"+leftVW+"vw;");
    }

    function initF_1_2(){
        removeALLFromF1(2);
        var newWindow = document.getElementById("window_f_1_2");
        newWindow.setAttribute("class","newWindow");
        var leftVW = 5.263 * 5 - 0.14;
        newWindow.setAttribute("style","left:"+leftVW+"vw;top: 20vh; height: 50vh;width:36.841vw;");
    }

    function goFunction2(){
        var blank_function_1 = document.getElementById(getBlankID("function_1"));
        var blank_function_2 = document.getElementById(getBlankID("function_2"));
        var blank_function_3 = document.getElementById(getBlankID("function_3"));
        var blank_function_4 = document.getElementById(getBlankID("function_4"));
        var blank_function_5 = document.getElementById(getBlankID("function_5"));
        removeAllOnclick();
        blank_function_2.setAttribute("class","function_2_back");
        blank_function_2.setAttribute("onclick","backFunction2()");
        blank_function_1.setAttribute("class","block");
        blank_function_3.setAttribute("class","block");
        blank_function_4.setAttribute("class","block");
        blank_function_5.setAttribute("class","block");
        var newWindow = document.getElementById("window_f_2");
        newWindow.setAttribute("class","newWindow");
        var leftVW = 5.263 * 5 - 0.14;
        newWindow.setAttribute("style","left:"+leftVW+"vw;");
    }

    function backFunction2(){
        var blank_function_1 = document.getElementById(getBlankID("function_1"));
        var blank_function_2 = document.getElementById(getBlankID("function_2"));
        var blank_function_3 = document.getElementById(getBlankID("function_3"));
        var blank_function_4 = document.getElementById(getBlankID("function_4"));
        var blank_function_5 = document.getElementById(getBlankID("function_5"));
        gainAllOnclick();
        blank_function_1.setAttribute("class","function_1");
        blank_function_2.setAttribute("class","function_2");
        blank_function_3.setAttribute("class","function_3");
        blank_function_4.setAttribute("class","function_4");
        blank_function_5.setAttribute("class","function_5");
        var newWindow = document.getElementById("window_f_2");
        newWindow.setAttribute("class","byeWindow");
    }

    function goFunction3(){
        var blank_function_1 = document.getElementById(getBlankID("function_1"));
        var blank_function_2 = document.getElementById(getBlankID("function_2"));
        var blank_function_3 = document.getElementById(getBlankID("function_3"));
        var blank_function_4 = document.getElementById(getBlankID("function_4"));
        var blank_function_5 = document.getElementById(getBlankID("function_5"));
        var blank_f_3_1 = document.getElementById(getBlankID("f_3_1"));
        var blank_f_3_2 = document.getElementById(getBlankID("f_3_2"));
        var blank_f_3_3 = document.getElementById(getBlankID("f_3_3"));
        var blank_f_3_new = document.getElementById(getBlankID("f_3_new"));
        removeAllOnclick();
        blank_function_3.setAttribute("class","function_3_back");
        blank_function_3.setAttribute("onclick","backFunction3()");
        blank_function_1.setAttribute("class","block");
        blank_function_2.setAttribute("class","block");
        blank_function_4.setAttribute("class","block");
        blank_function_5.setAttribute("class","block");
        blank_f_3_1.setAttribute("class","f_3_1");
        blank_f_3_1.setAttribute("onclick","initF_3_1()");
        blank_f_3_2.setAttribute("class","f_3_2");
        blank_f_3_2.setAttribute("onclick","initF_3_2()");
        blank_f_3_3.setAttribute("class","f_3_3");
        blank_f_3_3.setAttribute("onclick","initF_3_3()");
        blank_f_3_new.setAttribute("class","f_3_new");
        var newWindow = document.getElementById("window_f_3_1");
        newWindow.setAttribute("class","byeWindow");
        var newWindow2 = document.getElementById("window_f_3_2");
        newWindow2.setAttribute("class","byeWindow");
        var newWindow3 = document.getElementById("window_f_3_3");
        newWindow3.setAttribute("class","byeWindow");
    }

    function backFunction3(){
        var blank_function_1 = document.getElementById(getBlankID("function_1"));
        var blank_function_2 = document.getElementById(getBlankID("function_2"));
        var blank_function_3 = document.getElementById(getBlankID("function_3"));
        var blank_function_4 = document.getElementById(getBlankID("function_4"));
        var blank_function_5 = document.getElementById(getBlankID("function_5"));
        var blank_f_3_1 = document.getElementById(getBlankID("f_3_1"));
        var blank_f_3_2 = document.getElementById(getBlankID("f_3_2"));
        var blank_f_3_3 = document.getElementById(getBlankID("f_3_3"));
        var blank_f_3_new = document.getElementById(getBlankID("f_3_new"));
        removeAllOnclick();
        gainAllOnclick();
        blank_f_3_1.setAttribute("class","block");
        blank_f_3_2.setAttribute("class","block");
        blank_f_3_3.setAttribute("class","block");
        blank_f_3_new.setAttribute("class","block");
        blank_function_1.setAttribute("class","function_1");
        blank_function_2.setAttribute("class","function_2");
        blank_function_3.setAttribute("class","function_3");
        blank_function_4.setAttribute("class","function_4");
        blank_function_5.setAttribute("class","function_5");
    }

    function removeALLFromF3(index){
        var blank_function_3 = document.getElementById(getBlankID("function_3"));
        var blank_f_3_1 = document.getElementById(getBlankID("f_3_1"));
        var blank_f_3_2 = document.getElementById(getBlankID("f_3_2"));
        var blank_f_3_3 = document.getElementById(getBlankID("f_3_3"));
        var blank_f_3_new = document.getElementById(getBlankID("f_3_new"));
        blank_function_3.setAttribute("class","block");
        blank_f_3_1.setAttribute("class","block");
        blank_f_3_2.setAttribute("class","block");
        blank_f_3_3.setAttribute("class","block");
        blank_f_3_new.setAttribute("class","block");
        removeAllOnclick();
        switch (index){
            case 1:
                blank_f_3_1.setAttribute("class","f_3_1_back");
                blank_f_3_1.setAttribute("onclick","goFunction3()");
                break;
            case 2:
                blank_f_3_2.setAttribute("class","f_3_2_back");
                blank_f_3_2.setAttribute("onclick","goFunction3()");
                break;
            case 3:
                blank_f_3_3.setAttribute("class","f_3_3_back");
                blank_f_3_3.setAttribute("onclick","goFunction3()");
                break;
        }
    }

    function initF_3_1(){
        removeALLFromF3(1);
        var newWindow = document.getElementById("window_f_3_1");
        newWindow.setAttribute("class","newWindow");
        var leftVW = 5.263 * 5 - 0.14;
        newWindow.setAttribute("style","left:"+leftVW+"vw;");
    }

    function initF_3_2(){
        removeALLFromF3(2);
        var newWindow = document.getElementById("window_f_3_2");
        newWindow.setAttribute("class","newWindow");
        var leftVW = 5.263 * 6 - 0.14;
        newWindow.setAttribute("style","left:"+leftVW+"vw;");
    }

    function initF_3_3(){
        removeALLFromF3(3);
        var newWindow = document.getElementById("window_f_3_3");
        newWindow.setAttribute("class","newWindow");
        var leftVW = 5.263 * 5 - 0.14;
        newWindow.setAttribute("style","left:"+leftVW+"vw;");
    }

    function goFunction4(){
        var blank_function_1 = document.getElementById(getBlankID("function_1"));
        var blank_function_2 = document.getElementById(getBlankID("function_2"));
        var blank_function_3 = document.getElementById(getBlankID("function_3"));
        var blank_function_4 = document.getElementById(getBlankID("function_4"));
        var blank_function_5 = document.getElementById(getBlankID("function_5"));
        var blank_f_4_1 = document.getElementById(getBlankID("f_4_1"));
        var blank_f_4_2 = document.getElementById(getBlankID("f_4_2"));
        var blank_f_4_new = document.getElementById(getBlankID("f_4_new"));
        removeAllOnclick();
        blank_function_4.setAttribute("class","function_4_back");
        blank_function_4.setAttribute("onclick","backFunction4()");
        blank_function_1.setAttribute("class","block");
        blank_function_2.setAttribute("class","block");
        blank_function_3.setAttribute("class","block");
        blank_function_5.setAttribute("class","block");
        blank_f_4_1.setAttribute("class","f_4_1");
        blank_f_4_1.setAttribute("onclick","initF_4_1()");
        blank_f_4_2.setAttribute("class","f_4_2");
        blank_f_4_2.setAttribute("onclick","initF_4_2()");
        blank_f_4_new.setAttribute("class","f_4_new");
        var newWindow = document.getElementById("window_f_4_1");
        newWindow.setAttribute("class","byeWindow");
        var newWindow2 = document.getElementById("window_f_4_2");
        newWindow2.setAttribute("class","byeWindow");
    }

    function backFunction4(){
        var blank_function_1 = document.getElementById(getBlankID("function_1"));
        var blank_function_2 = document.getElementById(getBlankID("function_2"));
        var blank_function_3 = document.getElementById(getBlankID("function_3"));
        var blank_function_4 = document.getElementById(getBlankID("function_4"));
        var blank_function_5 = document.getElementById(getBlankID("function_5"));
        var blank_f_4_1 = document.getElementById(getBlankID("f_4_1"));
        var blank_f_4_2 = document.getElementById(getBlankID("f_4_2"));
        var blank_f_4_new = document.getElementById(getBlankID("f_4_new"));
        removeAllOnclick();
        gainAllOnclick();
        blank_f_4_1.setAttribute("class","block");
        blank_f_4_2.setAttribute("class","block");
        blank_f_4_new.setAttribute("class","block");
        blank_function_1.setAttribute("class","function_1");
        blank_function_2.setAttribute("class","function_2");
        blank_function_3.setAttribute("class","function_3");
        blank_function_4.setAttribute("class","function_4");
        blank_function_5.setAttribute("class","function_5");
    }

    function removeALLFromF4(index){
        var blank_function_4 = document.getElementById(getBlankID("function_4"));
        var blank_f_4_1 = document.getElementById(getBlankID("f_4_1"));
        var blank_f_4_2 = document.getElementById(getBlankID("f_4_2"));
        var blank_f_4_new = document.getElementById(getBlankID("f_4_new"));
        blank_function_4.setAttribute("class","block");
        blank_f_4_1.setAttribute("class","block");
        blank_f_4_2.setAttribute("class","block");
        blank_f_4_new.setAttribute("class","block");
        removeAllOnclick();
        switch (index){
            case 1:
                blank_f_4_1.setAttribute("class","f_4_1_back");
                blank_f_4_1.setAttribute("onclick","goFunction4()");
                break;
            case 2:
                blank_f_4_2.setAttribute("class","f_4_2_back");
                blank_f_4_2.setAttribute("onclick","goFunction4()");
                break;
        }
    }

    function initF_4_1(){
        removeALLFromF4(1);
        var newWindow = document.getElementById("window_f_4_1");
        newWindow.setAttribute("class","newWindow");
        var leftVW = 5.263 * 7 - 0.14;
        newWindow.setAttribute("style","left:"+leftVW+"vw;");
    }

    function initF_4_2(){
        removeALLFromF4(2);
        var newWindow = document.getElementById("window_f_4_2");
        newWindow.setAttribute("class","newWindow");
        var leftVW = 5.263 * 6 - 0.14;
        newWindow.setAttribute("style","left:"+leftVW+"vw;");
    }

    function goFunction5(){
        var blank_function_1 = document.getElementById(getBlankID("function_1"));
        var blank_function_2 = document.getElementById(getBlankID("function_2"));
        var blank_function_3 = document.getElementById(getBlankID("function_3"));
        var blank_function_4 = document.getElementById(getBlankID("function_4"));
        var blank_function_5 = document.getElementById(getBlankID("function_5"));
        removeAllOnclick();
        blank_function_5.setAttribute("class","function_5_back");
        blank_function_5.setAttribute("onclick","backFunction5()");
        blank_function_1.setAttribute("class","block");
        blank_function_2.setAttribute("class","block");
        blank_function_3.setAttribute("class","block");
        blank_function_4.setAttribute("class","block");
        var newWindow = document.getElementById("window_f_5");
        newWindow.setAttribute("class","newWindow");
        var leftVW = 5.263 * 6 - 0.14;
        newWindow.setAttribute("style","left:"+leftVW+"vw;");
    }

    function backFunction5(){
        var blank_function_1 = document.getElementById(getBlankID("function_1"));
        var blank_function_2 = document.getElementById(getBlankID("function_2"));
        var blank_function_3 = document.getElementById(getBlankID("function_3"));
        var blank_function_4 = document.getElementById(getBlankID("function_4"));
        var blank_function_5 = document.getElementById(getBlankID("function_5"));
        gainAllOnclick();
        blank_function_1.setAttribute("class","function_1");
        blank_function_2.setAttribute("class","function_2");
        blank_function_3.setAttribute("class","function_3");
        blank_function_4.setAttribute("class","function_4");
        blank_function_5.setAttribute("class","function_5");
        var newWindow = document.getElementById("window_f_5");
        newWindow.setAttribute("class","byeWindow");
    }
