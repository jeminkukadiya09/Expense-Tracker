import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = props => {
    const chartDataPoints = [
        {label:'Jan', value: 0},
        {label:'Feb', value: 0},
        {label:'Mar', value: 0},
        {label:'APR', value: 0},
        {label:'MAY', value: 0},
        {label:'JUNE', value: 0},
        {label:'JULY', value: 0},
        {label:'AUG', value: 0},
        {label:'SEPT', value: 0},
        {label:'OCT', value: 0},
        {label:'NOV', value: 0},
        {label:'DEC', value: 0},
    ];
    for (const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();  //Starting at 0 => January => 0
        chartDataPoints[expenseMonth].value += expense.amount;
    }


    return <Chart dataPoints={chartDataPoints} />;

};

export default ExpensesChart;