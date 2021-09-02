<template>
    <div>
        <p class="user_name_list list user_name">{{userName}} </p>
        <p class="game_name_list list game_name">{{gameName}} </p>
        <p class="comment">
            -----------------------------------------------------------------------------------------------------------------------
        </p>
    </div>
</template>

<script>
    export default {
        name: "UserProfile",
        props: {
            userName: {
                type: String,
                default: 'User_name',
                required: true
            },
            gameName: {
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
    .list {
        display: flex;
        align-items: center;
    }

    .user_name_list {
        margin-left: -24px;
    }
    
    .user_name_list::before {
        content: '';
        display: inline-block;
        border-radius: 30px;
        width: 40px;
        height: 40px;
        margin-right: 16px;
        background-color: #FEA666;
    }

    .game_name_list::before {
        content: '';
        display: inline-block;
        border-radius: 30px;
        width: 20px;
        height: 20px;
        margin-right: 16px;
        background-color: #4C96E4;
    }

    p.user_icon {
        width: 35px;
        height: 35px;
        margin-left: -24px;
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