import { Code2, Database, PenTool, Terminal } from "lucide-react";

const stackItems = [
  {
    icon: Code2,
    label: "Frontend",
  },
  {
    icon: Database,
    label: "Backend",
  },
  {
    icon: PenTool,
    label: "Design",
  },
  {
    icon: Terminal,
    label: "DevOps",
  },
];

export function Stack() {
  return (
    <section className="space-y-4">
      <h2 className="font-nunito font-semibold text-lg text-white mb-6 tracking-tight flex items-center gap-2">
        <Code2 width={16} className="text-zinc-500" strokeWidth={1.5} />
        Stack
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stackItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center p-4 rounded-2xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-800/50 transition-colors group"
          >
            <item.icon
              width={24}
              className="text-zinc-500 group-hover:text-zinc-200 transition-colors mb-2"
              strokeWidth={1.5}
            />
            <span className="text-xs text-zinc-400">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
