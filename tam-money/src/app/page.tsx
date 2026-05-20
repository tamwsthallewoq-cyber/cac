import DashboardCard from "@/components/DashboardCard"
import QuickAdd from "@/components/QuickAdd"
import FinanceChart from "@/components/FinanceChart"

export default function Home() {
  return (
    <main className="min-h-screen p-6 bg-gradient-to-b from-[#050816] to-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">
          💳 TAM Money
        </h1>

        <p className="text-zinc-400 mb-8">
          สวัสดี นน 👋
        </p>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <DashboardCard
            title="เงินคงเหลือ"
            amount="฿0.00"
          />

          <DashboardCard
            title="รายรับเดือนนี้"
            amount="฿0.00"
          />

          <DashboardCard
            title="รายจ่ายเดือนนี้"
            amount="฿0.00"
          />

          <DashboardCard
            title="เงินออม"
            amount="฿0.00"
          />
        </div>

        <div className="bg-zinc-900 rounded-3xl p-6 mb-6 border border-yellow-500/20">
          <h2 className="text-xl font-semibold mb-2">
            🤖 วิเคราะห์การเงิน AI
          </h2>

          <p className="text-zinc-400">
            ยังไม่มีข้อมูลเพียงพอ
          </p>
        </div>

        <QuickAdd />

        <FinanceChart />
      </div>
    </main>
  )
}
