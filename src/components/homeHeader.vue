<template>
    <div id='home-header'>
        <div class="more">
            <i class="iconfont iconcaidan"></i>
        </div>
        <div class="search">
            <input type="text" />
        </div>
        <div>
            <span>登录</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: ""
        };
    }
};
</script>

<style lang='less' scoped>
#home-header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    .more {
        i {
            font-size: 6vw;
        }
    }
    .search {
        display: flex;
        flex: 1;
        input {
            margin: 0 20px;
            border-radius: 5vw;
            border: 1px solid #ddd;
            height: 7vw;
            display: flex;
            flex: 1;
        }
    }
}
</style>