var centerDiv1;
var leftTop;
//沉默激活
var leftDiv1;
//高危模型
var leftDiv2;
//副卡激活
var leftDiv3;
//控降套
var centerDiv2;
//控携出
var rightDiv1;
//携入携出
var rightDiv2;
var remMap = 0;
$(function () {
    /*时间*/
    setInterval(showTime, 1000);
    /*请求后台数据*/
    fetchData();
    setInterval(fetchData, 1200000);
    /*页面动效*/
    refreshAll();
    setInterval(refreshAll,60000);
    /*地图刷新*/
    refreshMap()
    setInterval(function () {
        remMap++
        refreshMap()
    },15000)
})
function refreshAll() {
    //控流失
    $('#controlLossHead1').html(leftTop.controlLossHead[0].STRATEGY);
    $('#controlLossHead2').html(leftTop.controlLossHead[0].COVER_USER);
    $('#controlLossHead3').html(leftTop.controlLossHead[0].MONTH_ACTIVERATE);

    //沉默激活
    $('#silentActivation1').html(leftDiv1.silentActivationData.headerData[0].DAY_ACTIVEUSER);
    var fd1 = leftDiv1.silentActivationData.headerData[0].MONTH_ACTIVEUSER.toString();
    if (fd1.indexOf("万") != -1) {
        fd1 = fd1.replace('万', "");
        $('#silentActivation2Unit').html('万')
    } else {
        $('#silentActivation2Unit').html('')
    }
    $('#silentActivation2').html(fd1);
    $('#silentActivation3').html(leftDiv1.silentActivationData.headerData[0].HB);
    $('#silentActivation3').parent().removeClass('font-red')
        .removeClass('font-green');
    if (leftDiv1.silentActivationData.headerData[0].HB >= 0) {
        $('#silentActivation3').parent().addClass('font-red');
        $('#silentActivation3Sj').html('↑')
    } else {
        $('#silentActivation3').parent().addClass('font-green');
        $('#silentActivation3Sj').html('↓')
    }
    $('#silentActivation4').html(leftDiv1.silentActivationData.headerData[0].MONTH_ACTIVERATE);
    var leftChart1Data = [];
    var leftChart1Xdata = [];
    for (var i = 0; i < leftDiv1.silentActivationData.chartData.length; i++) {
        leftChart1Data.push(leftDiv1.silentActivationData.chartData[i].ACTIVE_RATE);
        leftChart1Xdata.push(leftDiv1.silentActivationData.chartData[i].MONTH_ID);
    }
    leftChart1(leftChart1Data, leftChart1Xdata);

    //高危模型
    $('#highRiskModel1').html(leftDiv2.highRiskModelData.headerData[0].DAY_ACTIVEUSER)
    $('#highRiskModel2').html(leftDiv2.highRiskModelData.headerData[0].MONTH_ACTIVEUSER)
    $('#highRiskModel3').html(leftDiv2.highRiskModelData.headerData[0].HB1)
    $('#highRiskModel3').parent().removeClass('font-red')
        .removeClass('font-green');
    if (leftDiv2.highRiskModelData.headerData[0].HB1 >= 0) {
        $('#highRiskModel3').parent().addClass('font-red');
        $('#highRiskModel3Sj').html('↑')
    } else {
        $('#highRiskModel3').parent().addClass('font-green');
        $('#highRiskModel3Sj').html('↓')
    }
    $('#highRiskModel4').html(leftDiv2.highRiskModelData.headerData[0].DAY_MANAGE)
    var fd5 = leftDiv2.highRiskModelData.headerData[0].MONTH_MANAGE.toString();
    if (fd5.indexOf("万") != -1) {
        fd5 = fd5.replace('万', "");
        $('#highRiskModel5Unit').html('万')
    } else {
        $('#highRiskModel5Unit').html('')
    }
    $('#highRiskModel5').html(fd5)
    $('#highRiskModel6').html(leftDiv2.highRiskModelData.headerData[0].HB2)
    $('#highRiskModel6').parent().removeClass('font-red')
        .removeClass('font-green');
    if (leftDiv2.highRiskModelData.headerData[0].HB2 >= 0) {
        $('#highRiskModel6').parent().addClass('font-red');
        $('#highRiskModel6Sj').html('↑')
    } else {
        $('#highRiskModel6').parent().addClass('font-green');
        $('#highRiskModel6Sj').html('↓')
    }
    var leftChart2Data = [];
    var leftChart2Data2 = [];
    var leftChart2Xdata = [];
    for (var i = 0; i < leftDiv2.highRiskModelData.chartData.length; i++) {
        leftChart2Data.push(leftDiv2.highRiskModelData.chartData[i].MANAGE_RATE);
        leftChart2Data2.push(leftDiv2.highRiskModelData.chartData[i].ACTIVE_RATE);
        leftChart2Xdata.push(leftDiv2.highRiskModelData.chartData[i].MONTH_ID);
    }
    leftChart2(leftChart2Data, leftChart2Data2, leftChart2Xdata);

    //副卡激活
    $('#secondaryCardActive1').html(leftDiv3.secondaryCardActiveData.headerData[0].DAY_ACTIVEUSER)
    var fd2 = leftDiv3.secondaryCardActiveData.headerData[0].MONTH_ACTIVEUSER.toString();
    if (fd2.indexOf("万") != -1) {
        fd2 = fd2.replace('万', "");
        $('#secondaryCardActive2Unit').html('万')
    } else {
        $('#secondaryCardActive2Unit').html('')
    }
    $('#secondaryCardActive2').html(fd2)
    $('#secondaryCardActive3').html(leftDiv3.secondaryCardActiveData.headerData[0].HB)
    $('#secondaryCardActive3').parent().removeClass('font-red')
        .removeClass('font-green');
    if (leftDiv3.secondaryCardActiveData.headerData[0].HB >= 0) {
        $('#secondaryCardActive3').parent().addClass('font-red');
        $('#secondaryCardActive3Sj').html('↑')
    } else {
        $('#secondaryCardActive3').parent().addClass('font-green');
        $('#secondaryCardActive3Sj').html('↓')
    }
    $('#secondaryCardActive4').html(leftDiv3.secondaryCardActiveData.headerData[0].MONTH_ACTIVERATE)
    var leftChart3Data = [];
    var leftChart3Xdata = [];
    for (var i = 0; i < leftDiv3.secondaryCardActiveData.chartData.length; i++) {
        leftChart3Data.push(leftDiv3.secondaryCardActiveData.chartData[i].MONTH_ACTIVEUSER);
        leftChart3Xdata.push(leftDiv3.secondaryCardActiveData.chartData[i].MONTH_ID);
    }
    leftChart3(leftChart3Data, leftChart3Xdata);



    //控降套
    $('#controlLowerSleeve1').html(centerDiv2.controlLowerSleeveData.headerData[0].DAY_SETDOWN)
    var fd3 = centerDiv2.controlLowerSleeveData.headerData[0].MONTH_SETDOWN.toString();
    if (fd3.indexOf("万") != -1) {
        fd3 = fd3.replace('万', "");
        $('#controlLowerSleeve2Unit').html('万')
    } else {
        $('#controlLowerSleeve2Unit').html('')
    }
    $('#controlLowerSleeve2').html(fd3)
    $('#controlLowerSleeve3').parent().removeClass('card-pie-s')
        .removeClass('card-pie-j')
    if (centerDiv2.controlLowerSleeveData.headerData[0].HB >= 0) {
        $('#controlLowerSleeve3').parent().addClass('card-pie-j')
        $('#controlLowerSleeve3').html(centerDiv2.controlLowerSleeveData.headerData[0].HB + '%↑')
    } else {
        $('#controlLowerSleeve3').parent().addClass('card-pie-s')
        $('#controlLowerSleeve3').html(centerDiv2.controlLowerSleeveData.headerData[0].HB + '%↓')
    }
    $('#controlLowerSleeve4').html(centerDiv2.controlLowerSleeveData.headerData[0].MONTH_SETDOWNREVE)
    $('#controlLowerSleeve5').html(centerDiv2.controlLowerSleeveData.headerData[0].AVERAGE_INCOMEMONTH)
    var centerChart1Data = [];
    var centerChart1Xdata = [];
    for (var i = 0; i < centerDiv2.controlLowerSleeveData.chartData.length; i++) {
        centerChart1Data.push(centerDiv2.controlLowerSleeveData.chartData[i].MONTH_SETDOWN / 10000);
        centerChart1Xdata.push(centerDiv2.controlLowerSleeveData.chartData[i].MONTH_ID);
    }
    centerChart(centerChart1Data, centerChart1Xdata);

    //控携出
    $('#controlCarryOut1').html(rightDiv1.controlCarryOutData.headerData[0].DAY_CARRYOUT)
    $('#controlCarryOut2').html(rightDiv1.controlCarryOutData.headerData[0].MONTH_CARRYOUT)
    $('#controlCarryOut3').parent().removeClass('card-pie-s')
        .removeClass('card-pie-j')
    if (rightDiv1.controlCarryOutData.headerData[0].HB1 >= 0) {
        $('#controlCarryOut3').parent().addClass('card-pie-j')
        $('#controlCarryOut3').html(rightDiv1.controlCarryOutData.headerData[0].HB1 + '%↑')
    } else {
        $('#controlCarryOut3').parent().addClass('card-pie-s')
        $('#controlCarryOut3').html(rightDiv1.controlCarryOutData.headerData[0].HB1 + '%↓')
    }
    $('#controlCarryOut4').html(rightDiv1.controlCarryOutData.headerData[0].DAY_WEIWAN)
    $('#controlCarryOut5').html(rightDiv1.controlCarryOutData.headerData[0].MONTH_WEIWAN)
    $('#controlCarryOut6').parent().removeClass('card-pie-s')
        .removeClass('card-pie-j')
    if (rightDiv1.controlCarryOutData.headerData[0].HB2 >= 0) {
        $('#controlCarryOut6').parent().addClass('card-pie-s')
        $('#controlCarryOut6').html(rightDiv1.controlCarryOutData.headerData[0].HB2 + '%↑')
    } else {
        $('#controlCarryOut6').parent().addClass('card-pie-j')
        $('#controlCarryOut6').html(rightDiv1.controlCarryOutData.headerData[0].HB2 + '%↓')
    }
    var rightChart1Data = [];
    var rightChart1Xdata = [];
    for (var i = 0; i < rightDiv1.controlCarryOutData.chartData.length; i++) {
        rightChart1Data.push(rightDiv1.controlCarryOutData.chartData[i].WEIWAN_RATE);
        rightChart1Xdata.push(rightDiv1.controlCarryOutData.chartData[i].MONTH_ID);
    }
    rightChart1(rightChart1Data, rightChart1Xdata);

    //携入携出
    $('#carryInAndOut1').html(rightDiv2.carryInAndOutData.headerData[0].DAY_CARRYOUT)
    $('#carryInAndOut2').html(rightDiv2.carryInAndOutData.headerData[0].MONTH_CARRYOUT)
    $('#carryInAndOut3').html(rightDiv2.carryInAndOutData.headerData[0].CARRYOUT_HB)
    $('#carryInAndOut3').parent().removeClass('font-red')
        .removeClass('font-green');
    if (rightDiv2.carryInAndOutData.headerData[0].CARRYOUT_HB >= 0) {
        $('#carryInAndOut3').parent().addClass('font-green');
        $('#carryInAndOut3Sj').html('↑')
    } else {
        $('#carryInAndOut3').parent().addClass('font-red');
        $('#carryInAndOut3Sj').html('↓')
    }
    $('#carryInAndOut4').html(rightDiv2.carryInAndOutData.headerData[0].CARRYOUT_REDUCE)
    $('#carryInAndOut5').html(rightDiv2.carryInAndOutData.headerData[0].REDUCE_HB)
    $('#carryInAndOut5').parent().removeClass('font-red')
        .removeClass('font-green');
    if (rightDiv2.carryInAndOutData.headerData[0].REDUCE_HB >= 0) {
        $('#carryInAndOut5').parent().addClass('font-green');
        $('#carryInAndOut5Sj').html('↑')
    } else {
        $('#carryInAndOut5').parent().addClass('font-red');
        $('#carryInAndOut5Sj').html('↓')
    }
    $('#carryInAndOut6').html(rightDiv2.carryInAndOutData.headerData[0].DAY_CARRYIN)
    var fd4 = rightDiv2.carryInAndOutData.headerData[0].MONTH_CARRYIN.toString();
    if (fd4.indexOf("万") != -1) {
        fd4 = fd4.replace('万', "");
        $('#carryInAndOut7Unit').html('万')
    } else {
        $('#carryInAndOut7Unit').html('')
    }
    $('#carryInAndOut7').html(fd4)
    $('#carryInAndOut8').html(rightDiv2.carryInAndOutData.headerData[0].CARRYIN_HB)
    $('#carryInAndOut8').parent().removeClass('font-red')
        .removeClass('font-green');
    if (rightDiv2.carryInAndOutData.headerData[0].CARRYIN_HB >= 0) {
        $('#carryInAndOut8').parent().addClass('font-red');
        $('#carryInAndOut8Sj').html('↑')
    } else {
        $('#carryInAndOut8').parent().addClass('font-green');
        $('#carryInAndOut8Sj').html('↓')
    }
    $('#carryInAndOut9').html(rightDiv2.carryInAndOutData.headerData[0].CARRYINANDOUT)

    var rightChart2Data = [];
    var rightChart2Data2 = [];
    var rightChart2Xdata = [];
    for (var i = 0; i < rightDiv2.carryInAndOutData.chartData.length; i++) {
        rightChart2Data.push(rightDiv2.carryInAndOutData.chartData[i].CARRYOUT / 10000);
        rightChart2Data2.push(rightDiv2.carryInAndOutData.chartData[i].CARRYOUT_REDUCE);
        rightChart2Xdata.push(rightDiv2.carryInAndOutData.chartData[i].MONTH_ID);
    }
    rightChart2(rightChart2Data, rightChart2Data2, rightChart2Xdata);
}
function refreshMap() {
    $('.three-control-content-center-div1-img').addClass('three-control-content-center-div1-img-big');
    setTimeout(function () {
        $('.three-control-content-center-div1-img').removeClass('three-control-content-center-div1-img-big');
    },600)
    var mapData;
    var arr;
    //激活率环比
    if(remMap%3 === 0){
        //控流失
        mapData = centerDiv1.controlLossActiveRateData.mapDataLs;
        $('#centerMapTitle').html('控流失-激活率环比');
        arr = 'ACTIVERATE';
    }else if(remMap%3 === 1){
        //控降套
        mapData = centerDiv1.controlLossActiveRateData.mapDataJt;
        $('#centerMapTitle').html('控降套-降套量环比');
        arr = 'HB';
    }else{
        //控携出
        mapData = centerDiv1.controlLossActiveRateData.mapDataXc;
        $('#centerMapTitle').html('控携出-维挽率环比');
        arr = 'WEIWAN_RATE_HB';
    }
    for (var j = 0; j < mapData.length; j++) {
        var cityName = '';
        if (mapData[j].AREA_DESC === '榆林') {
            cityName = 'Yl'
        } else if (mapData[j].AREA_DESC === '渭南') {
            cityName = 'Wn'
        } else if (mapData[j].AREA_DESC === '宝鸡') {
            cityName = 'Bj'
        } else if (mapData[j].AREA_DESC === '铜川') {
            cityName = 'Tc'
        } else if (mapData[j].AREA_DESC === '安康') {
            cityName = 'Ak'
        } else if (mapData[j].AREA_DESC === '延安') {
            cityName = 'Ya'
        } else if (mapData[j].AREA_DESC === '汉中') {
            cityName = 'Hz'
        } else if (mapData[j].AREA_DESC === '咸阳') {
            cityName = 'Xy'
        } else if (mapData[j].AREA_DESC === '西安') {
            cityName = 'Xa'
        } else if (mapData[j].AREA_DESC === '商洛') {
            cityName = 'Sl'
        }
        if(remMap%3 === 1){
            if (mapData[j][arr] >= 0) {
                $('#controlLossActiveRate' + cityName).html(mapData[j][arr] + '% ↑')
                    .removeClass('font-red')
                    .removeClass('font-green')
                    .addClass('font-green')
            } else {
                $('#controlLossActiveRate' + cityName).html(mapData[j][arr] + '% ↓')
                    .removeClass('font-red')
                    .removeClass('font-green')
                    .addClass('font-red')
            }
        }else {
            if (mapData[j][arr] >= 0) {
                $('#controlLossActiveRate' + cityName).html(mapData[j][arr] + '% ↑')
                    .removeClass('font-red')
                    .removeClass('font-green')
                    .addClass('font-red')
            } else {
                $('#controlLossActiveRate' + cityName).html(mapData[j][arr] + '% ↓')
                    .removeClass('font-red')
                    .removeClass('font-green')
                    .addClass('font-green')
            }
        }
    }
}
function showTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = (date.getMonth() + 1) < 10 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1);
    var day = date.getDate().toString().length == 1 ? "0" + date.getDate() : date.getDate();
    var hour = date.getHours().toString().length == 1 ? "0" + date.getHours() : date.getHours();
    var minute = date.getMinutes().toString().length == 1 ? "0" + date.getMinutes() : date.getMinutes();
    var second = date.getSeconds().toString().length == 1 ? "0" + date.getSeconds() : date.getSeconds();
    $(".three-control-title-time").html(year + '-' + month + '-' + day + '  ' + hour + ':' + minute + ':' + second);
}

