<template>
    <div id="swipe-wapper">
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="(item,index) in swipeImgs"
                :key="index">
                <img :src="item.url"
                    :alt="item.name"
                    srcset="" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: mapState({
        swipeImgs: "swipeImgs"
    }),
    created() {
        this.$store.dispatch({
            type: "getSwipeImgs"
        });
    }
};
</script>

<style lang='less' scoped>
#swipe-wapper {
    height: 22vh;
    margin: 10px 0;
    img {
        width: 100%;
        border-radius: 3vw;
    }
}
</style>