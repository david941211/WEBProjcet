/**
 * Created by ACER on 2015/10/31.
 */

function getDate(){
    var date = new Date();
    var str = (date.getYear()+1900)+"-"+(date.getMonth()+1)+"-"+date.getDate()+"_"+date.getHours()+":"+date.getMinutes();
    document.write(str);
}