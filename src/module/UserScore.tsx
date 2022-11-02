import React from "react";
import Avatar from "../components/Avatar";
import { UserProps } from "../userList";

export const UserScore: React.FC<{ user: UserProps; rank: number }> = ({
  user,
  rank,
}) => {
  return (
    <tr>
      <td>
        <Avatar name={user.displayName} profileUrl={user?.picture} rank={rank}/>
      </td>
      <td align="right">{user.score}&nbsp;<span className="points">points</span></td>
    </tr>
  );
};

export default UserScore;
