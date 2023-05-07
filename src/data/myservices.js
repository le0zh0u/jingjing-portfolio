// myservices data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const myservices = [
	{
		id: 1,
		title: 'UI/UX',
		content: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying',
		img: require('@/assets/images/myservice/myservice-ui.png'),
	},
	{
		id: 2,
		title: '设计规范',
		content: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying',
		img: require('@/assets/images/myservice/myservice-guide.png'),
	},
	{
		id: 3,
		title: '经验分享',
		content: 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying',
		img: require('@/assets/images/myservice/myservice-share.png'),
	},
];

export default myservices;
