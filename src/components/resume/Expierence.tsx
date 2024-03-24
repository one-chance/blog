import Image from 'next/image';

type ExpierenceProps = {
  logo: string;
  title: string;
  description: string;
};

export default function Expierence({
  logo,
  title,
  description,
}: ExpierenceProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      <Image
        className="border rounded-lg dark:border-transparent"
        width={80}
        height={80}
        src={logo}
        alt={logo}
      />
      <div className="flex flex-col gap-1">
        <span className="text-lg font-semibold dark:text-white">{title}</span>
        <span className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap">
          {description}
        </span>
      </div>
    </div>
  );
}