function fetchData() {
    var pd = fetchAjax('controlCarryOut');
    if( pd.controlCarryOutData.headerData[0].DAY_WEIWAN!== '0' && pd.controlCarryOutData.headerData[0].DAY_WEIWAN!== 0 && pd.controlCarryOutData.headerData[0].HB1 !== undefined){

        //控携出
        rightDiv1 = fetchAjax('controlCarryOut');
        //携入携出
        rightDiv2 = fetchAjax('carryInAndOut');
    }
    //控流失
    leftTop = fetchAjax('controlLossHead');
    //沉默激活
    leftDiv1 = fetchAjax('silentActivation');
    //高危模型
    leftDiv2 = fetchAjax('highRiskModel');
    //副卡激活
    leftDiv3 = fetchAjax('secondaryCardActive');
    //激活率环比
    centerDiv1 = fetchAjax('controlLossActiveRate');
    //控降套
    centerDiv2 = fetchAjax('controlLowerSleeve');


    /*leftTop = {"controlLossHead": [{"MONTH_ACTIVERATE": 53, "STRATEGY": "5", "COVER_USER": 69.7}]}
    leftDiv1 = {
        "silentActivationData": {
            "headerData": [{
                "MONTH_ACTIVERATE": 7.8,
                "DAY_ACTIVEUSER": 19,
                "MONTH_ACTIVEUSER": '1.5万',
                "HB": -18.96
            }],
            "chartData": [{"ACTIVE_RATE": 3.2, "MONTH_ID": "202010"}, {
                "ACTIVE_RATE": 7.4,
                "MONTH_ID": "202011"
            }, {"ACTIVE_RATE": 7.7, "MONTH_ID": "202012"}, {
                "ACTIVE_RATE": 8.4,
                "MONTH_ID": "202101"
            }, {"ACTIVE_RATE": 7.9, "MONTH_ID": "202102"}, {"ACTIVE_RATE": 7.8, "MONTH_ID": "202103"}]
        }
    }
    leftDiv2 = {
        "highRiskModelData": {
            "headerData": [{
                "DAY_MANAGE": 1,
                "HB1": 64.1,
                "DAY_ACTIVEUSER": 5844,
                "MONTH_ACTIVEUSER": 32.6,
                "HB2": 1040,
                "MONTH_MANAGE": '0.5万'
            }],
            "chartData": [{"ACTIVE_RATE": 50.27, "MANAGE_RATE": 0.4, "MONTH_ID": "202009"}, {
                "ACTIVE_RATE": 52.47,
                "MANAGE_RATE": 2.9,
                "MONTH_ID": "202010"
            }, {"ACTIVE_RATE": 51.81, "MANAGE_RATE": 3, "MONTH_ID": "202011"}, {
                "ACTIVE_RATE": 51.1,
                "MANAGE_RATE": 2.2,
                "MONTH_ID": "202012"
            }, {"ACTIVE_RATE": 51.7, "MANAGE_RATE": 0, "MONTH_ID": "202101"}, {
                "ACTIVE_RATE": 64.23,
                "MANAGE_RATE": 0.1,
                "MONTH_ID": "202102"
            }]
        }
    }
    leftDiv3 = {
        "secondaryCardActiveData": {
            "headerData": [{
                "MONTH_ACTIVERATE": -38.3,
                "DAY_ACTIVEUSER": 1055,
                "MONTH_ACTIVEUSER": '72万',
                "HB": 18.67
            }],
            "chartData": [{"MONTH_ID": "202009", "MONTH_ACTIVEUSER": 30105}, {
                "MONTH_ID": "202010",
                "MONTH_ACTIVEUSER": 32217
            }, {"MONTH_ID": "202011", "MONTH_ACTIVEUSER": 32468}, {
                "MONTH_ID": "202012",
                "MONTH_ACTIVEUSER": 37262
            }, {"MONTH_ID": "202101", "MONTH_ACTIVEUSER": 61374}, {"MONTH_ID": "202102", "MONTH_ACTIVEUSER": 72833}]
        }
    }
    centerDiv1 = {
        "controlLossActiveRateData": {
            "mapDataXc": [{
                "AREA_DESC": "铜川",
                "WEIWAN_RATE_HB": 4.27,
                "AREA_NO": "846"
            }, {"AREA_DESC": "安康", "WEIWAN_RATE_HB": -4.94, "AREA_NO": "848"}, {
                "AREA_DESC": "延安",
                "WEIWAN_RATE_HB": -4.46,
                "AREA_NO": "842"
            }, {"AREA_DESC": "汉中", "WEIWAN_RATE_HB": -6.86, "AREA_NO": "849"}, {
                "AREA_DESC": "咸阳",
                "WEIWAN_RATE_HB": -11.69,
                "AREA_NO": "844"
            }, {"AREA_DESC": "西安", "WEIWAN_RATE_HB": -0.92, "AREA_NO": "841"}, {
                "AREA_DESC": "商洛",
                "WEIWAN_RATE_HB": -3.95,
                "AREA_NO": "847"
            }, {"AREA_DESC": "宝鸡", "WEIWAN_RATE_HB": -9.49, "AREA_NO": "840"}, {
                "AREA_DESC": "渭南",
                "WEIWAN_RATE_HB": -0.17,
                "AREA_NO": "843"
            }, {"AREA_DESC": "榆林", "WEIWAN_RATE_HB": -6.55, "AREA_NO": "845"}],
            "mapDataJt": [{"AREA_DESC": "铜川", "HB": -15.25, "AREA_NO": "846"}, {
                "AREA_DESC": "安康",
                "HB": -24.92,
                "AREA_NO": "848"
            }, {"AREA_DESC": "延安", "HB": -16.44, "AREA_NO": "842"}, {
                "AREA_DESC": "汉中",
                "HB": -7.72,
                "AREA_NO": "849"
            }, {"AREA_DESC": "咸阳", "HB": 17.62, "AREA_NO": "844"}, {
                "AREA_DESC": "西安",
                "HB": -5.52,
                "AREA_NO": "841"
            }, {"AREA_DESC": "商洛", "HB": 3.85, "AREA_NO": "847"}, {
                "AREA_DESC": "宝鸡",
                "HB": -10.25,
                "AREA_NO": "840"
            }, {"AREA_DESC": "渭南", "HB": -10.68, "AREA_NO": "843"}, {"AREA_DESC": "榆林", "HB": -0.57, "AREA_NO": "845"}],
            "mapDataLs": [{"AREA_ID": "846", "AREA_DESC": "铜川", "ACTIVERATE": -13.98}, {
                "AREA_ID": "848",
                "AREA_DESC": "安康",
                "ACTIVERATE": -12.1
            }, {"AREA_ID": "842", "AREA_DESC": "延安", "ACTIVERATE": -10.36}, {
                "AREA_ID": "849",
                "AREA_DESC": "汉中",
                "ACTIVERATE": -10.52
            }, {"AREA_ID": "844", "AREA_DESC": "咸阳", "ACTIVERATE": -9.63}, {
                "AREA_ID": "841",
                "AREA_DESC": "西安",
                "ACTIVERATE": -16.28
            }, {"AREA_ID": "847", "AREA_DESC": "商洛", "ACTIVERATE": -6.51}, {
                "AREA_ID": "840",
                "AREA_DESC": "宝鸡",
                "ACTIVERATE": -16.18
            }, {"AREA_ID": "843", "AREA_DESC": "渭南", "ACTIVERATE": -5.8}, {
                "AREA_ID": "845",
                "AREA_DESC": "榆林",
                "ACTIVERATE": -6.83
            }]
        }
    }
    centerDiv2 = {
        "controlLowerSleeveData": {
            "headerData": [{
                "MONTH_SETDOWN": '3万',
                "DAY_SETDOWN": 768,
                "HB": 8.94,
                "MONTH_SETDOWNREVE": 20.38,
                "AVERAGE_INCOMEMONTH": 5405.7
            }],
            "chartData": [{"MONTH_SETDOWN": 24521, "MONTH_ID": "202011"}, {
                "MONTH_SETDOWN": 26253,
                "MONTH_ID": "202012"
            }, {"MONTH_SETDOWN": 24225, "MONTH_ID": "202101"}, {
                "MONTH_SETDOWN": 18908,
                "MONTH_ID": "202102"
            }, {"MONTH_SETDOWN": 21839, "MONTH_ID": "202103"}]
        }
    }
    rightDiv1 = {
        "controlCarryOutData": {
            "headerData": [{
                "DAY_WEIWAN": 1825,
                "HB1": 12.18,
                "MONTH_WEIWAN": 1,
                "MONTH_CARRYOUT": 1.2,
                "HB2": -6.98,
                "DAY_CARRYOUT": 2240
            }],
            "chartData": [{"MONTH_ID": "202011", "WEIWAN_RATE": 53.4}, {
                "MONTH_ID": "202012",
                "WEIWAN_RATE": 53.8
            }, {"MONTH_ID": "202101", "WEIWAN_RATE": 71.2}, {
                "MONTH_ID": "202102",
                "WEIWAN_RATE": 77.5
            }, {"MONTH_ID": "202103", "WEIWAN_RATE": 85.2}]
        }
    }
    rightDiv2 = {
        "carryInAndOutData": {
            "headerData": [{
                "REDUCE_HB": 14.69,
                "CARRYIN_HB": 0,
                "MONTH_CARRYOUT": 0.3,
                "MONTH_CARRYIN": '2万',
                "DAY_CARRYOUT": 512,
                "DAY_CARRYIN": 297,
                "CARRYOUT_HB": -13.66,
                "CARRYINANDOUT": 139.5,
                "CARRYOUT_REDUCE": 18.3
            }],
            "chartData": [{"MONTH_ID": "202011", "CARRYOUT": 18085, "CARRYOUT_REDUCE": 91.8}, {
                "MONTH_ID": "202012",
                "CARRYOUT": 20434,
                "CARRYOUT_REDUCE": 103.1
            }, {"MONTH_ID": "202101", "CARRYOUT": 19821, "CARRYOUT_REDUCE": 109.2}, {
                "MONTH_ID": "202102",
                "CARRYOUT": 12480,
                "CARRYOUT_REDUCE": 70.5
            }, {"MONTH_ID": "202103", "CARRYOUT": 17664, "CARRYOUT_REDUCE": 94.3}]
        }
    }*/
}

