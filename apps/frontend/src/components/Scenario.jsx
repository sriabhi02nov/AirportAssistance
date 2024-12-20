import { CameraControls, Environment } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Avatar } from "./Avatar";

export const Scenario = () => {
  const cameraControls = useRef();
  useEffect(() => {
    //cameraControls.current.setLookAt(0, 2.2, 5, 0, 1.0, 0, true);
    cameraControls.current.setLookAt(0, 2.2, 15, 0, 1.0, 5, true);
  }, []);
  return (
    <>
      <CameraControls ref={cameraControls} />
      <Environment preset="sunset" />
      <Avatar />
    </>
  );
};
