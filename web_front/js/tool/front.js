//游客
var front = {
    focus: function(huidiao) {
        $.get(APIURLS.artlcle_show, {
            perpage: 5,
            state: "已发布"
        }, function(res) {
            huidiao(res)
        })
    }

}