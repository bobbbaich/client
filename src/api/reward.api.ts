import {CreateReward, Reward, UpdateReward} from "../model/reward";
import {PageResponse} from "../model/pageResponse";
import {http} from "./http-common";

export const rewardAPI = {
    readAll() {
        return http.authClient()
            .then(client => client.get<PageResponse<Reward>>("/api/reward/gifts"));
    },

    read(uuid: string) {
        return http.authClient()
            .then(client => client.get<Reward>(`/api/reward/gifts/${uuid}`));
    },

    create(createReward: CreateReward) {
        return http.authClient()
            .then(client => client.post<Reward>("/api/reward/gifts", createReward));
    },

    update(uuid: string, reward: UpdateReward) {
        return http.authClient()
            .then(client => client.put<string>(`/api/reward/gifts/${uuid}`, reward));
    },

    delete(uuid: string) {
        return http.authClient()
            .then(client => client.delete<string>(`/api/reward/gifts/${uuid}`));
    },
}
