'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    // Add altering commands here.
    // Return a promise to correctly handle asynchronicity.

    // Example:
    return queryInterface.bulkInsert('Statues', [{

      ASSET_NAME: "Washington Grays Monument",
      ASSET_ADDR: "140 SOUTH BROAD ST",
      SITE_NAME: "Union League of Philadelphia",
      LATITUDE: 39.95065705,
      LONGITUDE: -75.16419533,
    },
    {
      ASSET_NAME: "Sister Cities Plaza",
      ASSET_ADDR: "200 N 18TH ST",
      SITE_NAME: "Benjamin Franklin Parkway, Logan Circle",
      LATITUDE: 39.95754880,
      LONGITUDE: -75.16937546
    },
    {
      ASSET_NAME: "Spirit of Enterprise",
      ASSET_ADDR: "KELLY DR",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.97358964,
      LONGITUDE: -75.19086938
    },
    {
      ASSET_NAME: "Miner",
      ASSET_ADDR: "KELLY DR",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.97338693,
      LONGITUDE: -75.19080722
    },
    {
      ASSET_NAME: "General Galusha Pennypacker Memorial",
      ASSET_ADDR: "200 N 18TH ST",
      SITE_NAME: "Benjamin Franklin Parkway, Logan Circle",
      LATITUDE: 39.95852073,
      LONGITUDE: -75.16966156
    },
    {
      ASSET_NAME: "Lion Fighter",
      ASSET_ADDR: "2500 SPRING GARDEN ST",
      SITE_NAME: "Philadelphia Museum of Art",
      LATITUDE: 39.96440581,
      LONGITUDE: -75.18007156
    },
    {
      ASSET_NAME: "Rocky",
      ASSET_ADDR: "BENJAMIN FRANKLIN PKWY, PHILADELPHIA MUSEUM OF ART, SE CORNER",
      SITE_NAME: "Philadelphia Museum of Art",
      LATITUDE: 39.96498010,
      LONGITUDE: -75.17906974
    },
    {
      ASSET_NAME: "General Peter Muhlenberg",
      ASSET_ADDR: "2500 SPRING GARDEN ST",
      SITE_NAME: "East Fairmount Park, Reilly Memorial",
      LATITUDE: 39.96659536,
      LONGITUDE: -75.18199304
    },
    {
      ASSET_NAME: "Young Meher",
      ASSET_ADDR: "2500 SPRING GARDEN ST",
      SITE_NAME: "Philadelphia Museum of Art",
      LATITUDE: 39.96655926,
      LONGITUDE: -75.17987074
    },
    {
      ASSET_NAME: "Vietnam Veterans Memorial",
      ASSET_ADDR: "10 SPRUCE STREET",
      SITE_NAME: "I-95 PARK",
      LATITUDE: 39.94390308,
      LONGITUDE: -75.14280934
    },
    {
      ASSET_NAME: "Civil War Soldiers and Sailors Memorial",
      ASSET_ADDR: "20TH ST AND THE BENJAMIN FRANKLIN PKWY",
      SITE_NAME: "Benjamin Franklin Parkway",
      LATITUDE: 39.95967635,
      LONGITUDE: -75.17261900
    },
    {
      ASSET_NAME: "Thomas Fitzsimons",
      ASSET_ADDR: "200 N 18TH ST",
      SITE_NAME: "Benjamin Franklin Parkway, Logan Circle",
      LATITUDE: 39.95800515,
      LONGITUDE: -75.16923128
    },
    {
      ASSET_NAME: "Schuylkill Freed",
      ASSET_ADDR: "640 WATER WORKS DR",
      SITE_NAME: "Fairmount Waterworks",
      LATITUDE: 39.96619366,
      LONGITUDE: -75.18351537
    },
    {
      ASSET_NAME: "LOVE",
      ASSET_ADDR: "1400 JOHN F KENNEDY BLVD",
      SITE_NAME: "Dilworth Park",
      LATITUDE: 39.95327537,
      LONGITUDE: -75.16462196
    },
    {
      ASSET_NAME: "William Penn",
      ASSET_ADDR: "1301 BEACH ST",
      SITE_NAME: "Penn Treaty Park",
      LATITUDE: 39.96684619,
      LONGITUDE: -75.12863599
    },
    {
      ASSET_NAME: "Billy",
      ASSET_ADDR: "1800 WALNUT ST",
      SITE_NAME: "Rittenhouse Square",
      LATITUDE: 39.94920929,
      LONGITUDE: -75.17237402
    },
    {
      ASSET_NAME: "Three-Way Piece Number 1: Points",
      ASSET_ADDR: "110 N 16TH ST",
      SITE_NAME: "Cret Park",
      LATITUDE: 39.95555404,
      LONGITUDE: -75.16693328
    },
    {
      ASSET_NAME: "Silenus and the Infant Bacchus",
      ASSET_ADDR: "KELLY DR NORTH OF  FAIRMOUNT AVE",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.96873450,
      LONGITUDE: -75.18271712
    },
    {
      ASSET_NAME: "Atmosphere & Environment",
      ASSET_ADDR: "2500 SPRING GARDEN ST",
      SITE_NAME: "Philadelphia Museum of Art",
      LATITUDE: 39.96596218,
      LONGITUDE: -75.18179313
    },
    {
      ASSET_NAME: "Civil War Soldiers and Sailors Memorial",
      ASSET_ADDR: "20TH ST AND THE BENJAMIN FRANKLIN PKWY",
      SITE_NAME: "Benjamin Franklin Parkway",
      LATITUDE: 39.95942878,
      LONGITUDE: -75.17292297
    },
    {
      ASSET_NAME: "Stone Basin (Wellhead)",
      ASSET_ADDR: "KELLY DR, BEHIND PHILADELPHIA MUSEUM OF ART",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.96892782,
      LONGITUDE: -75.18429484
    },
    {
      ASSET_NAME: "The Thinker",
      ASSET_ADDR: "BENJAMIN FRANKLIN PKWY, RODIN MUSEUM",
      SITE_NAME: "Benjamin Franklin Parkway",
      LATITUDE: 39.96147252,
      LONGITUDE: -75.17456999
    },
    {
      ASSET_NAME: "Puma",
      ASSET_ADDR: "KELLY DR, BEHIND PHILADELPHIA MUSEUM OF ART",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.96777004,
      LONGITUDE: -75.18291422
    },
    {
      ASSET_NAME: "Charioteer of Delphi",
      ASSET_ADDR: "2500 SPRING GARDEN ST",
      SITE_NAME: "Philadelphia Museum of Art",
      LATITUDE: 39.96541135,
      LONGITUDE: -75.17925454
    },
    {
      ASSET_NAME: "Jesus Breaking Bread",
      ASSET_ADDR: "18TH AND RACE STS",
      SITE_NAME: "Benjamin Franklin Parkway, Logan Circle",
      LATITUDE: 39.95692578,
      LONGITUDE: -75.16877316
    },
    {
      ASSET_NAME: "Morton McMichael",
      ASSET_ADDR: "LEMON HILL DR",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.97314660,
      LONGITUDE: -75.18899973
    },
    {
      ASSET_NAME: "Abraham Lincoln",
      ASSET_ADDR: "KELLY AND SEDGELY DRS",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.96957577,
      LONGITUDE: -75.18445410
    },
    {
      ASSET_NAME: "Geberal Frederich von Steuben",
      ASSET_ADDR: "2500 SPRING GARDEN ST",
      SITE_NAME: "East Fairmount Park, Reilly Memorial",
      LATITUDE: 39.96722760,
      LONGITUDE: -75.18293425
    },
    {
      ASSET_NAME: "The Quaker",
      ASSET_ADDR: "KELLY DR",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.97251467,
      LONGITUDE: -75.19035918
    },
    {
      ASSET_NAME: "Monument to Six Million Jewish Martyrs",
      ASSET_ADDR: "1619-25 ARCH ST",
      SITE_NAME: "Levy Park",
      LATITUDE: 39.95515471,
      LONGITUDE: -75.16739693
    },
    {
      ASSET_NAME: "The Revolutionary War Soldier",
      ASSET_ADDR: "KELLY DR",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.97268837,
      LONGITUDE: -75.19042449
    },
    {
      ASSET_NAME: "Schuylkill Chained",
      ASSET_ADDR: "640 WATER WORKS DR",
      SITE_NAME: "Fairmount Water Works",
      LATITUDE: 39.96651481,
      LONGITUDE: -75.18360168
    },
    {
      ASSET_NAME: "Slave",
      ASSET_ADDR: "KELLY DR",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.97375736,
      LONGITUDE: -75.19101714
    },
    {
      ASSET_NAME: "Mounted Amazon Attacked by Panther",
      ASSET_ADDR: "2500 SPRING GARDEN ST",
      SITE_NAME: "Philadelphia Museum of Art",
      LATITUDE: 39.96496463,
      LONGITUDE: -75.17938387
    },
    {
      ASSET_NAME: "Don Diego de Gardoqui",
      ASSET_ADDR: "200 N 18TH ST",
      SITE_NAME: "Benjamin Franklin Parkway, Logan Circle",
      LATITUDE: 39.95822778,
      LONGITUDE: -75.16921272
    },
    {
      ASSET_NAME: "Rond Point Fountain (Wheatsheaf Fountains) (One of",
      ASSET_ADDR: "KELLY DR",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.97306681,
      LONGITUDE: -75.19055754
    },
    {
      ASSET_NAME: "General Nathaniel Greene",
      ASSET_ADDR: "2500 SPRING GARDEN ST",
      SITE_NAME: "East Fairmount Park, Reilly Memorial",
      LATITUDE: 39.96685047,
      LONGITUDE: -75.18289959
    },
    {
      ASSET_NAME: "Social Consciousness",
      ASSET_ADDR: "2500 SPRING GARDEN ST",
      SITE_NAME: "Philadelphia Museum of Art",
      LATITUDE: 39.96623151,
      LONGITUDE: -75.18143705
    },
    {
      ASSET_NAME: "Francisco de Miranda",
      ASSET_ADDR: "257 N 21ST ST",
      SITE_NAME: "Benjamin Franklin Parkway",
      LATITUDE: 39.95905058,
      LONGITUDE: -75.17281800
    },
    {
      ASSET_NAME: "Evelyn Taylkor Price Memorial Sundial",
      ASSET_ADDR: "1800 WALNUT ST",
      SITE_NAME: "Rittenhouse Square",
      LATITUDE: 39.94974763,
      LONGITUDE: -75.17139383
    },
    {
      ASSET_NAME: "General Tadeusz Kosciuszko",
      ASSET_ADDR: "18TH ST AND THE BENJAMIN FRANKLIN PKWY",
      SITE_NAME: "Benjamin Franklin Parkway",
      LATITUDE: 39.95679366,
      LONGITUDE: -75.16930941
    },
    {
      ASSET_NAME: "Immigrant",
      ASSET_ADDR: "KELLY DR",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.97380451,
      LONGITUDE: -75.19087942
    },
    {
      ASSET_NAME: "All Wars Memorial to Colored Soldiers and Sailors",
      ASSET_ADDR: "200 N 19TH ST",
      SITE_NAME: "Logan Square",
      LATITUDE: 39.95834586,
      LONGITUDE: -75.17178303
    },
    {
      ASSET_NAME: "Three Discs, One Lacking",
      ASSET_ADDR: "110 N 16TH ST",
      SITE_NAME: "Cret Park",
      LATITUDE: 39.95576949,
      LONGITUDE: -75.16719732
    },
    {
      ASSET_NAME: "Frederick Graff Memorial",
      ASSET_ADDR: "FAIRMOUNT WATER WORKS DR",
      SITE_NAME: "Fairmount Water Works",
      LATITUDE: 39.96564090,
      LONGITUDE: -75.18323390
    },
    {
      ASSET_NAME: "Washington Monument",
      ASSET_ADDR: "26TH ST AND THE BENJAMIN FRANKLIN PKWY",
      SITE_NAME: "Benjamin Franklin Parkway",
      LATITUDE: 39.96426541,
      LONGITUDE: -75.17915858
    },
    {
      ASSET_NAME: "Spanning the Continent",
      ASSET_ADDR: "KELLY DR",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.97332935,
      LONGITUDE: -75.19068791
    },
    {
      ASSET_NAME: "Prophet",
      ASSET_ADDR: "110 N 16TH ST",
      SITE_NAME: "Cret Park",
      LATITUDE: 39.95528625,
      LONGITUDE: -75.16658744
    },
    {
      ASSET_NAME: "Aero Memorial",
      ASSET_ADDR: "200 N 19TH ST",
      SITE_NAME: "Benjamin Franklin Parkway, Logan Circle",
      LATITUDE: 39.95809946,
      LONGITUDE: -75.17204185
    },
    {
      ASSET_NAME: "Stephen B. Girard",
      ASSET_ADDR: "2500 SPRING GARDEN ST",
      SITE_NAME: "East Fairmount Park, Reilly Memorial",
      LATITUDE: 39.96636538,
      LONGITUDE: -75.18230070
    },
    {
      ASSET_NAME: "Tiger at Bay",
      ASSET_ADDR: "KELLY DR, BETWEEN  PHILADELPHIA MUSEUM OF ART  AND SEDGELEY DR",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.96842710,
      LONGITUDE: -75.18215014
    },
    {
      ASSET_NAME: "Birth of a Nation",
      ASSET_ADDR: "KELLY DR",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.97275023,
      LONGITUDE: -75.19043322
    },
    {
      ASSET_NAME: "Joan of Arc",
      ASSET_ADDR: "KELLY DR AT 25TH ST",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.96649011,
      LONGITUDE: -75.17916695
    },
    {
      ASSET_NAME: "Kopernik (Nicolaus Copernicus, 1473-1543)",
      ASSET_ADDR: "1716-34 RACE ST",
      SITE_NAME: "Kopernicus Triangle",
      LATITUDE: 39.95679841,
      LONGITUDE: -75.16849753
    },
    {
      ASSET_NAME: "The Gates of Hell",
      ASSET_ADDR: "BENJAMIN FRANKLIN PKWY, RODIN MUSEUM",
      SITE_NAME: "Benjamin Franklin Parkway",
      LATITUDE: 39.96136186,
      LONGITUDE: -75.17447348
    },
    {
      ASSET_NAME: "Commodore John Barry",
      ASSET_ADDR: "500-36 CHESTNUT ST",
      SITE_NAME: "Independence Square",
      LATITUDE: 39.94834229,
      LONGITUDE: -75.15015391
    },
    {
      ASSET_NAME: "The Wedges",
      ASSET_ADDR: "EAST FAIRMOUNT PARK, KELLY DR AND SEDGLEY DR",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.97010182,
      LONGITUDE: -75.18413004
    },
    {
      ASSET_NAME: "General Casimir Pulaski",
      ASSET_ADDR: "2500 SPRING GARDEN ST",
      SITE_NAME: "East Fairmount Park, Reilly Memorial",
      LATITUDE: 39.96686614,
      LONGITUDE: -75.18238833
    },
    {
      ASSET_NAME: "Basilica Green",
      ASSET_ADDR: "201-07 N 18TH ST",
      SITE_NAME: "Benjamin Franklin Parkway",
      LATITUDE: 39.95717215,
      LONGITUDE: -75.16880980
    },
    {
      ASSET_NAME: "Police and Fire Memorial",
      ASSET_ADDR: "200 N 6TH ST",
      SITE_NAME: "Franklin Square",
      LATITUDE: 39.95538678,
      LONGITUDE: -75.14981303
    },
    {
      ASSET_NAME: "George Washington (Revolutionary War Memorial)",
      ASSET_ADDR: "600 WALNUT ST",
      SITE_NAME: "Washington Square",
      LATITUDE: 39.94710146,
      LONGITUDE: -75.15273894
    },
    {
      ASSET_NAME: "Settling of the Seaboard",
      ASSET_ADDR: "KELLY DR",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.97246944,
      LONGITUDE: -75.19033325
    },
    {
      ASSET_NAME: "General Richard Montgomery",
      ASSET_ADDR: "2500 SPRING GARDEN ST",
      SITE_NAME: "East Fairmount Park, Reilly Memorial",
      LATITUDE: 39.96665108,
      LONGITUDE: -75.18265103
    },
    {
      ASSET_NAME: "Shakespeare Memorial",
      ASSET_ADDR: "3023 GRAYS FERRY AVE",
      SITE_NAME: "Benjamin Franklin Parkway, Logan Circle",
      LATITUDE: 39.95875764,
      LONGITUDE: -75.17120801
    },
    {
      ASSET_NAME: "Thorfinn Karlsefni",
      ASSET_ADDR: "KELLY DR",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.97020802,
      LONGITUDE: -75.19001850
    },
    {
      ASSET_NAME: "Tortoise Family Group (3 figures)",
      ASSET_ADDR: "2301-23 PINE ST",
      SITE_NAME: "Fitler Square",
      LATITUDE: 39.94760715,
      LONGITUDE: -75.17978361
    },
    {
      ASSET_NAME: "Chief Justice John Marshall",
      ASSET_ADDR: "2500 SPRING GARDEN ST",
      SITE_NAME: "Philadelphia Museum of Art",
      LATITUDE: 39.96621671,
      LONGITUDE: -75.18178931
    },
    {
      ASSET_NAME: "The Puritan",
      ASSET_ADDR: "KELLY DR",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.97240751,
      LONGITUDE: -75.19032176
    },
    {
      ASSET_NAME: "Ploughman",
      ASSET_ADDR: "KELLY DR",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.97343283,
      LONGITUDE: -75.19065764
    },
    {
      ASSET_NAME: "Lion Crushing A Serpent",
      ASSET_ADDR: "1800 WALNUT ST",
      SITE_NAME: "Rittenhouse Square",
      LATITUDE: 39.94966049,
      LONGITUDE: -75.17205002
    },
    {
      ASSET_NAME: "Title Unknown (Mask)",
      ASSET_ADDR: "1800 WALNUT ST",
      SITE_NAME: "Rittenhouse Square",
      LATITUDE: 39.94927757,
      LONGITUDE: -75.17169423
    },
    {
      ASSET_NAME: "General Anthony Wayne",
      ASSET_ADDR: "2500 SPRING GARDEN ST",
      SITE_NAME: "Philadelphia Museum of Art",
      LATITUDE: 39.96472967,
      LONGITUDE: -75.18090214
    },
    {
      ASSET_NAME: "Stone Age in America",
      ASSET_ADDR: "KELLY DR BETWEEN BOAT HOUSE ROW AND ELLEN PHILLIPS SAMUEL MEMORIAL",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.97196360,
      LONGITUDE: -75.19018995
    },
    {
      ASSET_NAME: "The Statesman",
      ASSET_ADDR: "KELLY DR",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.97279558,
      LONGITUDE: -75.19046468
    },
    {
      ASSET_NAME: "John Paul Jones",
      ASSET_ADDR: "2500 SPRING GARDEN ST",
      SITE_NAME: "East Fairmount Park, Reilly Memorial",
      LATITUDE: 39.96704186,
      LONGITUDE: -75.18266953
    },
    {
      ASSET_NAME: "Prometheus Strangling the Vulture",
      ASSET_ADDR: "2500 SPRING GARDEN ST",
      SITE_NAME: "Philadelphia Museum of Art",
      LATITUDE: 39.96559938,
      LONGITUDE: -75.18095094
    },
    {
      ASSET_NAME: "Duck Girl",
      ASSET_ADDR: "1800 WALNUT ST",
      SITE_NAME: "Rittenhouse Square",
      LATITUDE: 39.94938372,
      LONGITUDE: -75.17178974
    },
    {
      ASSET_NAME: "The Pilgrim",
      ASSET_ADDR: "KELLY DR AT LEMON HILL DR",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.97009083,
      LONGITUDE: -75.18867022
    },
    {
      ASSET_NAME: "Gamekeeper's Night Dog",
      ASSET_ADDR: "2501 PENNSYLVANIA AVE",
      SITE_NAME: "East Fairmount Park",
      LATITUDE: 39.96720349,
      LONGITUDE: -75.17891281
    },
    {
      ASSET_NAME: "John Ericsson Fountain",
      ASSET_ADDR: "26TH ST AND THE BENJAMIN FRANKLIN PKWY",
      SITE_NAME: "Benjamin Franklin Parkway",
      LATITUDE: 39.96389938,
      LONGITUDE: -75.17959280
    },
    {
      ASSET_NAME: "Marquis de Lafayette",
      ASSET_ADDR: "2500 SPRING GARDEN ST",
      SITE_NAME: "East Fairmount Park, Reilly Memorial",
      LATITUDE: 39.96703620,
      LONGITUDE: -75.18316431
    },
    {
      ASSET_NAME: "Eli Kirk Price, Jr. Fountain",
      ASSET_ADDR: "26TH ST AND THE BENJAMIN FRANKLIN PKWY",
      SITE_NAME: "Benjamin Franklin Parkway",
      LATITUDE: 39.96461970,
      LONGITUDE: -75.17870689
      }], { });
    
  },

down: (queryInterface, Sequelize) => {

  // Add reverting commands here.
  // Return a promise to correctly handle asynchronicity.

  // Example:
  return queryInterface.bulkDelete('Statues', null, {});

}
};
