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
               //color: "rgba("+Math.round((value*255)/7071)+", 255, 0, 0.8)"
               color: "rgba(0, 255, 75, 0.8)"
              })
            })];
          }  
          if(radon >= 2000 && radon < 3000) {
            stl = [new ol.style.Style({
              fill: new ol.style.Fill({
               //color: "rgba("+Math.round((value*255)/7071)+", 255, 0, 0.8)"
               color: "rgba(255, 255, 0, 0.8)"
              })
            })];
        }         
        if(radon >= 3000 && radon < 4000) {
          stl = [new ol.style.Style({
            fill: new ol.style.Fill({
             //color: "rgba("+Math.round((value*255)/7071)+", 255, 0, 0.8)"
             color: "rgba(255, 225, 0, 0.8)"
            })
          })];
        }
        if(radon >= 4000 && radon < 5000) {
          stl = [new ol.style.Style({
            fill: new ol.style.Fill({
             //color: "rgba("+Math.round((value*255)/7071)+", 255, 0, 0.8)"
             color: "rgba(255, 200, 0, 0.8)"
            })
          })];
        }
        if(radon >= 5000 && radon < 6000) {
          stl = [new ol.style.Style({
            fill: new ol.style.Fill({
             //color: "rgba("+Math.round((value*255)/7071)+", 255, 0, 0.8)"
             color: "rgba(255, 175, 0, 0.8)"
            })
          })];
        } 
        if(radon >= 6000 && radon < 7000) {
          stl = [new ol.style.Style({
            fill: new ol.style.Fill({
             //color: "rgba("+Math.round((value*255)/7071)+", 255, 0, 0.8)"
             color: "rgba(255, 150, 0, 0.8)"
            })
          })];
        } 
        if(radon >= 7000 && radon < 8000) {
          stl = [new ol.style.Style({
            fill: new ol.style.Fill({
             //color: "rgba("+Math.round((value*255)/7071)+", 255, 0, 0.8)"
             color: "rgba(255, 125, 0, 0.8)"
            })
          })];
        } 
        if(radon >= 8000 && radon < 9000) {
          stl = [new ol.style.Style({
            fill: new ol.style.Fill({
             //color: "rgba("+Math.round((value*255)/7071)+", 255, 0, 0.8)"
             color: "rgba(255, 100, 0, 0.8)"
            })
          })];
        } 
        if(radon >= 9000 && radon < 10000) {
          stl = [new ol.style.Style({
            fill: new ol.style.Fill({
             //color: "rgba("+Math.round((value*255)/7071)+", 255, 0, 0.8)"
             color: "rgba(255, 50, 0, 0.8)"
            })
          })];
        } 
        if(radon >= 10000) {
          stl = [new ol.style.Style({
            fill: new ol.style.Fill({
             //color: "rgba("+Math.round((value*255)/7071)+", 255, 0, 0.8)"
             color: "rgba(255, 0, 0, 0.8)"
            })
          })];
        } 
        /*if (radon >= 2000) {
          popDanger += parseInt(feature.get('population'));
          console.log("pop:"+popDanger);
        }*/
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