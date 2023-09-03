<template>
    <div class="user-history-wrapper">
        <div class="container">
            <div class="user-history">
                <h2 class="user-history-label">
                    История
                </h2>
                <div class="user-history__cards">
                    <UserHistoryCard 
                        v-for="userHistory in userHistoryList" 
                        :key="userHistory.id" 
                        :data="userHistory"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import api from "~/api/repositories/api";
import { UserHistory } from "../types/IUser";
const router = useRoute()
const userHistoryList = ref<UserHistory[]>()

getUserHistory();

async function getUserHistory()
{
    userHistoryList.value = await api.userRepository.getUserHistory(Number(router.params.id))
}
</script>
<style lang="scss">
.user-history-wrapper
{
    .user-history
    {
        .user-history-label
        {
            font-family: "Open Sans";
            font-size: 24px;
            font-weight: 700;
            margin-top: 20px;
        }
        .user-history__cards
        {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 15px;
        }
    }
}
</style>