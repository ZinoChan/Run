import { v4 as uuidv4 } from 'uuid';

import m1_00 from './assets/shoes/m1_00.jpg';
import m1_01 from './assets/shoes/m1_01.jpg';
import m1_02 from './assets/shoes/m1_02.jpg';
import m1_03 from './assets/shoes/m1_03.jpg';
import m1_04 from './assets/shoes/m1_04.jpg';
import m2_01 from './assets/shoes/m2_01.jpg';
import m2_02 from './assets/shoes/m2_02.jpg';
import m2_03 from './assets/shoes/m2_03.jpg';
import m2_04 from './assets/shoes/m2_04.jpg';
import m4_00 from './assets/shoes/m4_00.jpg';
import m4_01 from './assets/shoes/m4_01.jpg';
import m4_02 from './assets/shoes/m4_02.jpg';
import m4_03 from './assets/shoes/m4_03.jpg';
import m4_04 from './assets/shoes/m4_04.jpg';
import m5_01 from './assets/shoes/m5_01.jpg';
import m5_02 from './assets/shoes/m5_02.jpg';
import m5_03 from './assets/shoes/m5_03.jpg';
import m5_04 from './assets/shoes/m5_04.jpg';
import m6_01 from './assets/shoes/m6_01.jpg';
import m6_02 from './assets/shoes/m6_02.jpg';
import m7_00 from './assets/shoes/m7_00.jpg';
import m7_01 from './assets/shoes/m7_01.jpg';
import m7_02 from './assets/shoes/m7_02.jpg';
import m7_03 from './assets/shoes/m7_03.jpg';
import m7_04 from './assets/shoes/m7_04.jpg';
import m8_01 from './assets/shoes/m8_01.jpg';
import m8_02 from './assets/shoes/m8_02.jpg';
import m8_03 from './assets/shoes/m8_03.jpg';
import m8_04 from './assets/shoes/m8_04.jpg';
import m9_01 from './assets/shoes/m9_01.jpg';
import m9_02 from './assets/shoes/m9_02.jpg';
import m9_03 from './assets/shoes/m9_03.jpg';
import m9_04 from './assets/shoes/m9_04.jpg';
import m10_01 from './assets/shoes/m10_01.jpg';
import m10_02 from './assets/shoes/m10_02.jpg';
import m10_03 from './assets/shoes/m10_03.jpg';
import m10_04 from './assets/shoes/m10_04.jpg';

import w1_00 from './assets/shoes/w1_00.jpg';
import w1_01 from './assets/shoes/w1_01.jpg';
import w1_02 from './assets/shoes/w1_02.jpg';
import w1_03 from './assets/shoes/w1_03.jpg';
import w1_04 from './assets/shoes/w1_04.jpg';
import w8_01 from './assets/shoes/w8_01.jpg';
import w8_02 from './assets/shoes/w8_02.jpg';
import w8_03 from './assets/shoes/w8_03.jpg';
import w8_04 from './assets/shoes/w8_04.jpg';
import w2_00 from './assets/shoes/w2_00.jpg';
import w2_01 from './assets/shoes/w2_01.jpg';
import w2_02 from './assets/shoes/w2_02.jpg';
import w2_03 from './assets/shoes/w2_03.jpg';
import w2_04 from './assets/shoes/w2_04.jpg';
import w3_00 from './assets/shoes/w3_00.jpg';
import w3_01 from './assets/shoes/w3_01.jpg';
import w3_02 from './assets/shoes/w3_02.jpg';
import w3_03 from './assets/shoes/w3_03.jpg';
import w3_04 from './assets/shoes/w3_04.jpg';
import w4_01 from './assets/shoes/w4_01.jpg';
import w4_02 from './assets/shoes/w4_02.jpg';
import w4_03 from './assets/shoes/w4_03.jpg';
import w4_04 from './assets/shoes/w4_04.jpg';
import w5_01 from './assets/shoes/w5_01.jpg';
import w5_02 from './assets/shoes/w5_02.jpg';
import w5_03 from './assets/shoes/w5_03.jpg';
import w5_04 from './assets/shoes/w5_04.jpg';
import w6_00 from './assets/shoes/w6_00.jpg';
import w6_01 from './assets/shoes/w6_01.jpg';
import w6_02 from './assets/shoes/w6_02.jpg';
import w6_03 from './assets/shoes/w6_03.jpg';
import w6_04 from './assets/shoes/w6_04.jpg';
import w7_01 from './assets/shoes/w7_01.jpg';
import w7_02 from './assets/shoes/w7_02.jpg';
import w7_03 from './assets/shoes/w7_03.jpg';

