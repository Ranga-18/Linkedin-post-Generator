import { useState } from "react";
import { Rocket } from "lucide-react";

function GeneratorForm({ onGenerate, loading }) {
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [tone, setTone] = useState("Professional");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
  project_name: projectName,
  description,
  tone,
};

console.log(data);

onGenerate(data);
  };

  return (
    <div className="sticky top-24">

    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200 p-8">

      <div className="flex items-center gap-3 mb-8">

        <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white">

          <Rocket size={22} />

        </div>

        <div>

          <h2 className="text-2xl font-bold text-slate-900">
            Generate Post
          </h2>

          <p className="text-slate-500">
            Describe your project and let AI write a LinkedIn post.
          </p>

        </div>

      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >

        <div>

          <label className="block mb-2 font-medium text-slate-700">
            Project Name
          </label>

          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="AI Resume Analyzer"
            required
            className="w-full rounded-xl border border-slate-300 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </div>

        <div>

          <label className="block mb-2 font-medium text-slate-700">
            Project Description
          </label>

          <textarea
            rows="6"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your project..."
            required
            className="w-full rounded-xl border border-slate-300 p-4 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </div>

        <div>

          <label className="block mb-2 font-medium text-slate-700">
            Writing Tone
          </label>

          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full rounded-xl border border-slate-300 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option>Professional</option>
            <option>Friendly</option>
            <option>Technical</option>
            <option>Storytelling</option>
          </select>

        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Generating..." : "🚀 Generate LinkedIn Post"}
        </button>

      </form>
    </div>
    </div>
  );
}

export default GeneratorForm;