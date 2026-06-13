// 1. La Base de Datos del Fixture (Fase de Grupos)
const fixtureData = {
    "GRUPO A": [
        { id: "A1", fecha: "Jueves 11 junio 16:00", estadio: "Estadio Ciudad de México", loc: "MEX", flagL: "mx", vis: "RSA", flagV: "za" },
        { id: "A2", fecha: "Jueves 11 junio 23:00", estadio: "Estadio Guadalajara", loc: "KOR", flagL: "kr", vis: "CZE", flagV: "cz" },
        { id: "A3", fecha: "Jueves 18 junio 13:00", estadio: "Atlanta Stadium", loc: "CZE", flagL: "cz", vis: "RSA", flagV: "za" },
        { id: "A4", fecha: "Jueves 18 junio 22:00", estadio: "Estadio Guadalajara", loc: "MEX", flagL: "mx", vis: "KOR", flagV: "kr" },
        { id: "A5", fecha: "Miércoles 24 junio 22:00", estadio: "Estadio Ciudad de México", loc: "CZE", flagL: "cz", vis: "MEX", flagV: "mx" },
        { id: "A6", fecha: "Miércoles 24 junio 22:00", estadio: "Estadio Monterrey", loc: "RSA", flagL: "za", vis: "KOR", flagV: "kr" }
    ],
    "GRUPO B": [
        { id: "B1", fecha: "Viernes 12 junio 16:00", estadio: "Toronto Stadium", loc: "CAN", flagL: "ca", vis: "BIH", flagV: "ba" },
        { id: "B2", fecha: "Sábado 13 junio 16:00", estadio: "San Francisco Stadium", loc: "QAT", flagL: "qa", vis: "SUI", flagV: "ch" },
        { id: "B3", fecha: "Jueves 18 junio 16:00", estadio: "Los Angeles Stadium", loc: "SUI", flagL: "ch", vis: "BIH", flagV: "ba" },
        { id: "B4", fecha: "Jueves 18 junio 19:00", estadio: "BC Place Vancouver", loc: "CAN", flagL: "ca", vis: "QAT", flagV: "qa" },
        { id: "B5", fecha: "Miércoles 24 junio 16:00", estadio: "BC Place Vancouver", loc: "SUI", flagL: "ch", vis: "CAN", flagV: "ca" },
        { id: "B6", fecha: "Miércoles 24 junio 16:00", estadio: "Seattle Stadium", loc: "BIH", flagL: "ba", vis: "QAT", flagV: "qa" }
    ],
    "GRUPO C": [
        { id: "C1", fecha: "Sábado 13 junio 19:00", estadio: "Miami Stadium", loc: "BRA", flagL: "br", vis: "MAR", flagV: "ma" },
        { id: "C2", fecha: "Sábado 13 junio 22:00", estadio: "New York Stadium", loc: "HAI", flagL: "ht", vis: "SCO", flagV: "gb-sct" },
        { id: "C3", fecha: "Viernes 19 junio 19:00", estadio: "Miami Stadium", loc: "BRA", flagL: "br", vis: "HAI", flagV: "ht" },
        { id: "C4", fecha: "Viernes 19 junio 21:30", estadio: "Philadelphia Stadium", loc: "SCO", flagL: "gb-sct", vis: "MAR", flagV: "ma" },
        { id: "C5", fecha: "Miércoles 24 junio 19:00", estadio: "Philadelphia Stadium", loc: "BRA", flagL: "br", vis: "SCO", flagV: "gb-sct" },
        { id: "C6", fecha: "Miércoles 24 junio 19:00", estadio: "New York Stadium", loc: "MAR", flagL: "ma", vis: "HAI", flagV: "ht" }
    ],
    "GRUPO D": [
        { id: "D1", fecha: "Viernes 12 junio 22:00", estadio: "Los Angeles Stadium", loc: "USA", flagL: "us", vis: "PAR", flagV: "py" },
        { id: "D2", fecha: "Domingo 14 junio 01:00", estadio: "BC Place Vancouver", loc: "AUS", flagL: "au", vis: "TUR", flagV: "tr" },
        { id: "D3", fecha: "Viernes 19 junio 16:00", estadio: "Seattle Stadium", loc: "USA", flagL: "us", vis: "AUS", flagV: "au" },
        { id: "D4", fecha: "Sábado 20 junio 00:00", estadio: "San Francisco Stadium", loc: "TUR", flagL: "tr", vis: "PAR", flagV: "py" },
        { id: "D5", fecha: "Jueves 25 junio 23:00", estadio: "Los Angeles Stadium", loc: "TUR", flagL: "tr", vis: "USA", flagV: "us" },
        { id: "D6", fecha: "Jueves 25 junio 23:00", estadio: "San Francisco Stadium", loc: "PAR", flagL: "py", vis: "AUS", flagV: "au" }
    ],
    "GRUPO E": [
        { id: "E1", fecha: "Domingo 14 junio 14:00", estadio: "Houston Stadium", loc: "GER", flagL: "de", vis: "CUW", flagV: "cw" },
        { id: "E2", fecha: "Domingo 14 junio 20:00", estadio: "Philadelphia Stadium", loc: "CIV", flagL: "ci", vis: "ECU", flagV: "ec" },
        { id: "E3", fecha: "Sábado 20 junio 17:00", estadio: "Toronto Stadium", loc: "GER", flagL: "de", vis: "CIV", flagV: "ci" },
        { id: "E4", fecha: "Sábado 20 junio 21:00", estadio: "Kansas City Stadium", loc: "ECU", flagL: "ec", vis: "CUW", flagV: "cw" },
        { id: "E5", fecha: "Jueves 25 junio 17:00", estadio: "New York Stadium", loc: "ECU", flagL: "ec", vis: "GER", flagV: "de" },
        { id: "E6", fecha: "Jueves 25 junio 17:00", estadio: "Philadelphia Stadium", loc: "CUW", flagL: "cw", vis: "CIV", flagV: "ci" }
    ],
    "GRUPO F": [
        { id: "F1", fecha: "Domingo 14 junio 17:00", estadio: "Dallas Stadium", loc: "NED", flagL: "nl", vis: "JPN", flagV: "jp" },
        { id: "F2", fecha: "Domingo 14 junio 23:00", estadio: "Estadio Monterrey", loc: "SWE", flagL: "se", vis: "TUN", flagV: "tn" },
        { id: "F3", fecha: "Sábado 20 junio 14:00", estadio: "Houston Stadium", loc: "NED", flagL: "nl", vis: "SWE", flagV: "se" },
        { id: "F4", fecha: "Domingo 21 junio 01:00", estadio: "Estadio Monterrey", loc: "TUN", flagL: "tn", vis: "JPN", flagV: "jp" },
        { id: "F5", fecha: "Jueves 25 junio 20:00", estadio: "Dallas Stadium", loc: "TUN", flagL: "tn", vis: "NED", flagV: "nl" },
        { id: "F6", fecha: "Jueves 25 junio 20:00", estadio: "Estadio Monterrey", loc: "JPN", flagL: "jp", vis: "SWE", flagV: "se" }
    ],
    "GRUPO G": [
        { id: "G1", fecha: "Lunes 15 junio 16:00", estadio: "Seattle Stadium", loc: "BEL", flagL: "be", vis: "EGY", flagV: "eg" },
        { id: "G2", fecha: "Lunes 15 junio 22:00", estadio: "Los Angeles Stadium", loc: "IRN", flagL: "ir", vis: "NZL", flagV: "nz" },
        { id: "G3", fecha: "Domingo 21 junio 16:00", estadio: "Los Angeles Stadium", loc: "BEL", flagL: "be", vis: "IRN", flagV: "ir" },
        { id: "G4", fecha: "Domingo 21 junio 22:00", estadio: "BC Place Vancouver", loc: "NZL", flagL: "nz", vis: "EGY", flagV: "eg" },
        { id: "G5", fecha: "Sábado 27 junio 00:00", estadio: "Seattle Stadium", loc: "EGY", flagL: "eg", vis: "IRN", flagV: "ir" },
        { id: "G6", fecha: "Sábado 27 junio 00:00", estadio: "BC Place Vancouver", loc: "NZL", flagL: "nz", vis: "BEL", flagV: "be" }
    ],
    "GRUPO H": [
        { id: "H1", fecha: "Lunes 15 junio 13:00", estadio: "Atlanta Stadium", loc: "ESP", flagL: "es", vis: "CPV", flagV: "cv" },
        { id: "H2", fecha: "Lunes 15 junio 19:00", estadio: "Miami Stadium", loc: "KSA", flagL: "sa", vis: "URU", flagV: "uy" },
        { id: "H3", fecha: "Domingo 21 junio 13:00", estadio: "Atlanta Stadium", loc: "ESP", flagL: "es", vis: "KSA", flagV: "sa" },
        { id: "H4", fecha: "Domingo 21 junio 19:00", estadio: "Miami Stadium", loc: "URU", flagL: "uy", vis: "CPV", flagV: "cv" },
        { id: "H5", fecha: "Viernes 26 junio 21:00", estadio: "Houston Stadium", loc: "CPV", flagL: "cv", vis: "KSA", flagV: "sa" },
        { id: "H6", fecha: "Viernes 26 junio 21:00", estadio: "Estadio Guadalajara", loc: "URU", flagL: "uy", vis: "ESP", flagV: "es" }
    ],
    "GRUPO I": [
        { id: "I1", fecha: "Martes 16 junio 16:00", estadio: "New York NJ Stadium", loc: "FRA", flagL: "fr", vis: "SEN", flagV: "sn" },
        { id: "I2", fecha: "Martes 16 junio 19:00", estadio: "Boston Stadium", loc: "IRQ", flagL: "iq", vis: "NOR", flagV: "no" },
        { id: "I3", fecha: "Lunes 22 junio 18:00", estadio: "Philadelphia Stadium", loc: "FRA", flagL: "fr", vis: "IRQ", flagV: "iq" },
        { id: "I4", fecha: "Lunes 22 junio 21:00", estadio: "New York NJ Stadium", loc: "NOR", flagL: "no", vis: "SEN", flagV: "sn" },
        { id: "I5", fecha: "Viernes 26 junio 16:00", estadio: "Boston Stadium", loc: "NOR", flagL: "no", vis: "FRA", flagV: "fr" },
        { id: "I6", fecha: "Viernes 26 junio 16:00", estadio: "Toronto Stadium", loc: "SEN", flagL: "sn", vis: "IRQ", flagV: "iq" }
    ],
    "GRUPO J": [
        { id: "J1", fecha: "Martes 16 junio 22:00", estadio: "Kansas City Stadium", loc: "ARG", flagL: "ar", vis: "ALG", flagV: "dz" },
        { id: "J2", fecha: "Martes 16 junio 01:00", estadio: "San Francisco Stadium", loc: "AUT", flagL: "at", vis: "JOR", flagV: "jo" },
        { id: "J3", fecha: "Lunes 22 junio 14:00", estadio: "Dallas Stadium", loc: "ARG", flagL: "ar", vis: "AUT", flagV: "at" },
        { id: "J4", fecha: "Martes 23 junio 00:00", estadio: "San Francisco Stadium", loc: "JOR", flagL: "jo", vis: "ALG", flagV: "dz" },
        { id: "J5", fecha: "Sábado 27 junio 23:00", estadio: "Kansas City Stadium", loc: "ALG", flagL: "dz", vis: "AUT", flagV: "at" },
        { id: "J6", fecha: "Sábado 27 junio 23:00", estadio: "Dallas Stadium", loc: "JOR", flagL: "jo", vis: "ARG", flagV: "ar" }
    ],
    "GRUPO K": [
        { id: "K1", fecha: "Miércoles 17 junio 14:00", estadio: "Houston Stadium", loc: "POR", flagL: "pt", vis: "COD", flagV: "cd" },
        { id: "K2", fecha: "Miércoles 17 junio 23:00", estadio: "Estadio Ciudad de México", loc: "UZB", flagL: "uz", vis: "COL", flagV: "co" },
        { id: "K3", fecha: "Martes 23 junio 14:00", estadio: "Houston Stadium", loc: "POR", flagL: "pt", vis: "UZB", flagV: "uz" },
        { id: "K4", fecha: "Martes 23 junio 23:00", estadio: "Estadio Guadalajara", loc: "COL", flagL: "co", vis: "COD", flagV: "cd" },
        { id: "K5", fecha: "Sábado 27 junio 20:30", estadio: "Miami Stadium", loc: "COL", flagL: "co", vis: "POR", flagV: "pt" },
        { id: "K6", fecha: "Sábado 27 junio 20:30", estadio: "Atlanta Stadium", loc: "COD", flagL: "cd", vis: "UZB", flagV: "uz" }
    ],
    "GRUPO L": [
        { id: "L1", fecha: "Miércoles 17 junio 17:00", estadio: "Dallas Stadium", loc: "ENG", flagL: "gb-eng", vis: "CRO", flagV: "hr" },
        { id: "L2", fecha: "Miércoles 17 junio 20:00", estadio: "Toronto Stadium", loc: "GHA", flagL: "gh", vis: "PAN", flagV: "pa" },
        { id: "L3", fecha: "Martes 23 junio 17:00", estadio: "Boston Stadium", loc: "ENG", flagL: "gb-eng", vis: "GHA", flagV: "gh" },
        { id: "L4", fecha: "Martes 23 junio 20:00", estadio: "Toronto Stadium", loc: "PAN", flagL: "pa", vis: "CRO", flagV: "hr" },
        { id: "L5", fecha: "Sábado 27 junio 18:00", estadio: "New York NJ Stadium", loc: "PAN", flagL: "pa", vis: "ENG", flagV: "gb-eng" },
        { id: "L6", fecha: "Sábado 27 junio 18:00", estadio: "Philadelphia Stadium", loc: "CRO", flagL: "hr", vis: "GHA", flagV: "gh" }
    ]
};

