import Image from "next/image";
import Link from "next/link";

const ActorDetail = async ({ params }) => {
  const { id } = params;

  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.API_KEY}&language=en-US`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    return <div>Error fetching actor data</div>;
  }

  const actor = await res.json();

  return (
    <div className="relative bg-white overflow-hidden mt-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100"></polygon>
          </svg>

          <div className="pt-1"></div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                {actor.name}
              </h2>

              <p className="text-gray-700">
                {actor.biography || "No biography available."}
              </p>

              <p className="mt-4 text-gray-900">
                <strong>Birthday:</strong> {actor.birthday || "N/A"}
              </p>
              <p className="mt-2 text-gray-900">
                <strong>Place of Birth:</strong> {actor.place_of_birth || "N/A"}
              </p>
              <p className="mt-2 text-gray-900">
                <strong>Known For:</strong>{" "}
                {actor.known_for_department || "N/A"}
              </p>

              <Link href="/">
                <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
                  Back to Movies
                </button>
              </Link>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        {actor.profile_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
            width={600}
            height={800}
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            alt={actor.name}
          />
        ) : (
          <div className="h-56 w-full bg-red-400 flex items-center justify-center text-white sm:h-72 md:h-96 lg:w-full lg:h-full">
            No Image Available
          </div>
        )}
      </div>
    </div>
  );
};

export default ActorDetail;
