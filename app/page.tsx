export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col items-center justify-center px-4 pb-32">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
          SFM Radio
        </h1>
        <p className="text-2xl text-slate-300 mb-8">
          Your favorite radio station for music, news, and entertainment
        </p>
        <p className="text-lg text-slate-400 mb-12">
          Listen live 24/7 to the best shows and discover new music.
        </p>
        
        <img
          src="/sfm-logo.jpg"
          alt="SFM Radio Logo"
          className="h-48 w-auto mb-8 drop-shadow-lg"
        />
        <p className="text-slate-400 text-sm mb-8">
          Use the player bar at the bottom to listen live
        </p>
      </div>
    </div>
  );
}