import k1_00 from './assets/shoes/k1_00.jpg';
import k1_01 from './assets/shoes/k1_01.jpg';
import k1_02 from './assets/shoes/k1_02.jpg';
import k1_03 from './assets/shoes/k1_03.jpg';
import k2_01 from './assets/shoes/k2_01.jpg';
import k2_02 from './assets/shoes/k2_02.jpg';
import k2_03 from './assets/shoes/k2_03.jpg';
import k3_01 from './assets/shoes/k3_01.jpg';
import k3_02 from './assets/shoes/k3_02.jpg';
import k3_03 from './assets/shoes/k3_03.jpg';
import k4_00 from './assets/shoes/k4_00.jpg';
import k4_01 from './assets/shoes/k4_01.jpg';
import k4_02 from './assets/shoes/k4_02.jpg';
import k4_03 from './assets/shoes/k4_03.jpg';
import k4_04 from './assets/shoes/k4_04.jpg';
import k5_01 from './assets/shoes/k5_01.jpg';
import k5_02 from './assets/shoes/k5_02.jpg';
import k5_03 from './assets/shoes/k5_03.jpg';
import k5_04 from './assets/shoes/k5_04.jpg';







export const db = [
    {
        id: uuidv4(),
        title: "nike air max",
        price: 99.99,
        collection: "men",
        item: m1_00,
        availableColors: [
            {
                id: uuidv4(), 
                color: '#000', 
                imgs: [
                    {id: uuidv4(), img: m1_01}, 
                    {id: uuidv4(), img: m1_02}, 
                    {id: uuidv4(), img: m1_03}, 
                    {id: uuidv4(), img: m1_04}
                ]
            },
            {
                id: uuidv4(), 
                color: '#BA0B1E', 
                imgs: [
                    {id: uuidv4(), img: m2_01}, 
                    {id: uuidv4(), img: m2_02}, 
                    {id: uuidv4(), img: m2_03}, 
                    {id: uuidv4(), img: m2_04}
                ]
            }
            
        ],
        availableSizes: [
            {id: uuidv4(), size: 39}, 
            {id: uuidv4(), size: 36}, 
            {id: uuidv4(), size: 45}, 
            {id: uuidv4(), size: 40}
        ]
    },
    {
        id: uuidv4(),
        title: "nike  react infinite",
        price: 99.99,
        collection: "men",
        item: m4_00,
        availableColors: [
            {
                id: uuidv4(), 
                color: '#A4A3A9', 
                imgs: [
                    {id: uuidv4(), img: m4_01}, 
                    {id: uuidv4(), img: m4_02}, 
                    {id: uuidv4(), img: m4_03}, 
                    {id: uuidv4(), img: m4_04}
                ]
            },
            {
                id: uuidv4(), 
                color: '#E5E9F0', 
                imgs: [
                    {id: uuidv4(), img: m5_01}, 
                    {id: uuidv4(), img: m5_02}, 
                    {id: uuidv4(), img: m5_03}, 
                    {id: uuidv4(), img: m5_04}
                ]
            },
            {
                id: uuidv4(), 
                color: '#000', 
                imgs: [
                    {id: uuidv4(), img: m6_01}, 
                    {id: uuidv4(), img: m6_02}
                ]
            }
        ],
        availableSizes: [
            {id: uuidv4(), size: 39}, 
            {id: uuidv4(), size: 38}, 
            {id: uuidv4(), size: 45}, 
            {id: uuidv4(), size: 40}
        ]
    },
    {
        id: uuidv4(),
        title: "nike  infinity sport",
        price: 99.99,
        collection: "men",
        item: m7_00,
        availableColors: [
            {
                id: uuidv4(), 
                color: '#000', 
                imgs: [
                    {id: uuidv4(), img: m7_01}, 
                    {id: uuidv4(), img: m7_02}, 
                    {id: uuidv4(), img: m7_03}, 
                    {id: uuidv4(), img: m7_04}
                ]
            },
            {
                id: uuidv4(), 
                color: '#CCCCD0', 
                imgs: [
                    {id: uuidv4(), img: m8_01}, 
                    {id: uuidv4(), img: m8_02}, 
                    {id: uuidv4(), img: m8_03}, 
                    {id: uuidv4(), img: m8_04}
                ]
            },
            {
                id: uuidv4(), 
                color: '#E2A60E', 
                imgs: [
                    {id: uuidv4(), img: m9_01}, 
                    {id: uuidv4(), img: m9_02}, 
                    {id: uuidv4(), img: m9_03}, 
                    {id: uuidv4(), img: m9_04}
                ]
            },
            {
                id: uuidv4(), 
                color: '#0082C4', 
                imgs: [
                    {id: uuidv4(), img: m10_01}, 
                    {id: uuidv4(), img: m10_02}, 
                    {id: uuidv4(), img: m10_03}, 
                    {id: uuidv4(), img: m10_04}
                ]
            },
        ],
        availableSizes: [
            {id: uuidv4(), size: 39}, 
            {id: uuidv4(), size: 38}, 
            {id: uuidv4(), size: 45}, 
            {id: uuidv4(), size: 40},
            {id: uuidv4(), size: 41}
        ]
    },
    {
        id: uuidv4(),
        title: "nike lutus",
        price: 99.99,
        collection: "women",
        item: w1_00,
        availableColors: [
            {
                id: uuidv4(), 
                color: '#fafafa', 
                imgs: [
                    {id: uuidv4(), img: w1_01}, 
                    {id: uuidv4(), img: w1_02}, 
                    {id: uuidv4(), img: w1_03}, 
                    {id: uuidv4(), img: w1_04}
                ]
            },
        ],
        availableSizes: [
            {id: uuidv4(), size: 39}, 
            {id: uuidv4(), size: 36}, 
            {id: uuidv4(), size: 38}, 
            {id: uuidv4(), size: 40}
        ]
    },
    {
        id: uuidv4(),
        title: "nike sport",
        price: 99.99,
        collection: "women",
        item: w2_00,
        availableColors: [
            {
                id: uuidv4(), 
                color: '#000', 
                imgs: [
                    {id: uuidv4(), img: w2_01}, 
                    {id: uuidv4(), img: w2_02}, 
                    {id: uuidv4(), img: w2_03}, 
                    {id: uuidv4(), img: w2_04}
                ]
            },
            {
                id: uuidv4(), 
                color: '#D7D1C6', 
                imgs: [
                    {id: uuidv4(), img: w8_01}, 
                    {id: uuidv4(), img: w8_02}, 
                    {id: uuidv4(), img: w8_03}, 
                    {id: uuidv4(), img: w8_04}
                ]
            }
            
        ],
        availableSizes: [
            {id: uuidv4(), size: 39}, 
            {id: uuidv4(), size: 36}, 
            {id: uuidv4(), size: 45}, 
            {id: uuidv4(), size: 40}
        ]
    },
    {
        id: uuidv4(),
        title: "nike fantasy",
        price: 99.99,
        collection: "women",
        item: w3_00,
        availableColors: [
            {
                id: uuidv4(), 
                color: '#00B0AE', 
                imgs: [
                    {id: uuidv4(), img: w3_01}, 
                    {id: uuidv4(), img: w3_02}, 
                    {id: uuidv4(), img: w3_03}, 
                    {id: uuidv4(), img: w3_04}
                ]
            },
            {
                id: uuidv4(), 
                color: '#000', 
                imgs: [
                    {id: uuidv4(), img: w4_01}, 
                    {id: uuidv4(), img: w4_02}, 
                    {id: uuidv4(), img: w4_03}, 
                    {id: uuidv4(), img: w4_04}
                ]
            },
            {
                id: uuidv4(), 
                color: '#BE7234', 
                imgs: [
                    {id: uuidv4(), img: w5_01}, 
                    {id: uuidv4(), img: w5_02}, 
                    {id: uuidv4(), img: w5_03}, 
                    {id: uuidv4(), img: w5_04}
                ]
            }
            
        ],
        availableSizes: [
            {id: uuidv4(), size: 39}, 
            {id: uuidv4(), size: 36}, 
            {id: uuidv4(), size: 45}, 
            {id: uuidv4(), size: 40}
        ]
    },
    {
        id: uuidv4(),
        title: "nike air max",
        price: 99.99,
        collection: "women",
        item: w6_00,
        availableColors: [
            {
                id: uuidv4(), 
                color: '#827979', 
                imgs: [
                    {id: uuidv4(), img: w6_01}, 
                    {id: uuidv4(), img: w6_02}, 
                    {id: uuidv4(), img: w6_03}, 
                    {id: uuidv4(), img: w6_04}
                ]
            },
            {
                id: uuidv4(), 
                color: '#76355B', 
                imgs: [
                    {id: uuidv4(), img: w7_01}, 
                    {id: uuidv4(), img: w7_02}, 
                    {id: uuidv4(), img: w7_03}, 
                ]
            }
            
        ],
        availableSizes: [
            {id: uuidv4(), size: 39}, 
            {id: uuidv4(), size: 36}, 
            {id: uuidv4(), size: 45}, 
            {id: uuidv4(), size: 40}
        ]
    },
    {
        id: uuidv4(),
        title: "nike sport react",
        price: 99.99,
        collection: "kids",
        item: k1_00,
        availableColors: [
            {
                id: uuidv4(), 
                color: '#000', 
                imgs: [
                    {id: uuidv4(), img: k1_01}, 
                    {id: uuidv4(), img: k1_02}, 
                    {id: uuidv4(), img: k1_03}, 
                ]
            },
            {
                id: uuidv4(), 
                color: '#0B97B1', 
                imgs: [
                    {id: uuidv4(), img: k2_01}, 
                    {id: uuidv4(), img: k2_02}, 
                    {id: uuidv4(), img: k2_03}, 
                ]
            },
            {
                id: uuidv4(), 
                color: '#CFCAC5', 
                imgs: [
                    {id: uuidv4(), img: k3_01}, 
                    {id: uuidv4(), img: k3_02}, 
                    {id: uuidv4(), img: k3_03}, 
                ]
            }
            
        ],
        availableSizes: [
            {id: uuidv4(), size: 25}, 
            {id: uuidv4(), size: 30}, 
            {id: uuidv4(), size: 26}, 
            {id: uuidv4(), size: 35}
        ]
    },
    {
        id: uuidv4(),
        title: "nike sport react",
        price: 99.99,
        collection: "kids",
        item: k4_00,
        availableColors: [
            {
                id: uuidv4(), 
                color: '#00B0AE', 
                imgs: [
                    {id: uuidv4(), img: k4_01}, 
                    {id: uuidv4(), img: k4_02}, 
                    {id: uuidv4(), img: k4_03}, 
                    {id: uuidv4(), img: k4_04}
                ]
            },
            {
                id: uuidv4(), 
                color: '#C2CE96', 
                imgs: [
                    {id: uuidv4(), img: k5_01}, 
                    {id: uuidv4(), img: k5_02}, 
                    {id: uuidv4(), img: k5_03}, 
                    {id: uuidv4(), img: k5_04}
                ]
            }
            
        ],
        availableSizes: [
            {id: uuidv4(), size: 25}, 
            {id: uuidv4(), size: 30}, 
            {id: uuidv4(), size: 26}, 
            {id: uuidv4(), size: 35}
        ]
    },

]