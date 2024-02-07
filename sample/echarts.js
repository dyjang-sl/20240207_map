function getOption () {

	var topListHtml = '<div class="modal07">';
	topListHtml +='<p class="title">지역내 이동</p><table><colgroup><col style="width:50%;"><col style="width:50%;"></colgroup><tbody>';
	topListHtml += '<tr><td>지역구</td><td> 0000 명 (100 %)</td></tr></tbody></table>';
	topListHtml +='<p class="title">지역외 이동</p><table><colgroup><col style="width:10%;"><col style="width:20%;"><col style="width:25%;"><col style="width:20%;"><col style="width:25%;"></colgroup><tbody>';       		
	topListHtml +='<tr><td class="bg01 bd_r"></td><td colspan="2" class="bg01 bd_r ta_c">전입</td><td colspan="2" class="bg01 ta_c">전출</td></tr>';
	topListHtml += '<tr><th class="bd_r">Top 1</th><td>중구</td><td>000 명 (100%)</td><td>마포구</td><td>000 명 (100%)</td></tr>';
	topListHtml += '</tbody></table></div>';

	var geoCoordMap = {
	'Mid': [127.384586, 36.350179], // 대전 시청
	
	'Start': [126.978328, 37.566712], // 서울 시청
	
	'End': [129.075035, 35.180344], // 부산시청
	
	};
	var BJData = [
	[{name: 'Start'}, {name: 'Mid', value: 95}],
	[{name: 'Start'}, {name: 'End', value: 90}]
	
	];
	var SHData = [

	[{name: 'Mid'}, {name: 'End', value: 80}],
	[{name: 'Mid'}, {name: 'Start', value: 30}]
	];
	var GZData = [
	[{name: 'End'}, {name: 'Mid', value: 95}],
	[{name: 'End'}, {name: 'Start', value: 30}]
	];
	//var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
	//var planePath = 'path://M248.761,92c0,9.801-7.93,17.731-17.71,17.731c-0.319,0-0.617,0-0.935-0.021c-10.035,37.291-51.174,65.206-100.414,65.206 c-49.261,0-90.443-27.979-100.435-65.334c-0.765,0.106-1.531,0.149-2.317,0.149c-9.78,0-17.71-7.93-17.71-17.731 c0-9.78,7.93-17.71,17.71-17.71c0.787,0,1.552,0.042,2.317,0.149C39.238,37.084,80.419,9.083,129.702,9.083c49.24,0,90.379,27.937,100.414,65.228h0.021c0.298-0.021,0.617-0.021,0.914-0.021C240.831,74.29,248.761,82.22,248.761,92z'
	//var planePath = 'path://M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z';
	//var planePath = 'path://M8,12c2.21,0,4-1.79,4-4s-1.79-4-4-4S4,5.79,4,8S5.79,12,8,12z M8,13c-2.67,0-8,1.34-8,4v3h16v-3C16,14.34,10.67,13,8,13z M12.51,4.05C13.43,5.11,14,6.49,14,8s-0.57,2.89-1.49,3.95C14.47,11.7,16,10.04,16,8S14.47,4.3,12.51,4.05z M16.53,13.83C17.42,14.66,18,15.7,18,17v3h2v-3C20,15.55,18.41,14.49,16.53,13.83z';
	var planePath = 'path://M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z';

	var convertData = function (data) {
	var res = [];
	for (var i = 0; i < data.length; i++) {
		var dataItem = data[i];
		var fromCoord = geoCoordMap[dataItem[0].name];
		var toCoord = geoCoordMap[dataItem[1].name];
		if (fromCoord && toCoord) {
		res.push({
			fromName: dataItem[0].name,
			toName: dataItem[1].name,
			coords: [fromCoord, toCoord]
		});
		}
	}
	return res;
	};
	var color = ['#FF00FF', '#ffa022', '#46bee9'];
	var series = [];
	[
	['Start', BJData], ['Mid', SHData], ['End', GZData]].forEach(
	function (item, i) {
		series.push({
			name: item[0] + ' Top10-'+i,
			type: 'lines',
			zlevel: 10,
			effect: {
			show: true,
			period: 10,
			trailLength: 0.5,
			color: '#fff',
			symbolSize: 10
			},
			lineStyle: {
			normal: {
				color: color[i],
				width: 2,
				curveness: 0.2
			}
			},
			data: convertData(item[1])
		},
		{
			name: item[0] + ' Top10',
			type: 'lines',
			zlevel: 2,
			effect: {
			show: true,
			period: 6,
			trailLength: 0,
			symbol: planePath,
			symbolSize: 15
			},
			lineStyle: {
			normal: {
				color: color[i],
				width: 10,
				opacity: 0.4,
				curveness: 0.2
			}
			},
			data: convertData(item[1])
		},
		{
			name: item[0] + ' Top10',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
			brushType: 'stroke'
			},
			label: {
			normal: {
				show: true,
				position: 'right',
				formatter: '{b}'
			}
			},
			symbolSize: function (val) {
			return val[2] / 8;
			},
			itemStyle: {
			normal: {
				color: color[i]
			}
			},
			data: item[1].map(function (dataItem) {
			return {
				name: dataItem[1].name,
				value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
			};
			})
		});
	});
	return {
	tooltip: {
		trigger: 'item'
	},
	series: series,
	formatter:topListHtml
	};
}


