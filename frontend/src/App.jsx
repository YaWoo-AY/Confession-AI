import { useState } from "react";

function App() {
  const [confession, setConfession] = useState("");
  const [reflection, setReflection] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!confession.trim()) return;

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
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <h1 className="text-4xl font-bold text-gray-700 mb-6">AI Confession</h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg space-y-4"
      >
        <textarea
          className="w-full h-40 p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-400"
          placeholder="Write your confession here..."
          value={confession}
          onChange={(e) => setConfession(e.target.value)}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
        >
          Confess
        </button>
      </form>

      {reflection && (
        <div className="w-full max-w-md mt-6 p-6 bg-white rounded-lg shadow-lg border">
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">Reflection</h2>
          <p className="text-gray-700 whitespace-pre-line">{reflection}</p>
        </div>
      )}
    </div>
  );
}

export default App;
