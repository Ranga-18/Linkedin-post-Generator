import Header from "../components/Header";
import Hero from "../components/Hero";
import GeneratorForm from "../components/GeneratorForm";
import ResultCard from "../components/ResultCard";
import Footer from "../components/Footer";
import useGeneratePost from "../hooks/useGeneratePost";

function Home({ darkMode, setDarkMode }) {
  const { result, loading, error, generatePost } = useGeneratePost();

  return (
    <div className="min-h-screen">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <Hero />
        <section className="mt-16">
          <div className="grid gap-8 lg:grid-cols-[420px_1fr]">
            <GeneratorForm onGenerate={generatePost} loading={loading} />
            <ResultCard result={result} loading={loading} error={error} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;