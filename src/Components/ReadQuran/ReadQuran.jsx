

const ReadQuran = () => {
     return (
          <div>
               <div className="w-[100%] md:flex">
                    <div className="md:w-3/4 mt-10 md:mt-0 md:flex items-center justify-around">
                         <div>
                              <img className="w-96 mx-auto h-80" src="https://i.ibb.co/7k55PGZ/quran.jpg" alt="" />
                         </div>
                         <div className="md:mt-0 mt-10 md:px-0 px-3">
                              <h1 className="text-5xl font-bold">Every Day try to <br /> <span className="text-purple-400">read quran</span></h1>
                              <button className="button mt-10">Read Now ➤</button>
                         </div>
                    </div>
                    <div className="md:w-1/4 md:mt-0 mt-10">
                    <h1 className="text-2xl font-bold text-center">Ramadan Calendar</h1>
                         <img className="mx-auto rounded-md" src="https://i.ibb.co/ThstCkm/calendar.jpg" alt="calendar" />
                    </div>
               </div>
          </div>
     );
};

export default ReadQuran;