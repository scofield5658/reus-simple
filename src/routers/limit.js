export default [
  {
    path: '/limit',
    method: 'get',
    controller: require('../controllers/limit').default,
    speed_limit: {
      type: 'memory',
      max: 5,
      duration: 5, // seconds
      errmsg: '自定义限速提示',
    }
  },
];
