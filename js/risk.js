/**
 * Created by bankeys-01 on 2016/8/12.
 */
$(document).ready(function () {
    // var aLevel = [
    // 	[
    // 		[50,60],
    // 		[61,70],
    // 		[71,80],
    // 		[81,90],
    // 		[91,100]
    // 	],
    // 	[
    // 		[10,20],
    // 		[21,40],
    // 		[41,60],
    // 		[61,80],
    // 		[81,100]
    // 	]
    // ];
    $(".btn_submit").click(function () {
        var aQustion = $("#QABox ul");
        var aLen = aQustion.length;

        var score = 0;
        for (var i = 1; i <= aLen; i++) {
            var oChecked = $("input[name='q" + i + "']:checked");
            if (oChecked.length > 0) {
                score += parseInt(oChecked.val());
            }
            else {
                alert("第" + i + "题未做选择！");
                return false;
            }
        }
        var ris = "";
        if (50 >=parseInt(score)) {
            ris="保守型";
        }else if(70 >=parseInt(score) &&parseInt(score) >= 51){
            ris="稳健性";
        }else if(80 >=parseInt(score)&& parseInt(score) >= 71){
            ris="平衡型";
        }else if(90 >=parseInt(score) &&parseInt(score)>= 81){
            ris="成长型";
        }else if(100 >=parseInt(score) &&parseInt(score) >= 91){
            ris="成熟型";
        }
        var a = {assessType: ris};
        var ua = navigator.userAgent.toLowerCase();
        if (/iphone|ipad|ipod/.test(ua)) {
            submitBtnClick(JSON.stringify(a));
        } else if (/android/.test(ua)) {
            window.bankeys.androidSubmit(JSON.stringify(a));
        }
    });
});