<template>
    <n-split :default-size="0.8" :disabled="true" class="my-header my-shadow">
        <template #1>
            <n-menu
                    v-model:value="activeKey"
                    mode="horizontal"
                    :options="menuOptions"
                    responsive
            />
        </template>
    </n-split>
</template>

<script setup>
import {h, ref} from "vue";

const activeKey = ref(null);

const imgUrl = ["h", "t", "t", "p", "s", ":", "/", "/", "s", "t", "a", "t", "i", "c", ".", "2", "g", "e", ".", "o", "r", "g", "/", "i", "m", "a", "g", "e", "/", "2", "0", "2", "4", "/", "0", "3", "/", "6", "8", "5", "e", "f", "9", "f", "1", "2", "2", "1", "c", "b", "0", "d", "0", "4", "7", "d", "3", "4", "7", "d", "6", "0", "5", "8", "9", "1", "1", "e", "e", ".", "p", "n", "g"];
const homeUrl = ["h", "t", "t", "p", "s", ":", "/", "/", "w", "w", "w", ".", "y", "i", "o", "v", "e", ".", "c", "o", "m"];

const menuOptions = [
    {
        label: () => h('a', {href: '/'}, [h('img', {src: imgUrl.join(''), width: '100'})]),
        key: "logo",
    },
    {
        label: () => h('a', {href: homeUrl.join(''), target: '_blank'}, '官方网站'),
        key: 'guan-wang'
    }
];

</script>

<style scoped>
.my-header {
    background-color: white;
}

.my-shadow {
    /* 水平偏移量 | 垂直偏移量 | 模糊半径 | 扩散半径 | 阴影颜色 */
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
}

</style>