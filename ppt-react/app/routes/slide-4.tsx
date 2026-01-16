import { useState, useCallback } from "react";
import { useNavigate } from "react-router";
import { SsgoiTransition } from "@ssgoi/react";
import { BackgroundGrid } from "~/components/BackgroundGrid";

export function meta() {
  return [{ title: "Queue vs Stack - AI 이미지 처리 시스템" }];
}

export default function QueueVsStackSlide() {
  const navigate = useNavigate();
  const [showConclusion, setShowConclusion] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = useCallback(() => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (!showConclusion) {
      setShowConclusion(true);
    } else if (newCount >= 2) {
      navigate("/slide-5-1");
    }
  }, [clickCount, showConclusion, navigate]);

  return (
    <SsgoiTransition id="/slide-4">
    <div className="slide-container cursor-pointer" onClick={handleClick}>
      <BackgroundGrid />

      {/* Header */}
      <div className="py-8 px-[60px] z-10">
        <div className="flex items-center mb-2">
          <div className="h-1 w-10 bg-blue-400 mr-3"></div>
          <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">Data Structures 101</p>
        </div>
        <h1 className="text-4xl font-black text-white">
          큐(Queue) <span className="text-slate-500 text-3xl font-light mx-2">vs</span> 스택(Stack)
        </h1>
        <p className="text-gray-400 mt-2 text-lg">왜 우리 시스템은 '큐' 방식을 사용할까요?</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex gap-10 px-[60px] pb-10 z-10">
        {/* Queue Panel */}
        <div className="flex-1 bg-slate-800 rounded-2xl border border-slate-700 border-t-[6px] border-t-sky-400 p-8 flex flex-col relative overflow-hidden shadow-lg shadow-sky-400/10 transition-transform duration-300">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
            <div className="text-3xl font-black flex items-center gap-3 text-sky-400">
              <i className="fas fa-list-ol"></i> Queue
            </div>
            <span className="text-xs font-bold py-1 px-2.5 rounded-full uppercase bg-sky-900 text-sky-400 border border-sky-700">
              <i className="fas fa-check mr-1"></i>System Choice
            </span>
          </div>

          {/* Analogy */}
          <div className="bg-white/5 rounded-xl p-4 mb-6 flex items-center gap-4 border-l-4 border-l-slate-600">
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-3xl bg-sky-400/20 text-sky-400">
              <i className="fas fa-people-line"></i>
            </div>
            <div>
              <p className="text-sm text-slate-400 font-bold uppercase">일상 속 비유</p>
              <p className="text-lg font-bold text-white">은행 번호표 / 줄서기</p>
            </div>
          </div>

          {/* Diagram */}
          <div className="bg-slate-900 rounded-xl p-5 mb-6 h-[180px] flex flex-col justify-center items-center relative">
            <p className="absolute top-2 left-4 text-xs text-slate-500 font-mono">FIFO (First-In First-Out)</p>
            <div className="w-full h-0.5 bg-slate-700 absolute top-1/2"></div>
            <div className="flex gap-2.5 items-center relative">
              <span className="absolute -left-10 text-xs text-slate-500 font-bold">IN</span>
              <div className="w-[45px] h-[45px] bg-sky-400 rounded-lg flex items-center justify-center text-slate-900 font-bold text-lg shadow-md">1</div>
              <div className="w-[45px] h-[45px] bg-sky-400/70 rounded-lg flex items-center justify-center text-slate-900 font-bold text-lg shadow-md">2</div>
              <div className="w-[45px] h-[45px] bg-sky-400/40 rounded-lg flex items-center justify-center text-slate-900 font-bold text-lg shadow-md">3</div>
              <div className="w-[45px] h-[45px] rounded-lg flex items-center justify-center text-slate-500 font-bold text-lg border-2 border-dashed border-slate-700">4</div>
              <span className="absolute -right-12 text-xs text-slate-500 font-bold">OUT</span>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-blue-300">먼저 온 작업이 먼저 처리됨</p>
            </div>
          </div>

          {/* Points */}
          <ul className="space-y-3 p-0 m-0 list-none">
            <li className="flex items-start text-slate-300">
              <i className="fas fa-check-circle text-sky-400 mt-1 mr-2.5 text-sm"></i>
              <p><strong>선입선출 (FIFO):</strong><br />순서가 보장되어 예측 가능합니다.</p>
            </li>
            <li className="flex items-start text-slate-300">
              <i className="fas fa-check-circle text-sky-400 mt-1 mr-2.5 text-sm"></i>
              <p><strong>공정성:</strong><br />먼저 요청한 사용자가 먼저 결과를 받습니다.</p>
            </li>
          </ul>
        </div>

        {/* Stack Panel */}
        <div className="flex-1 bg-slate-800 rounded-2xl border border-slate-700 border-t-[6px] border-t-purple-500 p-8 flex flex-col relative overflow-hidden opacity-80">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
            <div className="text-3xl font-black flex items-center gap-3 text-purple-400">
              <i className="fas fa-layer-group"></i> Stack
            </div>
            <span className="text-xs font-bold py-1 px-2.5 rounded-full uppercase bg-purple-900/50 text-purple-300 border border-purple-700">
              참고용 (Reference)
            </span>
          </div>

          {/* Analogy */}
          <div className="bg-white/5 rounded-xl p-4 mb-6 flex items-center gap-4 border-l-4 border-l-slate-600">
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center text-3xl bg-purple-500/20 text-purple-400">
              <i className="fas fa-layer-group"></i>
            </div>
            <div>
              <p className="text-sm text-slate-400 font-bold uppercase">일상 속 비유</p>
              <p className="text-lg font-bold text-white">접시 쌓기 / 옷입고 벗기</p>
            </div>
          </div>

          {/* Diagram */}
          <div className="bg-slate-900 rounded-xl p-5 mb-6 h-[180px] flex flex-col justify-center items-center relative">
            <p className="absolute top-2 left-4 text-xs text-slate-500 font-mono">LIFO (Last-In First-Out)</p>
            <div className="w-20 h-[120px] border-l-4 border-r-4 border-b-4 border-slate-600 rounded-b-lg flex flex-col-reverse items-center pb-1 gap-1 relative">
              <div className="w-[60px] h-[25px] bg-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">Data 1</div>
              <div className="w-[60px] h-[25px] bg-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">Data 2</div>
              <div className="w-[60px] h-[25px] bg-purple-300 text-purple-900 rounded flex items-center justify-center text-xs font-bold absolute -top-[30px]">Data 3</div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-purple-300">마지막에 넣은 것이 먼저 나옴</p>
            </div>
          </div>

          {/* Points */}
          <ul className="space-y-3 p-0 m-0 list-none">
            <li className="flex items-start text-slate-300">
              <i className="fas fa-arrow-circle-left text-purple-400 mt-1 mr-2.5 text-sm"></i>
              <p><strong>후입선출 (LIFO):</strong><br />나중에 들어온 요청이 새치기하는 셈입니다.</p>
            </li>
            <li className="flex items-start text-slate-300">
              <i className="fas fa-exclamation-triangle text-purple-400 mt-1 mr-2.5 text-sm"></i>
              <p><strong>부적합:</strong><br />먼저 요청한 작업이 무기한 대기할 수 있습니다.</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Conclusion Bubble */}
      <div
        className={`absolute bottom-8 left-1/2 bg-slate-900 border border-sky-400 py-2.5 px-8 rounded-full text-sky-400 font-bold z-20 shadow-lg whitespace-nowrap transition-all duration-500 ${
          showConclusion ? "bottom-conclusion show" : "bottom-conclusion"
        }`}
        style={{ transform: showConclusion ? "translateX(-50%) translateY(0)" : "translateX(-50%) translateY(100%)" }}
      >
        <i className="fas fa-lightbulb mr-2"></i> 결론: 이미지 처리 순서를 보장하기 위해 '큐(Queue)'를 사용합니다.
      </div>
    </div>
    </SsgoiTransition>
  );
}
