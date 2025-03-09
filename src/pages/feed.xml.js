import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from "sanitize-html";

export async function GET(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Mark\'s Blog Feed',
    description: 'Some writings from me. May or may not get updated once in a blue moon',
    site: context.site,
    trailingSlash: false,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}`,
      content: sanitizeHtml(post.render(), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "pre", "code"])
      })
    })),
    customData: `<language>en-ca</language>`
  });
}