const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');
app.use(serve(path.join(__dirname+'/dist'),{ extensions: ['html']}));
 
app.listen(3110,function(){
    console.log("监听3110端口")
});