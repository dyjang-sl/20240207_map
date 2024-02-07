var SDK = function(mapObj) {
	this.map = mapObj;	
	this.source_wms = 'http://10.168.0.235:8080/geoserver/wms';		
	this.mapCursorKeys =[];
};

// ajax 통신
SDK.prototype.ajaxTranGET = function(url, callback, params){
	
	$.ajax({
		url : url,
		type : 'GET',
		cache : false,
		async : true,
		success : function(response) {

			callback(response, params);
		},

		error : function(x, e) {
			if (x.status == 0) {
				alert('You are offline!!n Please Check Your Network.');

			} else if (x.status == 404) {
				alert('Requested URL not found.');

			} else if (x.status == 500) {
				alert('Internel Server Error.');

			} else if (e == 'parsererror') {
				alert('Error.nParsing JSON Request failed.');

			} else if (e == 'timeout') {
				alert('Request Time out.');

			} else {
				alert('Unknow Error.n' + x.responseText);
			}
		}
	});
}
/**
 * 1. 레이어 생성
 */
SDK.prototype.setLayer = function(_params, _name, _callback) {

	var thisObj = this;
	if(_name == "BNAG_LEFT"){
		console.log("BNAG_LEFT");
		thisObj.source_wms = 'http://10.168.0.101:8080/geoserver/wms';		
	}
	
	var wmsSource = new ol.source.ImageWMS({
		url: thisObj.source_wms,
		//params: {'LAYERS':'dpgis:mv_vlnrb_pt_group','version':'1.1.0'},
		params : _params,
		ratio:1,//size o f the map viewport (BBOX와 관련)
		serverType: 'geoserver',
		crossOrigin: 'anonymous'
	});
	
	var wmsLayer = new ol.layer.Image({
		source: wmsSource
		,name : _name
		,minZoom: 7 //최소 표출 레벨
	});
	
	thisObj.map.addLayer(wmsLayer);
	var mapCursorKey = thisObj.map.on('singleclick', function(evt) {
		console.log(_name+" : singleclick");
		var viewResolution = /** @type {number} */ (this.getView().getResolution());
		console.log("viewResolution ="+viewResolution);

		var urls = wmsSource.getGetFeatureInfoUrl(evt.coordinate, viewResolution, 'EPSG:3857',{'INFO_FORMAT': 'application/json'});

		console.log("urls ="+urls);

		if (urls) {
			console.log(urls);
			// 구글 좌표계 => WGS84 좌표계로 변경
			var xy = ol.proj.transform([evt.coordinate[0],evt.coordinate[1]],'EPSG:3857','EPSG:4326');
			var params = { 
				'lat' : xy[1]
				,'lon' : xy[0]
				, 'coordinate' : evt.coordinate
				,'name' : _name
			};
			
			// ajaxTran(요청 url, 요청 params, 콜백, 콜백에 포함될 params);
			thisObj.ajaxTranGET(urls, _callback, params);
			
		}
	});

	// 초기화시 이벤트 제거를 위한 = 이벤트 키
	thisObj.mapCursorKeys.push(mapCursorKey);
}

/**
 * 2. 레이어 전체 삭제
 */
SDK.prototype.removeAllLayer = function() {
	console.log("SDK removeAllLayer");
	var thisObj = this;
	thisObj.map.getLayers().getArray()
		.filter(layer => layer.type != "TILE")
		.forEach(layer => thisObj.removeLayer(layer));
}

/**
 * 3. 레이어 삭제
 */
SDK.prototype.removeLayer = function(layer) {
	console.log("SDK removeLayer");
	var thisObj = this;
	thisObj.map.removeLayer(layer);
}

/**
 * 4. 레이어 클릭 이벤트 제거
 */
SDK.prototype.removeClickEvent = function() {
	console.log("SDK removeClickEvent");
	var thisObj = this;
	for(var i = 0 ; i < thisObj.mapCursorKeys.length; i++){
		//thisObj.map.unByKey(thisObj.mapCursorKeys[i]);
		ol.Observable.unByKey(thisObj.mapCursorKeys[i]);
	}
}
