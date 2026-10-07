import {
  AreaChart,
  Area,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function LineGraph({engagementData = []}) {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={600} height={400} data={engagementData}>
          <defs>
            {/* Gradient Fill under the main area curve */}
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#C05621" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#C05621" stopOpacity={0.03} />
            </linearGradient>
            <linearGradient id="areaGradientMenu" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4A423D" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#4A423D" stopOpacity={0.03} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#8C827A", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#8C827A", fontSize: 12 }}
          />
          <CartesianGrid vertical={false} stroke="#EBE3DF" />

          <Tooltip content={<CustomTooltip />} />
          <Legend />

          <Area
            type="monotone"
            dataKey="restaurantViews"
            name="Restaurant Views"
            stroke="#C05621"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#areaGradient)"
            dot={<CustomDot stroke="#C05621" />}
            activeDot={{
              r: 6,
              stroke: "#C05621",
              strokeWidth: 2,
              fill: "#fff",
            }}
          />
          <Area
            type="monotone"
            dataKey="menuViews"
            name="Menu Views"
            stroke="#4A423D"
            strokeWidth={1.5}
            fillOpacity={1}
            fill="url(#areaGradientMenu)"
            dot={<CustomDot stroke="#4A423D" />}
            activeDot={{
              r: 6,
              stroke: "#4A423D",
              strokeWidth: 2,
              fill: "#fff",
            }}
          />
          <Line
            type="monotone"
            dataKey="menuItemLikes"
            name="Menu Item Views"
            stroke="#4A423D"
            strokeWidth={1.5}
            strokeDasharray="4 4"
            dot={<CustomDot stroke="#4A423D" />}
            activeDot={{
              r: 6,
              stroke: "#4A423D",
              strokeWidth: 2,
              fill: "#fff",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-on-tertiary flex flex-col gap-2 rounded-md border-2 border-outline-variant">
        <p className="font-medium text-lg mb-1">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}:{" "}
            <span className="ml-2 font-semibold">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
}

const CustomDot = (props) => {
  const { cx, cy, stroke } = props;
  if (!cx || !cy) return null;
  return (
    <circle cx={cx} cy={cy} r={4} fill="#fff" stroke={stroke} strokeWidth={2} />
  );
};

export default LineGraph;
