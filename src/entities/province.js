class Province {
    constructor(id, name, full_name, latitude, longitude, display_order) {
        this.id = id;
        this.name = name;
        this.full_name = full_name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.display_order = display_order;
    }
}

const provincias_argentinas = [
    new Province(1, "Buenos Aires", "Buenos Aires", -34.6083, -58.3712, 1),
    new Province(2, "Catamarca", "Catamarca", -28.4696, -65.7852, 2),
    new Province(3, "Chaco", "Chaco", -27.4512, -58.9866, 3),
    new Province(4, "Chubut", "Chubut", -43.3002, -65.1023, 4),
    new Province(5, "Córdoba", "Córdoba", -31.4201, -64.1888, 5),
    new Province(6, "Corrientes", "Corrientes", -27.4676, -58.8341, 6),
    new Province(7, "Entre Ríos", "Entre Ríos", -32.0575, -59.2295, 7),
    new Province(8, "Formosa", "Formosa", -26.1865, -58.1735, 8),
    new Province(9, "Jujuy", "Jujuy", -24.1858, -65.2995, 9),
    new Province(10, "La Pampa", "La Pampa", -36.6141, -64.2833, 10),
    new Province(11, "La Rioja", "La Rioja", -29.4131, -66.8566, 11),
    new Province(12, "Mendoza", "Mendoza", -32.8895, -68.8458, 12)
];

export {Province,provincias_argentinas};