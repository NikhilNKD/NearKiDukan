const dummyData = [
    {
        id: 1,
        name: 'Store Abcd',
        shopID: '001',
        location: 'Location A',
        deliveryAvailable: true,
        pincode: '1234',
		image: require('../../../assets/image.jpg'),
    },
    {
        id: 2,
        name: 'Store B',
        shopID: '002',
        location: 'Location B',
        deliveryAvailable: false,
        pincode: '1234',
		image: require('../../../assets/image.jpg'),
    },
    {
        id: 3,
        name: 'Store C',
        shopID: '003',
        location: 'Location C',
        deliveryAvailable: true,
        pincode: '1234',
        image: require('../../../assets/image.jpg'),
    },
    {
        id: 4,
        name: 'Store D',
        shopID: '004',
        location: 'Location D',
        deliveryAvailable: true,
        pincode: '4321', // New pin code
        image: require('../../../assets/image.jpg'),
    },
    {
        id: 5,
        name: 'Store E',
        shopID: '005',
        location: 'Location E',
        deliveryAvailable: false,
        pincode: '4321', // New pin code
        image: require('../../../assets/image.jpg'),
    },
    {
        id: 6,
        name: 'Store F',
        shopID: '006',
        location: 'Location F',
        deliveryAvailable: true,
        pincode: '151', // New pin code
		image: require('../../../assets/image.jpg'),
    },
    {
        id: 7,
        name: 'Store G',
        shopID: '006',
        location: 'Location F',
        deliveryAvailable: true,
        pincode: '151', // New pin code
		image: require('../../../assets/image.jpg'),
    },
    {
        id: 8,
        name: 'Store H',
        shopID: '006',
        location: 'Location F',
        deliveryAvailable: true,
        pincode: '151', // New pin code
		image: require('../../../assets/image.jpg'),
    },
    {
        id: 9,
        name: 'Store I',
        shopID: '006',
        location: 'Location F',
        deliveryAvailable: true,
        pincode: '151', // New pin code
		image: require('../../../assets/image.jpg'),
    },
    {
        id: 10,
        name: 'Store J',
        shopID: '006',
        location: 'Location F',
        deliveryAvailable: true,
        pincode: '151', // New pin code
		image: require('../../../assets/image.jpg'),
    },
    {
        id: 11,
        name: 'Store K',
        shopID: '006',
        location: 'Location F',
        deliveryAvailable: true,
        pincode: '151', // New pin code
        image: require('../../../assets/image.jpg'),
    },
    {
        id: 12,
        name: 'Store L',
        shopID: '006',
        location: 'Location F',
        deliveryAvailable: true,
        pincode: '151', // New pin code
        image: require('../../../assets/image.jpg'),
    },
    {
        id: 13,
        name: 'Store M',
        shopID: '006',
        location: 'Location F',
        deliveryAvailable: true,
        pincode: '151', // New pin code
        image: require('../../../assets/image.jpg'),
    },
    {
        id: 14,
        name: 'Store N',
        shopID: '006',
        location: 'Location F',
        deliveryAvailable: true,
        pincode: '151', // New pin code
		image: require('../../../assets/image.jpg'),
    },
    {
        id: 15,
        name: 'Store O',
        shopID: '006',
        location: 'Location F',
        deliveryAvailable: true,
        pincode: '151', // New pin code
		image: require('../../../assets/image.jpg'),
    },
	{
        id: 16,
        name: 'Store C',
        shopID: '003',
        location: 'Location C',
        deliveryAvailable: true,
        pincode: '1234',
        image: require('../../../assets/image.jpg'),
    },
	{
        id: 17,
        name: 'Store C',
        shopID: '003',
        location: 'Location C',
        deliveryAvailable: true,
        pincode: '1234',
        image: require('../../../assets/image.jpg'),
    },
	{
        id: 18,
        name: 'Store C',
        shopID: '003',
        location: 'Location C',
        deliveryAvailable: true,
        pincode: '1234',
        image: require('../../../assets/image.jpg'),
    },
	{
        id: 19,
        name: 'Store C',
        shopID: '003',
        location: 'Location C',
        deliveryAvailable: true,
        pincode: '1234',
        image: require('../../../assets/image.jpg'),
    },
	
	{
        id: 20,
        name: 'Store C',
        shopID: '003',
        location: 'Location C',
        deliveryAvailable: true,
        pincode: '1234',
        image: require('../../../assets/image.jpg'),
    },
	{
        id: 21,
        name: 'Store C',
        shopID: '003',
        location: 'Location C',
        deliveryAvailable: true,
        pincode: '1234',
        image: require('../../../assets/image.jpg'),
    },
	{
        id: 22,
        name: 'Store C',
        shopID: '003',
        location: 'Location C',
        deliveryAvailable: true,
        pincode: '1234',
        image: require('../../../assets/image.jpg'),
    },
	
	{
        id: 23,
        name: 'Store C',
        shopID: '003',
        location: 'Location C',
        deliveryAvailable: true,
        pincode: '1234',
        image: require('../../../assets/image.jpg'),
    },
	{
        id: 24,
        name: 'Store C',
        shopID: '003',
        location: 'Location C',
        deliveryAvailable: true,
        pincode: '1234',
        image: require('../../../assets/image.jpg'),
    },
	{
        id: 25,
        name: 'Store C',
        shopID: '003',
        location: 'Location C',
        deliveryAvailable: true,
        pincode: '4321',
        image: require('../../../assets/image.jpg'),
    },
	{
        id: 26,
        name: 'Store C',
        shopID: '003',
        location: 'Location C',
        deliveryAvailable: true,
        pincode: '4321',
        image: require('../../../assets/image.jpg'),
    },
	{
        id: 27,
        name: 'Store B',
        shopID: '002',
        pincode: '4321',
        location: 'Location B',
        deliveryAvailable: false,
        image: require('../../../assets/image.jpg'),
    },
	
	
	{
        id: 28,
        name: 'Store B',
        shopID: '002',
        location: 'Location B',
        deliveryAvailable: false,
        pincode: '4321',
		image: require('../../../assets/image.jpg'),
    },
	{
        id: 29,
        name: 'Store B',
        shopID: '002',
        location: 'Location B',
        deliveryAvailable: false,
        pincode: '4321',
		image: require('../../../assets/image.jpg'),
    },
	{
        id: 30,
        name: 'Store B',
        shopID: '002',
        location: 'Location B',
        deliveryAvailable: false,
        pincode: '4321',
        image: require('../../../assets/image.jpg'),
    },
	{
        id: 31,
        name: 'Store B',
        shopID: '002',
        location: 'Location B',
        deliveryAvailable: false,
        pincode: '4321',
        image: require('../../../assets/image.jpg'),
    },
	{
        id: 32,
        name: 'Store B',
        shopID: '002',
        location: 'Location B',
        deliveryAvailable: false,
        pincode: '4321',
        image: require('../../../assets/image.jpg'),
    },
	{
        id: 33,
        name: 'Store B',
        shopID: '002',
        location: 'Location B',
        deliveryAvailable: false,
        pincode: '1234',
        image: require('../../../assets/image.jpg'),
    },
	{
        id: 34,
        name: 'Store B',
        shopID: '002',
        location: 'Location B',
        deliveryAvailable: false,
        pincode: '1234',
        image: require('../../../assets/image.jpg'),
    },
	{
        id: 35,
        name: 'Store B',
        shopID: '002',
        location: 'Location B',
        deliveryAvailable: false,
        pincode: '1234',
		image: require('../../../assets/image.jpg'),
    },
	
    // Add more stores as needed
];

export default dummyData;