import Link from 'next/link';
import Heading from '@/components/Heading';
import { getReviews, getSlugs } from '@/lib/reviews';

export const metadata = {
  title: 'Reviews',
};


export async function generateStaticParams(){
    const slugs = await getSlugs();
    return slugs.map((slug) => ({slug}))
}

export default async function ReviewsPage() {
  const reviews = await getReviews();

  return (
    <>
      <Heading>Reviews</Heading>
      <div className="flex justify-between pb-3"></div>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review) => (
          <li
            key={review.slug}
            className="border w-80 bg-white rounded shadow hover:shadow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t"
              />
              <h2 className="font-semibold font-orbitron text-center py-1">
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}


