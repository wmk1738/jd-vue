<template>
    <div id='box-list'>
        <mt-swipe :auto="0">
            <mt-swipe-item v-for="(item,index) in boxList"
                :key="index">
                <div class="box-item-wrapper">
                    <div class="box-item"
                        v-for="subItem in item"
                        :key="subItem.tip">
                        <div class="box-item-img">
                            <img :src="subItem.url"
                                alt="">
                        </div>
                        <div class="box-item-text">
                            {{subItem.tip}}
                        </div>
                    </div>
                </div>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: mapState({
        boxList: "boxList"
    }),
    created() {
        this.$store.dispatch({
            type: "getBoxList"
        });
    }
};
</script>

<style lang='less' scoped>
#box-list {
    height: 40vw;
    .box-item-wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .box-item {
            display: flex;
            flex-direction: column;
            width: 20%;
            margin-bottom: 1vh;
            .box-item-img {
                img {
                    width: 50%;
                }
            }
            .box-item-text {
                font-size: 1vh;
            }
        }
    }
}
</style>