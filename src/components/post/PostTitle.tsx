type PostTitleProps = {
  title?: string;
  abstract?: string;
  createdAt?: Date;
};

export default function PostTitle({
  title,
  abstract,
  createdAt,
}: PostTitleProps) {
  return (
    <div className="flex flex-col my-10 gap-10">
      <div className="flex flex-col gap-1">
        <span className="text-xl text-gray-400 font-medium">
          {createdAt?.toString().split('T')[0] || '2024.02.02'}
        </span>
        <h1 className="text-4xl font-bold dark:text-white">
          {title || '포스팅 제목입니다. 포스팅 제목입니다.'}
        </h1>
      </div>

      <p className="font-medium text-gray-600 dark:text-gray-300">
        {abstract || '요약입니다.'}
      </p>
    </div>
  );
}
