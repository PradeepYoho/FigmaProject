import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface DataPoint {
  month: string;
  revenue: number;
}

const data: DataPoint[] = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 7000 },
  { month: "Mar", revenue: 12000 },
  { month: "Apr", revenue: 8000 },
  { month: "May", revenue: 6000 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: {
    payload: DataPoint;
  }[];
  coordinate?: { x: number; y: number };
}

function formatRevenue(value: number): string {
  return value >= 1000 ? `${(value / 1000).toFixed(0)}k` : `${value}`;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, coordinate }) => {
  if (active && payload && payload.length > 0 && coordinate) {
    const point = payload[0].payload;

    return (
      <div
        className="pointer-events-none"
        style={{
          position: "absolute",
          top: coordinate.y - 15, 
          left: coordinate.x - 2, 
          transform: "translate(-50%, -100%)",
          zIndex: 10,
        }}
      >
        <div className="relative bg-white/90 text-gray-800 text-xs font-semibold px-3 py-1 rounded-lg shadow-md backdrop-blur">
          {formatRevenue(point.revenue)}
          
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 bg-white/90 shadow" />
        </div>
      </div>
    );
  }
  return null;
};

const RevenueChart: React.FC = () => {
  return (
    <div>
      <p className="text-[22px] font-semibold text-[#0E2B56] font-montserrat">
        Revenue Trends (Monthly)
      </p>
      <div className="w-full p-8 rounded-2xl relative">
        <ResponsiveContainer width="100%" height={230}>
          <LineChart data={data}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4670AE" stopOpacity={0.5} />
                <stop offset="100%" stopColor="#4670AE" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="transparent" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#000", fontSize: 12 }}
            />
            <YAxis  />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#ffffff"
              strokeWidth={3}
              dot={{ fill: "#fff", r: 4 }}
              activeDot={{ r: 6 }}
              fill="url(#revenueGradient)"
              fillOpacity={1}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
