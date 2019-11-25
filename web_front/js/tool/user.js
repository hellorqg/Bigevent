var user = {
    // 用户登录
    userLogin: function(uName, uPassword, huidiao) {

        $.post(APIURLS.user_login, {
            user_name: uName,
            password: uPassword
        }, function(a) {
            console.log(a);
            huidiao(a)
        })
    },

    // 获取用户信息
    userInfo: function(huidiao) {
        $.get(APIURLS.user_info, function(res) {

            // console.log(res);
            huidiao(res)

        })
    },

    // 用户退出

    userLogout: function(huidiao) {
        $.get(APIURLS.user_logout, function() {
            // console.log(res);
            huidiao()
        })
    },

}