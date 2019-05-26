export let Menu = {
  breakfast:[
    {
      id: 1,
      item:"CAFÉ AMERICANO",
      price: 5,
      cantidad: 0,
      isSelected: false
    },
    {
      id: 2,
      item:"CAFÉ CON LECHE",
      price: 7,
      cantidad: 0,
      isSelected: false
    },
    {
      id: 3,
      item:"SANDWICH DE JAMÓN Y QUESO",
      price: 10,
      ingredients:[
        {
          name:"LECHUGA",
          isRequested: true
        },
        {
          name:"ZANAHORIA",
          isRequested: true
        },
        {
          name:"CEBOLLA",
          isRequested: true
        },
        {
          name:"CHILE",
          isRequested: true
        }
      ],
      cantidad: 0,
      isSelected: false
    },
    {
      id: 4,
      item:"JUGO DE FRUTAS NATURAL",
      price: 7,
      cantidad: 0,
      isSelected: false
    }
  ],
  hamburger:[
    {
      id: 5,
      item:"SENCILLA",
      price: 10,
      ingredients:[
        {
          name:"LECHUGA",
          isRequested: true
        },
        {
          name:"CEBOLLA",
          isRequested: true
        },
        {
          name:"JITOMATE",
          isRequested: true
        },
        {
          name:"CHILE",
          isRequested: true
        },
        {
          name:"PEPINILLOS",
          isRequested: true
        },
        {
          name:"AGUACATE",
          isRequested: true
        }
      ],
      meat:[
        {
          name:"RES",
          isRequested: false
        },
        {
          name:"POLLO",
          isRequested: false
        },
        {
          "name":"VEGETARIANA",
          "isRequested": false
        }
      ],
      cantidad: 0
    },
    {
      id: 6,
      item:"DOBLE",
      price: 15,
      ingredients:[
        {
          name:"LECHUGA",
          isRequested: true
        },
        {
          name:"CEBOLLA",
          isRequested: true
        },
        {
          name:"JITOMATE",
          isRequested: true
        },
        {
          name:"CHILE",
          isRequested: true
        },
        {
          name:"PEPINILLOS",
          isRequested: true
        },
        {
          name:"AGUACATE",
          isRequested: true
        }
      ],
      meat:[
        {
          name:"RES",
          isRequested: false
        },
        {
          name:"POLLO",
          isRequested: false
        },
        {
          name:"VEGETARIANA",
          isRequested: false
        }
      ],
      cantidad: 0
    }
  ],
  accompaniments: [
    {
      id: 7,
      item:"PAPAS FRITAS",
      price: 5,
      cantidad: 0
    },
    {
      id: 8,
      item:"AROS DE CEBOLLA",
      price: 5,
      cantidad: 0
    }
  ],
  drinks:[
    {
      id: 8,
      item:"AGUA 500ml",
      price: 5,
      cantidad: 0
    },
    {
      id: 9,
      item:"AGUA 750ml",
      price: 7,
      cantidad: 0
    },
    {
      id: 10,
      item:"REFRESCO 500ml",
      price: 7,
      cantidad: 0
    },
    {
      id: 11,
      item:"REFRESCO 750ml",
      price: 10,
      cantidad: 0
    }
  ],
  additional:[
    {
      id: 12,
      item:"QUESO",
      price: 1,
      isRequested: false
    },
    {
      id: 13,
      item:"HUEVO",
      price: 1,
      isRequested: false
    }
  ]
}
