import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'posts');

export const getAllPostSlugs = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.html$/, ''),
    },
  }));
};

export const getPostData = (slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}.html`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return {
    id: slug,
    fileContents,
  };
};

export default getAllPostSlugs;
