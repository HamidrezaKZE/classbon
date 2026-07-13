"use client";
import { useParams } from "next/navigation";
import { useCourseComments } from "../_api/get-comments";
import { Comment } from "@/app/_components/comment/comment";
import { TextPlaceholder } from "@/app/_components/placehoders";
import { Fragment } from "react/jsx-runtime";
import { useInView } from "react-intersection-observer"; 
import { useEffect } from "react";
import { Button } from "@/app/_components/button";
import { IconRefresh } from "@/app/_components/icons";
import { Alert } from "@/app/_components/alert";

const CourseComments = () => {
  const { ref, inView }=useInView({})
  const { slug } = useParams();
  const {
    data: comments,
    error,
    // isFetchingNextPage,  with this in the first and top we don't see text placeholder
    isFetching,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useCourseComments({
    params: { slug: slug as string, page: 1 },
  });

  useEffect(()=>{
    if ( inView && hasNextPage )
      {
        fetchNextPage();
      }
  }, [ inView , fetchNextPage , hasNextPage ])

    if (error) {
        return (
            <>
                <Alert variant='error'>خطا در برقراری ارتباط با سرور</Alert>
                <div className='text-center mt-3'>
                    <Button
                        variant='neutral'
                        className='font-semibold'
                        isOutline={true}
                        shape="wide"
                        onClick={() => refetch()}
                    >
                        <IconRefresh/>
                        تلاش مجدد
                    </Button>
                </div>
            </>
        )
    }

  return (
    <>
    {comments?.pages.map((currentPage,index) => (
      <Fragment key={`comment-page-${index}`}>
        {currentPage.data.map(comment => (
           <Comment key={`comment-${comment.id}`} {...comment} variant="info" />
          

        ))
          }
      </Fragment>
    ))}
    {(isFetching || hasNextPage) && 
    (
    <div ref={ref}>
      <TextPlaceholder/>
    </div>

    )}
   
      {/* {isLoading && <TextPlaceholder />} */}
    </>
  );
};

export default CourseComments;
