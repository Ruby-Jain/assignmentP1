import { Box, Button } from "@mui/joy";
import MediaAdCard from "../components/MediaAdCard";
import TextAdCard from "../components/TextAdCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateAd() {
  const [navigateUrl, setNavigateUrl] = useState("");
  const navigate = useNavigate();

  return (
    <>
    <Box sx={{display:'flex', alignItems:'center',justifyContent:'center',marginTop:'5%'}}>
      <MediaAdCard setNavigateUrl={setNavigateUrl} />
      <TextAdCard setNavigateUrl={setNavigateUrl} />
    </Box>
      <Button sx={{marginLeft:'85%'}} onClick={() => navigate(navigateUrl)}>Next</Button>
    </>
  );
}