function fetchAjax(url) {
    var realData;
    $.ajax({
        type: 'GET',
        headers: {'Content-Type': 'application/json'},
        url: 'http://' + window.location.host + '/triber/threeControl/' + url,
        async: false,
        success: function (datas) {
            realData = datas;
        },
        error: function (datas) {
            console.log(datas)
        },
        dataType: 'json',
    });
    return realData;
}

function leftChart1(data, xData) {
    var myChart = echarts.init(document.getElementById('leftChart1'));

    // 指定图表的配置项和数据
    var option = {
        roam: false, // 禁止滚轮事件
        tooltip: { //提示框组件
            trigger: 'axis',
            formatter: function (datas) {
                var str = '<div style="line-height: 20px;"><span style="color: #60c1f9;font-weight: bold">' + datas[0].name + '</span>' + '<br/>';
                str += '月激活率:' + datas[0].data + '%</div>';
                return str;
            },
            axisPointer: {
                type: 'shadow',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        legend: {//图例组件，颜色和名字
            right: '10',
            top: '10',
            itemGap: 16,
            itemWidth: 13,
            itemHeight: 2,
            data: [{
                name: '月激活率',
                icon: 'line'
                //icon:'image://../wwwroot/js/url2.png', //路径
            }],
            textStyle: {
                color: '#88d7fd',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        grid: {
            x: '40', //距离左边
            x2: '10', //距离右边
            y: '33', // 上距离
            y2: '30', // 下距离
        },
        xAxis: {
            axisLabel: {
                interval: 0,
                show: true,
                textStyle: {
                    color: '#5f9dc7'
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#1d387f',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#1d387f',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1d387f',
                }
            },
            data: xData
        },
        yAxis: {
            nameTextStyle: {
                color: "#5f9dc7",
                fontSize: 12,
                lineHeight: 12,
                padding: [0, 0, -6, -30]
            },
            splitNumber: 5,
            axisLabel: {
                interval: 0,
                show: true,
                formatter: function (value) {
                    return value + '%';
                },
                textStyle: {
                    color: '#5f9dc7'
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#1d387f',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#1d387f',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1d387f',
                }
            },
        },

        series: [{
            name: '月激活率',
            type: "line",
            symbolSize: 3,
            symbol: 'circle',
            smooth: true,
            lineStyle: {
                color: '#23bafc',
                width: 1
            },
            itemStyle: {
                normal: {
                    color: '#23bafc',
                    borderColor: '#23bafc'
                }
            },
            areaStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#23bafc'
                },
                    {
                        offset: 1,
                        color: 'rgba(0,0,0,0)'
                    }
                ])
            },
            data: data,
            // barGap: 0
        }
        ],
    };


    myChart.clear()
    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}

