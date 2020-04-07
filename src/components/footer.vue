<template>
    <mt-tabbar v-model="selected">
        <mt-tab-item v-for="item in tabbers"
            :key="item.name"
            :id="item.name">
            <div class="icon-wrapper">
                <i class="iconfont"
                    :class="item.iconClass"></i>
            </div>
            {{item.name}}
        </mt-tab-item>
    </mt-tabbar>
</template>

<script>
export default {
    data() {
        return {
            tabbers: [
                { iconClass: "iconshouye", name: "首页" },
                { iconClass: "iconleimupinleifenleileibie", name: "分类" },
                { iconClass: "icongouwuche", name: "购物车" },
                { iconClass: "icongeren", name: "个人" }
            ],
            selected: "首页"
        };
    }
};
</script>

<style lang='less' scoped>
.icon-wrapper {
    .iconfont {
        font-size: 6vw;
        line-height: 8vw;
    }
}
</style>