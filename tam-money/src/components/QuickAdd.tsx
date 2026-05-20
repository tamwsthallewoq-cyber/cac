const income = [
  "📺 YouTube",
  "🎵 เพลง",
  "🎮 งานข่าวเกม",
  "💼 งานฟรีแลนซ์",
  "💸 เงินโอนเข้า",
]

const expense = [
  "🍜 อาหาร",
  "🎮 เกม",
  "📶 ค่าเน็ต",
  "🚗 เดินทาง",
  "💻 อุปกรณ์ทำงาน",
  "🏥 สุขภาพ",
  "💸 เงินโอนออก",
]

export default function QuickAdd() {
  return (
    <div className="bg-zinc-900 rounded-3xl p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">
        ⚡ เพิ่มรายการด่วน
      </h2>

      <h3 className="mb-3 text-green-400">
        รายรับ
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
        {income.map((item) => (
          <button
            key={item}
            className="rounded-2xl p-4 bg-green-500/20 hover:bg-green-500/30 transition"
          >
            {item}
          </button>
        ))}
      </div>

      <h3 className="mb-3 text-red-400">
        รายจ่าย
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {expense.map((item) => (
          <button
            key={item}
            className="rounded-2xl p-4 bg-red-500/20 hover:bg-red-500/30 transition"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}