function getOption_snam_all () {

	var topListHtml = '<div class="modal07">';
	topListHtml +='<p class="title">지역내 이동</p><table><colgroup><col style="width:50%;"><col style="width:50%;"></colgroup><tbody>';
	topListHtml += '<tr><td>지역구</td><td> 0000 명 (100 %)</td></tr></tbody></table>';
	topListHtml +='<p class="title">지역외 이동</p><table><colgroup><col style="width:10%;"><col style="width:20%;"><col style="width:25%;"><col style="width:20%;"><col style="width:25%;"></colgroup><tbody>';       		
	topListHtml +='<tr><td class="bg01 bd_r"></td><td colspan="2" class="bg01 bd_r ta_c">전입</td><td colspan="2" class="bg01 ta_c">전출</td></tr>';
	topListHtml += '<tr><th class="bd_r">Top 1</th><td>중구</td><td>000 명 (100%)</td><td>마포구</td><td>000 명 (100%)</td></tr>';
	topListHtml += '</tbody></table></div>';

	var geoCoordMap = {
	'성남': [127.116279, 37.40735], // 성남시:127.116279,37.40735
	
	'과천시': [127.002748, 37.433859], // 과천시:127.002748,37.433859	
	'의왕시': [126.98969, 37.362461], // 의왕시:126.98969,37.362461
	'하남시': [127.20594, 37.522882], // 하남시:127.20594,37.522882
	'광주시': [127.301134, 37.403111], // 광주시:127.301134,37.403111
	'수원시': [127.007787, 37.280368], // 수원시:127.007787,37.280368
	'용인시': [127.221773, 37.221514], // 용인시:127.221773,37.221514
	
	};
	var BJData = [
	[{name: '성남'}, {name: '과천시', value: 95}],
	[{name: '성남'}, {name: '의왕시', value: 94}],
	[{name: '성남'}, {name: '하남시', value: 93}],
	[{name: '성남'}, {name: '광주시', value: 92}],
	[{name: '성남'}, {name: '수원시', value: 91}],
	[{name: '성남'}, {name: '용인시', value: 90}]
	
	];
	var P1Data = [
		[{name: '과천시'}, {name: '성남', value: 10}]
	];
	var P2Data = [
		[{name: '의왕시'}, {name: '성남', value: 20}]
	];
	var P3Data = [
		[{name: '하남시'}, {name: '성남', value: 30}]
	];
	var P4Data = [
		[{name: '광주시'}, {name: '성남', value: 40}]
	];
	var P5Data = [
		[{name: '수원시'}, {name: '성남', value: 50}]
	];
	var P6Data = [
		[{name: '용인시'}, {name: '성남', value: 60}]
	];
	
	//var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
	//var planePath = 'path://M248.761,92c0,9.801-7.93,17.731-17.71,17.731c-0.319,0-0.617,0-0.935-0.021c-10.035,37.291-51.174,65.206-100.414,65.206 c-49.261,0-90.443-27.979-100.435-65.334c-0.765,0.106-1.531,0.149-2.317,0.149c-9.78,0-17.71-7.93-17.71-17.731 c0-9.78,7.93-17.71,17.71-17.71c0.787,0,1.552,0.042,2.317,0.149C39.238,37.084,80.419,9.083,129.702,9.083c49.24,0,90.379,27.937,100.414,65.228h0.021c0.298-0.021,0.617-0.021,0.914-0.021C240.831,74.29,248.761,82.22,248.761,92z'
	//var planePath = 'path://M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z';
	//var planePath = 'path://M8,12c2.21,0,4-1.79,4-4s-1.79-4-4-4S4,5.79,4,8S5.79,12,8,12z M8,13c-2.67,0-8,1.34-8,4v3h16v-3C16,14.34,10.67,13,8,13z M12.51,4.05C13.43,5.11,14,6.49,14,8s-0.57,2.89-1.49,3.95C14.47,11.7,16,10.04,16,8S14.47,4.3,12.51,4.05z M16.53,13.83C17.42,14.66,18,15.7,18,17v3h2v-3C20,15.55,18.41,14.49,16.53,13.83z';
	var planePath = 'path://M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z';

	var convertData = function (data) {
	var res = [];
	for (var i = 0; i < data.length; i++) {
		var dataItem = data[i];
		var fromCoord = geoCoordMap[dataItem[0].name];
		var toCoord = geoCoordMap[dataItem[1].name];
		if (fromCoord && toCoord) {
		res.push({
			fromName: dataItem[0].name,
			toName: dataItem[1].name,
			coords: [fromCoord, toCoord]
		});
		}
	}
	return res;
	};
	var color = ['#ff0033', '#0080ff', '#0080ff', "#0080ff", "#0080ff", "#0080ff", "#0080ff"];
	var series = [];
	[
	['Start', BJData], ['과천시', P1Data], ['의왕시', P2Data], ['하남시', P3Data], ['광주시', P4Data], ['수원시', P5Data], ['용인시', P6Data]].forEach(
	function (item, i) {
		series.push({
			name: item[0] + ' Top10-'+i,
			type: 'lines',
			zlevel: 10,
			effect: {
			show: true,
			period: 6,
			trailLength: 0.5,
			color: '#fff',
			symbolSize: 5
			},
			lineStyle: {
			normal: {
				color: color[i],
				width: 2,
				curveness: 0.2
			}
			},
			data: convertData(item[1])
		},
		{
			name: item[0] + ' Top10',
			type: 'lines',
			zlevel: 2,
			effect: {
			show: true,
			period: 6,
			trailLength: 0,
			symbol: planePath,
			symbolSize: 30
			},
			lineStyle: {
			normal: {
				color: color[i],
				width: 10,
				opacity: 0.4,
				curveness: 0.2
			}
			},
			data: convertData(item[1])
		},		
		{
			name: item[0] + ' Top10',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
			brushType: 'stroke'
			},
			label: {
			normal: {
				show: true,
				position: 'right',
				formatter: '{b}'
			}
			},
			symbolSize: function (val) {
			return val[2] / 8;
			},
			itemStyle: {
			normal: {
				color: color[i]
			}
			},
			data: item[1].map(function (dataItem) {
			return {
				name: dataItem[1].name,
				value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
			};
			})
		});
	});
	return {
	tooltip: {
		trigger: 'item'
	},
	series: series,
	formatter:topListHtml
	};
}

