import React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useTheme } from '@mui/material/styles'; // To access theme in a component


const GradingPieChart = (props) => {
    const theme = useTheme(); // Access the theme object
    const colors = [
        theme.palette.primary.main,
        theme.palette.primary.contrastText,
        theme.palette.secondary.main,
        theme.palette.secondary.contrastText
    ];

    const {data} = props; // breakdown of grading categories
    
    const pieChartData = data.map((item, index) => {
        return {
            label: item.name,
            value: item.weight,
            color: colors[index % colors.length]
        }
    });
    console.log(pieChartData);

    const data1 = [
        { label: 'Group A', value: 400 },
        { label: 'Group B', value: 300 },
        { label: 'Group C', value: 300 },
        { label: 'Group D', value: 200 },
        { label: 'Group E', value: 278 },
        { label: 'Group F', value: 189 },
      ];


    return (
        <PieChart
  series={[
    {
      startAngle: -90,
      endAngle: 90,
      data1,
    },
  ]}
  height={300}
/>
    );
};

export default GradingPieChart;

/*

        <PieChart
            series={[
                {
                    outerRadius: 80,
                    pieChartData,
                    arcLabel: getArcLabel,
                },
            ]}
            sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'white',
                    fontSize: 14,
                },
            }}
            {...sizing}
        />

*/