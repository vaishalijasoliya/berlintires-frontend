import Image from "next/image";
import Link from "next/link";
import { fetchData } from "@/app/libs/fetchData";
import { getStrapiMedia } from "@/app/helpers/api-helpers";
import Breadcrumb from "@/app/components/Blog/Breadcrumb";

const BlogPage = async () => {
    const blogPosts = await fetchData("/api/blogs?nested&populate=*");

    return (

        <div className="text-center">
            <Breadcrumb pageTitle="Blog" pageDescription="Blog Description" />

            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight my-10">Blog</h1>
            <section className="container p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.data.map(blogPost => {
                        const imageUrl = getStrapiMedia(
                            blogPost.attributes.featuredImage.data.attributes.formats.large.url
                        );

                        return (
                            <>
                            <Link
                                href={`/blog/${blogPost.attributes.slug}`}
                                key={blogPost.id}
                                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 lg:w-[300px] xl:min-w-[375px] rounded-2xl overflow-hidden shadow-lg"
                            >
                                <div>
                                    {imageUrl && (
                                        <Image
                                            alt="presentation"
                                            width="400"
                                            height="400"
                                            className="md:w-[60vw] max-h-[250px] md:h-[25vw] w-[45vw] h-[60vw] sm:w-[70vw] sm:h-[40vw] object-cover relative  shadow-small hover:shadow-medium transition-shadow duration-200 pb-4"
                                            src={imageUrl}
                                        />
                                    )}

                                    <div className="p-6">
                                        <h3 key={blogPost.attributes.slug} className="text-2xl font-semibold group-hover:underline group-focus:underline pb-4">
                                            {blogPost.attributes.title}
                                        </h3>
                                        <p className="pb-4">
                                            {blogPost.attributes.excerpt}
                                        </p>
                                        <div className="my-6">
                                            <button className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors lg:mb-0" href={`/blog/${blogPost.attributes.slug}`}>Read more</button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            </>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default BlogPage;