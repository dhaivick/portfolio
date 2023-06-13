import Link from "next/link";
import Navbar from "../components/Navbar/Navbar";
import { Grid, Feed, Label, Icon, Header } from "semantic-ui-react";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function Blog({ posts }) {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>

      <Navbar />
      <Grid container textAlign="center" verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={16} style={{ margin: "10px" }}>
            <Header as="h1" style={{ textDecoration: "underline" }}>
              Blog
            </Header>
          </Grid.Column>

          {posts.map((post, i) => (
            <Grid.Column key={i} width={16} style={{ marginTop: "30px" }}>
              <Feed>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Date
                      content={`Published on ${post.frontMatter.date}`}
                    />
                    <Link href={`/blog/${post.slug}`}>
                      <Feed.Summary
                        content={post.frontMatter.title}
                        style={{ color: "#0000EE" }}
                      />
                    </Link>
                    <Feed.Extra text content={post.frontMatter.excerpt} />
                  </Feed.Content>
                  <Feed.Meta>
                    <Label as="a" horizontal>
                      Technology
                      <Icon name="delete" />
                    </Label>
                    <Label as="a" horizontal>
                      MERN
                      <Icon name="delete" />
                    </Label>
                  </Feed.Meta>
                </Feed.Event>
              </Feed>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}

export async function getStaticProps() {
  // Read all the file names from posts directory.
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts.
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return { slug, frontMatter };
  });

  // Fetch data at build time.
  return {
    props: {
      posts: posts,
    },
  };
}
