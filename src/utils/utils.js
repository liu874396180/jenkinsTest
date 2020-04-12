export default {
    //拷贝a对象的属性值到b对象
  copy: function (a, b) {
    for (var key in a) {
      b[key] = a[key];
    }
  },
  //深度拷贝
  clone: function (obj) {
    if (obj === null) return null;
    var o = this.isArray(obj) ? [] : {};
    for (var i in obj) {
      o[i] = (obj[i] instanceof Date) ? new Date(obj[i].getTime()) : (typeof obj[i] === "object" ? this.clone(obj[i]) : obj[i]);
    }
    return o;
  },
  // 判断是否为数组
  isArray: function (obj) {
    return Object.prototype.toString.apply(obj) === "[object Array]";
  },
  isDate: function (obj) {
    return Object.prototype.toString.apply(obj) === "[object Date]";
  },
  guid: function () {
    function _s4() {
      return Math
        .floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return _s4() + _s4() + '-' + _s4() + '-' + _s4() + '-' + _s4() + '-' + _s4() + _s4() + _s4();
  },
  /// 生成唯一编码(纯数字)
  /// 唯一编码生成规则为-年月日、时间戳、id、随机数(4位)
  ///
  createUID: function (key) {
    var date = new Date(),
      uid = '';
    var random = Math.random().toString().substr(14);
    uid = date.format('yyyyMMdd') + date.getTime();
    if (key) {
      uid += key;
    }
    uid += random;
    return uid;
  },
  /// 在容器里创建一个图片显示，根据src显示图片。图片的大小是自动等比缩小或者放大。
  /// @param params.model 图片适应模式，0为宽高自适应裁剪显示，1为宽，2为高。3为宽高自适合。
  ///
  imgShowWithSrc: function (src, parentQ, params, callback) {
    // alert(444);
    var param = $.extend({
      // 图片适应模式，0为根据容器宽高适应，1为宽，2为高。
      model: 0,
      width: 500,
      height: 500,
      isBeyond: true, //超出指定大小才适配
      imgQ: null //图片加入
    }, params);
    var img = new Image();
    img.src = src;
    img.onload = function () {
      var img = null;
      if (!param.imgQ) {
        img = $(parentQ).append("<img src='" + src + "' style='vertical-align: middle;margin-right:16px;'>").children().last();
      } else {
        img = param.imgQ;
      }
      var w = this.width;
      var h = this.height;
      //alert(333);

      //专为题目展示写的。
      if (param.model == 5 || param.model == 0) {
        // $(img).css("position", "absolute");
        var bili_w = param.width / this.width;
        var bili_h = param.height / this.height;
        //图片超出范围才适配
        if (params.isBeyond == false || (this.width > param.width || this.height > param.height)) {
          if (bili_h > bili_w) {
            w = this.width * bili_w;
            h = this.height * bili_w;
            $(img).css("width", w);
            $(img).css("height", h);
            // $(img).css("top", (param.height - h) / 2);
          } else {
            w = this.width * bili_h;
            h = this.height * bili_h;
            $(img).css("width", w);
            $(img).css("height", h);
            // $(img).css("left", (param.width - w) / 2);
          }
        }
      } else
        // 宽高自适应显示。
        if (param.model == 1) {
          $(img).css("position", "absolute");
          var bili_w = $(parentQ).width() / this.width;
          var bili_h = $(parentQ).height() / this.height;
          if (bili_w > bili_h) {
            $(img).css("width", this.width * bili_w);
            $(img).css("height", this.height * bili_w);
            $(img).css("top", (this.height * bili_w - $(parentQ).height()) / -2);
          } else {
            $(img).css("width", this.width * bili_h);
            $(img).css("height", this.height * bili_h);
            $(img).css("left", (this.width * bili_h - $(parentQ).width()) / -2);
          }
        } else if (param.model == 2) {
          var bili = $(parentQ).width() / this.width;
          $(img).css("width", this.width * bili);
          $(img).css("height", this.height * bili);
        } else if (param.model == 3) {
          var bili = $(parentQ).height() / this.height;
          $(img).css("width", this.width * bili);
          $(img).css("height", this.height * bili);
        } else if (param.model == 4) {
          $(img).css("position", "absolute");
          var bili_w = $(parentQ).width() / this.width;
          var bili_h = $(parentQ).height() / this.height;
          if (bili_h > bili_w) {
            w = this.width * bili_w;
            h = this.height * bili_w;
            $(img).css("width", w);
            $(img).css("height", h);
            $(img).css("top", ($(parentQ).height() - h) / 2);
          } else {
            w = this.width * bili_h;
            h = this.height * bili_h;
            $(img).css("width", w);
            $(img).css("height", h);
            $(img).css("left", ($(parentQ).width() - w) / 2);
          }
        } else if (param.model == 6) {
          $(img).css("position", "absolute");
          var bili_w = $(parentQ).width() / this.width;
          var bili_h = $(parentQ).height() / this.height;
          console.log("bili_w", bili_w, bili_h);
          if (bili_w > bili_h) {
            console.log("bili_w 000 1");
            $(img).css("width", this.width * bili_w);
            $(img).css("height", this.height * bili_w);
            $(img).css("top", (this.height * bili_w - $(parentQ).height()) / -2);
            $(img).css("left", 0);
          } else {
            $(img).css("width", this.width * bili_h);
            $(img).css("height", this.height * bili_h);
            $(img).css("left", (this.width * bili_h - $(parentQ).width()) / -2);
            $(img).css("top", 0);
          }
        } else {
          if (config.release === false) console.log("不支持只模式");
        }
      if (callback != undefined) {
        callback(img, w, h);
      }
    };
  },

  // 在容器里创建一个图片显示，根据src显示图片。图片的大小是自动等比缩小或者放大。
  // @param params.model 图片适应模式，0为宽高自适应裁剪显示，1为宽，2为高。3为宽高自适合。
  imgShow: function (img, ctn, params, callback) {
    params = params || undefined;
    if (params) {
      params.isAdd = false;
      params.imgQ = img;
    }
    this.imgShowWithSrc(img.attr("src"), ctn, params, callback);
  },
  // 去除img标签
  cleanImgTag: function (html) {
    html = html.replace(/<img.*?>|<img.*?\/>/gi, '');
    return html;
  },
  //判断浏览器版本
  //1:谷歌
  isBrowser: function () {
    var userAgent = window.navigator.userAgent,
      rMsie = /(msie\s|trident.*rv:)([\w.]+)/,
      rFirefox = /(firefox)\/([\w.]+)/,
      rOpera = /(opera).+version\/([\w.]+)/,
      rChrome = /(chrome)\/([\w.]+)/,
      rSafari = /version\/([\w.]+).*(safari)/;
    var browserName = navigator.userAgent.toLowerCase();
    //系统版本
    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    var downloadUrl = "";
    var sysType = 0;
    if (isWin) {
      sysType = 1;
      downloadUrl = "https://www.baidu.com/link?url=oQI4ZqSgzbLQ623gl86Ru2t6qoeKmLYLlxzpimpdJlhd5UD089u93dXrzyzJhLSzrmWup8LFpJ5XxI6r-u-dDyXp7fYY29rIT3odGpsGQEa&wd=&eqid=b2f7c3c200003237000000025acf0bc4";
    }
    if (isMac) {
      sysType = 2;
      downloadUrl = "http://172.168.0.94:9999/sw.bos.baidu.com/sw-search-sp/software/24cfe13c55d9d/googlechrome_mac_59.0.3071.109.dmg";
    }

    //返回结果
    var result = {
      "sys": sysType,
      'downloadUrl': downloadUrl,
      //浏览器类型
      browser: -1,
      //是否是移动端
      isMobile: false,
      //浏览器版本
      version: -1,
      //是否支持当前浏览器
      isSupport: false,
      isLowVersion: false,
    };
    //谷歌
    if (/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)) {
      result.browser = 1;
      var match = rChrome.exec(userAgent.toLowerCase());
      var version = parseInt(match[2]);
      result.version = version;
      result.isSupport = true;
      if (version < 53) {
        result.isLowVersion = true;
      }

      //是否是手机
      var isMobile = false;
      if (navigator.userAgent.indexOf("Android") != -1) {
        isMobile = true;
      }
      result.isMobile = isMobile;

    }
    //IE
    else if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
      result.browser = 2;
      // var match = rMsie.exec(userAgent.toLowerCase());
      // var version = parseInt(match[2]);
      // result.version = version;
      // if(config.release == false){
      //   result.isSupport = true;
      //   if (version < 9) {
      //     result.isLowVersion = true;
      //   }
      // }

      //  console.log("IE");
    }
    //火狐
    else if (/firefox/i.test(browserName)) {
      result.browser = 3;
      var match = rFirefox.exec(userAgent.toLowerCase());
      var version = parseInt(match[2]);
      result.version = version;
      result.isSupport = true;
      if (version < 52) {
        result.isLowVersion = true;
      }
    } else if (/opera/i.test(browserName)) {
      result.browser = 4;
      //  alert("Opera");
    } else if (/webkit/i.test(browserName) && !(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))) {
      //1为手机，2为ipad
      var appleType = 0;
      var isMobile = false;
      if (navigator.userAgent.indexOf("iPhone") != -1) {
        appleType = 1;
        isMobile = true;
      }
      if (navigator.userAgent.indexOf("iPad") != -1) {
        appleType = 2;
        isMobile = true;
      }
      result.isSupport = true;
      result.appleType = appleType;
      result.browser = 5;
      result.isMobile = isMobile;
      //  alert("Safari");
    } else {
      result.browser = 0;
      //  alert("unKnow");
    }
    console.log("浏览器信息：", result);
    return result;
  },
  /**
   * 是否在当前页面
   */
  isCurrentPage: function () {
    var hiddenProperty = 'hidden' in document ? 'hidden' :
      'webkitHidden' in document ? 'webkitHidden' :
        'mozHidden' in document ? 'mozHidden' :
          null;
    // var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
    if (document[hiddenProperty]) {
      return false
    } else {
      return true;
    }
  },
  /**
   * 设置是否可复制,true为不可复制
   */
  setNotCopy: function (boolean) {
    if (boolean) {
      document.body.oncontextmenu = document.body.onbeforecopy = function () {
        return false;
      };
      // document.body.onselect = document.body.onmouseup = function() {
      //   if (document.selection) {
      //     document.selection.empty();
      //   }
      // };
      document.body.onselect = function () {
        if (document.selection) {
          document.selection.empty();
        }
      };
      document.onselectstart = function (e) {
        e = e || window.event;
        e.returnValue = false;
      }
      document.oncopy = function (e) {
        e = e || window.event;
        e.returnValue = false;
      }
      // document.onkeydown = function(e) {
      //   e = e || window.event;
      //   if ((e.ctrlKey) && (e.keyCode == 67)) {
      //     e.returnValue = false;
      //   }
      // }
    } else {
      document.body.oncontextmenu = document.body.onbeforecopy = function () {
        return true;
      };
      // document.body.onselect = document.body.onmouseup = function() {};
      document.body.onselect = function () { };
      document.onselectstart = function (e) {
        e = e || window.event;
        e.returnValue = true;
      }
      document.oncopy = function (e) {
        e = e || window.event;
        e.returnValue = true;
      }
      // document.onkeydown = function(e) {
      //   e = e || window.event;
      //   e.returnValue = true;
      // }
    }
  },
  /**
   * 获取字符出现次数
   * @param {text} text 字符串
   * @param {character} character 需要统计的字符
   */
  getCharRepeatNumber(text, character) {
    var regex = new RegExp(character, 'g'); // 使用g表示整个字符串都要匹配
    var result = text.match(regex);
    var count = !result ? 0 : result.length;
    return count;
  },
  /**
   * 格式化数字（不足长度补零，超出长度异常）
   * @param {*待格式化的数字} num
   * @param {*格式化后的长度} length
   */
  formatNum(num, length) {
    var tmpNum = num + '';
    var tmpLength = tmpNum.length;
    if (tmpLength > length) {
      throw new Error('超出长度');
    }
    for (var i = 0; i < length - tmpLength; i++) {
      num = '0' + num;
    }
    return num;
  },
  getParameter(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
      return unescape(r[2]);
    }
    return null;
  },
  /**
   * 超出字符用省略号代替
   * @param {str} str 内容
   * @param {len} len  长度
   */
  cutString(str, len) {
    console.log("zzzzzz", str, len);

    //length属性读出来的汉字长度为1
    if (str.length * 2 <= len) {
      return str;
    }
    var strlen = 0;
    var s = "";
    for (var i = 0; i < str.length; i++) {
      s = s + str.charAt(i);
      if (str.charCodeAt(i) > 128) {
        strlen = strlen + 2;
        if (strlen >= len) {
          return s.substring(0, s.length - 1) + "...";
        }
      } else {
        strlen = strlen + 1;
        if (strlen >= len) {
          return s.substring(0, s.length - 2) + "...";
        }
      }
    }
    return s;
  },
  /**
   * 数组去重
   * @param {array} array 待去重的数组
   */
  arrayDedupe(array) {
    return Array.from(new Set(array));
  },
  /**
   * 解压json
   * @param b64Data 压缩的字符编码
   */
  unZip(key){
    // 将二进制字符串转换为字符数组
    var charData = key.split('').map(function (x) { return x.charCodeAt(0); });
    // console.log('压缩后的文件大小:', charData.join(","))

    // 将数字数组转换成字节数组
    var binData = new Uint8Array(charData);

    // 解压
    var data = pako.inflate(binData);
    var array = new Uint16Array(data);
    // 将GunZip ByTAREAR转换回ASCII字符串
    // key = String.fromCharCode.apply(null, new Uint16Array(data));
    key = this.handleCodePoints(array);

    //unescape(str)  --->解压后解码，防止中午乱码
    return unescape(key);
  },
  /**
   * 压缩json
   * @param str 压缩的json字符串
   */
  zip(str){
    //escape(str)  --->压缩前编码，防止中午乱码
    var binaryString = pako.gzip(escape(str), { to: 'string' });
    return binaryString;
  },
  handleCodePoints(array) {
    var CHUNK_SIZE = 0x8000; // arbitrary number here, not too small, not too big
    var index = 0;
    var length = array.length;
    var result = '';
    var slice;
    var arr = [];
    for (var i = 0, _i = array.length; i < _i; i++) {
        arr[i] = array[i];
    }
    while (index < length) {
        slice = arr.slice(index, Math.min(index + CHUNK_SIZE, length)); // `Math.min` is not really necessary here I think
        result += String.fromCharCode.apply(null, slice);
        index += CHUNK_SIZE;
    }
    return result;
  },
  /**
   * 转义
   */
  HtmlEncode: function (str) {
    var s = "";
    if (str.length == 0)
    return "";
    s = str.replace(/&/g, "&amp;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    return s;
    },
    HtmlDecode: function (str) {
    var s = "";
    if (str.length == 0)
    return "";
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    return s;
    },
    // 导出文件
    DownloadFile: function (url) {
        if (navigator.userAgent.indexOf("MSIE 8.0") > 0 || navigator.userAgent.indexOf("MSIE 7.0") > 0) {
            location.href = url;
        }
        else {
            // var frame = $("__ipalDownloadFrame");
            // if (frame.length == 0) {
            // frame = $("<iframe id='__ipalDownloadFrame' style='display:none'>");
            // $("body").append(frame);
            var frame = document.getElementById("__ipalDownloadFrame");
            if (!frame) {
            // frame = $("<iframe id='__ipalDownloadFrame' style='display:none'>");
            frame = document.createElement("iframe");
            frame.setAttribute("id","__ipalDownloadFrame");
            frame.style.display = "none";
            // $("body").append(frame);
            document.body.appendChild(frame)
            }
        }
        // frame.attr("src", url);
        frame.src =  url;
        
    },
    // str:源中英文字符串 len:要截取的长度
    SubString: function (str, len) {
        var newLength = 0;
        var newStr = "";
        var chineseRegex = /[^\x00-\xff]/g;
        var singleChar = "";
        var strLength = str.replace(chineseRegex, "**").length;
        for (var i = 0; i < strLength; i++) {
        singleChar = str.charAt(i).toString();
        if (singleChar.match(chineseRegex) != null) {
        newLength += 2;
        }
        else {
        newLength++;
        }
        if (newLength > len) {
        break;
        }
        newStr += singleChar;
        }
        
        if (strLength > len) {
        newStr += "...";
        }
        return newStr;
    },
    // 格式化日期 (2016-02-14) 随意截取
    getFullDate(targetDate) {
      var D, y, m, d;
      if (targetDate) {
          D = new Date(targetDate);
          y = D.getFullYear();
          m = D.getMonth() + 1;
          d = D.getDate();
      } else {
          y = fullYear;
          m = month;
          d = date;
      }
      m = m > 9 ? m : '0' + m;
      d = d > 9 ? d : '0' + d;

      // return y + '-' + m + '-' + d;
      return y + '-' + m;
  },
  // 获取当月月初和月末
  getMonthChuMo(){
    var nowDate = new Date();
    var cloneNowDate = new Date();

    var fullYear = nowDate.getFullYear();
    var month = nowDate.getMonth() + 1; // getMonth 方法返回 0-11，代表1-12月
    var date = nowDate.getDate();

    var endOfMonth = new Date(fullYear, month, 0).getDate(); // 获取本月最后一天
    // 一天的时间戳(毫秒为单位)
    var timestampOfDay = 1000*60*60*24;

    // 月初，月末
    var fullStartOfMonth = this.getFullDate( cloneNowDate.setDate(1) );
    var fullEndOfMonth = this.getFullDate( cloneNowDate.setDate(endOfMonth) );

    return {
        fullStartOfMonth: fullStartOfMonth,
        fullEndOfMonth: fullEndOfMonth
    };
  },
  // 判断 运行浏览器
  isWeixinBrowser(){
    var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
            //在微信中打开
            return true;
    }
    if (ua.match(/WeiBo/i) == "weibo") {
            //在新浪微博客户端打开
            return false;
    }
    if (ua.match(/QQ/i) == "qq") {
            //在QQ空间打开
            return false;
    }
    return false;
  },
  // 获取地址栏参数----https://www.xx.com/?index=212&gnsd=fdks----{index: "212", gnsd: "fdks"}
  getRequest() {
    var url = window.location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var strs = url.substr(1);
        strs = strs.split("&");
        for(var i = 0; i < strs.length; i ++) {
            
        theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
            
        }
    }
    return theRequest;
  },
  /**
   * 根据身份号码查询出生日期，性别 年龄
   * @param {"身份号"} UUserCard 
   * @param {查询类型} num 
   */
  IdCard(UUserCard, num) {
    if (num == 1) {
        //获取出生日期
        birth = UUserCard.substring(6, 10) + "-" + UUserCard.substring(10, 12) + "-" + UUserCard.substring(12, 14);
        return birth;
    }
    if (num == 2) {
        //获取性别
        if (parseInt(UUserCard.substr(16, 1)) % 2 == 1) {
            //男
            return "男";
        } else {
            //女
            return "女";
        }
    }
    if (num == 3) {
        //获取年龄
        var myDate = new Date();
        var month = myDate.getMonth() + 1;
        var day = myDate.getDate();
        var age = myDate.getFullYear() - UUserCard.substring(6, 10) - 1;
        if (UUserCard.substring(10, 12) < month || UUserCard.substring(10, 12) == month && UUserCard.substring(12, 14) <= day) {
            age++;
        }
        return age;
    }
  },
  //校验身份证
  validIdcard(value){
    var bool = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/.test(value);
    return bool;
  },
  // 时间转换yyyy-mm-dd,
  getNowFormatDateAfter(dates) {
    var date = dates;
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
  },
  //时间转化--自定义格式
  dateFormat(date,fmt){
    if(fmt==null){
        fmt="yyyy-MM-dd hh:mm:ss";
    }
    var o = { 
        "M+" : date.getMonth()+1,                 //月份 
        "d+" : date.getDate(),                    //日 
        "h+" : date.getHours(),                   //小时 
        "m+" : date.getMinutes(),                 //分 
        "s+" : date.getSeconds(),                 //秒 
        "q+" : Math.floor((date.getMonth()+3)/3), //季度 
        "S"  : date.getMilliseconds()             //毫秒 
    }; 
    if(/(y+)/.test(fmt)) {
            fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length)); 
    }
     for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
             fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
         }
     }
    return fmt; 
  },
  // 13位毫秒时间戳转时间xxxx/xx/xx
  timeFormat(nS) {     
    return new Date(parseInt(("/Date("+nS+")/").substr(6, 13))).toLocaleDateString();     
  },
  // 时间戳转日期xxxx-xx-xx
  getDateF (timestamp) {
    if (typeof timestamp === 'string') {
        timestamp = timestamp * 1;
    }
    let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    // let h = date.getHours() + ':';
    // let m = date.getMinutes() + ':';
    // let s = date.getSeconds();
    let datess =  Y+M+D;
    return datess;
  },
      //将cloned复制到origin 深度copy
  cloneObj(cloned) {
      var newObject = null;
      if(cloned instanceof Array){
          newObject = [];
          for(var id = 0; id < cloned.length; id++){
              newObject.push(this.cloneObj(cloned[id]));
          }
      }else{
          const keys = Object.keys(cloned)//得到obj里所有的keys
          newObject = {};
          for (let i = 0; i < keys.length; i++) {
                const key = keys[i]
              if(key.indexOf("_") == 0 ){
                  continue;
              }
              if (typeof cloned[key] === 'object') {
                  newObject[key] = this.cloneObj(cloned[key])
              } else {
                  newObject[key] = cloned[key]                   
              }
          }
      }
      return newObject
  },
  //将add复制到origin，origin不包含的属性则不复制
  mergeObj(origin, add) {
    if (add === null || typeof add !== 'object') {
        return origin
    }

    var keys = Object.keys(origin)
    var i = keys.length
    while (i--) {
        if(add.hasOwnProperty(keys[i])){
            origin[keys[i]] = add[keys[i]];
        }            
    }
    return origin;
  },
