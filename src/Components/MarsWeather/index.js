import React, { useEffect, useState } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  LineMarkSeries,
} from "react-vis";

function MarsWeather() {
  const [marsWeather, setMarsWeather] = useState({});
  const [marsPRE, setMarsPRE] = useState([]);
  const [marsAT, setMarsAT] = useState({});

  useEffect(() => {
    if (marsWeather) {
      async function getPicture() {
        const res = await fetch(
          `https://api.nasa.gov/insight_weather/?api_key=XN5CHF6pKgWR57EuktB9EvBhIetjqL7lAJmqBFXq&feedtype=json&ver=1.0`,
          {
            headers: { accept: "application/json" },
          }
        );
        const data = await res.json();
        setMarsWeather(data);
      }
      getPicture();
    }
  }, []);

  useEffect(() => {
    if (marsWeather) {
      let pressureArray = [];
      for (let i = 0; i < marsWeather?.sol_keys?.length; i++) {
        let xd = marsWeather?.sol_keys[i];
        let solDay = marsWeather?.sol_keys[i];
        let yd = marsWeather[solDay].PRE?.av;
        pressureArray.push({ x: xd, y: yd });
      }

      setMarsPRE([...pressureArray]);
    }
  }, [marsWeather]);

  useEffect(() => {
    if (marsWeather) {
      let tempArray = [];
      for (let i = 0; i < marsWeather?.sol_keys?.length; i++) {
        if (i === 1 || i === 2) {
          continue;
        }
        let xd = marsWeather?.sol_keys[i];
        let solDay = marsWeather?.sol_keys[i];
        let yd = marsWeather[solDay].AT?.av;
        tempArray.push({ x: xd, y: yd });
      }
      setMarsAT([...tempArray]);
      console.log(marsAT);
    }
  }, [marsWeather]);

  return (
    <div>
      <h1>Under Pressure on Mars </h1>
      <img
        src={`https://images-na.ssl-images-amazon.com/images/I/71NrROgheSL._AC_SX679_.jpg`}
        width={300}
        height={`auto`}
      />
      <br></br>
      <container className="graphs">
        <XYPlot width={800} height={500}>
          <HorizontalGridLines style={{ stroke: "white" }} />
          <VerticalGridLines style={{ stroke: "white" }} />
          <XAxis
            title="Mars Sol - Solar Days"
            style={{
              line: { stroke: "white" },
              ticks: { stroke: "white" },
              text: { stroke: "none", fill: "white", fontWeight: 600 },
            }}
          />
          <YAxis title="PRE: Pressure Pa" />
          <LineSeries
            className="first-series"
            data={marsPRE}
            style={{
              color: `white`,
              fill: "none",
              strokeLinejoin: "round",
              strokeWidth: 4,
            }}
          />
        </XYPlot>
        <br></br>
        {/* <XYPlot
                width={300}
                height={300}>
            <HorizontalGridLines style={{stroke: '#B7E9ED'}} />
            <VerticalGridLines style={{stroke: '#B7E9ED'}} />
            <XAxis
                title="Mars Sol - Solar Days"
                style={{
                line: {stroke: '#ADDDE1'},
                ticks: {stroke: '#ADDDE1'},
                text: {stroke: 'none', fill: '#6b6b76', fontWeight: 600}
                }}
            />
            <YAxis title="AT: Average Temperature" />
            <LineSeries
                className="second-series"
                data={marsAT}
                style={{
                    strokeLinejoin: 'round',
                    strokeWidth: 4}}

            />
        </XYPlot> */}
      </container>
    </div>
  );
}

export default MarsWeather;
