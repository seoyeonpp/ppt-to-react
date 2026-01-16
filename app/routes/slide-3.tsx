import { SsgoiTransition } from "@ssgoi/react";
import { SlideContainer } from "~/components/SlideContainer";
import { SlideHeader } from "~/components/SlideHeader";
import { BackgroundGrid } from "~/components/BackgroundGrid";

export function meta() {
  return [{ title: "Task Request - AI 이미지 처리 시스템" }];
}

export default function TaskRequestSlide() {
  return (
    <SsgoiTransition id="/slide-3">
    <SlideContainer nextSlide="/slide-4">
      <BackgroundGrid />

      <SlideHeader
        tag="Task Initiation"
        title={<>작업 요청 <span className="text-blue-400">발생</span></>}
        subtitle="사용자의 액션이 시스템의 작업(Job)으로 변환되는 과정"
      />

      <div className="flex-1 flex items-center justify-between px-[60px] pb-10 z-10">
        {/* Source Panel */}
        <div className="w-[45%] flex flex-col gap-8">
          <div className="text-slate-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <i className="fas fa-mouse-pointer"></i> 요청 경로 (Trigger)
          </div>

          {/* App Mockup */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-xl relative">
            <div className="bg-slate-700 py-2.5 px-4 flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <span className="text-xs text-slate-500 ml-2">Manager App</span>
            </div>
            <div className="p-5 flex flex-col gap-4">
              <div className="flex justify-between items-center mb-2">
                <div className="text-sm font-bold text-gray-300">집중이미지 목록</div>
              </div>
              <div className="flex gap-4 h-[140px]">
                <div className="w-10 bg-slate-900 rounded-md"></div>
                <div className="flex-1 bg-slate-900 rounded-md p-4 flex flex-col justify-center items-center border border-dashed border-slate-600">
                  <p className="text-slate-500 text-sm mb-4">Product #1234 Image</p>
                  <div className="bg-sky-400 text-slate-900 py-2.5 px-5 rounded-md font-bold flex items-center gap-2 cursor-pointer shadow-md shadow-sky-400/30 relative">
                    <i className="fas fa-magic"></i>
                    <span>이미지 재생성</span>
                    <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-sky-400 opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 right-4 text-xs text-blue-300 font-mono">
              Event: button_click
            </div>
          </div>

          {/* Excel Upload */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-5 flex items-center gap-5 relative">
            <div className="w-[50px] h-[50px] bg-emerald-500 rounded-lg flex items-center justify-center text-white text-2xl">
              <i className="fas fa-file-excel"></i>
            </div>
            <div>
              <h4 className="font-bold text-lg text-white">코너로지스 대량 엑셀 업로드</h4>
              <p className="text-sm text-slate-400">여러 상품 일괄 처리 요청</p>
            </div>
            <div className="absolute top-3 right-4 text-xs text-green-400 font-mono">
              Event: file_upload
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="w-[10%] flex justify-center items-center text-slate-500 text-4xl">
          <i className="fas fa-chevron-right text-blue-500 opacity-50"></i>
        </div>

        {/* Job Panel */}
        <div className="w-[45%] flex flex-col gap-8">
          <div className="text-slate-400 text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            <i className="fas fa-code"></i> 생성되는 작업 (Job Types)
          </div>

          {/* Job Card 1: Resize */}
          <div className="bg-slate-800 rounded-xl border-l-[6px] border-l-amber-500 p-6 relative overflow-hidden">
            <div className="absolute -right-5 -bottom-5 text-[100px] opacity-5 transform -rotate-[15deg]">
              <i className="fas fa-compress-arrows-alt"></i>
            </div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">
                <i className="fas fa-compress-arrows-alt text-yellow-500 mr-2"></i>Resize
              </h3>
              <span className="font-mono bg-black/30 py-1 px-2 rounded text-sm text-slate-300">
                job_type: resize
              </span>
            </div>
            <p className="text-slate-300 mb-2">이미지 크기 조절 작업</p>
            <ul className="text-sm text-slate-400 space-y-1">
              <li><i className="fas fa-check mr-2 text-yellow-500"></i>최적화된 해상도로 변환</li>
              <li><i className="fas fa-check mr-2 text-yellow-500"></i>1:1 비율의 원본 코너로지스 상품을 3:4 비율로 수정</li>
            </ul>
          </div>

          {/* Job Card 2: Create AI */}
          <div className="bg-slate-800 rounded-xl border-l-[6px] border-l-violet-500 p-6 relative overflow-hidden">
            <div className="absolute -right-5 -bottom-5 text-[100px] opacity-5 transform -rotate-[15deg]">
              <i className="fas fa-robot"></i>
            </div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">
                <i className="fas fa-wand-magic-sparkles text-purple-500 mr-2"></i>Create AI
              </h3>
              <span className="font-mono bg-black/30 py-1 px-2 rounded text-sm text-slate-300">
                job_type: create_ai
              </span>
            </div>
            <p className="text-slate-300 mb-2">AI 이미지 생성 작업</p>
            <ul className="text-sm text-slate-400 space-y-1">
              <li><i className="fas fa-check mr-2 text-purple-500"></i>코너로지스 원본 앞면 이미지를 기준으로 이미지 생성</li>
              <li><i className="fas fa-check mr-2 text-purple-500"></i>Flux (앞면 다림질) / Gemini (모델, 모델크롭샷) 모델 사용</li>
            </ul>
          </div>
        </div>
      </div>
    </SlideContainer>
    </SsgoiTransition>
  );
}
