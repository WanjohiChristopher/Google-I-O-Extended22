// evapotranspiration dataset
var evapotransppiration = ee.ImageCollection("MODIS/006/MOD16A2")
           . filterBounds(Kericho)
          // selecting only Totalevapotranspiration
          .select('ET')
          .filterDate('2022-01-01','2022-01-31')
          .map(function(evapotransppiration){return evapotransppiration.clip(Kericho)});

// Visualization parameters
var evapotranspirationVis = {
  min: 0.0,
  max: 300.0,
  palette: [
    'ffffff', 'fcd163', '99b718', '66a000', '3e8601', '207401', '056201',
    '004c00', '011301'
  ],
};

Map.setCenter(35.2863,0.3689,5);

Map.addLayer(evapotransppiration, evapotranspirationVis, 'Evapotranspiration');
//Creating Chart for evapotranspiration
var evapochart=ui.Chart.image.series(evapotransppiration, Kericho, ee.Reducer.mean(), 1000)
evapochart.setOptions({
  title:'Kericho Evapotranspiration Rate ',
  hAxis:{title:'Dates ' ,titleTextStyle:{italic:false,bold:true}},
  vAxis:{
    title:'Evapotranspiration Levels ' ,titleTextStyle:{italic:false,bold:true},
    interpolateNulls: true
  }
})
print(evapochart)