// 2. Estructura Completa de Eliminatorias Manuales (Fiel al PDF oficial de FIFA)
const eliminatoriasData = {
    "DIECISEISAVOS DE FINAL": [
        { id: "P73", info: "Dom 28 junio - Los Angeles", placeholderL: "2° Grupo A", placeholderV: "2° Grupo B" },
        { id: "P74", info: "Lun 29 junio - Boston", placeholderL: "1° Grupo E", placeholderV: "3° A/B/C/D/F" },
        { id: "P75", info: "Lun 29 junio - Monterrey", placeholderL: "1° Grupo F", placeholderV: "2° Grupo C" },
        { id: "P76", info: "Lun 29 junio - Houston", placeholderL: "1° Grupo C", placeholderV: "2° Grupo F" },
        { id: "P77", info: "Mar 30 junio - Nueva York NJ", placeholderL: "1° Grupo I", placeholderV: "3° C/D/F/G/H" },
        { id: "P78", info: "Mar 30 junio - Dallas", placeholderL: "2° Grupo E", placeholderV: "2° Grupo I" },
        { id: "P79", info: "Mar 30 junio - Cdad. de México", placeholderL: "1° Grupo A", placeholderV: "3° C/E/F/H/I" },
        { id: "P80", info: "Mié 1 julio - Atlanta", placeholderL: "1° Grupo L", placeholderV: "3° E/H/I/J/K" },
        { id: "P81", info: "Mié 1 julio - San Francisco", placeholderL: "1° Grupo D", placeholderV: "3° B/E/F/I/J" },
        { id: "P82", info: "Mié 1 julio - Seattle", placeholderL: "1° Grupo G", placeholderV: "3° A/E/H/I/J" },
        { id: "P83", info: "Jue 2 julio - Toronto", placeholderL: "2° Grupo K", placeholderV: "2° Grupo L" },
        { id: "P84", info: "Jue 2 julio - Los Angeles", placeholderL: "1° Grupo H", placeholderV: "2° Grupo J" },
        { id: "P85", info: "Jue 2 julio - Vancouver", placeholderL: "1° Grupo B", placeholderV: "3° E/F/G/I/J" },
        { id: "P86", info: "Vie 3 julio - Miami", placeholderL: "1° Grupo J", placeholderV: "2° Grupo H" },
        { id: "P87", info: "Vie 3 julio - Kansas City", placeholderL: "1° Grupo K", placeholderV: "3° D/E/I/J/L" },
        { id: "P88", info: "Vie 3 julio - Dallas", placeholderL: "2° Grupo D", placeholderV: "2° Grupo G" }
    ],
    "OCTAVOS DE FINAL": [
        { id: "P89", info: "Sáb 4 julio - Filadelfia", placeholderL: "Ganador P74", placeholderV: "Ganador P77" },
        { id: "P90", info: "Sáb 4 julio - Houston", placeholderL: "Ganador P73", placeholderV: "Ganador P75" },
        { id: "P91", info: "Dom 5 julio - Nueva York NJ", placeholderL: "Ganador P76", placeholderV: "Ganador P78" },
        { id: "P92", info: "Dom 5 julio - Cdad. de México", placeholderL: "Ganador P79", placeholderV: "Ganador P80" },
        { id: "P93", info: "Lun 6 julio - Dallas", placeholderL: "Ganador P83", placeholderV: "Ganador P84" },
        { id: "P94", info: "Lun 6 julio - Seattle", placeholderL: "Ganador P81", placeholderV: "Ganador P82" },
        { id: "P95", info: "Mar 7 julio - Atlanta", placeholderL: "Ganador P86", placeholderV: "Ganador P88" },
        { id: "P96", info: "Mar 7 julio - Vancouver", placeholderL: "Ganador P85", placeholderV: "Ganador P87" }
    ],
    "CUARTOS DE FINAL": [
        { id: "P97", info: "Jue 9 julio - Boston", placeholderL: "Ganador P89", placeholderV: "Ganador P90" },
        { id: "P98", info: "Vie 10 julio - Los Angeles", placeholderL: "Ganador P93", placeholderV: "Ganador P94" },
        { id: "P99", info: "Sáb 11 julio - Miami", placeholderL: "Ganador P91", placeholderV: "Ganador P92" },
        { id: "P100", info: "Sáb 11 julio - Kansas City", placeholderL: "Ganador P95", placeholderV: "Ganador P96" }
    ],
    "SEMIFINALES": [
        { id: "P101", info: "Mar 14 julio - Dallas", placeholderL: "Ganador P97", placeholderV: "Ganador P98" },
        { id: "P102", info: "Mié 15 julio - Atlanta", placeholderL: "Ganador P99", placeholderV: "Ganador P100" }
    ],
    "TERCER PUESTO": [
        { id: "P103", info: "Sáb 18 julio - Miami", placeholderL: "Perdedor P101", placeholderV: "Perdedor P102" }
    ],
    "FINAL": [
        { id: "P104", info: "Dom 19 julio - Nueva York NJ", placeholderL: "Ganador P101", placeholderV: "Ganador P102" }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    generarFixtureDOM();
    generarEliminatoriasDOM();
    cargarProgreso();
    calcularTablas(); 

    // Escucha cambios en Fase de Grupos
    document.getElementById('fixture-grupos').addEventListener('input', (e) => {
        if (e.target.classList.contains('goles-input')) {
            guardarPartidoGrupo(e.target);
            calcularTablas();
        }
    });

    // Escucha cambios en todas las fases Eliminatorias
    document.getElementById('fixture-eliminatorias').addEventListener('input', (e) => {
        if (e.target.classList.contains('goles-input') || e.target.classList.contains('equipo-input')) {
            guardarPartidoEliminatorio(e.target);
        }
    });
});

