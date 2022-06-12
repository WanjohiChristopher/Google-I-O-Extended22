// moisture dataset
var moisture = ee.ImageCollection("NASA_USDA/HSL/SMAP10KM_soil_moisture")
               .filterBounds(Kericho)
                // selecting only surface soil moisture
                 .filterDate('2022-01-01','2022-01-31')
                .select('ssm')
                 .map(function(moisture){return moisture.clip(Kericho)});

// Visualization parameters
var moistureVis = {
  min: 0.0,
  max: 300.0,
  palette: [
    'ffffff', 'fcd163', '99b718', '66a000', '3e8601', '207401', '056201',
    '004c00', '011301'
  ],
};


//drawing the roi on the map
Map.setCenter(35.2863,0.3689,5);
Map.addLayer(moisture, moistureVis, 'Moisture');

//Creating Chart for moisture
var moisturechart=ui.Chart.image.series(moisture, Kericho, ee.Reducer.mean(), 1000)
moisturechart.setOptions({
  title:'Kericho Soil Moisture Assessment (mm)',
  hAxis:{title:'Dates ' ,titleTextStyle:{italic:false,bold:true}},
  vAxis:{
    title:'Moisture Levels ' ,titleTextStyle:{italic:false,bold:true},
    interpolateNulls: true
  }
})
print(moisturechart)
