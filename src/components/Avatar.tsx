import React from "react";
import { AvatarImage, Rank, Wrapper } from "../styledComponent/Avatar";

interface AvatarProps {
  name: string;
  profileUrl?: string | null;
  rank?: number;
}

const Avatar: React.FC<AvatarProps> = ({ name, profileUrl, rank }) => {
  return (
    <Wrapper>
      <AvatarImage
        src={profileUrl || ""}
        alt="avatar"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "/asset/images/logo192.png";
        }}
      />
      <span>{name}</span>
      <Rank>{rank}</Rank>
    </Wrapper>
  );
};

export default Avatar;
