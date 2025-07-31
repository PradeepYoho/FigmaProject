import {
  LineChart,
  Line,
  Area,
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
  { month: "Jan", revenue: 6000 },
  { month: "Feb", revenue: 8000 },
  { month: "Mar", revenue: 12000 },
  { month: "Apr", revenue: 8000 },
  { month: "May", revenue: 6000 },
];

interface CustomTooltipProps {
  active?: boolean;
  payload?: { payload: DataPoint }[];
  coordinate?: { x: number; y: number };
}

function formatRevenue(value: number): string {
  return value >= 1000 ? `${(value / 1000).toFixed(0)}k` : `${value}`;
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  coordinate,
}) => {
  if (active && payload && payload.length > 0 && coordinate) {
    const point = payload[0].payload;

    return (
      <div
        className="pointer-events-none"
        style={{
          position: "absolute",
          top: coordinate.y - 15,
          left: coordinate.x,
          transform: "translate(-50%, -100%)",
          zIndex: 10,
        }}
      >
        <div className="relative bg-white/90 text-[#0E2B56] text-xs font-bold px-3 py-1 rounded-lg shadow-md backdrop-blur">
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
      <h3 className="text-lg font-semibold text-[#0E2B56] mb-2">
        Revenue Trends (Monthly)
      </h3>
      <div className="rounded-[20px] p-2 bg-transparent">
        <div className="w-full relative h-[230px]  rounded-[20px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} className="pt-5">
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0%" stopColor="#1E3A8A" stopOpacity={0.8} />
  <stop offset="50%" stopColor="#1E40AF" stopOpacity={0.7} />
  <stop offset="100%" stopColor="#2563EB" stopOpacity={0.6} />
</linearGradient>
              </defs>

              <CartesianGrid stroke="transparent" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#fff", fontSize: 12 }}
              />
              <YAxis hide />
              <Tooltip content={<CustomTooltip />} />

              <Area
                type="monotone"
                dataKey="revenue"
                stroke="none"
                fill="url(#revenueGradient)"
                fillOpacity={1}
              />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#ffffff"
                strokeWidth={3}
                dot={{
                  r: 5,
                  stroke: "#ffffff",
                  strokeWidth: 2,
                  fill: "#ffffff",
                }}
                activeDot={{
                  r: 7,
                  fill: "#ffffff",
                  stroke: "rgba(255, 255, 255, 0.5)",
                  strokeWidth: 10,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
