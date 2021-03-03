// counties shape data for population:

map.addLayer({
    'id':'Micropolitan',
    'type':'fill',
    'source':'counties',
    'filter': ['<=', 'amzfilter_E_TOTPOP_1', 49999],
    'layout':{
    'visibility':'none'
    },
    'paint':{
    'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'amzfilter_RPL_THEME1_3'],
        -0.5,
    '#1e8449',
    -0.4,
    '#27ae60',
    -0.3,
    '#52be80',
    -0.2,
    '#a9dfbf',
    -0.1,
    '#d4efdf',
    0,
    '#fdfefe',
    0.1,
    '#fadbd8',
    0.2,
    '#f1948a',
    0.3,
    '#ec7063',
    0.4,
    '#e74c3c',
    0.5,
    '#b03a2e',
        ],
        'fill-opacity': 0.75
        }
});

map.addLayer({
    'id':'Small Metro',
    'type':'fill',
    'source':'counties',
    'filter': ['all',
    ['>', 'amzfilter_E_TOTPOP_1', 49999],
    ['<=', 'amzfilter_E_TOTPOP_1', 250000]
    ],
    'layout':{
    'visibility':'none'
    },
    'paint':{
    'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'amzfilter_RPL_THEME1_3'],
        -0.5,
    '#1e8449',
    -0.4,
    '#27ae60',
    -0.3,
    '#52be80',
    -0.2,
    '#a9dfbf',
    -0.1,
    '#d4efdf',
    0,
    '#fdfefe',
    0.1,
    '#fadbd8',
    0.2,
    '#f1948a',
    0.3,
    '#ec7063',
    0.4,
    '#e74c3c',
    0.5,
    '#b03a2e',
    ],
    'fill-opacity': 0.75
    }
});

map.addLayer({
    'id':'Medium Metro',
    'type':'fill',
    'source':'counties',
    'filter': ['all',
    ['>', 'amzfilter_E_TOTPOP_1', 250000],
    ['<=', 'amzfilter_E_TOTPOP_1', 999999]
    ],
    'layout':{
    'visibility':'none'
    },
    'paint':{
    'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'amzfilter_RPL_THEME1_3'],
        -0.5,
    '#1e8449',
    -0.4,
    '#27ae60',
    -0.3,
    '#52be80',
    -0.2,
    '#a9dfbf',
    -0.1,
    '#d4efdf',
    0,
    '#fdfefe',
    0.1,
    '#fadbd8',
    0.2,
    '#f1948a',
    0.3,
    '#ec7063',
    0.4,
    '#e74c3c',
    0.5,
    '#b03a2e',
    ],
    'fill-opacity': 0.75
    }
});

map.addLayer({
    'id':'Large Metro',
    'type':'fill',
    'source':'counties',
    'filter': ['>', 'amzfilter_E_TOTPOP_1', 999999],
    'layout':{
    'visibility':'none'
    },
    'paint':{
    'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'amzfilter_RPL_THEME1_3'],
        -0.5,
    '#1e8449',
    -0.4,
    '#27ae60',
    -0.3,
    '#52be80',
    -0.2,
    '#a9dfbf',
    -0.1,
    '#d4efdf',
    0,
    '#fdfefe',
    0.1,
    '#fadbd8',
    0.2,
    '#f1948a',
    0.3,
    '#ec7063',
    0.4,
    '#e74c3c',
    0.5,
    '#b03a2e',
    ],
    'fill-opacity': 0.75
    }
});


//on click county population:
map.on('click', 'Micropolitan', function(e) {
    map.flyTo({
    center: e.lngLat,
    zoom: 9
    });
    document.getElementById('intro').style.visibility = "hidden";
    new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML((e.features[0].properties.amzfilter_RPL_THEME1_3).toFixed(4)*100 + '% Change')
    .addTo(map);
});
map.on('click', 'Small Metro', function(e) {
    map.flyTo({
    center: e.lngLat,
    zoom: 9
    });
    document.getElementById('intro').style.visibility = "hidden";
    new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML((e.features[0].properties.amzfilter_RPL_THEME1_3).toFixed(4)*100 + '% Change')
    .addTo(map);
});
map.on('click', 'Medium Metro', function(e) {
    map.flyTo({
    center: e.lngLat,
    zoom: 9
    });
    document.getElementById('intro').style.visibility = "hidden";
    new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML((e.features[0].properties.amzfilter_RPL_THEME1_3).toFixed(4)*100 + '% Change')
    .addTo(map);
});
map.on('click', 'Large Metro', function(e) {
    map.flyTo({
    center: e.lngLat,
    zoom: 9
    });
    document.getElementById('intro').style.visibility = "hidden";
    new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML((e.features[0].properties.amzfilter_RPL_THEME1_3).toFixed(4)*100 + '% Change')
    .addTo(map);
});

map.on('mouseenter', 'Micropolitan', function () {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseenter', 'Small Metro', function () {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseenter', 'Medium Metro', function () {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseenter', 'Large Metro', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'Micropolitan', function () {
    map.getCanvas().style.cursor = '';
});
map.on('mouseleave', 'Small Metro', function () {
    map.getCanvas().style.cursor = '';
});
map.on('mouseleave', 'Medium Metro', function () {
    map.getCanvas().style.cursor = '';
});
map.on('mouseleave', 'Large Metro', function () {
    map.getCanvas().style.cursor = '';
});
