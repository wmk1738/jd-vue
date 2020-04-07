<template>
    <div class="home">
        <Header></Header>
        <Swipe></Swipe>
        <BoxList></BoxList>
        <SecKill></SecKill>
        <Graphic></Graphic>
        <Footer></Footer>
    </div>
</template>

<script>
// @ is an alias to /src
import Footer from "./../components/footer";
import Header from "./../components/homeHeader";
import Swipe from "./../components/swipe";
import BoxList from "./../components/boxList";
import SecKill from "./../components/secKill";
import Graphic from "./../components/graphic";

export default {
    name: "home",
    data() {
        return {
            a: {
                b: 234
            }
        };
    },
    mounted() {
        // debugger;
        this.a.b = "b";
    },
    components: {
        Graphic,
        Footer,
        Header,
        Swipe,
        SecKill,
        BoxList
    }
    // directives: {
    //     demo: {
    //         // 指令的定义
    //         bind: function(el, binding, vnode) {
    //             console.log("binding", binding);
    //         }
    //     }
    // }
};
</script>

<style lang="less" scoped>
.home {
    overflow: scroll;
    padding-bottom: 9vh;
    .mint-tabbar {
        position: fixed;
        height: 9vh;
    }
}
</style>
