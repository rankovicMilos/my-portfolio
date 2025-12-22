export function Newsletter() {
  return (
    <section className="pt-4 pb-2 border-t border-white/5">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="font-nunito font-semibold text-white text-base tracking-tight">
            Stay updated
          </h3>
          <p className="text-xs text-zinc-500 mt-1">
            Get notified when I publish new resources.
          </p>
        </div>

        {/* Custom Input Group */}
        <div className="relative w-full sm:w-auto flex items-center">
          <div className="relative group">
            <input
              type="email"
              placeholder="Email address"
              className="bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs rounded-l-lg py-2.5 pl-3 pr-2 w-full sm:w-48 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 transition-all placeholder:text-zinc-700"
            />
          </div>
          <button className="bg-zinc-100 hover:bg-zinc-300 text-black text-xs font-medium py-2.5 px-3 rounded-r-lg border-y border-r border-zinc-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
