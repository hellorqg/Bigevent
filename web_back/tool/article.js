// 获取所有文章
var article = {
    show: function(huidiao) {
        $.get(APIURLS.artlcle_show, function(res) {
            console.log(res);
            huidiao(res)
        })
    }
}