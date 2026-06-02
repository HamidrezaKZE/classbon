import { Badge } from "@/app/_components/badge";
import {
  IconCalendar,
  IconClock,
  IconComment,
  IconEye,
  IconUserProfile,
} from "@/app/_components/icons";
import { BlogPostSummary } from "@/types/blog-post-summary.interface";
import Image from "next/image";
import Link from "next/link";

type BlogPostCardProps = BlogPostSummary & {};

// مپ کردن URLها به مسیر لوکال
const imageMap: Record<string, string> = {
  "https://minio-classbon.darkube.app/courses-images/CB-RAA/674216f2-2bb2-421a-a943-f6b7f05de1dd.webp":
    "/images/blog/674216f2-2bb2-421a-a943-f6b7f05de1dd.webp",
  "https://minio-classbon.darkube.app/courses-images/CB-RAA/12133fd2-a343-4f42-b720-2fb5d6885b93.webp":
    "/images/blog/12133fd2-a343-4f42-b720-2fb5d6885b93.webp",
};
export const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  coverImage,
  studyTime,
  author,
  postDate,
  numberOfViews,
  numberOfComments,
  isNew,
  slug,
}) => {
  const localImagePath =
    imageMap[coverImage] ||
    imageMap[
      "https://minio-classbon.darkube.app/courses-images/CB-RAA/12133fd2-a343-4f42-b720-2fb5d6885b93.webp"
    ];

  return (
    <div className="card">
      <figure>
        <Image src={localImagePath} alt={title} width={550} height={327} />
      </figure>
      <div className="card-body">
        <Link href={`/blog/${slug}`} className="card-title mb-auto">
          {title}
        </Link>
        <div className="flex items-center justify-between mt-2">
          <Badge variant="info" size="tiny">
            <IconUserProfile width={16} height={16} />
            {author}
          </Badge>
          <Badge variant="neutral">
            <IconCalendar width={16} height={16} />
            {postDate}
          </Badge>
        </div>
      </div>
      <div className="card-footer text-xs justify-between">
        <div className="flex gap-1">
          <Badge variant="warning">
            <IconEye width={16} height={16} />
            {numberOfViews}
          </Badge>
          <Badge variant="accent">
            <IconComment width={16} height={16} />
            {numberOfComments}
          </Badge>
        </div>
        <span className="flex items-center gap-1">
          <IconClock width={16} height={16} />
          زمان مطالعه : {studyTime} دقیقه
        </span>
      </div>
    </div>
  );
};
