import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Search", value: 45, color: "#A63A00" },
  { name: "Browse", value: 30, color: "#333333" },
  { name: "Shared", value: 15, color: "#8C6F64" },
  { name: "Direct", value: 10, color: "#E0DDD9" },
];

function PieGraph() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Legend content={<CustomLegend />} />
        <Pie
          data={data}
          cx="50%"
          cy="42%"
          innerRadius="50%"
          outerRadius="70%"
          startAngle={90}
          endAngle={-270}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>

        {/* Center Label inside SVG Canvas */}
        <text
          x="50%"
          y="35%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-2xl text-on-surface font-main-header font-bold"
        >
          18.4k
        </text>
        <text
          x="50%"
          y="42%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-xs text-primary font-medium"
        >
          TOTAL VIEWS
        </text>
      </PieChart>
    </ResponsiveContainer>
  );
}

function CustomLegend() {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-4 ml-10">
      {data.map((item) => (
        <div
          className="flex items-center gap-2 text-xs text-secondary"
          key={item.name}
        >
          <span
            className="w-2.5 h-2.5 rounded-full inline-block"
            style={{ backgroundColor: item.color }}
          />
          <span>
            {item.name} ({item.value}%)
          </span>
        </div>
      ))}
    </div>
  );
}

export default PieGraph;
