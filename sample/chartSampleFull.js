var maps,maps2;
var maps3,maps4;
var maps5,maps6;
var content;
var closer;

function initMap(){
    
//map - 성남시 타 지역간 유입 지도 시각화 -------------------------------------------------------------------------
maps = new MapController("container_map");

content = document.getElementById('popup-content');
closer = document.getElementById('popup-closer');

closer.onclick = function() {
    maps.setOverlayPosition(undefined);
    closer.blur();
    return false;
};

var zoomChange=false;
maps.map.on('wheel', function(evt) {
    zoomChange=true;
    openlayersControll = true;
    console.log("wheel="+maps.map.getView().getZoom());
});
maps.map.on('movestart', function(evt) {
    
    openlayersControll = true;
});
maps.map.on('moveend', function(evt) {
    
    if(zoomChange){
        var zoomLv = maps.map.getView().getZoom();
        console.log("moveend getZoom="+zoomLv);
        naverMaps.setZoom(zoomLv);
    }
    try{
        evt.coordinate = maps.map.getView().getCenter();
        var xy = ol.proj.transform([evt.coordinate[0],evt.coordinate[1]],'EPSG:3857','EPSG:4326');
        console.log("moveend getCenter="+xy);
        //naverMaps.setCenter(new naver.maps.LatLng(xy[1], xy[0]));
    }catch(e){}
    
    openlayersControll = false;
});

var openlayersControll = false; // 오픈레이어지 지도 컨트롤 여부


maps.map.on('propertychange', function(evt) {		
    
    console.log("propertychange=");
});

maps.map.on('change', function(evt) {		
    
    console.log("change=");
});

buttonClick(35);
setOlMap(3);
var moveParams=[];
moveParams.push(127.12827);
moveParams.push(37.41193);

maps.setCenter(moveParams);
maps.setZoom(11);
//map - 성남시 타 지역간 유입 지도 시각화 -------------------------------------------------------------------------

//map - 성남시 타 지역간 유출 지도 시각화 -------------------------------------------------------------------------
maps2 = new MapController("container_map2");

content = document.getElementById('popup-content');
closer = document.getElementById('popup-closer');

closer.onclick = function() {
    maps2.setOverlayPosition(undefined);
    closer.blur();
    return false;
};

var zoomChange=false;
maps2.map.on('wheel', function(evt) {
    zoomChange=true;
    openlayersControll = true;
    console.log("wheel="+maps2.map.getView().getZoom());
});
maps2.map.on('movestart', function(evt) {
    
    openlayersControll = true;
});
maps2.map.on('moveend', function(evt) {
    
    if(zoomChange){
        var zoomLv = maps2.map.getView().getZoom();
        console.log("moveend getZoom="+zoomLv);
        naverMaps.setZoom(zoomLv);
    }
    try{
        evt.coordinate = maps2.map.getView().getCenter();
        var xy = ol.proj.transform([evt.coordinate[0],evt.coordinate[1]],'EPSG:3857','EPSG:4326');
        console.log("moveend getCenter="+xy);
        //naverMaps.setCenter(new naver.maps.LatLng(xy[1], xy[0]));
    }catch(e){}
    
    openlayersControll = false;
});

var openlayersControll = false; // 오픈레이어지 지도 컨트롤 여부


maps.map.on('propertychange', function(evt) {		
    
    console.log("propertychange=");
});

maps.map.on('change', function(evt) {		
    
    console.log("change=");
});

buttonClick2(36);
setOlMap2(4);
var moveParams2=[];
moveParams2.push(127.12827);
moveParams2.push(37.41193);

maps2.setCenter(moveParams);
maps2.setZoom(11);
//map - 성남시 타 지역간 유출 지도 시각화 -------------------------------------------------------------------------
//map - 경기도 방문자 체류시간 지도 시각화 1 -------------------------------------------------------------------------
maps3 = new MapController("container_map3");

content = document.getElementById('popup-content');
closer = document.getElementById('popup-closer');

closer.onclick = function() {
    maps3.setOverlayPosition(undefined);
    closer.blur();
    return false;
};

var zoomChange=false;
maps3.map.on('wheel', function(evt) {
    zoomChange=true;
    openlayersControll = true;
    console.log("wheel="+maps3.map.getView().getZoom());
});
maps3.map.on('movestart', function(evt) {
    
    openlayersControll = true;
});
maps3.map.on('moveend', function(evt) {
    
    if(zoomChange){
        var zoomLv = maps3.map.getView().getZoom();
        console.log("moveend getZoom="+zoomLv);
        naverMaps.setZoom(zoomLv);
    }
    try{
        evt.coordinate = maps3.map.getView().getCenter();
        var xy = ol.proj.transform([evt.coordinate[0],evt.coordinate[1]],'EPSG:3857','EPSG:4326');
        console.log("moveend getCenter="+xy);
    }catch(e){}
    
    openlayersControll = false;
});

var openlayersControll = false; // 오픈레이어지 지도 컨트롤 여부


maps3.map.on('propertychange', function(evt) {		
    
    console.log("propertychange=");
});

maps3.map.on('change', function(evt) {		
    
    console.log("change=");
});

buttonClick3(38);
var moveParams=[];
moveParams.push(127.12827);
moveParams.push(37.41193);

maps3.setCenter(moveParams);
maps3.setZoom(11);
//map - 경기도 방문자 체류시간 지도 시각화 1 -------------------------------------------------------------------------
//map - 경기도 방문자 체류시간 지도 시각화 2 -------------------------------------------------------------------------
maps4 = new MapController("container_map4");

content = document.getElementById('popup-content');
closer = document.getElementById('popup-closer');

closer.onclick = function() {
    maps4.setOverlayPosition(undefined);
    closer.blur();
    return false;
};

var zoomChange=false;
maps4.map.on('wheel', function(evt) {
    zoomChange=true;
    openlayersControll = true;
    console.log("wheel="+maps4.map.getView().getZoom());
});
maps4.map.on('movestart', function(evt) {
    
    openlayersControll = true;
});
maps4.map.on('moveend', function(evt) {
    
    if(zoomChange){
        var zoomLv = maps4.map.getView().getZoom();
        console.log("moveend getZoom="+zoomLv);
        naverMaps.setZoom(zoomLv);
    }
    try{
        evt.coordinate = maps4.map.getView().getCenter();
        var xy = ol.proj.transform([evt.coordinate[0],evt.coordinate[1]],'EPSG:3857','EPSG:4326');
        console.log("moveend getCenter="+xy);
        //naverMaps.setCenter(new naver.maps.LatLng(xy[1], xy[0]));
    }catch(e){}
    
    openlayersControll = false;
});

var openlayersControll = false; // 오픈레이어지 지도 컨트롤 여부


maps4.map.on('propertychange', function(evt) {		
    
    console.log("propertychange=");
});

maps4.map.on('change', function(evt) {		
    
    console.log("change=");
});

buttonClick4(37);
var moveParams2=[];
moveParams2.push(127.12827);
moveParams2.push(37.41193);

maps4.setCenter(moveParams);
maps4.setZoom(11);
//map - 경기도 방문자 체류시간 지도 시각화 2 -------------------------------------------------------------------------
//map - 경기도 탄소배출량 지도 시각화 1 -------------------------------------------------------------------------
maps5 = new MapController("container_map5");

content = document.getElementById('popup-content');
closer = document.getElementById('popup-closer');

closer.onclick = function() {
    maps5.setOverlayPosition(undefined);
    closer.blur();
    return false;
};

var zoomChange=false;
maps5.map.on('wheel', function(evt) {
    zoomChange=true;
    openlayersControll = true;
    console.log("wheel="+maps5.map.getView().getZoom());
});
maps5.map.on('movestart', function(evt) {
    
    openlayersControll = true;
});
maps5.map.on('moveend', function(evt) {
    
    if(zoomChange){
        var zoomLv = maps5.map.getView().getZoom();
        console.log("moveend getZoom="+zoomLv);
        naverMaps.setZoom(zoomLv);
    }
    try{
        evt.coordinate = maps5.map.getView().getCenter();
        var xy = ol.proj.transform([evt.coordinate[0],evt.coordinate[1]],'EPSG:3857','EPSG:4326');
        console.log("moveend getCenter="+xy);
        //naverMaps.setCenter(new naver.maps.LatLng(xy[1], xy[0]));
    }catch(e){}
    
    openlayersControll = false;
});

var openlayersControll = false; // 오픈레이어지 지도 컨트롤 여부


maps5.map.on('propertychange', function(evt) {		
    
    console.log("propertychange=");
});

maps5.map.on('change', function(evt) {		
    
    console.log("change=");
});

buttonClick5(35);
var moveParams=[];
moveParams.push(127.12827);
moveParams.push(37.41193);

maps5.setCenter(moveParams);
maps5.setZoom(11);
//map - 경기도 탄소배출량 지도 시각화 1 -------------------------------------------------------------------------
//map - 경기도 탄소배출량 지도 시각화 2 -------------------------------------------------------------------------
maps6 = new MapController("container_map6");

content = document.getElementById('popup-content');
closer = document.getElementById('popup-closer');

closer.onclick = function() {
    maps6.setOverlayPosition(undefined);
    closer.blur();
    return false;
};

var zoomChange=false;
maps6.map.on('wheel', function(evt) {
    zoomChange=true;
    openlayersControll = true;
    console.log("wheel="+maps6.map.getView().getZoom());
});
maps6.map.on('movestart', function(evt) {
    
    openlayersControll = true;
});
maps6.map.on('moveend', function(evt) {
    
    if(zoomChange){
        var zoomLv = maps6.map.getView().getZoom();
        console.log("moveend getZoom="+zoomLv);
        naverMaps.setZoom(zoomLv);
    }
    try{
        evt.coordinate = maps6.map.getView().getCenter();
        var xy = ol.proj.transform([evt.coordinate[0],evt.coordinate[1]],'EPSG:3857','EPSG:4326');
        console.log("moveend getCenter="+xy);
        //naverMaps.setCenter(new naver.maps.LatLng(xy[1], xy[0]));
    }catch(e){}
    
    openlayersControll = false;
});

var openlayersControll = false; // 오픈레이어지 지도 컨트롤 여부


maps6.map.on('propertychange', function(evt) {		
    
    console.log("propertychange=");
});

maps6.map.on('change', function(evt) {		
    
    console.log("change=");
});

buttonClick6(36);
var moveParams2=[];
moveParams2.push(127.12827);
moveParams2.push(37.41193);

maps6.setCenter(moveParams);
maps6.setZoom(11);
//map - 경기도 탄소배출량 지도 시각화 2 -------------------------------------------------------------------------

//1_1-----------------------------------------------------------------------
//파이차트 -- 2개는 안됨
const piechart = Highcharts.chart('container_1_1', {
    chart: {
        type: 'pie',
        width:650,
        height:620
    },
    title: {
        text: '성남시 이동수단 및 성별 유입인구 분포'
    },
    tooltip: {
        valueSuffix: '%'
    },
  
    plotOptions: {
    
        pie: {
            animation : false,
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: false
            },
            point: {
                events: {
                    load: function() {
                        const series = this.series[0];
                        
                
                        series.points.forEach(point => {
                          ['label', 'symbol'].forEach(prop => {
                            point.legendItem[prop].on('mouseover', () => {
                              console.log("mouseover");
                            });
                
                            point.legendItem[prop].on('mouseout', () => {
                                console.log("mouseout");
                            });
                          });
                        });
                      },
                      render: function() {
                        this.series && this.title.attr({
                          y: this.plotHeight / 2 + this.plotTop + 5
                        });
                      },  
                  legendItemClick: function(event) {
                    const index = event.target.index;
                    const isVisible = event.target.visible;
                    
                    piechart.series[1].data.forEach(point => {
                      if (point.index === index) {
                        point.update({
                          visible: !isVisible
                        })
                      }
                    })
                  },
                  mouseOver: function(e) {
                    console.log("mouseOver");
                    // $(e.currentTarget.legendItem.element).trigger('mouseover');
                  },
                  mouseOut: function(e) {
                    console.log("mouseOut");
                    // $(e.currentTarget.legendItem.element).trigger('mouseout');                    
                  }
                }
              },
            // showInLegend: true
        },
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }],
            states: {
              hover: {
                enabled: true
              }
            }
            
        }
    },
    series: [
        {   
            size : "50%",
            center: ['25%', '50%'],
            name: 'Percentage',
            showInLegend: true,
            colorByPoint: true,
            data: [
                {
                    name: '자동차',
                    y: 75.25,
                    color :'#5470c6',
                    // selected: true,
                
                    // sliced: true,
                },
                {
                    name: '버스',
                    // sliced: true,
                   
                    y: 11.6,
                    color :'#91cc75'
                    
                },
                {
                    name: '지하철',
                    
                    y: 0.71,
                    color :'#fac858'
                },
                {
                    name: '기타',
                    y: 10.41,
                    color :'#73c0de'
                },
                {
                    name: '도보',
                    y: 1.95,
                    color :'#ee6666'
                }
            ]
        },
        {
            size : "50%",
            center: ['75%', '50%'],
            name: 'Percentage',
            // showInLegend: false,
            colorByPoint: true,
            data: [
                {
                    name: '자동차',
                    y: 77.2,
                    color :'#5470c6',
                    // selected: true,
                
                    // sliced: true,
                },
                {
                    name: '버스',
                    // sliced: true,
                   
                    y: 10.9,
                    color :'#91cc75'
                    
                },
                {
                    name: '지하철',
                    
                    y: 0.71,
                    color :'#fac858'
                },
                {
                    name: '기타',
                    y: 10.6,
                    color :'#73c0de'
                },
                {
                    name: '도보',
                    y: 1.95,
                    color :'#ee6666'
                }
            ]
        }
    ]
});

