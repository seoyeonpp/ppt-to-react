import { SsgoiTransition } from "@ssgoi/react";
import { SlideContainer } from "~/components/SlideContainer";

export function meta() {
  return [{ title: "Cover Slide - AI 이미지 처리 시스템" }];
}

export default function CoverSlide() {
  return (
    <SsgoiTransition id="/">
    <SlideContainer nextSlide="/slide-2">
      {/* Background Decorations */}
      <div className="deco-grid"></div>
      <div className="deco-circle-1"></div>
      <div className="deco-circle-2"></div>

      <div className="z-10 flex-1 flex flex-col justify-center px-[100px]">
        {/* Header / Meta Info */}
        <div className="mb-6 flex items-center">
          <div className="h-1 w-16 bg-blue-400 mr-4"></div>
          <p className="text-blue-400 font-bold tracking-widest uppercase text-sm">
            Tech Process Overview
          </p>
        </div>

        {/* Main Title */}
        <h1 className="text-7xl font-black mb-4 leading-tight">
          이미지 처리 <br />
          <span className="text-blue-400">AI 시스템</span> 플로우
        </h1>

        {/* Subtitle */}
        <p className="text-2xl text-gray-300 font-light mb-12 max-w-3xl">
          비개발자를 위한 이미지 자동화 프로세스 완전 정복:
          <br />
          요청부터 결과 전달까지의 여정
        </p>

        {/* Target Audience & Key Concepts Box */}
        <div className="grid grid-cols-2 gap-12 mt-8 border-t border-gray-700 pt-10">
          {/* Target Audience */}
          <div>
            <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-3">
              <i className="fas fa-users mr-2"></i>발표 대상
            </h3>
            <p className="text-xl font-medium">
              기획자, 디자이너, 운영팀 등
              <br />
              <span className="text-gray-400 text-base font-normal">
                비개발 직군 관계자
              </span>
            </p>
          </div>

          {/* Key Concepts */}
          <div>
            <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-4">
              <i className="fas fa-key mr-2"></i>핵심 키워드
            </h3>
            <div className="flex flex-wrap">
              <div className="tag-pill">
                <i className="fas fa-list-ol mr-2"></i>RabbitMQ (대기열)
              </div>
              <div className="tag-pill">
                <i className="fas fa-bolt mr-2"></i>병렬 처리
              </div>
              <div className="tag-pill">
                <i className="fas fa-cloud mr-2"></i>S3 클라우드
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="bottom-bar"></div>
    </SlideContainer>
    </SsgoiTransition>
  );
}
