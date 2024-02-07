var MapController = function(mapDiv) {
	this.map = null;	
	this.view = null;
		
	this.mapInit(mapDiv); // 2.초기화			
	this.sdk = new SDK(this.map);

    // 그리기
    var source;
    var vector;
    var draw; 

    //팝업
    var overlay;

	
};
/**
 * 초기화
 */
MapController.prototype.mapInit = function(divid) {
	var thisObj = this;
	
	var baseMap = this.setBaseMap("xdworld"); // 1. 기본 지도 설정
	
	// 한반도 영역으로 제한
	var sLonLat = ol.proj.transform([123.98575442187737, 32.74828144867212],'EPSG:4326','EPSG:3857');
	var eLonLat = ol.proj.transform([133.41116564623823, 40.94683065819572],'EPSG:4326','EPSG:3857');
	
	thisObj.view = new ol.View({
		  center: ol.proj.transform([127.60637172173858, 36.20630219467613],'EPSG:4326','EPSG:3857')
		  ,zoom: 8
		  ,minZoom : 8
		  ,maxZoom : 19
		  ,extent: [sLonLat[0], sLonLat[1], eLonLat[0], eLonLat[1]]
		});
	
	//var restrictExtent =new Tmap.Bounds(sLonLat.lon, sLonLat.lat, eLonLat.lon, eLonLat.lat);
    var container = document.getElementById('popup');
    thisObj.overlay = new ol.Overlay({
        element: container,
        autoPan: true,
        autoPanAnimation: {
          duration: 250
        }
    });

	//thisObj.view.cancelAnimations();

	thisObj.map = new ol.Map({
		  target: divid,
		  layers: [baseMap],
		  loadTilesWhileAnimating: true,
          overlays: [thisObj.overlay],
		  view: thisObj.view
          ,controls: []
		 // ,loadTilesWhileAnimating : false
		 //,loadTilesWhileInteracting : true
		});

	
	thisObj.map.on('dragover', function(evt) {
		console.log("dragover");
	});	
	thisObj.map.on('mousemove', function(evt) {
		console.log("mousemove");
	});	
	thisObj.map.on('dragenter', function(evt) {
		console.log("dragenter");
	});
	thisObj.map.on('touchmove', function(evt) {
		console.log("touchmove");
	});
	// thisObj.map.on('pointerdrag', function(evt) {		
	// 	var xy = ol.proj.transform([evt.coordinate[0],evt.coordinate[1]],'EPSG:3857','EPSG:4326');
	// 	console.log("pointerdrag="+xy);
	// });
	thisObj.map.on('pointermove', function(evt) {
		console.log("pointermove");
	});
	thisObj.map.on('pointerdown', function(evt) {
		//console.log("pointerdown");
	});
	thisObj.map.on('pointerover', function(evt) {
		console.log("pointerover");
	});
	thisObj.map.on('pointerenter', function(evt) {
		console.log("pointerenter");
	});
	// thisObj.map.on('wheel', function(evt) {
	// 	console.log("wheel="+thisObj.map.getView().getZoom());
	// });
	// thisObj.map.on('moveend', function(evt) {
	// 	console.log("moveend="+thisObj.map.getView().getZoom());
	// });
	
    
}
/**
 * - 베이스 맵 설정
 **/
MapController.prototype.setBaseMap = function(type){	
	
	var baseMap;
	//기본지도 - xdworld
	if(type == "xdworld"){
		baseMap = new ol.layer.Tile({
		   source: new ol.source.XYZ({
		     url: 'http://xdworld.vworld.kr:8080/2d/Base/202002/{z}/{x}/{y}.png'
		   })
		 });
	
	}else{
		//기본지도 - openstreetmap
		baseMap = new ol.layer.Tile({
		    preload: 4,
		    source: new ol.source.OSM()
		});
	}
	
	return baseMap;
}

/**
 * - map object
 */
MapController.prototype.getMap = function(){	
	var thisObj = this;

	return thisObj.map.getMap();
	
}

/**
 * - 센터 이동
 * @param {*} lonlat 
 */
MapController.prototype.setCenter = function(lonlat){	
	var thisObj = this;
	
	// wgs84=>구글좌표계
	var pnt = new ol.geom.Point([lonlat[0], lonlat[1]]).transform('EPSG:4326', 'EPSG:3857');
	var locations = pnt.getCoordinates();
	
	thisObj.map.getView().setCenter(locations);
	
}

/**
 * 줌 변경
 * */
MapController.prototype.setZoom = function(zoom){	
	var thisObj = this;
	thisObj.map.getView().setZoom(zoom);
	
}

/**
 * - 레이어 추가
 **/
MapController.prototype.addLayer = function(params, name, callback){	
	
	var thisObj = this;
    //var params = {'LAYERS':'dpgis:mv_vlnrb_pt_group','version':'1.1.0'};
    //var name = '취약구간(원본)';
    //thisObj.removeAllLayer();
    thisObj.sdk.setLayer(params , name, callback);
}

/**
 * - 특정 레이어 삭제
 **/
MapController.prototype.removeLayer = function(layer){	
	
	var thisObj = this;

    thisObj.sdk.removeLayer(layer); // 1. 특정 레이어
}

/**
 * - 모든 레이어 삭제
 **/
MapController.prototype.removeAllLayer = function(){	
	
	var thisObj = this;

    thisObj.sdk.removeAllLayer(); // 1. 모든 레이어
    thisObj.sdk.removeClickEvent(); // 2. 모든 이벤트
}