$('.highcharts-legend text, .highcharts-legend span').each(function(index, element) {
    $(element).hover(function() {
        
        piechart.series[1].points.forEach(function(s,idx) {
            if(idx == index){
                piechart.series[1].points[idx].setState('hover');
            }else{
                piechart.series[1].points[idx].graphic.attr({
                    opacity: 0.2
                })
            }
        });
        
        
    },function() {

        piechart.series[1].points.forEach(function(s,idx) {
            piechart.series[1].points[idx].setState('');
            piechart.series[1].points[idx].graphic.attr({
                opacity: 1
            })
        });

    })
});
//1_1-----------------------------------------------------------------------

//1_2-----------------------------------------------------------------------
Highcharts.chart('container_1_2', {
    chart: {
        type: 'column',
        width:650,
        height:620
    },
    title: {
        text: '성남시 이동수단 및 성별 유출인구 분포',
        // align: 'left'
    },
    xAxis: {
        categories: ['자동차', '버스', '지하철', '도보', '기타']
    },
    yAxis: {
        min: 0,
        title: {
            text: '유출인구 수(명)'
        },
        stackLabels: {
            enabled: true,
          
        }
    },
    legend: {
        align: 'center',
        x: 30,
        verticalAlign: 'top',
        y: 50,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || 'white',
        borderColor: '#CCC',
        borderWidth: 0,
        shadow: false
    },
    tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: true,
                color: '#ffffff'
               
                
            }
        }
    },
    series: [
    {
        name: '남자',
        data: [70003, 8080, 10053, 2351,10598],
        color : '#0080ff'
    }, {
        name: '여자',
        data: [86494, 8768, 12724, 2081,11231],
        color : '#ff0033'
    }
    
    ]
});
//1_2-----------------------------------------------------------------------

