import AppLayout from "@/componets/AppLayout";
import { Grid } from "@mui/material";

import Feed from "@/componets/Feed";
import RightBar from "@/componets/RightBar";
import SideBar from "@/componets/SideBar";

const Home = () => {
  return (
    <AppLayout>
      <Grid container spacing={2} sx={{paddingTop: '25px'}}>
        <Grid item md={3} sx={{ display: { xs: "none", sm: "block" } }}>
          <SideBar />
        </Grid>
        <Grid item md={6}>
          <Feed />
        </Grid>
        <Grid item md={3} sx={{ display: { xs: "none", sm: "block" } }}>
          <RightBar />
        </Grid>
      </Grid>
    </AppLayout>
  );
};

export default Home;
