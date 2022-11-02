{
let styleAutre = [new ol.style.Style({
  /*stroke: new ol.style.Stroke({
    color: 'rgba(255,255,255,0)',
    width: 0.8,
    lineDash: [4,4]
  }),*/
  fill: new ol.style.Fill({
    color: "#"+Math.floor(Math.random()*16777215).toString(16)
  })
})];
  
let style3000 = [new ol.style.Style({
      /*stroke: new ol.style.Stroke({
        color: 'rgba(45, 64,89,255)',
        width: 0.8,
        lineDash: [4,4]
      }),*/
      fill: new ol.style.Fill({
        color: 'rgba(255, 255, 0, 0.8)'
      })
    })];
mviewer.customLayers.communesfr = {};
mviewer.customLayers.communesfr.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "data/Result.geojson",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
          var stl;

          if(feature.get('dose_radon_maison_individuelle') > 2000) {
              value = feature.get('dose_radon_maison_individuelle');
              stl = [new ol.style.Style({
                fill: new ol.style.Fill({
                 //color: "rgba("+Math.round((value*255)/7071)+", 255, 0, 0.8)"
                 color: "rgba(255, 100, 0, 0.8)"
                })
              })];
          } 
          if(feature.get('dose_radon_maison_individuelle') < 2000) {
            value = feature.get('dose_radon_maison_individuelle');
            stl = [new ol.style.Style({
              fill: new ol.style.Fill({
               //color: "rgba("+Math.round((value*255)/7071)+", 255, 0, 0.8)"
               color: "rgba(100, 100, 0, 0.8)"
              })
            })];
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