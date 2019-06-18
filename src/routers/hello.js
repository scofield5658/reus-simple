export default [
  {
    path: '/hello',
    method: 'get',
    controller: require('../controllers/hello').default,
    middlewares: [require('../middlewares/hello.mid').default],
  },
];
