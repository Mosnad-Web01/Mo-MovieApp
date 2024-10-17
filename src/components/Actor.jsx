import Image from 'next/image';
import Link from 'next/link';

const Actor = ({ actor }) => {
  const { id, name, profile_path } = actor;

  return (
    <div className="m-4 text-center">
      <Link href={`/actor/${id}`}>
        {profile_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt={name}
            width={150}
            height={225}
            className="rounded-lg transition-transform duration-200 transform hover:scale-105"
          />
        ) : (
          <div className="w-36 h-54 bg-gray-300 flex items-center justify-center rounded-lg">
            No Image
          </div>
        )}
        <p className="mt-2 text-lg font-bold">{name}</p>
      </Link>
    </div>
  );
};

export default Actor;