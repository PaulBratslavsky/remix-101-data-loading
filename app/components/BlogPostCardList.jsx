import { Link } from "@remix-run/react"

function BlogPostCard({ data }) {
  const { title, date, image, content, slug } = data;
  return (
    <div className="w-full md:w-1/2 px-4 mb-16">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
          <div className="h-80 lg:h-40">
            <img
              className="w-full h-full object-cover rounded-xl"
              src={image}
              alt=""
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3 px-4">
          <span className="inline-block mb-4 text-xs text-gray-500">
            {date}
          </span>
          <h2 className="mb-4 text-3xl font-semibold font-heading">
            {title}
          </h2>
          <p className="mb-4 text-gray-500 leading-relaxed">
            {content}
          </p>
          <Link
            className="text-lg font-medium text-red-500 underline hover:no-underline"
            to={`/blog/${slug}`}
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function BlogPostCardList({ data }) {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-16">
          {data.map((item, index) => {
            return <BlogPostCard key={index} data={item} />;
          })}
        </div>
      </div>
    </section>
  )
}
