
let jiadianVm=new Vue({
    el:".main-shop-box",
    data:{
        dataAll:"",
        dataNew:"",
        dataPj:"",
    },
    created:function(){
        this.$http.get("data/jiaDian.json").then(function (result) {
            this.dataAll=result.body;
        })
        jQuery.ajax({
            url: 'data/zhiNeng.json',
            async: false,
            success: function(result) {
                a=result;
            }
        });
        this.dataNew=a;
        a=null;
        jQuery.ajax({
            url: 'data/peiJian.json',
            async: false,
            success: function(result) {
                a=result;
            }
        });
        this.dataPj=a;
        a=null;
    },
    methods:{
        jiadianFun:function (val) {
            this.$refs["jiadian"].change(val);
        },
        zhinengFun:function (val) {
            this.$refs["zhineng"].change(val);
        },
        peijianFun:function (val) {
            this.$refs["peijian"].change(val);
        }
    }

})