function generarFixtureDOM() {
    const contenedor = document.getElementById('fixture-grupos');
    contenedor.innerHTML = '';
    for (const [nombreGrupo, partidos] of Object.entries(fixtureData)) {
        const grupoCard = document.createElement('section');
        grupoCard.className = 'grupo-card';
        grupoCard.id = `card-${nombreGrupo.replace(" ", "-")}`;
        let partidosHTML = '';
        partidos.forEach(p => {
            partidosHTML += `
                <div class="partido" data-partido-id="${p.id}" data-local="${p.loc}" data-visitante="${p.vis}">
                    <div class="info-partido"><span class="fecha">${p.fecha}</span><span class="estadio">${p.estadio}</span></div>
                    <div class="enfrentamiento">
                        <div class="equipo local"><span class="codigo">${p.loc}</span><img src="https://flagcdn.com/w40/${p.flagL}.png" class="bandera"></div>
                        <div class="marcador">
                            <input type="number" min="0" class="goles-input" data-equipo="local">
                            <span class="separador">-</span>
                            <input type="number" min="0" class="goles-input" data-equipo="visitante">
                        </div>
                        <div class="equipo visitante"><img src="https://flagcdn.com/w40/${p.flagV}.png" class="bandera"><span class="codigo">${p.vis}</span></div>
                    </div>
                </div>`;
        });
        grupoCard.innerHTML = `
            <div class="grupo-header"><h2>${nombreGrupo}</h2></div>
            <div class="partidos-list">${partidosHTML}</div>
            <div class="tabla-posiciones">
                <table id="tabla-${nombreGrupo.replace(" ", "-")}">
                    <thead><tr><th>Pos</th><th class="text-left">Equipo</th><th>Pts</th><th>PJ</th><th>DG</th></tr></thead>
                    <tbody></tbody>
                </table>
            </div>`;
        contenedor.appendChild(grupoCard);
    }
}

