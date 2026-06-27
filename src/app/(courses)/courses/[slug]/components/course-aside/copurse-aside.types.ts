import { CourseDetails } from "@/types/courses-details.interface";

export type CourseAsideProps = Pick<
  CourseDetails,
  | "basePrice"
  | "numberOfLectures"
  | "numberOfStudents"
  | "duration"
  | "recordStatus"
  | "isDownloadable"
  | "averageReviewRating"
  | "level"
  | "numOfReviews"
  | "authorName"
  | "authorSpecialty"
  | "profileImageId"
  | "levelNumber"
>;
