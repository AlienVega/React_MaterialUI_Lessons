import { Skeleton, Stack, Box } from "@mui/material";
import { useState } from "react";

const LessonSkeleton = () => {
  const [loading, setLoading] = useState(true);
  return (
    <Box>
      {loading ? (
        <Skeleton width={250} height={150} animation="wave"></Skeleton>
      ) : (
        <img
          src="https://source.unsplash.com/random/256*144"
          alt="skeleton"
          width={250}
          height={150}
        ></img>
      )}
    </Box>
  );
};

export default LessonSkeleton;
