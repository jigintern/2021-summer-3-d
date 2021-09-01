<template>
    <div>
        <p class="user_icon"></p>
        <p class="user_name">{{User_name}}</p>
        <p class="game_icon"></p>
        <p class="game_name">{{Game_name}}</p>
        <p class="comment">
            -----------------------------------------------------------------------------------------------------------------------
        </p>
    </div>
</template>

<script>
    export default {
        name: "UserProfile",
        props: {
            User_name: {
                type: String,
                default: 'User_name',
                required: true
            },
            Game_name: {
                type: String,
                default: 'Game_name',
                required: true
            },
            // top_usericon:{
            //     type:String,
            //     default:"191px",
            //     required:true
            // }
        }
    }
</script>

<style>
    p.user_icon {
        width: 35px;
        height: 35px;
        left: 289px;
        top: 191px;
        border-radius: 50px;

        background: #FEA666;
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

        color: #FEA666;
    }

    .game_icon {
        width: 20px;
        height: 20px;
        left: 326px;
        top: 241px;
        border-radius: 50px;

        background: #4C96E4;
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

        color: #4C96E4;
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

        color: #FFFFFF;
    }
</style>