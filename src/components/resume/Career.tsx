import Image from 'next/image';
import { CareerContent, Career as CareerType } from '@/types';

type CareerProps = CareerType;

export default function Career({
  logo,
  title,
  description,
  period,
  job,
  content,
}: CareerProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <Image
            className="border rounded-lg"
            src={logo}
            width={80}
            height={80}
            alt={`${title} logo`}
          />
          <div className="flex flex-col gap-1">
            <span className="text-lg font-semibold dark:text-white">
              {title}
            </span>

            <span className="text-sm text-gray-600 dark:text-gray-300">
              {description}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {period} / {job}
            </span>
          </div>
        </div>
      </div>

      <hr />

      {content.map((career: CareerContent) => (
        <div key={career.title} className="flex flex-col gap-1 sm:ml-24">
          <div className="flex flex-row justify-between items-center gap-2 flex-wrap">
            {career.link ? (
              <a
                href={career.link}
                className="text-lg font-medium underline underline-offset-4 dark:text-white"
                target="_blank"
                rel="noreferrer"
              >
                {career.title}
              </a>
            ) : (
              <span className="text-lg font-medium dark:text-white">
                {career.title}
              </span>
            )}

            <span className="font-medium dark:text-white">{career.period}</span>
          </div>

          <span className="text-gray-600 dark:text-gray-300">
            {career.content}
          </span>

          <div className="flex flex-row gap-1 flex-wrap">
            {career.stack.map((stack: string) => (
              <span
                key={stack}
                className="text-sm rounded bg-gray-400 text-white px-2 select-none"
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
      ))}

      <hr />
    </div>
  );
}
