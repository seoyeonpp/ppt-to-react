import { SlideContainer } from "~/components/SlideContainer";
import { SlideHeader } from "~/components/SlideHeader";
import { BackgroundPattern } from "~/components/BackgroundGrid";

export function meta() {
  return [{ title: "Parallel Processing - AI 이미지 처리 시스템" }];
}

export default function ParallelProcessingSlide() {
  return (
    <SlideContainer nextSlide="/slide-8">
      <BackgroundPattern />

      <SlideHeader
        tag="Parallel Processing Strategy"
        title={<>왜 빠를까? <span className="text-blue-400">병렬 처리 전략</span></>}
        subtitle="작업 유형(Job Type)에 따른 최적화된 처리 방식"
      />

      <div className="flex-1 flex gap-10 px-[60px] pb-12 z-10">
        {/* Left Panel: Resize */}
        <div className="flex-1 bg-slate-800 rounded-2xl border border-slate-700 border-t-[6px] border-t-amber-500 p-6 flex flex-col relative overflow-hidden shadow-lg">
          <div className="absolute top-5 right-5 py-1.5 px-3 rounded-full text-xs font-bold uppercase bg-amber-500/15 text-amber-500 border border-amber-500">
            <i className="fas fa-bolt mr-1"></i> Speed Focused
          </div>

          <div className="flex justify-between items-center mb-5 pb-4 border-b border-white/10">
            <div className="text-2xl font-extrabold flex items-center gap-3 text-amber-500">
              <i className="fas fa-compress-arrows-alt"></i> Resize 작업
            </div>
          </div>

          {/* Metaphor */}
          <div className="bg-slate-900/60 rounded-xl p-4 mb-6 flex items-center gap-4 border-l-4 border-l-slate-600">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-slate-700 text-amber-500">
              <i className="fas fa-utensils"></i>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase">요리사 비유</p>
              <p className="text-white text-sm">
                <span className="text-amber-400 font-bold">10명의 보조 요리사</span>가
                <br />재료를 동시에 다듬는 것과 같음
              </p>
            </div>
          </div>

          {/* Visualization */}
          <div className="flex-1 flex flex-col justify-center bg-slate-900 rounded-xl p-5 relative">
            <div className="absolute top-2 left-4 text-xs text-slate-500 font-mono">
              Multi-Threading Execution
            </div>
            <div className="grid grid-cols-5 grid-rows-2 gap-2.5 w-full h-[160px]">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-amber-500/20 border border-amber-500 rounded-md flex items-center justify-center text-amber-500 text-sm shadow-md shadow-amber-500/20"
                >
                  <i className="fas fa-image"></i>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Stats */}
          <div className="mt-auto pt-4 flex items-center justify-between text-slate-400 text-sm">
            <span>동시 처리 용량</span>
            <span className="text-xl font-extrabold text-amber-500">Max 10 images</span>
          </div>
        </div>

        {/* Right Panel: Create AI */}
        <div className="flex-1 bg-slate-800 rounded-2xl border border-slate-700 border-t-[6px] border-t-violet-500 p-6 flex flex-col relative overflow-hidden shadow-lg">
          <div className="absolute top-5 right-5 py-1.5 px-3 rounded-full text-xs font-bold uppercase bg-violet-500/15 text-violet-500 border border-violet-500">
            <i className="fas fa-star mr-1"></i> Quality Focused
          </div>

          <div className="flex justify-between items-center mb-5 pb-4 border-b border-white/10">
            <div className="text-2xl font-extrabold flex items-center gap-3 text-violet-500">
              <i className="fas fa-wand-magic-sparkles"></i> Create AI 작업
            </div>
          </div>

          {/* Metaphor */}
          <div className="bg-slate-900/60 rounded-xl p-4 mb-6 flex items-center gap-4 border-l-4 border-l-slate-600">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg bg-slate-700 text-violet-500">
              <i className="fas fa-user-tie"></i>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase">요리사 비유</p>
              <p className="text-white text-sm">
                <span className="text-violet-400 font-bold">전채 → 메인 → 디저트</span> 순서로
                <br />전문 셰프가 차례대로 요리
              </p>
            </div>
          </div>

          {/* Visualization */}
          <div className="flex-1 flex flex-col justify-center bg-slate-900 rounded-xl p-5 gap-4 relative">
            <div className="absolute top-4 left-4 text-xs text-slate-500 font-mono">
              Sequential Processing Pipeline
            </div>

            {/* Step 1 */}
            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-lg py-2.5 px-4 gap-4 relative">
              <div className="w-6 h-6 rounded-full bg-pink-600 text-white text-xs font-bold flex items-center justify-center z-[1]">
                1
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="text-white font-bold text-sm">Front (다림질)</span>
                  <span className="text-[10px] py-0.5 px-1.5 rounded bg-pink-600 text-white ml-2 font-bold uppercase">
                    Flux AI
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">기본 형태 잡기</p>
              </div>
              <i className="fas fa-check-circle text-slate-600"></i>
            </div>

            {/* Step 2 */}
            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-lg py-2.5 px-4 gap-4 relative before:content-[''] before:absolute before:-top-4 before:left-5 before:w-0.5 before:h-4 before:bg-slate-600">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center z-[1]">
                2
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="text-white font-bold text-sm">Model 1 (착용)</span>
                  <span className="text-[10px] py-0.5 px-1.5 rounded bg-blue-600 text-white ml-2 font-bold uppercase">
                    Gemini
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">모델 A 스타일 적용</p>
              </div>
              <i className="fas fa-spinner text-violet-500 fa-spin"></i>
            </div>

            {/* Step 3 */}
            <div className="flex items-center bg-slate-800 border border-slate-700 rounded-lg py-2.5 px-4 gap-4 relative opacity-50 before:content-[''] before:absolute before:-top-4 before:left-5 before:w-0.5 before:h-4 before:bg-slate-600">
              <div className="w-6 h-6 rounded-full bg-slate-600 text-white text-xs font-bold flex items-center justify-center z-[1]">
                3
              </div>
              <div className="flex-1">
                <div className="flex items-center">
                  <span className="text-white font-bold text-sm">Model 2 (착용)</span>
                  <span className="text-[10px] py-0.5 px-1.5 rounded bg-blue-600 text-white ml-2 font-bold uppercase">
                    Gemini
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1">모델 B 스타일 적용</p>
              </div>
              <i className="fas fa-clock text-slate-600"></i>
            </div>
          </div>

          {/* Footer Stats */}
          <div className="mt-auto pt-4 flex items-center justify-between text-slate-400 text-sm">
            <span>처리 방식</span>
            <span className="text-xl font-extrabold text-violet-400">Sequential Flow</span>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
