<template>
    <div id='sec-kill'>
        <SkillTitle></SkillTitle>
        <SkillCon :skills="$store.state.skillIcons"></SkillCon>
    </div>
</template>

<script>
import SkillCon from "./secKillCon";
import SkillTitle from "./secKillTitle";
export default {
    components: { SkillCon, SkillTitle },
    data() {
        return {
            time: new Date()
        };
    },
    created() {
        setInterval(() => {
            this.time = new Date();
        }, 1000);
        this.$store.dispatch("getSkillIcons");
    }
};
</script>

<style lang='less' scoped>
#sec-kill {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 2vw;
    border-radius: 2vw;
}
</style>