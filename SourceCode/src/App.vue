<template>
    <Header></Header>
    <n-message-provider>
        <diversion-network></diversion-network>
    </n-message-provider>
    <Footer></Footer>
</template>

<script setup>
import DiversionNetwork from './components/DiversionNetwork.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>