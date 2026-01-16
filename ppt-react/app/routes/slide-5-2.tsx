import { SsgoiTransition } from "@ssgoi/react";
import { SlideContainer } from "~/components/SlideContainer";
import { SlideHeader } from "~/components/SlideHeader";
import { BackgroundGrid } from "~/components/BackgroundGrid";

export function meta() {
  return [{ title: "Queue Mechanics - AI 이미지 처리 시스템" }];
}

export default function QueueMechanicsSlide() {
  return (
    <SsgoiTransition id="/slide-5-2">
    <SlideContainer nextSlide="/slide-6">
      <BackgroundGrid />

      <SlideHeader
        tag="RabbitMQ Mechanism"
        title={<>대기열(Queue) <span className="text-blue-400">동작 방식</span></>}
        subtitle="안정적인 처리를 위한 '1개씩 가져오기' 규칙"
      />

      <div className="main-content">
        {/* Visual Diagram */}
        <div className="flex-1 bg-slate-800 rounded-2xl border border-slate-700 relative mb-5 flex items-center justify-center p-10 shadow-inner">
          <div className="absolute top-5 left-5 bg-orange-500 text-white py-1.5 px-4 rounded-md font-bold text-sm flex items-center gap-2">
            <i className="fas fa-layer-group"></i> RabbitMQ
          </div>

          <div className="flex items-center w-full justify-between relative">
            {/* Producer */}
            <div className="w-[140px] h-[140px] bg-slate-700 border-2 border-slate-600 rounded-xl flex flex-col items-center justify-center z-[2]">
              <i className="fas fa-mobile-screen-button text-4xl text-slate-400 mb-2"></i>
              <p className="font-bold text-slate-300">매니저앱</p>
              <p className="text-xs text-slate-500">요청 발생</p>
            </div>

            {/* Flow Arrow */}
            <div className="w-8 h-0.5 bg-slate-500 relative">
              <div className="absolute right-0 -top-1 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-slate-500"></div>
            </div>

            {/* Queue */}
            <div className="flex-1 mx-8 h-[100px] relative flex items-center">
              <p className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-500 font-bold tracking-wider">
                Waiting Tasks
              </p>
              <div className="w-full h-20 bg-slate-900/60 border-t-2 border-b-2 border-dashed border-slate-600 flex items-center px-5 gap-4 overflow-hidden">
                {[5, 4, 3, 2].map((num) => (
                  <div
                    key={num}
                    className="w-[60px] h-[60px] bg-sky-400 rounded-lg flex items-center justify-center text-slate-900 font-black text-xl shadow-md shrink-0"
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>

            {/* Flow Arrow */}
            <div className="w-8 h-0.5 bg-slate-500 relative">
              <div className="absolute right-0 -top-1 w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[6px] border-l-slate-500"></div>
            </div>

            {/* Consumer */}
            <div className="w-[180px] h-[180px] bg-slate-800 border-2 border-sky-400 rounded-xl flex flex-col items-center justify-center relative z-[2] shadow-lg shadow-sky-400/10">
              <div className="absolute -top-4 -right-4 bg-red-500 text-white text-xs py-1 px-2 rounded font-bold shadow-md transform rotate-[5deg]">
                1개씩만!
              </div>
              <i className="fas fa-robot text-5xl text-sky-400 mb-3"></i>
              <p className="font-bold text-white text-lg">AI 시스템</p>
              <p className="text-xs text-blue-300">Consumer</p>
              {/* Currently Processing Item */}
              <div className="absolute -left-[45px] top-1/2 -translate-y-1/2">
                <div className="w-[60px] h-[60px] bg-yellow-400 rounded-lg flex items-center justify-center text-slate-900 font-black text-xl shadow-lg shadow-yellow-400/50 transform scale-110 z-[5]">
                  1
                </div>
              </div>
              <div className="absolute -bottom-10 bg-yellow-400 text-slate-900 py-1 px-3 rounded-full font-bold text-xs">
                처리 중 (Processing)
              </div>
            </div>

            {/* Ack Feedback */}
            <div className="absolute bottom-[-30px] right-[90px] w-[50%] h-[30px] border-b-2 border-l-2 border-dashed border-emerald-500 rounded-bl-xl opacity-60"></div>
            <div className="absolute bottom-[-45px] right-[150px] text-emerald-500 text-xs font-bold">
              <i className="fas fa-check-circle mr-1"></i>처리 완료 알림 (Ack)
            </div>
          </div>
        </div>

        {/* Explanation Cards */}
        <div className="grid grid-cols-3 gap-5">
          {[
            { num: 1, title: "순차적 적재 (Enqueue)", desc: <>매니저앱에서 요청된 작업들이 <span className="text-sky-400 font-bold">대기열에 순서대로</span> 쌓입니다. 번호표를 뽑고 기다리는 것과 같습니다.</> },
            { num: 2, title: "안정적 처리 (Prefetch=1)", desc: <>AI 시스템은 한 번에 <span className="text-sky-400 font-bold">딱 1개의 작업만</span> 가져옵니다. 과부하를 방지하고 안정성을 높입니다.</> },
            { num: 3, title: "수신 확인 (Ack)", desc: <>작업을 무사히 받으면 <span className="text-green-400 font-bold">"접수됨"</span> 신호를 보냅니다. 처리가 끝나면 다음 작업을 가져옵니다.</> },
          ].map((card) => (
            <div key={card.num} className="bg-slate-800/50 border border-slate-700 p-5 rounded-xl flex items-start gap-4">
              <div className="bg-slate-900 text-slate-400 w-8 h-8 rounded-full flex items-center justify-center font-bold border border-slate-700 shrink-0">
                {card.num}
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-1">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
    </SsgoiTransition>
  );
}