//2_1-----------------------------------------------------------------------
//유입유출- 월별 시계열
const chart = Highcharts.chart('container_2_1', {
    title: {
        text: '성남시 월별 성별 유입인구 시계열 분포',
        // align: 'left',
        // margin: 55
    },
    
   chart: {
        type: 'spline',
        width:650,
        height:620
    },
    annotations: [{
     draggable: '',
        labelOptions: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            verticalAlign: 'top',
            y: 15
        },
        labels: [{
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 10,
                y: 4000
            },
            
            text: 'testest'
        }]
    }],
    sonification: {
        duration: 8000,
        defaultInstrumentOptions: {
            mapping: {
                pitch: {
                    min: 'c3',
                    max: 'd6'
                }
            }
        },
        globalContextTracks: [{
            // A repeated piano note for the 0 plot line
            instrument: 'piano',
            valueInterval: 1 / 3, // Play 3 times for every X-value
            mapping: {
                pitch: {
                    mapTo: 'y',
                    value: 0 // Map to a fixed Y value
                },
                volume: 0.1
            }
        }, {
            // Percussion sound indicates the plot band
            instrument: 'shaker',
            activeWhen: {
                valueProp: 'x', // Active when X is between these values.
                min: 4,
                max: 9
            },
            timeInterval: 100, // Play every 100 milliseconds
            mapping: {
                volume: 0.1
            }
        }, {
            // Speak the plot band label
            type: 'speech',
            valueInterval: 1,
            activeWhen: {
                crossingUp: 4 // Active when crossing over x = 4
            },
            mapping: {
                text: 'Summer',
                rate: 2.5,
                volume: 0.3
            }
            
        }]
    },

    yAxis: {

        plotLines: [{
            value: 1300,
            color: '#59D',
            dashStyle: 'ShortDash',
            width: 4
        }],
        title: {
            enabled: false
        },
        labels: {
            format: '{text}명'
        },
        //gridLineWidth: 1
    },

    xAxis: {
   plotLines: [{
            value: 5.5,
            color: '#ee7219',
             dashStyle: 'shortDash',
            width: 2
        }, {
            value: 11.5,
            color: '#ee7219',
             dashStyle: 'shortDash',
            width: 2
        },
        {
            value: 17.5,
            color: '#ee7219',
             dashStyle: 'shortDash',
            width: 2
        },
        {
            value: 23.5,
            color: '#ee7219',
             dashStyle: 'shortDash',
            width: 2
        },
        {
            value: 29.5,
            color: '#ee7219',
             dashStyle: 'shortDash',
            width: 2
        },
        {
            value: 35.5,
            color: '#ee7219',
             dashStyle: 'shortDash',
            width: 2
        },
        {
            value: 41.5,
            color: '#ee7219',
             dashStyle: 'shortDash',
            width: 2
        }
        ],
        plotBands: [{
            from: 0,
            to: 5.4,
            color: '#FFFFFF',
            label: {style: {
            fontWeight: 'bold',
            fontSize: '15px'
           },
                text: '23년8월',
                align: 'center',
                x: 0
            }
        },
        
        {
            from: 5.6,
            to: 11.4,
            color: '#FFFFFF',
            label: {style: {
            fontWeight: 'bold',
            fontSize: '15px'
           },
                text: '23년9월',
                backgroundColor:'rgba(244, 244, 244,1)',
                align: 'center',
                x: 0
            }
        },
          {
            from: 11.6,
            to: 17.4,
            color: '#FFFFFF',
            label: {style: {
            fontWeight: 'bold',
            fontSize: '15px'
           },
                text: '23년10월',
                align: 'center',
                x: 0
            }
        },
        {
            from: 17.6,
            to: 23.4,
            color: '#FFFFFF',
            label: {style: {
            fontWeight: 'bold',
            fontSize: '15px'
           },
                text: '23년11월',
                align: 'center',
                x: 0
            }
        },
         {
            from: 23.6,
            to: 29.4,
            color: '#FFFFFF',
            label: {
            style: {
            fontWeight: 'bold',
            fontSize: '15px'
           },
                text: '23년12월',
                align: 'center',
                x: 0
            }
        },
         {
            from: 29.6,
            to: 35.4,
            color: '#FFFFFF',
            label: {
             style: {
            fontWeight: 'bold',
            fontSize: '15px'
           },
                text: '24년1월',
                align: 'center',
                x: 0
            }
        },
           {
            from: 35.6,
            to: 41.4,
            color: '#FFFFFF',
            label: {
                   style: {
                  fontWeight: 'bold',
                  fontSize: '15px'
                 },
                text: '24년2월',
                align: 'center',
                x: 0
            }
        }
        ],
       
        crosshair: true,
        categories: 
        [
        		//'출근', '오전', '점심', '오후', '퇴근', '밤', 
            '', '', '', '', '', '', 
            '', '', '', '', '', '', 
            '', '', '', '', '', '', 
            '', '', '', '', '', '', 
            '', '', '', '', '', '', 
            '', '', '', '', '', '', 
            '', '', '', '', '', ''
         ]
    },

    legend: {
        enabled: true
    },

    tooltip: {
        valueSuffix: '명'
    },
		 plotOptions: {
        spline: {
            marker: {
                radius: 0,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
    
    
        name: '남자',
        data: [
        				1438,729,312,1520,1242,142,1730,293,224,1432,1499,145,2076,351,268,1718,1798,174,1538,629,382,1590,1272,252,1753.32,717.06,435.48,1812.6,1450.08,287.28,238,1329,782,590,721,252,238,1629,782,390,721,452
                ],
        color: '#3319f9',
        lineWidth: 4,
    },
    {
        name: '여자',
        data: [
        				1123 ,882 ,592 ,298 ,1421 ,242 ,1340 ,230 ,254 ,405 ,1637 ,142 ,1581 ,271 ,299 ,477 ,1931 ,189 ,1243 ,812 ,712 ,438 ,1521 ,342 ,1504 ,983 ,862 ,530 ,1840 ,414 ,243 ,1912 ,452 ,1438 ,821 ,1142 ,243 ,2112 ,452 ,1738 ,821 ,1142
                ],
        color: '#f91937',
        lineWidth: 4,
    }
    
    ]
});

// document.getElementById('sonify').onclick = function () {
//     chart.toggleSonify();
// };

//2_1-----------------------------------------------------------------------

