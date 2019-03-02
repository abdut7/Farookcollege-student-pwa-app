import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const data = [
  { name: 'Sem 1',sgpa:'4.6' },
  { name: 'Sem 2',sgpa:'3.0' },
  { name: 'Sem 3', sgpa:'1.2' },
  { name: 'Sem 4', sgpa:'3.5' },
  { name: 'Sem 5', sgpa:'2.0' },
  { name: 'Sem 6', sgpa:'1.8' },
  
];

function SimpleLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name"/>
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        {/* <Line type="monotone" dataKey="Visits" stroke="#82ca9d" /> */}
        <Line type="monotone" dataKey="sgpa" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;