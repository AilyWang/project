<template>
    <div class="system_news">
        <div class="system_new_box" v-for="(n, index) in news" :key="index">
            <div class="system_new_cont">
                <div class="system_news_head">{{n.title}}</div>
                <div class="system_news_list">
                    <ul class="system_new_list_ul">
                        <li class="new_li" v-for="(m, index) in n.newCont" :key="index">
                            <a href="javascript:;">{{m}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
       data(){
           return {
               news:[
                   {
                       "title":"最新新闻",
                       "newCont":[
                           "强化党内监督是全面从严治党重要保障",
                           "李克强：地方和部门主要负责同志要带头强化党内监督,全面从严治党",
                           "李克强：政务公开是常态不公开是例外",
                           "军委机关将总体实行“部—局—处”三级体制",
                           "蔡奇就任北京代市长王安顺因工作调动请辞"
                       ]
                   },
                   {
                       "title":"热门文章",
                       "newCont":[
                           "李克强：政务公开是常态不公开是例外",
                           "强化党内监督是全面从严治党重要保障",
                           "蔡奇就任北京代市长王安顺因工作调动请辞",
                           "军委机关将总体实行“部—局—处”三级体制",
                           "李克强：地方和部门主要负责同志要带头强化党内监督,全面从严治党"
                       ]
                   },
                   {
                       "title":"通知公告",
                       "newCont":[
                           "强化党内监督是全面从严治党重要保障",
                           "军委机关将总体实行“部—局—处”三级体制",
                           "李克强：地方和部门主要负责同志要带头强化党内监督,全面从严治党",
                           "蔡奇就任北京代市长王安顺因工作调动请辞",
                           "李克强：政务公开是常态不公开是例外"
                       ]
                   }
               ]
           }
       }
    }
</script>
<style>
.system_news{
    width: 100%;
    margin-top: 20px;
}
.system_news::after{
    content:"";
    display: block;
    height: 0;
    clear: both;
    overflow: hiddle;
    visibility: hiddle;
}
.system_new_box{
    width: 33.333%;
    float: left;
    padding-right: 10px;
}
.system_new_box:last-child{
    padding-right: 0;
}
.system_new_cont{
    width: 100%;
    height: 100%;
}
.system_news_head{
    width: 100%;
    padding: 10px 15px;
    font-size: 14px;
    color: #000;
    border-left: 5px solid #009688;
    background: #f2f2f2;
}
.system_news_list{
    width: 100%;
    background: #fff;
    font-size: 14px;
    border: 1px solid #e6e6e6;
    border-left: 5px solid #f2f2f2;
    border-bottom: 0;
}
.new_li{
    padding: 9px 15px;
    border-bottom: 1px solid #e6e6e6;

}
.new_li a{
    display: inline-block;
    color: #333;
    width: 90%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>