function generarEliminatoriasDOM() {
    const contenedor = document.getElementById('fixture-eliminatorias');
    contenedor.innerHTML = '';
    
    for (const [nombreFase, partidos] of Object.entries(eliminatoriasData)) {
        const faseSection = document.createElement('section');
        
        // IDENTIFICACIÓN SEMÁNTICA: Distinguimos la Final de las llaves comunes
        if (nombreFase === "FINAL") {
            faseSection.className = 'fase-eliminatoria-seccion seccion-final-unica';
        } else if (nombreFase === "TERCER PUESTO") {
            faseSection.className = 'fase-eliminatoria-seccion seccion-tercer-puesto';
        } else {
            faseSection.className = 'fase-eliminatoria-seccion';
        }
        
        let partidosHTML = '';
        partidos.forEach(p => {
            partidosHTML += `
                <div class="partido partido-eliminatorio" data-partido-id="${p.id}">
                    <div class="info-partido"><strong>${p.id}</strong> — ${p.info}</div>
                    <div class="enfrentamiento">
                        <div class="equipo local">
                            <input type="text" class="equipo-input local-name" placeholder="${p.placeholderL}" data-equipo="local">
                        </div>

                        <div class="marcador">
                            <input type="text" class="goles-input goles-eliminatoria" placeholder="" data-equipo="local">
                            <span class="separador">-</span>
                            <input type="text" class="goles-input goles-eliminatoria" placeholder="" data-equipo="visitante">
                        </div>
                        
                        <div class="equipo visitante">
                            <input type="text" class="equipo-input visitante-name" placeholder="${p.placeholderV}" data-equipo="visitante">
                        </div>
                    </div>
                </div>`;
        });
        
        // ESTRUCTURA CORREGIDA: Si es la final, no usa la clase masiva '.partidos-list'
        const claseLista = (nombreFase === "FINAL" || nombreFase === "TERCER PUESTO") 
            ? 'contenedor-final-bloque' 
            : 'partidos-list';

        faseSection.innerHTML = `
            <div class="fase-header">
                <h2>${nombreFase}</h2>
            </div>
            <div class="${claseLista}">
                ${partidosHTML}
            </div>`;
            
        contenedor.appendChild(faseSection);
    }
}




