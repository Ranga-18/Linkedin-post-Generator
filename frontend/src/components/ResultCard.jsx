import {
  Bot,
  Hash,
  Sparkles,
  AlertCircle,
} from "lucide-react";

import CopyButton from "./CopyButton";

function ResultCard({ result, loading, error }) {

  if (loading) {
    return (
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 flex flex-col items-center justify-center min-h-[650px]">

        <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>

        <h2 className="mt-6 text-2xl font-bold text-slate-900">
          Gemini is writing...
        </h2>

        <p className="mt-2 text-slate-500">
          Please wait a few seconds.
        </p>

      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-3xl shadow-xl border border-red-200 p-8 flex flex-col items-center justify-center min-h-[650px]">

        <AlertCircle
          size={70}
          className="text-red-500"
        />

        <h2 className="mt-6 text-2xl font-bold text-red-600">
          Something went wrong
        </h2>

        <p className="mt-4 text-center text-slate-600">
          {error}
        </p>

      </div>
    );
  }

  if (!result) {
    return (
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 flex flex-col items-center justify-center min-h-[650px]">

        <Bot
          size={70}
          className="text-indigo-600"
        />

        <h2 className="mt-6 text-2xl font-bold">
          Waiting for AI...
        </h2>

        <p className="mt-3 text-center text-slate-500 max-w-sm">
          Your generated LinkedIn post will appear here after
          you click Generate.
        </p>

      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-[28px] shadow-xl border border-slate-200 p-8">

      <div className="flex items-center gap-3">

        <Sparkles className="text-indigo-600" />

        <h2 className="text-2xl font-bold">
          Generated Post
        </h2>

      </div>

      <div className="mt-8">

        <h3 className="font-semibold text-slate-800">
          Title
        </h3>

        <p className="mt-2 text-xl font-bold">
          {result.title}
        </p>

      </div>

      <div className="mt-8">

        <h3 className="font-semibold text-slate-800">
          LinkedIn Post
        </h3>

        <div className="mt-3 bg-slate-50 rounded-2xl p-5 whitespace-pre-line leading-7">

          {result.post}

        </div>

      </div>

      <div className="mt-8">

        <div className="flex items-center gap-2">

          <Hash size={18} />

          <h3 className="font-semibold">
            Hashtags
          </h3>

        </div>

        <div className="flex flex-wrap gap-2 mt-4">

          {result.hashtags.map((tag) => (

            <span
              key={tag}
              className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              {tag}
            </span>

          ))}

        </div>

      </div>

      <div className="mt-8">

        <h3 className="font-semibold">
          Emojis
        </h3>

        <p className="text-3xl mt-3">
          {result.emojis}
        </p>

      </div>

      <div className="mt-10 flex flex-wrap gap-4">

          <CopyButton
            label="Copy Post"
            text={result.post}
          />

          <CopyButton
            label="Copy Hashtags"
            text={result.hashtags.join(" ")}
          />

        </div>

    </div>
  );
}

export default ResultCard;