function leftChart2(data, data2, xData) {
    var myChart = echarts.init(document.getElementById('leftChart2'));

    // 指定图表的配置项和数据
    var option = {
        roam: false, // 禁止滚轮事件
        tooltip: { //提示框组件
            trigger: 'axis',
            formatter: function (datas) {
                var str = '<div style="line-height: 20px;"><span style="color: #60c1f9;font-weight: bold">' + datas[0].name + '</span>' + '<br/>';
                str += '月办理率:' + datas[0].data + '%' + '<br/>';
                str += '月激活率:' + datas[1].data + '%' + '<br/></div>';
                return str;
            },
            axisPointer: {
                type: 'shadow',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        legend: {//图例组件，颜色和名字
            show: true,
            right: '90',
            top: '5',
            data: [{
                name: '月激活率',
                icon: 'line'
                //icon:'image://../wwwroot/js/url2.png', //路径
            },
                {
                    name: '月办理率',
                    icon: 'line'
                    //icon:'image://../wwwroot/js/url2.png', //路径
                }],
            textStyle: {
                color: '#88d7fd',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        grid: {
            x: '40', //距离左边
            x2: '40', //距离右边
            y: '33', // 上距离
            y2: '30', // 下距离
        },
        xAxis: {
            axisLabel: {
                interval: 0,
                show: true,
                textStyle: {
                    color: '#5f9dc7'
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#1d387f',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#1d387f',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1d387f',
                }
            },
            data: xData
        },
        yAxis: [
            {
                name: '办理率',
                nameTextStyle: {
                    color: "#5f9dc7",
                    fontSize: 12,
                    lineHeight: 12,
                    padding: [0, 0, -6, -30]
                },
                splitNumber: 5,
                axisLabel: {
                    interval: 0,
                    show: true,
                    formatter: function (value) {
                        return value + '%';
                    },
                    textStyle: {
                        color: '#5f9dc7'
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#1d387f',
                    },
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#1d387f',
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#1d387f',
                    }
                },
            },
            {
                name: '激活率',
                position: 'right',
                nameTextStyle: {
                    color: "#5f9dc7",
                    fontSize: 12,
                    lineHeight: 12,
                    padding: [0, 0, -6, 30]
                },
                splitNumber: 5,
                axisLabel: {
                    interval: 0,
                    show: true,
                    formatter: function (value) {
                        return value + '%';
                    },
                    textStyle: {
                        color: '#5f9dc7'
                    },
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#1d387f',
                    },
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#1d387f',
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#1d387f',
                    }
                },
            }
        ],

        series: [
            {
                name: '月办理率',
                type: "line",
                symbolSize: 0,
                symbol: 'circle',
                yAxisIndex: 0,
                smooth: true,
                lineStyle: {
                    color: '#b085ff',
                    width: 1
                },
                itemStyle: {
                    normal: {
                        color: '#b085ff',
                        borderColor: '#b085ff'
                    }
                },
                data: data,
                // barGap: 0
            },
            {
                name: '月激活率',
                type: "line",
                symbolSize: 0,
                symbol: 'circle',
                yAxisIndex: 1,
                smooth: true,
                lineStyle: {
                    color: '#06fd81',
                    width: 1
                },
                itemStyle: {
                    normal: {
                        color: '#06fd81',
                        borderColor: '#06fd81'
                    }
                },
                data: data2,
                // barGap: 0
            }
        ],
    };

    myChart.clear()
    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}

function leftChart3(data, xdata) {
    var myChart = echarts.init(document.getElementById('leftChart3'));

    var borderBg = [];
    var zeroData = [];
    var wBorder = [];
    for (var m = 0; m < data.length; m++) {
        borderBg.push(99500)
        zeroData.push(0)
        wBorder.push(100000)
    }
    // 指定图表的配置项和数据
    var option = {
        roam: false, // 禁止滚轮事件
        tooltip: { //提示框组件
            trigger: 'axis',
            formatter: function (datas) {
                var str = '<div style="line-height: 20px;"><span style="color: #60c1f9;font-weight: bold">' + datas[0].name + '</span>' + '<br/>';
                str += '月激活:' + datas[0].data + '</div>';
                return str;
            },
            axisPointer: {
                type: 'shadow',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        legend: {//图例组件，颜色和名字
            right: '10',
            top: '10',
            itemWidth: 10,
            itemHeight: 10,
            itemGap: 16,
            data: [{
                name: '月激活',
                icon: 'rect',
                //icon:'image://../wwwroot/js/url2.png', //路径
            }],
            textStyle: {
                color: '#88d7fd',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        grid: {
            x: '60', //距离左边
            x2: '10', //距离右边
            y: '33', // 上距离
            y2: '30', // 下距离
        },
        xAxis:
            [
                {
                    axisLabel: {
                        interval: 0,
                        show: true,
                        margin: 15,
                        textStyle: {
                            color: '#5f9dc7'
                        },
                    },
                    axisLine: {
                        lineStyle: {
                            color: '#1d387f',
                        },
                    },
                    axisTick: {
                        show: false,
                        lineStyle: {
                            color: '#1d387f',
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: '#1d387f',
                        }
                    },
                    data: xdata
                },
                {
                    axisTick: 'none',
                    axisLine: 'none',
                    axisLabel: {
                        show: false,
                    },
                    data: zeroData,
                },
                {
                    name: '单位：件',
                    nameGap: '50',
                    data: [],
                },
            ],
        yAxis: {
            nameTextStyle: {
                color: "#5f9dc7",
                fontSize: 12,
                lineHeight: 12,
                padding: [0, 0, -6, -30]
            },
            min: 0,
            max: 100000,
            splitNumber: 5,
            axisLabel: {
                interval: 0,
                show: true,
                textStyle: {
                    color: '#5f9dc7'
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#1d387f',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#1d387f',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1d387f',
                }
            },
        },

        series: [{
            name: '月激活',
            type: 'bar',
            xAxisIndex: 0,
            data: data,
            barWidth: 5,
            itemStyle: {
                normal: {
                    color: '#06bcff',
                },
            },
            z: 2,
        },
            {
                name: '温度背景框',
                type: 'bar',
                xAxisIndex: 1,
                barGap: '-100%',
                data: borderBg,
                barWidth: 8,
                itemStyle: {
                    normal: {
                        color: '#0e2147',
                        barBorderRadius: 5,
                    },
                },
                z: 1,
            },
            {
                name: '外框',
                type: 'bar',
                xAxisIndex: 2,
                barGap: '-100%',
                data: wBorder,
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: '#4577BA',
                        barBorderRadius: 50,
                    },
                },
                z: 0,
            },
            {
                name: '外圆',
                type: 'scatter',
                hoverAnimation: false,
                data: zeroData,
                xAxisIndex: 2,
                symbolSize: 12,
                itemStyle: {
                    normal: {
                        color: '#06bcff',
                        opacity: 1,
                    },
                },
                z: 2,
            },
            {
                name: '白圆',
                type: 'scatter',
                hoverAnimation: false,
                data: zeroData,
                xAxisIndex: 1,
                symbolSize: 20,
                itemStyle: {
                    normal: {
                        color: '#0C2E6D',
                        opacity: 1,
                    },
                },
                z: 1,
            },
            {
                name: '外圆',
                type: 'scatter',
                hoverAnimation: false,
                data: zeroData,
                xAxisIndex: 2,
                symbolSize: 23,
                itemStyle: {
                    normal: {
                        color: '#4577BA',
                        opacity: 1,
                    },
                },
                z: 0,
            },
        ],
    };


    myChart.clear()
    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}

function centerChart(data, xdata) {
    var myChart = echarts.init(document.getElementById('centerDiv2Bar'));

    var thisData = data;

    // 指定图表的配置项和数据
    var option = {
        roam: false, // 禁止滚轮事件
        tooltip: { //提示框组件
            trigger: 'axis',
            formatter: function (datas) {
                var str = '<div style="line-height: 20px;"><span style="color: #60c1f9;font-weight: bold">' + datas[0].name + '</span>' + '<br/>';
                str += '月降套:' + Math.round(thisData[datas[0].dataIndex] * 10000) + '</div>';
                return str;
            },
            axisPointer: {
                type: 'shadow',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        legend: {//图例组件，颜色和名字
            right: '10',
            top: '10',
            itemGap: 16,
            itemWidth: 12,
            itemHeight: 12,
            data: [{
                name: '月降套',
                //icon:'image://../wwwroot/js/url2.png', //路径
            }],
            textStyle: {
                color: '#88d7fd',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        grid: {
            x: '30', //距离左边
            x2: '10', //距离右边
            y: '33', // 上距离
            y2: '30', // 下距离
        },
        xAxis: {
            axisLabel: {
                interval: 0,
                show: true,
                textStyle: {
                    color: '#5f9dc7'
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#1d387f',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#1d387f',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1d387f',
                }
            },
            data: xdata
        },
        yAxis: {
            name: '万',
            nameTextStyle: {
                color: "#5f9dc7",
                fontSize: 12,
                lineHeight: 12,
                padding: [0, 0, -6, -30]
            },
            splitNumber: 5,
            axisLabel: {
                interval: 0,
                show: true,
                textStyle: {
                    color: '#5f9dc7'
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#1d387f',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#1d387f',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1d387f',
                }
            },
        },

        series: [{
            name: '月降套',
            tooltip: {
                show: false
            },
            data: data,

            type: 'bar',
            barWidth: 10,
            /*barGap: 200,*/
            /*barCategoryGap: 200,*/
            label: {
                show: false, // 柱子顶部的数值
                position: 'top',
                top: 0,
                fontSize: 6,
                offset: [0, -10]
            },
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: "#4729FB" // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: "#3077F7" // 50% 处的颜色
                    }, {
                        offset: 1,
                        color: "#1FB0F4" // 100% 处的颜色
                    }], false)
                }
            },
            // barGap: 0
        }, {
            type: 'bar',
            barWidth: 4,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: "#235DFF" // 0% 处的颜色
                    }, {
                        offset: 0.5,
                        color: "#59ACF7" // 50% 处的颜色
                    }, {
                        offset: 1,
                        color: "#71CAFF" // 100% 处的颜色
                    }], false)
                }
            },
            barGap: 0,
            data: data.map(item => item + 0.045)
        }, {
            name: 'b',
            tooltip: {
                show: false
            },
            type: 'pictorialBar',
            itemStyle: {
                borderWidth: 0,
                borderColor: '#47A6FF',
                color: '#1AC0F4',

            },
            symbol: 'path://M 0,0 l 120,0 l -30,60 l -120,0 z',
            symbolSize: ['13', '3'],
            symbolOffset: ['-1', '-2'], // 左右 ，上下
            symbolRotate: 0,
            symbolPosition: 'end',
            data: data,
            z: 3
        }],
    };


    myChart.clear()
    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}