//2_2-----------------------------------------------------------------------
//연령별 요일별 분포
const chart2 = Highcharts.chart('container_2_2', {
    title: {
        text: '성남시 월별 이동수단별 유출인구 시계열 분포',
        // align: 'left',
        // margin: 55
    },
    
   chart2: {
        type: 'spline', 
        width:650,
        height:620
    },
    annotations: [{
     draggable: '',
        labelOptions: {
            backgroundColor: 'rgba(0,0,0,0.5)',
            verticalAlign: 'top',
            y: 15
        },
        labels: [{
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 10,
                y: 4000
            },
            
            text: 'testest'
        }]
    }],
    sonification: {
        duration: 8000,
        defaultInstrumentOptions: {
            mapping: {
                pitch: {
                    min: 'c3',
                    max: 'd6'
                }
            }
        },
        globalContextTracks: [{
            // A repeated piano note for the 0 plot line
            instrument: 'piano',
            valueInterval: 1 / 3, // Play 3 times for every X-value
            mapping: {
                pitch: {
                    mapTo: 'y',
                    value: 0 // Map to a fixed Y value
                },
                volume: 0.1
            }
        }, {
            // Percussion sound indicates the plot band
            instrument: 'shaker',
            activeWhen: {
                valueProp: 'x', // Active when X is between these values.
                min: 4,
                max: 9
            },
            timeInterval: 100, // Play every 100 milliseconds
            mapping: {
                volume: 0.1
            }
        }, {
            // Speak the plot band label
            type: 'speech',
            valueInterval: 1,
            activeWhen: {
                crossingUp: 4 // Active when crossing over x = 4
            },
            mapping: {
                text: 'Summer',
                rate: 2.5,
                volume: 0.3
            }
            
        }]
    },

    yAxis: {

       
        title: {
            enabled: false
        },
        labels: {
            format: '{text}명'
        },
        //gridLineWidth: 1
    },

    xAxis: {
   plotLines: [{
            value: 5.5,
            color: '#ee7219',
             dashStyle: 'shortDash',
            width: 2
        }, {
            value: 11.5,
            color: '#ee7219',
             dashStyle: 'shortDash',
            width: 2
        },
        {
            value: 17.5,
            color: '#ee7219',
             dashStyle: 'shortDash',
            width: 2
            
        },
        {
            value: 23.5,
            color: '#ee7219',
             dashStyle: 'shortDash',
            width: 2
        },
        {
            value: 29.5,
            color: '#ee7219',
             dashStyle: 'shortDash',
            width: 2
        },
        {
            value: 35.5,
            color: '#ee7219',
             dashStyle: 'shortDash',
            width: 2
        },
        {
            value: 41.5,
            color: '#ee7219',
             dashStyle: 'shortDash',
            width: 2
        }
    
        ],
        plotBands: [{
            from: 0,
            to: 5.4,
            color: '#FFFFFF',
            label: {style: {
            fontWeight: 'bold',
            fontSize: '15px'
           },
                text: '23년8월',
                align: 'center',
                x: 0
            }
        },
        
        {
            from: 5.6,
            to: 11.4,
            color: '#FFFFFF',
            label: {style: {
            fontWeight: 'bold',
            fontSize: '15px'
           },
                text: '23년9월',
                backgroundColor:'rgba(244, 244, 244,1)',
                align: 'center',
                x: 0
            }
        },
          {
            from: 11.6,
            to: 17.4,
            color: '#FFFFFF',
            label: {style: {
            fontWeight: 'bold',
            fontSize: '15px'
           },
                text: '23년10월',
                align: 'center',
                x: 0
            }
        },
        {
            from: 17.6,
            to: 23.4,
            color: '#FFFFFF',
            label: {style: {
            fontWeight: 'bold',
            fontSize: '15px'
           },
                text: '23년11월',
                align: 'center',
                x: 0
            }
        },
         {
            from: 23.6,
            to: 29.4,
            color: '#FFFFFF',
            label: {style: {
            fontWeight: 'bold',
            fontSize: '15px'
           },
                text: '23년12월',
                align: 'center',
                x: 0
            }
        },
         {
            from: 29.6,
            to: 35.4,
            color: '#FFFFFF',
            label: {style: {
            fontWeight: 'bold',
            fontSize: '15px'
           },
                text: '24년1월',
                align: 'center',
                x: 0
            }
        },
           {
            from: 35.6,
            to: 41.4,
            color: '#FFFFFF',
            label: {style: {
            fontWeight: 'bold',
            fontSize: '15px'
           },
                text: '24년2월',
                align: 'center',
                x: 0
            }
        }
        ],
       
        crosshair: true,
        categories: 
        [
        		//'출근', '오전', '점심', '오후', '퇴근', '밤', 
            '', '', '', '', '', '', 
            '', '', '', '', '', '', 
            '', '', '', '', '', '', 
            '', '', '', '', '', '', 
            '', '', '', '', '', '', 
            '', '', '', '', '', '', 
            '', '', '', '', '', ''
         ]
    },

    legend: {
        enabled: true
    },

    tooltip: {
        valueSuffix: '명'
    },
		 plotOptions: {
        spline: {
            marker: {
                radius: 0,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [
     {
        name: '자동차',
        data: [
        				4902.6,37303.0,42326.0,46369.5,74565.6,40215.5,4342.3,49738.6,46482.6,43307.6,82004.2,43097.5,4472.7,47653.5,47204.8,44139.5,81482.5,43367.0,4255.0,47572.4,45651.5,44218.0,83393.7,44476.3,5456.5,53991.8,59158.3,64156.5,115483.5,71099.3,7429.5,15274.9,66971.4,89538.4,116347.4,73575.2,7227.6,10505.2,54200.6,78180.0,93315.4,60375.3
                ],
        color: '#4472c4',
        lineWidth: 3,
        opacity: 1
    },
    
     {
        name: '버스',
        data: [
        				8785.2,34157.6,32366.2,26914.2,40788.5,20476.8,10548.7,41586.2,37136.7,28799.6,49496.7,24553.9,10595.7,41213.9,36922.9,28937.9,49419.4,24858.9,10300.1,40351.2,35412.7,28322.7,48896.4,24768.1,12751.6,48932.0,45323.9,37406.8,62644.3,32865.4,7732.3,18502.8,40569.0,38945.0,45147.8,26097.9,5035.0,15559.9,33281.5,35661.6,35682.0,20824.1
                ],
        color: '#70ad47',
        lineWidth: 3,
        opacity: 1
    },
  
    {
        name: '지하철',
        data: [
        				10313.1,21580.6,30373.0,28224.9,28150.2,13221.9,11820.0,24606.3,34189.6,32507.6,33148.1,16120.3,12256.4,24687.2,33446.9,30456.6,32733.3,16801.7,11632.4,24028.9,31748.6,29991.0,33099.1,15836.6,14906.6,30093.1,40864.0,37358.2,44081.1,21786.1,9993.6,16814.9,37976.2,34429.2,34812.3,18590.8,6675.7,16063.7,31683.2,32523.6,28516.3,14178.4
                ],
        color: '#a5a5a5',
        lineWidth: 3,
        opacity: 1
    },
    
   
     
    
     
    {

        name: '도보',
        data: [
        				160.4,10443.1,2936.2,11369.2,10282.8,2322.5,282.2,12842.4,1426.9,11815.8,10500.2,2471.0,217.4,11553.5,1520.6,11626.2,10052.7,2709.5,62.3,10492.3,1148.0,11417.6,8673.0,2635.0,132.1,13531.8,2506.1,14576.0,13293.0,3572.3,191.4,1055.2,13375.3,11475.7,10940.5,5878.9,243.8,1494.5,12233.2,12730.8,10999.8,4356.6
                ],
        color: '#3319f9',
        lineWidth: 3,
        opacity: 1
    },
    
   {
        name: '기타',
        data: [
        				5651.7,9506.2,19803.9,18718.4,12946.5,4049.6,6522.7,11592.5,22708.9,21833.1,15088.9,5036.5,6304.2,11226.4,22764.1,20451.3,14312.0,5305.6,6516.2,10765.6,21026.9,20420.1,13956.4,5010.6,8218.7,13714.4,26736.9,24301.8,18014.0,6600.2,5839.7,8002.0,23597.0,19440.6,15405.3,5992.2,4389.2,8355.5,19519.4,19448.7,13132.4,4945.6
                ],
        color: '#f91937',
        lineWidth: 3,
        opacity: 1
    },
   
    
    
    
    
    
    ]
});

// document.getElementById('sonify').onclick = function () {
//     chart2.toggleSonify();
// };

//2_2-----------------------------------------------------------------------
    
//3_1-----------------------------------------------------------------------
//유입유출남녀스택
Highcharts.chart('container_3_1', {

    chart: {
      type: 'column',
      width:650,
        height:620
    },
  
    title: {
      text: '성남시 타지역간 유입인구 분포'
    },
  
    xAxis: {
      categories: ['용인시', '광주시','송파구', '강남구','서초구','수원시','하남시']
    },
  
    yAxis: {
      allowDecimals: false,
      min: 0,
      title: {
        text: '유입인구 수(명)'
      },
       stackLabels: {
          enabled: true,
          y: 0,
          formatter: function() {
              return  this.stack;
          }
      }
    },
  
    tooltip: {
      formatter: function() {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + '<br/>' +
          'Total: ' + this.point.stackTotal;
      }
    },
  
    plotOptions: {
      column: {
        stacking: 'normal'
      }
    },
  
    series: [
    {
      name: '기타',
      data: [4768,1876,2967,719,285,52,1721],
      stack: '남',
      color: '#73c0de'
    }, {
      name: '기타',
      data: [4904,1928,2195,676,183,24,2074],
      stack: '여',
      linkedTo: ':previous',
      color: '#73c0de'
    },
     {
      name: '도보',
      data: [1069,395,643,189,67,0,421],
      stack: '남',
      color: '#ee6666'
    }, {
      name: '도보',
      data: [977,439,553,157,80,8,406,],
      stack: '여',
      linkedTo: ':previous',
      color: '#ee6666'
    },  {
      name: '지하철',
      data: [8329,1117,13314,14246,7683,4127,467],
      stack: '남',
      color: '#fac858'
    }, {
      name: '지하철',
      data: [8517,1053,13698,16385,8290,4654,419,],
      stack: '여',
      linkedTo: ':previous',
      color: '#fac858'
    }, {
      name: '버스',
      data: [15457,10741,9347,3194,1893,592,2516],
      stack: '남',
      color: '#8ecb71'
    }, {
      name: '버스',
      data: [16396,11341,8735,2981,1739,544,3422,],
      stack: '여',
      linkedTo: ':previous',
      color: '#8ecb71'
    },{
      name: '자동차',
      data: [97831,65267,50397,42133,25608,25190,17803],
      stack: '남',
      color: '#5470c6'
    }, {
      name: '자동차',
      data: [99028,67121,45694,39508,23532,25800,21535,],
      stack: '여',
      linkedTo: ':previous',
      color: '#5470c6'
    },
    
    ]
  });
  
//3_1-----------------------------------------------------------------------

//3_2-----------------------------------------------------------------------

//유입유출- 스택비율
Highcharts.chart('container_3_2', {

    chart: {
      type: 'column',
      width:650,
        height:620
    },
  
    title: {
      text: '성남시 타지역간 유출인구 분포'
    },
  
    xAxis: {
      categories: ['용인시', '광주시','송파구', '강남구','서초구','수원시','하남시']
    },
  
    yAxis: {
      allowDecimals: false,
      min: 0,
      title: {
        text: '유출인구 수(명)'
      },
       stackLabels: {
          enabled: true,
          y: 250,
          formatter: function() {
              return  this.stack;
          }
      }
    },
  
    tooltip: {
      formatter: function() {
        return '<b>' + this.x + '</b><br/>' +
          this.series.name + ': ' + this.y + '<br/>' +
          'Total: ' + this.point.stackTotal;
      }
    },
  
    plotOptions: {
      column: {
        stacking: 'percent'
      }
    },
  
    series: [
    {
      name: '기타',
      data: [4768,1876,2967,719,285,52,1721],
      stack: '남',
      color: '#73c0de'
    }, {
      name: '기타',
      data: [4904,1928,2195,676,183,24,2074],
      stack: '여',
      linkedTo: ':previous',
      color: '#73c0de'
    },
     {
      name: '도보',
      data: [1069,395,643,189,67,0,421],
      stack: '남',
      color: '#ee6666'
    }, {
      name: '도보',
      data: [977,439,553,157,80,8,406,],
      stack: '여',
      linkedTo: ':previous',
      color: '#ee6666'
    },  {
      name: '지하철',
      data: [8329,1117,13314,14246,7683,4127,467],
      stack: '남',
      color: '#fac858'
    }, {
      name: '지하철',
      data: [8517,1053,13698,16385,8290,4654,419,],
      stack: '여',
      linkedTo: ':previous',
      color: '#fac858'
    }, {
      name: '버스',
      data: [15457,10741,9347,3194,1893,592,2516],
      stack: '남',
      color: '#8ecb71'
    }, {
      name: '버스',
      data: [16396,11341,8735,2981,1739,544,3422,],
      stack: '여',
      linkedTo: ':previous',
      color: '#8ecb71'
    },{
      name: '자동차',
      data: [97831,65267,50397,42133,25608,25190,17803],
      stack: '남',
      color: '#5470c6'
    }, {
      name: '자동차',
      data: [99028,67121,45694,39508,23532,25800,21535,],
      stack: '여',
      linkedTo: ':previous',
      color: '#5470c6'
    },
    
    ]
  });
  
//3_2-----------------------------------------------------------------------

//4_1-----------------------------------------------------------------------

//4_1-----------------------------------------------------------------------

//4_2-----------------------------------------------------------------------

//4_2-----------------------------------------------------------------------

//5_1-----------------------------------------------------------------------
//방문자 수 체류시간 혼합차트
// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container_5_1', {
    chart: {
        width:650,
        height:620
    },
    title: {
        text: '이동 목적 별 방문자 수 및 체류시간 분포'
    },
  
    xAxis: {
        categories: ['귀가', '회사', '학교', '쇼핑(레저)', '관광', '기타']
    },
    yAxis: [{
        title: {
            text: '방문자수 (명)'
        },
    },
     {
        opposite: true,
        title: {
            text: '체류시간(분)'
        }}
    ],
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: false
        }
    },
    series: [{
    		yAxis: 0,
    		type: 'column',
        name: '방문자수',
        data: [1133415,123392,16922,252636,497009,85350],
         color : '#0064b5'
    }, {
    		yAxis: 1,
        name: '체류시간',
        type: 'line',
        data: [18045,19238,21543,20912,18502,16774],
         color : '#d24043'
    },
    
    ]
});
//5_1-----------------------------------------------------------------------

