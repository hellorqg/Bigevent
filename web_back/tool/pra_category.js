var cate = {

    show: function(huidiao) {
        $.get(APIURLS.category_search, function(res) {

            huidiao(res)
            console.log(res);

        })
    }












}