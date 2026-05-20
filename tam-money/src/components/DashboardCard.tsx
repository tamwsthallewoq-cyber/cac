type Props = {
  title: string
  amount: string
}

export default function DashboardCard({
  title,
  amount,
}: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 shadow-xl">
      <p className="text-zinc-400 mb-2">
        {title}
      </p>

      <h2 className="text-3xl font-bold text-yellow-400">
        {amount}
      </h2>
    </div>
  )
}
