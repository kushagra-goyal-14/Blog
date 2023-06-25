import Container from "@/components/Container";
import matter from "gray-matter";
import Image from "next/image";
import fs from "fs";
import Markdown from "./Markdown";

const getPost = (slug: string) => {
  const file = fs
    .readFileSync(`${process.cwd()}/src/posts/${slug}.md`)
    .toString();
  const { data, content } = matter(file);
  return { frontmatter: data, markdownBody: content };
};

export default function BlogPost(props: any) {
  const { frontmatter, markdownBody } = getPost(props.params.slug);

  return (
    <div className="bg-black">
      <Container>
        <div className="flex px-8 flex-col justify-center items-start max-w-4xl mx-auto">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            {frontmatter.title}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {frontmatter.date} • {frontmatter.readTime}
          </p>
          <p className="text-gray-700 dark:text-gray-400 mb-4"></p>
          <div className="max-w-screen-xl mx-auto my-6 h-[60vh] w-full relative z-10 bg-center bg-no-repeat bg-cover md:rounded-[1.5rem]">
            <Image
              src={`/images/${props.params.slug}.jpg`}
              alt={frontmatter.image}
              width={1200}
              height={600}
              className="object-cover object-center rounded-[1.5rem] h-full w-full"
            />
          </div>
          <div
            className="prose dark:prose-dark max-w-none w-full
          text-white 
          markdown
          "
          >
            {/* <ReactMarkdown>{markdownBody}</ReactMarkdown> */}
            <Markdown>{markdownBody}</Markdown>
          </div>
        </div>
      </Container>
    </div>
  );
}
