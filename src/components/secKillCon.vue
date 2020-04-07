<template>
    <div class="sec-kill-cons">
        <div class="sec-kill-con"
            v-for="(item,index) in skills"
            :key="index">
            <div class="con-img">
                <img :src="item.url"
                    alt="">
            </div>
            <div class="con-new-price"><em>￥</em>{{item.newPrice}}</div>
            <div class="con-old-price">{{item.oldPrice}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        skills: {
            default: []
        }
    }
};
</script>

<style lang='less' scoped>
.sec-kill-cons {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin-top: 3vw;
    overflow: scroll;
    .sec-kill-con {
        flex-shrink: 0;
        flex-basis: 23%;
        img {
            width: 50%;
        }
        .con-new-price {
            color: #e93b3d;
            font-weight: bold;
            margin: 1px;
        }
        .con-old-price {
            text-decoration: line-through;
            color: #ccc;
            font-size: 3.5vw;
        }
    }
}
</style>