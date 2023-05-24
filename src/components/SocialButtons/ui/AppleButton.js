import { Button } from "@mantine/core";

import { IoLogoApple } from "react-icons/io";
import React from "react";

const AppleButton = (props) => {
  return (
    <Button
      leftIcon={<IoLogoApple size={24} />}
      variant="default"
      color="gray"
      {...props}
    />
  );
};

export default AppleButton;
