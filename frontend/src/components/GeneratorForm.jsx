import { useState } from "react";
import { Rocket, FileText, MessageSquare, Palette, Ruler } from "lucide-react";

const TONES = ["Professional", "Technical", "Friendly", "Storytelling"];
const LENGTHS = [
  { value: "short", label: "Short", hint: "~500 chars" },
  { value: "medium", label: "Medium", hint: "~1200 chars" },
  { value: "long", label: "Long", hint: "~2200 chars" },
];

export default function GeneratorForm({ onGenerate, loading }) {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [tone, setTone] = useState("Professional");
  const [length, setLength] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectName.trim() || !description.trim()) return;
    onGenerate({
      project_name: projectName.trim(),
      description: description.trim(),
      tone,
      length,
    });
  };

  return (
    <div className="lg:sticky lg:top-28 h-fit">
      <form
        onSubmit={handleSubmit}
        className="rounded-2xl bg-white dark:bg-[#10221b] border border-[#c7ead4] dark:border-[#1f3d30] shadow-[0_6px_24px_-8px_rgba(27,169,76,0.15)] p-7 transition-colors"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-xl bg-[#e0f3e7] dark:bg-[#163027] border border-[#c7ead4] dark:border-[#22543a] flex items-center justify-center text-[#1ba94c] dark:text-[#34d399]">
            <Rocket size={20} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#0f1e17] dark:text-[#e6f0ea]">Generate Post</h3>
            <p className="text-sm text-[#5a6a61] dark:text-[#93a89b]">
              Fill in the details, let AI do the writing.
            </p>
          </div>
        </div>

        {/* Project Name */}
        <div className="mb-5">
          <label htmlFor="project-name" className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0f1e17] dark:text-[#e6f0ea]">
            <FileText size={14} className="text-[#38a169] dark:text-[#34d399]" />
            Start with a topic or idea
          </label>
          <input
            id="project-name"
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="e.g. Career Achievement, My Learning Journey"
            required
            className="w-full rounded-xl border border-[#dbe6e0] dark:border-[#1f3d30] bg-[#f7fbf8] dark:bg-[#0b1a14] px-4 py-3 text-[#0f1e17] dark:text-[#e6f0ea] placeholder:text-[#8a998f] outline-none focus:border-[#1ba94c] focus:bg-white focus:ring-2 focus:ring-[#c7ead4] transition"
          />
        </div>

        {/* Project Description */}
        <div className="mb-5">
          <label htmlFor="project-desc" className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0f1e17] dark:text-[#e6f0ea]">
            <MessageSquare size={14} className="text-[#38a169] dark:text-[#34d399]" />
            What would you like to share?
          </label>
          <textarea
            id="project-desc"
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your topic, achievement, experience, idea, project updates or announcement..."
            required
            className="w-full rounded-xl border border-[#dbe6e0] dark:border-[#1f3d30] bg-[#f7fbf8] dark:bg-[#0b1a14] px-4 py-3 text-[#0f1e17] dark:text-[#e6f0ea] placeholder:text-[#8a998f] resize-none outline-none focus:border-[#1ba94c] focus:bg-white focus:ring-2 focus:ring-[#c7ead4] transition"
          />
        </div>

        {/* Writing Tone */}
        <div className="mb-5">
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0f1e17] dark:text-[#e6f0ea]">
            <Palette size={14} className="text-[#38a169] dark:text-[#34d399]" />
            Writing Tone
          </label>
          <div className="grid grid-cols-2 gap-2">
            {TONES.map((t) => {
              const active = tone === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={`rounded-xl px-3 py-2.5 text-sm font-medium border transition-colors ${
                    active
                      ? "bg-[#1ba94c] border-[#1ba94c] text-white shadow-sm"
                      : "bg-white dark:bg-[#0b1a14] border-[#dbe6e0] dark:border-[#1f3d30] text-[#0f1e17] dark:text-[#e6f0ea] hover:border-[#9ed8b4] hover:bg-[#f2faf5]"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>

        {/* Post Length */}
        <div className="mb-7">
          <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#0f1e17] dark:text-[#e6f0ea]">
            <Ruler size={14} className="text-[#38a169] dark:text-[#34d399]" />
            Post Length
          </label>
          <div className="grid grid-cols-3 gap-2">
            {LENGTHS.map((l) => {
              const active = length === l.value;
              return (
                <button
                  key={l.value}
                  type="button"
                  onClick={() => setLength(l.value)}
                  className={`rounded-xl px-2 py-2.5 text-sm font-medium border transition-colors flex flex-col items-center ${
                    active
                      ? "bg-[#1ba94c] border-[#1ba94c] text-white shadow-sm"
                      : "bg-white dark:bg-[#0b1a14] border-[#dbe6e0] dark:border-[#1f3d30] text-[#0f1e17] dark:text-[#e6f0ea] hover:border-[#9ed8b4] hover:bg-[#f2faf5]"
                  }`}
                >
                  <span>{l.label}</span>
                  <span className={`text-[10px] font-normal mt-0.5 ${active ? "text-white/85" : "text-[#8a998f]"}`}>
                    {l.hint}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Generate button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl py-3.5 font-semibold text-[#0f1e17] bg-[#c7ead4] hover:bg-[#9ed8b4] border border-[#9ed8b4] disabled:opacity-70 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
        >
          {loading ? (
            "Generating....."
          ) : (
            <>
              <Rocket size={16} />
              Generate LinkedIn Post
            </>
          )}
        </button>
      </form>
    </div>
  );
}