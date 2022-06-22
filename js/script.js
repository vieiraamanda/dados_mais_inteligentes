function conhecer() {

    const texto = " <html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body>d</html>"

    // O nome das cidades avaliadas

    const buscaCidades = texto.split("*")

    const cidade1 = buscaCidades[1]
    const cidade2 = buscaCidades[3]
    const cidade3 = buscaCidades[5]

    const cidades = document.getElementById('cidades')
    cidades.innerHTML = `Estas são as cidades que iremos conhecer: ${cidade1}, ${cidade2} e ${cidade3}.`

    // Buscar Roteiros
    const buscaRoteiros = texto.split("#")
    
    // O conteúdo do roteiro A de cada cidade avaliada.

    const roteiroA1 = buscaRoteiros[1]
    const roteiroA2 = buscaRoteiros[4]
    const roteiroA3 = buscaRoteiros[7]

    const roteiroSaoPaulo = document.getElementById('roteiroSaoPaulo')
    const roteiroLasVegas = document.getElementById('roteiroLasVegas')
    const roteiroMoscou = document.getElementById('roteiroMoscou')

    roteiroSaoPaulo.innerHTML = `Em ${cidade1}: ${(roteiroA1.split(";"))}`
    roteiroLasVegas.innerHTML = `Em ${cidade2}: ${(roteiroA2.split(";"))}`
    roteiroMoscou.innerHTML = `Em ${cidade3}: ${(roteiroA3.split(";"))}`

    //Quantos locais são citados no Roteiro A de cada cidade

    const locais1 = roteiroA1.split(";")
    const locais2 = roteiroA2.split(";")
    const locais3 = roteiroA3.split(";")

    const totalLocais = document.getElementById('quantos-locais')
    totalLocais.innerHTML = `No Roteiro A de ${cidade1} foram citados ${locais1.length} locais. Em ${cidade2} foram citados ${locais2.length} locais e, na cidade de ${cidade3}, ${locais3.length} locais foram citados.`

    //Encontrar a posição dos pontos turísticos
    const getIndex = texto.indexOf('Fremont')
    // console.log(getIndex)

    //O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo.

    const pontosTuristicosCentro = [texto.substring(466, 480), texto.substring(482, 498), texto.substring(500, 511)]

    const bairroCentro = document.getElementById('bairro-centro')
    bairroCentro.innerHTML = `Os pontos turísticos localizados no bairro Centro da cidade de São Paulo são: ${pontosTuristicosCentro[0]}, ${pontosTuristicosCentro[1]} e ${pontosTuristicosCentro[2]}.`

    //O nome dos pontos turísticos localizados no bairro Downtown na cidade de Las Vegas.
    
    const pontosTuristicosDowntown = [texto.substring(1079, 1086), texto.substring(1088, 1108), texto.substring(1110, 1144)]

    const bairroDowntown = document.getElementById('bairro-downtown')
    bairroDowntown.innerHTML = `Os pontos turísticos localizados no bairro Downtown da cidade de Las Vegas são: ${pontosTuristicosDowntown[0]}, ${pontosTuristicosDowntown[1]} e ${pontosTuristicosDowntown[2]}.`

}