/**
 * Created by bankeys-01 on 2016/8/10.
 */
window.onload = function () {
    var puts = document.getElementsByClassName("pasInput");
    for (var i = 0; i < puts.length; i++) {
        puts[i].onfocus = function () {
            this.style.backgroundColor = "#dddcda";
        };

        puts[i].onblur = function () {
            this.style.backgroundColor = "#818181";

        }

    }



    /*
     99669999996669999996699666699666999966699666699
     99699999999699999999699666699669966996699666699
     99669999999999999996699666699699666699699666699
     99666699999999999966666999966699666699699666699
     99666666999999996666666699666699666699699666699
     99666666669999666666666699666669966996699666699
     99666666666996666666666699666666999966669999996
     */
};