function rightChart1(data, xdata) {
    var myChart = echarts.init(document.getElementById('rightChart1'));


    // 指定图表的配置项和数据
    var option = {
        roam: false, // 禁止滚轮事件
        tooltip: { //提示框组件
            trigger: 'axis',
            formatter: function (datas) {
                var str = '<div style="line-height: 20px;"><span style="color: #60c1f9;font-weight: bold">' + datas[0].name + '</span>' + '<br/>';
                str += '维挽率:' + datas[0].data + '%</div>';
                return str;
            },
            axisPointer: {
                type: 'shadow',
                label: {
                    backgroundColor: '#6a7985'
                }
            },
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        legend: {//图例组件，颜色和名字
            right: '10',
            top: '10',
            itemGap: 16,
            itemWidth: 13,
            itemHeight: 2,
            data: [{
                name: '维挽率',
                icon: 'line'
                //icon:'image://../wwwroot/js/url2.png', //路径
            }],
            textStyle: {
                color: '#88d7fd',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        grid: {
            x: '40', //距离左边
            x2: '10', //距离右边
            y: '33', // 上距离
            y2: '30', // 下距离
        },
        xAxis: {
            axisLabel: {
                interval: 0,
                show: true,
                textStyle: {
                    color: '#5f9dc7'
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#1d387f',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#1d387f',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1d387f',
                }
            },
            data: xdata
        },
        yAxis: {
            nameTextStyle: {
                color: "#5f9dc7",
                fontSize: 12,
                lineHeight: 12,
                padding: [0, 0, -6, -30]
            },
            min: 0,
            max: 100,
            splitNumber: 5,
            axisLabel: {
                interval: 0,
                show: true,
                formatter: function (value) {
                    return value + '%';
                },
                textStyle: {
                    color: '#5f9dc7'
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#1d387f',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#1d387f',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1d387f',
                }
            },
        },

        series: [{
            name: '维挽率',
            type: "pictorialBar",
            barCategoryGap: "60%",
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: "path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z",
            itemStyle: {
                normal: {
                    //barBorderRadius: 5,
                    //渐变色
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: "#01EAED"
                    },
                        {
                            offset: 0.5,
                            color: "#02C4DD"
                        },
                        {
                            offset: 1,
                            color: "#029ED9"
                        }
                    ])
                }
            },
            data: data,
            // barGap: 0
        }
        ],
    };


    myChart.clear()
    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}

