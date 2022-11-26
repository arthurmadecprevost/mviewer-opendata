{
mviewer.customLayers.rayonnements_cosmiques = {};
mviewer.customLayers.rayonnements_cosmiques.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "data/Result.geojson",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
          var stl;
          var radon = feature.get('dose_rayonnements_cosmiques');
          if(radon < 400) {
            stl = [new ol.style.Style({
              fill: new ol.style.Fill({
               color: "rgba(255,255,178)"
              })
            })];
          }  
        if(radon >= 400 && radon < 500) {
          stl = [new ol.style.Style({
            fill: new ol.style.Fill({
             color: "rgba(253,141,60)"
            })
          })];
        } 
        if(radon >= 500) {
          stl = [new ol.style.Style({
            fill: new ol.style.Fill({
             color: "rgba(177,0,38)"
            })
          })];
        } 

            return stl;
      }

  });
mviewer.customLayers.rayonnements_cosmiques.handle = false;
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