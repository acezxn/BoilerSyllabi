import React, {useState, useEffect} from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useTheme } from '@mui/material/styles'; // To access theme in a component

const GradingPieChart = (props) => {
    const [pieChartData, setPieChartData] = useState([{id: 0, value: 100, label: ""}]);

    useEffect(() => {
        if (props.breakdownData) {
            const newPieChartData = props.breakdownData.map((item, index) => {
                return {
                    label: item.name,
                    value: item.weight,
                    color: colors[index % colors.length]
                }
            });
            setPieChartData(newPieChartData);
        }
    })

    const theme = useTheme(); // Access the theme object
    const colors = [
        theme.palette.primary.main,
        theme.palette.primary.contrastText,
        theme.palette.secondary.main,
        theme.palette.secondary.contrastText
    ];

    return (
        <PieChart
        series={[
          {
            data: pieChartData
          },
        ]}
        width={600}
        height={200}
        skipAnimation={false}
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