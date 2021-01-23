'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('resultRecipes',[
      {
        // id: '',
        foodImg: 'https://i.imgur.com/yBDYKij.jpg',
        foodName: '계란말이',
        link: 'https://www.youtube.com/watch?v=oTJEv1mL-Uc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodImg: 'https://i.imgur.com/RcPB4Lg.jpg',
        foodName: '계란볶음밥',
        link: 'https://www.youtube.com/watch?v=qUDEyONQaCA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodImg: 'https://i.imgur.com/g6dkqax.jpg',
        foodName: '스팸샌드위치',
        link: 'https://www.youtube.com/watch?v=Twrn4ZPrHkc',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodImg: 'https://i.imgur.com/U89ed7j.jpg',
        foodName: '스팸마요덮밥',
        link: 'https://www.youtube.com/watch?v=TkElH6dFhW8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodImg: 'https://i.imgur.com/MRENdfs.jpg',
        foodName: '치킨마요덮밥',
        link: 'https://www.youtube.com/watch?v=lyBvZqoTm1I',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodImg: 'https://i.imgur.com/qB6Ox9t.jpg',
        foodName: '두부조림',
        link: 'https://www.youtube.com/watch?v=4-T3G_b4QKo',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodImg: 'https://i.imgur.com/oVmADMs.jpg',
        foodName: '고추장불고기',
        link: 'https://www.youtube.com/watch?v=bQDQXAQxO6A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodImg: 'https://i.imgur.com/TzfPmtA.jpg',
        foodName: '김치찌개',
        link: 'https://www.youtube.com/watch?v=3-rX2Pwvsh8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodImg: 'https://i.imgur.com/w1WsYyw.jpg',
        foodName: '감자전',
        link: 'https://www.youtube.com/watch?v=jQU-a4pHMlA',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodImg: 'https://i.imgur.com/J3RMOq5.jpg',
        foodName: '해쉬브라운',
        link: 'https://www.youtube.com/watch?v=0tJW5BUS5hM',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodImg: 'https://i.imgur.com/tgpIWMa.jpg',
        foodName: '김치전',
        link: 'https://www.youtube.com/watch?v=V2TBTOf5hBM&list=PL88CEP-8JWFDCQ0pyvepo0JexIGlyTNEf&index=58',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodImg: 'https://i.imgur.com/ryOIndN.jpg',
        foodName: '참치주먹밥',
        link: 'https://www.youtube.com/watch?v=H74yShpa9ow&list=PL88CEP',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        foodImg: 'https://i.imgur.com/Qdgt2ln.png',
        foodName: '배달의 민족',
        link: 'https://www.baemin.com/?NaPm=ct%3Dkja4c28m%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3D%7Chk%3Dace82911e9f8aad6a7a417440489c0f1145ff071',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('resultRecipes', null, {});
  }
};
