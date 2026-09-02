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

const productSales = [
  {
    name: "Jan",
    product1: 4000,
    product2: 2400,
  },
  {
    name: "Feb",
    product1: 3000,
    product2: 2210,
  },
  {
    name: "Mar",
    product1: 2000,
    product2: 2290,
  },
  {
    name: "Apr",
    product1: 2780,
    product2: 2000,
  },
  {
    name: "May",
    product1: 1890,
    product2: 2181,
  },
  {
    name: "Jun",
    product1: 2390,
    product2: 2500,
  },
];
function LineGraph() {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart width={600} height={400} data={productSales}>
          <defs>
            {/* Gradient Fill under the main area curve */}
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#C05621" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#C05621" stopOpacity={0.03} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#8C827A', fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#8C827A', fontSize: 12 }}
          />
          <CartesianGrid vertical={false} stroke="#EBE3DF" />

          <Tooltip content={<CustomTooltip />} />
          <Legend />

          <Area
            type="monotone"
            dataKey="product1"
            stroke="#C05621"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#areaGradient)"
            dot={<CustomDot stroke="#C05621" />}
            activeDot={{ r: 6, stroke: '#C05621', strokeWidth: 2, fill: '#fff' }}
          />
          <Line
            type="monotone"
            dataKey="product2"
            stroke="#4A423D"
            strokeWidth={1.5}
            strokeDasharray="4 4"
            dot={<CustomDot stroke="#4A423D" />}
            activeDot={{ r: 6, stroke: '#4A423D', strokeWidth: 2, fill: '#fff'}}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}

function CustomTooltip({ active, payload, lable }) {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-on-tertiary flex flex-col gap-4 rounded-md border-2 border-outline-variant">
        <p className="text-medium text-lg">{lable}</p>
        <p className="text-sm text-on-surface">
          Product 1:
          <span className="ml-2">${payload[0].value}</span>
        </p>
        <p className="text-sm text-primary">
          Product 1:
          <span className="ml-2">${payload[1].value}</span>
        </p>
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
