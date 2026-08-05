import { Sparkles, Moon } from "lucide-react";

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white">
            <Sparkles size={20} />
          </div>

          <div>

            <h1 className="text-xl font-bold text-slate-900">
              LinkedIn Post Generator
            </h1>

            <p className="text-sm text-slate-500">
              Powered by Gemini AI
            </p>

          </div>

        </div>

        <button className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center hover:bg-slate-100 transition">

          <Moon size={18} />

        </button>

      </div>

    </header>
  );
}

export default Header;