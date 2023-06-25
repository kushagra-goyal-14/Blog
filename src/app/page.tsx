import BlogCard from "@/components/blog/BlogCard";
import Featured from "@/components/blog/Featured";
import ContainerMain from "@/components/Container-main";
import ContainerStart from "@/components/Container-start";
import Emailsubscribe from "@/components/subscribe/Emailsubscribe";
import matter from "gray-matter";
import fs from "fs";

const getPostMetadata = () => {
  const folder = `${process.cwd()}/src/posts`;
  const files = fs.readdirSync(folder);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));
  const posts = markdownFiles.map((file) => {
    const fileContents = fs.readFileSync(`${folder}/${file}`).toString();
    const { data } = matter(fileContents);

    return {
      slug: file.replace(".md", ""),
      title: data.title,
      description: data.description,
      date: data.date,
      readTime: data.readTime,
      featured1: data.featured1,
      featured2: data.featured2,
    };
  });
  return posts;
};

export default function Home() {
  const posts = getPostMetadata() || [];

  const featured1 = posts.filter((post) => post.featured1 === true);
  const featured2 = posts.filter((post) => post.featured2 === true);

  const post1 = featured1[0];
  const post2 = featured2[0];

  return (
    <div>
      <h1
        className="h-fit w-fit max-w-full fixed m-auto top-0 left-0 right-0 bottom-0 text-center text-border-thick text-[24vw] md:text-[11vw] opacity-10 text-white
          "
        style={{
          fontFamily: "Sulphur Point",
          fontWeight: "600",
        }}
      >
        Kushagra Goyal
      </h1>
      <ContainerStart>
        <Featured
          heading1={post1?.title}
          heading2={post2?.title}
          description1={post1?.description}
          description2={post2?.description}
          image1={post1?.slug}
          btn1Link={post1?.slug ? `/blog/${post1?.slug}` : "/"}
          image2={post2?.slug}
          readTime1={post1?.readTime}
          readTime2={post2?.readTime}
          btn2Link={post2?.slug ? `/blog/${post2?.slug}` : "/"}
          date1={post1?.date}
          date2={post2?.date}
        />
      </ContainerStart>
      <ContainerMain>
        <div
          className="flex flex-row items-center gap-5 px-44 py-2 
          justify-center
        flex-wrap
        "
        >
          {
            // Blog Cards
            posts.map(
              (post: {
                title: string;
                description: string;
                readTime: string;
                date: string;
                slug: string;
                featured1: boolean;
                featured2: boolean;
              }) =>
                post.featured1 !== true && post.featured2 !== true ? (
                  <BlogCard
                    heading={post.title}
                    description={post.description}
                    key={post.slug}
                    readTime={post.readTime}
                    date={post.date}
                    image={post.slug}
                    btnLink={`/blog/${post.slug}`}
                  />
                ) : null
            )
          }
        </div>
      </ContainerMain>
      {/* <ContainerMain>
        <Emailsubscribe />
      </ContainerMain> */}
    </div>
  );
}
