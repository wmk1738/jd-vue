import axios from 'axios';

export default {
    async getSwipeImgs(context) {//轮播图
        let res = await axios.get('http://localhost:3000/slides');
        context.commit('getSwipeImgs', res.data || [])
    },
    async getBoxList(context) {//导航标签
        let res = await axios.get(`http://localhost:3000/icons`);
        context.commit('getBoxList', res.data);
    },
    async getSkillIcons(context) {//秒杀
        let res = await axios.get(`http://localhost:3000/icons/skill`);
        context.commit('getSkillIcons', res.data);
    }
}