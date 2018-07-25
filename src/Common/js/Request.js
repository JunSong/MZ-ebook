var project = 'api', version = 'v1';

export default {
    getHomeData(params,success,fail){
        let defaultParams = { //默认值
            channel: 4, //频道(1-男频，2-女频 ，4-出版物)
            offset: 0,
            count: 10
        }
        params = Object.assign(defaultParams,params)
        this.get('public/homepage',params,success,fail)
    },
    get(url,params,success,fail){
        this.$app.$http.get(`${project}/${version}/`+url, params)
        .then(function (response) {
          console.log(response,url);
          success && success(response);
        })
        .catch(function (error) {
          console.log(error);
          fail && fail(error);
        });
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