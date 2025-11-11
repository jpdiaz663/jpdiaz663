// React hooks for state management
import { useState } from 'react';

const SimpleTab = () => {

    const [tab, setTab] = useState("skills");
    
    return (
    <div className={`flex flex-col border border-white/10 duration-500`}
    >
    {/* Tabs header */}
    <div className="flex items-center justify-between">
      {["skills", "stack", "hobbies"].map((item) => (
        <div
          key={item}
          onClick={() => setTab(item)}
          className={`w-1/3 p-3 text-center cursor-pointer text-gray-300 hover:bg-gray-800 hover:text-gray-200 
            ${tab === item ? "bg-gray-900 text-gray-200 border-b-2 border-orange-600" : ""}`}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </div>
      ))}
    </div>

    {/* Tabs content */}
    {tab === "skills" && (
      <div className="flex flex-wrap justify-center gap-2 p-4">
        {[
          "Java",
          "Nodejs",
          "Reactjs",
          "PHP",
          "Symfony",
          "JavaScript",
          "DDD",
          "Drupal",
          "Sql",
        ].map((skill) => (
          <div
            key={skill}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 
            rounded-full text-sm
            transition
            hover:bg-blue-500/20 hover:-translate-y-0.5
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
              "
          >
            {skill}
          </div>
        ))}
      </div>
    )}

    {tab === "stack" && (
      <div className="flex flex-wrap justify-center gap-2 p-4">
       {["Software", "Ciberseguridad", "Frameworks", "IA"].map((hobby) => (
          <div
            key={hobby}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 
            rounded-full text-sm
            transition
            hover:bg-blue-500/20 hover:-translate-y-0.5
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
          >
            {hobby}
          </div>
        ))}
      </div>
    )}
    
    {tab === "hobbies" && (
      <div className="flex flex-wrap justify-center gap-2 p-4">
        {["Ping Pong", "Futbol"].map((hobby) => (
          <div
            key={hobby}
            className="bg-blue-500/10 text-blue-500 py-1 px-3 
            rounded-full text-sm
            transition
            hover:bg-blue-500/20 hover:-translate-y-0.5
            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
          >
            {hobby}
          </div>
        ))}
      </div>
    )}
    </div>
    );
};

export default SimpleTab;