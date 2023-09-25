alert("Datos de Messi, Julian Alvarez, Di Maria, Garnacho, Dybala");
alert("Ingrese uno de esos nombres");

do {
    let nombre = prompt("Ingresar nombre de jugador de futbol:");
    switch (nombre) {
        case "Messi":
            alert("Actual equipo Inter de Miami");
            alert("Goles en seleccion: 104");
            alert("Goles en equipos: 715");
            alert("Campeonatos con clubes: 50");
            alert("Campeonatos con seleccion: 7");
            alert("El mejor jugador de todos los tiempos")
            let edad_messi = 36;
            if (edad_messi >= 18 && edad_messi <= 25) {
                alert("Es joven esta en sus primeros años de carrera")
            } else if (edad_messi >= 26 && edad_messi < 33) {
                alert("Ya cuenta con una trayectoria")
            } else{
                alert("En sus ultimos años de carrera :C")
            }
            break;
        case "Julian Alvarez":
            alert("Actualmente en el Manchester City");
            alert("Goles en seleccion: 4");
            alert("Goles en equipos: 82");
            alert("Campeonatos con clubes: 12");
            alert("Campeonatos con seleccion: 4");
            let edad_julian_alvarez = 23;
            if (edad_julian_alvarez >= 18 && edad_julian_alvarez <= 25) {
                alert("Es joven esta en sus primeros años de carrera")
            } else if (edad_julian_alvarez >= 26 && edad_julian_alvarez < 33) {
                alert("Ya cuenta con una trayectoria")
            } else{
                alert("En sus ultimos años de carrera :C")
            }
            break;
        case "Di Maria":
            alert("Juega actualmente en el Benfica");
            alert("Goles en seleccion: 29");
            alert("Goles en equipos: 167");
            alert("Campeonatos con clubes: 43");
            alert("Campeonatos con seleccion: 7");
            let edad_di_maria = 35;
            if (edad_di_maria >= 18 && edad_di_maria <= 25) {
                alert("Es joven esta en sus primeros años de carrera")
            } else if (edad_di_maria >= 26 && edad_di_maria < 33) {
                alert("Ya cuenta con una trayectoria")
            } else{
                alert("En sus ultimos años de carrera :C")
            }
            break;
        case "Garnacho":
            alert("Juega actualmente en el Manchester United");
            alert("Goles en seleccion: 0");
            alert("Goles en equipos: 5");
            alert("Campeonatos con clubes: 1");
            alert("Campeonatos con seleccion: 0");
            let edad_garnacho = 19;
            if (edad_garnacho >= 18 && edad_garnacho <= 25) {
                alert("Es joven esta en sus primeros años de carrera")
            } else if (edad_garnacho >= 26 && edad_garnacho < 33) {
                alert("Ya cuenta con una trayectoria")
            } else{
                alert("En sus ultimos años de carrera :C")
            }
            break;
        case "Dybala":
            alert("Juega actualmente en el Manchester United");
            alert("Goles en seleccion: 70");
            alert("Goles en equipos: 500");
            alert("Campeonatos con clubes: 22");
            alert("Campeonatos con seleccion: 3");
            let edad_dybala = 29;
            if (edad_dybala >= 18 && edad_dybala <= 25) {
                alert("Es joven esta en sus primeros años de carrera")
            } else if (edad_dybala >= 26 && edad_dybala < 33) {
                alert("Ya cuenta con una trayectoria")
            } else{
                alert("En sus ultimos años de carrera :C")
            }
            break;
        default:
            alert("Error de nombre de jugador")
            break;
    }
}while(confirm("¿Quiere seguir ingresando nombre de jugadores?"));

