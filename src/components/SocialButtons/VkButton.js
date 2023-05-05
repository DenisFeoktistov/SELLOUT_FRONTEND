import { Button } from "@mantine/core";

import { IoLogoApple, IoLogoVk } from "react-icons/io";
import React from "react";

const VkButton = (props) => {
  return (
    <Button
      leftIcon={<IoLogoVk size={24} />}
      variant="default"
      color="gray"
      {...props}
    />
  );
};

export default VkButton;
