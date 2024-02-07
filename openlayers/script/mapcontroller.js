var MapController = function(mapDiv,tileUrl) {
	this.map = null;	
	this.view = null;
	
	//this.geoServerIp = "10.10.10.11";
//	this.geoServerIp = "192.6.16.233";
//	this.geoServerIp = "172.16.15.42";
	
	this.geoServerIp = tileUrl; // 지오서버
	this.tileServerIp = tileUrl; // 타일서버
	// 운영의 경우 타일서버는 8080포트를 사용함.
	if(tileUrl.split(":").length > 1){ 
		this.geoServerIp = tileUrl.split(":")[0];
	}
	
	this.geoServerUrl = "http://"+this.geoServerIp+":7070/geoserver/dopco/wms";
	
	this.mapInit(mapDiv); // 2.초기화		
	
	this.layerExistence = false; // 관로/중첩/지적도 레이어 존재여부
	
	this.TOPBUTTON_BOX_SEARCH_MARKER_ONOFF = "OFF"; // 화면상단  - 밸브박스 정보 지도 표출 여부
	this.TOPBUTTON_SEARCH_POLYGON_ONOFF = "OFF"; // 화면상단  - 사업장 정보 지도 표출 여부
	
//	this.layers = []; // 관로 레이어 데이터들
	
//	this.overlay = null; // 팝업 오버레이
};

// map 초기화
/**
 * 초기화
 */
MapController.prototype.mapInit = function(divid) {
	var thisObj = this;
	
	var baseMap = this.setBaseMap("dopco"); // 1. 기본 지도 설정
	
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
	
	thisObj.map = new ol.Map({
		  target: divid,
		  layers: [baseMap],
		  loadTilesWhileAnimating: true,
		  view: thisObj.view
		});
	
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
	}else if("dopco"){
		//기본지도 - openstreetmap
		
		var tileURL = "http://"+this.tileServerIp+"/tile/{z}/{x}/{y}.png";
		baseMap = new ol.layer.Tile({			
			source: new ol.source.XYZ({
		     url: tileURL
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

MapController.prototype.setLayerVisible = function(layer,yn){
	this.layerExistence = yn;
	layer.setVisible(yn);
}

/**
 * - Layer 설정
 **/
MapController.prototype.setLayer = function(val,callback){	
	
	var thisObj = this;
	var wmsLayer = null;
	
	if(null == val){		
		return;
	}
	
	this.layerExistence = false;
	
	this.map.getLayers().getArray()
	  .filter(layer => layer.N.name === val.layers)
	  .forEach(layer => this.setLayerVisible(layer,true));
	  /*.forEach((el,i) => {
		  if(el.N.name === val.layers){
			  console.log("1111");
			  this.layerExistence = true;
			  el.setVisible(true);
		  }
	  });*/
	
	if(!this.layerExistence){ // 레이어가 존재하지 않는 경우
		
		// 추가 레이어
		var wmsSource = new ol.source.ImageWMS({
		  url: this.geoServerUrl,
		  params: {'LAYERS': val.layers},
		  serverType: 'geoserver',
		  crossOrigin: 'anonymous'
		});
		wmsLayer = new ol.layer.Image({
		  source: wmsSource
		  ,name : val.layers
		});
		
		// 레이어 표출 순서 : 항상 관로가 최상위 > 중첩 지적도 > 지적도 순서
		var layerZindeNo = 10;
		if("ili3d_idx" == val.layers){
			layerZindeNo = 30;
		}else if ("jijuk_intersect_3857" == val.layers){
			layerZindeNo = 20;
		}
		wmsLayer.setZIndex(layerZindeNo);
		
		// 저장되는 레이어를 담음
//		this.layers.push({"title" : val.layers, "data" : wmsLayer});
		
		thisObj.map.addLayer(wmsLayer);
		
		//thisObj.map.getViewport().addEventListener('singleclick', function(evt) {
		thisObj.map.on('singleclick', function(evt) {
			$("#innerHTML").html("");
			var viewResolution = /** @type {number} */ (thisObj.view.getResolution());
			
			//'INFO_FORMAT': 'text/plain' ,'text/html' , 'application/json' , 
			//var urls = wmsSource.getGetFeatureInfoUrl(evt.coordinate, viewResolution, 'EPSG:3857',{'INFO_FORMAT': 'text/html'});
			var urls = wmsSource.getGetFeatureInfoUrl(evt.coordinate, viewResolution, 'EPSG:3857',{'INFO_FORMAT': 'application/json'});
			
			if (urls) {
				console.log(urls);
				// 구글 좌표계 => WGS84 좌표계로 변경
				var xy = ol.proj.transform([evt.coordinate[0],evt.coordinate[1]],'EPSG:3857','EPSG:4326');
				var params = { 
					'lat' : xy[1]
					,'lon' : xy[0]
					, 'coordinate' : evt.coordinate
				};
				
				// ajaxTran(요청 url, 요청 params, 콜백, 콜백에 포함될 params);
				ajaxTranGET(urls, callback, params);
				
			}
		});
		
	}
}

/**
 * - Layer 삭제
 **/
MapController.prototype.visibleLayer = function(val){	
//	if(null != this.layers && this.layers.length > 0){
//		for(var i =0; i < this.layers.length ; i++ ){
//			var element = this.layers[i];
//			
//			if(undefined == val){ // 전체 삭제
//				this.map.removeLayer(element.data);				
//				
//			}else{
//				if(element.title == val){
//					this.map.removeLayer(element.data);
//					(this.layers).splice(i,1);
//				}
//			}
//		}			
//	}
//	
//	if(undefined == val){ // 레이어 변수 데이터 - 전체 삭제
//		this.layers = [];
//	}
	
	this.map.getLayers().getArray()
	  .filter(layer => layer.N.name === val)
	  //.forEach(layer => this.map.removeLayer(layer));
	  .forEach(layer => this.setLayerVisible(layer,false));
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
//		stroke: new ol.style.Stroke({
//            color: 'rgba(255, 255, 0, 1.0)',
//            width: 4
//        }),
//        fill: new ol.style.Fill({
//            color: 'rgba(255,0,0,0.4)'
//        }),
        
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


/**
 * 전체 좌표에 대한 반경으로 이동/줌
 * */
MapController.prototype.fit = function(bounds) {
	var thisObj = this;
	
    var feature = new ol.Feature({
    	geometry: new ol.geom.Polygon( bounds )
    });
    feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
    
    const extent = feature.getGeometry().getExtent();
    thisObj.map.getView().fit(extent);
}

/**
 * 폴리곤 그리기 - 정상동작 안함 - 스타일 적용 : 소스 참고용
 * */
MapController.prototype.addPolygon_bak = function(geojsonObject){	
	var thisObj = this;
	
	var geojsonObject = {
		'type': 'FeatureCollection',
		'crs': {
		  'type': 'name',
		  'properties': {
		    'name': 'EPSG:4326'
		  }
		},
		'features': [
		{
		  'type': 'Feature',
		  'geometry': {
		    'type': 'Polygon',
		    'coordinates': 
		    	[
		    		[
		    			[126.97737872600598, 37.56699754052709], 
		    			[126.97792857885405, 37.56700604464148], 
		    			[126.97868496179625, 37.566980532295396],
		    			[126.97911947965666, 37.566923129484756], 
		    			[126.97737872600598, 37.56699754052709]
		    		]
		    	]
		  }
		}]
	};

	
	var source = new ol.source.Vector({
		features: (new ol.format.GeoJSON()).readFeatures(geojsonObject)
	});

	var style = new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(255, 255, 255, 0.6)'
        }),
        stroke: new ol.style.Stroke({
          color: '#319FD3',
          width: 1
        }),
        image: new ol.style.Circle({
          radius: 5,
          fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.6)'
          }),
          stroke: new ol.style.Stroke({
            color: '#319FD3',
            width: 1
          })
        })
      });
	
	var vectorLayer = new ol.layer.Vector({
        source: source,
        style: style
      });
	
	thisObj.map.addLayer(vectorLayer);

}

