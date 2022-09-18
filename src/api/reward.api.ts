import {Reward} from "../model/reward";
import http from "./http-common";
import {Page} from "../model/page";

export const rewardAPI = {
  readAll() {
    return http.get<Page<Reward>>("/api/reward/gifts");
  },

  read(id: string) {
    return http.get<Reward>(`/api/reward/gifts/${id}`);
  },

  create(reward: Reward) {
    return http.post<Reward>("/api/reward/gifts", reward);
  },

  update(reward: Reward, id: string) {
    return http.put<string>(`/api/reward/gifts/${id}`, reward);
  },

  delete(id: string) {
    return http.delete<string>(`/api/reward/gifts/${id}`);
  },
}
