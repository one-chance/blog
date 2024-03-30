import Image from 'next/image';
import { email, github, linkedin } from '@/components/common';

export default function Introduce() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row justify-between items-center gap-5 flex-wrap">
        <span className="text-[28px] sm:text-[48px] sm:leading-tight dark:text-white">
          프로덕트 엔지니어
          <br />
          <strong>이원찬</strong>입니다.
        </span>

        <div className="relative w-24 sm:w-28 h-24 sm:h-28 rounded-lg border dark:border-transparent">
          <Image
            className="rounded-lg"
            fill
            sizes="112px"
            src="/profile.png"
            alt="profile"
          />
        </div>
      </div>

      <div className="flex flex-row justify-center sm:justify-between items-start gap-5 flex-wrap">
        <div className="flex flex-col gap-2">
          <span className="text-lg text-gray-600 dark:text-gray-300">
            어떤 문제를 어떻게 해결하여 어떤 타겟에게 어떤 이득을 줄지 고민하는
            개발자입니다.
            <br />
            아이디어를 생각하고 연결하여 기능과 서비스로 구체화하는 것을
            좋아하고 잘합니다.
            <br />
            프로덕트에 대한 고민을 가까이서 경험하고자 프론트엔드 개발자로
            일하고 있지만,
            <br />
            원하는 서비스를 만들 수 있는 개발자가 되기 위해 다른 분야에도 관심이
            많습니다.
          </span>

          <div className="flex flex-row items-center gap-3">
            <span className="font-semibold whitespace-pre-wrap text-gray-400">
              #서비스
            </span>
            <span className="font-semibold whitespace-pre-wrap text-gray-400">
              #UX
            </span>
            <span className="font-semibold whitespace-pre-wrap text-gray-400">
              #서버
            </span>
            <span className="font-semibold whitespace-pre-wrap text-gray-400">
              #AI
            </span>
            <span className="font-semibold whitespace-pre-wrap text-gray-400">
              #데이터분석
            </span>
          </div>
        </div>

        <div className="flex flex-row justify-between flex-wrap w-28">
          <a
            href="https://linkedin.com/in/one-chance"
            className="text-black dark:text-white"
            aria-label="linked-in link"
            target="_blank"
            rel="noreferrer noopener"
          >
            {linkedin}
          </a>
          <a
            className="text-black dark:text-white"
            href="https://github.com/one-chance"
            aria-label="github link"
            target="_blank"
            rel="noreferrer noopener"
          >
            {github}
          </a>
          <a
            className="text-black dark:text-white"
            href="mailto:woody.front@gmail.com"
            aria-label="mail link"
          >
            {email}
          </a>
        </div>
      </div>
    </div>
  );
}
