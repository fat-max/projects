import type { ContentData } from "vitepress";
import { createContentLoader } from "vitepress";

declare const data: ContentData[];
export { data };

export default createContentLoader("entries/*.md", {
  transform: (data: ContentData[]) => {
    const tags = {};

    const entries = data.sort((a, b) => {
      return (
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      );
    });

    const setTag = (tag: string, entry: ContentData) => {
      if (tags[tag])
        tags[tag].push(entry)
      else
        tags[tag] = [entry]
    }

    entries.forEach(entry => {
      const entryTags = entry.frontmatter?.tags;
      if (!entryTags) return
      
      if (Array.isArray(entryTags)) {
        entryTags.forEach(tag => setTag(tag, entry))

        return
      }

      setTag(entryTags, entry)
    });

    return {entries, tags};
  },
});
