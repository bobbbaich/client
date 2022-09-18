import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/common/hooks";
import {createReward, readAll, selectRewards} from "../../redux/rewardSlice";

export function Rewards() {
  const dispatch = useAppDispatch();
  const rewards = useAppSelector(selectRewards);

  useEffect(() => {
    console.log("hi hello")
    dispatch(readAll())
  }, [])

  return (
      <div>
        <p>I am reward component</p>
        <div>
          {rewards.content.length >= 0 && rewards.content.map(it => <p key={it.uuid}>{JSON.stringify(it)}</p>)}
        </div>
        <button onClick={() => {
          dispatch(createReward({name: "created"}));
        }
        }>Create reward
        </button>
      </div>
  );
}