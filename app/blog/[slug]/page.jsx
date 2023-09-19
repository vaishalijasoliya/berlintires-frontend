import Image from "next/image";
import { fetchData } from "@/app/libs/fetchData";
import {getStrapiMedia} from "@/app/helpers/api-helpers";
import Breadcrumb from "@/app/components/Blog/Breadcrumb";

const BlogDetails = async (props) => {
    const blogPost = await fetchData(`/api/blogs/?populate=*&filters[slug][$eq]=${props.params.slug}`);

    const imageUrl = getStrapiMedia(
        blogPost.data[0].attributes.featuredImage.data.attributes.url
    );

    const content = blogPost.data[0].attributes.content;

    return (

        <>
            <Breadcrumb pageTitle={blogPost.data[0].attributes.title} pageDescription={blogPost.data[0].attributes.title} />

            <section className="container p-8 mx-auto space-y-6 sm:space-y-12">
                <div className="">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight my-10">Blog</h1>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight my-10 capitalize">{blogPost.data[0].attributes.title}</h2>
                    {imageUrl && (
                        <Image
                            alt={blogPost.data[0].attributes.title}
                            width="1920"
                            height="500"
                            className="md:w-[100%] max-h-[auto] md:h-[25vw] w-[45vw] h-[60vw] sm:w-[70vw] sm:h-[40vw] object-cover relative shadow-small hover:shadow-medium transition-shadow duration-200 pb-4"
                            src={imageUrl}
                        />
                    )}
                    <h3 key={blogPost.data[0].attributes.id} className="text-2xl font-semibold group-hover:underline group-focus:underline pb-4">
                        {blogPost.data[0].attributes.title}
                    </h3>

                    <div
                        dangerouslySetInnerHTML={{__html: content}}
                    />

                </div>
            </section>
        </>

    );
};

export default BlogDetails;