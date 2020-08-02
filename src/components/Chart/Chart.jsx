import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchApi();
  });

  const lineChart = (
    <Line
      data={{
        labels: "",
        datasets: [{}, {}]
      }}
    />
  );

  return <h1>Chart</h1>;
};

export default Chart;
