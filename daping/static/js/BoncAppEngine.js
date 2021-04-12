
//用一个iframe向原生代码发送urlScheme
function callObject(uri) {
    var BAEIframe = document.createElement('iframe');
    BAEIframe.style.display = 'none';
    BAEIframe.src = uri;
    document.documentElement.appendChild(BAEIframe);
    setTimeout(function () { document.documentElement.removeChild(BAEIframe) }, 0)
};

boncAppEngine = {
    //设备对象
    device: {
        //原生获取设备信息成功的回调句柄，其中包括用户的经度、纬度、移动速度及其他
        successHandler: function (deviceInfo) { },
        //原生获取设备信息失败的回调句柄
        errorHandler: function (error) { },
        //js调用获取设备信息
        getDeviceInfo: function (success, error) {
            this.successHandler = success;
            this.errorHandler = error;
            var uri = 'mobile-service://?object=device&command=getDeviceInfo';
            callObject(uri);
        },
        //原生设备震动完成之后的回调
        vibrateFinishHandler: function () { },
        //js调用设备震动
        vibrate: function (repeatCount, finish) {
            var uri = 'mobile-service://?object=device&command=vibrate&params=[' + repeatCount + ']';
            this.vibrateFinishHandler = finish;
            callObject(uri);
        }
    },
    //定位对象locationManager；
    locationManager: {
        //原生定位成功的回调句柄，其中包括用户的经度、纬度、移动速度及其他
        successHandler: function (location) { },
        //原生定位失败的回调句柄
        errorHandler: function (error) { },
        //js调用开始定位，原生平台（ios、android）会通过原生代码调用handler回调
        start: function (success, error) {
            this.successHandler = success.bind(this);
            this.errorHandler = error.bind(this);
            var uri = 'mobile-service://?object=locationManager&command=start';
            callObject(uri);
        },
        //js调用停止定位（当页面不在需要定位功能时，请务必调用此函数关闭定位，保持电量）
        stop: function () {
            var uri = 'mobile-service://?object=locationManager&command=stop';
            callObject(uri);
        }
    },
    //加速度计
    accelerometer: {
        //原生回调返回加速度计信息的句柄
        successHandler: function (data) { },
        //原生回调错误信息的句柄
        errorHandler: function (error) { },
        //js调用开始采集加速度信息
        start: function (success, error) {
            this.successHandler = success;
            this.errorHandler = error;
            var uri = 'mobile-service://?object=accelerometer&command=start';
            callObject(uri);
        },
        //js调用停止采集加速度信息
        stop: function () {
            var uri = 'mobile-service://?object=accelerometer&command=stop';
            callObject(uri);
        }
    },
    //相机需要获取的媒体类型
    mediaType: {
        JPEG: 0,
        PNG: 1
    },
    //相机对象camera
    camera: {
        //原生拍照成功的回调句柄，其中包括照片数据Base64编码的字符串，以及照片的类型；
        successHandler: function (imageInfo) { },
        //原生拍照发生错误的回调句柄
        errorHandler: function (errror) { },
        //原生用户取消拍照的回调句柄
        cancelHandler: function () { },
        //js调用拍照
        takePhoto: function (mediaType, quality, success, cancle, error) {
            this.successHandler = success;
            this.cancleHandler = cancle;
            this.errorHandler = error;
            var uri = 'mobile-service://?object=camera&command=takePhoto&params=[' + mediaType + ',' + quality + ']';
            callObject(uri);
        }
    },
    //手机通讯录对象contacts
    contacts: {
        //原生创建联系人成功的回调句柄
        newContactSuccessHandler: function (conatactInfo) { },
        //原生创建联系人取消的回调句柄
        newContactCancleHandler: function () { },
        //原生访问联系人出错的回到句柄
        newContactErrorHandler: function (errror) { },
        //js调用获取联系人
        newContact: function (success, cancle, error) {
            this.newContactSuccessHandler = success;
            this.newContactCancleHandler = cancle;
            this.newContactErrorHandler = error;
            var uri = 'mobile-service://?object=contacts&command=newContact';
            callObject(uri);
        },
        //选择联系人成功的回调句柄
        chooseContactSuccessHandler: function (conatactInfo) { },
        //选择联系人取消的回调句柄
        chooseContactCancleHandler: function () { },
        //选择联系人错误的回调句柄
        chooseContactErrorHandler: function (errror) { },
        //js调用选择联系人
        chooseContact: function (success, cancle, error) {
            this.chooseContactSuccessHandler = success;
            this.chooseContactCancleHandler = cancle;
            this.chooseContactErrorHandler = error;
            var uri = 'mobile-service://?object=contacts&command=chooseContact';
            callObject(uri);
        }
    },
    //二维码扫描器对象codeScanner；
    codeScanner: {
        //原生扫描成功的回调句柄，其中包括用户的经度、纬度、移动速度及其他
        successHandler: function (codeInfo) { },
        //原生扫描失败的回调句柄
        errorHandler: function (error) { },
        //原生用户取消扫描操作的回调句柄
        cancleHandler: function () { },
        //js调用扫描
        scan: function (success, cancle, error) {
            this.successHandler = success;
            this.cancleHandler = cancle;
            this.errorHandler = error;
            var uri = 'mobile-service://?object=codeScanner&command=scan';
            callObject(uri);
        }
    },
    //组织结构树成员选择
    organizerPicker: {
        //原生选择成员成功的回调句柄，其中包括用户的经度、纬度、移动速度及其他
        successHandler: function (memberList) { },
        //原生选择成员失败的回调句柄
        errorHandler: function (error) { },
        //原生选择成员取消扫描操作的回调句柄
        cancleHandler: function () { },
        //js调用扫描
        show: function (selections, multiSelectionEnabled, success, cancle, error) {
            this.successHandler = success;
            this.cancleHandler = cancle;
            this.errorHandler = error;
            var arrStr = '';
            if (selections instanceof Array) {
                selections.forEach(function (item, index) {
                    arrStr = arrStr + '"' + item + '"';
                    if (index !== selections.length - 1) {
                        arrStr = arrStr + ',';
                    }
                })
            }
            var uri = 'mobile-service://?object=organizerPicker&command=show&params=[[' + arrStr + '],' + multiSelectionEnabled + ']';
            console.log(uri);
            callObject(uri);
        }
    },
    //设置导航
    webNavigation: {
        successHandler: function (success) { },
        errorHandler: function (error) { },
        //点击右上角导航后的操作
        parentItemHandler: function (id) { },
        //点击展出的弹出框的操作
        childItemHandler: function (id) { },
        //navigationBg控制背景，navigationModule控制导航栏显示
        setNaviagtionShowStyle: function (navigationSetting, success, error) {
            this.successHandler = success;
            this.errorHandler = error;
            var uri = 'mobile-service://?object=webNavigation&command=navigationShowStyle&params=' + navigationSetting + '';
            callObject(uri);
        },
        //设置导航标题  titleObj中标题对应的key为navigationTitle
        setNaviagtionTitle: function (titleObj) {
            var uri = 'mobile-service://?object=webNavigation&command=setNaviagtionTitle&params=' + titleObj + '';
            callObject(uri);
        }
    },
    //文件
    file: {
        //查看文件 fileObj中文件地址对应的key为fileUrl
        successHandler: function (success) { },
        errorHandler: function (error) { },
        viewFile: function (fileObj, success, error) {
            this.successHandler = success;
            this.errorHandler = error;
            var uri = 'mobile-service://?object=file&command=viewFile&params=' + fileObj + '';
            callObject(uri);
        }
    },
    //关闭浏览器
    shutdown: function () {
        var uri = 'mobile-service://?object=self&command=shutdown';
        callObject(uri);
    },
    //截屏分享
    screenShoot: {
        successHandler: function (successo) {
        },
        errorHandler: function (error) {
        },
        //flag  android截屏分三种模式截屏，flag表示采用的方式  0 截取activity  1  截取view  2 截取webview     IOS只支持一种，activity,故默认传0
        screenShoot: function (flag, success, error) {
            this.successHandler = success;
            this.errorHandler = error;
            var paramsList = [flag];
            var uri = 'mobile-service://?object=screen&command=screenShot&params=' + JSON.stringify(paramsList);
            callObject(uri);
        }
    },
    //分享文本内容或链接
    systemShare: {
        successHandler: function (successo) {
        },
        errorHandler: function (error) {
        },
        //contents,可以传输的内容 command=text contents内传输的是文本内容 command=link对应的链接
        systemShare: function (contents, success, error) {
            this.successHandler = success;
            this.errorHandler = error;
            var paramsList = [contents];
            var uri = 'mobile-service://?object=share&command=link&params=' + JSON.stringify(paramsList);
            callObject(uri);
        }
    }
}