function rightChart2(data, data2, xdata) {
    var myChart = echarts.init(document.getElementById('rightChart2'));

    var thisData = data;
    var thisData2 = data2
    // 指定图表的配置项和数据
    var option = {
        roam: false, // 禁止滚轮事件
        tooltip: { //提示框组件
            trigger: 'axis',
            formatter: function (datas) {
                var str = '<div style="line-height: 20px;"><span style="color: #60c1f9;font-weight: bold">' + datas[0].name + '</span>' + '<br/>';
                str += '携出减收:' + thisData2[datas[0].dataIndex] + '万元' + '<br/>';
                str += '携出量:' + Math.round(thisData[datas[0].dataIndex] * 10000) + '户' + '</div>';
                return str;
            },
            axisPointer: {
                type: 'shadow',
                label: {
                    backgroundColor: '#6a7985',
                }
            },
            textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        legend: {//图例组件，颜色和名字
            show: true,
            right: '90',
            top: '5',
            itemWidth: 13,
            itemHeight: 13,
            data: [{
                name: '携出量',
                icon: 'rect',
                //icon:'image://../wwwroot/js/url2.png', //路径
            },
                {
                    name: '携出减收',
                    icon: 'rect'
                    //icon:'image://../wwwroot/js/url2.png', //路径
                }],
            textStyle: {
                color: '#88d7fd',
                fontStyle: 'normal',
                fontFamily: '微软雅黑',
                fontSize: 12,
            }
        },
        grid: {
            x: '40', //距离左边
            x2: '40', //距离右边
            y: '33', // 上距离
            y2: '30', // 下距离
        },
        xAxis: {
            axisLabel: {
                interval: 0,
                show: true,
                textStyle: {
                    color: '#5f9dc7'
                },
            },
            axisLine: {
                lineStyle: {
                    color: '#1d387f',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#1d387f',
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1d387f',
                }
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ["rgba(250,250,250,0)", "rgba(59,157,230,0.16)"]
                }
            },
            data: xdata
        },
        yAxis: [
            {
                name: '万人',
                nameTextStyle: {
                    color: "#5f9dc7",
                    fontSize: 12,
                    lineHeight: 12,
                    padding: [0, 0, -6, -30]
                },
                splitNumber: 5,
                axisLabel: {
                    interval: 0,
                    show: true,
                    textStyle: {
                        color: '#5f9dc7'
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#1d387f',
                    },
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#1d387f',
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#1d387f',
                    }
                },
            },
            {
                name: '万元',
                position: 'right',
                nameTextStyle: {
                    color: "#5f9dc7",
                    fontSize: 12,
                    lineHeight: 12,
                    padding: [0, 0, -6, 30]
                },
                splitNumber: 5,
                axisLabel: {
                    interval: 0,
                    show: true,
                    textStyle: {
                        color: '#5f9dc7'
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#1d387f',
                    },
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#1d387f',
                    }
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#1d387f',
                    }
                },
            }
        ],

        series: [
            {
                name: '携出量',
                type: "bar",
                barWidth: '18%',
                barGap: '100%',
                yAxisIndex: 0,
                smooth: true,
                itemStyle: {
                    normal: {
                        borderColor: '#06fd81',
                        color: 'rgba(6,253,129,0.3)'
                    }
                },
                data: data,
                // barGap: 0
            },
            {
                name: '携出减收',
                type: "bar",
                barWidth: '18%',
                yAxisIndex: 1,
                smooth: true,
                itemStyle: {
                    normal: {
                        borderColor: '#06bcff',
                        color: 'rgba(6,188,255,0.3)'
                    }
                },
                data: data2,
                // barGap: 0
            }
        ],
    };


    myChart.clear()
    myChart.setOption(option);
    $(window).resize(function () {
        myChart.resize();
    });
}