/**
 * 폴리곤 그리기
 * */
MapController.prototype.addPolygon_topbutton = function(geojsonObject,title) {
	var thisObj = this;
	
	var vectorSource = new ol.source.Vector();
	var vectorLayer = new ol.layer.Vector({ source: vectorSource, name: "TOPBUTTON_SEARCH_POLYGON", polygonName: title,  });
	thisObj.map.addLayer(vectorLayer);
	 
	var obj = JSON.parse(geojsonObject);
	var polygons = [];
	
	for(var i=0; i < obj.coordinates.length; i++){
		for(var j=0; j < obj.coordinates[i].length;j++){
			polygons.push(obj.coordinates[i][j]);
		}
	}
	
    var feature = new ol.Feature({
    	geometry: new ol.geom.Polygon( polygons )
    });
    feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
    
    var style = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'blue',
            width: 3
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0,0,255,0.6)'
        })
    });

    feature.setStyle(style);
    feature.set("markername", "TOPBUTTON_SEARCH_POLYGON");
    feature.set("polygonName", title);

    vectorSource.addFeature(feature);
}

/**
 * 폴리곤 그리기
 * */
MapController.prototype.addPolygon = function(geojsonObject,title) {
	var thisObj = this;
	
	var vectorSource = new ol.source.Vector();
	var vectorLayer = new ol.layer.Vector({ source: vectorSource, name: "SEARCH_POLYGON", polygonName: title,  });
	thisObj.map.addLayer(vectorLayer);
	 
	var obj = JSON.parse(geojsonObject);
	var polygons = [];
//	polygons = [
//			[[127.050665829, 37.374931147]
//			,[127.050695843, 37.374121913]
//			,[127.052094814, 37.372614796]
//			,[127.053755526, 37.373490544]
//			,[127.054029221, 37.374000224]
//			,[127.053575501, 37.374594684]
//			,[127.053674238, 37.374914866]
//			,[127.055450871, 37.376025746]
//			,[127.055837578, 37.375704325]
//			,[127.055813608, 37.375421383]
//			,[127.056160155, 37.375052578]
//			,[127.056966192, 37.375005033]
//			,[127.057458672, 37.37447984]
//			,[127.056378496, 37.373726477]
//			,[127.057095523, 37.373044387]
//			,[127.055522079, 37.37176772]
//			,[127.054021808, 37.370692767]
//			,[127.053920787, 37.369976961]
//			,[127.053675067, 37.36966623]
//			,[127.052547853, 37.369320528]
//			,[127.051368465, 37.370265844]
//			,[127.050635054, 37.371172371]
//			,[127.050583284, 37.371766634]
//			,[127.050002967, 37.372149045]
//			,[127.048992286, 37.372388568]
//			,[127.04762182, 37.373277141]
//			,[127.046755917, 37.374003672]
//			,[127.046319745, 37.374844248]
//			,[127.048821476, 37.374828129]
//			,[127.049174021, 37.37565144]
//			,[127.048939119, 37.376363715]
//			,[127.049539566, 37.37662542]
//			,[127.050665829, 37.374931147]]
//			
//	    	,[[126.972603, 37.553609], 	//서울역
//		    [126.963687, 37.560133], 	//충정로역
//		    [126.966650, 37.565830],	//서대문역	
//		    [126.976809, 37.566230]]		//시청역
//	];
	
	for(var i=0; i < obj.coordinates.length; i++){
		for(var j=0; j < obj.coordinates[i].length;j++){
			polygons.push(obj.coordinates[i][j]);
		}
	}
	
    var feature = new ol.Feature({
    	geometry: new ol.geom.Polygon( polygons )
    });
    feature.getGeometry().transform('EPSG:4326', 'EPSG:3857');
    
    var style = new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'blue',
            width: 3
        }),
        fill: new ol.style.Fill({
            color: 'rgba(0,0,255,0.6)'
        })
    });

    feature.setStyle(style);
    feature.set("markername", "SEARCH_POLYGON");
    feature.set("polygonName", title);

    vectorSource.addFeature(feature);
}

