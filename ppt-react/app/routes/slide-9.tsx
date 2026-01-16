import { SlideContainer } from "~/components/SlideContainer";
import { BackgroundGrid } from "~/components/BackgroundGrid";

export function meta() {
  return [{ title: "Wrap Up - AI 이미지 처리 시스템" }];
}

export default function WrapUpSlide() {
  return (
    <SlideContainer nextSlide="/">
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.08) 0%, transparent 50%)",
        }}
      ></div>
      <BackgroundGrid />

      {/* Header */}
      <div className="py-8 px-[60px] z-10">
        <div className="flex items-center mb-2">
          <div className="h-1 w-10 bg-blue-400 mr-3"></div>
          <p className="text-blue-400 font-bold uppercase tracking-widest text-sm">Wrap Up</p>
        </div>
        <h1 className="text-4xl font-black text-white">
          정리하면 <span className="text-blue-400">이것만 기억하세요</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col px-[60px] pb-10 z-10 gap-6">
        {/* 한 줄 요약 */}
        <div
          className="rounded-2xl py-8 px-10 text-center relative border border-sky-400/30"
          style={{
            background: "linear-gradient(135deg, rgba(56, 189, 248, 0.1) 0%, rgba(168, 85, 247, 0.1) 100%)",
          }}
        >
          <span
            className="absolute top-2.5 left-8 text-6xl text-sky-400/30 leading-none"
            style={{ fontFamily: "Georgia, serif" }}
          >
            "
          </span>
          <p className="text-2xl font-bold text-white leading-relaxed">
            버튼 클릭 한 번이면, 뒤에서 <span className="text-sky-400">AI가 알아서</span> 이미지를 만들고
            <br />
            <span className="text-sky-400">클라우드에 저장</span>한 뒤, 완료되면{" "}
            <span className="text-sky-400">결과를 알려줍니다</span>
          </p>
        </div>

        {/* 기억할 3가지 */}
        <div className="flex gap-6">
          {/* Card 1 */}
          <div className="flex-1 bg-slate-800 rounded-2xl border border-slate-700 border-t-4 border-t-sky-400 p-6 text-center relative overflow-hidden">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-extrabold mx-auto mb-4 bg-sky-400/20 text-sky-400">
              1
            </div>
            <div className="text-4xl mb-4 text-sky-400">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="text-lg font-bold text-white mb-2.5">기다릴 필요 없어요</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              요청하면 바로 "접수 완료"
              <br />
              처리는 백그라운드에서 진행되고
              <br />
              완료되면 이미지가 변경됩니다.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-slate-800 rounded-2xl border border-slate-700 border-t-4 border-t-emerald-500 p-6 text-center relative overflow-hidden">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-extrabold mx-auto mb-4 bg-emerald-500/20 text-emerald-500">
              2
            </div>
            <div className="text-4xl mb-4 text-emerald-500">
              <i className="fas fa-list-ol"></i>
            </div>
            <h3 className="text-lg font-bold text-white mb-2.5">순서대로 처리돼요</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              은행 번호표처럼
              <br />
              먼저 요청한 작업이
              <br />
              먼저 처리됩니다
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex-1 bg-slate-800 rounded-2xl border border-slate-700 border-t-4 border-t-amber-500 p-6 text-center relative overflow-hidden">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-extrabold mx-auto mb-4 bg-amber-500/20 text-amber-500">
              3
            </div>
            <div className="text-4xl mb-4 text-amber-500">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="text-lg font-bold text-white mb-2.5">실패해도 안전해요</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              중간에 문제가 생겨도
              <br />
              작업이 사라지지 않고
              <br />
              자동으로 다시 시도합니다
            </p>
          </div>
        </div>
      </div>
    </SlideContainer>
  );
}
