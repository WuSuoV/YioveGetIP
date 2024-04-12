import request from "../request.js";

export async function getCmIpv4() {
    return await request({
        method: 'GET',
        url: 'https://ipv4_cm.itdog.cn/'
    })
}

export async function getCmIpv6() {
    return await request({
        method: 'GET',
        url: 'https://ipv6_cm.itdog.cn/'
    })
}