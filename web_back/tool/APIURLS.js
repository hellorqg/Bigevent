var userUrl = "http://localhost:8000/";

var APIURLS = {

    user_login: userUrl + "admin/login",
    user_info: userUrl + "admin/getuser",
    user_logout: userUrl + "admin/getuser",


    // 文章类别
    category_search: userUrl + "admin/category_search",
    categort_add: userUrl + "admin/category_add",
    categort_del: userUrl + "admin/category_delete",
    categort_edit: userUrl + "admin/category_edit",

    // 获取文章
    artlcle_show: userUrl + "admin/search",
    article_get: userUrl + "admin/category_search",
    article_del: userUrl + "admin/article_delete",
    article_add: userUrl + "admin/article_publish",
}