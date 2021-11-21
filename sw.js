/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/10/20/hexo-github创建个人博客教程最新超详细/image-20211021091553363.png","a86e5f0266ad45d3aef9b8c602b2a481"],["/2021/10/20/hexo-github创建个人博客教程最新超详细/image-20211021091858905.png","a6c801a9be53fa978c4eac380f5fdb32"],["/2021/10/20/hexo-github创建个人博客教程最新超详细/image-20211021091947590.png","246eab2c39c49f977f96c539b8fd7c8c"],["/2021/10/20/hexo-github创建个人博客教程最新超详细/image-20211022073700288.png","dfdb4f15c57001388fdfe81e245ac0e0"],["/2021/10/20/hexo-github创建个人博客教程最新超详细/index.html","cb8cc028888b7a29424974444b4738dd"],["/2021/10/23/数据库取证分析/11.png","151a4bb9c0b765a92950e5e166bdad7e"],["/2021/10/23/数据库取证分析/12.png","ca43fe95ee542180f8e17bc3c1c33494"],["/2021/10/23/数据库取证分析/13.png","800a361fa3cff32033efbe043ca2a848"],["/2021/10/23/数据库取证分析/4591.png","52f87dae9a3eaa925231d0103d4b3852"],["/2021/10/23/数据库取证分析/index.html","e4eca298a7c80178c1e18a92c79fe091"],["/2021/10/24/区块链之虚拟货币初步了解/5449128_preview.jpg","930088c90bd830e5cf1e54d8060b090f"],["/2021/10/24/区块链之虚拟货币初步了解/index.html","e8083e5ac72e21c82bf915dab150793f"],["/2021/11/02/msf-美少妇-独角兽/Screenshot_1.png","cf5d2d1a3a0ccd84304074356b09f6f8"],["/2021/11/02/msf-美少妇-独角兽/index.html","db11880b06125be670edc1362f379ea2"],["/2021/11/04/2018年美亚杯团体赛E部分-内存取证/image-20211104145749642.png","83243aab81d50e8d9595245bf4fb2d14"],["/2021/11/04/2018年美亚杯团体赛E部分-内存取证/image-20211104151206665.png","efcb7e9965f7528df9405386e569e834"],["/2021/11/04/2018年美亚杯团体赛E部分-内存取证/image-20211104151318588.png","0b0f1622789d1a80d273d9fa1a2b992d"],["/2021/11/04/2018年美亚杯团体赛E部分-内存取证/image-20211104151421716.png","87cc47f75cfb37c14db4fae8ca935bf9"],["/2021/11/04/2018年美亚杯团体赛E部分-内存取证/image-20211104154228587.png","beebce4a336c68650e9b70d88d17a208"],["/2021/11/04/2018年美亚杯团体赛E部分-内存取证/image-20211104213321963.png","06e16f787e926d1e005ea4587be6171e"],["/2021/11/04/2018年美亚杯团体赛E部分-内存取证/image-20211104213419223.png","5cc4c3e4399dfe925368f89c848791c9"],["/2021/11/04/2018年美亚杯团体赛E部分-内存取证/image-20211104213916727.png","2006df1273222f7e0565d1a7efa791ca"],["/2021/11/04/2018年美亚杯团体赛E部分-内存取证/image-20211104214938578.png","8f692410ff9c25b37c5a1cd554d05ce0"],["/2021/11/04/2018年美亚杯团体赛E部分-内存取证/image-20211104214954993.png","8f692410ff9c25b37c5a1cd554d05ce0"],["/2021/11/04/2018年美亚杯团体赛E部分-内存取证/index.html","a0dc1f27d8e89f40464698fec3d0a131"],["/2021/11/05/2018年美亚杯团赛A部分-Linux取证/image-20211031094059974.png","a4910dfddb0cd02af8a58d7a32a21cb0"],["/2021/11/05/2018年美亚杯团赛A部分-Linux取证/image-20211101141903541.png","494857f5d2c60730d6805cef25c9f6cc"],["/2021/11/05/2018年美亚杯团赛A部分-Linux取证/image-20211101144122030.png","5aecdb319d5bebc05c3a382daf83b62b"],["/2021/11/05/2018年美亚杯团赛A部分-Linux取证/image-20211101144143722.png","7a29dd2c15a958d343fe66bc3465a17f"],["/2021/11/05/2018年美亚杯团赛A部分-Linux取证/image-20211101144635623.png","744e8011617dec5a70c02837696d3aa7"],["/2021/11/05/2018年美亚杯团赛A部分-Linux取证/image-20211101145012517.png","8058effa0388909d7894745d5cbe21f1"],["/2021/11/05/2018年美亚杯团赛A部分-Linux取证/image-20211101145633185.png","e55cfb3c6b16aa202eda7fa86c0983e2"],["/2021/11/05/2018年美亚杯团赛A部分-Linux取证/image-20211101145653822.png","e55cfb3c6b16aa202eda7fa86c0983e2"],["/2021/11/05/2018年美亚杯团赛A部分-Linux取证/image-20211101150547137.png","461c57018ef315cde7ec651d0b0a8110"],["/2021/11/05/2018年美亚杯团赛A部分-Linux取证/image-20211101152220161.png","1a17758aa6c5ec33b340c9f272d62a57"],["/2021/11/05/2018年美亚杯团赛A部分-Linux取证/image-20211101152253247.png","c49cb813f4761bf931ca39c648120de8"],["/2021/11/05/2018年美亚杯团赛A部分-Linux取证/image-20211101152509554.png","903d29ac3b48b71ed3d78942eeb932c5"],["/2021/11/05/2018年美亚杯团赛A部分-Linux取证/image-20211101153329497.png","2c7525dd36b2fb5f66561145e49950c1"],["/2021/11/05/2018年美亚杯团赛A部分-Linux取证/image-20211101153623896.png","98e0e45f35f6ba48a05913a86ae7fab6"],["/2021/11/05/2018年美亚杯团赛A部分-Linux取证/index.html","e83cf50b4d1a07a9809b366a24238982"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/Screenshot_2.png","f5b05267f67e9a7cc55c2fbde91d0781"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211101154257809.png","e662ba43b3abf3ac9eae29abb3c9a74d"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103091934817.png","87ee45fe12b1e3fc5fbea7f889361115"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103093240473.png","811d1cc570dd6b3a27c55fc93d785142"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103093456354.png","c22da011b08fc97b11d29e5d65025b33"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103093605659.png","f54faee706d8e887f0f631e728883344"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103093957786.png","eb56b60fcf075a435972d71934a785b0"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103094303194.png","cbecd46dd1a6b280ee01b619f50a1bed"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103094622176.png","c56cbb69fcbe01a2995c67ac9af92415"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103094822727.png","c56cbb69fcbe01a2995c67ac9af92415"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103095113319.png","6b526e38854b94c418f19cda72660697"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103095329563.png","2a1b8157fb8379a479af04d924ecee99"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103095433044.png","bd24a3fc3975670397a7c49c8dc4c8fd"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103095840826.png","49cb7d25908b0be331c4a94e02ae9114"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103100755337.png","6da3e83224cb434820fc868f7513377d"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103101251134.png","d336d8524fd5071a84ed0ed1670dae0a"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103101954711.png","0c401d45dcba94bd6d5576ae14a93224"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103132248691.png","097a69a19b621c2840c335eddb515166"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103132544490.png","1a639242a495ef9d25fb69ce65b20595"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103133451292.png","f08afba3dfbd0ee6ffec5554bbcf870f"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103135908425.png","8f7df6b0e5882a1feaea54bd59224618"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103141954844.png","542185dfb4254f5edfa6d471f800f04c"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103143056256.png","2bdc07a36ded0eb85527eb35cadb2565"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103144508450.png","e5ce1414602d26f2056c0e4484c74ae3"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103152020236.png","57edd22b7acee9cffb01822875c527d0"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103153123103.png","6e52ed295a76d6ba4cb680ab146b0c44"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103153318046.png","268180a3610d131f0f394ae9a7b2572c"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103153521441.png","4194ba7833785208ca1bbbc418f3945a"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103154108698.png","3e4d9e976ace2c56434d371239400f3e"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103155602726.png","fb511b42346aa03951b348888e6b1294"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103161844676.png","c1a5a92e805020ce99251d4d0e854fb1"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103162230199.png","b0d63e8971bc8c83480ff74d79fd8571"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103191657973.png","d441b5a26178cb8274abae6ad8e3334c"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103194829624.png","784fddd1836b9153891275a9fcaa992f"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103195211764.png","bf4a0fec40425656d6861ee134ef6684"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103200215868.png","6bf5a4a3dc3a04c39733e2b79b126138"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103200540775.png","6c19cccf1261f4da037dc21275700943"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103202939472.png","1e9fc89268181c12fd08069ea8d343ba"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103205526173.png","bf73c5f1e339562e1ec2c0172e998812"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/image-20211103210231182.png","a78d665c1273d65b0826215847a665b4"],["/2021/11/05/2018年美亚杯团赛B部分-计算机取证/index.html","9ce70d7bffa03c33ab15c4df26005dbc"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103091934817.png","87ee45fe12b1e3fc5fbea7f889361115"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103093240473.png","811d1cc570dd6b3a27c55fc93d785142"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103093456354.png","c22da011b08fc97b11d29e5d65025b33"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103093605659.png","f54faee706d8e887f0f631e728883344"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103093957786.png","eb56b60fcf075a435972d71934a785b0"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103094303194.png","cbecd46dd1a6b280ee01b619f50a1bed"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103094622176.png","c56cbb69fcbe01a2995c67ac9af92415"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103094822727.png","c56cbb69fcbe01a2995c67ac9af92415"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103095113319.png","6b526e38854b94c418f19cda72660697"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103095329563.png","2a1b8157fb8379a479af04d924ecee99"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103095433044.png","bd24a3fc3975670397a7c49c8dc4c8fd"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103095840826.png","49cb7d25908b0be331c4a94e02ae9114"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103100755337.png","6da3e83224cb434820fc868f7513377d"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103101251134.png","d336d8524fd5071a84ed0ed1670dae0a"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103101954711.png","0c401d45dcba94bd6d5576ae14a93224"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103132248691.png","097a69a19b621c2840c335eddb515166"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103132544490.png","1a639242a495ef9d25fb69ce65b20595"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103133451292.png","f08afba3dfbd0ee6ffec5554bbcf870f"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103135908425.png","8f7df6b0e5882a1feaea54bd59224618"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103141954844.png","542185dfb4254f5edfa6d471f800f04c"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103143056256.png","2bdc07a36ded0eb85527eb35cadb2565"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103144508450.png","e5ce1414602d26f2056c0e4484c74ae3"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103152020236.png","57edd22b7acee9cffb01822875c527d0"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103153123103.png","6e52ed295a76d6ba4cb680ab146b0c44"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103153318046.png","268180a3610d131f0f394ae9a7b2572c"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103153521441.png","4194ba7833785208ca1bbbc418f3945a"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103154108698.png","3e4d9e976ace2c56434d371239400f3e"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103155602726.png","fb511b42346aa03951b348888e6b1294"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103161844676.png","c1a5a92e805020ce99251d4d0e854fb1"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103162230199.png","b0d63e8971bc8c83480ff74d79fd8571"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103191657973.png","d441b5a26178cb8274abae6ad8e3334c"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103194829624.png","784fddd1836b9153891275a9fcaa992f"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103195211764.png","bf4a0fec40425656d6861ee134ef6684"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103200215868.png","6bf5a4a3dc3a04c39733e2b79b126138"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103200540775.png","6c19cccf1261f4da037dc21275700943"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103202939472.png","1e9fc89268181c12fd08069ea8d343ba"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103205526173.png","bf73c5f1e339562e1ec2c0172e998812"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103210231182.png","a78d665c1273d65b0826215847a665b4"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103211103520.png","d1f414014056ef6100b721a10c3a9f44"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103212609489.png","04219db734f046293281ff0f585ccce2"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103214706015.png","45925aa4881d80122a71ff87ed837326"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103215802226.png","97b08f7188f0fa94a036b06700d4ec3c"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103215915799.png","81e8d63ab446672327f7ebb9577dda61"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103220049590.png","2f9285f5fdb6e6b4d5bf724dbaf2996a"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103220232726.png","cb82280f496d7da974b0b343b1ed9e6b"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103220445725.png","7e8143fe7afe701d8b081402f1716999"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103220455203.png","6a0fd363473a82d2387e109e9a557ec5"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103220932167.png","e1d201af092c6844b69eb5464c54c8e2"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103221355934.png","14f8f0f8a4e048addcd35d39054d66f6"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103221608208.png","b0db7488d25b5c5a407a700846170223"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103222605463.png","9ca408620919f45c4c4c20fa5ffb6944"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103222814969.png","e9a41862386f4b0afbf2732b1b02b2fd"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103230518531.png","e5e7cec544f92d0f7da14306ced662cc"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103231653948.png","20af758b4d4abe6c5f66abe1cbc118e5"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/image-20211103231737278.png","17b3def7d3b60a49176a6561c685d8f0"],["/2021/11/05/2018年美亚杯团赛C部分-服务器取证/index.html","d1f4d899a62c596d372b0e9d9f773482"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211103212609489.png","04219db734f046293281ff0f585ccce2"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211103231854024.png","ef86ed72d6dd54227e521290cdffb8e0"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211103232432287.png","18b1667ea4f500e77b7ed93ef13afbcb"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104080246769.png","28b391309cdeed515d62da3cd4de99c7"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104080432358.png","5fa6a11991a0cbd464069017ae913f11"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104081521138.png","c6d1d9321201792559548870ab77ffaf"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104083934309.png","ca824510c7081894dfe8961f03639678"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104084520282.png","2c986b3d653aa616177a29654b49e350"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104085037033.png","28f8554c9c3591e6a95b82992ae92591"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104085211292.png","f6d9c665199a816ceaef13fc6553a4c8"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104085454338.png","0fbeced2a718d3983ce8a3b40a8eed4f"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104090032976.png","29a040cd0b1dbd559bc83f100e3e1cfb"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104090209211.png","ec69f95d4129f5b9fc648556ef0ca38e"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104091256220.png","8d5329f27ce81d3a94a00162baa89606"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104091617009.png","dd0f493eb5b22367f7b5264f0e4d4e79"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104092809114.png","0123568b4199daa1ef171773c4dcf825"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104092830518.png","0123568b4199daa1ef171773c4dcf825"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104092838205.png","915f8bbde84d6f52b070fd259bd82aac"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104093322336.png","fdb41a7ccccf5a483bf1d7e93c393e59"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104094123044.png","c7e80de3f7fcea3b3a13eac2feb18f2f"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104094306447.png","a4ac3668e0f36ac819be51b22b288579"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104095857258.png","e018240d9a8fdb097deb8c74e587d1aa"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104135218437.png","3c76e6dc778215546df27e3275280fd6"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104140115583.png","1485690fa9ab80cec55e9d6c0c09ab61"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104141004017.png","e1048d97eee0f83f992a7e69ef8a1c69"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104142033385.png","5c096d1de97f11e650e226e731ae1fed"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104142117882.png","3cf223122172a5287701f9e4a722438c"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104142224795.png","b65fd3ab48cea12749fd73beae4617d9"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104142709004.png","a75259915ce0950f0ebf5db51a7448e6"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/image-20211104144207504.png","7dd6f6117fa1e6a87cc930a75299870b"],["/2021/11/05/2018年美亚杯团赛D部分-Raid重组/index.html","b53f3660f6604e7b3e6ebbeaa1796299"],["/2021/11/11/kali渗透测试-kioptrix-level1/image-20211116170922006.png","271de16c42c64d9f512123e0df52a6c1"],["/2021/11/11/kali渗透测试-kioptrix-level1/image-20211116171452457.png","3455d7f082ba9c7e3b8515783659dc65"],["/2021/11/11/kali渗透测试-kioptrix-level1/image-20211116194318519.png","c0273bd5e875024cee37f2c2941980c7"],["/2021/11/11/kali渗透测试-kioptrix-level1/image-20211116194514555.png","a4028d41763b5ca9cc6c0240c28b79f8"],["/2021/11/11/kali渗透测试-kioptrix-level1/image-20211116194639299.png","ed97996e7f4e13a9d4b9efc2dc496223"],["/2021/11/11/kali渗透测试-kioptrix-level1/image-20211116194843276.png","86a789ac15d48669cc9a09eca7cf0ff3"],["/2021/11/11/kali渗透测试-kioptrix-level1/image-20211116194946599.png","ae684504060be73d4061654c7d832a91"],["/2021/11/11/kali渗透测试-kioptrix-level1/image-20211116195242736.png","33491fda37ee2873c4b16781cbefffcc"],["/2021/11/11/kali渗透测试-kioptrix-level1/image-20211116195648296.png","8efeba30cdc0af743788c8e6142b4167"],["/2021/11/11/kali渗透测试-kioptrix-level1/image-20211116195839060.png","410f4858ca78d8af830b8351214398e1"],["/2021/11/11/kali渗透测试-kioptrix-level1/image-20211116200458866.png","b801519f6c18feade21e577e30776882"],["/2021/11/11/kali渗透测试-kioptrix-level1/image-20211116200549150.png","437d4212ea1972ab4bc8616e65cf270b"],["/2021/11/11/kali渗透测试-kioptrix-level1/image-20211116200636668.png","b9bded5003393838e7d4388ad566f3f0"],["/2021/11/11/kali渗透测试-kioptrix-level1/index.html","b3beb45b83a51f10d3086db01c3d90ab"],["/2021/11/14/永恒之蓝复现/image-20211115094850172.png","52751e570975982e9b677983e38e63dd"],["/2021/11/14/永恒之蓝复现/image-20211115094951540.png","65a5c845d1b047de24e69b22de50fe1c"],["/2021/11/14/永恒之蓝复现/image-20211115095714402.png","6f80acbe282f084c3262351c2107eb42"],["/2021/11/14/永恒之蓝复现/image-20211115100033371.png","337749b8c23adb80c9c43e6de7f6b6d5"],["/2021/11/14/永恒之蓝复现/image-20211115100738467.png","767965868ec38c0ec0cea08527263b88"],["/2021/11/14/永恒之蓝复现/image-20211115100842320.png","6b529ee9d980fd9c693cfcd56db9efcc"],["/2021/11/14/永恒之蓝复现/image-20211115101231836.png","27a25d4a04f2ad1298aa44b49f06acb9"],["/2021/11/14/永恒之蓝复现/image-20211115101814422.png","3f55d9e5eac18f136414469636e566ba"],["/2021/11/14/永恒之蓝复现/image-20211115102155153.png","52146a2b072a66d3061a66b97eb1868b"],["/2021/11/14/永恒之蓝复现/image-20211115102610121.png","a616b7706b9d2e7fc534b924825c2ce3"],["/2021/11/14/永恒之蓝复现/image-20211115102813068.png","0cb72314ff6bbc255efe708d2a26e3ea"],["/2021/11/14/永恒之蓝复现/image-20211115104027060.png","be28a078215d0810170d656314b6cda3"],["/2021/11/14/永恒之蓝复现/image-20211115104041763.png","ca9755622492dcefed40425256de1d63"],["/2021/11/14/永恒之蓝复现/image-20211115104411116.png","8436458032ce0c1d1837e42a0609c037"],["/2021/11/14/永恒之蓝复现/image-20211115142326527.png","4bf3eecead8b855abb004ad9560334a2"],["/2021/11/14/永恒之蓝复现/image-20211115142740943.png","f5fc9674be5d12de5d5ab7d41fa7b91b"],["/2021/11/14/永恒之蓝复现/index.html","aa4623ed1b5439087f5fa4047213c9b9"],["/2021/11/19/kali渗透测试-kioptrix-level2/image-20211119202703153.png","bd9edea2b85213e1947491e2f52ee4ba"],["/2021/11/19/kali渗透测试-kioptrix-level2/image-20211119202921849.png","abd7490cbe97971f5c3fc398150f0ac0"],["/2021/11/19/kali渗透测试-kioptrix-level2/image-20211119210317835.png","d49de5659971a04cd44bf8006dc8b8d7"],["/2021/11/19/kali渗透测试-kioptrix-level2/image-20211119210517946.png","38e4a92e6acfc4adee9fdab5c67f74fe"],["/2021/11/19/kali渗透测试-kioptrix-level2/image-20211119222232676.png","429d15d255a63dc9f9f942d49a60cad0"],["/2021/11/19/kali渗透测试-kioptrix-level2/image-20211119222955203.png","7864a528e390d4973a2f20ca6ed895cc"],["/2021/11/19/kali渗透测试-kioptrix-level2/image-20211119225004286.png","fd894442bd1a126d6ed08551317cbe55"],["/2021/11/19/kali渗透测试-kioptrix-level2/image-20211119225044722.png","cd7e27982a9ac4e13926e20bd4afc1d4"],["/2021/11/19/kali渗透测试-kioptrix-level2/image-20211119232957792.png","543a1a15b7aa1d3a59fe4e65b85160b8"],["/2021/11/19/kali渗透测试-kioptrix-level2/image-20211119233227419.png","164124ba674cf2e89aaf1ffa590ae0b3"],["/2021/11/19/kali渗透测试-kioptrix-level2/image-20211119235838484.png","ef90b9a42beb00ac5f439663cb66d980"],["/2021/11/19/kali渗透测试-kioptrix-level2/index.html","8664cf52c2fb891003ff3d184c57ee4b"],["/404.html","d94b7852019ee037aac4a49dff4a80a3"],["/archives/2021/10/index.html","4abed7ad836f136001113d720c3b60a2"],["/archives/2021/11/index.html","bd04cd6e39c2ed80601c917676108005"],["/archives/2021/index.html","fc0b17c7e22b1c09dc6dfe9aac4559f0"],["/archives/2021/page/2/index.html","cc8a79fc51f7ea4c4b33f483c57d068e"],["/archives/index.html","4175c9d164229001547f1147fb6cdc80"],["/archives/page/2/index.html","776a61de57d17d83e4df8dee38bf02ab"],["/categories/hexo/index.html","1455456f7189a237c38084f7775923c8"],["/categories/index-1.html","d2d4d4982cb38411173b8e2b96260fe4"],["/categories/区块链/index.html","ad6045d4cb308d6504699c0a5c68a4d1"],["/categories/取证/index.html","eb45c9b33e27121a888f21e0f0825420"],["/categories/渗透测试/index.html","4ca0116fb697af5509b7faabeff80432"],["/css/all.css","f9c762edbb109b610d0944c30babb515"],["/css/animate.css","dd31ab63f019867987fe3b0dec169ba9"],["/css/animsition.min.css","a0204d98578f4849e58b69688f9c950f"],["/css/bootstrap.min.css","cf22a64d2b4b5db8f79f57a928ed0a92"],["/css/custom.css","76d1e52466833e5055331b11f304111d"],["/css/flexslider.css","150ea42b481aa9e497cbdce184277b50"],["/css/iconList.css","1c338ae864186364b70040571ee15f28"],["/css/ie8.css","b45b6ec10fee9447980b3f8d6efbfe3e"],["/css/screen.css","d5835fc7cb073a51d33eb8cb54e90b1c"],["/css/slidebars.min.css","996e0520b43ec692aca841b1aa4d052c"],["/css/style.css","2c8425f5a1094be0f201ce912b792e03"],["/css/syntax.css","d85c8c00a077c6c0c0094a0a393e5b21"],["/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/fancybox/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/fancybox/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/fonts/icons.eot","5b412b69a56cfe6e3380844419830d81"],["/fonts/icons.svg","8c24200901c66553cb876ad9948baf6c"],["/fonts/icons.ttf","4212c5a12a2d90c50f104c067ec632b6"],["/fonts/icons.woff","240623f03517e946a1dff2d22779cecd"],["/fonts/opensans.woff","316188e1f4aa01ff883901d19fb3a368"],["/highlightjs/arta.css","411a0016a0afcc40d6ba1a9215d224eb"],["/highlightjs/ascetic.css","29d8acdf168bdfab5f65017d97e44f2e"],["/highlightjs/brown_paper.css","2095be0391b3f191156f8c9c63a096c1"],["/highlightjs/brown_papersq.png","82cd9f5d6e9f0e3f3de24eaab6671d88"],["/highlightjs/dark.css","b8a60f0e8e78d13aac6acb05b78212c2"],["/highlightjs/default.css","1cc4c0f3321e5c58b3d5e2315a64026f"],["/highlightjs/docco.css","bf1839c704d00fdabf9cfe8ca29e85e2"],["/highlightjs/far.css","61d9fe8d695f447fb57b45958b0ddc73"],["/highlightjs/foundation.css","bc612d5ce8099a3db32265e312a105fa"],["/highlightjs/github.css","5de6fcb81cc7459ca8f33c3497eeeacb"],["/highlightjs/googlecode.css","fdb631b28e53a2030df9f7a703886dac"],["/highlightjs/idea.css","ce194f47da7b964abb9b223c7e0d3c08"],["/highlightjs/ir_black.css","52c475b3950fec315bff3a1e7c80762b"],["/highlightjs/magula.css","dc4bab48dabd56addf42220e0290d77c"],["/highlightjs/mono-blue.css","46c094eec6ebc59fb605bd07576a9d4d"],["/highlightjs/monokai.css","3bb49af9b5e545a98b0d1908745ca1d6"],["/highlightjs/monokai_sublime.css","8527568e28da29f09f098f24b47b13e2"],["/highlightjs/obsidian.css","384eb348df48ebeabce9e1bb623289f8"],["/highlightjs/pojoaque.css","705097869808fb9de96f2a1d1a0b1247"],["/highlightjs/pojoaque.jpg","8c391d520d67f644c146dcfaee1eb25f"],["/highlightjs/railscasts.css","7105469846f7f2a8b0664b8b67fd27c9"],["/highlightjs/rainbow.css","82c1684a70956cd7b10aca56b982e9f2"],["/highlightjs/school_book.css","edf00d604bc8415e39e3a9b6f3ebfc3e"],["/highlightjs/school_book.png","069f91d8694b98ca01fb750760f1563d"],["/highlightjs/solarized_dark.css","02cac686e543860a0ef31575e18f3b60"],["/highlightjs/solarized_light.css","708e0c11d9213f94d1ae1ef9306cff0e"],["/highlightjs/sunburst.css","4f693ba80534df1b540c1a48d2b6bf47"],["/highlightjs/tomorrow-night-blue.css","bb2ed03b7814daf02f59bc1c114889a0"],["/highlightjs/tomorrow-night-bright.css","79f82881cbc0a7b42211650bda9c4f9b"],["/highlightjs/tomorrow-night-eighties.css","551367fc79094f785cdc55ef5447c386"],["/highlightjs/tomorrow-night.css","10ee278d5619c579cd6401f840c90e05"],["/highlightjs/tomorrow.css","448d2f6cdd4c1c90843ba6ccdc8460b6"],["/highlightjs/vs.css","e76ad5f1f0f3cb65f92a6c24201c6092"],["/highlightjs/xcode.css","4d1f4dd74870bddcfeed06da8a432e2f"],["/highlightjs/zenburn.css","4392b536ac04ae13c16f4ce1dc706542"],["/img/bg_img.jpg","3c3b3452cdfe99c2a70edde7db65eff0"],["/img/blog.png","b0b7fbfcb16da8e42a0a9a79a018813b"],["/img/close.png","1c593ab3eb11fb1bb87d35d85180cd90"],["/img/favicon.png","336d61dc5ffed565f9f6c1a501a90f46"],["/img/logo.png","336d61dc5ffed565f9f6c1a501a90f46"],["/index.html","9c475d38f01619ef20489c09c7ee14d4"],["/js/html5shiv.min.js","3044234175ac91f49b03ff999c592b85"],["/js/jquery-1.11.1.min.js","8101d596b2b8fa35fe3a634ea342d7c3"],["/js/jquery.ajaxchimp.min.js","0e992843aa227b7b767c659f293b7dcb"],["/js/jquery.flexslider-min.js","9ec3c315b67f434aabc4da58eabc6c3a"],["/js/plugins.min.js","492f6be6451e27256deb4ba54c9adc55"],["/js/respond.min.js","afc1984a3d17110449dc90cf22de0c27"],["/js/scripts.js","62ab71a9a5c563edce32ecd7644f94d7"],["/js/ziploader.js","1a16cac4a12aa673415240c08ea34f29"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","29b5de5d778029a614e99453969759ff"],["/sw-register.js","a03dc57417ace22fe73e256e0c9b00dd"],["/tags/Linux/index.html","e5761ea5c9280af1986afc26cc676343"],["/tags/Raid重组/index.html","e35f91594e01fd7c00676b874389d080"],["/tags/index.html","98b042ec8e038cff993de9248e93ba2e"],["/tags/kali/index.html","cf33c3247a5cfc4d502348ce103c2009"],["/tags/内存取证/index.html","ad2ac19a5fc016f30cf9c76bb3ae5d7e"],["/tags/区块链/index.html","52dbd27081c064bca09d45d2e154fe83"],["/tags/博客搭建/index.html","deef2bb04c51a93e22e634a0df4a84a9"],["/tags/取证/index.html","2307438aae88c64388c09bbccbc7c6b1"],["/tags/服务器/index.html","667d7223ff6eef5c2407c29c0521350a"],["/tags/渗透测试/index.html","c2f825c5e6e6d3a17cde71d149b4c848"],["/tags/美亚取证/index.html","4605524af5f034939b0ca365db2d0527"],["/tags/计算机/index.html","9de9e7db5297103dd2de3cb084a009b9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
