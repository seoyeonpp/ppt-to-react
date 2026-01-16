import { SsgoiTransition } from "@ssgoi/react";
import { SlideContainer } from "~/components/SlideContainer";
import { SlideHeader } from "~/components/SlideHeader";
import { BackgroundDots } from "~/components/BackgroundGrid";

export function meta() {
  return [{ title: "Cloud Storage - AI 이미지 처리 시스템" }];
}

export default function CloudStorageSlide() {
  return (
    <SsgoiTransition id="/slide-8">
    <SlideContainer nextSlide="/slide-9">
      <BackgroundDots />

      <SlideHeader
        tag="Cloud Storage & Response"
        title={<>클라우드 저장 <span className="text-slate-500 text-3xl font-light mx-2">&</span> 응답 처리</>}
        subtitle="처리된 결과물의 안전한 저장과 신속한 피드백"
      />

      <div className="flex-1 flex flex-col justify-center px-[60px] pb-12 z-10">
        {/* Visual Process Flow */}
        <div className="flex items-center justify-between bg-slate-800/50 border border-slate-700 rounded-2xl p-10 relative">
          {/* 1. Source Images */}
          <div className="w-[200px] flex flex-col items-center relative">
            <div className="relative w-[120px] h-[140px]">
              <div className="w-[100px] h-[120px] bg-slate-600 border-2 border-slate-500 rounded-lg absolute top-0 left-0 z-[3] flex items-center justify-center shadow-md">
                <i className="fas fa-image text-3xl text-slate-400"></i>
              </div>
              <div className="w-[100px] h-[120px] bg-slate-700 border-2 border-slate-500 rounded-lg absolute top-2.5 left-2.5 z-[2] opacity-80 flex items-center justify-center shadow-md">
                <i className="fas fa-image text-3xl text-slate-400"></i>
              </div>
              <div className="w-[100px] h-[120px] bg-slate-700 border-2 border-slate-500 rounded-lg absolute top-5 left-5 z-[1] opacity-60 flex items-center justify-center shadow-md">
                <i className="fas fa-image text-3xl text-slate-400"></i>
              </div>
            </div>
            <p className="mt-5 font-bold text-slate-400 text-sm text-center">처리 완료 이미지들</p>
          </div>

          {/* 2. Parallel Upload Pipeline */}
          <div className="flex-1 flex flex-col items-center justify-center px-10 relative">
            <div className="mb-4 bg-slate-900 text-sky-400 border border-sky-400 py-1.5 px-4 rounded-full text-xs font-bold z-[5] shadow-lg shadow-sky-400/20">
              <i className="fas fa-bolt mr-2"></i>최대 10개 동시 업로드
            </div>
            <div className="flex flex-col gap-2 w-full mb-2.5">
              {[0, 0.2, 0.4, 0.1, 0.5].map((delay, i) => (
                <div key={i} className="h-0.5 bg-slate-700 w-full relative overflow-hidden">
                  <div
                    className="absolute w-10 h-1 rounded-sm -top-[1px] shadow-lg"
                    style={{
                      backgroundColor: i % 2 === 1 ? "#f59e0b" : "#38bdf8",
                      boxShadow: i % 2 === 1 ? "0 0 8px rgba(245, 158, 11, 0.8)" : "0 0 8px rgba(56, 189, 248, 0.8)",
                      animation: `packet-move 1.5s infinite linear`,
                      animationDelay: `${delay}s`,
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <p className="text-xs text-blue-300 mt-2 font-mono">Parallel S3 Upload</p>
          </div>

          {/* 3. S3 Bucket */}
          <div className="w-[180px] flex flex-col items-center">
            <div className="w-[100px] h-[120px] relative flex items-center justify-center text-6xl text-orange-500 drop-shadow-lg">
              <i className="fas fa-bucket"></i>
              <i className="fas fa-cloud absolute text-2xl text-white opacity-80" style={{ top: "35px" }}></i>
            </div>
            <div className="font-mono text-orange-400 bg-orange-500/10 py-1 px-2 rounded text-xs mt-2.5 border border-dashed border-orange-500">
              AWS S3 Bucket
            </div>
            <p className="mt-2.5 font-bold text-slate-400 text-sm text-center">클라우드 저장소</p>
          </div>

          {/* Connector */}
          <div className="text-2xl text-slate-500 mx-5">
            <i className="fas fa-chevron-right"></i>
          </div>

          {/* 4. Response */}
          <div className="w-[320px] flex flex-col gap-5">
            {/* Success Case */}
            <div className="bg-slate-800 rounded-xl p-4 relative border border-slate-700 border-l-4 border-l-emerald-500 bg-emerald-500/5">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-sm flex items-center gap-2 text-emerald-400">
                  <i className="fas fa-check-circle"></i> 성공 (Success)
                </span>
                <span className="text-xs text-slate-500">HTTP 200</span>
              </div>
              <div className="font-mono text-xs text-slate-300 bg-slate-900 p-2.5 rounded leading-relaxed">
                <span className="text-slate-400">"status":</span> <span className="text-emerald-400">"completed"</span>,<br />
                <span className="text-slate-400">"urls":</span> [<br />
                <span className="text-indigo-300">"https://s3.../img1.jpg"</span>,<br />
                <span className="text-indigo-300">"https://s3.../img2.jpg"</span><br />
                ]
              </div>
            </div>

            {/* Failure Case */}
            <div className="bg-slate-800 rounded-xl p-4 relative border border-slate-700 border-l-4 border-l-red-500 bg-red-500/5">
              <div className="flex justify-between items-center mb-2">
                <span className="font-bold text-sm flex items-center gap-2 text-red-400">
                  <i className="fas fa-exclamation-circle"></i> 실패 (Failure)
                </span>
                <span className="text-xs text-slate-500">HTTP 500</span>
              </div>
              <div className="font-mono text-xs text-slate-300 bg-slate-900 p-2.5 rounded leading-relaxed">
                <span className="text-slate-400">"status":</span> <span className="text-red-400">"failed"</span>,<br />
                <span className="text-slate-400">"error":</span> <span className="text-indigo-300">"Upload timeout"</span>,<br />
                <span className="text-slate-400">"retry":</span> <span className="text-emerald-400">true</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="flex gap-10 mt-10 justify-center px-10">
          <div className="flex items-center gap-4 bg-slate-800 py-4 px-6 rounded-full border border-slate-700">
            <div className="w-9 h-9 bg-sky-400/10 rounded-full flex items-center justify-center text-sky-400">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase">Speed</p>
              <p className="text-white text-sm">병렬 업로드로 대기 시간 최소화</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-slate-800 py-4 px-6 rounded-full border border-slate-700">
            <div className="w-9 h-9 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500">
              <i className="fas fa-server"></i>
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase">Reliability</p>
              <p className="text-white text-sm">성공/실패 여부를 명확히 반환</p>
            </div>
          </div>
        </div>
      </div>
    </SlideContainer>
    </SsgoiTransition>
  );
}
