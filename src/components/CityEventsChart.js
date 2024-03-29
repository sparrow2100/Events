import { useState, useEffect } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CityEventsChart = ({ allLocations, events }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const getData = () => {
    const data = allLocations.map((location) => {
      const count = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(/, | - /)[0];
      return { city, count };
    });
    return data;
  };
  return (
    <ResponsiveContainer width="99%" height={350}>
      <ScatterChart
        margin={{
          top: 20,
          right: 20,
          bottom: 60,
          left: 0,
        }}
      >
        <CartesianGrid />
        <XAxis
          type="category"
          dataKey="city"
          name="City"
          angle={60}
          interval={0}
          tick={{ dx: 20, dy: 40, fontSize: 14 }}
        />
        <YAxis
          type="number"
          dataKey="count"
          name="Number of Events"
          allowDecimals={false}
          label={{
            value: "Number of Events",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} label="" />
        <Scatter name="A school" data={data} fill="#966CE0" />
      </ScatterChart>
      <p className="caption">number of events by city</p>
    </ResponsiveContainer>
  );
};

export default CityEventsChart;
