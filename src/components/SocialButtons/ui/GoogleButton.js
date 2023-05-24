import { Button } from "@mantine/core";

import { IoLogoApple, IoLogoGoogle } from "react-icons/io";
import React from "react";

const GoogleButton = (props) => {
  return (
    <Button
      leftIcon={<IoLogoGoogle size={24} />}
      variant="default"
      color="gray"
      {...props}
    />
  );
};

export default GoogleButton;
