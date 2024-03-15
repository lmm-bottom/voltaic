<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import Direct from './direct.vue'
    import { UserService } from '/src/utils/api.ts'

    onMounted(() => {
        // login1()

    })
    const login1 = async () => {
        const loginParams = {
            autoLogin: true,
            username: 'sixiang',
            password: 'qwe123',
        }
        const res = await UserService.login1(loginParams)
        // console.log(res)
    }



    let activeName = ref(0)
    const handleClick = (tab) => {
        console.log(tab.props.name)
    }

</script>

<template>
    <div class="wrapper">
        <div class="header">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="光伏智能直流汇流箱" name="0">
                    <Direct />
                </el-tab-pane>
                <el-tab-pane label="配置管理" name="second">光伏智能交流汇流箱</el-tab-pane>
                <el-tab-pane label="角色管理" name="third">光伏智能并网箱</el-tab-pane>
            </el-tabs>
        </div>

    </div>
</template>

<style scoped>
    .wrapper {
        /* background: #F4F7FC; */

    }



    :deep(.el-tabs) {
        --el-tabs-header-height: 70px;

    }

    :deep(.el-tabs__header) {
        margin: 0;
        background: white;
        margin-left: 50px;
    }

    :deep(.el-tabs__nav-wrap::after) {
        height: 0px;
    }
</style>