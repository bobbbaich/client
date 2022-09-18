import {Reward} from "../model/reward";
import http from "./http-common";
import {Page} from "../model/page";

export const rewardAPI = {
  readAll() {
    return http.get<Page<Reward>>("/api/reward/gifts");
  },

  read(id: string) {
    return http.get<Reward>(`/rewards/${id}`);
  },

  create(data: Reward) {
    return http.post<Reward>("/rewards", data);
  },

  update(data: Reward, id: string) {
    return http.put<string>(`/rewards/${id}`, data);
  },

  delete(id: string) {
    return http.delete<string>(`/rewards/${id}`);
  },
}
