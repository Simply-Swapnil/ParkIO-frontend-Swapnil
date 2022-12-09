const data = {
    name: "Phoenix mall",
    img: "https://aniportalimages.s3.amazonaws.com/media/details/Phoinexmarckwet20211115115906.jpg",
    shortaddress: "Viman Nagar, Pune",
    spotsAvailible: 20,     //Database and backend API
    distance: 200,          //Google distance API
    address: "Phoenix Road, Clover Park, Viman Nagar, Pune, Maharashtra 411014",
    timing: "10:00am - 6:00pm",
    rate: 100,
    slotsAvailible: [       //Database and backend API
      {
        startTime: "10:00",
        endTime: "11:00",
        selected: false,
      },
      {
        startTime: "11:00",
        endTime: "12:00",
        selected: true,
      },
      {
        startTime: "1:00",
        endTime: "2:00",
        selected: false,
      },
    ],
  }

  export default data;