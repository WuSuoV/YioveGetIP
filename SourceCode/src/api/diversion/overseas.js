import request from "../request.js";

export async function getOverseasIpv4() {
    return await request({
        method: 'GET',
        url: 'https://ipv4-overseas.itdog.plus/'
    })
}

export async function getOverseasIpv6() {
    return await request({
        method: 'GET',
        url: 'https://ipv6-overseas.itdog.plus/'
    })
}