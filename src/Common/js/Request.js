import fetch from '@system.fetch'
import device from '@system.device'

var deviceInfo = {};

var project = 'api', version = 'v1';

export default {
    headers:{
        uid: 0,
        app: 'ebook', //要么不填，要么只能填这个
        os: deviceInfo.osVersionName,
        brand: deviceInfo.brand,
        device_model: deviceInfo.model,
        screen_size: deviceInfo.screenWidth+'*'+deviceInfo.screenHeight,
        imei: deviceInfo.device
    }
    getListData(){
        let self = this;
        if(self.listData.noMore) return;
        this.get('public/homepage',self.listData.params,(res)=>{
            let recommendations = res.recommendations;
            self.listData.params.offset += self.listData.params.count;
            if(self.listData.params.offset>=res.total || recommendations.length==0) self.listData.noMore = true;

            recommendations.forEach((element, index)=> {
                if(element.template=='AD') recommendations.splice(index,1);
            });
            self.bookArr = self.bookArr.concat(recommendations);
        },(err)=>{
            console.log('请求出错: '+err)
        })
    },
    get(url,params,success,fail){
        fetch.fetch({
            url:url,
            data:params,
            header:{},
            method:'GET',
            success: success,
            fail: fail,
            complete:function(){}
        })
    },
    post(url,params,success,fail){
        this.$app.$http.post(`${project}/${version}/`+url, params)
        .then(function (response) {
          console.log(response);
          success && success(response);
        })
        .catch(function (error) {
          console.log(error);
          fail && fail(error);
        });
    }
}