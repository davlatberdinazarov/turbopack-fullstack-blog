import { Post } from "@/lib/types/modelTypes";
import Image from "next/image";
import Link from "next/link";

type Props = Partial<Post>;
const PostCard = ({
  id,
  title,
  slug,
  thumbnail,
  content,
  createdAt,
}: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative h-60 w-full">
        <Image
        //   src={thumbnail ?? "/no-image.png"}
          src={"https://plus.unsplash.com/premium_photo-1756224672428-905c9d7c10e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MXx8fGVufDB8fHx8fA%3D%3D"}
          alt={title ?? "Post thumbnail"}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex-grow  flex flex-col">
        <h3 className="text-lg font-bold mt-4 break-words text-center text-gray-600">
          {title}
        </h3>
        <p className="mt-2 text-gray-500 text-sm ">
          {new Date(createdAt ?? "").toLocaleDateString()}
        </p>
        <p className="mt-4 text-gray-700 break-words">
          {content?.slice(0, 100)}...
        </p>
        <Link
          className="text-indigo-600 hover:underline mt-auto text-right block"
          href={`/blog/${slug}/${id}`}
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
