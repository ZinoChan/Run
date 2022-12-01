// Example of  data model used in this project
const products = [
  //first product
  {
    collection: "women",
    id: "k3oUaeEGZWK3oUae",
    item: "https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", // main product Image link
    price: 45.57,
    title: "nike sport",
    availableColors: [
      {
        color: "#000", // hex colors
        id: "3oUaeEGZW3oUaeEGZW", //color id
        /*for each color there are imgs for diffrent
         angles of the product*/
        imgs: [
          {
            id: "3oUaeEGZW", //img id
            img: "https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", //img link
          },

          {
            id: "3oUaeEGZW", //img id
            img: "https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", //img link
          },
        ],
      },
    ],
    //each product have a set of available sizes
    availableSizes: [
      {
        id: "3oUaeEGZ", // size id
        size: 37, // size value
      },

      {
        id: "3oUaeEZ", // size id
        size: 40, // size value
      },
    ],
  },
];