//5_2-----------------------------------------------------------------------
//bar wide
Highcharts.setOptions({
    lang: {
        numericSymbols: null,
        thousandsSep: ','
    }
});
Highcharts.chart('container_5_2', {

chart: {
    type: 'variwide',
    width:650,
    height:620
   
},

title: {
    text: '이동 목적 별 방문자 수 및 체류시간 분포'
},



xAxis: {
    type: 'category',
    labels:{
        style: {
        fontWeight: 'bold',
        fontSize: '15px'
       }
     }
},
 yAxis: {
       labels:{
        style: {
        fontWeight: 'bold',
        fontSize: '12px'
       }
     },
    title: {
        text: '체류시간 (분)',
          style: {
                                  fontFamily: 'Helvetica',
                        fontSize: '15px',
                      
                    }
    },
},
caption: {
    text: '차트의 너비는 방문자 수를 의미합니다.',
            
         style: {
        fontWeight: 'bold',
        fontSize: '14px'
       }
    
},

legend: {
    enabled: false
},

series: [{
    name: 'Labor Costs',
    data: [
         ['귀가', 16774, 85350] ,
        ['회사', 18045, 1133415],
        ['학교', 18502, 497009],
        ['쇼핑(레저)', 19238, 123392],
        ['관광', 20912, 252636],
        ['기타', 21543, 16922],
       

    ],
    dataLabels: {
        enabled: true,
        style: {
                        fontSize: '13px'
                    }
     
    },
    tooltip: {
        pointFormat: '<b>체류시간: {point.y} 분</b><br>' +
            '<b> 방문자 수:  {point.z} 명</b><br>'
    },
    borderRadius: 4,
    

      colors: [
      '#5470c6', 
      '#91cc75', 
      '#fac858', 
      '#ee6666', 
      '#73c0de', 
  
      ],



    colorByPoint: true
}]

});

