/// <reference path="jquery-1.9.1.min.js" />
//自定义键盘
//数字随机
//版本：1.0
//2016年8月17日 13:41

(function ($) {
    var __FILE__ = $("script")[$("script").length - 1].src;//获取当前文件路径
    ///
    //$ele:使用键盘的控件
    //isRandom:是否生成随机键盘。默认false
    //isShowRealValue:控件是否显示真实值。默认false
    //maxLength：值的长度
    window.weiKeyBoard = function ($ele, isRandom, isShowRealValue, maxLength) {

        this.$ele = $ele;
        this.isShowRealValue = isShowRealValue ? isShowRealValue : false;
        this.trueValue = "";
        this.maxLength = maxLength;
        this.isRandom=isRandom?isRandom:false;
    }
    var numMap = {};
    weiKeyBoard.prototype.createKeyBoard = function () {
        var me = this;
        var $ele = me.$ele;
        var isShowRealValue = me.isShowRealValue;
        var maxLength = me.maxLength;
        var isRandom = me.isRandom;

        var lastIndex = __FILE__.lastIndexOf("/");
        var rootPath = __FILE__.substring(0, lastIndex + 1);
        numMap = {};
        if ($("#weiKeyBoard").length != 0) {
            $("#weiKeyBoard").remove();
        }
        if (isRandom) {
            $("body").append(' <table id="weiKeyBoard"><tr ><td colspan="3" id="firstTd" style="background-image: url(' + rootPath + 'v.png);background-size:30px; height:30px;background-repeat:no-repeat;background-position:center">&nbsp;</td></tr><tr><td class="weiKeyNum">' + random() + '</td><td class="weiKeyNum">' + random() + '</td><td class="weiKeyNum">' + random() + '</td></tr><tr><td class="weiKeyNum">' + random() + '</td><td class="weiKeyNum">' + random() + '</td><td class="weiKeyNum">' + random() + '</td></tr><tr><td class="weiKeyNum">' + random() + '</td><td class="weiKeyNum">' + random() + '</td><td class="weiKeyNum">' + random() + '</td></tr><tr><td style="background-color:#dfdfdf;text-align:center"  class="weiKeyNum"></td><td class="weiKeyNum">' + random() + '</td><td style="background-color: #dfdfdf; background-image: url(' + rootPath + 'back.png);background-repeat:no-repeat;background-position:center;background-size:45px;" value="back" class="weiKeyNum"></td></tr></table>');
        } else {
            $("body").append(' <table id="weiKeyBoard"><tr ><td colspan="3" id="firstTd" style="background-image: url(' + rootPath + 'v.png);background-size:30px; height:30px;background-repeat:no-repeat;background-position:center">&nbsp;</td></tr><tr><td class="weiKeyNum">1</td><td class="weiKeyNum">2</td><td class="weiKeyNum">3</td></tr><tr><td class="weiKeyNum">4</td><td class="weiKeyNum">5</td><td class="weiKeyNum">6</td></tr><tr><td class="weiKeyNum">7</td><td class="weiKeyNum">8</td><td class="weiKeyNum">9</td></tr><tr><td style="background-color:#dfdfdf;text-align:center"  class="weiKeyNum"></td><td class="weiKeyNum">0</td><td style="background-color: #dfdfdf; background-image: url(' + rootPath + 'back.png);background-repeat:no-repeat;background-position:center;background-size:45px;" value="back" class="weiKeyNum"></td></tr></table>');
        }
      
        $("#firstTd").click(function () {
            $("#weiKeyBoard").hide();
        });
        $(".weiKeyNum").bind("touchstart", function () {
            $(this).css("background-color", "#808080");
            if (me.onKeyPress) {
                me.onKeyPress($(this).text(), Math.floor(Math.random() * 10));
                return;
            }
            if ($(this).text()) {

                if ($ele.val().length != maxLength) {

                    if (isShowRealValue) {
                        var newValue = $ele.val() + $(this).text();
                        $ele.val(newValue);
                    } else {
                        var newValue = $ele.val() + Math.floor(Math.random() * 10);
                        $ele.val(newValue);
                        me.trueValue = me.trueValue + $(this).text();
                    }

                }
            } else {
                var value = $(this).attr("value");
                if (value == "back") {
                    var eleText = $ele.val();
                    $ele.val(eleText.substring(0, eleText.length - 1));
                    if (!isShowRealValue) {//不显示真值
                        me.trueValue = me.trueValue.substring(0, me.trueValue.length - 1);

                    }
                }
            }


        });
        $(".weiKeyNum").bind("touchend", function () {
            if ($(this).text()) {
                $(this).css("background-color", "#ffffff");
            } else {
                $(this).css("background-color", " #dfdfdf");
            }

        });
    };

    weiKeyBoard.prototype.getRealValue = function () {
        return this.trueValue;
    };

    //按键点击事件
    //参数1：realValue:真是值
    //参数2：rendomValue:随机值，即假值
    weiKeyBoard.prototype.onKeyPress = undefined;

    function random() {
        var result = null;
        var nowNum = Math.floor(Math.random() * 10);
        if (numMap[nowNum.toString()]) {
            result = random();
        } else {
            result = nowNum;
        }
        numMap[nowNum.toString()] = true;
        return result;
    }



})(jQuery);