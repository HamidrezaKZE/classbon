"use client";
import { createData } from "@/core/http-service/http-service";
import { Problem } from "@/types/http-errors.interface";
import { useEffect } from "react";

const CourseComments = () => {
  // useEffect(() => {
  //   createData("/bad-request", {}).catch((err: Problem) => {
  //     console.error("خطا:", err.detail);
  //     // مثلاً: setErrorMessage(err.detail)
  //   });
  // }, []);
  return <></>;
};

export default CourseComments