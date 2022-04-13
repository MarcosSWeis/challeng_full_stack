"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        firstName: "Dulsea",
        lastName: "Hannis",
        email: "dhannis0@quantcast.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "dhannis0",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        firstName: "Wallie",
        lastName: "Grigori",
        email: "wgrigori1@weebly.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "wgrigori1",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        firstName: "Krissy",
        lastName: "Umpleby",
        email: "kumpleby2@zdnet.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "kumpleby2",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        firstName: "Elena",
        lastName: "Gabler",
        email: "egabler3@umich.edu",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "egabler3",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        firstName: "Ilyse",
        lastName: "Hazelton",
        email: "ihazelton4@com.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "ihazelton4",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        firstName: "Jerald",
        lastName: "Isacoff",
        email: "jisacoff5@springer.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "jisacoff5",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        firstName: "Sonja",
        lastName: "Fleet",
        email: "sfleet6@deliciousdays.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "sfleet6",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        firstName: "Elyssa",
        lastName: "Haberjam",
        email: "ehaberjam7@bloomberg.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "ehaberjam7",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        firstName: "Tate",
        lastName: "De Launde",
        email: "tdelaunde8@goo.ne.jp",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "tdelaunde8",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10,
        firstName: "Jordanna",
        lastName: "Strelitz",
        email: "jstrelitz9@fema.gov",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "jstrelitz9",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 11,
        firstName: "Dewie",
        lastName: "Stocker",
        email: "dstockera@loc.gov",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "dstockera",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 12,
        firstName: "Amandi",
        lastName: "Hopkins",
        email: "ahopkinsb@csmonitor.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "ahopkinsb",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 13,
        firstName: "Ruperta",
        lastName: "Giovanetti",
        email: "rgiovanettic@paypal.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "rgiovanettic",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 14,
        firstName: "Dorree",
        lastName: "Muckian",
        email: "dmuckiand@artisteer.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "dmuckiand",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 15,
        firstName: "Hal",
        lastName: "Barwick",
        email: "hbarwicke@jigsy.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "hbarwicke",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 16,
        firstName: "Alexandro",
        lastName: "Addey",
        email: "aaddeyf@ed.gov",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "aaddeyf",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 17,
        firstName: "Corby",
        lastName: "Gherardi",
        email: "cgherardig@yolasite.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "cgherardig",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 18,
        firstName: "Selestina",
        lastName: "Renfrew",
        email: "srenfrewh@lulu.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "srenfrewh",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 19,
        firstName: "Joella",
        lastName: "Altoft",
        email: "jaltofti@yale.edu",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "jaltofti",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 20,
        firstName: "Arri",
        lastName: "Cleugh",
        email: "acleughj@trellian.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "acleughj",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 21,
        firstName: "Franny",
        lastName: "Matschke",
        email: "fmatschkek@arizona.edu",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "fmatschkek",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 22,
        firstName: "Billye",
        lastName: "Dismore",
        email: "bdismorel@statcounter.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "bdismorel",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 23,
        firstName: "Arlana",
        lastName: "Smeath",
        email: "asmeathm@earthlink.net",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "asmeathm",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 24,
        firstName: "Eddie",
        lastName: "Zanneli",
        email: "ezannelin@google.ca",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "ezannelin",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 25,
        firstName: "Dan",
        lastName: "Benedettini",
        email: "dbenedettinio@salon.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "dbenedettinio",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 26,
        firstName: "Prentiss",
        lastName: "Pallatina",
        email: "ppallatinap@jigsy.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "ppallatinap",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 27,
        firstName: "Brittany",
        lastName: "Fairman",
        email: "bfairmanq@t-online.de",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "bfairmanq",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 28,
        firstName: "Roderic",
        lastName: "Bolderson",
        email: "rboldersonr@jalbum.net",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "rboldersonr",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 29,
        firstName: "Hugibert",
        lastName: "Timeby",
        email: "htimebys@acquirethisname.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "htimebys",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 30,
        firstName: "Bel",
        lastName: "Dunbobin",
        email: "bdunbobint@netvibes.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "bdunbobint",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 31,
        firstName: "Ayn",
        lastName: "Matzel",
        email: "amatzelu@people.com.cn",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "amatzelu",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 32,
        firstName: "Tabb",
        lastName: "Heritege",
        email: "theritegev@foxnews.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "theritegev",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 33,
        firstName: "Jemmy",
        lastName: "Congram",
        email: "jcongramw@technorati.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "jcongramw",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 34,
        firstName: "Elliot",
        lastName: "Brouard",
        email: "ebrouardx@noaa.gov",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "ebrouardx",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 35,
        firstName: "Fredra",
        lastName: "McHugh",
        email: "fmchughy@e-recht24.de",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "fmchughy",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 36,
        firstName: "Etan",
        lastName: "Pottery",
        email: "epotteryz@who.int",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "epotteryz",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 37,
        firstName: "Mozes",
        lastName: "Dunsmore",
        email: "mdunsmore10@i2i.jp",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "mdunsmore10",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 38,
        firstName: "Naoma",
        lastName: "Lawless",
        email: "nlawless11@mozilla.org",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "nlawless11",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 39,
        firstName: "Jeff",
        lastName: "Huske",
        email: "jhuske12@weebly.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "jhuske12",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 40,
        firstName: "Valry",
        lastName: "Fauning",
        email: "vfauning13@hibu.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "vfauning13",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 41,
        firstName: "Rogers",
        lastName: "Cridge",
        email: "rcridge14@privacy.gov.au",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "rcridge14",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 42,
        firstName: "Scarface",
        lastName: "McMorran",
        email: "smcmorran15@netvibes.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "smcmorran15",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 43,
        firstName: "Winnie",
        lastName: "Bengochea",
        email: "wbengochea16@adobe.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "wbengochea16",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 44,
        firstName: "Maribeth",
        lastName: "McGuigan",
        email: "mmcguigan17@odnoklassniki.ru",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "mmcguigan17",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 45,
        firstName: "Sandy",
        lastName: "Cops",
        email: "scops18@goo.gl",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "scops18",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 46,
        firstName: "Martie",
        lastName: "Casham",
        email: "mcasham19@google.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "mcasham19",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 47,
        firstName: "Ricca",
        lastName: "Mc Meekan",
        email: "rmcmeekan1a@wunderground.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "rmcmeekan1a",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 48,
        firstName: "Phineas",
        lastName: "Bouzan",
        email: "pbouzan1b@ycombinator.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "pbouzan1b",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 49,
        firstName: "Paulie",
        lastName: "De Coursey",
        email: "pdecoursey1c@wix.com",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "pdecoursey1c",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 50,
        firstName: "Dionis",
        lastName: "Mazzey",
        email: "dmazzey1d@slashdot.org",
        password: 12345678,
        confirmPassword: 12345678,
        nickName: "dmazzey1d",
        avatar: "default.png",
        active: 1,
        admin: 0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};