//5_2-----------------------------------------------------------------------

//6_1-----------------------------------------------------------------------
//혼합차트
// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container_6_1', {
    chart: {
        width:650,
        height:620
    },
    title: {
        text: '성남시 성별 방문자 체류시간 시계열 분포'
    },
  
    xAxis: {
        categories: ['23.01', '23.02', '23.03', '23.04', '23.05', '23.06', '23.07', '23.08', '23.09', '23.10', '23.11', '23.12']
    },
    yAxis: {
        title: {
            text: '체류시간 (분)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: false
        }
    },
    series: [{
          type: 'column',
        name: '총합',
        data: [17003,17917,14590,16123,18132,15166,17801,15328,18460,16224,16335,16529],
         color : '#8da890'
    }, {
        name: '남자',
        type: 'line',
        data: [8531,8743,7678,8489,9218,7821,8824,7341,9487,7911,6948,8813],
         color : '#0080ff'
    },
    {
        name: '여자',
        type: 'line',
        data: [8472,9174,6912,7634,8914,7345,8977,7987,8973,8313,9387,7716],
        color : '#ff0033'
    }
    
    ]
});
//6_1-----------------------------------------------------------------------

//6_2-----------------------------------------------------------------------
//혼합차트
// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container_6_2', {
    chart: {
        width:650,
        height:620
    },
    title: {
        text: '성남시 이동수단별 방문자 체류시간 시계열 분포'
    },
  
    xAxis: {
        categories: ['23.01', '23.02', '23.03', '23.04', '23.05', '23.06', '23.07', '23.08', '23.09', '23.10', '23.11', '23.12']
    },
    yAxis: {
        title: {
            text: '체류시간 (분)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: false
        }
    },
    series: [{
          type: 'column',
        name: '총합',
        data: [17032,15473,15794,16825,16867,15559,17492,16320,17307,17216,17514,16210],
         color : '#a79990',
         opacity: 0.8
    }, {
        name: '자동차',
        type: 'line',
        data: [8134,7181,6648,8199,7671,7486,8124,7513,7913,8012,8246,7029],
         color : '#5470c6',
         lineWidth: 3,
    },
    {
        name: '버스',
        type: 'line',
        data: [4531,3941,4646,3977,4877,3914,5187,4487,4715,4787,4911,4679],
        color : '#8ecb71',
         lineWidth: 3,
    },
    {
        name: '지하철',
        type: 'line',
        data: [2348,2323,2435,2698,2521,2238,2349,2487,2672,2421,2431,2548],
        color : '#fac858',
         lineWidth: 3,
    },
    {
        name: '도보',
        type: 'line',
        data: [1218,1277,1378,1140,1077,1242,1098,1179,1309,1279,1222,1263],
        color : '#ee6666',
         lineWidth: 3,
    },
    {
        name: '기타',
        type: 'line',
        data: [801,751,687,811,721,679,734,654,698,717,704,691],
        color : '#73c0de',
         lineWidth: 3,
    }
    
    
    ]
});
//6_2-----------------------------------------------------------------------

