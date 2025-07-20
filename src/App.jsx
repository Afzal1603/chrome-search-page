import { useState } from "react";

const App = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="w-screen h-screen">
      <video
        className={`w-full h-full object-cover relative  transition-all duration-500 ease-in-out  ${
          isFocused ? "blur-md " : ""
        }`}
        autoPlay
        muted
        loop
        src="./video/wicked-grace.mp4"
      ></video>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            document.querySelector(".link").click();
            setSearchQuery("");
          }
        }}
        className=" w-98 text-white border border-gray-100 rounded-4xl absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2  transition-all duration-300  backdrop-blur-md   px-4 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-900"
        type="text"
        placeholder="Search..."
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <a
        className="hidden link"
        href={`https://www.google.com/search?q=${searchQuery}`}
      ></a>
    </div>
  );
};

export default App;
// https://www.google.com/search?q=yotube

// &rlz=1C1ONGR_enIN1048IN1048&oq=yotube&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIPCAEQLhgKGIMBGLEDGIAEMg8IAhAAGAoYgwEYsQMYgAQyDwgDEAAYChiDARixAxiABDIPCAQQABgKGIMBGLEDGIAEMg8IBRAAGAoYgwEYsQMYgAQyEggGEAAYChiDARixAxiABBiKBTIPCAcQABgKGIMBGLEDGIAE0gEJMjU1OWoxajE1qAIIsAIB8QVQWRgM8BQXP_EFUFkYDPAUFz8&sourceid=chrome&ie=UTF-8
