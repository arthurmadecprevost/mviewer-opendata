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
               //color: "rgba("+Math.round((value*255)/7071)+", 255, 0, 0.8)"
               color: "rgba(0, 255, 75, 0.8)"
              })
            })];
          }  
          if(rayonnements >= 500 && rayonnements < 1000) {
            stl = [new ol.style.Style({
              fill: new ol.style.Fill({
               //color: "rgba("+Math.round((value*255)/7071)+", 255, 0, 0.8)"
               color: "rgba(255, 255, 0, 0.8)"
              })
            })];
          }
          if(rayonnements >= 1000 && rayonnements < 1500) {
            stl = [new ol.style.Style({
              fill: new ol.style.Fill({
              //color: "rgba("+Math.round((value*255)/7071)+", 255, 0, 0.8)"
              color: "rgba(255, 50, 0, 0.8)"
              })
            })];
          } 
          if(rayonnements >= 1500) {
            stl = [new ol.style.Style({
              fill: new ol.style.Fill({
              //color: "rgba("+Math.round((value*255)/7071)+", 255, 0, 0.8)"
              color: "rgba(255, 0, 0, 0.8)"
              })
            })];
          } 

          return stl;
        }
  });
mviewer.customLayers.rayonnements_telluriques.handle = false;
}