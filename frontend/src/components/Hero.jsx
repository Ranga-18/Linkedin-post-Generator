import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-5 py-2 text-indigo-700 font-medium">

        <Sparkles size={18} />

        AI Powered

      </div>

      <h1 className="mt-8 text-6xl font-extrabold tracking-tight text-slate-900">

  Create Amazing  <span className="block bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">

    LinkedIn Posts

  </span>

</h1>

      <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-600 leading-8">

        Transform your projects into engaging LinkedIn posts with
        Google's Gemini AI in just a few seconds.

      </p>

    </motion.section>
  );
}

export default Hero;