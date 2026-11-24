import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ================= MAIN APP COMPONENT =================
export default function App() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [showMain, setShowMain] = useState(false);

  const handleRestart = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`w-full bg-[#3B0811] text-white ${showMain ? 'overflow-y-auto' : 'h-screen overflow-hidden'}`}>
      
      {/* ================= SECTION 1: THE ENVELOPE ================= */}
      <AnimatePresence>
        {!showMain && (
          <motion.section
            key="envelope-screen"
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex h-screen w-full flex-col items-center justify-center bg-[#3B0811]"
          >
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative z-30 mb-1 font-hand text-3xl text-[#f3e3ce] drop-shadow-md sm:text-4xl"
            >
              open me!
            </motion.p>

            <div 
              className="relative flex h-52 w-72 items-center justify-center cursor-pointer overflow-hidden sm:h-56 sm:w-80"
              onClick={() => setIsEnvelopeOpened(true)}
            >
              <motion.img 
                src="/images/envelope-closed.png"
                alt="Closed Envelope"
                className="relative z-20 h-full w-full object-cover drop-shadow-2xl"
                animate={isEnvelopeOpened ? { scale: 1.5, opacity: 0 } : { scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.8 }}
                onAnimationComplete={() => {
                  if (isEnvelopeOpened) {
                    setShowMain(true);
                  }
                }}
                whileHover={!isEnvelopeOpened ? { scale: 1.05 } : {}}
                whileTap={!isEnvelopeOpened ? { scale: 0.95 } : {}}
              />
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* ================= SECTION 2: GREETING HERO ================= */}
      <section id="hero-section" className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center overflow-hidden py-10">
        <div 
          className="absolute -left-2 top-0 h-full w-20 pointer-events-none z-30 opacity-95 sm:-left-4 sm:w-36"
          style={{ backgroundImage: "url('/images/flowers-left.png')", backgroundRepeat: 'repeat-y', backgroundSize: '100% auto', backgroundPosition: 'left top' }}
        ></div>
        <div 
          className="absolute -right-2 top-0 h-full w-20 pointer-events-none z-30 opacity-95 sm:-right-4 sm:w-36"
          style={{ backgroundImage: "url('/images/flowers-right.png')", backgroundRepeat: 'repeat-y', backgroundSize: '100% auto', backgroundPosition: 'right top' }}
        ></div>

        <p className="z-10 mt-8 font-serif text-sm uppercase tracking-[0.15em] text-[#f3e3ce] drop-shadow-sm max-w-xs sm:max-w-md">
          To the most beautiful girl!
        </p>
        
        <h1 className="z-10 my-2 font-script text-[6.5rem] leading-none text-[#f3e3ce] drop-shadow-md sm:text-[9rem]">
          Toto
        </h1>
        
        <p className="z-10 font-serif text-sm uppercase tracking-[0.2em] text-[#f3e3ce] drop-shadow-sm">
          Happy birthday, love
        </p>

        <p className="z-10 mt-5 mb-2 font-sans text-[13px] text-white/90 tracking-wide sm:text-sm"></p>

        <div className="relative z-10 mt-10 h-64 w-[310px] sm:h-80 sm:w-[420px] flex items-end justify-center">
          <div className="absolute bottom-0 h-44 w-full bg-[#dcc6ad] rounded-md shadow-inner sm:h-56"></div>
          
          <div className="absolute bottom-28 left-4 z-10 h-44 w-32 -rotate-12 bg-white p-2 shadow-polaroid sm:bottom-36 sm:left-6 sm:h-56 sm:w-40">
            <img src="/images/photo2.jpg" className="h-full w-full object-cover" alt="Pic 1" />
          </div>
          <div className="absolute bottom-24 right-4 z-10 h-44 w-32 rotate-12 bg-white p-2 shadow-polaroid sm:bottom-32 sm:right-6 sm:h-56 sm:w-40">
            <img src="/images/photo1.jpg" className="h-full w-full object-cover" alt="Pic 2" />
          </div>

          <div 
            className="relative z-20 h-32 w-full bg-[#f3e3ce] shadow-[-2px_-4px_12px_rgba(0,0,0,0.08)] rounded-b-md sm:h-40"
            style={{ clipPath: 'polygon(0 0, 50% 15%, 100% 0, 100% 100%, 0 100%)' }}
          ></div>
        </div>

        <div className="z-10 mt-16 mb-8 rounded-full bg-[#58323E] px-14 py-3.5 font-serif text-sm uppercase tracking-[0.3em] text-[#f3e3ce] shadow-xl hover:scale-105 transition-transform cursor-pointer border border-[#f3e3ce]/20">
          I love u 🤍
        </div>
      </section>

      {/* ================= SECTION 3: LETTER ================= */}
      <section className="relative flex min-h-screen flex-col items-center justify-start sm:justify-center py-20 px-4 overflow-hidden">
        <div 
          className="absolute -left-2 top-0 h-full w-20 pointer-events-none z-30 opacity-95 sm:-left-4 sm:w-36"
          style={{ backgroundImage: "url('/images/flowers-left.png')", backgroundRepeat: 'repeat-y', backgroundSize: '100% auto', backgroundPosition: 'left top' }}
        ></div>
        <div 
          className="absolute -right-2 top-0 h-full w-20 pointer-events-none z-30 opacity-95 sm:-right-4 sm:w-36"
          style={{ backgroundImage: "url('/images/flowers-right.png')", backgroundRepeat: 'repeat-y', backgroundSize: '100% auto', backgroundPosition: 'right top' }}
        ></div>

        <div 
          className="z-10 relative mx-auto aspect-[11/20] w-full max-w-[550px] drop-shadow-2xl flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage: "url('/images/lace paper.png')",
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="w-full pt-[28%] pb-[24%] px-[18%] sm:pt-[26%] sm:pb-[22%] sm:px-[22%]">
            <p className="font-letter text-[16px] sm:text-2xl lg:text-3xl font-bold text-[#4a362f] mb-3 sm:mb-5">
              To my favorite person,
            </p>
            <p className="font-letter text-[11.5px] sm:text-[15px] lg:text-[17px] leading-[1.9] sm:leading-[2.2] font-bold text-[#4a362f]">
             كل عام وأنتي بألف خير يا اغلى شي ف حياتي، وعسى عامج اليديد يكون حلو وجميل مثل عيونج الحلوه وطيبة قلبج اللي ما في مثلها، ف يوم ميلادج حبيت أقولج اني ممتن من كل قلبي لكل لحظة عشناها مع بعض لين اليوم واحمد الله على الصدفه الي جمعتنا مع بعض، الحمدلله على نعمة وجودج في حياتي، لانج تعطين حياتي حياة ومحلتنها بشكل ما اوصف لج اياه، اتمنى لج من كل قلبي سعادة ما تفارقج وراحة بال وانج تتوفقين دايما وابدا وين ما كنتي يارب. مكانتج ف حياتي غير عن كل البشر اميزج عنهم كلهم ولج مكانه خاصه فقلبي محد يقدر يوصل لها. احبج وايد، وفخور وايد انج حبيبتي وشريكة حياتي وملجأي الوحيد في هالدنيا اللي أرتاح له وأفضفض له بكل شي بدون تردد. الله يخليج لي طول العمر ولا يحرمني منج، كل عام وانتي حبيبتي، وكل عام و انا أحبج اكثر عن اللي قبله يا حبيبة قلبي 🤍
            </p>
          </div>
        </div>

        <div className="relative z-20 mt-8 mb-8 flex justify-center">
          <motion.button
            type="button"
            onClick={handleRestart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-[#58323e] px-10 py-4 font-serif text-sm uppercase tracking-widest text-[#f3e3ce] shadow-xl border border-[#f3e3ce]/20"
          >
            Read it again
          </motion.button>
        </div>
      </section>

    </div>
  );
}