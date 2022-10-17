{
let styleAutre = [new ol.style.Style({
  stroke: new ol.style.Stroke({
    color: 'rgba(255,255,255,0)',
    width: 0.8,
    lineDash: [4,4]
  }),
  fill: new ol.style.Fill({
    color: 'rgba(0,0,0,0)'
  })
})];

let styleLoire = [new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: 'rgba(45, 64,89,255)',
        width: 0.8,
        lineDash: [4,4]
      }),
      fill: new ol.style.Fill({
        color: 'rgba(236, 116, 178, 0.8)'
      })
    })];
mviewer.customLayers.communesfr = {};
mviewer.customLayers.communesfr.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "data/communes.geojson",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
          var stl;
          if(feature.get('nom').includes('Loire')) {
              stl = styleLoire;
          } else {
              stl = styleAutre;
          }
          return stl;
      }

  });
mviewer.customLayers.communesfr.handle = false;
} 

/*
        style: new ol.style.Style({
                  stroke: new ol.style.Stroke({
                    color: 'rgba(45, 64,89,255)',
                    width: 0.8,
                    lineDash: [4,4]
                  }),
                  fill: new ol.style.Fill({
                    color: 'rgba(0,0,0,0)'
                  })
        })*/