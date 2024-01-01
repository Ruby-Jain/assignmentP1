import AdTable from "../components/AdTable";
import AdDonut from "../components/AdDonut";
import { Box } from "@mui/joy";

export default function Dashboard() {
  return (
    <>
    <>
    <Box sx={{display:'flex',paddingRight:'10%',marginLeft:'10%'}}>
      <AdTable />
      <AdDonut/>
    </Box>
      </>
    </>
  );
}
