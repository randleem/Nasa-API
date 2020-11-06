import React, { useEffect, useState } from "react";
import {curveCatmullRom} from 'd3-shape';
import {XYPlot,
XAxis,
YAxis,
HorizontalGridLines,
VerticalGridLines,
LineSeries, LineMarkSeries} from 'react-vis';

function MarsWeather() {
  const [marsWeather, setMarsWeather] = useState({});
  const [marsPRE, setMarsPRE] = useState([]);
  const [marsAT, setMarsAT] = useState({});

  useEffect(() => {
    if (marsWeather) {
      async function getPicture() {
        const res = await fetch(
          `https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0`,
          {
            headers: { accept: "application/json" },
          }
        );
        const data = await res.json();
        console.log(data);
        setMarsWeather(data);
        console.log(data.sol_keys.length);
       
      }
      getPicture();
    }
  }, []);

    useEffect(() => {
        if(marsWeather){
    let pressureArray = []
    for(let i = 0; i< marsWeather?.sol_keys?.length;i++){
        let xd = marsWeather?.sol_keys[i];
        let solDay = marsWeather?.sol_keys[i]
        let yd = marsWeather[solDay].PRE?.av;
        pressureArray.push({x: xd, y: yd})
    }
    console.log(pressureArray);
    setMarsPRE([...pressureArray]);
    console.log(marsPRE);

}
}, [marsWeather])

  return (
    <div>
        <XYPlot
            width={300}
            height={300}>
        <HorizontalGridLines style={{stroke: '#B7E9ED'}} />
        <VerticalGridLines style={{stroke: '#B7E9ED'}} />
        <XAxis
            title="XMars Sol - Solar Days"
            style={{
            line: {stroke: '#ADDDE1'},
            ticks: {stroke: '#ADDDE1'},
            text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
            }}
        />
        <YAxis title="PRE: Pressure Pa" />
        <LineSeries
            className="first-series"
            data={marsPRE}
            style={{
                strokeLinejoin: 'round',
                strokeWidth: 4}}

        />
    </XYPlot>
    </div>
  );
}

export default MarsWeather;