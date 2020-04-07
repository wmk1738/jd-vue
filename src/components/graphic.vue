<template>
    <div class="graphic">
        <div class="graphic-title">
            <img src="http://m.360buyimg.com/mobilecms/s750x80_jfs/t1/104532/40/2146/24646/5dcc2957E83954979/5ec2bb870605dcb3.png!q70.jpg.dpg"
                alt="">
        </div>
        <div class="graphic-item-wrapper">
            <div class="graphic-item">
                <div class="graphic-item-h1"> 品质生活</div>
                <div class="graphic-item-h2">音乐品质生活</div>
                <div class="graphic-item-img">
                    <img src="http://m.360buyimg.com/mobilecms/s150x150_jfs/t7714/115/1320414655/151665/52271d4b/599c02e0Ne528b05d.jpg!q70.jpg.dpg"
                        alt="">
                </div>
            </div>
            <div class="graphic-item"
                :style="{'border-left':true&&'none'}">
                <div class="graphic-item-h1"> 品质生活</div>
                <div class="graphic-item-h2">音乐品质生活</div>
                <div class="graphic-item-img">
                    <img src="http://m.360buyimg.com/mobilecms/s150x150_jfs/t7714/115/1320414655/151665/52271d4b/599c02e0Ne528b05d.jpg!q70.jpg.dpg"
                        alt="">
                </div>
            </div>
            <div class="graphic-item">
                <div class="graphic-item-h1"> 品质生活</div>
                <div class="graphic-item-h2">音乐品质生活</div>
                <div class="graphic-item-img">
                    <img src="http://m.360buyimg.com/mobilecms/s150x150_jfs/t7714/115/1320414655/151665/52271d4b/599c02e0Ne528b05d.jpg!q70.jpg.dpg"
                        alt="">
                </div>
            </div>
            <div class="graphic-item">
                <div class="graphic-item-h1"> 品质生活</div>
                <div class="graphic-item-h2">音乐品质生活</div>
                <div class="graphic-item-img">
                    <img src="http://m.360buyimg.com/mobilecms/s150x150_jfs/t7714/115/1320414655/151665/52271d4b/599c02e0Ne528b05d.jpg!q70.jpg.dpg"
                        alt="">
                </div>
            </div>
            <div class="graphic-item">
                <div class="graphic-item-h1"> 品质生活</div>
                <div class="graphic-item-h2">音乐品质生活</div>
                <div class="graphic-item-img">
                    <img src="http://m.360buyimg.com/mobilecms/s150x150_jfs/t7714/115/1320414655/151665/52271d4b/599c02e0Ne528b05d.jpg!q70.jpg.dpg"
                        alt="">
                </div>
            </div>
            <div class="graphic-item"
                :style="{'border-left':true&&'none'}">
                <div class="graphic-item-h1"> 品质生活</div>
                <div class="graphic-item-h2">音乐品质生活</div>
                <div class="graphic-item-img">
                    <img src="http://m.360buyimg.com/mobilecms/s150x150_jfs/t7714/115/1320414655/151665/52271d4b/599c02e0Ne528b05d.jpg!q70.jpg.dpg"
                        alt="">
                </div>
            </div>
            <div class="graphic-item">
                <div class="graphic-item-h1"> 品质生活</div>
                <div class="graphic-item-h2">音乐品质生活</div>
                <div class="graphic-item-img">
                    <img src="http://m.360buyimg.com/mobilecms/s150x150_jfs/t7714/115/1320414655/151665/52271d4b/599c02e0Ne528b05d.jpg!q70.jpg.dpg"
                        alt="">
                </div>
            </div>
            <div class="graphic-item">
                <div class="graphic-item-h1"> 品质生活</div>
                <div class="graphic-item-h2">音乐品质生活</div>
                <div class="graphic-item-img">
                    <img src="http://m.360buyimg.com/mobilecms/s150x150_jfs/t7714/115/1320414655/151665/52271d4b/599c02e0Ne528b05d.jpg!q70.jpg.dpg"
                        alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>

<style lang='less' scoped>
.graphic {
    .graphic-title {
        height: 5vh;
        margin: 5px 0;
        img {
            width: 100%;
        }
    }
    .graphic-item-wrapper {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        background-color: #fff;
        border-radius: 2vw;
        :nth-child(4n+1) {
            border-left: none !important;
        }
        .graphic-item {
            text-align: left;
            box-sizing: border-box;
            flex: 1 0 25%;
            border-left: 1px solid #eee;
            border-bottom: 1px solid #eee;
            .graphic-item-h1 {
                background: -webkit-linear-gradient(left, #45caff, #1471fb);
                background: linear-gradient(90deg, #45caff, #1471fb);
                -webkit-background-clip: text;
                color: transparent;
            }
            .graphic-item-h2 {
                font-size: 2vw;
            }
            .graphic-item-img {
                img {
                    width: 100%;
                }
            }
        }
    }
}
</style>