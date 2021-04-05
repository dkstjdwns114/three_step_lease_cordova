import React, { useEffect, useState } from "react";
import { Polar } from "react-chartjs-2";

const RealTimePolarChart = (props) => {
  const [data, setData] = useState({});
  const [options, setOptions] = useState({});
  const [labelArr, setLabelArr] = useState({});

  useEffect(() => {
    let myLabels = [];
    let myData = [];

    props.data_list.forEach((info) => {
      if (info.count !== 0) {
        myLabels.push(info.type);
        myData.push(info.count);
      }
    });
    setLabelArr(myLabels);
    setDataAndOptions(myLabels, myData);
  }, [props.data_list, props.tooltipTitle]);

  const setDataAndOptions = (myLabels, myData) => {
    setData({
      labels: myLabels,
      datasets: [
        {
          backgroundColor: [
            "#90CAF9",
            "#E040FB",
            "#84FFFF",
            "#4DB6AC",
            "#FFCDD2",
            "#CDDC39",
            "#F57C00",
            "#A1887F",
            "#69F0AE",
            "#FFD180",
            "#388E3C"
          ],
          data: myData
        }
      ]
    });
    setOptions({
      tooltips: {
        callbacks: {
          title: (context) => {
            return props.tooltipTitle;
          },
          label: (context) => {
            let label = " ";
            labelArr.forEach((myLabel, idx) => {
              if (context.index === idx) {
                label += myLabel + ": ";
              }
            });
            if (context.yLabel !== null) {
              label += props.numberWithCommas(context.yLabel) + "개";
            }
            return label;
          }
        }
      }
    });
  };

  return <Polar data={data} options={options} />;
};

export default RealTimePolarChart;
