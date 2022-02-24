import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles/makeStyles";

export const useStyle = makeStyles(() =>
  createStyles({
    paper: {
      textAlign: "center",
      background: "blue",
    },
    paper2: {
      // background: "red",
      // margin:"50px,100px,200px",
      display:"flex",
      width: "100%",
      justifyContent:"space-between",
      // backgroundColor:"red"
      
  
    },
    paper1: {

    position: "absolute",
    width: "100%",
    height: "100vh",
    // left: "1920px",
    // top: "1080px", 
    // background: "linear-gradient( 270deg, #26aae1 -5.76%, rgba(38, 170, 225, 0) 49.42%)",
    transform: "rotate(180deg)",
    display:"flex", 
    // backgroundColor:"green",
    
    
    }
 
}));