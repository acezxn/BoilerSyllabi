import React, { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useTheme } from '@mui/material/styles'; // To access theme in a component

const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        title: {
            display: false,
        },
    },
};

const GradingPieChart = (props) => {
    const [pieChartData, setPieChartData] = useState([{ id: 0, value: 100, label: "" }]);

    const theme = useTheme(); // Access the theme object

    useEffect(() => {
        const colors = [
            "#f5eccb", "#c1ad84", "#a08d5f", "#decda9", "#e0f7fa", "#80deea", "#0097a7",
            "#4caf50", "#cddc39", "#ffeb3b", "#ff9800", "#ff5722", "#f44336", "#9e9e9e"
        ];
        if (props.breakdownData) {
            const newPieChartData = props.breakdownData.map((item, index) => {
                return {
                    label: item.name,
                    value: item.weight,
                    color: colors[index % colors.length],
                };
            });
            setPieChartData(newPieChartData);
        }
    }, [props.breakdownData, theme]);

    return (
        <PieChart
            options={options}
            series={[
                {
                    data: pieChartData,
                },
            ]}
            height={200}
            margin={{ right: 20, left: 20 }}
            slotProps={{
                legend: { hidden: true }
            }}
            tooltip={{ trigger: 'item' }}
            skipAnimation={false}
        />
    );
};

export default GradingPieChart;
