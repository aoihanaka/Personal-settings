if ($response.statusCode != 200) {
  $done(null);
}

var body = $response.body;
var obj = JSON.parse(body);
var title = obj['city'];
var subtitle = obj['isp'];
var ip = obj['query'];
var description = "IP" + " : " + obj['query'] + '\n' + "ISP" + " : " + obj['isp'];

$done({title, subtitle, ip, description});