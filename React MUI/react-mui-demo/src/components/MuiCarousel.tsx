import { Paper,CardMedia,Typography } from '@mui/material';
import Carousel from "react-material-ui-carousel";

const MuiCarousel = () => {
  const items = [
    { key: 0, url:'https://www.youtube.com/embed/muuK4SpRR5M', text: 'Lorem ipsum' }, 
    { key: 1, url:'https://www.youtube.com/embed/AVn-Yjr7kDc', text: 'Ipsum ipsum' },
    { key: 2, url:'https://www.youtube.com/embed/WNk6LZFJN2k', text: 'Lorem Lorem' }, 
    { key: 3, url:'https://www.youtube.com/embed/UgfsbL-uHOA', text: 'Ipsum Lorem' }
  ];
  return (
    <Paper sx={{ width:'400px', height:'300px'}}>
      <Carousel navButtonsAlwaysVisible height={300}>
        {items.map((item) => {
          return (
            <Typography align="center" key={item.key}>
              <CardMedia 
                component="iframe" image={item.url} title="abcd" height={200}
              />
            </Typography>
          );
        })}
      </Carousel>
    </Paper>
  );
}

export default MuiCarousel;

  // State to programmatically set active child
  // const [activeChild, setActiveChild] = useState(0);
  //const onChangeCarousel = (videoIndex)=>{alert(videoIndex)};

  // Basically items = [1, 2, 3, 4]



  // The Keypress Event Handler
  // const changeChild = useCallback(
  //   (e:any) => {
  //     if (e.key === "ArrowLeft") {
  //       // If supposed previous child is < 0 set it to last child
  //       setActiveChild((a) => (a - 1 < 0 ? items.length - 1 : a - 1));        
  //     } else if (e.key === "ArrowRight") {
  //       // If supposed next child is > length -1 set it to first child
  //       setActiveChild((a) => (a + 1 > items.length - 1 ? 0 : a + 1));
  //     }
  //     console.log('Active Child: ', activeChild);
  //   },
  //   [items, activeChild]
  // );

  // Set and cleanup the event listener
  // useEffect(() => {
  //   document.addEventListener("keydown", changeChild);

  //   return function cleanup() {
  //     document.removeEventListener("keydown", changeChild);
  //   };
  // });

        // index={activeChild} // <-- This controls the activeChild
        // autoPlay={true} // <-- You probaly want to disable this for our purposes


                // next={onChangeCarousel(activeChild)}
