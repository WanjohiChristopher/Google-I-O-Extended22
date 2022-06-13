

//PLOTTING BOTH MOISTURE AND EVAPOTRANSPIRATION

// merging the two datasets 
var evapotransmoisture=evapotransppiration.merge(moisture)
//print(evapotransmoisture)

var combinedchart=ui.Chart.image.series(evapotransmoisture, Kericho, ee.Reducer.mean(), 1000)
combinedchart.setOptions({
  title:'Kericho Comparison between Moisture Content VS Evapotranspiration Rate ',
  hAxis:{title:'Dates ' ,titleTextStyle:{italic:false,bold:true}},
  vAxis:{
    title:'Evapotranspiration & Moisture Levels ' ,titleTextStyle:{italic:false,bold:true},
    interpolateNulls: true
  },
  series:{
    0: {color:'red', lineWidth: 2,targetAxisIndex: 0 },
    1: {color:'green',lineWidth: 2, targetAxisIndex: 1 },
    }
})

print(combinedchart)