//将add合并到origin，origin包含的属性则不复制
combineObj(origin, add) {
    if (add === null || typeof add !== 'object') {
        return origin
    }

    var keys = Object.keys(add)
    var i = keys.length
    while (i--) {
        if(!origin.hasOwnProperty(keys[i])){
            origin[keys[i]] = add[keys[i]];
        }            
    }
    return origin;
  },
}



/**
 * rem https://juejin.im/post/5c892273e51d4523c06c62ee
 */
// (function(doc, win) {
//     var docEl = doc.documentElement,
//       resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//       recalc = function() {
//         var clientWidth = docEl.clientWidth
//         if (!clientWidth) return
//         docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
//       }
//     if (!doc.addEventListener) return
//     win.addEventListener(resizeEvt, recalc, false)
//     win.addEventListener('pageshow', recalc, false)
//     doc.addEventListener('DOMContentLoaded', recalc, false)
//   })(document, window)
  
const fontFun = function () {
    let docEl = document.documentElement
    let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    const recalc = function () {
      let clientWidth = docEl.clientWidth
      if (!clientWidth) return
      docEl.style.fontSize = 100 * (clientWidth / 750) + 'px'
    }
    if (!document.addEventListener) return
    window.addEventListener(resizeEvt, recalc, false)
    window.addEventListener('pageshow', recalc, false)
    document.addEventListener('DOMContentLoaded', recalc, false)
  }
  export {
    fontFun
  }