import { useState, useCallback } from "react";
import Gallery from "./components/Gallery";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  return (
    <div className="min-h-screen bg-peach-bg">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-[#f9516c] border-b border-[#e8335a]">
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            {/* Logo/Icon */}
            <svg
              className="w-8 h-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>

            {/* App Title */}
            <h1 className="font-display text-xl font-bold text-white shrink-0 drop-shadow-sm">
              PhotoGallery App
            </h1>
          </div>

          {/* Search Input */}
          <div className="relative w-full max-w-sm">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search by author..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full text-sm
                bg-white/20 border border-white/35
                text-white placeholder:text-[#ffd6e4]
                focus:outline-none focus:ring-2 focus:ring-white/40
                focus:border-white/60 transition-all duration-200"
            />
          </div>
        </div>
      </header>

      {/* Gallery */}
      <main className="max-w-screen-xl mx-auto px-5 sm:px-8 py-8">
        <Gallery searchQuery={searchQuery} />
      </main>
    </div>
  );
}