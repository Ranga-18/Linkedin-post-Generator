import { Bot, Hash, Sparkles, AlertCircle, Type } from "lucide-react";
import CopyButton from "./CopyButton";

function ResultCard({ result, loading, error }) {
  if (loading) {
    return (
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 flex flex-col items-center justify-center min-h-[650px]">
        {/* GREEN SPINNER */}
        <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        <h2 className="mt-6 text-2xl font-bold text-slate-900">
          Generating.....
        </h2>
        <p className="mt-2 text-slate-500">Please wait a few seconds.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-3xl shadow-xl border border-red-200 p-8 flex flex-col items-center justify-center min-h-[650px]">
        <AlertCircle size={70} className="text-red-500" />
        <h2 className="mt-6 text-2xl font-bold text-red-600">
          Something went wrong
        </h2>
        <p className="mt-4 text-center text-slate-600">{error}</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 flex flex-col items-center justify-center min-h-[650px]">
        <Bot size={70} className="text-indigo-600" />
        <h2 className="mt-6 text-2xl font-bold">Waiting for AI...</h2>
        <p className="mt-3 text-center text-slate-500 max-w-sm">
          Your generated LinkedIn post will appear here after you click Generate.
        </p>
      </div>
    );
  }

  const postLines = result.post
    ? result.post.split("\n").filter((line) => line.trim() !== "")
    : [];

  // CHARACTER + WORD COUNT
  const charCount = result.post ? result.post.length : 0;
  const wordCount = result.post
    ? result.post.trim().split(/\s+/).filter(Boolean).length
    : 0;
  const linkedInLimit = 3000;
  const percentUsed = Math.min((charCount / linkedInLimit) * 100, 100);
  const isOverLimit = charCount > linkedInLimit;

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-[28px] shadow-xl border border-slate-200 p-8">
      <div className="flex items-center gap-3 justify-center">
        <Sparkles className="text-indigo-600" />
        <h2 className="text-2xl font-bold">Generated Post</h2>
      </div>

      {/* Centered title */}
      <div className="mt-8 text-center">
        <h3 className="font-semibold text-slate-800">Title</h3>
        <p className="mt-2 text-2xl font-bold text-slate-900">{result.title}</p>
      </div>

      {/* Post content */}
      <div className="mt-8">
        <h3 className="font-semibold text-slate-800 mb-3">LinkedIn Post</h3>
        <div className="bg-slate-50 rounded-2xl p-5 leading-7 text-slate-800 text-left space-y-3">
          {postLines.map((line, idx) => {
            const trimmed = line.trim();
            const isBullet =
              trimmed.startsWith("- ") ||
              trimmed.startsWith("• ") ||
              trimmed.startsWith("* ");
            if (isBullet) {
              return (
                <div key={idx} className="flex gap-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <p>{trimmed.replace(/^[-•*]\s*/, "")}</p>
                </div>
              );
            }
            return <p key={idx}>{trimmed}</p>;
          })}
        </div>
      </div>

      {/* CHARACTER COUNT SECTION */}
      <div className="mt-6 bg-gradient-to-r from-green-50 to-indigo-50 rounded-2xl p-5 border border-slate-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Type size={18} className="text-indigo-600" />
            <h3 className="font-semibold text-slate-800">Post Stats</h3>
          </div>
          <span
            className={`text-sm font-semibold ${
              isOverLimit ? "text-red-600" : "text-green-700"
            }`}
          >
            {charCount} / {linkedInLimit} chars
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-500 ${
              isOverLimit
                ? "bg-red-500"
                : percentUsed > 80
                ? "bg-yellow-500"
                : "bg-green-500"
            }`}
            style={{ width: `${percentUsed}%` }}
          ></div>
        </div>

        <div className="flex flex-wrap gap-4 mt-3 text-sm text-slate-600">
          <span>
            <strong className="text-slate-800">{wordCount}</strong> words
          </span>
          <span>
            <strong className="text-slate-800">{postLines.length}</strong>{" "}
            lines
          </span>
          <span>
            <strong className="text-slate-800">
              {result.hashtags?.length || 0}
            </strong>{" "}
            hashtags
          </span>
          {isOverLimit && (
            <span className="text-red-600 font-medium">
              ⚠️ Over LinkedIn's 3000 char limit
            </span>
          )}
        </div>
      </div>

      {/* Hashtags */}
      <div className="mt-8">
        <div className="flex items-center gap-2">
          <Hash size={18} />
          <h3 className="font-semibold">Hashtags</h3>
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

      {/* Emojis */}
      <div className="mt-8">
        <h3 className="font-semibold">Emojis</h3>
        <p className="text-3xl mt-3">{result.emojis}</p>
      </div>

      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        <CopyButton label="Copy Post" text={result.post} />
        <CopyButton label="Copy Hashtags" text={result.hashtags.join(" ")} />
      </div>
    </div>
  );
}

export default ResultCard;