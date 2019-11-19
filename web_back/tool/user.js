var userUrl = "http://localhost:8000";

var user = {
    // 用户登录
    userLogin: function(uName, uPassword, huidiao) {

        $.post(userUrl + "/admin/login", {
            user_name: uName,
            password: uPassword
        }, function(a) {
            console.log(a);
            huidiao(a)
        })
    },

    // 获取用户信息
    userInfo: function(huidiao) {
        $.get(userUrl + "/admin/getuser", function(res) {

            // console.log(res);
            huidiao(res)

        })
    },

    // 用户退出

    userLogout: function(huidiao) {
        $.get(userUrl + "/admin/getuser", function() {
            // console.log(res);
            huidiao()
        })
    },



}