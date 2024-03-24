import Image from 'next/image';
import Link from 'next/link';

type PostPreviewProps = {
  url: string;
  title: string;
  abstract: string;
  createdAt: Date;
  thumbnail: string;
};

export default function Article({
  url,
  title,
  abstract,
  createdAt,
  thumbnail,
}: PostPreviewProps) {
  return (
    <Link href={{ pathname: `/post/${url}` }}>
      <div className="flex flex-col-reverse sm:flex-row border rounded-lg w-full p-5 gap-4 hover:shadow-md dark:bg-gray-700 dark:border-transparent">
        <div className="flex flex-col flex-1 justify-between">
          <span className="text-xl font-bold dark:text-white">{title}</span>
          <p className="flex-1 my-2 text-gray-600 dark:text-gray-300">
            {abstract}
          </p>

          <span className="text-sm text-gray-400">
            {createdAt.toString().split('T')[0]}
          </span>
        </div>

        <div className="relative w-full sm:w-32 max-h-[200px] h-32 rounded-lg mx-auto">
          {thumbnail ? (
            <Image
              fill
              sizes="520px"
              src={thumbnail}
              alt="thumbnail"
              className="rounded-lg"
            />
          ) : (
            <Image
              fill
              sizes="520px"
              priority
              src="/one-chance.svg"
              alt="thumbnail"
              className="rounded-lg"
            />
          )}
        </div>
      </div>
    </Link>
  );
}
