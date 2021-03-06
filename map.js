'use strict'
console.log('Load map.js')
mapboxgl.accessToken = 'pk.eyJ1IjoieWgzMTc1IiwiYSI6ImNraGdjYzR5aDBnNG4ycXFkOXc5a3U0cDQifQ.fcl-Godi2KXbDishUgaFSg';



//mapbox
var map = new mapboxgl.Map({
container: 'map-us',//thi sis the div that you have mad above in html that you are now placing your map in
style: 'mapbox://styles/yh3175/ckhgchrpn1c1m19pmfy0vveta',//you will find the accessToken under "Share" in your specific map in mapbox studio
center: [-104, 38],//the center of the map can be set to any initial value of [lng,lat]
zoom: 4//note that some layers have zoom limits - for example, streets and building footprints are not visible when zoomed out
});

//COUNTIES
//load counties file:
map.on('load', function () {

    //add data:
    map.addSource('counties',{
    'type':'geojson',
    'data':'Data/Amzn_Counties_revise.geojson'
    });

    //counties shape colors by SPL data:
    map.addLayer({
    'id':'SVI Themes Change',
    'type':'fill',
    'source':'counties',
    'layout':{
    'visibility':'none'
    },
    'paint':{
        'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'calc_RPL_THEMES_DF_1'],
        -0.5,
        '#1e8449',
        -0.25,
        '#27ae60',
        -0.1,
        '#52be80',
        -0.05,
        '#a9dfbf',
        0,
        '#fdfefe',
        0.1,
        '#f1948a',
        0.3,
        '#ec7063',
        0.5,
        '#b03a2e',
        ],
        'fill-opacity': 0.75
        }
    });

    map.addLayer({
    'id':'2014 SVI Themes',
    'type':'fill',
    'source':'counties',
    'layout':{
    'visibility':'none'
    },
    'paint':{
        'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'calc_RPL_THEMES_DF'],
        -0.5,
        '#1e8449',
        -0.25,
        '#27ae60',
        -0.1,
        '#52be80',
        -0.05,
        '#a9dfbf',
        0,
        '#fdfefe',
        0.1,
        '#f1948a',
        0.3,
        '#ec7063',
        0.5,
        '#b03a2e',
        ],
        'fill-opacity': 0.75
        }
    });

    map.addLayer({
    'id':'SVI Theme 4 Change',
    'type':'fill',
    'source':'counties',
    'layout':{
        'visibility':'none'
    },
    'paint':{
        'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'calc_RPL_THEME4_DF_1'],
        -0.5,
        '#1e8449',
        -0.25,
        '#27ae60',
        -0.1,
        '#52be80',
        -0.05,
        '#a9dfbf',
        0,
        '#fdfefe',
        0.1,
        '#f1948a',
        0.3,
        '#ec7063',
        0.5,
        '#b03a2e',
        ],
        'fill-opacity': 0.75
        }
    });
    map.addLayer({
        'id':'2014 SVI Theme 4',
        'type':'fill',
        'source':'counties',
        'layout':{
        'visibility':'none'
        },
        'paint':{
        'fill-color': [
        'interpolate',
        ['linear'],
        ['get', 'calc_RPL_THEME4_DF'],
        -0.5,
        '#1e8449',
        -0.25,
        '#27ae60',
        -0.1,
        '#52be80',
        -0.05,
        '#a9dfbf',
        0,
        '#fdfefe',
        0.1,
        '#f1948a',
        0.25,
        '#ec7063',
        0.5,
        '#b03a2e',
        ],
        'fill-opacity': 0.75
        }
    });




//toggle - below -

//toggle menu variable:

var toggleableLayerIds = ['SVI Themes Change', '2014 SVI Themes', 'SVI Theme 4 Change','2014 SVI Theme 4'];

//toggle script:
for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');

    if (i == 0) {
      link.href = '#';
      link.className = 'active';
      link.textContent = id;
      map.setLayoutProperty('SVI Themes Change', 'visibility', 'visible');
    } else {
      link.href = '#';
      link.className = '';
      link.textContent = id;
    }

    link.onclick = function (e) {
      var clickedLayer = this.textContent;
      e.preventDefault();
      e.stopPropagation();

      var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

    //map zooms out
    map.flyTo({
        center: [-104, 38],
        zoom: 4
    });

    //show intro paragraph once map zooms out again
    //document.getElementById('intro').style.visibility = "visible";

    // toggle layer visibility by changing the layout object's visibility property
    if (visibility === 'visible') {
        map.setLayoutProperty(clickedLayer, 'visibility', 'none');
        this.className = '';
        } else {
        this.className = 'active';
        map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };

    var layers = document.getElementById('menu');
    layers.appendChild(link);
};

//on-click functions
//on click SVI figures
map.on('click', '2014 SVI Themes', function (e) {
    map.flyTo({
    center: e.lngLat,
    zoom: 9
    });
    document.getElementById('intro').style.visibility = "hidden";
    new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML((e.features[0].properties.calc_RPL_THEMES_DF).toFixed(4)*100+'%')
    .addTo(map);
});

map.on('click', '2014 SVI Theme 4', function (e) {
    map.flyTo({
    center: e.lngLat,
    zoom: 9
    });
    document.getElementById('intro').style.visibility = "hidden";
    new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML((e.features[0].properties.calc_RPL_THEME4_DF).toFixed(4)*100+'%')
    .addTo(map);
});

map.on('click', 'SVI Theme 4 Change', function (e) {
    map.flyTo({
    center: e.lngLat,
    zoom: 9
    });
    document.getElementById('intro').style.visibility = "hidden";
    new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML((e.features[0].properties.calc_RPL_THEME4_DF_1).toFixed(4)*100+'%')
    .addTo(map);
});

map.on('click', 'SVI Themes Change', function (e) {
    map.flyTo({
    center: e.lngLat,
    zoom: 9
    });
    document.getElementById('intro').style.visibility = "hidden";
    var p = e.features[0].properties;
    new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML((p.calc_RPL_THEMES_DF_1).toFixed(4)*100 + '% Change')
    .addTo(map);
});


//mouseover
map.on('mouseenter', 'SVI Themes Change', function () {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseenter', '2014 SVI Themes', function () {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseenter', 'SVI Theme 4 Change', function () {
    map.getCanvas().style.cursor = 'pointer';
});
map.on('mouseenter', '2014 SVI Theme 4', function () {
    map.getCanvas().style.cursor = 'pointer';
});



// Change it back to a pointer when it leaves.
map.on('mouseleave', 'SVI Themes Change', function () {
    map.getCanvas().style.cursor = '';
});
map.on('mouseleave', '2014 SVI Themes', function () {
    map.getCanvas().style.cursor = '';
});
map.on('mouseleave', 'SVI Theme 4 Change', function () {
    map.getCanvas().style.cursor = '';
});
map.on('mouseleave', '2014 SVI Theme 4', function () {
    map.getCanvas().style.cursor = '';
});
})
