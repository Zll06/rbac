<!--
 * @Author: your name
 * @Date: 2022-03-13 17:11:11
 * @LastEditTime: 2022-03-13 21:46:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \rbac\src\views\home\home.vue
-->
<template>
    <div>
        <div v-for="item in rightList" :key="item.id" @click="pathTo(item)">
            <div>
                {{item.name}}
                <div v-for="item in item.children" :key="item.id"  @click.stop="pathTo(item)">
                    {{item.name}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {}
    },
    created() {
        console.log(this.$store);
    },
    computed: {
        ...mapState(['rightList'])
    },
    methods: {
        pathTo(item) {
            console.log(item);
        }
    }
}
</script>

<style lang="less" scoped>

</style>