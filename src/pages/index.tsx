import { Dispatch, SetStateAction, useState } from "react";
import {
  getAllSelectItemsFromPosts,
  filterPosts,
} from "@/src/libs/utils/notion";
import Layout from "@components/Layout";
import FeedComponent from "@containers/Feed";
import { CONFIG } from "../../site.config";
import { NextPageWithLayout } from "./_app";
import { TCategories, TPosts, TTags } from "../types";
import { getPosts } from "../libs/apis";
import { DEFAULT_CATEGORY } from "../constants";

export async function getStaticProps() {
  try {
    const posts = await getPosts();
    const filteredPost = filterPosts(posts);
    const tags = getAllSelectItemsFromPosts("tags", filteredPost);
    const categories = getAllSelectItemsFromPosts("category", filteredPost);

    return {
      props: {
        tags: {
          ...tags,
        },
        categories: {
          [DEFAULT_CATEGORY]: filteredPost.length,
          ...categories,
        },
        posts: filteredPost,
      },
      revalidate: 1,
    };
  } catch (error) {
    throw error;
  }
}

type Props = {
  categories: TCategories;
  tags: TTags;
  posts: TPosts;
};

const FeedPage: NextPageWithLayout<Props> = ({
  categories,
  tags,
  posts,
}: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  return (
    <FeedComponent
      categories={categories}
      tags={tags}
      posts={posts}
      selectedCategory={selectedCategory}
      onCategorySelect={setSelectedCategory}
    />
  );
};
FeedPage.getLayout = function getLayout(page) {
  return (
    <Layout
      metaConfig={{
        title: CONFIG.blog.title,
        description: CONFIG.blog.description,
        type: "website",
        url: CONFIG.link,
      }}
    >
      {page}
    </Layout>
  );
};

export default FeedPage;
