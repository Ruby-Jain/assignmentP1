// import React from "react";
import DonutChart from "react-donut-chart";

const AdDonut = () => {
  return (
    <>
      <DonutChart
        data={[
          {
            label: "CAMPAINGS",
            value: 25,
          },
          {
            label: "CLICKS",
            value: 100,
            
          },
          {
            label: "COST",
            value: 20,
           
          },
          {
            label: "CONVERSION",
            value: 75,
            
          },
          {
            label: "REVENUE",
            value: 75,
            
          },
        ]}
      />
      ;
    </>
  );
};

export default AdDonut;
