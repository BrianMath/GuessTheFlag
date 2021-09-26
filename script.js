// Apaga sessionStorage
sessionStorage.clear()

// Lista de bandeiras
const json = '[{"nome_pais":"Afeganistão","sigla":"AF"},{"nome_pais":"África do Sul","sigla":"ZA"},{"nome_pais":"Albânia","sigla":"AL"},{"nome_pais":"Alemanha","sigla":"DE"},{"nome_pais":"Andorra","sigla":"AD"},{"nome_pais":"Angola","sigla":"AO"},{"nome_pais":"Anguilla","sigla":"AI"},{"nome_pais":"Antártida","sigla":"AQ"},{"nome_pais":"Antígua e Barbuda","sigla":"AG"},{"nome_pais":"Arábia Saudita","sigla":"SA"},{"nome_pais":"Argélia","sigla":"DZ"},{"nome_pais":"Argentina","sigla":"AR"},{"nome_pais":"Armênia","sigla":"AM"},{"nome_pais":"Aruba","sigla":"AW"},{"nome_pais":"Austrália","sigla":"AU"},{"nome_pais":"Áustria","sigla":"AT"},{"nome_pais":"Azerbaijão","sigla":"AZ"},{"nome_pais":"Bahamas","sigla":"BS"},{"nome_pais":"Bahrein","sigla":"BH"},{"nome_pais":"Bangladesh","sigla":"BD"},{"nome_pais":"Barbados","sigla":"BB"},{"nome_pais":"Belarus","sigla":"BY"},{"nome_pais":"Bélgica","sigla":"BE"},{"nome_pais":"Belize","sigla":"BZ"},{"nome_pais":"Benin","sigla":"BJ"},{"nome_pais":"Bermudas","sigla":"BM"},{"nome_pais":"Bolívia","sigla":"BO"},{"nome_pais":"Bósnia-Herzegóvina","sigla":"BA"},{"nome_pais":"Botsuana","sigla":"BW"},{"nome_pais":"Brasil","sigla":"BR"},{"nome_pais":"Brunei","sigla":"BN"},{"nome_pais":"Bulgária","sigla":"BG"},{"nome_pais":"Burkina Fasso","sigla":"BF"},{"nome_pais":"Burundi","sigla":"BI"},{"nome_pais":"Butão","sigla":"BT"},{"nome_pais":"Cabo Verde","sigla":"CV"},{"nome_pais":"Camarões","sigla":"CM"},{"nome_pais":"Camboja","sigla":"KH"},{"nome_pais":"Canadá","sigla":"CA"},{"nome_pais":"Cazaquistão","sigla":"KZ"},{"nome_pais":"Chade","sigla":"TD"},{"nome_pais":"Chile","sigla":"CL"},{"nome_pais":"China","sigla":"CN"},{"nome_pais":"Chipre","sigla":"CY"},{"nome_pais":"Cingapura","sigla":"SG"},{"nome_pais":"Colômbia","sigla":"CO"},{"nome_pais":"Comores","sigla":"KM"},{"nome_pais":"Congo","sigla":"CG"},{"nome_pais":"Coréia do Norte","sigla":"KP"},{"nome_pais":"Coréia do Sul","sigla":"KR"},{"nome_pais":"Costa do Marfim","sigla":"CI"},{"nome_pais":"Costa Rica","sigla":"CR"},{"nome_pais":"Croácia","sigla":"HR"},{"nome_pais":"Cuba","sigla":"CU"},{"nome_pais":"Curaçao","sigla":"CW"},{"nome_pais":"Dinamarca","sigla":"DK"},{"nome_pais":"Djibuti","sigla":"DJ"},{"nome_pais":"Dominica","sigla":"DM"},{"nome_pais":"Egito","sigla":"EG"},{"nome_pais":"El Salvador","sigla":"SV"},{"nome_pais":"Emirados Árabes Unidos","sigla":"AE"},{"nome_pais":"Equador","sigla":"EC"},{"nome_pais":"Eritréia","sigla":"ER"},{"nome_pais":"Eslováquia","sigla":"SK"},{"nome_pais":"Eslovênia","sigla":"SI"},{"nome_pais":"Espanha","sigla":"ES"},{"nome_pais":"Estados Unidos","sigla":"US"},{"nome_pais":"Estônia","sigla":"EE"},{"nome_pais":"Etiópia","sigla":"ET"},{"nome_pais":"Fiji","sigla":"FJ"},{"nome_pais":"Filipinas","sigla":"PH"},{"nome_pais":"Finlândia","sigla":"FI"},{"nome_pais":"França","sigla":"FR"},{"nome_pais":"Gabão","sigla":"GA"},{"nome_pais":"Gâmbia","sigla":"GM"},{"nome_pais":"Gana","sigla":"GH"},{"nome_pais":"Geórgia","sigla":"GE"},{"nome_pais":"Gibraltar","sigla":"GI"},{"nome_pais":"Grã-Bretanha (Reino Unido, UK)","sigla":"GB"},{"nome_pais":"Granada","sigla":"GD"},{"nome_pais":"Grécia","sigla":"GR"},{"nome_pais":"Groelândia","sigla":"GL"},{"nome_pais":"Guadalupe","sigla":"GP"},{"nome_pais":"Guam (Território dos Estados Unidos)","sigla":"GU"},{"nome_pais":"Guatemala","sigla":"GT"},{"nome_pais":"Guernsey","sigla":"GG"},{"nome_pais":"Guiana","sigla":"GY"},{"nome_pais":"Guiana Francesa","sigla":"GF"},{"nome_pais":"Guiné","sigla":"GN"},{"nome_pais":"Guiné Equatorial","sigla":"GQ"},{"nome_pais":"Guiné-Bissau","sigla":"GW"},{"nome_pais":"Haiti","sigla":"HT"},{"nome_pais":"Holanda","sigla":"NL"},{"nome_pais":"Honduras","sigla":"HN"},{"nome_pais":"Hong Kong","sigla":"HK"},{"nome_pais":"Hungria","sigla":"HU"},{"nome_pais":"Iêmen","sigla":"YE"},{"nome_pais":"Ilha Bouvet","sigla":"BV"},{"nome_pais":"Ilha de Ascensão","sigla":"AC"},{"nome_pais":"Ilha de Man","sigla":"IM"},{"nome_pais":"Ilha Natal","sigla":"CX"},{"nome_pais":"Ilha Pitcairn","sigla":"PN"},{"nome_pais":"Ilha Reunião","sigla":"RE"},{"nome_pais":"Ilhas Aland","sigla":"AX"},{"nome_pais":"Ilhas Cayman","sigla":"KY"},{"nome_pais":"Ilhas Cocos","sigla":"CC"},{"nome_pais":"Ilhas Cook","sigla":"CK"},{"nome_pais":"Ilhas Faroes","sigla":"FO"},{"nome_pais":"Ilhas Geórgia do Sul e Sandwich do Sul","sigla":"GS"},{"nome_pais":"Ilhas Heard e McDonald (Território da Austrália)","sigla":"HM"},{"nome_pais":"Ilhas Malvinas","sigla":"FK"},{"nome_pais":"Ilhas Marianas do Norte","sigla":"MP"},{"nome_pais":"Ilhas Marshall","sigla":"MH"},{"nome_pais":"Ilhas Norfolk","sigla":"NF"},{"nome_pais":"Ilhas Salomão","sigla":"SB"},{"nome_pais":"Ilhas Seychelles","sigla":"SC"},{"nome_pais":"Ilhas Tokelau","sigla":"TK"},{"nome_pais":"Ilhas Turks e Caicos","sigla":"TC"},{"nome_pais":"Ilhas Virgens (Estados Unidos)","sigla":"VI"},{"nome_pais":"Ilhas Virgens (Inglaterra)","sigla":"VG"},{"nome_pais":"Índia","sigla":"IN"},{"nome_pais":"Indonésia","sigla":"ID"},{"nome_pais":"Irã","sigla":"IR"},{"nome_pais":"Iraque","sigla":"IQ"},{"nome_pais":"Irlanda","sigla":"IE"},{"nome_pais":"Islândia","sigla":"IS"},{"nome_pais":"Israel","sigla":"IL"},{"nome_pais":"Itália","sigla":"IT"},{"nome_pais":"Jamaica","sigla":"JM"},{"nome_pais":"Japão","sigla":"JP"},{"nome_pais":"Jersey","sigla":"JE"},{"nome_pais":"Jordânia","sigla":"JO"},{"nome_pais":"Kiribati","sigla":"KI"},{"nome_pais":"Kosovo","sigla":"XK"},{"nome_pais":"Kuait","sigla":"KW"},{"nome_pais":"Laos","sigla":"LA"},{"nome_pais":"Lesoto","sigla":"LS"},{"nome_pais":"Letônia","sigla":"LV"},{"nome_pais":"Líbano","sigla":"LB"},{"nome_pais":"Libéria","sigla":"LR"},{"nome_pais":"Líbia","sigla":"LY"},{"nome_pais":"Liechtenstein","sigla":"LI"},{"nome_pais":"Lituânia","sigla":"LT"},{"nome_pais":"Luxemburgo","sigla":"LU"},{"nome_pais":"Macau","sigla":"MO"},{"nome_pais":"Macedônia (República Yugoslava)","sigla":"MK"},{"nome_pais":"Madagascar","sigla":"MG"},{"nome_pais":"Malásia","sigla":"MY"},{"nome_pais":"Malaui","sigla":"MW"},{"nome_pais":"Maldivas","sigla":"MV"},{"nome_pais":"Mali","sigla":"ML"},{"nome_pais":"Malta","sigla":"MT"},{"nome_pais":"Marrocos","sigla":"MA"},{"nome_pais":"Martinica","sigla":"MQ"},{"nome_pais":"Maurício","sigla":"MU"},{"nome_pais":"Mauritânia","sigla":"MR"},{"nome_pais":"Mayotte","sigla":"YT"},{"nome_pais":"México","sigla":"MX"},{"nome_pais":"Micronésia","sigla":"FM"},{"nome_pais":"Moçambique","sigla":"MZ"},{"nome_pais":"Moldova","sigla":"MD"},{"nome_pais":"Mônaco","sigla":"MC"},{"nome_pais":"Mongólia","sigla":"MN"},{"nome_pais":"Montenegro","sigla":"ME"},{"nome_pais":"Montserrat","sigla":"MS"},{"nome_pais":"Myanma","sigla":"MM"},{"nome_pais":"Namíbia","sigla":"NA"},{"nome_pais":"Nauru","sigla":"NR"},{"nome_pais":"Nepal","sigla":"NP"},{"nome_pais":"Nicarágua","sigla":"NI"},{"nome_pais":"Níger","sigla":"NE"},{"nome_pais":"Nigéria","sigla":"NG"},{"nome_pais":"Niue","sigla":"NU"},{"nome_pais":"Noruega","sigla":"NO"},{"nome_pais":"Nova Caledônia","sigla":"NC"},{"nome_pais":"Nova Zelândia","sigla":"NZ"},{"nome_pais":"Omã","sigla":"OM"},{"nome_pais":"Países Baixos Caribenhos","sigla":"BQ"},{"nome_pais":"Palau","sigla":"PW"},{"nome_pais":"Palestina","sigla":"PS"},{"nome_pais":"Panamá","sigla":"PA"},{"nome_pais":"Papua-Nova Guiné","sigla":"PG"},{"nome_pais":"Paquistão","sigla":"PK"},{"nome_pais":"Paraguai","sigla":"PY"},{"nome_pais":"Peru","sigla":"PE"},{"nome_pais":"Polinésia Francesa","sigla":"PF"},{"nome_pais":"Polônia","sigla":"PL"},{"nome_pais":"Porto Rico","sigla":"PR"},{"nome_pais":"Portugal","sigla":"PT"},{"nome_pais":"Qatar","sigla":"QA"},{"nome_pais":"Quênia","sigla":"KE"},{"nome_pais":"Quirguistão","sigla":"KG"},{"nome_pais":"República Centro-africana","sigla":"CF"},{"nome_pais":"República Democrática do Congo","sigla":"CD"},{"nome_pais":"República Dominicana","sigla":"DO"},{"nome_pais":"República Tcheca","sigla":"CZ"},{"nome_pais":"Romênia","sigla":"RO"},{"nome_pais":"Ruanda","sigla":"RW"},{"nome_pais":"Rússia (antiga URSS) - Federação Russa","sigla":"RU"},{"nome_pais":"Saara Ocidental","sigla":"EH"},{"nome_pais":"Saint-Pierre e Miquelon","sigla":"PM"},{"nome_pais":"Samoa Americana","sigla":"AS"},{"nome_pais":"Samoa Ocidental","sigla":"WS"},{"nome_pais":"San Marino","sigla":"SM"},{"nome_pais":"Santa Helena","sigla":"SH"},{"nome_pais":"Santa Lúcia","sigla":"LC"},{"nome_pais":"São Bartolomeu","sigla":"BL"},{"nome_pais":"São Cristóvão e Névis","sigla":"KN"},{"nome_pais":"São Martim","sigla":"MF"},{"nome_pais":"São Martinho","sigla":"SX"},{"nome_pais":"São Tomé e Príncipe","sigla":"ST"},{"nome_pais":"São Vicente e Granadinas","sigla":"VC"},{"nome_pais":"Senegal","sigla":"SN"},{"nome_pais":"Serra Leoa","sigla":"SL"},{"nome_pais":"Sérvia","sigla":"RS"},{"nome_pais":"Síria","sigla":"SY"},{"nome_pais":"Somália","sigla":"SO"},{"nome_pais":"Sri Lanka","sigla":"LK"},{"nome_pais":"Suazilândia","sigla":"SZ"},{"nome_pais":"Sudão","sigla":"SD"},{"nome_pais":"Sudão do Sul","sigla":"SS"},{"nome_pais":"Suécia","sigla":"SE"},{"nome_pais":"Suíça","sigla":"CH"},{"nome_pais":"Suriname","sigla":"SR"},{"nome_pais":"Svalbard","sigla":"SJ"},{"nome_pais":"Tadjiquistão","sigla":"TJ"},{"nome_pais":"Tailândia","sigla":"TH"},{"nome_pais":"Taiwan","sigla":"TW"},{"nome_pais":"Tanzânia","sigla":"TZ"},{"nome_pais":"Território Britânico do Oceano índico","sigla":"IO"},{"nome_pais":"Territórios do Sul da França","sigla":"TF"},{"nome_pais":"Timor-Leste","sigla":"TL"},{"nome_pais":"Togo","sigla":"TG"},{"nome_pais":"Tonga","sigla":"TO"},{"nome_pais":"Trinidad e Tobago","sigla":"TT"},{"nome_pais":"Tristão da Cunha","sigla":"TA"},{"nome_pais":"Tunísia","sigla":"TN"},{"nome_pais":"Turcomenistão","sigla":"TM"},{"nome_pais":"Turquia","sigla":"TR"},{"nome_pais":"Tuvalu","sigla":"TV"},{"nome_pais":"Ucrânia","sigla":"UA"},{"nome_pais":"Uganda","sigla":"UG"},{"nome_pais":"Uruguai","sigla":"UY"},{"nome_pais":"Uzbequistão","sigla":"UZ"},{"nome_pais":"Vanuatu","sigla":"VU"},{"nome_pais":"Vaticano","sigla":"VA"},{"nome_pais":"Venezuela","sigla":"VE"},{"nome_pais":"Vietnã","sigla":"VN"},{"nome_pais":"Wallis e Futuna","sigla":"WF"},{"nome_pais":"Zâmbia","sigla":"ZM"},{"nome_pais":"Zimbábue","sigla":"ZW"}]'
const objeto = JSON.parse(json)

