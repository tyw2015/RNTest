import { parse, stringify } from 'qs';
import { Platform } from 'react-native';

export async function hellowWorld(param) {
    return JSON.stringify({
        status: 1,
        content: "hellowWorld!"
    })
}

export async function testObtain(param) {
    return {
        status: 1,
        content: [
            {
                name: 1,
                des: "第一条数据"
            },
            {
                name: 2,
                des: "第二条数据"
            },
            {
                name: 3,
                des: "第三条数据"
            },
            {
                name: 4,
                des: "第四条数据"
            },
            {
                name: 5,
                des: "第五条数据"
            },
            {
                name: 6,
                des: "第六条数据"
            },
            {
                name: 7,
                des: "第七条数据"
            },
            {
                name: 8,
                des: "第八条数据"
            },
            {
                name: 9,
                des: "第九条数据"
            },
            {
                name: 10,
                des: "第十条数据"
            },
            {
                name: 11,
                des: "第十一条数据"
            },
            {
                name: 12,
                des: "第十二条数据"
            },
            {
                name: 13,
                des: "第十三条数据"
            },
            {
                name: 14,
                des: "第十四条数据"
            },
        ]
    }
}