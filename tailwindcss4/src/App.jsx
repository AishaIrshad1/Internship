// src/App.jsx
export default function App() {
  const profile = {
    name: "Aisha",
    role: "Frontend Developer",
    bio: "Crafting elegant interfaces with clean code and creativity.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    github: "https://github.com/AishaIrshad1",
  };

  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center transition-transform transform hover:-translate-y-1 hover:shadow-2xl max-w-sm w-full">
        <img
          src={profile.img}
          alt={profile.name}
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 mb-4"
        />
        <h2 className="text-2xl font-semibold text-gray-800">{profile.name}</h2>
        <p className="text-blue-600 font-medium">{profile.role}</p>
        <p className="text-gray-600 text-sm text-center mt-2">{profile.bio}</p>

        <div className="mt-5 flex gap-4">
          <button className="px-5 py-2 bg-blue-600 text-black rounded-full hover:bg-blue-700 transition-colors shadow">
            Follow
          </button>
          <button className="px-5 py-2 bg-blue-600 text-black rounded-full hover:bg-blue-700 transition-colors shadow">
            Message
          </button>
        </div>

        {/* GitHub Icon Link */}
        <div className="mt-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black transition-colors"
            title="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.7.5.6 5.6.6 12.1c0 5.1 3.3 9.5 7.8 11.1.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.6-1.5-1.4-1.9-1.4-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 1.4 2 1.4 1.1 2 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.8-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.2-.1-.3-.6-1.6.1-3.2 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.9 0c2.2-1.5 3.2-1.2 3.2-1.2.7 1.6.2 2.9.1 3.2.8.9 1.2 1.9 1.2 3.2 0 4.5-2.7 5.4-5.3 5.7.4.3.8 1 .8 2v3c0 .3.2.7.8.6a11.6 11.6 0 0 0 7.8-11.1C23.4 5.6 18.3.5 12 .5z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
