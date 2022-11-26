{
mviewer.customLayers.rayonnements_telluriques = {};
mviewer.customLayers.rayonnements_telluriques.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "data/Result.geojson",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
          var stl;
          var rayonnements = feature.get('dose_rayonnements_telluriques');
          if(rayonnements < 500) {
            stl = [new ol.style.Style({
              fill: new ol.style.Fill({
               color: "rgba(255,255,178)"
              })
            })];
          }  
          if(rayonnements >= 500 && rayonnements < 1000) {
            stl = [new ol.style.Style({
              fill: new ol.style.Fill({
               color: "rgba(254,178,76)"
              })
            })];
          }
          if(rayonnements >= 1000 && rayonnements < 1500) {
            stl = [new ol.style.Style({
              fill: new ol.style.Fill({
              color: "rgba(252,78,42)"
              })
            })];
          } 
          if(rayonnements >= 1500) {
            stl = [new ol.style.Style({
              fill: new ol.style.Fill({
              color: "rgba(177,0,38)"
              })
            })];
          } 

          return stl;
        }
  });
mviewer.customLayers.rayonnements_telluriques.handle = false;
}