/**
 * - 그리기 - 원/
 **/
MapController.prototype.addDrawing = function(types,callback){	
	
	var thisObj = this;

    if(undefined !== thisObj.draw){
        thisObj.map.removeInteraction(thisObj.draw);
        if(types !== 'End'){
            thisObj.sdk.removeAllLayer();
        }        
    }
    
    if(types !== 'None' && types !== 'End'){
        //thisObj.map.removeInteraction(thisObj.draw); // 기존 그리기 제거
        thisObj.source = new ol.source.Vector({wrapX: false});
        thisObj.vector = new ol.layer.Vector({
            title : 'vector',
            source: thisObj.source
        });
        thisObj.map.addLayer(thisObj.vector); //vector layer add

        thisObj.draw = new ol.interaction.Draw({
            source: thisObj.source,
            type: types,
           // freehand: true
        });
        thisObj.map.addInteraction(thisObj.draw);
        //var snap = new ol.interaction.Snap({source: thisObj.source});
        //thisObj.map.addInteraction(snap);

        thisObj.draw.on('drawend',
            function(e) {
                callback();
                this.getDrawingInfo(e);
        }, thisObj);
    }
    
}

/**
 * - 그리기 - 피처 정보 확인하기
 **/
MapController.prototype.getDrawingInfo = function(e){	
	
	var thisObj = this;

    var json = new ol.format.GeoJSON().writeFeatures(thisObj.vector.getSource().getFeatures());            
    console.log(json);

    if(undefined !== e){
        var extent = e.feature.getGeometry().getExtent();            
        console.log(extent); 
    }
    
    //thisObj.getDrawingFeatures()
}

/**
 * - 그리기 - 피처 속성 확인
 **/
MapController.prototype.getDrawingFeatures = function(){	
	
	var thisObj = this;

    var maxFeatureCount, vector;
    maxFeatureCount = 0;
    var features = thisObj.vector.getSource().getFeatures();
    var feature, radius;
    for (var i = features.length - 1; i >= 0; --i) {
        feature = features[i];
        var originalFeatures = feature.get('features');
        var extent = ol.extent.createEmpty();
        var j, jj;
        for (j = 0, jj = originalFeatures.length; j < jj; ++j) {
            ol.extent.extend(extent, originalFeatures[j].getGeometry().getExtent());
        }
        maxFeatureCount = Math.max(maxFeatureCount, jj);
        radius = 0.25 * (ol.extent.getWidth(extent) + ol.extent.getHeight(extent)) /
        resolution;
        feature.set('radius', radius);
    }

    console.log(feature);
    
}

/**
 * - 팝업 - 좌표 수정
 **/
MapController.prototype.setOverlayPosition = function(coordinate){	
	
	var thisObj = this;

    thisObj.overlay.setPosition(coordinate);
    
}

/**
 * 마커 생성
 * */
MapController.prototype.addMarker = function(lnglat,type,markerName,img,paramsData){	

	var thisObj = this;
	var markerLayer;
	
	var defaultAnchor =  [0.5, 45];
	var markerNm = "LAYER_MARKER";
	var imgPath = "/resources/images/common/symbol_01.png";
	var markerIdx = 0;
	if(undefined != markerName){
		markerNm = markerName;
	}
	if(undefined != img){
		defaultAnchor =  [0.5, 40];
		imgPath = img;
	}
	if(undefined != paramsData && undefined != paramsData.markerIdx){
		markerIdx = paramsData.markerIdx;
	}
	//좌표계 
	var geometryXy;
	if("EPSG3857" == type){ // 구글 좌표계
		geometryXy = new ol.geom.Point([lnglat[0], lnglat[1]]);
	}else{ // wgs84
		geometryXy = new ol.geom.Point([lnglat[0], lnglat[1]]).transform('EPSG:4326', 'EPSG:3857');
	}
	
	// 마커 feature 설정
	var feature = new ol.Feature({
		geometry: geometryXy
	});

	// 마커 스타일 설정
	var style = new ol.style.Style({
		image: new ol.style.Icon({
			anchor: defaultAnchor,
			anchorXUnits: 'fraction',
			anchorYUnits: 'pixels',
			src: imgPath
		}),
        
	});

	if(undefined != paramsData && undefined != paramsData.label ){
		style.setText(
				in_label = new ol.style.Text({
	            font: '10px',
	            scale: 2,
	            offsetX : 0,
	            offsetY : -50,
	            text: paramsData.label,
	            fill: new ol.style.Fill({ color: 'red' }),
	            stroke: new ol.style.Stroke({ color: 'yellow', width: 1 })
	        })
		);
	}
	// feature에 스타일 설정
	feature.setStyle(style);
	// 마커 데이터 넣기
	feature.set('markername', markerNm);
	feature.set('params', paramsData);
	
	// 마커 레이어에 들어갈 소스 생성
	var source = new ol.source.Vector({
		features: [feature]
	});

	// 마커 레이어 생성
	var layer = new ol.layer.Vector({
		source: source,
		name: markerNm,
		markerIdx: markerIdx, 
	});

	// layer의 ZIndex 설정(다른 레이어들 보다 더 앞에 보여주는 기능)
	layer.setZIndex(50);
	
	// 지도에 마커가 그려진 레이어 추가
	thisObj.map.addLayer(layer);
	
	return layer;
	
}