function calcularTablas() {
    for (const nombreGrupo of Object.keys(fixtureData)) {
        const idGrupoClean = nombreGrupo.replace(" ", "-");
        const card = document.getElementById(`card-${idGrupoClean}`);
        if (!card) continue;

        let infoEquipos = {};
        card.querySelectorAll('.partido').forEach(partido => {
            infoEquipos[partido.dataset.local] = { pts: 0, pj: 0, gf: 0, gc: 0 };
            infoEquipos[partido.dataset.visitante] = { pts: 0, pj: 0, gf: 0, gc: 0 };
        });

        card.querySelectorAll('.partido').forEach(partido => {
            const valL = partido.querySelector('[data-equipo="local"]').value;
            const valV = partido.querySelector('[data-equipo="visitante"]').value;
            if (valL !== "" && valV !== "") {
                const gL = parseInt(valL); const gV = parseInt(valV);
                const loc = partido.dataset.local; const vis = partido.dataset.visitante;
                infoEquipos[loc].pj++; infoEquipos[vis].pj++;
                infoEquipos[loc].gf += gL; infoEquipos[loc].gc += gV;
                infoEquipos[vis].gf += gV; infoEquipos[vis].gc += gL;
                if (gL > gV) infoEquipos[loc].pts += 3;
                else if (gV > gL) infoEquipos[vis].pts += 3;
                else { infoEquipos[loc].pts += 1; infoEquipos[vis].pts += 1; }
            }
        });

        let tablaOrdenada = Object.keys(infoEquipos).map(name => ({ name, ...infoEquipos[name] }));
        tablaOrdenada.sort((a, b) => b.pts !== a.pts ? b.pts - a.pts : (b.gf - b.gc) !== (a.gf - a.gc) ? (b.gf - b.gc) - (a.gf - a.gc) : b.gf - a.gf);

        const tbody = card.querySelector(`#tabla-${idGrupoClean} tbody`);
        tbody.innerHTML = '';
        tablaOrdenada.forEach((equipo, index) => {
            const tr = document.createElement('tr');
            if (index < 2) tr.className = 'clasificado';
            tr.innerHTML = `<td>${index + 1}</td><td class="text-left font-bold">${equipo.name}</td><td class="font-bold text-verde">${equipo.pts}</td><td>${equipo.pj}</td><td>${equipo.gf - equipo.gc}</td>`;
            tbody.appendChild(tr);
        });
    }
}

