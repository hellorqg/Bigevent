var userUrl = "http://localhost:8000";

var user = {
    // 用户登录
    userLogin: function(uName, uPassword) {

        $.post(userUrl + "/admin/login", {
            user_name: uName,
            password: uPassword
        }, function(res) {
            console.log(res);
            // 判断
            if (uName === "" || uPassword === "") {
                $('#myModal').modal('show')
                return
            }
            // 登录成功
            if (res.code === 200) {
                location.href = "./index.html"
            } else {
                $("#alert").html(res.msg)
                $('#myModal').modal('show')
            }
        })
    },

    // 获取用户信息
    userInfo: function() {
        $.get(userUrl + "/admin/getuser", function(res) {

            // console.log(res);
            $("#userName").html(res.data.nickname);
            $(".userImg").prop("src", res.data.user_pic)

        })
    },

    // 用户退出

    userLogout: function() {
        $.get(userUrl + "/admin/getuser", function(res) {
            // console.log(res);
            location.href = "./login.html"
        })
    },



}