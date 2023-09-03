// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 17,
		title: '多级域部署设计分析报告',
		category: 'WEB设计',
		img: "http://img.leozhou.xyz/picGo/202309031856194.png",
		dataImgs: [
			"http://img.leozhou.xyz/picGo/%E3%80%90%E4%BB%BB%E8%81%8C%E3%80%91%E5%A4%9A%E7%BA%A7%E5%9F%9F%E9%83%A8%E7%BD%B2%E8%AE%BE%E8%AE%A1%E5%88%86%E6%9E%90%E6%8A%A5%E5%91%8A.png"
		]
	},
	{
		id: 16,
		title: '交互视觉稿',
		category: 'WEB设计',
		img: "http://img.leozhou.xyz/picGo/202309031856194.png",
		dataImgs: [
			"http://img.leozhou.xyz/picGo/20180503_%E4%BA%A4%E4%BA%92%E8%A7%86%E8%A7%89%E7%A8%BF111.png"
		]
	},
	{
		id: 15,
		title: '告警模块设计创新点举例说明',
		category: 'WEB设计',
		img: "http://img.leozhou.xyz/picGo/202309031856194.png",
		dataImgs: [
			
		],
		dataPdf:'/files/Innovation_in_alarm_module_design.pdf'
	},
	{
		id: 14,
		title: '监控告警竞品分析',
		category: 'WEB设计',
		img: "http://img.leozhou.xyz/picGo/202309031856194.png",
		dataImgs: [
			
		],
		dataPdf:'/files/Monitoring_alarm_competition_analysis.pdf'
	},
	{
		id: 13,
		title: '监控模块设计创新点举例说明',
		category: 'WEB设计',
		img: "http://img.leozhou.xyz/picGo/202309031856194.png",
		dataImgs: [
			
		],
		dataPdf:'/files/Monitoring_module_design_innovation_points_are_illustrated.pdf'
	},
	{
		id: 12,
		title: '监控模块设计说明',
		category: 'WEB设计',
		img: "http://img.leozhou.xyz/picGo/202309031856194.png",
		dataImgs: [
			"http://img.leozhou.xyz/picGo/%E7%9B%91%E6%8E%A7%E6%A8%A1%E5%9D%97%E8%AE%BE%E8%AE%A1%E8%AF%B4%E6%98%8E-%E6%9C%B1%E8%8F%81%E8%8F%81.png"
		]
	},
	{
		id: 11,
		title: '监控模块设计说明',
		category: 'WEB设计',
		img: "http://img.leozhou.xyz/picGo/202309031856194.png",
		dataImgs: [
			"http://img.leozhou.xyz/picGo/%E7%9B%91%E6%8E%A7%E6%A8%A1%E5%9D%97%E8%AE%BE%E8%AE%A1%E8%AF%B4%E6%98%8E-%E6%9C%B1%E8%8F%81%E8%8F%81.png"
		]
	},
	{
		id: 10,
		title: '软件版本管理设计说明',
		category: 'WEB设计',
		img: "http://img.leozhou.xyz/picGo/202309031856194.png",
		dataImgs: [
			"http://img.leozhou.xyz/picGo/%E8%BD%AF%E4%BB%B6%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86%E8%AE%BE%E8%AE%A1%E8%AF%B4%E6%98%8E.png"
		]
	},
	{
		id: 9,
		title: '数据库配置可用性测试分析',
		category: 'WEB设计',
		img: "http://img.leozhou.xyz/picGo/202309031858276.png",
		dataImgs: [
			// "http://img.leozhou.xyz/picGo/Hilight%E6%94%B9%E7%89%88%E8%AE%BE%E8%AE%A1%E8%AF%B4%E6%98%8E-%E6%9C%B1%E8%8F%81%E8%8F%81.png"
		],
		dataPdf: '/files/Database_configuration_usability_test_analysis.pdf'
	},
	{
		id: 8,
		title: 'Hilight改版设计说明',
		category: 'WEB设计',
		img: "http://img.leozhou.xyz/picGo/202309031716101.png",
		dataImgs: [
			"http://img.leozhou.xyz/picGo/Hilight%E6%94%B9%E7%89%88%E8%AE%BE%E8%AE%A1%E8%AF%B4%E6%98%8E-%E6%9C%B1%E8%8F%81%E8%8F%81.png"
		]
	},
	{
		id: 1,
		title: '运动社交类——约跑',
		category: 'APP设计',
		img: "http://img.leozhou.me//home1.png",
		dataImgs: [
			"http://img.leozhou.me/portfolio/detail/run-1.png",
			"http://img.leozhou.me/portfolio/detail/run-2.png"
		]
	},
	{
		id: 2,
		title: '保镖云防盗V2.0.0',
		category: 'UI设计',
		img: 'http://img.leozhou.me//home2.png',
		dataImgs: [
			"http://img.leozhou.me/portfolio/detail/2.png"
		]
	},
	{
		id: 3,
        img: 'http://img.leozhou.me//home3.png',
        title: 'Design项目管理平台',
        category: 'APP设计',
		dataImgs: [
			"http://img.leozhou.me/portfolio/detail/3.jpg"
		]
	},
	{
		id: 4,
        img: 'http://img.leozhou.me//home4.png',
        title: '每刻官网V1.0',
        category: 'WEB设计',
		dataImgs: [
			"http://img.leozhou.me/portfolio/detail/4.jpg"
		]
	},
	{
		id: 5,
        img: 'http://img.leozhou.me//home5.png',
        title: '线上BANNER规范',
        category: 'Banner规范设计',
		dataImgs: [
			"http://img.leozhou.me/portfolio/detail/5.png"
		]
	},
	{
		id: 6,
        img: 'http://img.leozhou.me//home6.png',
        title: '视觉绘制',
        category: '插画',
		dataImgs: [
			"http://img.leozhou.me/portfolio/detail/6-1.png"
		]
	},
	{
		id: 7,
        img: 'http://img.leozhou.me//home7.png',
        title: 'Ring Clean',
        category: '概念设计',
		dataImgs: [
			"http://img.leozhou.me/portfolio/detail/7.png"
		]
	},
];

export default projects;
