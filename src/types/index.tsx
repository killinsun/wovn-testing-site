export type FileNameId = {
  params: {
    id: string;
  };
};
export type StaticPaths = {
  paths: FileNameId[];
  fallback: boolean;
};

export type StaticProps = {
  props: {
    postData: PostData;
  };
};

export type PostData = {
  id: string;
  contentHtml: string;
  date: string;
  title: string;
};