function guardarPartidoGrupo(inputCambiado) {
    const partidoCard = inputCambiado.closest('.partido');
    const partidoId = partidoCard.getAttribute('data-partido-id');
    const golLocal = partidoCard.querySelector('.marcador [data-equipo="local"]').value;
    const golVisitante = partidoCard.querySelector('.marcador [data-equipo="visitante"]').value;
    localStorage.setItem(`grupo_${partidoId}`, JSON.stringify({ local: golLocal, visitante: golVisitante }));
}


function guardarPartidoEliminatorio(inputCambiado) {
    const partidoCard = inputCambiado.closest('.partido-eliminatorio');
    const partidoId = partidoCard.getAttribute('data-partido-id');
    
    const nameL = partidoCard.querySelector('.local-name').value;
    const nameV = partidoCard.querySelector('.visitante-name').value;
    
    // Cambiado: Leemos el .value puro como texto, sin forzar conversión a número entero
    const golL = partidoCard.querySelector('.marcador [data-equipo="local"]').value;
    const golV = partidoCard.querySelector('.marcador [data-equipo="visitante"]').value;

    localStorage.setItem(`eliminatoria_${partidoId}`, JSON.stringify({
        nameLocal: nameL,
        nameVisitante: nameV,
        golLocal: golL,
        golVisitante: golV
    }));
}

