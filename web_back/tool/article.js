// 获取所有文章
var article = {
    show: function(type, state, page, huidiao) {
        $.get(APIURLS.artlcle_show, {

                "type": type,
                "state": state,
                "page": page,
            },
            function(res) {
                // console.log(res);
                huidiao(res)
            })
    },
    // 获取文章类别
    get: function(huidiao) {
        $.get(APIURLS.article_get, function(res) {
            // console.log(res);
            huidiao(res);
        })
    },


    // 删除文章

    del: function(id, huidiao) {
        $.get(APIURLS.article_del, {
                id: id
            }),
            function(res) {
                huidiao(res)
            }
    },


    // 发布文章
    add: function(fd, huidiao) {
        $.ajax({
            url: APIURLS.article_add,
            type: "post",
            contentType: false,
            processData: false,
            data: fd,
            succsess: function(res) {

                huidiao(res)
            }
        })
    }
}