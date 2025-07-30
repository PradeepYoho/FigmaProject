import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 6000 },
  { month: 'Mar', revenue: 12000 },
  { month: 'Apr', revenue: 8000 },
  { month: 'May', revenue: 5000 },
];

const RevenueTrends = () => {
  return (
    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 shadow-lg w-full max-w-md mx-auto ">
      <h3 className="text-sm font-semibold text-gray-800 mb-2">Revenue Trends (Monthly)</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid stroke="transparent" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'white',
              borderRadius: '8px',
              fontSize: '12px',
              border: 'none',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            }}
            labelFormatter={() => ''}
            formatter={(value) => [`${(value as number) / 1000}k`]}
          />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#fff"
            strokeWidth={2}
            dot={{ r: 6, stroke: '#fff', strokeWidth: 2, fill: '#fff' }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueTrends;