function getOption_snam_in () {

	var topListHtml = '<div class="modal07">';
	topListHtml +='<p class="title">지역내 이동</p><table><colgroup><col style="width:50%;"><col style="width:50%;"></colgroup><tbody>';
	topListHtml += '<tr><td>지역구</td><td> 0000 명 (100 %)</td></tr></tbody></table>';
	topListHtml +='<p class="title">지역외 이동</p><table><colgroup><col style="width:10%;"><col style="width:20%;"><col style="width:25%;"><col style="width:20%;"><col style="width:25%;"></colgroup><tbody>';       		
	topListHtml +='<tr><td class="bg01 bd_r"></td><td colspan="2" class="bg01 bd_r ta_c">전입</td><td colspan="2" class="bg01 ta_c">전출</td></tr>';
	topListHtml += '<tr><th class="bd_r">Top 1</th><td>중구</td><td>000 명 (100%)</td><td>마포구</td><td>000 명 (100%)</td></tr>';
	topListHtml += '</tbody></table></div>';

	var geoCoordMap = {
	'성남': [127.116279, 37.40735], // 성남시:127.116279,37.40735
	
	'과천시': [127.002748, 37.433859], // 과천시:127.002748,37.433859	
	'의왕시': [126.98969, 37.362461], // 의왕시:126.98969,37.362461
	'하남시': [127.20594, 37.522882], // 하남시:127.20594,37.522882
	'광주시': [127.301134, 37.403111], // 광주시:127.301134,37.403111
	'수원시': [127.007787, 37.280368], // 수원시:127.007787,37.280368
	'용인시': [127.221773, 37.221514], // 용인시:127.221773,37.221514
	
	};
	var BJData = [
	[{name: '성남'}, {name: '과천시', value: 95}],
	[{name: '성남'}, {name: '의왕시', value: 94}],
	[{name: '성남'}, {name: '하남시', value: 93}],
	[{name: '성남'}, {name: '광주시', value: 92}],
	[{name: '성남'}, {name: '수원시', value: 91}],
	[{name: '성남'}, {name: '용인시', value: 90}]
	
	];
	var P1Data = [
		[{name: '과천시'}, {name: '성남', value: 10}]
	];
	var P2Data = [
		[{name: '의왕시'}, {name: '성남', value: 20}]
	];
	var P3Data = [
		[{name: '하남시'}, {name: '성남', value: 30}]
	];
	var P4Data = [
		[{name: '광주시'}, {name: '성남', value: 40}]
	];
	var P5Data = [
		[{name: '수원시'}, {name: '성남', value: 50}]
	];
	var P6Data = [
		[{name: '용인시'}, {name: '성남', value: 60}]
	];
	
	//var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
	//var planePath = 'path://M248.761,92c0,9.801-7.93,17.731-17.71,17.731c-0.319,0-0.617,0-0.935-0.021c-10.035,37.291-51.174,65.206-100.414,65.206 c-49.261,0-90.443-27.979-100.435-65.334c-0.765,0.106-1.531,0.149-2.317,0.149c-9.78,0-17.71-7.93-17.71-17.731 c0-9.78,7.93-17.71,17.71-17.71c0.787,0,1.552,0.042,2.317,0.149C39.238,37.084,80.419,9.083,129.702,9.083c49.24,0,90.379,27.937,100.414,65.228h0.021c0.298-0.021,0.617-0.021,0.914-0.021C240.831,74.29,248.761,82.22,248.761,92z'
	//var planePath = 'path://M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z';
	//var planePath = 'path://M8,12c2.21,0,4-1.79,4-4s-1.79-4-4-4S4,5.79,4,8S5.79,12,8,12z M8,13c-2.67,0-8,1.34-8,4v3h16v-3C16,14.34,10.67,13,8,13z M12.51,4.05C13.43,5.11,14,6.49,14,8s-0.57,2.89-1.49,3.95C14.47,11.7,16,10.04,16,8S14.47,4.3,12.51,4.05z M16.53,13.83C17.42,14.66,18,15.7,18,17v3h2v-3C20,15.55,18.41,14.49,16.53,13.83z';
	var planePath = 'path://M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z';

	var convertData = function (data) {
	var res = [];
	for (var i = 0; i < data.length; i++) {
		var dataItem = data[i];
		var fromCoord = geoCoordMap[dataItem[0].name];
		var toCoord = geoCoordMap[dataItem[1].name];
		if (fromCoord && toCoord) {
		res.push({
			fromName: dataItem[0].name,
			toName: dataItem[1].name,
			coords: [fromCoord, toCoord]
		});
		}
	}
	return res;
	};
	var color = ['#0080ff', '#0080ff', "#0080ff", "#0080ff", "#0080ff", "#0080ff"];
	var series = [];
	[['과천시', P1Data], ['의왕시', P2Data], ['하남시', P3Data], ['광주시', P4Data], ['수원시', P5Data], ['용인시', P6Data]].forEach(
	function (item, i) {
		series.push({
			name: item[0] + ' Top10-'+i,
			type: 'lines',
			zlevel: 10,
			effect: {
			show: true,
			period: 6,
			trailLength: 0.5,
			color: '#fff',
			symbolSize: 5
			},
			lineStyle: {
			normal: {
				color: color[i],
				width: 2,
				curveness: 0.2
			}
			},
			data: convertData(item[1])
		},				
		{
			name: item[0] + ' Top10',
			type: 'lines',
			zlevel: 2,
			effect: {
			show: true,
			period: 6,
			trailLength: 0,
			symbol: planePath,
			symbolSize: 30
			},
			lineStyle: {
			normal: {
				color: color[i],
				width: 10,
				opacity: 0.4,
				curveness: 0.2
			}
			},
			data: convertData(item[1])
		},
		{
			name: item[0] + ' Top10',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
			brushType: 'stroke'
			},
			label: {
			normal: {
				show: true,
				position: 'right',
				formatter: '{b}'
			}
			},
			symbolSize: function (val) {
			return val[2] / 8;
			},
			itemStyle: {
			normal: {
				color: color[i]
			}
			},
			data: item[1].map(function (dataItem) {
			return {
				//name: dataItem[1].name,
				value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
			};
			})
		});
	});
	return {
	tooltip: {
		trigger: 'item'
	},
	series: series,
	formatter:topListHtml
	};
}