const paises = []
const siglas = []
/* --- */
for (let obj of objeto) {
	paises.push(obj.nome_pais)
}
for (let obj of objeto) {
	siglas.push(obj.sigla)
}

// Variáveis
let band0 = document.querySelector("img#Band0")
let band1 = document.querySelector("img#Band1")
let band2 = document.querySelector("img#Band2")
let band3 = document.querySelector("img#Band3")
let abrev = document.querySelector("span#Abreviatura")
let result = document.querySelector("p#Resultado")

// Pontuação da sessão
let spanPontos = document.querySelector("span#Pontos")
sessionStorage.setItem("Pontos", 0) // Pontuação inicial é 0
spanPontos.innerHTML = "0"
// Pontuação máxima
let spanMaxPontos = document.querySelector("span#MaxPontos")
if (localStorage.getItem("MaxPontos") === null) { // Se ainda não houver uma pontuação máxima ...
	localStorage.setItem("MaxPontos", 0) // ... define ela como 0
	spanMaxPontos.innerHTML = "0"
} else {
	spanMaxPontos.innerHTML = localStorage.getItem("MaxPontos")
}

function jogar() {
	// Apaga os seguintes pares de sessionStorage e p#Resultado
	sessionStorage.removeItem("Abreviacao")
	sessionStorage.removeItem("Posicao")
	result.innerHTML = ""
	
	// Ativa os radiobuttons
	let radioButtons = document.getElementsByTagName("input")
	for (rb of radioButtons) {
		rb.removeAttribute("disabled")
	}

	// Sorteio de 4 países únicos
	const bandeirasUnicas = []
	while (bandeirasUnicas.length < 4){
		let sigla = siglas[Math.floor(Math.random() * siglas.length)] // Escolhe alguma sigla em [siglas]
		
		if (bandeirasUnicas.indexOf(sigla) === -1) { // Se a sigla não estiver dentro de [bandeirasUnicas]
			bandeirasUnicas.push(sigla)
		}
	}
	console.log(bandeirasUnicas)
	
	// Escolhe o país certo e salva durante a sessão
	let posBandeiraCerta = Math.floor(Math.random() * bandeirasUnicas.length)
	sessionStorage.setItem("Abreviacao", bandeirasUnicas[posBandeiraCerta]) // Abreviação certa
	sessionStorage.setItem("Posicao", posBandeiraCerta) // Posição da certa

	// *MUDAR DEPOIS* Mostra a abreviatura do país certo
	let pais = paises[siglas.indexOf(sessionStorage.getItem("Abreviacao"))]
	abrev.innerHTML = `<strong>${pais}</strong>`
	
	band0.src = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${bandeirasUnicas[0]}.svg`
	band1.src = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${bandeirasUnicas[1]}.svg`
	band2.src = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${bandeirasUnicas[2]}.svg`
	band3.src = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${bandeirasUnicas[3]}.svg`
}