function cargarProgreso() {
    // 1. Cargar la fase de grupos
    document.querySelectorAll('#fixture-grupos .partido').forEach(partidoCard => {
        const partidoId = partidoCard.getAttribute('data-partido-id');
        const datosGuardados = localStorage.getItem(`grupo_${partidoId}`);
        if (datosGuardados) {
            const data = JSON.parse(datosGuardados);
            partidoCard.querySelector('.marcador [data-equipo="local"]').value = data.local;
            partidoCard.querySelector('.marcador [data-equipo="visitante"]').value = data.visitante;
        }
    });

    // 2. Cargar todas las eliminatorias manuales guardadas
    document.querySelectorAll('.partido-eliminatorio').forEach(partidoCard => {
        const partidoId = partidoCard.getAttribute('data-partido-id');
        const datosGuardados = localStorage.getItem(`eliminatoria_${partidoId}`);
        if (datosGuardados) {
            const data = JSON.parse(datosGuardados);
            partidoCard.querySelector('.local-name').value = data.nameLocal || "";
            partidoCard.querySelector('.visitante-name').value = data.nameVisitante || "";
            partidoCard.querySelector('.marcador [data-equipo="local"]').value = data.golLocal || "";
            partidoCard.querySelector('.marcador [data-equipo="visitante"]').value = data.golVisitante || "";
        }
    });
}