import { useState } from "react";
import { Copy, Check } from "lucide-react";
import toast from "react-hot-toast";

function CopyButton({ text, label }) {

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {

    try {

      await navigator.clipboard.writeText(text);

      setCopied(true);

      toast.success(`${label} copied successfully!`);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch {

      toast.error("Failed to copy.");

    }

  };

  return (

    <button
      onClick={handleCopy}
      className={`flex items-center gap-2 px-5 py-3 rounded-xl transition font-medium
      ${
        copied
          ? "bg-green-600 text-white"
          : "bg-indigo-600 hover:bg-indigo-700 text-white"
      }`}
    >

      {copied ? (
        <>
          <Check size={18} />
          Copied
        </>
      ) : (
        <>
          <Copy size={18} />
          {label}
        </>
      )}

    </button>

  );
}

export default CopyButton;