function adivinhar(posBandeira) {
	// Desativa os radiobuttons
	let radioButtons = document.getElementsByTagName("input")
	for (rb of radioButtons) {
		rb.setAttribute("disabled", true)
		rb.checked = false
	}
	
	if (posBandeira === Number(sessionStorage.getItem("Posicao"))) {
		result.innerHTML = "<strong>ACERTOU! :)</strong>"
		
		// Aumenta a pontuação da partida e altera span#Pontos
		let pts = Number(sessionStorage.getItem("Pontos"))
		pts += 1
		sessionStorage.setItem("Pontos", pts)
		spanPontos.innerHTML = sessionStorage.getItem("Pontos")
		
		// Aumenta a pontuação máxima se ela for superada
		if (localStorage.getItem("MaxPontos") < pts) {
			localStorage.setItem("MaxPontos", pts)
		}
	} else {
		result.innerHTML = "<strong>ERROU! :(</strong>"
		
		// Define a nova pontuação máxima em span#MaxPontos
		spanMaxPontos.innerHTML = localStorage.getItem("MaxPontos")
		
		// Apaga a pontuação e altera span#Pontos
		sessionStorage.setItem("Pontos", 0)
		spanPontos.innerHTML = "0"
		
		// Apaga os seguintes pares de sessionStorage
		sessionStorage.removeItem("Abreviacao")
		sessionStorage.removeItem("Posicao")
	}
}