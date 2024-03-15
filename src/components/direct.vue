<script setup lang="ts">
    import { ref } from 'vue'

    let list = ref([{ id: 0, name: 22 }, { id: 1, name: 22 }, { id: 2, name: 22 }])
</script>

<template>
    <div class="wrapper">
        <div class="top">
            <div class="top_item"><span class="top_item_title">设备SN</span><span class="top_item_con">1111</span></div>
            <div class="top_item"><span class="top_item_title">设备状态</span><span class="top_item_con">1111</span></div>
            <div class="top_item"><span class="top_item_title">设备温度</span><span class="top_item_con">1111</span></div>
            <div class="top_item"><span class="top_item_title">设备总功率</span><span class="top_item_con">1111</span></div>
        </div>
        <div class="center">
            <div v-for="item in list" :key="item.id">
                <div class="center_item">
                    <el-button type="primary">通道{{item.id +1}}</el-button>
                    <div class="item_table_w">
                        <div class="item_table">
                            <div class="item_text"><span style="margin-right: 37px;">电流</span> <span>14A</span>

                            </div>
                            <div class="item_text2"><span style="margin-right: 37px;">电压</span><span>14A</span> </div>
                        </div>
                        <img src="@/assets/img/box.png" alt="" class="item_img">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        background: #F4F7FC;
        height: 100vh;
        padding: 40px;
    }

    .top {
        display: flex;
    }

    .top_item {
        width: 300px;
        height: 150px;
        background: #FFFFFF;
        box-shadow: 0px 1px 4px 1px rgba(21, 34, 50, 0.08);
        border-radius: 6px 6px 6px 6px;
        display: flex;
        flex-direction: column;
        padding: 20px;
        margin-right: 40px;
    }

    .top_item_title {
        font-size: 18px;
        color: #7E84A3;
        margin-bottom: 34px;
    }

    .top_item_con {
        font-size: 28px;
        color: #131523;
    }

    .center {
        background: #FFFFFF;
        display: flex;
        margin-top: 40px;
    }

    .center_item {
        width: 227px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 34px;
    }

    .item_table_w {
        display: flex;
        flex-direction: column;
        border-right: 1px solid #E5E5E5;
        width: 227px;
        align-items: center;
        margin-bottom: 38px;
    }

    .item_table {
        border: 1px solid #B1B1B1;
        line-height: 32px;
        width: 152px;

        text-align: center;
        font-size: 18px;
        color: #333333;
        margin: 14px 0 36px 0;
    }

    .item_text {
        border-bottom: 1px solid #B1B1B1;
    }

    .item_img {
        width: 35.76px;
        height: 150.37px;
    }
</style>