/**
 * 줌,센터 변경
 * */
MapController.prototype.setMove = function(zoom, lonlat, markerIdx){	
	var thisObj = this;
	thisObj.setZoom(zoom);
	thisObj.setCenter(lonlat);
	
	this.map.getLayers().getArray()
	  .filter(layer => layer.N.name === "SEARCH_MARKER")
	  .forEach((layer,i) => {
		  var img_src = "";
		  var features = layer.N.source.getFeatures();
		  
		  if(layer.N.markerIdx == markerIdx){
			  img_src= "/resources/images/common/map_poin_on.png"
		  }else{
			  
			  if(features[0].N.params.gubun == "2"){ // 시점 or 종점
				  if(features[0].N.params.locationde == "시점"){ // 시점 
					  img_src= "/resources/images/common/symbol_08.png"; 
				  }else{ // 종점
					  img_src= "/resources/images/common/symbol_09.png"; 
				  }
			  }else{
				  img_src= "/resources/images/common/map_poin_off.png"
			  }
			  
			  
		  }
		  
		  var style = new ol.style.Style({
				image: new ol.style.Icon({
					anchor: [0.5, 45],
					anchorXUnits: 'fraction',
					anchorYUnits: 'pixels',
					src: img_src
				}),
			});
		  
		  if(undefined != features[0].N.params && undefined != features[0].N.params.label ){
				style.setText(
						in_label = new ol.style.Text({
			            font: '10px',
			            scale: 2,
			            offsetX : 0,
			            offsetY : -50,
			            text: features[0].N.params.label,
			            fill: new ol.style.Fill({ color: 'red' }),
			            stroke: new ol.style.Stroke({ color: 'yellow', width: 1 })
			        })
				);
			}
		  
		  
		  features[0].setStyle(style);
	  });
	
}
/**
 * 줌 변경
 * */
MapController.prototype.setZoom = function(zoom, lonlat){	
	var thisObj = this;
	thisObj.map.getView().setZoom(zoom);
	
}
/**
 * 센터이동
 * */
MapController.prototype.setCenter = function(lonlat){	
	var thisObj = this;
	
	// wgs84=>구글좌표계
	var pnt = new ol.geom.Point([lonlat[0], lonlat[1]]).transform('EPSG:4326', 'EPSG:3857');
	var locations = pnt.getCoordinates();
	
	thisObj.map.getView().setCenter(locations);
	
}
/**
 * 폴리곤 확대
 * */
MapController.prototype.panToPolygon = function(name,title){	
	this.map.getLayers().getArray()
	  .filter(layer => layer.N.name === name)
	  .forEach((layer,i) => {
		  if(layer.N.polygonName == title){
			  var source = layer.N.source;
			  var feature = source.getFeatures()[0];
		        var polygon = /** @type {ol.geom.SimpleGeometry} */ (feature.getGeometry());
		        thisMap.view.fit(
		        		polygon
		        		,{
		        			padding: [170, 50, 30, 150]
		        			//, constrainResolution: false
		        		});
		  }
	  });
}
/**
 * 레이어 삭제
 * */
MapController.prototype.removeLayer = function(name){	
	this.map.getLayers().getArray()
	  .filter(layer => layer.N.name === name)
	  .forEach(layer => this.map.removeLayer(layer));
}