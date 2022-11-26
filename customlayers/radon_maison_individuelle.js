{
mviewer.customLayers.radon_maison_individuelle = {};
mviewer.customLayers.radon_maison_individuelle.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "data/Result.geojson",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
          var stl;
          var radon = feature.get('dose_radon_maison_individuelle');
          if(radon < 2000) {
            stl = [new ol.style.Style({
              fill: new ol.style.Fill({
               color: "rgba(255,255,178)"
              })
            })];
          }  
          if(radon >= 2000 && radon < 4000) {
            stl = [new ol.style.Style({
              fill: new ol.style.Fill({
               color: "rgba(254,217,118)"
              })
            })];
        }
        if(radon >= 4000 && radon < 6000) {
          stl = [new ol.style.Style({
            fill: new ol.style.Fill({
             color: "rgba(254,178,76)"
            })
          })];
        }
        if(radon >= 6000 && radon < 8000) {
          stl = [new ol.style.Style({
            fill: new ol.style.Fill({
             color: "rgba(253,141,60)"
            })
          })];
        }
        if(radon >= 8000 && radon < 10000) {
          stl = [new ol.style.Style({
            fill: new ol.style.Fill({
             color: "rgba(252,78,42)"
            })
          })];
        } 
        if(radon >= 10000 && radon < 12000) {
          stl = [new ol.style.Style({
            fill: new ol.style.Fill({
             color: "rgba(227,26,28)"
            })
          })];
        } 
        if(radon >= 12000) {
          stl = [new ol.style.Style({
            fill: new ol.style.Fill({
             color: "rgba(177,0,38)"
            })
          })];
        } 
            return stl;
      }

  });
mviewer.customLayers.radon_maison_individuelle.handle = false;
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