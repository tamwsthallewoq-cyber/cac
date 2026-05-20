"use client"

import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  {
    name: "รายรับ",
    amount: 0,
  },
  {
    name: "รายจ่าย",
    amount: 0,
  },
  {
    name: "เงินออม",
    amount: 0,
  },
]

export default function FinanceChart() {
  return (
    <div className="bg-zinc-900 rounded-3xl p-6">
      <h2 className="text-2xl font-bold mb-6">
        📊 กราฟรายรับ–รายจ่าย
      </h2>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="amount" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
