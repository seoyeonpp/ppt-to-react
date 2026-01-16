import { SsgoiTransition } from "@ssgoi/react";
import { SlideContainer } from "~/components/SlideContainer";
import { SlideHeader } from "~/components/SlideHeader";
import { BackgroundGrid } from "~/components/BackgroundGrid";

export function meta() {
  return [{ title: "Why RabbitMQ - AI 이미지 처리 시스템" }];
}

const reasons = [
  {
    num: "01",
    title: "비동기 처리",
    colorClass: "async",
    borderColor: "border-t-sky-400",
    iconBg: "bg-sky-400/15",
    iconColor: "text-sky-400",
    icon: "fa-clock",
    desc: <>AI 이미지 생성(Gemini, Flux)은 수 초~수십 초가 걸리는 작업입니다.<br />요청자가 완료를 기다리지 않고 <strong className="text-blue-300">바로 응답</strong>받을 수 있습니다.</>,
    details: ["요청 즉시 \"접수 완료\" 응답", "처리 완료 시 결과 URL 전달"],
  },
  {
    num: "02",
    title: "시스템 결합도 낮음",
    colorClass: "decouple",
    borderColor: "border-t-emerald-500",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-500",
    icon: "fa-puzzle-piece",
    desc: <>요청 서버(Producer)와 처리 서버(Consumer)가 <strong className="text-green-300">독립적으로 동작</strong>합니다.<br />각각 별도로 스케일링, 배포, 장애 대응이 가능합니다.</>,
    details: ["매니저앱 ↔ AI 시스템 분리", "독립적인 배포 및 업데이트"],
  },
  {
    num: "03",
    title: "내결함성 (Fault Tolerance)",
    colorClass: "fault",
    borderColor: "border-t-amber-500",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-500",
    icon: "fa-shield-alt",
    desc: <>워커가 죽어도 메시지가 큐에 남아있어 <strong className="text-yellow-300">재처리가 가능</strong>합니다.<br />ACK/NACK 메커니즘으로 메시지 손실을 방지합니다.</>,
    details: ["처리 실패 시 자동 재시도", "서버 재시작해도 작업 유지"],
  },
  {
    num: "04",
    title: "부하 분산",
    colorClass: "load",
    borderColor: "border-t-purple-500",
    iconBg: "bg-purple-500/15",
    iconColor: "text-purple-500",
    icon: "fa-balance-scale",
    desc: <>여러 워커가 동시에 작업을 <strong className="text-purple-300">분산 처리</strong>할 수 있습니다.<br />prefetch_count로 워커당 처리량을 조절합니다.</>,
    details: ["워커 수 증가로 처리량 향상", "트래픽 급증 시 탄력적 대응"],
  },
];

export default function WhyRabbitMQSlide() {
  return (
    <SsgoiTransition id="/slide-5-1">
    <SlideContainer nextSlide="/slide-5-2">
      <BackgroundGrid />

      <SlideHeader
        tag="Message Queue Benefits"
        title={<>왜 <span className="text-orange-400">RabbitMQ</span>를 사용할까?</>}
        subtitle="단순한 순서 보장을 넘어선 4가지 핵심 이유"
      />

      <div className="flex-1 flex flex-col px-[60px] pb-8 z-10 gap-5">
        {/* 4 Reason Cards */}
        <div className="grid grid-cols-2 gap-5 flex-1">
          {reasons.map((reason) => (
            <div
              key={reason.num}
              className={`bg-slate-800 rounded-2xl border border-slate-700 ${reason.borderColor} border-t-4 p-6 relative overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-[50px] h-[50px] rounded-xl flex items-center justify-center text-xl shrink-0 ${reason.iconBg} ${reason.iconColor}`}>
                  <i className={`fas ${reason.icon}`}></i>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-semibold mb-0.5">REASON {reason.num}</p>
                  <h3 className="text-xl font-extrabold text-white">{reason.title}</h3>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{reason.desc}</p>
              <div className="bg-slate-900 rounded-xl p-3 mt-auto">
                {reason.details.map((detail, idx) => (
                  <div key={idx} className={`flex items-center gap-2.5 text-sm text-slate-300 ${idx > 0 ? "mt-2" : ""}`}>
                    <i className={`fas fa-check text-xs w-4 text-center ${reason.iconColor}`}></i>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideContainer>
    </SsgoiTransition>
  );
}
