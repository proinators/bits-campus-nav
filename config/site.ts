export type SiteConfig = typeof siteConfig;

export type Place = {
  name: string;
  description: string;
  location: string;
  image: string;
};

export type Places = Record<string, Place[]>;

export const siteConfig = {
  name: "BITS Hyderabad - Campus Navigation",
  description: "The Campus Navigation portal of BITS Pilani, Hyderabad Campus",
  places: {
    "Administrative": [
      {
        "name": "Admission Office",
        "description": "Dummy description for Admission Office",
        "location": "https://goo.gl/maps/onpMLjwriRCYRscX8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "SWD Office",
        "description": "Dummy description for SWD Office",
        "location": "https://goo.gl/maps/onpMLjwriRCYRscX8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "AUGSD Office",
        "description": "Dummy description for AUGSD Office",
        "location": "https://goo.gl/maps/onpMLjwriRCYRscX8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "AGSRD Office",
        "description": "Dummy description for AGSRD Office",
        "location": "https://goo.gl/maps/onpMLjwriRCYRscX8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "General Administrative Division",
        "description": "Dummy description for General Administrative Division",
        "location": "https://maps.app.goo.gl/PMa6yQnkgqAh9EVh7",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Central Purchase Unit",
        "description": "Dummy description for Central Purchase Unit",
        "location": "https://maps.app.goo.gl/Ky8b2NCYoc7pnhgh8",
        "image": "/assets/placeholder.jpg"
      }
    ],
    "Mess and Food Outlets": [
      {
        "name": "Mess 1",
        "description": "Dummy description for Mess 1",
        "location": "https://goo.gl/maps/yfQfDDcEMXRLAmPw7",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Mess 2",
        "description": "Dummy description for Mess 2",
        "location": "https://goo.gl/maps/WTV79Hz1fTYJdpMKA",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Yummpy's",
        "description": "Dummy description for Yummpy's",
        "location": "https://maps.app.goo.gl/QQtspF7yE5VrZobN8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Thickshake And Co.",
        "description": "Dummy description for Thickshake And Co.",
        "location": "https://maps.app.goo.gl/pqdGthSW4uZYk6id9",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Amul",
        "description": "Dummy description for Amul",
        "location": "https://maps.app.goo.gl/myXctzmTM7AFKM8J6",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Vijay Vahini Foods",
        "description": "Dummy description for Vijay Vahini Foods",
        "location": "https://maps.app.goo.gl/zhJThUaTE9gRr1S9A",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Maggi Hotspot",
        "description": "Dummy description for Maggi Hotspot",
        "location": "https://maps.app.goo.gl/pZoqeKbwbBCGnjA28",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Chai Coffee Company",
        "description": "Dummy description for Chai Coffee Company",
        "location": "https://maps.app.goo.gl/X77vquZaREefa1VN9",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Wich Please",
        "description": "Dummy description for Wich Please",
        "location": "https://maps.app.goo.gl/293XvA7GaarCgCdp7",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "SFC Burgers",
        "description": "Dummy description for SFC Burgers",
        "location": "https://maps.app.goo.gl/PJAoh2PwnNi3Wko28",
        "image": "/assets/placeholder.jpg"
      }
    ],
    "Connaught Place": [
      {
        "name": "SBI - Jawahar Nagar Branch",
        "description": "Dummy description for SBI - Jawahar Nagar Branch",
        "location": "https://maps.app.goo.gl/PrQpx8K8egkHhdJV8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Agarwal Super Market",
        "description": "Dummy description for Agarwal Super Market",
        "location": "https://maps.app.goo.gl/eVYL7wwPe1XcuPP86",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Pleasant Restaurant",
        "description": "Dummy description for Pleasant Restaurant",
        "location": "https://maps.app.goo.gl/vwQUJwTxkzBSmujB6",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Medical Store",
        "description": "Dummy description for Medical Store",
        "location": "https://maps.app.goo.gl/DDFEBxtRtJyvp5bF6",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Karuturi - Stationery Store",
        "description": "Dummy description for Karuturi - Stationery Store",
        "location": "https://maps.app.goo.gl/uVQCGhus31RHFWTo7",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Fruitful",
        "description": "Dummy description for Fruitful",
        "location": "https://maps.app.goo.gl/P9eVHeyWRtxJhPKx8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Sri Sai Dry Cleaning and Laundry Service",
        "description": "Dummy description for Sri Sai Dry Cleaning and Laundry Service",
        "location": "https://maps.app.goo.gl/D3HbRaK8Y4kafoTd6",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Raj Kamal Hair Dressers",
        "description": "Dummy description for Raj Kamal Hair Dressers",
        "location": "https://maps.app.goo.gl/PBjauFduxFZnxaNe9",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Sri Lakshmi Narasimha Laundry",
        "description": "Dummy description for Sri Lakshmi Narasimha Laundry",
        "location": "https://maps.app.goo.gl/kWBKme2yoL3VNXwg8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Sree Lalitha Fruits and Vegetables",
        "description": "Dummy description for Sree Lalitha Fruits and Vegetables",
        "location": "https://maps.app.goo.gl/WG7VPiXYrBEXSczR9",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Sai Fancy General Stores",
        "description": "Dummy description for Sai Fancy General Stores",
        "location": "https://maps.app.goo.gl/AwVEXrbJnsNu9Z9FA",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Shah Book House Pvt. Ltd",
        "description": "Dummy description for Shah Book House Pvt. Ltd",
        "location": "https://maps.app.goo.gl/r5K35T8L8xdmYRgt9",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Tea Time",
        "description": "Dummy description for Tea Time",
        "location": "https://maps.app.goo.gl/XQWPBo5zdai8aphz8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Live Pizza",
        "description": "Dummy description for Live Pizza",
        "location": "https://maps.app.goo.gl/PFcGaod1enSXzZrA6",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Agra Chat & Parantha Center",
        "description": "Dummy description for Agra Chat & Parantha Center",
        "location": "https://maps.app.goo.gl/KW6C3Dgkby1zMNYf7",
        "image": "/assets/placeholder.jpg"
      }
    ],
    "Hostels": [
      {
        "name": "Valmiki Bhavan",
        "description": "Dummy description for Valmiki Bhavan",
        "location": "https://goo.gl/maps/L8CBNVayRNRMm2yDA",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Gautam Bhavan",
        "description": "Dummy description for Gautam Bhavan",
        "location": "https://goo.gl/maps/Zh2so8ZJsuXLJdwQ8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Malviya Bhavan",
        "description": "Dummy description for Malviya Bhavan",
        "location": "https://goo.gl/maps/m6GJiAXpD3SCjTJZ7",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Vishwakarma Bhavan",
        "description": "Dummy description for Vishwakarma Bhavan",
        "location": "https://maps.app.goo.gl/672WPcHoMTmejv2u6",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Vyas Bhavan",
        "description": "Dummy description for Vyas Bhavan",
        "location": "https://maps.app.goo.gl/8vWNJcy5DJC7Wc2r8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Ganga Bhavan",
        "description": "Dummy description for Ganga Bhavan",
        "location": "https://maps.app.goo.gl/7jY2c3X2pme4n6nn6",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Shankar Bhavan",
        "description": "Dummy description for Shankar Bhavan",
        "location": "https://maps.app.goo.gl/vhwCij4J96TVJq8r9",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Budh Bhavan",
        "description": "Dummy description for Budh Bhavan",
        "location": "https://maps.app.goo.gl/XtSoKL7jYfdoUNSL8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Meera Bhavan",
        "description": "Dummy description for Meera Bhavan",
        "location": "https://maps.app.goo.gl/1oNG8M7T3xZT13Zk8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Gandhi Bhavan",
        "description": "Dummy description for Gandhi Bhavan",
        "location": "https://maps.app.goo.gl/8PmTAWwBPDXLTfYc9",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Ram Bhavan",
        "description": "Dummy description for Ram Bhavan",
        "location": "https://maps.app.goo.gl/fNSJiAiUY6qvpcwe6",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Krishna Bhavan",
        "description": "Dummy description for Krishna Bhavan",
        "location": "https://maps.app.goo.gl/poWyFNU3od5MN1Vr6",
        "image": "/assets/placeholder.jpg"
      }
    ],
    "Academic Blocks and Departments": [
      {
        "name": "Cafeteria + Auditorium Entrance",
        "description": "Dummy description for Cafeteria + Auditorium Entrance",
        "location": "https://goo.gl/maps/mG2w91WUsuKzLPmb9",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "D + F Block",
        "description": "Dummy description for D + F Block",
        "location": "https://maps.app.goo.gl/3cQMvx54VrmsrdFy5",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "C Block",
        "description": "Dummy description for C Block",
        "location": "https://goo.gl/maps/onpMLjwriRCYRscX8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "A Block",
        "description": "Dummy description for A Block",
        "location": "https://maps.app.goo.gl/HYuHeaxPQAUDg7jn7",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "B + G Block",
        "description": "Dummy description for B + G Block",
        "location": "https://maps.app.goo.gl/qrsWwnChaA7vD5vF6",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "E Block",
        "description": "Dummy description for E Block",
        "location": "https://maps.app.goo.gl/kBYagRZm4dZs8tk58",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Central Workshop",
        "description": "Dummy description for Central Workshop",
        "location": "https://maps.app.goo.gl/CoozBuLio7UNLugu8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Electrical Machines/ Power Systems Lab",
        "description": "Dummy description for Electrical Machines/ Power Systems Lab",
        "location": "https://maps.app.goo.gl/zBhx1ihaJ46DitTCA",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "H Block",
        "description": "Dummy description for H Block",
        "location": "https://maps.app.goo.gl/7HDJrL1z4iuF8aVFA",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "I Block",
        "description": "Dummy description for I Block",
        "location": "https://maps.app.goo.gl/jRqSjqGjmudpmJ2MA",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "J Block",
        "description": "Dummy description for J Block",
        "location": "https://maps.app.goo.gl/qaXpsKqNLRQXK1839",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "K Block",
        "description": "Dummy description for K Block",
        "location": "https://maps.app.goo.gl/vbc5BkuMke9yGkBa9",
        "image": "/assets/placeholder.jpg"
      }
    ],
    "Sports/Activity Centers": [
      {
        "name": "New Football Ground",
        "description": "Dummy description for New Football Ground",
        "location": "https://maps.app.goo.gl/iPp5vtALsEMvwQKq7",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Cricket Ground",
        "description": "Dummy description for Cricket Ground",
        "location": "https://maps.app.goo.gl/oU5hqXhf6WfJRdhP6",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Swimming Pool",
        "description": "Dummy description for Swimming Pool",
        "location": "https://maps.app.goo.gl/eWWuAgRhNtFuUAk97",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Kabaddi Court",
        "description": "Dummy description for Kabaddi Court",
        "location": "https://maps.app.goo.gl/EvEbWuwDRi8KTWim6",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Hockey Field/ Old Football Ground",
        "description": "Dummy description for Hockey Field/ Old Football Ground",
        "location": "https://maps.app.goo.gl/i1rQwUPZkSuuZ9K4A",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Volleyball Court",
        "description": "Dummy description for Volleyball Court",
        "location": "https://maps.app.goo.gl/FJmcDbkeZbhAH5Fm6",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Student Activity Centre",
        "description": "Dummy description for Student Activity Centre",
        "location": "https://maps.app.goo.gl/J3ZaXunfngTXdBJc8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Tennis Court",
        "description": "Dummy description for Tennis Court",
        "location": "https://maps.app.goo.gl/SapNbDigeAveke7i6",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Basketball Court",
        "description": "Dummy description for Basketball Court",
        "location": "https://maps.app.goo.gl/dAh6EBPwjvnRyp1r8",
        "image": "/assets/placeholder.jpg"
      }
    ],
    "Faculty Quarters": [
      {
        "name": "Director's Quarters",
        "description": "Dummy description for Director's Quarters",
        "location": "https://maps.app.goo.gl/WBRWCaMLk6Sapoqw8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Faculty Quarters - B Block",
        "description": "Dummy description for Faculty Quarters - B Block",
        "location": "https://maps.app.goo.gl/Wt6sDWq2o6vnQcpw8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Faculty Quarters - C Block",
        "description": "Dummy description for Faculty Quarters - C Block",
        "location": "https://maps.app.goo.gl/6hjbkeQr3xptj1XZA",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Faculty Quarters - D Block",
        "description": "Dummy description for Faculty Quarters - D Block",
        "location": "https://maps.app.goo.gl/FpH8UD1Ux6dxw2Bu9",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "F Quarters",
        "description": "Dummy description for F Quarters",
        "location": "https://maps.app.goo.gl/vzAm5faeuNd8wxtJ9",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Faculty Quarters - H2 Block",
        "description": "Dummy description for Faculty Quarters - H2 Block",
        "location": "https://maps.app.goo.gl/fvVmwLgsUyPAEPsK9",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Faculty Quarters - H4 Block",
        "description": "Dummy description for Faculty Quarters - H4 Block",
        "location": "https://maps.app.goo.gl/oFE62zFsAukn447k8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Faculty Quarters - H5 Block",
        "description": "Dummy description for Faculty Quarters - H5 Block",
        "location": "https://maps.app.goo.gl/CJgn8VJbuVdw1dAcA",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Faculty Quarters - H6 Block",
        "description": "Dummy description for Faculty Quarters - H6 Block",
        "location": "https://maps.app.goo.gl/RA5pejzfmg7DC8Lu9",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Married Scholar Apartments - H7 Block",
        "description": "Dummy description for Married Scholar Apartments - H7 Block",
        "location": "https://maps.app.goo.gl/NNkQqfLoHtKvxgSt8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Faculty Quarters - H8 Block",
        "description": "Dummy description for Faculty Quarters - H8 Block",
        "location": "https://maps.app.goo.gl/nkv5vtFjk45PEPEG8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Staff Quarters",
        "description": "Dummy description for Staff Quarters",
        "location": "https://maps.app.goo.gl/9CFfEJnUL6cZov3E7",
        "image": "/assets/placeholder.jpg"
      }
    ],
    "Miscellaneous": [
      {
        "name": "Main Gate",
        "description": "Dummy description for Main Gate",
        "location": "https://goo.gl/maps/VogcGfR9FNMowgHK6",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Medical Centre",
        "description": "Dummy description for Medical Centre",
        "location": "https://maps.app.goo.gl/FPa36ntAJ3FvBWYT9",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Rock Garden",
        "description": "Dummy description for Rock Garden",
        "location": "https://maps.app.goo.gl/4SHJHtUr33t7coRp7",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Chess Courtyard",
        "description": "Dummy description for Chess Courtyard",
        "location": "https://maps.app.goo.gl/aFVTEBJEP7vNLMra9",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Auditorium",
        "description": "Dummy description for Auditorium",
        "location": "https://goo.gl/maps/Xx9k6pfAFUjmd7jB8",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Amphitheatre",
        "description": "Dummy description for Amphitheatre",
        "location": "https://maps.app.goo.gl/hWYunbeRzbbYSEsH7",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Placement Unit",
        "description": "Dummy description for Placement Unit",
        "location": "https://maps.app.goo.gl/9DNjwhpVm7J2psJw5",
        "image": "/assets/placeholder.jpg"
      },
      {
        "name": "Technology Business Incubator",
        "description": "Dummy description for Technology Business Incubator",
        "location": "https://maps.app.goo.gl/h6qN2SbU2xVxsuaE8",
        "image": "/assets/placeholder.jpg"
      }
    ]
  }
};
