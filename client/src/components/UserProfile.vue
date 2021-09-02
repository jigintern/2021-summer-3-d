<template>
    <div>
        <a href="/article" class="user_name_list list user_name">{{ userName }}</a>
        <!-- <v-btn text :to="{ name: 'Article', params: { selectId: article.id }}" right>詳細を見る</v-btn> -->
        <p class="game_name_list list game_name">{{ gameName }}</p>
        <p class="comment">{{ userComment }}</p>
    </div>
</template>

<script>
    export default {
        name: "UserProfile",
        props: {
            userName: {
                type: String,
                default: "User_name",
                required: true,
            },
            gameName: {
                type: String,
                default: "Game_name",
                required: true,
            },
            userComment: {
                type: String,
                default: "---------------------------",
                require: true,
            },
        },
    };
</script>

<style>
    .list {
        display: flex;
        align-items: center;
    }

    .user_name_list {
        margin-left: -37px;
    }

    .user_name_list::before {
        content: "";
        display: inline-block;
        border-radius: 30px;
        width: 40px;
        height: 40px;
        margin-right: 16px;
        background-color: #fea666;
    }

    .game_name_list::before {
        content: "";
        display: inline-block;
        border-radius: 30px;
        width: 20px;
        height: 20px;
        margin-right: 16px;
        background-color: #4c96e4;
    }

    p.user_icon {
        width: 35px;
        height: 35px;
        margin-left: -24px;
        border-radius: 50px;
        background: #fea666;
    }

    .user_name {
        width: 322px;
        height: 37px;
        left: 343px;
        top: 191px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 27px;
        line-height: 32px;

        color: #fea666;
    }

    .game_icon {
        width: 20px;
        height: 20px;
        left: 326px;
        top: 241px;
        border-radius: 50px;

        background: #4c96e4;
    }

    .game_name {
        width: 182px;
        height: 34px;
        left: 363px;
        top: 237px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;

        color: #4c96e4;
    }

    .comment {
        width: 673px;
        height: 65px;
        left: 336px;
        top: 271px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 23px;
        line-height: 27px;

        color: #ffffff;
    }
</style>