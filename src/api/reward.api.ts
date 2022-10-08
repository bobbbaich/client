import {CreateReward, Reward} from "../model/reward";
import http from "./http-common";
import {Page} from "../model/page";

export const rewardAPI = {
  readAll() {
    return http.get<Page<Reward>>("/api/reward/gifts");
  },

  read(uuid: string) {
    return http.get<Reward>(`/api/reward/gifts/${uuid}`);
  },

  create(reward: CreateReward) {
    return http.post<Reward>("/api/reward/gifts", reward);
  },

  update(uuid: string, reward: Reward) {
    return http.put<string>(`/api/reward/gifts/${uuid}`, reward);
  },

  delete(uuid: string) {
    return http.delete<string>(`/api/reward/gifts/${uuid}`);
  },
}
