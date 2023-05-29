import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Paper,CardMedia,Typography } from '@mui/material';
import Carousel from "react-material-ui-carousel";

const MuiCarousel = () => {
  // State to programmatically set active child
  const [activeChild, setActiveChild] = useState(0);

  // Basically items = [1, 2, 3, 4]
  const items = useMemo(() => ["https://www.youtube.com/embed/muuK4SpRR5M",
                               "https://www.youtube.com/embed/AVn-Yjr7kDc",
                               "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"], []);

  // The Keypress Event Handler
  // const changeChild = useCallback(
  //   (e) => {
  //     if (e.key === "ArrowLeft") {
  //       // If supposed previous child is < 0 set it to last child
  //       setActiveChild((a) => (a - 1 < 0 ? items.length - 1 : a - 1));
  //     } else if (e.key === "ArrowRight") {
  //       // If supposed next child is > length -1 set it to first child
  //       setActiveChild((a) => (a + 1 > items.length - 1 ? 0 : a + 1));
  //     }
  //   },
  //   [items]
  // );

  // Set and cleanup the event listener
  // useEffect(() => {
  //   document.addEventListener("keydown", changeChild);

  //   return function cleanup() {
  //     document.removeEventListener("keydown", changeChild);
  //   };
  // });

  return (
    <Paper sx={{ width:'400px', height:'300px'}}>
      <Carousel
        index={activeChild} // <-- This controls the activeChild
        autoPlay={false} // <-- You probaly want to disable this for our purposes
        navButtonsAlwaysVisible
        height={300}
      >
        {items.map((i) => {
          return (
            <Typography align="center" key={i}>
              <CardMedia
                component="iframe" src={i} allow="autoPlay" height={300}
              />  
            </Typography>
          );
        })}
      </Carousel>
    </Paper>
  );
}

export default MuiCarousel;

// import React from 'react'

// const MuiCarousel = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default MuiCarousel
