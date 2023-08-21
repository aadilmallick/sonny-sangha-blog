import { Image, PortableTextBlock } from "sanity";

interface Base {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
}

interface Author extends Base {
  _type: "author";
  name: string;
  image: Image & { alt: string };
  bio: PortableTextBlock[];
  slug: {
    _type: "slug";
    current: string;
  };
}
