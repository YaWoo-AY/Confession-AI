import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [confession, setConfession] = useState("");
  const [reflection, setReflection] = useState("");
  const [isLoading, setIsLoading] = useState(false); // <--- added back

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!confession.trim()) return;
    setIsLoading(true); // <--- start loading

    try {
      const response = await fetch("http://localhost:8000/confess", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: confession }),
      });

      const data = await response.json();
      setReflection(data.reply);
    } catch (error) {
      setReflection("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false); // <--- stop loading
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-blue-200 to-blue-300 p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-extrabold text-gray-700 mb-8"
      >
        AI Confession
      </motion.h1>

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-2xl space-y-6"
      >
        <textarea
          className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Write your confession here..."
          value={confession}
          onChange={(e) => setConfession(e.target.value)}
          required
        ></textarea>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Thinking..." : "Confess"}
        </button>
      </motion.form>

      {reflection && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md mt-10 p-6 bg-white/70 backdrop-blur-md border rounded-2xl shadow-2xl"
        >
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Reflection</h2>
          <p className="text-gray-700 whitespace-pre-line">{reflection}</p>
        </motion.div>
      )}
    </div>
  );
}

export default App;
