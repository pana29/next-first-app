import Link from 'next/link';
import Heading from '@/components/Heading';
import { getFeaturedReview } from '@/lib/reviews';


export default async function HomePage() {
  const review = await getFeaturedReview();
  return (
    <>
      <Heading>Indie Game</Heading>
      <p className="pb-3">Only the best indie games</p>
      <div className="border w-80 sm:w-full bg-white rounded shadow hover:shadow-xl">
        <Link
          href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <img
            src={review.image}
            alt=""
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="font-semibold font-orbitron text-center py-1 sm:px-2">
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
}
