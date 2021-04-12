function getMonthLineXData() {
    var date=new Date;
    var month = date.getMonth() + 1;
    var months = [];
    for (var i = 6; i >= 0; i--) {
        var m = month - i;
        if (m <= 0) {
            m = m + 12;
        }
        months.push(m + "月");
    }
    return months;
}
function monthLineChart(yAxis) {
    var yData = yAxis || [970000, 1020000, 930000, 965000, 1050000, 1100000, 860000];
    var lineChart = echarts.init(document.getElementById('lineMonth'));
    var xData = getMonthLineXData();
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                lineStyle: {
                    type: 'dashed',
                    color: "#CFDAE5",
                    width: 0.8
                }
            }
        },
        legend: {
            show: false
        },
        grid: {
            show: true,
            borderWidth: '0',
            x: '25%',
            width: '70%',
            height: '70%',
            y: '18%',
            top: 10,
            bottom: 0
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,//坐标从0开始
                splitArea: {
                    interval: '0'
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: "solid",
                        color: "#737373"
                    }
                },
                axisLine: {            // 坐标轴线
                    show: false,        // 默认显示，属性show控制显示与否
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#737373',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#a7adae'
                    },
                    interval: 0
                },
                axisTick: {
                    show: false
                },
                data: xData
            }
        ],
        yAxis: [
            {
                splitNumber: '3',
                scale: true,//坐标不强制从 0 开始
                splitLine: {
                    show: false,
                    lineStyle: {
                        type: "solid",
                        color: "#595959"
                    }
                },
                axisLine: {            // 坐标轴线
                    show: true,        // 默认显示，属性show控制显示与否
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#515151',
                        width: 1,
                        type: 'solid'
                    }
                },
                axisLabel: {
                    show: true,
                    margin: 5,
                    textStyle: {
                        color: '#a7adae'
                    }
                },
                axisTick: {
                    show: false
                },
                type: 'value'      //数值轴
            }
        ],
        series: [
            {
                name: '',
                type: 'line',
                symbolSize: 1,
                barWidth: '40%',
                itemStyle: {
                    normal: {
                        color: '#00d1ff',
                        lineStyle: {            // 系列级个性化折线样式，横向渐变描边
                            width: 1,
                            color: '#00d1ff'
                        }
                    }
                },
                data: yData
            }
        ]
    };
    lineChart.setOption(option);
    $(window).resize(function() {
        myChart.resize();
    });
}
function timeChart(datas) {
    var pieChart = echarts.init(document.getElementById('storeRankChart'));
    var yMax;
    var xData = [];
    var barData1 = [];
    var barData2 = [];
    var lineData1 = [];
    var remMax=0;
    for(var i = 0;i < datas.length; i++){
        xData.push(datas[i].cityName);
        barData1.push(datas[i].total);
        barData2.push(datas[i].monthTotal);
        lineData1.push(datas[i].monthTb);
        if (datas[i].monthTotal > remMax){
            remMax = datas[i].monthTotal
        }
    }
    yMax = remMax + 20 ;
    var option = {
        grid: {
            width: '80%',
            height: '70%',
            bottom: '25',
            left: '12%'
        },
        legend: {
            show: true,
            textStyle: {
                color: '#fff'
            },
            top: 2
        },
        color: [
            '#249eac',
            '#9b5923',
            '#3deaff',
            '#db2d18'
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: true,
                    lineStyle: {//Y坐标线
                        color: '#40848c',
                        width: 2,
                    }
                },
                boundaryGap: true,
                "min": 0,
                "max": yMax,
                splitNumber: 5,
                scale: true,
                axisLine: {
                    show: true,
                    lineStyle: {//Y坐标线
                        color: '#40848c',
                        width: 1,
                    }
                },
                axisLabel: {//y坐标轴
                    textStyle: {
                        color: '#40848c',
                        fontSize: 14
                    }
                },
                splitLine: {
                    show: false
                },

            },
            {
                "type": "value",
                "name": "",
                // "min": -100,
                // "max": 200,
                // splitNumber: 10,
                scale: true,
                onZero: false,
                "splitLine": {
                    "show": false
                },
                axisLine: {
                    show: true,
                    lineStyle: {//Y坐标线
                        color: '#40848c',
                        width: 1,
                    }
                },
                "axisTick": {
                    "show": true
                },
                "axisLabel": {
                    "interval": 0,
                    formatter: '{value}%'
                }
            }
        ],
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    shoe: false,
                    inside: true,
                    length: 10,
                    lineStyle: {
                        color: '#40848c',
                        width: 1,

                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#40848c',
                        fontSize: 12
                    },
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#40848c',
                        width: 1,
                    }
                },
                data: xData
            },
            {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {

                    show: false
                },
                axisLabel: {
                    interval: 0,
                    show: false,
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']

            }
        ],
        series: [
            {
                name: '',
                type: 'pictorialBar',
                symbol: 'rect',
                xAxisIndex: 1,
                silent: true,
                itemStyle: {
                    normal: {
                        show: true,
                        color: 'rgba(70,123,100,0.3)',
                        barBorderRadius: 50,
                        borderWidth: 0,

                    }
                },
                symbolRepeat: true,
                symbolSize: [8, 4],
                barWidth: 8,
                symbolOffset: ['100%', 0],
                barGap: '-100%',
                z: -5,
                data: [yMax, yMax, yMax, yMax, yMax, yMax, yMax, yMax, yMax, yMax]
            },
            {
                name: '',
                type: 'pictorialBar',
                symbol: 'rect',
                xAxisIndex: 1,
                silent: true,
                itemStyle: {
                    normal: {
                        show: true,
                        color: 'rgba(70,123,100,0.3)',
                        barBorderRadius: 50,
                        borderWidth: 0,

                    }
                },
                symbolRepeat: true,
                symbolSize: [8, 4],
                barWidth: 8,
                symbolOffset: ['-100%', 0],
                barGap: '-100%',
                z: -5,
                data: [yMax, yMax, yMax, yMax, yMax, yMax, yMax, yMax, yMax, yMax]
            },
            {
                name: '日发展量(户)',
                type: 'bar',
                barWidth: 8,
                itemStyle: {
                    normal: {
                        barBorderRadius: [25, 25, 0, 0]
                    }
                },
                label: {
                    normal: {
                        show: false,//顶部显示值
                        position: 'top',
                        textStyle: {
                            color: '#00e9c4',
                            fontSize: 12
                        }
                    }
                },
                data: barData1
            },
            {
                name: '月发展量(户)',
                type: 'bar',
                barWidth: 8,
                itemStyle: {
                    normal: {
                        barBorderRadius: [25, 25, 0, 0],
                        // color: '#9b5923',
                    }
                },
                label: {
                    normal: {
                        show: false,//顶部显示值
                        position: 'top',
                        textStyle: {
                            color: '#f3ef91',

                            fontSize: 12
                        }
                    }
                },
                barGap: '100%',
                data: barData2
            },
            {
                name: '月发展量环比',
                type: 'line',
                yAxisIndex: 1,
                // TODO:value值
                data: lineData1,
                symbolSize: 10
            },
            /*{
                name: '宽带业务发展量环比',
                type: 'line',
                yAxisIndex: 1,
                // TODO:value值
                data: lineData[0],
                symbolSize: 10
            }*/
        ]
    };
    pieChart.setOption(option);
    $(window).resize(function() {
        myChart.resize();
    });
    /*//环形图
    var radius = Math.min($("#timeChart").height() * 0.47, 85);
    var radSize = radius == 85 ? 8 : 5;
    var r = radius == 85 ? 4 : 2;
    var dataStyle = {
        normal: {
            label: { show: false },
            labelLine: { show: false }
        }
    };
    var legendText = Math.max(Math.floor($("#timeChart").height() / 15), 11);
    var placeHolderStyle = {
        normal: {
            color: 'rgba(100,200,200,0.15)',
            label: { show: false },
            labelLine: { show: false }
        },
        emphasis: {
            color: 'rgba(245,0,0,0)'
        }
    };
    var color = [
        '#66b6ff',
        '#16be77',
        '#54d9bf',
        '#1b78df',
        '#fdf128',
        '#ff7f1f',
        '#e22b6d',
    ];
    var dataObjList=[];
    $.each(data,function(i,e){
        dataObjList.push({
            type: 'pie',
            clockWise: false,
            center: ['30%', '50%'],
            radius: [radius - radSize*i - r*i, radius - radSize*(i+1)- r*i],
            itemStyle: {
                normal: {
                    color: color[i],
                    label: { show: false },
                    labelLine: { show: false }
                }
            },
            data: [
                {
                    value: e.value,
                    name: e.name
                },
                {
                    value: total - e.value,
                    itemStyle: placeHolderStyle
                }
            ]
        })
    });
    option = {
        legend: {
            show: true,
            // left: 'right',
            x: '60%',
            y: 'center',
            itemWidth: 6,
            itemHeight: 6,
            icon: 'circle',
            textStyle: {
                fontSize: legendText,
                lineHeight: '1.685',
                color: color          // 主标题文字颜色
            },

        },
        tooltip: {
            show: false,
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        toolbox: {
            show: false,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series:dataObjList
    };
    pieChart.setOption(option);
    var html = '', rankHtml = '';
    for (var i = 0; i < data.length; i++) {
        html += '<span style="color:' + color[i] + ';font-size:' + (legendText) + 'px;">' + data[i].value + '</span>';
        rankHtml += '<li class="top top' + (i + 1) + '">' + data[i].name + '<span class="' + data[i].rise + '"></span></li>';
    }
    $(".timeChartLegend").html(html).height((legendText) * data.length + 11 * (data.length - 1));
    $("#rank").html(rankHtml);*/
}
function topChart(barData) {
    var topChart = echarts.init(document.getElementById('topChart'));
    var height = $("#topChart").height();
    var width = $("#topChart").width();
    var lefts = width * -0.62
    var textOffset = width * (-0.65);
    var category = barData.name;
    var maxArr = barData.value;
    var max = 0;
    for(var i = 0;i<maxArr.length;i++){
        if(maxArr[i]>max){
            max = maxArr[i];
        }
    }
    max = (parseInt(max*11/6/1000)+1)*1000;
    var lineData = [max, max, max, max, max, max, max, max, max, max]
    option = {
        xAxis: {
            show: false
        },
        yAxis: {
            data: category,
            show: false
        },
        grid: {
            width: '35%',
            height: '100%',
            top: '0%',
            left: '63%'
        },
        series: [{
            name: '',
            type: 'pictorialBar',
            symbol: 'image://data:image/svg+xml;base64,PHN2ZyBpZD0n5aSW6YOo5Zyw55CDLeiDjOaZr+adoScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMzYwJyBoZWlnaHQ9JzY4Jz4KICA8bWV0YWRhdGE+PD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLycgeDp4bXB0az0nQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAnPgogICA8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJy8+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0ndyc/PjwvbWV0YWRhdGE+CjxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICMxYjI4MzY7CiAgICAgICAgb3BhY2l0eTogMC4zOwogICAgICB9CgogICAgICAuY2xzLTEsIC5jbHMtMywgLmNscy00IHsKICAgICAgICBmaWxsLXJ1bGU6IGV2ZW5vZGQ7CiAgICAgIH0KCiAgICAgIC5jbHMtMiwgLmNscy0zIHsKICAgICAgICBmaWxsOiAjMjU1MzgyOwogICAgICB9CgogICAgICAuY2xzLTQgewogICAgICAgIGZpbGw6ICM3NmViZmM7CiAgICAgIH0KICAgIDwvc3R5bGU+CiAgPC9kZWZzPgogIDxnIGlkPSdfMycgZGF0YS1uYW1lPSczJz4KICAgIDxwYXRoIGlkPSfnn6nlvaJfMicgZGF0YS1uYW1lPSfnn6nlvaIgMicgY2xhc3M9J2Nscy0xJyBkPSdNNTU1LjIzNywyMzRsMTAuMDQxLS4wMDlMNTQ1LjExOCwyODBINTM1WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV8xNCcgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMTQnIGNsYXNzPSdjbHMtMScgZD0nTTU0My4xLDIzNGgxMC4xMThMNTM1LDI3NVYyNDlaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzE1JyBkYXRhLW5hbWU9J+efqeW9oiAyIOaLt+i0nSAxNScgY2xhc3M9J2Nscy0xJyBkPSdNNTM0Ljk4OSwyMzMuOTkxTDU0MS4wNzEsMjM0LDUzNSwyNDVaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdJyBkYXRhLW5hbWU9J+efqeW9oiAyIOaLt+i0nScgY2xhc3M9J2Nscy0xJyBkPSdNNTY3LjM3OCwyMzRsMTAuMjIxLS4wMDlMNTU3LjI2LDI4MEg1NDcuMTQyWicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV8yJyBkYXRhLW5hbWU9J+efqeW9oiAyIOaLt+i0nSAyJyBjbGFzcz0nY2xzLTEnIGQ9J001NzkuNjc2LDIzMy45OTFMNTkwLjY1MSwyMzQsNTY5LjQsMjgwSDU1OS4yODRaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzMnIGRhdGEtbmFtZT0n55+p5b2iIDIg5ou36LSdIDMnIGNsYXNzPSdjbHMtMScgZD0nTTU5Mi42NzQsMjM0aDEwLjExOWwtMjEuMjQ5LDQ2SDU3MS40MjZaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzQnIGRhdGEtbmFtZT0n55+p5b2iIDIg5ou36LSdIDQnIGNsYXNzPSdjbHMtMScgZD0nTTYwNC44MTYsMjM0aDEwLjExOWwtMjEuMjQ5LDQ2SDU4My41NjhaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzUnIGRhdGEtbmFtZT0n55+p5b2iIDIg5ou36LSdIDUnIGNsYXNzPSdjbHMtMScgZD0nTTYxNi45NTgsMjM0aDEwLjExOWwtMjEuMjQ5LDQ2SDU5NS43MVonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MjYgLTIyMyknLz4KICAgIDxwYXRoIGlkPSfnn6nlvaJfMl/mi7fotJ1fNicgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gNicgY2xhc3M9J2Nscy0xJyBkPSdNNjI5LjEsMjM0aDEwLjExOUw2MTcuOTcsMjgwSDYwNy44NTJaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzYtMicgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gNicgY2xhc3M9J2Nscy0xJyBkPSdNNjQxLjI4MiwyMzMuOTkxTDY1MS4zNjEsMjM0bC0yMC4yMzcsNDZoLTExLjEzWicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV83JyBkYXRhLW5hbWU9J+efqeW9oiAyIOaLt+i0nSA3JyBjbGFzcz0nY2xzLTEnIGQ9J002NTMuMzg0LDIzNEg2NjMuNWwtMjAuMjM3LDQ2SDYzMy4xNDhaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzctMicgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gNycgY2xhc3M9J2Nscy0xJyBkPSdNNjY1LjUyNiwyMzRoMTAuMTE5bC0yMC4yMzcsNDZINjQ1LjI5WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV84JyBkYXRhLW5hbWU9J+efqeW9oiAyIOaLt+i0nSA4JyBjbGFzcz0nY2xzLTEnIGQ9J002NzcuNjY4LDIzNGgxMC4xMTlMNjY3LjU1LDI4MEg2NTcuNDMyWicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV84LTInIGRhdGEtbmFtZT0n55+p5b2iIDIg5ou36LSdIDgnIGNsYXNzPSdjbHMtMScgZD0nTTY4OS44MSwyMzRoMTAuMTE5TDY4MC43LDI4MGgtMTEuMTNaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzknIGRhdGEtbmFtZT0n55+p5b2iIDIg5ou36LSdIDknIGNsYXNzPSdjbHMtMScgZD0nTTcwMS45NTMsMjM0aDEwLjExOGwtMjAuMjM3LDQ2aC05LjEwNlonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MjYgLTIyMyknLz4KICAgIDxwYXRoIGlkPSfnn6nlvaJfMl/mi7fotJ1fOS0yJyBkYXRhLW5hbWU9J+efqeW9oiAyIOaLt+i0nSA5JyBjbGFzcz0nY2xzLTEnIGQ9J003MTQuMSwyMzRoMTAuMTE4bC0xOS4yMjUsNDZINjk0Ljg3WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV8xMCcgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMTAnIGNsYXNzPSdjbHMtMScgZD0nTTcyNi4yMzcsMjM0aDEwLjExOEw3MTcuMTMsMjgwSDcwNy4wMTJaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzEwLTInIGRhdGEtbmFtZT0n55+p5b2iIDIg5ou36LSdIDEwJyBjbGFzcz0nY2xzLTEnIGQ9J003MzguMzc5LDIzNEg3NDguNWwtMTguMjEzLDQ2aC0xMS4xM1onIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MjYgLTIyMyknLz4KICAgIDxwYXRoIGlkPSfnn6nlvaJfMl/mi7fotJ1fMTAtMycgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMTAnIGNsYXNzPSdjbHMtMScgZD0nTTc1MC41MjEsMjM0aDExLjEzbC0xOS4yMjUsNDZINzMyLjMwOFonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MjYgLTIyMyknLz4KICAgIDxwYXRoIGlkPSfnn6nlvaJfMl/mi7fotJ1fMTAtNCcgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMTAnIGNsYXNzPSdjbHMtMScgZD0nTTc2My42NzQsMjM0aDEwLjExOWwtMTkuMjI1LDQ2SDc0NC40NVonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MjYgLTIyMyknLz4KICAgIDxwYXRoIGlkPSfnn6nlvaJfMl/mi7fotJ1fMTAtNScgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMTAnIGNsYXNzPSdjbHMtMScgZD0nTTc3NS44MTYsMjM0aDEwLjExOUw3NjYuNzEsMjgwSDc1Ni41OTJaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzEwLTYnIGRhdGEtbmFtZT0n55+p5b2iIDIg5ou36LSdIDEwJyBjbGFzcz0nY2xzLTEnIGQ9J003ODcuOTU4LDIzNGgxMC4xMTlsLTE5LjIyNSw0Nkg3NjguNzM0WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV8xMScgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMTEnIGNsYXNzPSdjbHMtMScgZD0nTTgwMC4xLDIzNGgxMC4xMTlsLTE5LjIyNSw0Nkg3ODAuODc2WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV8xNicgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMTYnIGNsYXNzPSdjbHMtMScgZD0nTTg3MS45NDEsMjM0bDUuMDI2LS4wMDlMODc3LDI0NmwtMTMuMTU0LDM0aC0xMS4xM1onIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MjYgLTIyMyknLz4KICAgIDxwYXRoIGlkPSfnn6nlvaJfMl/mi7fotJ1fMTYtMicgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMTYnIGNsYXNzPSdjbHMtMScgZD0nTTg3NywyNTB2MzBIODY1Ljg3WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV8yNicgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMjYnIGNsYXNzPSdjbHMtMScgZD0nTTgxMi4yNDIsMjM0aDEwLjExOWwtMTkuMjI1LDQ2SDc5My4wMThaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzI3JyBkYXRhLW5hbWU9J+efqeW9oiAyIOaLt+i0nSAyNycgY2xhc3M9J2Nscy0xJyBkPSdNODI0LjM4NSwyMzRoOS4xMDZsLTE5LjIyNSw0Nkg4MDUuMTZaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzI4JyBkYXRhLW5hbWU9J+efqeW9oiAyIOaLt+i0nSAyOCcgY2xhc3M9J2Nscy0xJyBkPSdNODM1LjUxNSwyMzRoMTAuMTE4bC0xOS4yMjUsNDZIODE2LjI5WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+efqeW9ol8yX+aLt+i0nV8zMicgZGF0YS1uYW1lPSfnn6nlvaIgMiDmi7fotJ0gMzInIGNsYXNzPSdjbHMtMScgZD0nTTg0Ny42NTcsMjM0aDEwLjExOEw4MzguNTUsMjgwSDgyOC40MzJaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n55+p5b2iXzJf5ou36LSdXzMyLTInIGRhdGEtbmFtZT0n55+p5b2iIDIg5ou36LSdIDMyJyBjbGFzcz0nY2xzLTEnIGQ9J004NTkuOCwyMzRoMTAuMTE4bC0xOS4yMjUsNDZIODQwLjU3NFonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MjYgLTIyMyknLz4KICAgIDxyZWN0IGlkPSfnn6nlvaJfMycgZGF0YS1uYW1lPSfnn6nlvaIgMycgY2xhc3M9J2Nscy0yJyB4PSc5JyB5PSc1JyB3aWR0aD0nMzQyJyBoZWlnaHQ9JzEnLz4KICAgIDxyZWN0IGlkPSfnn6nlvaJfM1/mi7fotJ0nIGRhdGEtbmFtZT0n55+p5b2iIDMg5ou36LSdJyBjbGFzcz0nY2xzLTInIHg9JzknIHk9JzYyJyB3aWR0aD0nMzQyJyBoZWlnaHQ9JzEnLz4KICA8L2c+CiAgPGcgaWQ9J18yJyBkYXRhLW5hbWU9JzInPgogICAgPHBhdGggaWQ9J+S4iuaLrOWPt1/mi7fotJ1fMicgZGF0YS1uYW1lPSfkuIrmi6zlj7cg5ou36LSdIDInIGNsYXNzPSdjbHMtMycgZD0nTTg3NywyMjloNWwyLDIsMS0xLTItMmgtNnYxWicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+S4iuaLrOWPtycgY2xhc3M9J2Nscy0zJyBkPSdNODc3LDI4Nmg2bDItMi0xLTEtMiwyaC01djFaJyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtNTI2IC0yMjMpJy8+CiAgICA8cGF0aCBpZD0n5b2i54q2XzInIGRhdGEtbmFtZT0n5b2i54q2IDInIGNsYXNzPSdjbHMtNCcgZD0nTTg3NywyMjd2Mmg0bDMsMiwyLTEtNC0zaC01WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+W9oueKtl8yLTInIGRhdGEtbmFtZT0n5b2i54q2IDInIGNsYXNzPSdjbHMtNCcgZD0nTTg3NywyODd2LTJoNGwzLTIsMiwxLTQsM2gtNVonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MjYgLTIyMyknLz4KICA8L2c+CiAgPGcgaWQ9J18xJyBkYXRhLW5hbWU9JzEnPgogICAgPHBhdGggaWQ9J+S4iuaLrOWPty0yJyBkYXRhLW5hbWU9J+S4iuaLrOWPtycgY2xhc3M9J2Nscy0zJyBkPSdNNTM1LDIyOWgtNWwtMiwyLTEtMSwyLTJoNnYxWicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+S4iuaLrOWPt1/mi7fotJ0nIGRhdGEtbmFtZT0n5LiK5ous5Y+3IOaLt+i0nScgY2xhc3M9J2Nscy0zJyBkPSdNNTM1LDI4NmgtNmwtMi0yLDEtMSwyLDJoNXYxWicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogICAgPHBhdGggaWQ9J+W9oueKtl8yLTMnIGRhdGEtbmFtZT0n5b2i54q2IDInIGNsYXNzPSdjbHMtNCcgZD0nTTUzNSwyMjd2MmgtNGwtMywyLTItMSw0LTNoNVonIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC01MjYgLTIyMyknLz4KICAgIDxwYXRoIGlkPSflvaLnirZfMi00JyBkYXRhLW5hbWU9J+W9oueKtiAyJyBjbGFzcz0nY2xzLTQnIGQ9J001MzUsMjg3di0yaC00bC0zLTItMiwxLDQsM2g1WicgdHJhbnNmb3JtPSd0cmFuc2xhdGUoLTUyNiAtMjIzKScvPgogIDwvZz4KPC9zdmc+Cg==',
            barWidth: height / 10,
            data: lineData,
            symbolOffset: [0, '-40%'],
            barCategoryGap: 0,
        }, {
            name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: '#1F4683'
                }
            },
            barWidth: height / 50,
            symbolRepeat: true,
            symbolSize: 14,
            data: lineData,
            barCategoryGap: 0,
            label: {
                normal: {
                    show: true,
                    formatter: (series) => {
                    return barData.value[series.dataIndex]
                },
                position: ['63%', '-50%'],
                offset: [0, -0],
                color: '#f9f457',
                fontSize: 14
            }
        },
            z: -100,
        animationEasing: 'elasticOut',
        animationDelay: function (dataIndex, params) {
        return params.index * 30;
    }
}, {
        name: '',
            type: 'pictorialBar',
            symbol: 'rect',
            barWidth: height / 50,
            itemStyle: {
            normal: {
                barBorderRadius: 5,
                    color: '#6DE8FA'
            }
        },
        symbolRepeat: true,
            symbolSize: 14,
            data: barData.value,
            label: {
            normal: {
                show: true,
                    formatter: '{b}',
                    position: ['0', '-50%'],
                    offset: [lefts, -0],
                    color: '#FFFFFF',
                    fontSize: 14
            }
        },
        animationEasing: 'elasticOut',
            animationDelay: function (dataIndex, params) {
            return params.index * 30 * 1.1;
        }
    }],
    animation: true
};
    topChart.setOption(option);
    $(window).resize(function() {
        myChart.resize();
    });
}
function mapChart(data) {
    var remMax = 0;
    for(var m = 0;m<data.length;m++){
        data[m].rate = data[m].monthTb;
        data[m].value = data[m].monthTotal;
        data[m].name = data[m].cityName;
        if(data[m].monthTotal > remMax){
            remMax = data[m].monthTotal
        }
    }
    var temp1 = Math.round(remMax/333) *100;
    var temp2 = Math.round(remMax/143) *100;
    var myChart = echarts.init(document.getElementById('mapContainer'));
    var areaColors = ['#102867', '#1635b2', '#4670d8'];
    $('#mapRank1').html('0-'+temp1);
    $('#mapRank2').html(temp1+'-'+temp2);
    $('#mapRank3').html('>='+temp2);
    document.querySelectorAll("#legend .color").forEach((e, i) => {
        $(e).css("background-color",areaColors[i])
})
    // 配置样式
    data.forEach((e, i) => {
        var areaColor = e.value > temp2 ? areaColors[0]
            : e.value > temp1 ? areaColors[1]
                : areaColors[2];
    var rateColor = e.rate > 0 ? '#fcf500' : '#ff3116';
    e.label = {
        rich: {
            rate: {
                color: rateColor
            },
        }
    };
    e.itemStyle = {
        normal: {
            areaColor: areaColor
        },
    };
});
    option = {
        geo: {
            map: '陕西',
            zlevel: 0,
            height: '90%',
            label: {
                textStyle: {
                    color: '#fff',
                    fontWeight: '600',
                    fontSize: 15,
                    backgroundColor: 'transparent'
                }
            },
            itemStyle: {
                normal: {
                    shadowColor: '#007FED',
                    shadowBlur: 5,
                    shadowOffsetX: -4,
                    shadowOffsetY: 4
                },
                emphasis: {
                    show: false,
                    areaColor: '#355fbc'
                }
            }
        },
        series: [
            {
                type: 'map',//上层描边
                map: '陕西',
                zlevel: 0,
                height: '90%',
                itemStyle: {
                    normal: {
                        color: '#3500bc',
                        borderWidth: 1,
                        borderColor: '#37b0f4'
                    },
                    emphasis: {
                        show: false,
                        areaColor: '#355fbc'
                    }
                },
                label: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 10
                    },
                    formatter: (obj) => {
                    var name = obj.data.name, rate = obj.data.rate + "%";
    return [
        '{rate|' + rate + '}',
        '{b|' + name + '}',
    ].join('\n');
},
    rich: {
        b: {
            color: '#fff',
                fontSize: 11
        },
        rate: {
            fontWeight: 2,
                fontSize: 13
        },
    }
},
    emphasis: {
        label: {
            show: false,
                textStyle: {
                color: '#ff0',
                    fontSize: 10
            },
        }
    },
    data: data
},

]
};
    myChart.setOption(option);
    $(window).resize(function() {
        myChart.resize();
    });
}
function cityChart(kdData) {
    for(var m = 0;m<kdData.length;m++){
        kdData[m].rate = kdData[m].monthTb;
        kdData[m].value = kdData[m].total;
        kdData[m].name = kdData[m].cityName;
    }
    /*for(var n = 0;n<zhwjData.length;n++){
        zhwjData[n].rate = zhwjData[n].monthTb;
        zhwjData[n].value = zhwjData[n].total;
        zhwjData[n].name = zhwjData[n].cityName;
    }*/
    var myChart = echarts.init(document.getElementById('city'));
    //  // TODO:value值
    var xData = ['西安', '咸阳', '榆林', '渭南', '宝鸡', '延安', '汉中', '安康', '商洛', '铜川']; //x轴数据

    var barData = [];
    var lineData = [];
    if (kdData.length > 0) {
        // var yMax = kdData[0].value > zhwjData[0].value ? kdData[0].value + 20 : zhwjData[0].value + 20;
        var yMax = kdData[0].monthTotal + 20 ;
    } else {
        yMax = 20;
    }
    //宽带
    var kdBarData = [];
    var kdBarDataMonth = [];
    var kdLineData = [];
    $.each(xData,function(i,e){
        var flag = true;
        for (var j = 0; j < kdData.length; j++) {
            if (e == kdData[j].name) {
                flag = false;
                kdBarData.push(kdData[j].total);
                kdBarDataMonth.push(kdData[j].monthTotal)
                kdLineData.push(kdData[j].monthTb);
                break;
            }
        }
        if (flag) {
            kdBarData.push(0);
            kdLineData.push(-100);
        }
    });

    /*barData.push(kdBarData);
    lineData.push(kdLineData);
    //智慧沃家
    var zhwjBarData = [];
    var zhwjLineData = [];
    $.each(xData,function(i,e){
        for (var j = 0; j < zhwjData.length; j++) {
            if (e == zhwjData[j].name) {
                zhwjBarData.push(zhwjData[j].value);
                zhwjLineData.push(zhwjData[j].rate);
            }
        }
    });*/
    /*barData.push(zhwjBarData);
    lineData.push(zhwjLineData);*/
    option = {
        grid: {
            width: '80%',
            height: '70%',
            bottom: '25',
            left: '12%'
        },
        legend: {
            show: true,
            textStyle: {
                color: '#fff'
            },
            top: 2
        },
        color: [
            '#249eac',
            '#9b5923',
            '#3deaff',
            '#db2d18'
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: {
                    show: true,
                    lineStyle: {//Y坐标线
                        color: '#40848c',
                        width: 2,
                    }
                },
                boundaryGap: true,
                "min": 0,
                "max": yMax,
                splitNumber: 10,
                scale: true,
                axisLine: {
                    show: true,
                    lineStyle: {//Y坐标线
                        color: '#40848c',
                        width: 1,
                    }
                },
                axisLabel: {//y坐标轴
                    textStyle: {
                        color: '#40848c',
                        fontSize: 14
                    }
                },
                splitLine: {
                    show: false
                },

            },
            {
                "type": "value",
                "name": "",
                // "min": -100,
                // "max": 200,
                // splitNumber: 10,
                scale: true,
                onZero: false,
                "splitLine": {
                    "show": false
                },
                axisLine: {
                    show: true,
                    lineStyle: {//Y坐标线
                        color: '#40848c',
                        width: 1,
                    }
                },
                "axisTick": {
                    "show": true
                },
                "axisLabel": {
                    "interval": 0,
                    formatter: '{value}%'
                }
            }
        ],
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    shoe: false,
                    inside: true,
                    length: 10,
                    lineStyle: {
                        color: '#40848c',
                        width: 1,

                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#40848c',
                        fontSize: 12
                    },
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#40848c',
                        width: 1,
                    }
                },
                data: xData
            },
            {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {

                    show: false
                },
                axisLabel: {
                    interval: 0,
                    show: false,
                },
                splitArea: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                data: ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0']

            }
        ],
        series: [
            {
                name: '',
                type: 'pictorialBar',
                symbol: 'rect',
                xAxisIndex: 1,
                silent: true,
                itemStyle: {
                    normal: {
                        show: true,
                        color: 'rgba(70,123,100,0.3)',
                        barBorderRadius: 50,
                        borderWidth: 0,

                    }
                },
                symbolRepeat: true,
                symbolSize: [8, 4],
                barWidth: 8,
                symbolOffset: ['100%', 0],
                barGap: '-100%',
                z: -5,
                data: [yMax, yMax, yMax, yMax, yMax, yMax, yMax, yMax, yMax, yMax]
            },
            {
                name: '',
                type: 'pictorialBar',
                symbol: 'rect',
                xAxisIndex: 1,
                silent: true,
                itemStyle: {
                    normal: {
                        show: true,
                        color: 'rgba(70,123,100,0.3)',
                        barBorderRadius: 50,
                        borderWidth: 0,

                    }
                },
                symbolRepeat: true,
                symbolSize: [8, 4],
                barWidth: 8,
                symbolOffset: ['-100%', 0],
                barGap: '-100%',
                z: -5,
                data: [yMax, yMax, yMax, yMax, yMax, yMax, yMax, yMax, yMax, yMax]
            },
            {
                name: '宽带业务日发展量(户)',
                type: 'bar',
                barWidth: 8,
                itemStyle: {
                    normal: {
                        barBorderRadius: [25, 25, 0, 0]
                    }
                },
                label: {
                    normal: {
                        show: false,//顶部显示值
                        position: 'top',
                        textStyle: {
                            color: '#00e9c4',
                            fontSize: 12
                        }
                    }
                },
                data: kdBarData
            },
            {
                name: '宽带业务月发展量(户)',
                type: 'bar',
                barWidth: 8,
                itemStyle: {
                    normal: {
                        barBorderRadius: [25, 25, 0, 0],
                        // color: '#9b5923',
                    }
                },
                label: {
                    normal: {
                        show: false,//顶部显示值
                        position: 'top',
                        textStyle: {
                            color: '#f3ef91',

                            fontSize: 12
                        }
                    }
                },
                barGap: '100%',
                data: kdBarDataMonth
            },
            {
                name: '宽带业务月发展量环比',
                type: 'line',
                yAxisIndex: 1,
                // TODO:value值
                data: kdLineData,
                symbolSize: 10
            },
            /*{
                name: '宽带业务发展量环比',
                type: 'line',
                yAxisIndex: 1,
                // TODO:value值
                data: lineData[0],
                symbolSize: 10
            }*/
        ]
    };
    myChart.setOption(option);
    $(window).resize(function() {
        myChart.resize();
    });
}