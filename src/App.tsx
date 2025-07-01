import React from "react";

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-[#0c0c0c] via-[#1a1a2e] to-[#16213e] text-white min-h-screen overflow-x-hidden font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#64ffda] to-[#00bcd4] bg-clip-text text-transparent">
            Harsh Agnihotri
          </h1>
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li><a href="#home" className="hover:text-[#64ffda] transition">Home</a></li>
            <li><a href="#about" className="hover:text-[#64ffda] transition">About</a></li>
            <li><a href="#skills" className="hover:text-[#64ffda] transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-[#64ffda] transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-[#64ffda] transition">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center text-center px-4">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#64ffda] via-[#00bcd4] to-white bg-clip-text text-transparent animate-glow">
            Harsh Agnihotri
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-4">
            AI Engineer & Data Science Student | Building the Future of Agentic AI
          </p>
          <a href="#contact" className="inline-block mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-[#64ffda] to-[#00bcd4] text-black font-bold shadow-xl hover:scale-105 transition-transform">
            Get In Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#64ffda] to-white bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-52 h-52 rounded-full bg-gradient-to-br from-[#64ffda] to-[#00bcd4] flex items-center justify-center text-5xl text-black animate-pulse">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <div className="md:col-span-2 text-gray-300 space-y-4">
            <p>Hello! I'm Harsh Agnihotri, a 24-year-old AI enthusiast pursuing BS in Data Science at IIT Madras. I'm passionate about Large Language Models (LLMs) and Agentic AI, with a mission to revolutionize healthcare and fitness through intelligent AI systems.</p>
            <p>As the founder of <strong>IntrinsAI</strong>, I've developed an AI-powered fitness and nutrition coach that helps thousands of people achieve their health goals. I'm proud to be part of the <strong>Microsoft for Startups Founders Hub</strong> and <strong>NVIDIA Inception Program</strong>, working at the cutting edge of AI innovation.</p>
            <p>My vision extends beyond fitness - I'm building the next generation of AI agents for health monitoring and disease detection, combining my technical expertise with a deep understanding of real-world healthcare challenges.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white/5 backdrop-blur rounded-3xl mx-6 my-12 p-10 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-[#64ffda] to-white bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center text-gray-300">
          {[
            { icon: "fab fa-python", title: "Python", desc: "Data Science, ML/AI" },
            { icon: "fas fa-brain", title: "Large Language Models", desc: "GPT-4, RAG Systems" },
            { icon: "fab fa-microsoft", title: "Microsoft Azure", desc: "OpenAI, Cloud Services" },
            { icon: "fas fa-robot", title: "Agentic AI", desc: "Autonomous Systems" },
            { icon: "fas fa-chart-line", title: "Data Science", desc: "Analytics, Modeling" },
            { icon: "fas fa-heartbeat", title: "Healthcare AI", desc: "Fitness, Nutrition, Wellness" },
          ].map((skill, idx) => (
            <div key={idx} className="p-6 rounded-xl border border-white/10 hover:border-[#64ffda] bg-white/10 hover:bg-[#64ffda]/10 transition">
              <i className={`${skill.icon} text-4xl text-[#64ffda] mb-4`}></i>
              <h3 className="text-xl font-semibold mb-1">{skill.title}</h3>
              <p className="text-sm text-gray-400">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-400 py-6 border-t border-white/10">
        &copy; 2025 Harsh Agnihotri. Building the future of AI-powered healthcare 🚀
      </footer>
    </div>
  );
};

export default App;
