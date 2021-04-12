$(function () {
    /*$.ajax({
        url:'http://135.146.68.83:8080/shanxi/main/callcount',  // ajax请求要请求的地址
        type:"get", // 请求的类型  get  post
        data:"", // 请求要发送的数据  常在post请求中使用，get请求只需要拼接请求的url就可以
        success:function (data) {
            // 请求成功之后要执行的方法
            // data  接收请求成功之后的返回值
            console.log(data);
        },
        error:function (error) {
            // 请求失败之后要执行的内容
        }
    })*/
    getExplorerInfo();
    /*时间*/
    setInterval(showTime, 1000);
    /*获取数据*/
    dataAll = {
        "data_kyrh_map": {
            "total": 510,
            "monthTotal": 85728,
            "monthTb": "367.90"
        },
        "data_3_map": {
            "cityMap": [
                {
                    "total": 161,
                    "cityName": "电渠",
                    "monthTotal": 43555,
                    "monthTb": "248.58",
                    "rate": "248.58",
                    "value": 43555,
                    "name": "电渠",
                    "label": {
                        "rich": {
                            "rate": {
                                "color": "#fcf500"
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "areaColor": "#102867"
                        }
                    }
                },
                {
                    "total": 3,
                    "cityName": "王益",
                    "monthTotal": 971,
                    "monthTb": "148.97",
                    "rate": "148.97",
                    "value": 971,
                    "name": "王益",
                    "label": {
                        "rich": {
                            "rate": {
                                "color": "#fcf500"
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "areaColor": "#4670d8"
                        }
                    }
                },
                {
                    "total": 19,
                    "cityName": "新区",
                    "monthTotal": 4464,
                    "monthTb": "48.65",
                    "rate": "48.65",
                    "value": 4464,
                    "name": "新区",
                    "label": {
                        "rich": {
                            "rate": {
                                "color": "#fcf500"
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "areaColor": "#4670d8"
                        }
                    }
                },
                {
                    "total": 12,
                    "cityName": "耀州",
                    "monthTotal": 2362,
                    "monthTb": "20.57",
                    "rate": "20.57",
                    "value": 2362,
                    "name": "耀州",
                    "label": {
                        "rich": {
                            "rate": {
                                "color": "#fcf500"
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "areaColor": "#4670d8"
                        }
                    }
                },
                {
                    "total": 16,
                    "cityName": "宜君",
                    "monthTotal": 1142,
                    "monthTb": "-27.68",
                    "rate": "-27.68",
                    "value": 1142,
                    "name": "宜君",
                    "label": {
                        "rich": {
                            "rate": {
                                "color": "#ff3116"
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "areaColor": "#4670d8"
                        }
                    }
                },
                {
                    "total": 19,
                    "cityName": "印台",
                    "monthTotal": 2236,
                    "monthTb": "8.49",
                    "rate": "8.49",
                    "value": 2236,
                    "name": "印台",
                    "label": {
                        "rich": {
                            "rate": {
                                "color": "#fcf500"
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "areaColor": "#4670d8"
                        }
                    }
                },
                {
                    "total": 33,
                    "cityName": "城区政企",
                    "monthTotal": 3805,
                    "monthTb": "49.80",
                    "rate": "49.80",
                    "value": 3805,
                    "name": "城区政企",
                    "label": {
                        "rich": {
                            "rate": {
                                "color": "#fcf500"
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "areaColor": "#4670d8"
                        }
                    }
                },
                {
                    "total": 11,
                    "cityName": "工业互联网",
                    "monthTotal": 3052,
                    "monthTb": "52.83",
                    "rate": "52.83",
                    "value": 3052,
                    "name": "工业互联网",
                    "label": {
                        "rich": {
                            "rate": {
                                "color": "#fcf500"
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "areaColor": "#4670d8"
                        }
                    }
                },
                {
                    "total": 27,
                    "cityName": "教育医疗",
                    "monthTotal": 7167,
                    "monthTb": "75.15",
                    "rate": "75.15",
                    "value": 7167,
                    "name": "教育医疗",
                    "label": {
                        "rich": {
                            "rate": {
                                "color": "#fcf500"
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "areaColor": "#4670d8"
                        }
                    }
                },
                {
                    "total": 20,
                    "cityName": "政要行业",
                    "monthTotal": 3244,
                    "monthTb": "79.23",
                    "rate": "79.23",
                    "value": 3244,
                    "name": "政要行业",
                    "label": {
                        "rich": {
                            "rate": {
                                "color": "#fcf500"
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "areaColor": "#4670d8"
                        }
                    }
                },
                {
                    "total": 11,
                    "cityName": "铜川未归属",
                    "monthTotal": 3052,
                    "monthTb": "52.83",
                    "rate": "52.83",
                    "value": 3052,
                    "name": "铜川未归属",
                    "label": {
                        "rich": {
                            "rate": {
                                "color": "#fcf500"
                            }
                        }
                    },
                    "itemStyle": {
                        "normal": {
                            "areaColor": "#4670d8"
                        }
                    }
                }
            ],
            "total": 321,
            "monthTotal": 71998,
            "monthTb": "125.52"
        },
        "data_1_map": {
            "cityMap": [
                {
                    "total": 32,
                    "cityName": "电渠",
                    "monthTotal": 10752,
                    "monthTb": "84.52"
                },
                {
                    "total": 0,
                    "cityName": "王益",
                    "monthTotal": 213,
                    "monthTb": "124.21"
                },
                {
                    "total": 1,
                    "cityName": "新区",
                    "monthTotal": 309,
                    "monthTb": "-5.21"
                },
                {
                    "total": 4,
                    "cityName": "耀州",
                    "monthTotal": 630,
                    "monthTb": "42.86"
                },
                {
                    "total": 1,
                    "cityName": "宜君",
                    "monthTotal": 317,
                    "monthTb": "-8.12"
                },
                {
                    "total": 7,
                    "cityName": "印台",
                    "monthTotal": 572,
                    "monthTb": "57.58"
                },
                {
                    "total": 4,
                    "cityName": "城区政企",
                    "monthTotal": 487,
                    "monthTb": "123.39"
                },
                {
                    "total": 0,
                    "cityName": "工业互联网",
                    "monthTotal": 383,
                    "monthTb": "157.05"
                },
                {
                    "total": 7,
                    "cityName": "教育医疗",
                    "monthTotal": 4368,
                    "monthTb": "120.49"
                },
                {
                    "total": 0,
                    "cityName": "政要行业",
                    "monthTotal": 781,
                    "monthTb": "116.94"
                },
                {
                    "total": 0,
                    "cityName": "铜川未归属",
                    "monthTotal": 383,
                    "monthTb": "157.05"
                }
            ],
            "total": 56,
            "monthTotal": 18812,
            "monthTb": "86.17"
        },
        "callCount": 790,
        "data_1_top": [
            {
                "name": "畅爽冰激凌5G套餐129元",
                "value": 11202
            },
            {
                "name": "5G副卡基本套餐(优享服务)",
                "value": 4227
            },
            {
                "name": "5G副卡基本套餐(极速服务)",
                "value": 606
            },
            {
                "name": "5G副卡基本套餐（基础服务）",
                "value": 583
            },
            {
                "name": "冰激凌专属5G套餐（钉钉版）99元",
                "value": 548
            },
            {
                "name": "畅爽冰激凌5G套餐159元-优化版",
                "value": 348
            },
            {
                "name": "畅爽冰激凌5G套餐199元（极速）",
                "value": 298
            },
            {
                "name": "畅爽冰激凌5G套餐399元",
                "value": 267
            },
            {
                "name": "冰激凌专属5G套餐（钉钉版）199元（极速）",
                "value": 227
            },
            {
                "name": "冰激凌专属5G套餐（钉钉版）129元",
                "value": 218
            }
        ],
        "data_1_top_qd": [
            {
                "name": "畅爽冰激凌1",
                "value": 11202
            },
            {
                "name": "5G副卡基本2",
                "value": 4227
            },
            {
                "name": "5G副卡3",
                "value": 606
            },
            {
                "name": "5G副卡4",
                "value": 583
            },
            {
                "name": "冰激凌专属5",
                "value": 548
            },
            {
                "name": "畅爽冰激凌6",
                "value": 348
            },
            {
                "name": "畅爽冰激凌7",
                "value": 298
            }
        ],
        "data_3_top": [
            {
                "name": "4G流量王39元套餐（陕西）",
                "value": 16355
            },
            {
                "name": "畅爽冰激凌5G套餐129元",
                "value": 11202
            },
            {
                "name": "4G流量王59元套餐（陕西）",
                "value": 10764
            },
            {
                "name": "沃派单卡(陕西)",
                "value": 9060
            },
            {
                "name": "地王卡",
                "value": 5538
            },
            {
                "name": "中介卡59元套餐(陕西)",
                "value": 3845
            },
            {
                "name": "4G畅爽冰激凌国内流量套餐-99元/月（放心用版）",
                "value": 2402
            },
            {
                "name": "流量王套餐59元（陕西）",
                "value": 2116
            },
            {
                "name": "流量王套餐39元（陕西）",
                "value": 1896
            },
            {
                "name": "4G流量王79元套餐（陕西）",
                "value": 1706
            }
        ],
        "data_3_top_qd": [
            {
                "name": "4G流量王1",
                "value": 16355
            },
            {
                "name": "畅爽冰激凌2",
                "value": 11202
            },
            {
                "name": "4G流量王3",
                "value": 10764
            },
            {
                "name": "沃派单卡4",
                "value": 9060
            },
            {
                "name": "地王卡5",
                "value": 5538
            },
            {
                "name": "中介卡59元6",
                "value": 3845
            },
            {
                "name": "4G畅爽冰激7",
                "value": 2402
            }
        ],
        "onNet": "8375085",
        "times": 6263,
        "data_all_top": [
            {
                "name": "腾讯大王卡",
                "value": 70222
            },
            {
                "name": "4G流量王39元套餐（陕西）",
                "value": 16355
            },
            {
                "name": "阿里小宝卡",
                "value": 14280
            },
            {
                "name": "畅爽冰激凌5G套餐129元",
                "value": 11202
            },
            {
                "name": "4G流量王59元套餐（陕西）",
                "value": 10764
            },
            {
                "name": "沃派单卡(陕西)",
                "value": 9060
            },
            {
                "name": "4G主副卡业务-语音副卡基本套餐",
                "value": 7681
            },
            {
                "name": "电商中间号专属产品",
                "value": 6382
            },
            {
                "name": "地王卡",
                "value": 5538
            },
            {
                "name": "亲情卡",
                "value": 4443
            }
        ],
        "data_all_top_qd": [
            {
                "name": "腾讯大王卡1",
                "value": 70222
            },
            {
                "name": "4G流量王2",
                "value": 16355
            },
            {
                "name": "阿里小宝卡3",
                "value": 14280
            },
            {
                "name": "畅爽冰激凌4",
                "value": 11202
            },
            {
                "name": "4G流量王5",
                "value": 10764
            },
            {
                "name": "沃派单卡6",
                "value": 19060
            },
            {
                "name": "4G主副卡7",
                "value": 17681
            }
        ],
        "data_2_map": {
            "cityMap": [
                {
                    "total": 259,
                    "cityName": "王益",
                    "monthTotal": 90496,
                    "monthTb": "76.94"
                },
                {
                    "total": 10,
                    "cityName": "电渠",
                    "monthTotal": 1834,
                    "monthTb": "-26.49"
                },
                {
                    "total": 66,
                    "cityName": "新区",
                    "monthTotal": 11518,
                    "monthTb": "-1.93"
                },
                {
                    "total": 56,
                    "cityName": "耀州",
                    "monthTotal": 11455,
                    "monthTb": "-16.67"
                },
                {
                    "total": 30,
                    "cityName": "宜君",
                    "monthTotal": 5373,
                    "monthTb": "-40.11"
                },
                {
                    "total": 51,
                    "cityName": "印台",
                    "monthTotal": 7210,
                    "monthTb": "-34.20"
                },
                {
                    "total": 122,
                    "cityName": "城区政企",
                    "monthTotal": 16005,
                    "monthTb": "-3.86"
                },
                {
                    "total": 52,
                    "cityName": "工业互联网",
                    "monthTotal": 11944,
                    "monthTb": "-17.10"
                },
                {
                    "total": 72,
                    "cityName": "教育医疗",
                    "monthTotal": 12210,
                    "monthTb": "-40.16"
                },
                {
                    "total": 49,
                    "cityName": "政要行业",
                    "monthTotal": 9375,
                    "monthTb": "-23.59"
                },
                {
                    "total": 52,
                    "cityName": "铜川未归属",
                    "monthTotal": 11944,
                    "monthTb": "-17.10"
                }
            ],
            "total": 767,
            "monthTotal": 177420,
            "monthTb": "8.99"
        },
        "monthLine": [
            189970,
            179338,
            135278,
            139665,
            183236,
            198076,
            196232
        ],
        "data_kd_map": {
            "cityMap": [
                {
                    "total": 291,
                    "cityName": "电渠",
                    "monthTotal": 111248,
                    "monthTb": "77.72",
                },
                {
                    "total": 10,
                    "cityName": "王益",
                    "monthTotal": 2047,
                    "monthTb": "-20.97",
                },
                {
                    "total": 67,
                    "cityName": "新区",
                    "monthTotal": 11827,
                    "monthTb": "-2.02",
                },
                {
                    "total": 60,
                    "cityName": "耀州",
                    "monthTotal": 12085,
                    "monthTb": "-14.82",
                },
                {
                    "total": 31,
                    "cityName": "宜君",
                    "monthTotal": 5690,
                    "monthTb": "-38.92",
                },
                {
                    "total": 58,
                    "cityName": "印台",
                    "monthTotal": 7782,
                    "monthTb": "-31.26",
                },
                {
                    "total": 126,
                    "cityName": "城区政企",
                    "monthTotal": 16493,
                    "monthTb": "-2.32",
                },
                {
                    "total": 52,
                    "cityName": "工业互联网",
                    "monthTotal": 12327,
                    "monthTb": "-15.32",
                },
                {
                    "total": 79,
                    "cityName": "教育医疗",
                    "monthTotal": 16578,
                    "monthTb": "-25.94",
                },
                {
                    "total": 49,
                    "cityName": "政要行业",
                    "monthTotal": 10156,
                    "monthTb": "-19.58",
                },
                {
                    "total": 49,
                    "cityName": "铜川未归属",
                    "monthTotal": 10156,
                    "monthTb": "-19.58",
                }
            ],
            "total": 242,
            "monthTotal": 32775,
            "monthTb": "100.34"
        },
        "data_all_map": {
            "cityMap": [
                {
                    "total": 32,
                    "cityName": "电渠",
                    "monthTotal": 10752,
                    "monthTb": "84.52"
                },
                {
                    "total": 0,
                    "cityName": "王益",
                    "monthTotal": 213,
                    "monthTb": "124.21"
                },
                {
                    "total": 1,
                    "cityName": "新区",
                    "monthTotal": 309,
                    "monthTb": "-5.21"
                },
                {
                    "total": 4,
                    "cityName": "耀州",
                    "monthTotal": 630,
                    "monthTb": "42.86"
                },
                {
                    "total": 1,
                    "cityName": "宜君",
                    "monthTotal": 317,
                    "monthTb": "-8.12"
                },
                {
                    "total": 7,
                    "cityName": "印台",
                    "monthTotal": 572,
                    "monthTb": "57.58"
                },
                {
                    "total": 4,
                    "cityName": "城区政企",
                    "monthTotal": 487,
                    "monthTb": "123.39"
                },
                {
                    "total": 0,
                    "cityName": "工业互联网",
                    "monthTotal": 383,
                    "monthTb": "157.05"
                },
                {
                    "total": 7,
                    "cityName": "教育医疗",
                    "monthTotal": 4368,
                    "monthTb": "120.49"
                },
                {
                    "total": 0,
                    "cityName": "政要行业",
                    "monthTotal": 781,
                    "monthTb": "116.94"
                },
                {
                    "total": 0,
                    "cityName": "铜川未归属",
                    "monthTotal": 383,
                    "monthTb": "157.05"
                }
            ],
            "total": 823,
            "monthTotal": 196232,
            "monthTb": "13.50"
        },
        "data_2_top": [
            {
                "name": "腾讯大王卡",
                "value": 70222
            },
            {
                "name": "4G流量王39元套餐（陕西）",
                "value": 16355
            },
            {
                "name": "阿里小宝卡",
                "value": 14280
            },
            {
                "name": "4G流量王59元套餐（陕西）",
                "value": 10764
            },
            {
                "name": "沃派单卡(陕西)",
                "value": 9060
            },
            {
                "name": "4G主副卡业务-语音副卡基本套餐",
                "value": 7681
            },
            {
                "name": "电商中间号专属产品",
                "value": 6382
            },
            {
                "name": "地王卡",
                "value": 5538
            },
            {
                "name": "亲情卡",
                "value": 4443
            },
            {
                "name": "中介卡59元套餐(陕西)",
                "value": 3845
            }
        ],
        "data_2_top_qd": [
            {
                "name": "腾讯大王卡1",
                "value": 70222
            },
            {
                "name": "4G流量王2",
                "value": 16355
            },
            {
                "name": "阿里小宝卡3",
                "value": 14280
            },
            {
                "name": "4G流量王4",
                "value": 10764
            },
            {
                "name": "沃派单卡5",
                "value": 9060
            },
            {
                "name": "4G主副卡6",
                "value": 7681
            },
            {
                "name": "电商中间号7",
                "value": 6382
            }
        ]
    }

    refreshHtml();

    //左一
    letfOneDiv();
    setInterval(function () {
        letfOneDiv()
    }, 10000);

    //左二
    departTop10(remRankData);
    setInterval(function () {
        indexLeftTwo++;
        departTop10(remRankData);
    }, 4000);

    //右一
    rightOneDiv();
    setInterval(function () {
        indexYw++;
        rightOneDiv();
    }, 3000);
})
var dataAll;
var indexYw = 0;
var indexLeftTwo = 0 ;
var remRankData;

function refreshHtml() {
    var kdData = dataAll.data_kd_map.cityMap;
    dataAll.data_kd_map.cityMap = kdData;
    /*月累计访问量*/
    $('#monthVisited').html(dataAll.callCount);
    //左二数据处理
    // var xData = ['宝塔', '安塞', '黄陵', '黄龙', '宜川', '洛川', '延长', '甘泉', '延川', '吴起','富县','子长','志丹'];
    var xData = [
        "电渠",
        "王益",
        "新区",
        "耀州",
        "宜君",
        "印台",
        "城区政企",
        "工业互联网",
        "教育医疗",
        "政要行业",
        "铜川未归属"
    ]
    var rankDataChange = dataAll.data_all_map.cityMap;
    var rankData = [];
    for(var j = 0;j<rankDataChange.length;j++){
        if(rankDataChange[j].cityName!=='宝塔'){
            rankData.push(rankDataChange[j])
        }
    }

    var rankDataNew = [];
    $.each(xData,function(i,e){
        for (var j = 0; j < rankData.length; j++) {
            if (e == rankData[j].cityName) {
                rankData[j].rate = rankData[j].monthTb;
                rankData[j].value = rankData[j].total;
                rankData[j].name = rankData[j].cityName;
                var rank = xData.length;
                $.each(rankData,function(m,s){
                    if(Number(rankData[j].monthTb) >= Number(s.monthTb)){
                        rank --;
                    }
                })
                rankData[j].rank = rank + 1;
                rankDataNew.push(rankData[j]);
                break;
            }
        }
        for (var j = 0; j < kdData.length; j++) {
            if (e == kdData[j].cityName) {
                kdData[j].rate = kdData[j].monthTb;
                kdData[j].value = kdData[j].total;
                kdData[j].name = kdData[j].cityName;
                var rank = xData.length;
                $.each(kdData,function(m,s){
                    if(Number(kdData[j].monthTb) >= Number(s.monthTb)){
                        rank --;
                    }
                })
                kdData[j].rank = rank + 1;
                break;
            }
        }
    });
    //左三
    timeChart(rankDataNew);
    remRankData = rankDataNew;
    //右二
    setCityData(dataAll.data_kd_map);
}

function getExplorerInfo(){
    var ua = navigator.userAgent.toLocaleLowerCase();
    var browserType=null;
    if (ua.match(/msie/) != null || ua.match(/trident/) != null) {
        $('.isIe').css('display','block');
        browserType = "IE";
        browserVersion = ua.match(/msie ([\d.]+)/) != null ? ua.match(/msie ([\d.]+)/)[1] : ua.match(/rv:([\d.]+)/)[1];
        if(browserVersion==9.0||browserVersion==10.0||browserVersion==11.0){
            return { browserType: "IE" };
        }else{
            return { browserType: "IE8以下" };
        }

    } else if (ua.match(/firefox/) != null) {
        browserType = "火狐";
        return { browserType: "火狐" };
    }else if (ua.match(/ubrowser/) != null) {
        browserType = "UC";
        return { browserType: "UC" };
    }else if (ua.match(/opera/) != null) {
        browserType = "欧朋";
        return { browserType: "欧朋" };
    } else if (ua.match(/bidubrowser/) != null) {
        browserType = "百度";
        return { browserType: "百度" };
    }else if (ua.match(/metasr/) != null) {
        browserType = "搜狗";
        return { browserType: "搜狗" };
    }else if (ua.match(/tencenttraveler/) != null || ua.match(/qqbrowse/) != null) {
        browserType = "QQ";
        return { browserType: "QQ" };
    }else if (ua.match(/maxthon/) != null) {
        browserType = "遨游";
        return { browserType: "遨游" };
    }else if (ua.match(/chrome/) != null) {
        var is360 = _mime("type", "application/vnd.chromium.remoting-viewer");
        function _mime(option, value) {
            var mimeTypes = navigator.mimeTypes;
            for (var mt in mimeTypes) {
                if (mimeTypes[mt][option] == value) {
                    return true;
                }
            }
            return false;
        }
        if(is360){
            $('.isIe').css('display','block');
            browserType = '360';
        }else{
            browserType = '谷歌';
        }
        return { browserType: "360" };
    }else if (ua.match(/safari/) != null) {
        browserType = "Safari";
        return { browserType: "Safari" };
    }
}
function rightOneDiv() {
    var topData,mapData;
    $(".btn.active").removeClass("active");
    switch (indexYw % 8) {
        case 0:
            $('#index-right1-div').removeClass('index-right1-div-qd')
                .addClass('index-right1-div-cp')
            $(".btn:eq(0)").addClass("active");
            $('#legend').css('display','block');
            $("#mapContainer").css('display','block');
            $("#pieContainer").css('display','none');
            topData = getTopData(dataAll.data_all_top);
            mapData = dataAll.data_all_map.cityMap;
            setInfoTitle('全部', dataAll.data_all_map.monthTotal, dataAll.data_all_map.monthTb);
            mapChart(mapData);
            topChart(topData);

            break;
        case 1:
            $(".btn:eq(1)").addClass("active");
            topData = getTopData(dataAll.data_1_top);
            mapData = dataAll.data_1_map.cityMap;
            setInfoTitle('5G', dataAll.data_1_map.monthTotal, dataAll.data_1_map.monthTb);
            mapChart(mapData);
            topChart(topData);
            break;
        case 2:
            $(".btn:eq(2)").addClass("active");
            topData = getTopData(dataAll.data_2_top);
            mapData = dataAll.data_2_map.cityMap;
            setInfoTitle('4G', dataAll.data_2_map.monthTotal, dataAll.data_2_map.monthTb);
            mapChart(mapData);
            topChart(topData);
            break;
        case 3:
            $(".btn:eq(3)").addClass("active");
            topData = getTopData(dataAll.data_3_top);
            mapData = dataAll.data_3_map.cityMap;
            setInfoTitle('中高端', dataAll.data_3_map.monthTotal, dataAll.data_3_map.monthTb);
            mapChart(mapData);
            topChart(topData);
            break;
        case 4:
            $('#index-right1-div').removeClass('index-right1-div-cp')
                .addClass('index-right1-div-qd')
            $(".btn:eq(0)").addClass("active");
            $('#legend').css('display','none');
            $("#mapContainer").css('display','none');
            $("#pieContainer").css('display','block');
            topData = getTopData(dataAll.data_all_top_qd);
            mapData = dataAll.data_all_map.cityMap;
            setInfoTitleQd('全部', dataAll.data_all_map.monthTotal, dataAll.data_all_map.monthTb);
            pieChart(dataAll.data_all_top_qd,topData.name);
            topChartQd(topData);
            break;
        case 5:
            $(".btn:eq(1)").addClass("active");
            topData = getTopData(dataAll.data_1_top_qd);
            mapData = dataAll.data_1_map.cityMap;
            setInfoTitleQd('5G', dataAll.data_1_map.monthTotal, dataAll.data_1_map.monthTb);
            pieChart(dataAll.data_1_top_qd,topData.name);
            topChartQd(topData);
            break;
        case 6:
            $(".btn:eq(2)").addClass("active");
            topData = getTopData(dataAll.data_2_top_qd);
            mapData = dataAll.data_2_map.cityMap;
            setInfoTitleQd('4G', dataAll.data_2_map.monthTotal, dataAll.data_2_map.monthTb);
            pieChart(dataAll.data_2_top_qd,topData.name);
            topChartQd(topData);
            break;
        default:
            $(".btn:eq(3)").addClass("active");
            topData = getTopData(dataAll.data_3_top_qd);
            mapData = dataAll.data_3_map.cityMap;
            setInfoTitleQd('中高端', dataAll.data_3_map.monthTotal, dataAll.data_3_map.monthTb);
            pieChart(dataAll.data_3_top_qd,topData.name);
            topChartQd(topData);
            break;
    }
}
function setInfoTitle(title, month_value, day_hb) {
    $('#info-title').html('铜川' + title + '产品发展量<span style="font-size: 0.8rem">(户)</span>');
    $('.chart-title').html(title + '产品月累计发展量TOP10');
    $('#month_value').html(month_value);
    $('#day_hb').html(day_hb + '%');
}
function setInfoTitleQd(title, month_value, day_hb) {
    $('#info-title').html('铜川' + title + '渠道发展量<span style="font-size: 0.8rem">(户)</span>');
    $('.chart-title').html(title + '渠道月累计发展量');
    $('#month_value').html(month_value);
    $('#day_hb').html(day_hb + '%');
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
            map: '铜川',
            zlevel: 0,
            height: '55%',
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
                map: '铜川',
                zlevel: 0,
                height: '55%',
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
    /*var lineData = [max, max, max, max, max, max, max, max, max, max]*/
    var lineData = [];
    for(var m = 0;m<maxArr.length;m++){
        lineData.push(max);
    }
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
        topChart.resize();
    });
}
function topChartQd(barData) {
    var topChart = echarts.init(document.getElementById('topChart'));
    var height = $("#topChart").height();
    var width = $("#topChart").width();
    var lefts = width * -0.32
    var textOffset = width * (-0.35);
    var category = barData.name;
    var maxArr = barData.value;
    var max = 0;
    for(var i = 0;i<maxArr.length;i++){
        if(maxArr[i]>max){
            max = maxArr[i];
        }
    }
    max = (parseInt(max*11/6/1000)+1)*1000;
    /*var lineData = [max, max, max, max, max, max, max, max, max, max]*/
    var lineData = [];
    for(var m = 0;m<maxArr.length;m++){
        lineData.push(max);
    }
    option = {
        xAxis: {
            show: false
        },
        yAxis: {
            data: category,
            show: false
        },
        grid: {
            width: '65%',
            height: '100%',
            top: '0%',
            left: '35%'
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
        topChart.resize();
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
    var xData = [
        "电渠",
        "王益",
        "新区",
        "耀州",
        "宜君",
        "印台",
        "城区政企",
        "工业互联网",
        "教育医疗",
        "政要行业",
        "铜川未归属"
    ]//x轴数据

    var barData = [];
    var lineData = [];
    if (kdData.length > 0) {
        // var yMax = kdData[0].value > zhwjData[0].value ? kdData[0].value + 20 : zhwjData[0].value + 20;
        var yMax = kdData[0].monthTotal + 20 ;
    } else {
        yMax = 20;
    }
    var ymaxs = [];
    var xDatas = [];
    for(var m=0;m<xData.length;m++){
        ymaxs.push(yMax);
        xDatas.push("0")
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
            bottom: '40',
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
                    rotate:30,
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
                data: xDatas

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
                data: ymaxs
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
                data: ymaxs
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
                        show: true,//顶部显示值
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
                label: {
                    normal: {
                        show: false,//顶部显示值
                        formatter:'{c}%',
                        position: 'top',
                        textStyle: {
                            color: '#f3ef91',

                            fontSize: 12
                        }
                    }
                },
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
function getTopData(array) {
    // console.log(array);
    var topName = [];
    var topValue = [];
    for (var i = array.length - 1; i >= 0; i--) {
        if(array[i].value !== 0){
            var name = array[i].name;
            /*if (name.length > 6) {
                name = name.substring(0, 6) + "...";
            }*/
            topName.push(name);
            topValue.push(array[i].value);
        }
    }
    var topData = {};
    topData.name = topName;
    topData.value = topValue;
    return topData;
}
function letfOneDiv() {
    var proTypes = ['1', '2', '3'];
    $.each(proTypes, function (i, e) {
        var prop = 'data_' + e + '_map';
        $('#pro_0' + e + '_day').html(dataAll[prop].total);
        $('#pro_0' + e + '_month').html(dataAll[prop].monthTotal);
        var hb = dataAll[prop].monthTb;
        if (hb > 0) {
            $('#pro_0' + e + '_month_rate').removeClass('down-rate').removeClass('up-rate').addClass('up-rate');
        } else {
            $('#pro_0' + e + '_month_rate').removeClass('down-rate').removeClass('up-rate').addClass('down-rate');
        }
        $('#pro_0' + e + '_month_rate').html(hb + '%');
    })
    var dataFZ = {
        "today": dataAll.data_all_map.total,
        "month": {
            "num": dataAll.data_all_map.monthTotal,
            "rate": dataAll.data_all_map.monthTb,
            "yAxis": dataAll.monthLine
        }
    }
    var dataWS = dataAll.onNet;
    fzwsData(dataFZ, dataWS);
}

function showTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours().toString().length == 1 ? "0" + date.getHours() : date.getHours();
    var minute = date.getMinutes().toString().length == 1 ? "0" + date.getMinutes() : date.getMinutes();
    var second = date.getSeconds().toString().length == 1 ? "0" + date.getSeconds() : date.getSeconds();
    $(".show-time").html(year + '年' + month + '月' + day + '日 ' + hour + ':' + minute + ':' + second);
}

var monthLineData;
/*左一 移网发展、移网网上切换*/
function fzwsData(dataFZ, dataWS) {
    //发展假数据
    var dataFZ = dataFZ;
    // 网上假数据
    var dataWS = dataWS
    $("#fzws>.title>.active").removeClass("active").siblings().addClass("active");
    if ($("#fzws>.title>.active").hasClass("fz")) {
        data = dataFZ
        $('.month').show();
        monthLineData = data.month.yAxis;
        monthLineChart(monthLineData);
        $("#fzws .month>.title>.num").html(data.month.num).next().html(data.month.rate + "%");
        if (data.month.rate > 0) $("#fzws .month>.title>.rate").removeClass("down-rate").addClass("up-rate");
        else $("#fzws .month>.title>.rate").removeClass("up-rate").addClass("down-rate");
        $('#fzws .today').css('width', '45%');
        $('#fzws .today .title').html('当日实时发展量<span style="font-size: 0.8rem">(户)</span>');
        var html = '';
        for (var i = 0; i < 5; i++) {
            html += '<div class="shadow"></div>';
            if (i == 1) {
                html += '<span class="dh">,</span>';
            }
        }
        $('#fzwsNum').html(html);
        var todayNum = String(data.today).split("");
    } else {
        $('.month').hide();
        $('#fzws .today').css('width', '80%');
        var html = '';
        for (var i = 0; i < 8; i++) {
            html += '<div class="shadow"></div>';
            if (i == 1 || i == 4) {
                html += '<span class="dh">,</span>';
            }
        }
        $('#fzwsNum').html(html);
        $('#fzws .today .title').html('当日网上用户数<span style="font-size: 0.8rem">(户)</span>');
        data = dataWS;
        var todayNum = String(data).split("");
    }
    //渲染
    //today
    var shadowList = document.querySelectorAll("#fzws .shadow");
    for (var i = shadowList.length - 1; i > -1; i--) {
        var n = todayNum[todayNum.length - 1] ? todayNum[todayNum.length - 1] : "";
        shadowList[i].innerHTML = n;
        todayNum.pop();
    }
    //month

    //charts

}
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
        lineChart.resize();
    });
}

function departTop10(array) {
    var storeHtml = '';
    var title = ['排名','网格','日发展量','月发展量','月环比','排名','网格','日发展量','月发展量','月环比'];
    var data = array;
    storeHtml += '<table border="0" cellspacing="0" cellpadding="0" class="rank-table">';
    storeHtml += '<thead>';
    storeHtml += '<tr>';
    for (var i = 0;i<title.length;i++){
        storeHtml += '<th>' + title[i] + '</th>';
    }
    storeHtml += '</tr>';
    storeHtml += '</thead>';
    storeHtml += '<tbody>';
    if(indexLeftTwo%2 === 0){
        $('.table-tab').removeClass('table-tab')
        $('#table-tab0').addClass('table-tab')
        for (var q = 0;q < 5 ;q++){
            var j = q;
            storeHtml += '<tr>';
            storeHtml += '<td>' + data[j].rank + '</td>';
            storeHtml += '<td>' + data[j].name + '</td>';
            storeHtml += '<td>' + data[j].total + '</td>';
            storeHtml += '<td>' + data[j].monthTotal + '</td>';
            if(data[j].monthTb >= 0){
                storeHtml += '<td style="border-right: solid 1px #dbdbdb;color: #40d0e0;">' + data[j].monthTb + '%</td>';
            }else{
                storeHtml += '<td style="border-right: solid 1px #dbdbdb;color: #ff3116;">' + data[j].monthTb + '%</td>';
            }
            storeHtml += '<td>' + data[j + 5].rank + '</td>';
            storeHtml += '<td>' + data[j + 5].name + '</td>';
            storeHtml += '<td>' + data[j + 5].total + '</td>';
            storeHtml += '<td>' + data[j + 5].monthTotal + '</td>';
            if(data[j + 5].monthTb >= 0){
                storeHtml += '<td style="color: #40d0e0;">' + data[j + 5].monthTb + '%</td>';
            }else{
                storeHtml += '<td style="color: #ff3116;">' + data[j + 5].monthTb + '%</td>';
            }
            storeHtml += '</tr>';
        }
    }else {
        $('.table-tab').removeClass('table-tab')
        $('#table-tab1').addClass('table-tab')
        var j = 10 ;
        storeHtml += '<tr>';
        storeHtml += '<td>' + data[j].rank + '</td>';
        storeHtml += '<td>' + data[j].name + '</td>';
        storeHtml += '<td>' + data[j].total + '</td>';
        storeHtml += '<td>' + data[j].monthTotal + '</td>';
        if(data[j].monthTb >= 0){
            storeHtml += '<td style="border-right: solid 1px #dbdbdb;color: #40d0e0;">' + data[j].monthTb + '%</td>';
        }else{
            storeHtml += '<td style="border-right: solid 1px #dbdbdb;color: #ff3116;">' + data[j].monthTb + '%</td>';
        }
        storeHtml += '<td>&nbsp;</td>';
        storeHtml += '<td>&nbsp;</td>';
        storeHtml += '<td>&nbsp;</td>';
        storeHtml += '<td>&nbsp;</td>';
        storeHtml += '<td style="color: #40d0e0;">&nbsp;</td>';
        storeHtml += '</tr>';
        for(var k = 0;k<4;k++){
            storeHtml += '<tr>';
            storeHtml += '<td>&nbsp;</td>';
            storeHtml += '<td>&nbsp;</td>';
            storeHtml += '<td>&nbsp;</td>';
            storeHtml += '<td>&nbsp;</td>';
            storeHtml += '<td style="border-right: solid 1px #dbdbdb;color: #40d0e0;">&nbsp;</td>';
            storeHtml += '<td>&nbsp;</td>';
            storeHtml += '<td>&nbsp;</td>';
            storeHtml += '<td>&nbsp;</td>';
            storeHtml += '<td>&nbsp;</td>';
            storeHtml += '<td style="color: #40d0e0;">&nbsp;</td>';
            storeHtml += '</tr>';
        }
    }
    storeHtml += '</tbody>';
    storeHtml += '</table>';
    $("#timeChart").html(storeHtml);
}

function timeChart(datas) {
    var pieChart = echarts.init(document.getElementById('storeRankChart'));
    var yMax ;
    var ymaxs=[];
    var xDatas = [];
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
    for(var m=0;m<datas.length;m++){
        ymaxs.push(yMax);
        xDatas.push("0")
    }
    var option = {
        grid: {
            width: '80%',
            height: '63%',
            bottom: '40',
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
                    interval: 0,//x坐标显示全部
                    rotate:30,
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
                data: xDatas

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
                symbolSize: [6, 4],
                barWidth: 6,
                symbolOffset: ['100%', 0],
                barGap: '-100%',
                z: -5,
                data: ymaxs
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
                symbolSize: [6, 4],
                barWidth: 6,
                symbolOffset: ['-100%', 0],
                barGap: '-100%',
                z: -5,
                data: ymaxs
            },
            {
                name: '日发展量(户)',
                type: 'bar',
                barWidth: 6,
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
                barWidth: 6,
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
        pieChart.resize();
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

function setCityData(kdData) {
    $('#kd_num').html(kdData.total);
    $('#kd_num_month').html(kdData.monthTotal);

    var topHtml = "";
    for (var i = 0;i < 3; i++) {
        for(var m = 0;m<kdData.cityMap.length;m++){
            if(kdData.cityMap[m].rank === (i+1)){
                topHtml += '<li class="top top' + (i + 1) + '">' + kdData.cityMap[m].cityName;
                // topHtml += '<span class="up"></span>';
                topHtml += '</li>';
            }
        }
    }
    $('#kd_top3').html(topHtml);
    cityChart(kdData.cityMap);
}

function pieChart(trafficWay,xdata) {
    var myChart = echarts.init(document.getElementById('pieContainer'));


    var data = [];
    var color=['#00ffff','#00cfff','#006ced','#ffe000','#ffa800','#ff5b00','#ff3000']
    for (var i = 0; i < trafficWay.length; i++) {
        data.push({
            value: trafficWay[i].value,
            name: trafficWay[i].name,
            itemStyle: {
                normal: {
                    borderWidth: 5,
                    shadowBlur: 20,
                    borderColor:color[i],
                    shadowColor: color[i]
                }
            }
        }, {
            value: 2,
            name: '',
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        });
    }
    var seriesOption = [{
        name: '',
        type: 'pie',
        clockWise: false,
        radius: ['30%', '34%'],
        center: ['36%', '55%'],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    color: '#ddd',
                    formatter: function(params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < trafficWay.length; i++) {
                            total += trafficWay[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if(params.name !== '') {
                            return '' + params.name + '\n' + '\n' + '百分比：' + percent + '%';
                        }else {
                            return '';
                        }
                    },
                },
                labelLine: {
                    show: true,
                    color:'#00ffff'
                }
            }
        },
        data: data
    }];
    var option = {
        color : color,
        title: {
            text: '渠道占比',
            top: '53%',
            textAlign: "center",
            left: "36%",
            textStyle: {
                color: '#fff',
                fontSize: 22,
                fontWeight: '400'
            }
        },

        tooltip: {
            show: false
        },
        legend: {
            icon: "circle",
            orient: 'vertical',
            //orient: 'horizontal',
            // x: 'left',
            data:xdata,
            align: 'left',
            right: '1%',
            bottom: '2%',
            textStyle: {
                color: "#fff"
            },
            itemGap: 20
        },
        toolbox: {
            show: false
        },
        series: seriesOption
    }
    myChart.setOption(option);
    $(window).resize(function() {
        myChart.resize();
    });
}
