import { circle } from "../../../styled-system/patterns";
import Image from "next/image";

export type AvatarProps = {
  h?: number;
  w?: number;
  src?: string;
};

export const Avatar = (props: AvatarProps) => {
  return (
    <div className={circle({ size: "3rem", overflow: "hidden" })}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={props.src || "https://bit.ly/sage-adebayo"}
        alt="avatar"
        width={props.w || 100}
        height={props.h || 100}
      />
    </div>
  );
};
