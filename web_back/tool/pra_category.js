var cate = {

    show: function(huidiao) {
        $.get(APIURLS.category_search, function(res) {

            huidiao(res)
            console.log(res);
        })
    },

    add: function(inpname, inpslug, huidiao) {

        $.post(APIURLS.categort_add, { name: inpname, slug: inpslug }, function(res) {
            huidiao(res);
            // console.log(res);
        })
    },


    del: function(id, huidiao) {
        $.post(APIURLS.categort_del, { id: id }, function(res) {
            huidiao(res);
            console.log(res);
        })
    }




}