import Post from "@/components/Post/Post";
import { Layout } from "../layout/Layout";
import Head from "next/head";
import Aside from "@/components/Aside";
import PostList from "@/components/Post/PostList";

export default function Home({ data }: PostListProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <main id="page">
          <section className="page-wrapper">
            <PostList data={data} />

            <Aside data={data}/>
          </section>
        </main>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // Fetch data from an API or any other data source
  const res = await import("../utils/postList.json");
  const data = res.default;
  // console.log(data);
  return {
    props: {
      data,
    },
  };
}
