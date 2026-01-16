import { SlideContainer } from "~/components/SlideContainer";
import { SlideHeader } from "~/components/SlideHeader";
import { BackgroundGrid } from "~/components/BackgroundGrid";

export function meta() {
  return [{ title: "Processing Timeline - AI 이미지 처리 시스템" }];
}

export default function ProcessingTimelineSlide() {
  return (
    <SlideContainer nextSlide="/slide-7">
      <BackgroundGrid />

      <SlideHeader
        tag="Processing Timeline"
        title={<>AI 시스템 <span className="text-blue-400">작업 처리 흐름</span></>}
        subtitle="Consumer가 작업을 가져와 결과를 반환하는 전체 과정"
      />

      <div className="flex-1 flex flex-col justify-center px-[60px] pb-[60px] z-10">
        <div className="flex items-center justify-center relative py-10">
          {/* Line Background */}
          <div className="absolute top-1/2 left-[100px] right-[250px] h-1 bg-slate-700 -translate-y-1/2 z-[1]"></div>
          <div
            className="absolute top-1/2 left-[100px] h-1 bg-sky-400 -translate-y-1/2 z-[1] shadow-lg shadow-sky-400/50"
            style={{ width: "60%", animation: "progress-fill 10s ease-out forwards" }}
          ></div>

          {/* Step 1: Fetch */}
          <div className="relative z-[5] flex flex-col items-center w-[200px] mx-5">
            <div className="w-20 h-20 bg-slate-900 border-[3px] border-sky-400 text-sky-400 rounded-full flex items-center justify-center text-3xl mb-5 shadow-lg shadow-sky-400/30 transform scale-110">
              <i className="fas fa-envelope-open-text"></i>
            </div>
            <div className="text-lg font-bold text-slate-200 mb-1">1. 작업 수신</div>
            <div className="text-sm text-slate-400 text-center leading-snug">
              <p>대기열에서 1개 가져오기</p>
              <p className="text-xs mt-1 text-slate-500">Prefetch Count: 1</p>
            </div>
            <div className="mt-2.5 py-1 px-3 rounded-full text-xs font-bold bg-sky-400/20 text-sky-400 border border-sky-400">
              Received
            </div>
          </div>

          {/* Step 2: Process */}
          <div className="relative z-[5] flex flex-col items-center w-[200px] mx-5">
            <div className="w-20 h-20 bg-slate-900 border-[3px] border-sky-400 text-sky-400 rounded-full flex items-center justify-center text-3xl mb-5 shadow-lg shadow-sky-400/30 transform scale-110 relative">
              <div className="pulse-ring"></div>
              <i className="fas fa-cogs"></i>
            </div>
            <div className="text-lg font-bold text-slate-200 mb-1">2. 작업 처리</div>
            <div className="text-sm text-slate-400 text-center leading-snug">
              <p>AI 모델 실행 및 리사이징</p>
              <p className="text-xs mt-1 text-slate-500">병렬 처리 수행</p>
            </div>
            <div className="mt-2.5 py-1 px-3 rounded-full text-xs font-bold bg-sky-400/20 text-sky-400 border border-sky-400">
              Processing
            </div>
          </div>

          {/* Step 3: Branching */}
          <div className="ml-10 flex flex-col justify-center gap-10 relative z-[5]">
            <div className="absolute -left-[60px] top-1/2 w-[60px] h-[140px] -translate-y-1/2 z-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-1/2 border-l-4 border-t-4 border-slate-700 rounded-tl-2xl"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 border-l-4 border-b-4 border-slate-700 rounded-bl-2xl"></div>
            </div>

            {/* Success Path */}
            <div className="w-[280px] p-5 rounded-xl flex items-start gap-4 relative bg-slate-800 border border-slate-700 border-l-[5px] border-l-emerald-500 shadow-md shadow-emerald-500/10">
              <div className="text-2xl text-emerald-500 shrink-0">
                <i className="fas fa-check-circle"></i>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1 text-white">성공 (Success)</h4>
                <p className="text-slate-300 text-sm mb-2">결과 URL 목록 반환</p>
                <div className="font-mono text-xs text-slate-300 bg-slate-900 p-2.5 rounded break-all">
                  ["https://s3.../img1.jpg",<br />
                  "https://s3.../img2.jpg"]
                </div>
              </div>
            </div>

            {/* Error Path */}
            <div className="w-[280px] p-5 rounded-xl flex items-start gap-4 relative bg-slate-800 border border-slate-700 border-l-[5px] border-l-red-500 shadow-md shadow-red-500/10 opacity-80">
              <div className="text-2xl text-red-500 shrink-0">
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <div>
                <h4 className="font-bold text-base mb-1 text-white">실패 (Failure)</h4>
                <p className="text-slate-300 text-sm mb-2">에러 메시지 반환</p>
                <div className="font-mono text-xs text-slate-300 bg-slate-900 p-2.5 rounded">
                  Error: Invalid image format<br />Code: 400
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legend / Summary at Bottom */}
        <div className="mt-8 flex justify-center gap-8 border-t border-slate-800 pt-6 mx-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center text-sky-400 border border-blue-700">
              <i className="fas fa-eye"></i>
            </div>
            <div>
              <p className="text-sm text-slate-400 font-bold uppercase">상시 대기</p>
              <p className="text-white text-sm">새 작업을 실시간 모니터링</p>
            </div>
          </div>
          <div className="w-px h-10 bg-slate-700"></div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-emerald-400 border border-emerald-700">
              <i className="fas fa-paper-plane"></i>
            </div>
            <div>
              <p className="text-sm text-slate-400 font-bold uppercase">결과 통보</p>
              <p className="text-white text-sm">매니저앱으로 즉시 응답 전송</p>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