function getOption_snam_out () {

	var topListHtml = '<div class="modal07">';
	topListHtml +='<p class="title">지역내 이동</p><table><colgroup><col style="width:50%;"><col style="width:50%;"></colgroup><tbody>';
	topListHtml += '<tr><td>지역구</td><td> 0000 명 (100 %)</td></tr></tbody></table>';
	topListHtml +='<p class="title">지역외 이동</p><table><colgroup><col style="width:10%;"><col style="width:20%;"><col style="width:25%;"><col style="width:20%;"><col style="width:25%;"></colgroup><tbody>';       		
	topListHtml +='<tr><td class="bg01 bd_r"></td><td colspan="2" class="bg01 bd_r ta_c">전입</td><td colspan="2" class="bg01 ta_c">전출</td></tr>';
	topListHtml += '<tr><th class="bd_r">Top 1</th><td>중구</td><td>000 명 (100%)</td><td>마포구</td><td>000 명 (100%)</td></tr>';
	topListHtml += '</tbody></table></div>';

	var geoCoordMap = {
		'성남': [127.116279, 37.40735], // 성남시:127.116279,37.40735
		
		'과천시': [127.002748, 37.433859], // 과천시:127.002748,37.433859	
		'의왕시': [126.98969, 37.362461], // 의왕시:126.98969,37.362461
		'하남시': [127.20594, 37.522882], // 하남시:127.20594,37.522882
		'광주시': [127.301134, 37.403111], // 광주시:127.301134,37.403111
		'수원시': [127.007787, 37.280368], // 수원시:127.007787,37.280368
		'용인시': [127.221773, 37.221514], // 용인시:127.221773,37.221514
	};
	var BJData = [
		[{name: '성남'}, {name: '과천시', value: 95}],
		[{name: '성남'}, {name: '의왕시', value: 94}],
		[{name: '성남'}, {name: '하남시', value: 93}],
		[{name: '성남'}, {name: '광주시', value: 92}],
		[{name: '성남'}, {name: '수원시', value: 91}],
		[{name: '성남'}, {name: '용인시', value: 90}]
		
	];
		
		
		//var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
		//var planePath = 'path://M248.761,92c0,9.801-7.93,17.731-17.71,17.731c-0.319,0-0.617,0-0.935-0.021c-10.035,37.291-51.174,65.206-100.414,65.206 c-49.261,0-90.443-27.979-100.435-65.334c-0.765,0.106-1.531,0.149-2.317,0.149c-9.78,0-17.71-7.93-17.71-17.731 c0-9.78,7.93-17.71,17.71-17.71c0.787,0,1.552,0.042,2.317,0.149C39.238,37.084,80.419,9.083,129.702,9.083c49.24,0,90.379,27.937,100.414,65.228h0.021c0.298-0.021,0.617-0.021,0.914-0.021C240.831,74.29,248.761,82.22,248.761,92z'
		//var planePath = 'path://M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z';
		//var planePath = 'path://M8,12c2.21,0,4-1.79,4-4s-1.79-4-4-4S4,5.79,4,8S5.79,12,8,12z M8,13c-2.67,0-8,1.34-8,4v3h16v-3C16,14.34,10.67,13,8,13z M12.51,4.05C13.43,5.11,14,6.49,14,8s-0.57,2.89-1.49,3.95C14.47,11.7,16,10.04,16,8S14.47,4.3,12.51,4.05z M16.53,13.83C17.42,14.66,18,15.7,18,17v3h2v-3C20,15.55,18.41,14.49,16.53,13.83z';
	var planePath = 'path://M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z';

	var convertData = function (data) {
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = geoCoordMap[dataItem[0].name];
			var toCoord = geoCoordMap[dataItem[1].name];
			if (fromCoord && toCoord) {
			res.push({
				fromName: dataItem[0].name,
				toName: dataItem[1].name,
				coords: [fromCoord, toCoord]
			});
			}
		}
		return res;
	};

	var color = ['#ff0033', '#0080ff', '#0080ff', "#0080ff", "#0080ff", "#0080ff", "#0080ff"];
	var series = [];
	[
	['Start', BJData]].forEach( function (item, i) {
		series.push({
			name: item[0] + ' Top10-'+i,
			type: 'lines',
			zlevel: 10,
			effect: {
			show: true,
			period: 6,
			trailLength: 0.5,
			color: '#fff',
			symbolSize: 5
			},
			lineStyle: {
			normal: {
				color: color[i],
				width: 2,
				curveness: 0.2
			}
			},
			data: convertData(item[1])
		},
		{
			name: item[0] + ' Top10',
			type: 'lines',
			zlevel: 2,
			effect: {
			show: true,
			period: 6,
			trailLength: 0,
			symbol: planePath,
			symbolSize: 30
			},
			lineStyle: {
			normal: {
				color: color[i],
				width: 10,
				opacity: 0.4,
				curveness: 0.2
			}
			},
			data: convertData(item[1])
		},		
		{
			name: item[0] + ' Top10',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
			brushType: 'stroke'
			},
			label: {
			normal: {
				show: true,
				position: 'right',
				formatter: '{b}'
			}
			},
			symbolSize: function (val) {
			return val[2] / 8;
			},
			itemStyle: {
			normal: {
				color: color[i]
			}
			},
			data: item[1].map(function (dataItem) {
			return {
				//name: dataItem[1].name,
				value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
			};
			})
		});
	});
	return {
	tooltip: {
		trigger: 'item'
	},
	series: series,
	formatter:topListHtml
	};
}