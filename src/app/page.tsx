"use client";

import { Typography } from "@mui/material";
import Image from "next/image";

const Politician = () => {
  return (
    <>
      <Typography variant="h1" component="h2">
        Hello betches
      </Typography>
      <Image
        alt="Pic of cannoli"
        width={600}
        height={800}
        src="/cannoli.jpeg"
      />
    </>
  );
};

export default Politician;
