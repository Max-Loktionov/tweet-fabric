import { Box, Paper, Typography } from "@mui/material";
import Gallery from "../components/Gallery";

export default function HomePage() {
  return (
    <>
      <Paper elevation={2} sx={{ height: "100vh" }}>
        <Typography variant="h4" textAlign="center" fontStyle="italic">
          Tweebric
        </Typography>
        <Box display="flex" justifyContent={"center"} padding="64px">
          <Gallery />
        </Box>
      </Paper>
    </>
  );
}
