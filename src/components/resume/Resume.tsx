import { Career, Expierence, Introduce } from '@/components/resume';
import { CAREERS, EXTRA, EDUCATION } from '@/constants';

export default function Resume() {
  return (
    <div className="flex flex-col gap-20">
      <Introduce />

      <div className="flex flex-col gap-8">
        <span className="text-3xl font-bold dark:text-white">경력 사항</span>

        {CAREERS.map(career => (
          <Career
            key={career.title}
            logo={career.logo}
            title={career.title}
            description={career.description}
            period={career.period}
            job={career.job}
            content={career.content}
          />
        ))}
      </div>

      <div className="flex flex-col gap-8">
        <span className="text-3xl font-bold dark:text-white">기타 사항</span>

        {EXTRA.map(extra => (
          <Expierence
            key={extra.title}
            logo={extra.logo}
            title={extra.title}
            description={extra.description}
          />
        ))}
      </div>

      <div className="flex flex-col gap-8">
        <span className="text-3xl font-bold dark:text-white">학력 사항</span>

        {EDUCATION.map(education => (
          <Expierence
            key={education.title}
            logo={education.logo}
            title={education.title}
            description={education.description}
          />
        ))}
      </div>
    </div>
  );
}
