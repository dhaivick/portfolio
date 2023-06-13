import fs from "fs";
import path from "path";
import { marked } from "marked";
import { mangle } from "marked-mangle";
import matter from "gray-matter";
import Head from "next/head";
import Navbar from "../../components/Navbar/Navbar";
import { Grid } from "semantic-ui-react";

marked.use(mangle());

export default function BlogPage({
  frontMatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <Navbar />

      <Grid container verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={14} style={{ margin: "10px" }}>
            <div
              dangerouslySetInnerHTML={{
                __html: marked.parse(content, { headerIds: false }),
              }}
            ></div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

// Get all paths at build time.
export async function getStaticPaths() {
  // Read all the file names from posts directory.
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts.
  const paths = files.map((filename) => {
    return {
      // Nextjs acceptable format.
      params: {
        slug: filename.replace(".md", ""),
      },
    };
  });

  return {
    paths,
    fallback: false, // return 404 if slug doesnt exist
  };
}

// Param passed from getStaticPaths
export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", `${slug}.md`),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontMatter,
      slug,
      content,
    },
  };
}
