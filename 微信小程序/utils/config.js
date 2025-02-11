const miniappName = "林风社交论坛"; //分享时的标题
const shareH5Url = "https://www.linfeng.tech/#/"; //H5分享路径


//本地环境配置
const baseUrl = "localhost:9090";
const domain = 'http://' + baseUrl + "/"; 

//线上环境配置
// const baseUrl = "";
// const domain = 'https://' + baseUrl + "/app/";




export default {
	baseUrl: baseUrl,
	domain: domain,
	miniappName: miniappName,
	shareH5Url: shareH5Url
}
