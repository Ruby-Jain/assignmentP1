import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Sheet from "@mui/joy/Sheet";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Sheet
      variant="solid"
      invertedColors
      sx={{
        border:'2px solid black',
        backgroundColor:'white',
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        p: 2,
        minWidth: "min-content",
      }}
    >
      <Box sx={{ color:'black',fontFamily:'verdana',fontWeight:'bolder',flex: 1, display: "flex", gap: 1, px: 2 }}>APP LOGO</Box>
      <Box sx={{ display: "flex", flexShrink: 0, gap: 2 }}>
      <Link to={"/"}>
          <Button sx={{ display: { xs: "none", md: "inline-flex" } }}>
            DASHBOARD
          </Button>
        </Link>
        <Link to={"/create-ad"}>
          <Button sx={{ display: { xs: "none", md: "inline-flex" } }}>
            CREATE ADS
          </Button>
        </Link>
        
      </Box>
    </Sheet>
  );
}
