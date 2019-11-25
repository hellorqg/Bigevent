//游客
var front = {
    focus: function(huidiao) {
        $.get(APIURLS.artlcle_show, {
            perpage: 5,
            state: "已发布"
        }, function(res) {
            huidiao(res)
        })
    },

    // 展示评论
    commenShow: function(id, huidiao) {
        $.get(APIURLS.comment_show, {
                "article_id": id,
            },
            function(res) {
                huidiao(res)
            })
    }
}