export let Menu = {
  breakfast:[
    {
      id: 'MB01',
      item:"CAFÉ AMERICANO",
      price: 5,
      quantity: 0,
      isSelected: false
    },
    {
      id: 'MB02',
      item:"CAFÉ CON LECHE",
      price: 7,
      quantity: 0,
      isSelected: false
    },
    {
      id: 'MB03',
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
      quantity: 0,
      isSelected: false
    },
    {
      id: 'MB04',
      item:"JUGO DE FRUTAS NATURAL",
      price: 7,
      quantity: 0,
      isSelected: false
    }
  ],
  hamburger:[
    {
      id: 'MH01',
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
      quantity: 0
    },
    {
      id: 'MH02',
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
      quantity: 0
    }
  ],
  accompaniments: [
    {
      id: 'MH03',
      item:"PAPAS FRITAS",
      price: 5,
      quantity: 0
    },
    {
      id: 8,
      item:"AROS DE CEBOLLA",
      price: 5,
      quantity: 0
    }
  ],
  drinks:[
    {
      id: 'MD01',
      item:"AGUA 500ml",
      price: 5,
      quantity: 0
    },
    {
      id: 'MD02',
      item:"AGUA 750ml",
      price: 7,
      quantity: 0
    },
    {
      id: 'MD03',
      item:"REFRESCO 500ml",
      price: 7,
      quantity: 0
    },
    {
      id: 'MD04',
      item:"REFRESCO 750ml",
      price: 10,
      quantity: 0
    }
  ],
  additional:[
    {
      id: 'MA01',
      item:"QUESO",
      price: 1,
      isRequested: false
    },
    {
      id: 'MA02',
      item:"HUEVO",
      price: 1,
      isRequested: false
    }
  ]
}
