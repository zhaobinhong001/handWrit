/**
 * Created by bankeys-01 on 2016/8/10.
 */
//勾选后可点击
var chk = document.getElementById("chkBox"), sub = document.getElementById("btn_submit");
chk.onclick = function () {
    if (chk.checked == true) {
        sub.style.background = "#ee4c5b";
        sub.disabled = "";
    } else {
        sub.style.background = "#e1828b";
        sub.disabled = "disabled";
    }
}
