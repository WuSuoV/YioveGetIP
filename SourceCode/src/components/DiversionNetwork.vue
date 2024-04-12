<template>

    <n-flex class="my-center my-display" vertical size="large">

        <n-card class="my-shadow">
            <n-collapse>
                <n-collapse-item title="介绍" name="1">
                    <n-ol>
                        <n-li>支持多线路查看你的 IP 地址，隐藏功能就是看你的网络是否支持访问谷歌等网站。</n-li>
                        <n-li>支持获取 IPv4 和 IPv6 。</n-li>
                        <n-li>如果有折叠展开选项，带有存在该类型 IP 。反之，则不存在。</n-li>
                        <n-li>点击 IP 地址即可复制。</n-li>
                        <n-li>IP 库来自于 itdog.cn , ipip.net ，都是非常不错的网站，可以多支持一下。</n-li>
                    </n-ol>
                </n-collapse-item>
            </n-collapse>
        </n-card>

        <n-spin class="my-loading" v-show="show" size="large"></n-spin>

        <n-flex justify="space-around" size="small">
            <!--国内-->
            <n-card class="my-shadow my-card" v-for="(item, index) in ip_data_in" :key="'in' + index"
                    :title="item[0]">
                <n-collapse :default-expanded-names="['1', '2']">

                    <n-collapse-item title="IPv4" name="1" v-show="!!(item[1].value['ip'])">
                        <n-p>
                            <n-text type="success" @click="copyText(item[1].value['ip'])">{{
                                    item[1].value['ip']
                                }}
                            </n-text>
                        </n-p>
                        <n-p>
                            <n-text depth="3">{{ item[1].value['address'] }}</n-text>
                        </n-p>
                    </n-collapse-item>

                    <n-collapse-item title="IPv6" name="2" v-show="!!(item[2].value['ip'])">
                        <n-p>
                            <n-text type="info" @click="copyText(item[2].value['ip'])">{{
                                    item[2].value['ip']
                                }}
                            </n-text>
                        </n-p>
                        <n-p>
                            <n-text depth="3">{{ item[2].value['address'] }}</n-text>
                        </n-p>
                    </n-collapse-item>

                </n-collapse>
            </n-card>

            <!--国外-->
            <n-card class="my-shadow my-card" v-for="(item, index) in ip_data_out" :key="'out' + index"
                    :title="item[0]">
                <n-collapse :default-expanded-names="['1', '2']">

                    <n-collapse-item title="IPv4" name="1" v-show="!!(item[1].value['ip'])">
                        <n-p>
                            <n-text type="success" @click="copyText(item[1].value['ip'])">{{
                                    item[1].value['ip']
                                }}
                            </n-text>
                        </n-p>
                        <n-p>
                            <n-text depth="3">{{ item[1].value['address'] }}</n-text>
                        </n-p>
                    </n-collapse-item>

                    <n-collapse-item title="IPv6" name="2" v-show="!!(item[2].value['ip'])">
                        <n-p>
                            <n-text type="info" @click="copyText(item[2].value['ip'])">{{
                                    item[2].value['ip']
                                }}
                            </n-text>
                        </n-p>
                        <n-p>
                            <n-text depth="3">{{ item[2].value['address'] }}</n-text>
                        </n-p>
                    </n-collapse-item>

                </n-collapse>
            </n-card>
        </n-flex>

    </n-flex>
</template>

<script setup>
import {ref, onMounted} from "vue";
import {useMessage} from 'naive-ui';
import {getCmIpv4, getCmIpv6} from "../api/diversion/cm.js";
import {getCuIpv4, getCuIpv6} from "../api/diversion/cu.js";
import {getCtIpv4, getCtIpv6} from "../api/diversion/ct.js";
import {getOverseasIpv4, getOverseasIpv6} from "../api/diversion/overseas.js";
import {getGoogleIpv4, getGoogleIpv6} from "../api/diversion/google.js";
import {getIpipnetIpv4} from "../api/diversion/ipipnet.js";

// 代表是否加载
const show = ref(true);
// 移动
const cmIpv4 = ref({});
const cmIpv6 = ref({});
// 联通
const cuIpv4 = ref({});
const cuIpv6 = ref({});
// 电信
const ctIpv4 = ref({});
const ctIpv6 = ref({});
// 海外
const overseasIpv4 = ref({});
const overseasIpv6 = ref({});
// 访问特殊网站，比如谷歌
const googleIpv4 = ref({});
const googleIpv6 = ref({});
// ipip.net
const ipipnetIpv4 = ref({});

const ip_data_in = [
    ['🥇 中国移动', cmIpv4, cmIpv6],
    ['🥈 中国电信', ctIpv4, ctIpv6],
    ['🥉 中国联通', cuIpv4, cuIpv6],
];

const ip_data_out = [
    ['🏷 IPIP.NET', ipipnetIpv4, ref({ip: null})],
    ['✈ 海外线路', overseasIpv4, overseasIpv6],
    ['🔎 谷歌等特殊网站', googleIpv4, googleIpv6],
];

// 代表弹出信息
const message = useMessage();

// 复制文本
const copyText = (text) => {
    navigator.clipboard.writeText(text)
            .then(() => {
                message.success('复制成功')
            })
            .catch(() => {
                message.error('剪切板禁止写入')
            });
}


onMounted(async () => {
    [
        cmIpv4.value,
        cmIpv6.value,

        cuIpv4.value,
        cuIpv6.value,

        ctIpv4.value,
        ctIpv6.value,
    ] = await Promise.all([
        getCmIpv4(),
        getCmIpv6(),

        getCuIpv4(),
        getCuIpv6(),

        getCtIpv4(),
        getCtIpv6(),
    ]);

    [
        overseasIpv4.value,
        overseasIpv6.value,


        ipipnetIpv4.value
    ] = await Promise.all([
        getOverseasIpv4(),
        getOverseasIpv6(),


        getIpipnetIpv4()
    ]);

    [
        googleIpv4.value,
        googleIpv6.value
    ] = await Promise.all([
        getGoogleIpv4(),
        getGoogleIpv6(),
    ]);
    show.value = false;
})

</script>

<style scoped>
.my-loading {
    margin-top: 20px;
    margin-bottom: 20px;
}

.my-shadow {
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.2);
}

.my-center {
    margin-left: auto;
    margin-right: auto;
}

.my-display {
    margin-top: 20px;
    margin-bottom: 20px;
}

/* 竖屏样式 */
@media screen and (orientation: portrait) {
    .my-display {
        width: 90%;
    }

    .my-card {
        margin-top: 10px;
        margin-bottom: 10px;
    }
}

/* 横屏样式 */
@media screen and (orientation: landscape) {
    .my-display {
        width: 50%;
    }

    .my-card {
        width: 30%;
        margin-top: 20px;
        margin-bottom: 20px;
    }

}
</style>