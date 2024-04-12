import request from "../request.js";

export async function getIpipnetIpv4() {
    const str = await request({
        method: 'GET',
        url: 'https://myip.ipip.net/'
    });
    // 匹配 IP 地址的正则表达式
    const ipRegex = /\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b/g;
    // 匹配地理位置信息的正则表达式
    const locationRegex = /来自于：(.+)/;

    // 提取 IP 地址
    const ipMatches = str.match(ipRegex);
    const ipAddress = ipMatches ? ipMatches[0] : null;

    // 提取地理位置信息
    const locationMatches = str.match(locationRegex);
    const location = locationMatches ? locationMatches[1].replace(/\s+/g, '/') : null;
    return {
        ip: ipAddress,
        address: location
    }
}