//7_1-----------------------------------------------------------------------
Highcharts.chart('container_7_1', {

    chart: {
        type: 'bubble',
        plotBorderWidth: 1,
        zoomType: 'xy',
        width:650,
            height:620
    },
    
    legend: {
        enabled: false
    },
    
    title: {
        text: '성남시 이동수단 별 탄소배출량 분포'
    },
    
    
    
    accessibility: {
        point: {
            valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.'
        }
    },
    
    xAxis: {
        gridLineWidth: 1,
        title: {
            text: '거리 (Km)'
        },
        labels: {
          
        },
      
        accessibility: {
            rangeDescription: 'Range: 60 to 100 grams.'
        }
    },
    
    yAxis: {
        startOnTick: false,
        endOnTick: false,
        title: {
            text: '탄소배출량 (tonCO2eq)'
        },
        labels: {
           
        },
        maxPadding: 0.2,
       
       
    },
    
    tooltip: {
        useHTML: true,
        headerFormat: '<table>',
        pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
            '<tr><th>거리:</th><td>{point.x}km</td></tr>' +
            '<tr><th>탄소배출량:</th><td>{point.y}tonCO2eq</td></tr>' +
            '<tr><th>인구수:</th><td>{point.z}명</td></tr>',
        footerFormat: '</table>',
        followPointer: true
    },
    
    plotOptions: {
    
     bubble: {
            minSize: 40,
            maxSize: 90
        },
        series: {
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    
    series: [{
        data: [
            { x: 95, y: 10000, z: 9000, name: '자동차', country: '자동차 탄소배출량' },
            { x: 80, y: 5000, z: 6500, name: '버스', country: '버스 탄소배출량' },
            { x: 70, y: 4000, z: 5900, name: '지하철', country: '지하철 탄소배출량' },
            { x: 33, y: 1000, z: 3000, name: '도보', country: '도보 탄소배출량' },
            { x: 24, y: 1100, z: 2500, name: '기타', country: '기타 탄소배출량' },
         
        ],
        colorByPoint: true
    }]
    
    });
    //7_1-----------------------------------------------------------------------
    
    //7_2-----------------------------------------------------------------------
    Highcharts.chart('container_7_2', {
    
        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy',
            width:650,
            height:620
        },
    
        legend: {
            enabled: false
        },
    
        title: {
            text: '경기도 시군구별 탄소 배출량 분포'
        },
    
      
    
        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.'
            }
        },
    
        xAxis: {
            gridLineWidth: 1,
            title: {
                text: '거리 (km)'
            },
            labels: {
            
            },
          
            accessibility: {
                rangeDescription: 'Range: 60 to 100 grams.'
            }
        },
    
        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: '탄소배출량 (tonCO2eq)'
            },
            labels: {
               
            },
            maxPadding: 0.2,
           
           
        },
    tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
                '<tr><th>거리:</th><td>{point.x}km</td></tr>' +
                '<tr><th>탄소배출량:</th><td>{point.y}tonCO2eq</td></tr>' +
                '<tr><th>인구수:</th><td>{point.z}명</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },
        
    
        plotOptions: {
     bubble: {
                minSize: 20,
                maxSize: 70
            },
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
    
        series: [{
            data: [
    { x: 150, y: 11346024, z: 10000, name: '화성시', country:'화성시 탄소배출량' },
    { x: 80, y: 5831163, z: 8541, name: '용인시', country:'용인시 탄소배출량' },
    { x: 70, y: 5142075, z: 5497, name: '안산시', country:'안산시 탄소배출량' },
    { x: 33, y: 4642079, z: 6781, name: '고양시', country:'고양시 탄소배출량' },
    { x: 24, y: 4601148, z: 7103, name: '성남시', country:'성남시 탄소배출량' },
    { x: 45, y: 4582362, z: 7942, name: '평택시', country:'평택시 탄소배출량' },
    { x: 66, y: 4295983, z: 4872, name: '이천시', country:'이천시 탄소배출량' },
    { x: 15, y: 3654491, z: 2745, name: '시흥시', country:'시흥시 탄소배출량' },
    { x: 87, y: 2937684, z: 3798, name: '파주시', country:'파주시 탄소배출량' },
    { x: 13, y: 2839477, z: 5792, name: '수원시', country:'수원시 탄소배출량' },
    { x: 24, y: 2792946, z: 6213, name: '남양주시', country:'남양주시 탄소배출량' },
    { x: 52, y: 2774154, z: 7734, name: '김포시', country:'김포시 탄소배출량' },
    { x: 77, y: 2732141, z: 8216, name: '부천시', country:'부천시 탄소배출량' },
    { x: 37, y: 2378919, z: 9542, name: '안성시', country:'안성시 탄소배출량' },
    { x: 99, y: 2307660, z: 3784, name: '광주시', country:'광주시 탄소배출량' },
    { x: 135, y: 2018631, z: 4575, name: '안양시', country:'안양시 탄소배출량' },
    { x: 47, y: 1673594, z: 9721, name: '포천시', country:'포천시 탄소배출량' },
    { x: 100, y: 1622081, z: 5475, name: '양주시', country:'양주시 탄소배출량' },
    { x: 124, y: 1487272, z: 6138, name: '의정부시', country:'의정부시 탄소배출량' },
    { x: 38, y: 1292760, z: 2742, name: '여주시', country:'여주시 탄소배출량' },
    { x: 61, y: 1175999, z: 3798, name: '하남시', country:'하남시 탄소배출량' },
    { x: 57, y: 1119133, z: 4219, name: '군포시', country:'군포시 탄소배출량' },
    { x: 142, y: 1115127, z: 5666, name: '오산시', country:'오산시 탄소배출량' },
    { x: 55, y: 1076103, z: 7137, name: '광명시', country:'광명시 탄소배출량' },
    { x: 91, y: 1034195, z: 3278, name: '의왕시', country:'의왕시 탄소배출량' },
    { x: 48, y: 939786, z: 4779, name: '구리시', country:'구리시 탄소배출량' },
    { x: 13, y: 856631, z: 6897, name: '양평군', country:'양평군 탄소배출량' },
    { x: 27, y: 597419, z: 8923, name: '가평군', country:'가평군 탄소배출량' },
    { x: 35, y: 412574, z: 9727, name: '과천시', country:'과천시 탄소배출량' },
    { x: 125, y: 392648, z: 4873, name: '동두천시', country:'동두천시 탄소배출량' },
    { x: 87, y: 278412, z: 5753, name: '연천군', country:'연천군 탄소배출량' },
    
    
    
             
            ],
            colorByPoint: true
        }]
    
    });
    //7_2-----------------------------------------------------------------------
    
    //8_1-----------------------------------------------------------------------
    //혼합차트
    // Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
    Highcharts.chart('container_8_1', {
        chart: {
            width:650,
            height:620
        },
        title: {
            text: '성남시 탄소배출량 지역별 비교'
        },
      
        xAxis: {
            categories: ['화성시','용인시','안산시','고양시','성남시','평택시','이천시','시흥시','파주시','수원시','남양주시','김포시']
        },
        yAxis: {
            title: {
                text: '탄소배출량 (tonCO2eq)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false
                },
                enableMouseTracking: false
            },
            
             series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}',
                  
                     style: {
                 
                     fontWeight: 'bold',
                          fontSize: '1.1em', 
                 
                }
                }
            }
            
        },
        series: [{
              type: 'column',
            name: '총합',
            data: [11346024,5831163,5142075,4642079,{y:4601148, color: '#BF0B23',name:'5위' },4582362,4295983,3654491,2937684,2839477,2792946,2774154],
             color : '#8da890'
        }
        ]
    });
    //8_1-----------------------------------------------------------------------
    
    //8_2-----------------------------------------------------------------------
    //혼합차트
    // Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
    Highcharts.chart('container_8_2', {
        chart: {
            width:650,
            height:620
        },
        title: {
            text: '성남시 이동수단별 탄소배출량 시계열 분포'
        },
      
        xAxis: {
            categories: ['23.01', '23.02', '23.03', '23.04', '23.05', '23.06', '23.07', '23.08', '23.09', '23.10', '23.11', '23.12']
        },
        yAxis: {
            title: {
                text: '탄소배출량 (tonCO2eq)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: false
                },
                enableMouseTracking: false
            }
        },
        series: [{
              type: 'column',
            name: '총합',
            data: [6372708,6670844,6798847,6521050,6806201,6730695,6994561,6760629,6784934,6521416,6592732,6396054],
             color : '#a79990',
             opacity: 0.8
        }, {
            name: '자동차',
            type: 'line',
            data: [4747667,4943095,5207917,5047293,5288418,5196097,5378817,5266530,5122625,5028012,5050033,4803437],
             color : '#5470c6',
             lineWidth: 3,
        },
        {
            name: '버스',
            type: 'line',
            data: [2625555,2721704,2753533,2601899,2688449,2692279,2706895,2629885,2684120,2608567,2670057,2615986],
            color : '#42963f',
             lineWidth: 3,
        },
        {
            name: '지하철',
            type: 'line',
            data: [771627,913939,788667,730358,776962,805678,921435,760706,884755,767806,828706,830975],
            color : '#fac858',
             lineWidth: 3,
        },
        {
            name: '도보',
            type: 'line',
            data: [165161,133384,115580,117379,182712,177004,155727,185782,189978,171278,160203,141225],
            color : '#ee6666',
             lineWidth: 3,
        },
        {
            name: '기타',
            type: 'line',
            data: [1439703,1467553,1475349,1421589,1543952,1523143,1554639,1537908,1546965,1475561,1478749,1420436],
            color : '#2f6e9e',
             lineWidth: 3,
        }
        
        
        ]
    });
    //8_2-----------------------------------------------------------------------
}


function openLayerMapCenter(params){
    maps.setCenter(params);
}

function setMapLayer(no){

    try{
        //maps.removeLayer("Hybrid");
        var types = maps.map.getLayers().getArray();
        for(var i=1; i < types.length; i++){ // 0번째는 베이스 타일
            if(types[i].type === "TILE"){
                (maps.map.getLayers().getArray()).splice(i,1);
            }
        }
    }catch(e){}

    var existingLayer = maps.map.getLayers().getArray()[0];
    // 새로운 지도타입 소스 생성
    var source;
    if(2 == no || 3 == no){ // 위성
        source = new ol.source.XYZ({
            url: 'http://xdworld.vworld.kr:8080/2d/Satellite/service/{z}/{x}/{y}.jpeg',
        });
        // 기존 레이어에 지도타입 소스 변경
        existingLayer.setSource(source);
        // 새로고침
        maps.map.updateSize();

        if(3 == no){ // 하이브리드
            var addTileLayer = new ol.layer.Tile({ //타일 생성
                    visible : true, //보여짐 여부
                    type : 'satellite',
                    source : new ol.source.XYZ({ //vworld api 사용
                        url: 'http://xdworld.vworld.kr:8080/2d/Hybrid/service/{z}/{x}/{y}.png',
                    }),
                    id: 'Hybrid',
                });
            maps.map.addLayer(addTileLayer);
        }
    }else{ // 일반
        source = new ol.source.XYZ({
            url: 'http://xdworld.vworld.kr:8080/2d/Base/service/{z}/{x}/{y}.png',
        })
        // 기존 레이어에 지도타입 소스 변경
        existingLayer.setSource(source);
        // 새로고침
        maps.map.updateSize();
    }
    
}

