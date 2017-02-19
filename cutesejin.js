var num2="";
var num3="";
var num4="";
var num5="";
var num6="";

var stopHTMLcode = false;
var jinsooflag = false;

function callvalue(num){                           // 숫자들 입력 
    num2 = document.getElementById("sejin2");
    num3 = document.getElementById("sejin4");
    num2.innerHTML += num;

    var parseIntValue = parseInt(num2.innerHTML);    //그냥은 못가져온다. parseint로 변환 
    var Twonum = parseIntValue.toString(2);                         //2진수변환 

    var tenvalue = $("#sejin2").html();
    var splitvalue = tenvalue.split('');
    


       /*() for (var i =0; i<tenvalue.length; i++){
            var str = tenvalue;
            str = str.substring(str.length , str.length - i);

            if(str.charAt("+")){
                console.log("드디어성공");
                break;
            }
           
        }*/
            
        
                                             //특수문자가 나오기 전까지 
      
        num3.innerHTML = Twonum;
        stopHTMLcode = false;

   



}

function clearvalue(){                              //클리어 
    $("#cleardiv").find("div").find("div").html(""); 
}

function callvalueHtml(code){
     num2 = document.getElementById("sejin2");      // 특수문자 입력 (한번만)
     num3 = document.getElementById("sejin4");
     if(stopHTMLcode ==false){
        num2.innerHTML += code;
        num3.innerHTML += code;
        jinsooflag = true;
     }
     stopHTMLcode = true;
}

function result(){                                  //결과 
    num2 = document.getElementById("sejin2"); 
    num3 = document.getElementById("sejin4");
    num4 = document.getElementById("Fjinsoo2");
    num5 = document.getElementById("Ejinsoo2");
    num6 = document.getElementById("Sjinsoo2");

    var resultshow = document.getElementById("sejin1");
    var resultshowTwo = document.getElementById("sejin3");
    var resultshowTwo3= document.getElementById("Fjinsoo");
    var resultshowTwo4 = document.getElementById("Ejinsoo");
    var resultshowTwo5 = document.getElementById("Sjinsoo");


    resultshow.innerHTML = eval(num2.innerHTML);

    var parseIntValue2 = parseInt(resultshow.innerHTML);    //그냥은 못가져온다. parseint로 변환 
    var Twonum2 = parseIntValue2.toString(2);                         //2진수변환 
    var Twonum3 = parseIntValue2.toString(4);                         //2진수변환 
    var Twonum4 = parseIntValue2.toString(8);                         //2진수변환 
    var Twonum5 = parseIntValue2.toString(16);                         //2진수변환 


    console.log("투넘" + Twonum2);

    resultshowTwo.innerHTML = Twonum2;
    resultshowTwo3.innerHTML = Twonum3;
    resultshowTwo4.innerHTML = Twonum4;
    resultshowTwo5.innerHTML = Twonum5;

}

