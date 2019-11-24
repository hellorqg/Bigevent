var cate = {
    // 展示
    show: function(huidiao) {
        $.get(APIURLS.category_search, function(res) {

            huidiao(res)
                // console.log(res);
        })
    },

    // 添加类别
    add: function(inpname, inpslug, huidiao) {

        $.post(APIURLS.categort_add, { name: inpname, slug: inpslug }, function(res) {
            huidiao(res);
            // console.log(res);
        })
    },

    // 删除类别
    del: function(id, huidiao) {
        $.post(APIURLS.categort_del, { id: id }, function(res) {
            huidiao(res);
            // console.log(res);
        })
    },

    // 修改类别
    edit: function(id, name, slug, huidiao) {
        $.post(APIURLS.categort_edit, { id: id, name: name, slug: slug }, function(res) {
            huidiao(res)
        })
    }


}