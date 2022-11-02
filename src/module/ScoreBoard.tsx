import React from "react";
import { Table } from "../styledComponent/Table";
import UserScore from "./UserScore";
import { useLiveScore } from "../Hook/liveScore";
import { Main } from "../styledComponent/Main";

const ScoreBoard = () => {
  const { users } = useLiveScore();
  console.log("userList", users);
  return (
    <Main>
      <Table>
        {users &&
          users.map((user: any, index: any) => (
            <UserScore user={user} rank={index + 1} key={user.id} />
          ))}
      </Table>
    </Main>
  );
};
export default ScoreBoard;
