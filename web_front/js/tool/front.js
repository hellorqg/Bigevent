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
    commentShow: function(id, huidiao) {
        $.get(api.comment_show, {
                "article_id": id,
            },
            function(res) {
                huidiao(res)
            })
    },

    commentAdd: function(name, content, article_id, huidiao) {
        $.post(api.comment_add, {
            name: name,
            content: content,
            article_id: article_id,
        }, function(res) {
            huidiao(res)
        })
    }
}