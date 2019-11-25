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
            data: fd,
            contentType: false,
            processData: false,
            succsess: function(res) {

                huidiao(res)
            }
        })
    },

    // 编辑文章
    edit: function(fd, huidiao) {
        $.ajax({
            type: "post",
            url: APIURLS.article_edit,
            data: fd,
            contentType: false,
            processData: false,
            succsess: function(res) {
                huidiao(res)
            }
        })
    },
    // 详情
    detail: function(id, huidiao) {
        $.get(APIURLS.artlcle_show, {
            id: id
        }, function(res) {
            huidiao(res)
        })
    }
}