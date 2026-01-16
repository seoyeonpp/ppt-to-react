import { SlideContainer } from "~/components/SlideContainer";
import { SlideHeader } from "~/components/SlideHeader";
import { BackgroundGrid } from "~/components/BackgroundGrid";

export function meta() {
  return [{ title: "Flow Overview - AI 이미지 처리 시스템" }];
}

const flowSteps = [
  { num: 1, icon: "fa-laptop-code", label: "매니저앱", desc: "작업 요청\n(버튼/엑셀)" },
  { num: 2, icon: "fa-list-ol", label: "대기열 (Queue)", desc: "순서대로\n작업 적재" },
  { num: 3, icon: "fa-robot", label: "AI Consumer", desc: "작업 확인 및\n가져오기", highlight: true },
  { num: 4, icon: "fa-layer-group", label: "병렬 처리", desc: "이미지 생성\n및 리사이징" },
  { num: 5, icon: "fa-cloud-upload-alt", label: "S3 저장", desc: "결과물\n클라우드 업로드" },
  { num: 6, icon: "fa-reply", label: "완료 응답", desc: "성공/실패\n결과 통보" },
];

const metrics = [
  { icon: "fa-hand-holding", title: "처리 원칙", value: "1개씩 순차 처리" },
  { icon: "fa-bolt", title: "Resize 속도", value: "최대 10개 동시 처리" },
  { icon: "fa-server", title: "클라우드 업로드", value: "최대 10개 병렬 저장" },
];

export default function FlowOverviewSlide() {
  return (
    <SlideContainer nextSlide="/slide-3">
      <BackgroundGrid />

      <SlideHeader
        tag="System Workflow"
        title={<>한눈에 보는 <span className="text-blue-400">전체 흐름</span></>}
      />

      <div className="main-content justify-center">
        {/* Process Flow */}
        <div className="flex items-center justify-between mb-12 relative">
          {flowSteps.map((step, index) => (
            <div key={step.num} className="flex items-center">
              {/* Step */}
              <div className="flex flex-col items-center w-[140px] relative z-[2]">
                <div className="absolute -top-1 -left-1 w-6 h-6 bg-sky-400 text-slate-900 rounded-full flex items-center justify-center font-bold text-xs border-2 border-slate-900">
                  {step.num}
                </div>
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-4 shadow-md transition-transform duration-300 ${
                    step.highlight
                      ? "bg-sky-400 text-slate-900 border-sky-200"
                      : "bg-slate-800 border-sky-400 text-sky-400"
                  } border-2`}
                >
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <p className="text-base font-bold text-center text-white mb-1">{step.label}</p>
                <p className="text-xs text-center text-slate-400 leading-snug whitespace-pre-line">
                  {step.desc}
                </p>
              </div>

              {/* Arrow Connector */}
              {index < flowSteps.length - 1 && (
                <div className="flex-1 h-0.5 bg-slate-700 mx-2.5 relative" style={{ marginTop: "-35px" }}>
                  <div className="absolute right-0 -top-[5px] w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[8px] border-l-slate-700"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Metrics / Key Stats */}
        <div className="flex gap-5 justify-center mt-5 bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex items-center bg-slate-800 py-4 px-6 rounded-xl border-l-4 border-l-sky-400 min-w-[250px]"
            >
              <div className="text-2xl text-slate-500 mr-4">
                <i className={`fas ${metric.icon}`}></i>
              </div>
              <div>
                <h4 className="text-slate-400 text-xs uppercase tracking-wider mb-1">
                  {metric.title}
                </h4>
                <p className="text-white text-lg font-bold">{metric.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
  );
}
