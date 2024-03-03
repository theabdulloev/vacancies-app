export default function Home() {
  const title = "Vacancies App"

  return (
    <div className="z-30 text-white w-full h-screen"> 
    <div className="flex flex-col h-32 w-full p-5 justify-center space-y-4 font-light" >
      <p className="text-5xl">
        <span className="text-blue-500">Имрӯз </span> кори нави худро пайдо кунед
      </p>
      <span className="text-xl">
      Ҳазорҳо ҷойҳои корӣ дар бахшҳои компютерӣ, муҳандисӣ ва технология шуморо интизоранд.
      </span>
    </div>

    <div className="w-full h-full grid grid-cols-[1fr_3fr_1fr] gap-3 justify-between p-2">
    <div className="h-full bg-white bg-opacity-10 shadow-5xl relative z-20 backdrop-filter backdrop-blur-sm flex justify-between px-2 text-white">
      <p>Фильтр</p>
    </div>
    <div className="h-full bg-white bg-opacity-10 shadow-5xl relative z-20 backdrop-filter backdrop-blur-sm flex justify-between px-2 text-white">
      <p>Корхо</p>
    </div>
    <div className="h-full bg-white bg-opacity-10 shadow-5xl relative z-20 backdrop-filter backdrop-blur-sm flex justify-between px-2 text-white">
      <p>Notification</p>
    </div>
    </div>
    </div>
  );
}
