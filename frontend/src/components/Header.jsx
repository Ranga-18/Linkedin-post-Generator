import { Sparkles, Moon, Sun } from "lucide-react";

function GithubIcon({ size = 18, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.26 5.69.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12 24 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18, className = "" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="border-b border-slate-200 bg-green-100 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        {/* Centered title */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-2xl font-extrabold text-black flex items-center justify-center gap-2">
            LinkedIn Post Generator
          </h1>
          <p className="text-sm text-slate-700 flex items-center justify-center gap-1 mt-1">
            <Sparkles size={14} className="text-indigo-600" />
            Powered by Gemini AI ✨
          </p>
        </div>

        <div className="w-24"></div>

        {/* Right side icons */}
        <div className="flex items-center gap-3 ml-auto">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-xl border border-slate-300 flex items-center justify-center hover:bg-white transition"
            title="Toggle Dark Mode"
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-500" />
            ) : (
              <Moon size={18} className="text-slate-800" />
            )}
          </button>

          <a
            href="https://github.com/Ranga-18"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl border border-slate-300 flex items-center justify-center hover:bg-white transition"
            title="GitHub"
          >
            <GithubIcon size={18} className="text-slate-800" />
          </a>
          <a
            href="https://www.linkedin.com/in/ranganathan-p"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl border border-slate-300 flex items-center justify-center hover:bg-white transition"
            title="LinkedIn"
          >
            <LinkedinIcon size={18} className="text-blue-700" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;