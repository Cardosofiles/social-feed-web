import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  otherClasses?: boolean;
}

export function Avatar({ otherClasses = true, ...props }: AvatarProps) {
  return (
    <>
      <img
        className={otherClasses ? styles.avatarWithBorder : styles.avatar}
        {...props}
      />
    </>
  );
}
