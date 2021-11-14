/*Las medidas están expresadas en cm, el precio en euros y la capacidad de los dispositivos en gigabytes */

db.equipos.insertMany(  [

    {   placa: { 
                socket: "am4", 
                marca:"gigabyte", 
                puertos: ["vga", "hdmi", "usb2.0", "rj45", "jack"], 
                formato:"atx" 
            }, 
        memoria: {
                capacidad:16, 
                tipo:"ddr4" 
            }, 
        procesador: {
            marca: "amd",
            modelo: "ryzen 5 2500 ",
            generacion: 2
        } , 
        tarjeta_grafica: { tipo: "integrada" },
        caja: {
                color: ["balnco", "azul"], 
                dimensiones: { h:80, w:65 },
                usb: [ 3.0, 3.1 ] 
            }, 
        fuente:"650w", 
        disco: [ { 
                tipo:"hdd", 
                capacidad:1024 
            }, {
                tipo: "ssd",
                capacidad: 256
            } ],
        sistema_operativo: true,
        precio: 900,
        fecha_fabricacion: new Date("2018-05-12")
    },

    { placa: { socket: "lga 1151", marca:"aorus", puertos: ["hdmi", "dvi", "rj45", "thundervolt", ["usb2.0", "usb3.0"], "jack"], formato:"atx" }, memoria: {capacidad: 16, tipo:"ddr4" }, procesador: { marca:"intel", modelo:"i7 9700k", generacion: 9  }, tarjeta_grafica: { marca: "nvidia", modelo: "rtx 2080ti"}, caja: {color: ["blanco", "rojo"], dimensiones: {h:90, w:75 }, usb: [ 3.0, 3.1 ] }, fuente:"850w", disco: [{ tipo:"ssd", capacidad: 512 }],  sistema_operativo: true, precio: 1200, fecha_fabricacion: new Date("2019-04-22") },
    { placa: { socket: "lga 1150", marca:"asrock", puertos: ["vga", "hdmi", "usb2.0", "rj45", "jack"], formato:"micro atx" }, memoria: {capacidad: 8, tipo:"ddr3" }, procesador: { marca:"intel", modelo:"i3 6300k", generacion: 6 }, tarjeta_grafica: { tipo: "integrada" }, caja: {color: ["negro", "verde"], dimensiones: {h:70, w:55 }, usb: [ 3.0, 3.1 ] }, fuente:"450w", disco: [{ tipo:"hdd", capacidad:512 }], sistema_operativo: true, precio: 500, fecha_fabricacion: new Date("2015-10-02") },
    { placa: { socket: "am4", marca:"hzxt", puertos: ["vga", "hdmi", "thundervolt", ["usb2.0", "usb3.0"], "rj45", "jack"], formato:"atx" }, memoria: {capacidad: 32, tipo:"ddr5" }, procesador: { marca:"amd", modelo:"ryzen 9 5950x", generacion: 5}, tarjeta_grafica: { marca: "nvidia", modelo: "rtx 3090ti" }, caja: {color: ["blanco", "morado", "negro"], dimensiones: {h:85, w:70 }, usb: [ 3.0, 4.0 ] }, fuente:"1200w", disco: [{ tipo:"ssd", capacidad: 1024 },{tipo: "hdd", capacidad: 512}], sistema_operativo: true, precio: 3300, fecha_fabricacion: new Date("2021-09-17") },
    { placa: { socket: "am3", marca:"gigabyte", puertos: ["dvi", "hdmi", "usb2.0", "rj45", "jack"], formato:"micro atx" }, memoria: {capacidad: 8, tipo:"ddr4" }, procesador: { marca:"amd", modelo:"athlon", generacion: 1 }, tarjeta_grafica: { tipo: "integrada" }, caja: {color: ["negro", "plateado"], dimensiones: {h:60, w:50 }, usb: [ 3.0, 3.1 ] }, fuente:"550w", disco: [{ tipo:"hdd", capacidad: 512 }], sistema_operativo: false, precio: 600, fecha_fabricacion: new Date("2015-05-11") },
    { placa: { socket: "am4", marca:"msi", puertos: ["vga", "hdmi", "usb3.0", "rj45", "jack"], formato:"micro atx" }, memoria: {capacidad: 16, tipo:"ddr4" }, procesador: { marca:"amd", modelo:"ryzen 7 2700x", generacion: 2 }, tarjeta_grafica: { marca: "amd", modelo: "radeon rx590" }, caja: {color: ["blanco", "azul"], dimensiones: {h:70, w:60 }, usb: [ 3.0, 3.1 ] }, fuente:"650w", disco: [{ tipo:"ssd", capacidad: 512 }], sistema_operativo: false, precio: 750, fecha_fabricacion: new Date("2019-11-11") },
    { placa: { socket: "lga 1700", marca:"msi", puertos: ["dvi", "hdmi", "thundervolt", ["usb2.0", "usb3.0"], "rj45", "jack"], formato:"atx" }, memoria: {capacidad: 32, tipo:"ddr5" }, procesador: { marca:"intel", modelo:"i9 12900kf", generacion: 12 }, tarjeta_grafica: { marca: "nvidia", modelo: "rtx 3070 super" }, caja: {color: ["negro", "morado","gris"], dimensiones: {h:80, w:70 }, usb: [ 3.0, 4.0 ] }, fuente:"950w", disco: [{ tipo:"ssd", capacidad: 1024 }, {tipo:"hdd", capacidad:1024} ], sistema_operativo: true, precio: 2500, fecha_fabricacion: new Date("2021-11-03") },
    { placa: { socket: "am4", marca:"aorus", puertos: ["vga", "hdmi", "thundervolt", "usb3.0", "rj45", "jack"], formato:"micro atx" }, memoria: {capacidad: 16, tipo:"ddr4" }, procesador: { marca:"amd", modelo:"ryzen 7 3800x", generacion: 3 }, tarjeta_grafica: { marca: "amd", modelo: "radeon 5700xt" }, caja: {color: ["negro", "verde"], dimensiones: {h:70, w:55 }, usb: [ 3.1, 4.0 ] }, fuente:"750w", disco: [{ tipo:"ssd", capacidad:512 }, {tipo:"hdd", capacidad:512} ], sistema_operativo: false, precio: 1300, fecha_fabricacion: new Date("2021-02-22") },
    { placa: { socket: "lga 1151", marca:"gigabyte", puertos: ["dvi", "hdmi", "thundervolt", ["usb2.0", "usb3.0"], "rj45", "jack"], formato:"micro atx" }, memoria: {capacidad:16, tipo:"ddr4" }, procesador: { marca:"intel", modelo:"i5 6500k", generacion: 6  }, tarjeta_grafica:{ marca: "nvidia", modelo:"gtx 1060ti" }, caja: {color: ["blanco"], dimensiones: {h:65, w:50 }, usb: [ 3.0, 3.1 ] }, fuente:"500w", disco: [{ tipo:"hdd", capacidad: 512 }], sistema_operativo: false, precio: 600, fecha_fabricacion: new Date("2017-09-16") },
    { placa: { socket: "lga 1150", marca:"asrock", puertos: ["vga", "usb2.0", "rj45", "jack"], formato:"atx" }, memoria: {capacidad: 8, tipo:"ddr3" }, procesador: { marca:"intel", modelo:"pentium", generacion: 4 }, tarjeta_grafica: { tipo: "integrada" }, caja: {color: ["negro", "gris"], dimensiones: {h:75, w:60 }, usb: [ 2.0, 3.0 ] }, fuente:"450w", disco: [{ tipo:"hdd", capacidad: 512 }], sistema_operativo: false, precio: 350, fecha_fabricacion: new Date("2010-02-02") },
    { placa: { socket: "am4", marca:"aorus", puertos: ["dvi", "hdmi", "thundervolt", ["usb2.0", "usb3.1"], "rj45", "jack"], formato:"atx" }, memoria: {capacidad:64, tipo:"ddr5" }, procesador: { marca:"amd", modelo:"ryzen 9 5950x", generacion: 5 }, tarjeta_grafica:{ marca: "nvidia", modelo: "rtx 3090" }, caja: {color: ["negro", "rojo"], dimensiones: {h:80, w:70 }, usb: [ 3.2, 4.0 ] }, fuente:"1200w", disco: [{ tipo:"ssd", capacidad:1024 }, { tipo:"hdd", capacidad:2048}], sistema_operativo: true, precio: 5300, fecha_fabricacion: new Date("2021-10-12") },
    { placa: { socket: "am3", marca:"asus", puertos: ["dvi", "hdmi", "usb3.0", "rj45", "jack"], formato:"micro atx" }, memoria: {capacidad:8, tipo:"ddr4" }, procesador: { marca:"amd", modelo:"athlon", generacion: 1 }, tarjeta_grafica: {tipo: "integrada"}, caja: {color: ["blanco"], dimensiones: {h:60, w:50 }, usb: [ 3.0 ] }, fuente:"550w", disco: [{ tipo:"hdd", capacidad:2048 }], sistema_operativo: false, precio: 600, fecha_fabricacion: new Date("2014-11-22") },
    { placa: { socket: "lga 1151", marca:"asus", puertos: ["dvi", "hdmi", "thundervolt", "usb3.0", "rj45", "jack"], formato:"atx" }, memoria: {capacidad:16, tipo:"ddr4" }, procesador: { marca:"intel", modelo:"i5 8500k", generacion: 8 }, tarjeta_grafica: { marca:"amd", modelo:"radeon rx590" }, caja: {color: ["blanco", "azul"], dimensiones: {h:75, w:60 }, usb: [ 3.0, 3.2 ] }, fuente:"650w", disco: [{ tipo:"ssd", capacidad:512 }], sistema_operativo: true, precio: 900, fecha_fabricacion: new Date("2018-09-21") },
    { placa: { socket: "lga 1700", marca:"asus", puertos: ["dvi", "hdmi", "thundervolt", ["usb2.0", "usb3.0"], "rj45", "jack"], formato:"atx" }, memoria: {capacidad:32, tipo:"ddr4" }, procesador: { marca:"intel", modelo:"i7 11700k", generacion: 11 }, tarjeta_grafica: { marca:"nvidia", modelo:"rtx 3070 super" }, caja: {color: ["negro", ], dimensiones: {h:75, w:75 }, usb: [ 3.2, 4.0 ] }, fuente:"950w", disco: [{ tipo:"ssd", capacidad:512 }, { tipo:"hdd", capacidad:"1024"}], sistema_operativo: false, precio: 1800, fecha_fabricacion: new Date("2020-07-15") },
    { placa: { socket: "am4", marca:"aorus", puertos: ["vga", "hdmi", "thundervolt", ["usb2.0", "usb3.0"], "rj45", "jack"], formato:"micro atx" }, memoria: {capacidad:16, tipo:"ddr4" }, procesador: { marca:"amd", modelo:"ryzen 7 3700x", generacion: 3 }, tarjeta_grafica: { marca:"amd", modelo:"radeon 5500xt" }, caja: {color: ["rojo"], dimensiones: {h:55, w:50 }, usb: [ 3.1, 3.2 ] }, fuente:"650w", disco: [{ tipo:"ssd", capacidad:1024 }], sistema_operativo: true, precio: 1200, fecha_fabricacion: new Date("2019-05-01") },
    { placa: { socket: "lga 1151", marca:"hzxt", puertos: ["hdmi", "dvi", "rj45", "usb4.0", "jack"], formato:"micro atx" }, memoria: {capacidad: 32, tipo:"ddr4" }, procesador: { marca:"intel", modelo:"i9 9900k", generacion: 9  }, tarjeta_grafica: { marca: "nvidia", modelo: "rtx 3080ti"}, caja: {color: ["blanco"], dimensiones: {h:80, w:75 }, usb: [ 3.2, 3.1 ] }, fuente:"850w", disco: [{ tipo:"ssd", capacidad: 512 }, {tipo:"hdd", capacidad:512}],  sistema_operativo: false, precio: 2200, fecha_fabricacion: new Date("2019-12-02") },
    { placa: { socket: "lga 1150", marca:"asrock", puertos: ["vga", "usb3.0", "rj45", "jack"], formato:"atx" }, memoria: {capacidad: 16, tipo:"ddr3" }, procesador: { marca:"intel", modelo:"i3 6300k", generacion: 6 }, tarjeta_grafica: { marca:"nvidia", modelo:"gtz 1050ti" }, caja: {color: ["negro"], dimensiones: {h:75, w:65 }, usb: [ 2.0, 3.0, 3.1 ] }, fuente:"450w", disco: [{ tipo:"hdd", capacidad:512 }], sistema_operativo: true, precio: 600, fecha_fabricacion: new Date("2016-01-12") },
    { placa: { socket: "am4", marca:"hzxt", puertos: ["vga", "hdmi", "thundervolt", ["usb4.0", "usb3.1"], "rj45", "jack"], formato:"micro atx" }, memoria: {capacidad: 16, tipo:"ddr5" }, procesador: { marca:"amd", modelo:"ryzen 7 4550x", generacion: 4}, tarjeta_grafica: { marca: "nvidia", modelo: "rtx 2097ti" }, caja: {color: ["blanco", "negro"], dimensiones: {h:80, w:70 }, usb: [ 3.1, 4.0 ] }, fuente:"900w", disco: [{ tipo:"ssd", capacidad: 1024 }], sistema_operativo: true, precio: 2500, fecha_fabricacion: new Date("2020-09-01") },
    { placa: { socket: "am4", marca:"gigabyte", puertos: ["dvi", "vga", "usb2.0", "rj45", "jack"], formato:"atx" }, memoria: {capacidad: 8, tipo:"ddr4" }, procesador: { marca:"amd", modelo:"ryzen 3 1300", generacion: 1 }, tarjeta_grafica: { tipo: "integrada" }, caja: {color: ["negro"], dimensiones: {h:60, w:50 }, usb: [ 2.0, 3.0 ] }, fuente:"550w", disco: [{ tipo:"hdd", capacidad: 512 }], sistema_operativo: true, precio: 500, fecha_fabricacion: new Date("2017-06-14") },
    { placa: { socket: "am4", marca:"msi", puertos: ["vga", "hdmi", "usb3.2", "rj45", "jack"], formato:"micro atx" }, memoria: {capacidad: 16, tipo:"ddr4" }, procesador: { marca:"amd", modelo:"ryzen 5 2500", generacion: 2 }, tarjeta_grafica: { tipo:"integrada" }, caja: {color: ["blanco", "amarillo"], dimensiones: {h:70, w:65 }, usb: [ 3.0, 3.1 ] }, fuente:"650w", disco: [{ tipo:"ssd", capacidad: 512 }], sistema_operativo: false, precio: 700, fecha_fabricacion: new Date("2020-12-12") },
    { placa: { socket: "lga 1700", marca:"aorus", puertos: ["dvi", "hdmi", "thundervolt", ["usb2.0", "usb3.0"], "rj45", "jack"], formato:"micro atx" }, memoria: {capacidad: 32, tipo:"ddr4" }, procesador: { marca:"intel", modelo:"i9 12900k", generacion: 12 }, tarjeta_grafica: { marca: "nvidia", modelo: "rtx 3090" }, caja: {color: [ "morado","gris"], dimensiones: {h:80, w:70 }, usb: [ 3.2, 4.0 ] }, fuente:"1250w", disco: [{ tipo:"ssd", capacidad: 1024 }, {tipo:"hdd", capacidad:1024} ], sistema_operativo: true, precio: 2700, fecha_fabricacion: new Date("2021-11-23") },
] )