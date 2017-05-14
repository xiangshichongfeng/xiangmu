
module.exports = {
    //normal账号
    user: {
        xuehao: { type: String, required: true },
        password:  { type: String, required: false },
        name: { type: String, required: true },
        sex: { type: String, required: true },
        birthday: { type: String, required: true },
        jobday: { type: String, required: true },
        huodong: { type: String, required: true },
        content: { type: String, required: true },
        createTime: {type: String, required: false},
        type: {type: Number, required: true} //0: normal user, 1: admin user
    },

    teachingMaterial: {
        name : { type: String, required: true },
        num : { type: Number, required: true },
        degree: { type: String, required: true },
        yuanxi: { type: String, required: true }
    },

    yuanxi: {
        name : { type: String, required: true },
    }
};