// GIS Server 기능
function buttonClick(no){
    maps.addLayer(layerDatas[no][0],layerDatas[no][1],function(response, params){
        console.log("response="+response);
        console.log("params="+params);

        // 팝업
        if(params.name == "DPGIS2-JIJUK"){
            content.innerHTML = '<p>pnu :</p><code>' + response.features[0].properties.pnu +'</code>';
            maps.setOverlayPosition(params.coordinate);
        }

        
    });

    if(no == 22){ // p.10 => 구축관로 예상 결과
        var params=[];
        params.push(126.84214593562383);
        params.push(37.59802524403525);

        maps.setZoom(16);
        maps.setCenter(params);
    }
    if(no == 25){ // p.15 => 구축관로 예상 결과 - 구간
        var params=[];
        params.push(126.6752594441295);
        params.push(37.57454292556048);

        maps.setZoom(20);
        maps.setCenter(params);
    }
}

function buttonClick2(no){
    maps2.addLayer(layerDatas[no][0],layerDatas[no][1],function(response, params){
        console.log("response="+response);
        console.log("params="+params);

        // 팝업
        if(params.name == "DPGIS2-JIJUK"){
            content.innerHTML = '<p>pnu :</p><code>' + response.features[0].properties.pnu +'</code>';
            maps2.setOverlayPosition(params.coordinate);
        }

        
    });

    if(no == 22){ // p.10 => 구축관로 예상 결과
        var params=[];
        params.push(126.84214593562383);
        params.push(37.59802524403525);

        maps2.setZoom(16);
        maps2.setCenter(params);
    }
    if(no == 25){ // p.15 => 구축관로 예상 결과 - 구간
        var params=[];
        params.push(126.6752594441295);
        params.push(37.57454292556048);

        maps2.setZoom(20);
        maps2.setCenter(params);
    }
}

function buttonClick3(no){
    maps3.addLayer(layerDatas[no][0],layerDatas[no][1],function(response, params){
        console.log("response="+response);
        console.log("params="+params);

        // 팝업
        if(params.name == "DPGIS2-JIJUK"){
            content.innerHTML = '<p>pnu :</p><code>' + response.features[0].properties.pnu +'</code>';
            maps3.setOverlayPosition(params.coordinate);
        }

        
    });

    if(no == 22){ // p.10 => 구축관로 예상 결과
        var params=[];
        params.push(126.84214593562383);
        params.push(37.59802524403525);

        maps3.setZoom(16);
        maps3.setCenter(params);
    }
    if(no == 25){ // p.15 => 구축관로 예상 결과 - 구간
        var params=[];
        params.push(126.6752594441295);
        params.push(37.57454292556048);

        maps3.setZoom(20);
        maps3.setCenter(params);
    }
}

function buttonClick4(no){
    maps4.addLayer(layerDatas[no][0],layerDatas[no][1],function(response, params){
        console.log("response="+response);
        console.log("params="+params);

        // 팝업
        if(params.name == "DPGIS2-JIJUK"){
            content.innerHTML = '<p>pnu :</p><code>' + response.features[0].properties.pnu +'</code>';
            maps4.setOverlayPosition(params.coordinate);
        }

        
    });

    if(no == 22){ // p.10 => 구축관로 예상 결과
        var params=[];
        params.push(126.84214593562383);
        params.push(37.59802524403525);

        maps4.setZoom(16);
        maps4.setCenter(params);
    }
    if(no == 25){ // p.15 => 구축관로 예상 결과 - 구간
        var params=[];
        params.push(126.6752594441295);
        params.push(37.57454292556048);

        maps4.setZoom(20);
        maps4.setCenter(params);
    }
}

function buttonClick5(no){
    maps5.addLayer(layerDatas[no][0],layerDatas[no][1],function(response, params){
        console.log("response="+response);
        console.log("params="+params);

        // 팝업
        if(params.name == "DPGIS2-JIJUK"){
            content.innerHTML = '<p>pnu :</p><code>' + response.features[0].properties.pnu +'</code>';
            maps5.setOverlayPosition(params.coordinate);
        }

        
    });

    if(no == 22){ // p.10 => 구축관로 예상 결과
        var params=[];
        params.push(126.84214593562383);
        params.push(37.59802524403525);

        maps5.setZoom(16);
        maps5.setCenter(params);
    }
    if(no == 25){ // p.15 => 구축관로 예상 결과 - 구간
        var params=[];
        params.push(126.6752594441295);
        params.push(37.57454292556048);

        maps5.setZoom(20);
        maps5.setCenter(params);
    }
}

function buttonClick6(no){
    maps6.addLayer(layerDatas[no][0],layerDatas[no][1],function(response, params){
        console.log("response="+response);
        console.log("params="+params);

        // 팝업
        if(params.name == "DPGIS2-JIJUK"){
            content.innerHTML = '<p>pnu :</p><code>' + response.features[0].properties.pnu +'</code>';
            maps6.setOverlayPosition(params.coordinate);
        }

        
    });

    if(no == 22){ // p.10 => 구축관로 예상 결과
        var params=[];
        params.push(126.84214593562383);
        params.push(37.59802524403525);

        maps6.setZoom(16);
        maps6.setCenter(params);
    }
    if(no == 25){ // p.15 => 구축관로 예상 결과 - 구간
        var params=[];
        params.push(126.6752594441295);
        params.push(37.57454292556048);

        maps6.setZoom(20);
        maps6.setCenter(params);
    }
}

// 그리기
function drawing(type){
    maps.addDrawing(type, function(){
        console.log("dragend~");
        // 사각형, 원형, 다각형 그리기

        maps.removeAllLayer();

        drawing('End');

        var params=[];
        //params.push(126.53344813111612);
        //params.push(37.4754736708867);

        params.push(126.493240	);
        params.push(37.455893);

        maps.setCenter(params);
        
         
        buttonClick(34);
    });
}
// 그리기 정보
function getDrawing(){
    maps.getDrawingInfo();
}

// 레이어 삭제
function removeLayer(){
    maps.removeAllLayer();
    $("#popup-closer").trigger("click");
}

// 센터 이동
function setCenter(){
    var params=[];
    //물치도
    params.push(126.588625);
    params.push(37.497413);

    maps.setCenter(params);
}

// 줌레벨 변경
function setZoom(zoom){
    maps.setZoom(zoom);
}

function addMarker(){
    var params=[];

    params.push(126.493240);
    params.push(37.455893);

    maps.addMarker(params, "EPSG:4326", "SEARCH_MARKER","https://tmapapi.sktelecom.com/upload/tmap/marker/pin_b_m_p.png",params); // WGS84 좌표계
}

function setOlMap(no){
    
    if(no == 2){ // InOut
        var echartslayer = new ol3Echarts(getOption_snam_all());
        echartslayer.appendTo(maps.map);
    }else if(no == 3){ // In
        var echartslayer = new ol3Echarts(getOption_snam_in());
        echartslayer.appendTo(maps.map);
    }else if(no == 4){ // Out
        var echartslayer = new ol3Echarts(getOption_snam_out());
        echartslayer.appendTo(maps.map);
    }else{
        var echartslayer = new ol3Echarts(getOption());
        echartslayer.appendTo(maps.map);
    }
    
}

function setOlMap2(no){
    
    if(no == 2){ // InOut
        var echartslayer = new ol3Echarts(getOption_snam_all());
        echartslayer.appendTo(maps2.map);
    }else if(no == 3){ // In
        var echartslayer = new ol3Echarts(getOption_snam_in());
        echartslayer.appendTo(maps2.map);
    }else if(no == 4){ // Out
        var echartslayer = new ol3Echarts(getOption_snam_out());
        echartslayer.appendTo(maps2.map);
    }else{
        var echartslayer = new ol3Echarts(getOption());
        echartslayer.appendTo(maps2.map);
    }
    
}
