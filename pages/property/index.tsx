import withLayoutBasic from "@/libs/components/LayoutBasic";
import { Container, Stack } from "@mui/material";
import { NextPage } from "next";

const PropertyList: NextPage = () => {
  console.log("PROPERTYLIST COMPONENT - PAGES ROUTER");

  return (
    <>
      <Stack sx={{ background: "#81c784" }}>Header Basic</Stack>
      <Container>PROPERTY LIST</Container>
      <Stack sx={{ background: "#a1887f" }}>Footer</Stack>
    </>
  );
};

export default withLayoutBasic(PropertyList);
