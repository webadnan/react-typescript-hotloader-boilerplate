import * as path from 'path';
import * as webpack from 'webpack';
import * as express from 'express';
import * as config from '../webpack.config'
import * as webpack_dev_middleware from 'webpack-dev-middleware';
import * as webpack_hot_middleware from 'webpack-hot-middleware';


var app = express();
var compiler = webpack(config);

app.use(webpack_dev_middleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpack_hot_middleware(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../static/index.html'));
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});
