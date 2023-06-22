const menu_bar = document.querySelector('.menu_bar');
const hamburguer = document.querySelector('.hamburguer');
const dots = document.querySelector('.dots');
const menu_container = document.getElementById('menu_container');
const fieldsBtnsNextPrevious = document.querySelector('.fieldsBtnsNextPrevious');

hamburguer.addEventListener('click', ()=>{
    hamburguer.classList.toggle('clicked');
    menu_container.classList.toggle('open');
    fieldsBtnsNextPrevious.classList.toggle('hidden')
    if(hamburguer.classList.contains('clicked')){
        toTop.style.display = 'none';
    } else {
        toTop.style.display = 'flex';
    }
})

document.addEventListener('click', (e)=>{
    if(e.target === menu_container){
        hamburguer.click();
        toTop.style.display = 'flex';
    }
})


const rute1 = [
    'E sucedeu que, nos dias em que os juízes julgavam, houve uma fome na terra; por isso um homem de Belém de Judá saiu a peregrinar nos campos de Moabe, ele e sua mulher, e seus dois filhos;',
    'E era o nome deste homem Elimeleque, e o de sua mulher Noemi, e os de seus dois filhos Malom e Quiliom, efrateus, de Belém de Judá; e chegaram aos campos de Moabe, e ficaram ali.',
    'E morreu Elimeleque, marido de Noemi; e ficou ela com os seus dois filhos,',
    'Os quais tomaram para si mulheres moabitas; e era o nome de uma Orfa, e o da outra Rute; e ficaram ali quase dez anos.',
    'E morreram também ambos, Malom e Quiliom, ficando assim a mulher desamparada dos seus dois filhos e de seu marido.',
    'Então se levantou ela com as suas noras, e voltou dos campos de Moabe, porquanto na terra de Moabe ouviu que o Senhor tinha visitado o seu povo, dando-lhe pão.',
    'Por isso saiu do lugar onde estivera, e as suas noras com ela. E, indo elas caminhando, para voltarem para a terra de Judá,',
    'Disse Noemi às suas noras: Ide, voltai cada uma à casa de sua mãe; e o Senhor use convosco de benevolência, como vós usastes com os falecidos e comigo.',
    'O Senhor vos dê que acheis descanso cada uma em casa de seu marido. E, beijando-as ela, levantaram a sua voz e choraram.',
    'E disseram-lhe: Certamente voltaremos contigo ao teu povo.',
    'Porém Noemi disse: Voltai, minhas filhas. Por que iríeis comigo? Tenho eu ainda no meu ventre mais filhos, para que vos sejam por maridos?',
    'Voltai, filhas minhas, ide-vos embora, que já mui velha sou para ter marido; ainda quando eu dissesse: Tenho esperança, ou ainda que esta noite tivesse marido e ainda tivesse filhos,',
    'Esperá-los-íeis até que viessem a ser grandes? Deter-vos-íeis por eles, sem tomardes marido? Não, filhas minhas, que mais amargo me é a mim do que a vós mesmas; porquanto a mão do Senhor se descarregou contra mim.',
    'Então levantaram a sua voz, e tornaram a chorar; e Orfa beijou a sua sogra, porém Rute se apegou a ela.',
    'Por isso disse Noemi: Eis que voltou tua cunhada ao seu povo e aos seus deuses; volta tu também após tua cunhada.',
    'Disse, porém, Rute: Não me instes para que te abandone, e deixe de seguir-te; porque aonde quer que tu fores irei eu, e onde quer que pousares, ali pousarei eu; o teu povo é o meu povo, o teu Deus é o meu Deus;',
    'Onde quer que morreres morrerei eu, e ali serei sepultada. Faça-me assim o Senhor, e outro tanto, se outra coisa que não seja a morte me separar de ti.',
    'Vendo Noemi, que de todo estava resolvida a ir com ela, deixou de lhe falar.',
    'Assim, pois, foram-se ambas, até que chegaram a Belém; e sucedeu que, entrando elas em Belém, toda a cidade se comoveu por causa delas, e diziam: Não é esta Noemi?',
    'Porém ela lhes dizia: Não me chameis Noemi; chamai-me Mara; porque grande amargura me tem dado o Todo-Poderoso.',
    'Cheia parti, porém vazia o Senhor me fez tornar; por que pois me chamareis Noemi? O Senhor testifica contra mim, e o Todo-Poderoso me tem feito mal.',
    'Assim Noemi voltou, e com ela Rute a moabita, sua nora, que veio dos campos de Moabe; e chegaram a Belém no princípio da colheita das cevadas.'
]

const rute2 = [
    'E tinha Noemi um parente de seu marido, homem valente e poderoso, da família de Elimeleque; e era o seu nome Boaz.',
    'E Rute, a moabita, disse a Noemi: Deixa-me ir ao campo, e apanharei espigas atrás daquele em cujos olhos eu achar graça. E ela disse: Vai, minha filha.',
    'Foi, pois, e chegou, e apanhava espigas no campo após os segadores; e caiu-lhe em sorte uma parte do campo de Boaz, que era da família de Elimeleque.',
    'E eis que Boaz veio de Belém, e disse aos segadores: O Senhor seja convosco. E disseram-lhe eles: O Senhor te abençoe.',
    'Depois disse Boaz a seu moço, que estava posto sobre os segadores: De quem é esta moça?',
    'E respondeu o moço, que estava posto sobre os segadores, e disse: Esta é a moça moabita que voltou com Noemi dos campos de Moabe.',
    'Disse-me ela: Deixa-me colher espigas, e ajuntá-las entre as gavelas após os segadores. Assim ela veio, e desde pela manhã está aqui até agora, a não ser um pouco que esteve sentada em casa.',
    'Então disse Boaz a Rute: Ouve, filha minha; não vás colher em outro campo, nem tampouco passes daqui; porém aqui ficarás com as minhas moças.',
    'Os teus olhos estarão atentos no campo que segarem, e irás após elas; não dei ordem aos moços, que não te molestem? Tendo tu sede, vai aos vasos, e bebe do que os moços tirarem.',
    'Então ela caiu sobre o seu rosto, e se inclinou à terra; e disse-lhe: Por que achei graça em teus olhos, para que faças caso de mim, sendo eu uma estrangeira?',
    'E respondeu Boaz, e disse-lhe: Bem se me contou quanto fizeste à tua sogra, depois da morte de teu marido; e deixaste a teu pai e a tua mãe, e a terra onde nasceste, e vieste para um povo que antes não conheceste.',
    'O Senhor retribua o teu feito; e te seja concedido pleno galardão da parte do Senhor Deus de Israel, sob cujas asas te vieste abrigar.',
    'E disse ela: Ache eu graça em teus olhos, senhor meu, pois me consolaste, e falaste ao coração da tua serva, não sendo eu ainda como uma das tuas criadas.',
    'E, sendo já hora de comer, disse-lhe Boaz: Achega-te aqui, e come do pão, e molha o teu bocado no vinagre. E ela se assentou ao lado dos segadores, e ele lhe deu do trigo tostado, e comeu, e se fartou, e ainda lhe sobejou.',
    'E, levantando-se ela a colher, Boaz deu ordem aos seus moços, dizendo: Até entre as gavelas deixai-a colher, e não a censureis.',
    'E deixai cair alguns punhados, e deixai-os ficar, para que os colha, e não a repreendais.',
    'E esteve ela apanhando naquele campo até à tarde; e debulhou o que apanhou, e foi quase um efa de cevada.',
    'E tomou-o, e veio à cidade; e viu sua sogra o que tinha apanhado; também tirou, e deu-lhe o que sobejara depois de fartar-se.',
    'Então disse-lhe sua sogra: Onde colheste hoje, e onde trabalhaste? Bendito seja aquele que te reconheceu. E relatou à sua sogra com quem tinha trabalhado, e disse: O nome do homem com quem hoje trabalhei é Boaz.',
    'Então Noemi disse à sua nora: Bendito seja ele do Senhor, que ainda não tem deixado a sua beneficência nem para com os vivos nem para com os mortos. Disse-lhe mais Noemi: Este homem é nosso parente chegado, e um dentre os nossos remidores.',
    'E disse Rute, a moabita: Também ainda me disse: Com os moços que tenho te ajuntarás, até que acabem toda a sega que tenho.',
    'E disse Noemi a sua nora: Melhor é, filha minha, que saias com as suas moças, para que noutro campo não te encontrem.',
    'Assim, ajuntou-se com as moças de Boaz, para colher até que a sega das cevadas e dos trigos se acabou; e ficou com a sua sogra.'
]

const rute3 = [
    'E disse-lhe Noemi, sua sogra: Minha filha, não hei de buscar descanso, para que fiques bem?',
    'Ora, pois, não é Boaz, com cujas moças estiveste, de nossa parentela? Eis que esta noite padejará a cevada na eira.',
    'Lava-te, pois, e unge-te, e veste os teus vestidos, e desce à eira; porém não te dês a conhecer ao homem, até que tenha acabado de comer e beber.',
    'E há de ser que, quando ele se deitar, notarás o lugar em que se deitar; então entrarás, e descobrir-lhe-ás os pés, e te deitarás, e ele te fará saber o que deves fazer.',
    'E ela lhe disse: Tudo quanto me disseres, farei.',
    'Então foi para a eira, e fez conforme a tudo quanto sua sogra lhe tinha ordenado.',
    'Havendo, pois, Boaz comido e bebido, e estando já o seu coração alegre, veio deitar-se ao pé de um monte de grãos; então veio ela de mansinho, e lhe descobriu os pés, e se deitou.',
    'E sucedeu que, pela meia-noite, o homem estremeceu, e se voltou; e eis que uma mulher jazia a seus pés.',
    'E disse ele: Quem és tu? E ela disse: Sou Rute, tua serva; estende pois tua capa sobre a tua serva, porque tu és o remidor.',
    'E disse ele: Bendita sejas tu do Senhor, minha filha; melhor fizeste esta tua última benevolência do que a primeira, pois após nenhum dos jovens foste, quer pobre quer rico.',
    'Agora, pois, minha filha, não temas; tudo quanto disseste te farei, pois toda a cidade do meu povo sabe que és mulher virtuosa.',
    'Porém agora é verdade que eu sou remidor, mas ainda outro remidor há mais chegado do que eu.',
    'Fica-te aqui esta noite, e será que, pela manhã, se ele te redimir, bem está, que te redima; porém, se não quiser te redimir, vive o Senhor, que eu te redimirei. Deita-te aqui até amanhã.',
    'Ficou-se, pois, deitada a seus pés até pela manhã, e levantou-se antes que pudesse um conhecer o outro, porquanto ele disse: Não se saiba que alguma mulher veio à eira.',
    'Disse mais: Dá-me a capa que tens sobre ti, e segura-a. E ela a segurou; e ele mediu seis medidas de cevada, e lhas pôs em cima; então foi para a cidade.',
    'E foi à sua sogra, que lhe disse: Como foi, minha filha? E ela lhe contou tudo quanto aquele homem lhe fizera.',
    'Disse mais: Estas seis medidas de cevada me deu, porque me disse: Não vás vazia à tua sogra.',
    'Então disse ela: Espera, minha filha, até que saibas como irá o caso, porque aquele homem não descansará até que conclua hoje este negócio.'
]

const rute4 = [
    'E Boaz subiu à porta, e assentou-se ali; e eis que o remidor de que Boaz tinha falado ia passando, e disse-lhe: Ó fulano, vem cá, assenta-te aqui. E desviou-se para ali, e assentou-se.',
    'Então tomou dez homens dos anciãos da cidade, e disse: Assentai-vos aqui. E assentaram-se.',
    'Então disse ao remidor: Aquela parte da terra que foi de Elimeleque, nosso irmão, Noemi, que tornou da terra dos moabitas, está vendendo.',
    'E eu resolvi informar-te disso e dizer-te: Compra-a diante dos habitantes, e diante dos anciãos do meu povo; se a hás de redimir, redime-a, e se não a houveres de redimir, declara-mo, para que o saiba, pois outro não há senão tu que a redima, e eu depois de ti. Então disse ele: Eu a redimirei.',
    'Disse porém Boaz: No dia em que comprares a terra da mão de Noemi, também a comprarás da mão de Rute, a moabita, mulher do falecido, para suscitar o nome do falecido sobre a sua herança.',
    'Então disse o remidor: Para mim não a poderei redimir, para que não prejudique a minha herança; toma para ti o meu direito de remissão, porque eu não a poderei redimir.',
    'Havia, pois, já de muito tempo este costume em Israel, quanto a remissão e permuta, para confirmar todo o negócio; o homem descalçava o sapato e o dava ao seu próximo; e isto era por testemunho em Israel.',
    'Disse, pois, o remidor a Boaz: Toma-a para ti. E descalçou o sapato.',
    'Então Boaz disse aos anciãos e a todo o povo: Sois hoje testemunhas de que tomei tudo quanto foi de Elimeleque, e de Quiliom, e de Malom, da mão de Noemi,',
    'E de que também tomo por mulher a Rute, a moabita, que foi mulher de Malom, para suscitar o nome do falecido sobre a sua herança, para que o nome do falecido não seja desarraigado dentre seus irmãos e da porta do seu lugar; disto sois hoje testemunhas.',
    'E todo o povo que estava na porta, e os anciãos, disseram: Somos testemunhas; o Senhor faça a esta mulher, que entra na tua casa, como a Raquel e como a Lia, que ambas edificaram a casa de Israel; e porta-te valorosamente em Efrata, e faze-te nome afamado em Belém.',
    'E seja a tua casa como a casa de Perez (que Tamar deu à luz a Judá), pela descendência que o Senhor te der desta moça.',
    'Assim tomou Boaz a Rute, e ela lhe foi por mulher; e ele a possuiu, e o Senhor lhe fez conceber, e deu à luz um filho.',
    'Então as mulheres disseram a Noemi: Bendito seja o Senhor, que não deixou hoje de te dar remidor, e seja o seu nome afamado em Israel.',
    'Ele te será por restaurador da alma, e nutrirá a tua velhice, pois tua nora, que te ama, o deu à luz, e ela te é melhor do que sete filhos.',
    'E Noemi tomou o filho, e o pôs no seu colo, e foi sua ama.',
    'E as vizinhas lhe deram um nome, dizendo: A Noemi nasceu um filho. E deram-lhe o nome de Obede. Este é o pai de Jessé, pai de Davi.',
    'Estas são, pois, as gerações de Perez: Perez gerou a Hezrom,',
    'E Hezrom gerou a Rão, e Rão gerou a Aminadabe,',
    'E Aminadabe gerou a Naassom, e Naassom gerou a Salmom,',
    'E Salmom gerou a Boaz, e Boaz gerou a Obede,',
    'E Obede gerou a Jessé, e Jessé gerou a Davi.'
]

const rute1_naa = [
    'Nos dias em que os juízes julgavam, houve fome na terra de Israel. E um homem de Belém de Judá foi morar por algum tempo na terra de Moabe, com a sua mulher e os seus dois filhos.',
    'Este homem se chamava Elimeleque, e sua mulher se chamava Noemi. Os filhos se chamavam Malom e Quiliom. Eram efrateus, de Belém de Judá. Foram à terra de Moabe e ficaram ali.',
    'Algum tempo depois, Elimeleque, o marido de Noemi, morreu, e ela ficou sozinha com os dois filhos.',
    'Estes casaram com mulheres moabitas. O nome de uma delas era Orfa, e o nome da outra era Rute. E ficaram ali quase dez anos.',
    'Depois morreram também Malom e Quiliom, os dois filhos de Noemi. E assim ela ficou sozinha, sem os dois filhos e sem o marido.',
    'Então Noemi voltou da terra de Moabe com as suas noras, porque ainda em Moabe ouviu que o Senhor havia se lembrado do seu povo, dando-lhe alimento.',
    'Assim, ela saiu do lugar onde havia morado, e as duas noras estavam com ela. Enquanto caminhavam, voltando para a terra de Judá,',
    'Noemi disse às suas noras: — Vão agora e voltem cada uma para a casa de sua mãe. E que o Senhor seja bondoso com vocês, assim como vocês foram bondosas com os que morreram e comigo.',
    'O Senhor faça com que vocês sejam felizes, cada uma na casa de seu novo marido. E deu um beijo em cada uma delas. Elas, porém, começaram a chorar alto',
    'e lhe disseram: — Não! Nós iremos com a senhora para junto do seu povo.',
    'Mas Noemi disse: — Voltem, minhas filhas! Por que vocês iriam comigo? Vocês acham que eu ainda tenho filhos em meu ventre, para que casem com vocês?',
    'Voltem, minhas filhas! Vão embora, porque sou velha demais para ter marido. E ainda que eu dissesse: "Tenho esperança", ou ainda que casasse esta noite e tivesse filhos,',
    'será que vocês iriam esperar até que eles viessem a crescer? Ficariam tanto tempo sem casar? Não, minhas filhas! A minha amargura é maior do que a de vocês, porque o Senhor descarregou a sua mão contra mim.',
    'Então, de novo, choraram em alta voz. Orfa, com um beijo, se despediu de sua sogra, porém Rute se apegou a ela.',
    'Então Noemi disse: — Veja! A sua cunhada voltou para o seu povo e para os seus deuses. Vá você também com ela.',
    'Porém Rute respondeu: — Não insista para que eu a deixe nem me obrigue a não segui-la! Porque aonde quer que você for, irei eu; e onde quer que pousar, ali pousarei eu. O seu povo é o meu povo, e o seu Deus é o meu Deus.',
    'Onde quer que você morrer, morrerei eu e aí serei sepultada. Que o Senhor me castigue, se outra coisa que não seja a morte me separar de você.',
    'Quando Noemi viu que Rute estava mesmo decidida a acompanhá-la, deixou de insistir com ela.',
    'Então ambas se foram, até que chegaram a Belém. E aconteceu que, ao chegarem ali, toda a cidade se comoveu por causa delas. E as mulheres perguntavam: — Essa não é a Noemi?',
    'Porém ela lhes dizia: — Não me chamem de Noemi, mas de Mara, porque o Todo-Poderoso me deu muita amargura.',
    'Quando saí daqui, eu era plena, mas o Senhor me fez voltar vazia. Por que, então, querem me chamar de Noemi, se o Senhor deu testemunho contra mim e o Todo-Poderoso me afligiu?',
    'Foi assim que Noemi voltou da terra de Moabe, com Rute, sua nora, a moabita. E chegaram a Belém no começo da colheita da cevada.'
]

const rute2_naa = [
    'Noemi tinha um parente de seu marido, dono de muitos bens, da família de Elimeleque, o qual se chamava Boaz.',
    'Rute, a moabita, disse a Noemi: — Deixe-me ir ao campo para apanhar espigas atrás daquele que me permitir fazer isso. Noemi respondeu: — Vá, minha filha!',
    'Ela se foi, chegou ao campo e apanhava espigas atrás dos ceifeiros. Por casualidade entrou na parte do campo que pertencia a Boaz, que era da família de Elimeleque.',
    'Eis que Boaz veio de Belém e disse aos ceifeiros: — Que o Senhor esteja com vocês! E eles responderam: — Que o Senhor o abençoe!',
    'Depois, Boaz perguntou ao servo encarregado dos ceifeiros: — De quem é essa moça?',
    'O servo respondeu: — Essa é a moça moabita que veio com Noemi da terra de Moabe.',
    'Ela me pediu que a deixasse recolher espigas e ajuntá-las entre os feixes após os ceifeiros. Assim, ela veio e ficou aqui desde a manhã até agora. Só parou um pouco para descansar no abrigo.',
    'Então Boaz disse a Rute: — Escute, minha filha, você não precisa ir colher em outro campo, nem se afastar daqui. Fique aqui com as minhas servas.',
    'Fique atenta ao campo onde forem colher e vá atrás delas. Eu dei ordem aos servos para que não toquem em você. Quando você ficar com sede, vá até as vasilhas e beba da água que os servos tiraram.',
    'Então Rute se inclinou e, encostando o rosto no chão, disse a Boaz: — Por que o senhor está me favorecendo e se importa comigo, se eu sou uma estrangeira?',
    'Boaz respondeu: — Já me contaram tudo o que você fez pela sua sogra, depois que você perdeu o marido. Sei que você deixou pai, mãe e a terra onde nasceu e veio para um povo que antes disso você não conhecia.',
    'O Senhor lhe pague pelo bem que você fez. Que você receba uma grande recompensa do Senhor , Deus de Israel, sob cujas asas você veio buscar refúgio.',
    'Então Rute disse: — Meu caro senhor, você está me favorecendo muito, pois me consolou e falou ao coração desta sua serva, e eu nem mesmo sou como uma das suas servas.',
    'Na hora de comer, Boaz disse a Rute: — Venha para cá e coma do pão. Molhe o seu bocado no vinho. Ela se sentou ao lado dos ceifeiros, e Boaz lhe deu grãos tostados de cereais. Ela comeu até ficar satisfeita, e ainda sobrou.',
    'Quando ela se levantou para ir apanhar espigas, Boaz deu esta ordem aos seus servos: — Deixem que ela apanhe espigas até no meio dos feixes e não sejam rudes com ela.',
    'Tirem também algumas espigas dos feixes e deixem cair, para que ela as apanhe, e não a repreendam.',
    'E assim Rute esteve apanhando espigas naquele campo até de tarde. Depois debulhou o que havia apanhado, e foi quase vinte litros de cevada.',
    'Ela pegou o cereal e voltou para a cidade. E a sogra viu o quanto de cereal ela havia conseguido apanhar. Rute também deu para a sogra a comida que lhe havia sobrado, depois que ela comeu até ficar satisfeita.',
    'Então Noemi perguntou: — Onde você foi colher hoje? Onde trabalhou? Bendito seja aquele que acolheu você com tanta generosidade! E Rute contou à sua sogra onde havia trabalhado. E acrescentou: — O nome do homem com quem trabalhei hoje é Boaz.',
    'Então Noemi disse à sua nora: — Que ele seja abençoado pelo Senhor Deus, que não deixou de ser bondoso, nem para com os vivos nem para com os mortos. E Noemi acrescentou: — Esse homem é nosso parente chegado e um dos nossos resgatadores.',
    'Então Rute, a moabita, disse: — Ele também me disse que eu posso continuar com os servos dele, até que eles terminem de fazer a colheita.',
    'Noemi respondeu: — É melhor mesmo que você vá com as servas dele, minha filha. Noutro campo, poderiam maltratar você.',
    'Assim Rute ficou na companhia das servas de Boaz, para apanhar espigas, até que a colheita da cevada e do trigo se acabou. E continuou morando com a sua sogra.'
]

const rute3_naa = [
    'Noemi, a sogra de Rute, disse: — Minha filha, não é verdade que eu devo procurar um lar para você, para que você seja feliz?',
    'E esse Boaz, na companhia de cujas servas você esteve, não é um dos nossos parentes? Eis que esta noite ele estará limpando cevada na eira.',
    'Lave-se, ponha perfume, vista a sua melhor roupa e vá até a eira. Mas não deixe que ele perceba que você está ali, até que ele tenha acabado de comer e beber.',
    'Quando ele for dormir, repare bem o lugar onde ele vai se deitar. Então vá, descubra os pés dele e deite-se ali. Ele lhe dirá o que você deve fazer.',
    'Rute respondeu: — Vou fazer tudo isso que a senhora está me dizendo.',
    'Então Rute foi para a eira e fez conforme tudo o que a sua sogra lhe havia ordenado.',
    'Quando Boaz terminou de comer e beber e estava já de coração um tanto alegre, foi deitar-se ao pé de um monte de cereais. Então Rute chegou de mansinho, descobriu os pés dele, e se deitou.',
    'Aconteceu que, no meio da noite, o homem se assustou e sentou-se; e eis que uma mulher estava deitada a seus pés.',
    'Boaz perguntou: — Quem é você? Ela respondeu: — Sou Rute, a sua serva. Estenda a sua capa sobre esta sua serva, porque o senhor é um resgatador.',
    'Boaz respondeu: — Que você seja bendita do Senhor , minha filha! Você se mostrou mais bondosa agora do que no passado, pois não foi procurar um homem mais jovem, fosse rico ou fosse pobre.',
    'E agora, minha filha, não tenha medo. Tudo o que você falou eu vou fazer, porque todo o povo da cidade sabe que você é uma mulher virtuosa.',
    'Sim, é verdade que eu sou resgatador, mas há ainda outro resgatador que é parente mais chegado do que eu.',
    'Fique aqui esta noite. Pela manhã, se ele quiser resgatar você, muito bem; ele que o faça. Mas, se ele não quiser, eu o farei, tão certo como vive o Senhor . Deite-se aqui até de manhã.',
    'Rute ficou deitada aos pés dele até de manhã, mas levantou-se enquanto ainda estava escuro. Porque Boaz disse: — Que ninguém saiba que uma mulher veio até a eira.',
    'Disse mais: — Traga o manto que você está usando e segure-o. Ela o segurou, ele o encheu com seis medidas de cevada e o pôs sobre os ombros dela. Então ela voltou para a cidade.',
    'Quando chegou à casa de sua sogra, esta lhe perguntou: — Como se passaram as coisas, minha filha? E Rute lhe contou tudo o que aquele homem tinha feito por ela.',
    'E disse ainda: — Ele me deu estas seis medidas de cevada e me disse: "Não volte para a sua sogra sem nada."',
    'Então Noemi disse: — Espere, minha filha, até que você saiba em que darão as coisas, porque aquele homem não descansará enquanto não resolver este caso, ainda hoje.'
]

const rute4_naa = [
    'Boaz foi até o portão da cidade e sentou-se ali. Eis que o resgatador de que Boaz havia falado ia passando. Então ele o chamou: — Ó fulano, chegue até aqui e sente-se. Ele foi e se sentou.',
    'Então Boaz chamou dez homens dos anciãos da cidade e disse: — Sentem-se aqui. E eles se sentaram.',
    'Boaz disse ao resgatador: — Noemi, que voltou da terra dos moabitas, pôs à venda aquele pedaço de terra que foi de nosso parente Elimeleque.',
    'Então resolvi informá-lo disso e dizer a você: compre essas terras na presença dos que estão sentados aqui e na presença dos anciãos do povo. Se você quer resgatá-las, faça isto; se não, diga, para que eu o saiba. Porque não há outro que possa resgatá-las a não ser você; e, depois de você, eu. Então ele respondeu: — Eu vou resgatar essas terras.',
    'Boaz, porém, lhe disse: — No dia em que você receber essas terras da mão de Noemi, também terá de receber Rute, a moabita, já viúva, para perpetuar o nome do esposo falecido na herança dele.',
    'Então o resgatador disse: — Nesse caso, não poderei fazer o resgate, para não prejudicar a minha própria herança. Faça você uso desse meu direito, porque eu não poderei fazê-lo.',
    'Este era, antigamente, o costume em Israel, quanto a resgates e permutas: quem queria confirmar um negócio tirava a sandália do pé e a entregava ao outro. Era assim que se confirmava um negócio em Israel.',
    'Por isso, quando o resgatador disse a Boaz: "Faça você o resgate", tirou a sandália do pé.',
    'Então Boaz disse aos anciãos e a todo o povo: — Hoje vocês são testemunhas de que comprei de Noemi tudo o que pertencia a Elimeleque, a Quiliom e a Malom.',
    'E também tomo por mulher Rute, a moabita, que foi esposa de Malom, para perpetuar o nome deste sobre a sua herança, para que este nome não seja exterminado dentre seus irmãos e do portão da sua cidade. Hoje vocês são testemunhas disso.',
    'Todo o povo que estava no portão e os anciãos disseram: — Somos testemunhas. E disseram a Boaz: — Que o Senhor faça a esta mulher, que está entrando na sua família, como fez a Raquel e Lia, que edificaram a casa de Israel. E que você, Boaz, seja um homem poderoso em Efrata, e que o seu nome se torne famoso em Belém.',
    'Que, com os filhos que o Senhor lhe der dessa jovem, a sua casa seja como a de Perez, o filho que Tamar deu a Judá.',
    'Assim Boaz recebeu Rute, e ela passou a ser a sua mulher. Ele teve relações com ela, e o Senhor concedeu que ela ficasse grávida e tivesse um filho.',
    'Então as mulheres disseram a Noemi: — Bendito seja o Senhor , que não deixou hoje de lhe dar um neto que será o seu resgatador. Que o nome dele venha a ser famoso em Israel!',
    'Nele você terá renovação da vida e consolo na velhice, pois a sua nora, que ama você, o deu à luz, e para você ela é melhor do que sete filhos.',
    'Noemi pegou o menino no colo e passou a cuidar dele.',
    'As vizinhas lhe deram nome, dizendo: — Nasceu um filho para Noemi! E o chamaram de Obede. Este veio a ser o pai de Jessé, pai de Davi.',
    'E estas são as gerações de Perez: Perez gerou Esrom,',
    'Esrom gerou Rão, Rão gerou Aminadabe,',
    'Aminadabe gerou Naassom, Naassom gerou Salmom,',
    'Salmom gerou Boaz, Boaz gerou Obede,',
    'Obede gerou Jessé, e Jessé gerou Davi.'
]

const joel1 = [
    'Palavra do SENHOR, que foi dirigida a Joel, filho de Petuel.',
    'Ouvi isto, vós anciãos, e escutai, todos os moradores da terra: Porventura isto aconteceu em vossos dias, ou nos dias de vossos pais?',
    'Fazei sobre isto uma narração a vossos filhos, e vossos filhos a seus filhos, e os filhos destes à outra geração.',
    'O que ficou da lagarta, o gafanhoto o comeu, e o que ficou do gafanhoto, a locusta o comeu, e o que ficou da locusta, o pulgão o comeu.',
    'Despertai-vos, bêbados, e chorai; gemei, todos os que bebeis vinho, por causa do mosto, porque tirado é da vossa boca.',
    'Porque subiu contra a minha terra uma nação poderosa e sem número; os seus dentes são dentes de leão, e têm queixadas de um leão velho.',
    'Fez da minha vide uma assolação, e tirou a casca da minha figueira; despiu-a toda, e a lançou por terra; os seus sarmentos se embranqueceram.',
    'Lamenta como a virgem que está cingida de saco, pelo marido da sua mocidade.',
    'Foi cortada a oferta de alimentos e a libação da casa do Senhor; os sacerdotes, ministros do Senhor, estão entristecidos.',
    'O campo está assolado, e a terra triste; porque o trigo está destruído, o mosto se secou, o azeite acabou.',
    'Envergonhai-vos, lavradores, gemei, vinhateiros, sobre o trigo e a cevada; porque a colheita do campo pereceu.',
    'A vide se secou, a figueira se murchou, a romeira também, e a palmeira e a macieira; todas as árvores do campo se secaram, e já não há alegria entre os filhos dos homens.',
    'Cingi-vos e lamentai-vos, sacerdotes; gemei, ministros do altar; entrai e passai a noite vestidos de saco, ministros do meu Deus; porque a oferta de alimentos, e a libação, foram cortadas da casa de vosso Deus.',
    'Santificai um jejum, convocai uma assembléia solene, congregai os anciãos, e todos os moradores desta terra, na casa do Senhor vosso Deus, e clamai ao Senhor.',
    'Ai do dia! Porque o dia do Senhor está perto, e virá como uma assolação do Todo-Poderoso.',
    'Porventura o mantimento não está cortado de diante de nossos olhos, a alegria e o regozijo da casa de nosso Deus?',
    'As sementes apodreceram debaixo dos seus torrões, os celeiros foram assolados, os armazéns derrubados, porque se secou o trigo.',
    'Como geme o animal! As manadas de gados estão confusas, porque não têm pasto; também os rebanhos de ovelhas estão perecendo.',
    'A ti, ó Senhor, clamo, porque o fogo consumiu os pastos do deserto, e a chama abrasou todas as árvores do campo.',
    'Também todos os animais do campo bramam a ti; porque as correntes de água se secaram, e o fogo consumiu os pastos do deserto.'
]

const joel2 = [
    'Tocai a trombeta em Sião, e clamai em alta voz no meu santo monte; tremam todos os moradores da terra, porque o dia do SENHOR vem, já está perto;',
    'Dia de trevas e de escuridão; dia de nuvens e densas trevas, como a alva espalhada sobre os montes; povo grande e poderoso, qual nunca houve desde o tempo antigo, nem depois dele haverá pelos anos adiante, de geração em geração.',
    'Diante dele um fogo consome, e atrás dele uma chama abrasa; a terra diante dele é como o jardim do Éden, mas atrás dele um desolado deserto; sim, nada lhe escapará.',
    'A sua aparência é como a de cavalos; e como cavaleiros assim correm.',
    'Como o estrondo de carros, irão saltando sobre os cumes dos montes, como o ruído da chama de fogo que consome a pragana, como um povo poderoso, posto em ordem para o combate.',
    'Diante dele temerão os povos; todos os rostos se tornarão enegrecidos.',
    'Como valentes correrão, como homens de guerra subirão os muros; e marchará cada um no seu caminho e não se desviará da sua fileira.',
    'Ninguém apertará a seu irmão; marchará cada um pelo seu caminho; sobre a mesma espada se arremessarão, e não serão feridos.',
    'Irão pela cidade, correrão pelos muros, subirão às casas, entrarão pelas janelas como o ladrão.',
    'Diante dele tremerá a terra, abalar-se-ão os céus; o sol e a lua se enegrecerão, e as estrelas retirarão o seu resplendor.',
    'E o Senhor levantará a sua voz diante do seu exército; porque muitíssimo grande é o seu arraial; porque poderoso é, executando a sua palavra; porque o dia do Senhor é grande e mui terrível, e quem o poderá suportar?',
    'Ainda assim, agora mesmo diz o Senhor: Convertei-vos a mim de todo o vosso coração; e isso com jejuns, e com choro, e com pranto.',
    'E rasgai o vosso coração, e não as vossas vestes, e convertei-vos ao Senhor vosso Deus; porque ele é misericordioso, e compassivo, e tardio em irar-se, e grande em benignidade, e se arrepende do mal.',
    'Quem sabe se não se voltará e se arrependerá, e deixará após si uma bênção, em oferta de alimentos e libação para o Senhor vosso Deus?',
    'Tocai a trombeta em Sião, santificai um jejum, convocai uma assembléia solene.',
    'Congregai o povo, santificai a congregação, ajuntai os anciãos, congregai as crianças, e os que mamam; saia o noivo da sua recâmara, e a noiva do seu aposento.',
    'Chorem os sacerdotes, ministros do Senhor, entre o alpendre e o altar, e digam: Poupa a teu povo, ó Senhor, e não entregues a tua herança ao opróbrio, para que os gentios o dominem; por que diriam entre os povos: Onde está o seu Deus?',
    'Então o Senhor se mostrou zeloso da sua terra, e compadeceu-se do seu povo.',
    'E o Senhor, respondendo, disse ao seu povo: Eis que vos envio o trigo, e o mosto, e o azeite, e deles sereis fartos, e vos não entregarei mais ao opróbrio entre os gentios.',
    'Mas removerei para longe de vós o exército do norte, e lançá-lo-ei em uma terra seca e deserta; a sua frente para o mar oriental, e a sua retaguarda para o mar ocidental; e subirá o seu mau cheiro, e subirá a sua podridão; porque fez grandes coisas.',
    'Não temas, ó terra: regozija-te e alegra-te, porque o Senhor fez grandes coisas.',
    'Não temais, animais do campo, porque os pastos do deserto reverdecerão, porque o arvoredo dará o seu fruto, a vide e a figueira darão a sua força.',
    'E vós, filhos de Sião, regozijai-vos e alegrai-vos no Senhor vosso Deus, porque ele vos dará em justa medida a chuva temporã; fará descer a chuva no primeiro mês, a temporã e a serôdia.',
    'E as eiras se encherão de trigo, e os lagares trasbordarão de mosto e de azeite.',
    'E restituir-vos-ei os anos que comeu o gafanhoto, a locusta, e o pulgão e a lagarta, o meu grande exército que enviei contra vós.',
    'E comereis abundantemente e vos fartareis, e louvareis o nome do Senhor vosso Deus, que procedeu para convosco maravilhosamente; e o meu povo nunca mais será envergonhado.',
    'E vós sabereis que eu estou no meio de Israel, e que eu sou o Senhor vosso Deus, e que não há outro; e o meu povo nunca mais será envergonhado.',
    'E há de ser que, depois derramarei o meu Espírito sobre toda a carne, e vossos filhos e vossas filhas profetizarão, os vossos velhos terão sonhos, os vossos jovens terão visões.',
    'E também sobre os servos e sobre as servas naqueles dias derramarei o meu Espírito.',
    'E mostrarei prodígios no céu, e na terra, sangue e fogo, e colunas de fumaça.',
    'O sol se converterá em trevas, e a lua em sangue, antes que venha o grande e terrível dia do Senhor.',
    'E há de ser que todo aquele que invocar o nome do Senhor será salvo; porque no monte Sião e em Jerusalém haverá livramento, assim como disse o Senhor, e entre os sobreviventes, aqueles que o Senhor chamar.'
]

const joel3 = [
    'Porque, eis que naqueles dias, e naquele tempo, em que removerei o cativeiro de Judá e de Jerusalém,',
    'Congregarei todas as nações, e as farei descer ao vale de Jeosafá; e ali com elas entrarei em juízo, por causa do meu povo, e da minha herança, Israel, a quem elas espalharam entre as nações e repartiram a minha terra.',
    'E lançaram sortes sobre o meu povo, e deram um menino por uma meretriz, e venderam uma menina por vinho, para beberem.',
    'E também que tendes vós comigo, Tiro e Sidom, e todas as regiões da Filístia? É tal o pago que vós me dais? Pois se me pagais assim, bem depressa vos farei tornar a vossa paga sobre a vossa cabeça.',
    'Visto como levastes a minha prata e o meu ouro, e as minhas coisas desejáveis e formosas pusestes nos vossos templos.',
    'E vendestes os filhos de Judá e os filhos de Jerusalém aos filhos dos gregos, para os apartar para longe dos seus termos.',
    'Eis que eu os suscitarei do lugar para onde os vendestes, e farei tornar a vossa paga sobre a vossa própria cabeça.',
    'E venderei vossos filhos e vossas filhas na mão dos filhos de Judá, que os venderão aos sabeus, a um povo distante, porque o Senhor o disse.',
    'Proclamai isto entre os gentios; preparai a guerra, suscitai os fortes; cheguem-se, subam todos os homens de guerra.',
    'Forjai espadas das vossas enxadas, e lanças das vossas foices; diga o fraco: Eu sou forte.',
    'Ajuntai-vos, e vinde, todos os gentios em redor, e congregai-vos. Ó Senhor, faze descer ali os teus fortes;',
    'Suscitem-se os gentios, e subam ao vale de Jeosafá; pois ali me assentarei para julgar todos os gentios em redor.',
    'Lançai a foice, porque já está madura a seara; vinde, descei, porque o lagar está cheio, e os vasos dos lagares transbordam, porque a sua malícia é grande.',
    'Multidões, multidões no vale da decisão; porque o dia do Senhor está perto, no vale da decisão.',
    'O sol e a lua se enegrecerão, e as estrelas retirarão o seu resplendor.',
    'E o Senhor bramará de Sião, e de Jerusalém fará ouvir a sua voz; e os céus e a terra tremerão, mas o Senhor será o refúgio do seu povo, e a fortaleza dos filhos de Israel.',
    'E vós sabereis que eu sou o Senhor vosso Deus, que habito em Sião, o meu santo monte; e Jerusalém será santa; estranhos não passarão mais por ela.',
    'E há de ser que, naquele dia, os montes destilarão mosto, e os outeiros manarão leite, e todos os rios de Judá estarão cheios de águas; e sairá uma fonte, da casa do Senhor, e regará o vale de Sitim.',
    'O Egito se fará uma desolação, e Edom se fará um deserto assolado, por causa da violência que fizeram aos filhos de Judá, em cuja terra derramaram sangue inocente.',
    'Mas Judá será habitada para sempre, e Jerusalém de geração em geração.',
    'E purificarei o sangue dos que eu não tinha purificado; porque o Senhor habitará em Sião.'
]

const joel1_naa = [
    'Palavra do Senhor que foi dirigida a Joel, filho de Petuel.',
    '"Prestem atenção, velhos, e escutem, todos os moradores da terra! Aconteceu algo assim no tempo de vocês ou nos dias de seus pais?',
    'Contem isto aos filhos de vocês; que eles o contem aos filhos deles, e que estes falem sobre isso à geração seguinte."',
    '"O que o gafanhoto cortador deixou, o gafanhoto migrador comeu; o que o migrador deixou, o gafanhoto devorador comeu; o que o devorador deixou, o gafanhoto destruidor comeu."',
    '"Acordem, beberrões, e chorem! Lamentem, todos vocês que gostam de vinho, por causa do vinho novo, pois foi tirado da boca de vocês.',
    'Porque veio um povo contra a minha terra, poderoso e inumerável, com dentes como de leão e presas como de leoa.',
    'Destruiu as minhas videiras e destroçou as minhas figueiras. Tirou as cascas das árvores e as jogou fora; os galhos ficaram brancos."',
    '"Lamentem, assim como a virgem, vestida de roupa feita de pano de saco, lamenta a morte do seu noivo.',
    'Na Casa do Senhor , foram cortadas as ofertas de cereais e as libações. Os sacerdotes, ministros do Senhor , estão enlutados.',
    'Os campos foram arrasados, e a terra está de luto, porque o cereal foi destruído, o vinho novo acabou, o azeite está no fim."',
    '"Fiquem envergonhados, lavradores; lamentem, vinhateiros, por causa do trigo e da cevada, porque a colheita foi destruída.',
    'As videiras secaram, as figueiras murcharam, as romãzeiras, as palmeiras e as macieiras também. Todas as árvores do campo secaram, e já não há alegria entre os filhos dos homens."',
    '"Sacerdotes, vistam roupa feita de pano de saco e pranteiem. Ministros do altar, lamentem. Ministros do meu Deus, venham e passem a noite vestidos de panos de saco. Porque no templo de seu Deus não há mais ofertas de cereais e libações.',
    'Proclamem um santo jejum, convoquem uma reunião solene. Reúnam os anciãos e todos os moradores desta terra na Casa do Senhor , seu Deus, e clamem ao Senhor ."',
    '"Ah! Que dia! Porque o Dia do Senhor está perto e ele vem como destruição da parte do Todo-Poderoso."',
    'Por acaso, o alimento não foi destruído diante dos nossos olhos? E, do templo do nosso Deus, não desapareceram a alegria e o regozijo?',
    'As sementes secaram debaixo dos seus torrões; os celeiros foram destruídos, os armazéns, derrubados, porque o cereal se perdeu.',
    'Como geme o gado! As manadas de bois estão inquietas, porque não têm pasto; também os rebanhos de ovelhas estão sofrendo.',
    'A ti, ó Senhor , clamo, porque o fogo devorou as pastagens, e as chamas consumiram todas as árvores do campo.',
    'Também todos os animais selvagens suspiram por ti, porque os rios secaram, e o fogo devorou as pastagens.'
]

const joel2_naa = [
    'Toquem a trombeta em Sião e deem o alarme no meu santo monte. Que todos os moradores da terra tremam, porque o Dia do Senhor está chegando; já está próximo.',
    'É dia de trevas e escuridão, dia de nuvens e densas trevas! Como a luz do amanhecer sobre os montes, assim se difunde um povo grande e poderoso, como nunca houve igual desde os tempos antigos, nem haverá outro depois dele pelos anos seguintes, de geração em geração.',
    'À frente dele vai fogo devorador, atrás dele vêm chamas destruidoras. Diante desse povo, a terra é como o jardim do Éden; mas, atrás dele, fica devastada como um deserto. Nada lhe escapa.',
    'A sua aparência é como a de cavalos; e, como cavaleiros, assim correm.',
    'Com um estrondo semelhante ao de carros de guerra, eles vêm saltando no alto dos montes, crepitando como chamas de fogo que devoram a palha, como um povo poderoso posto em ordem de combate.',
    'Diante deles, os povos tremem; todos os rostos empalidecem.',
    'Correm como valentes; como homens de guerra, sobem muros. Cada um vai no seu caminho e não se desvia da sua fileira.',
    'Não empurram uns aos outros; cada um segue o seu rumo. Avançam entre as lanças e não se detêm no seu caminho.',
    'Invadem a cidade, correm pelas muralhas, sobem pelas paredes das casas, entram pelas janelas como ladrões.',
    'Diante deles, a terra treme e os céus se abalam; o sol e a lua se escurecem, e as estrelas deixam de brilhar.',
    'O Senhor levanta a voz diante do seu exército. Porque o seu arraial é enorme, e quem executa as suas ordens é poderoso. Sim, grande e mui terrível é o Dia do Senhor ! Quem o poderá suportar?',
    'Ainda assim, agora mesmo, diz o Senhor : "Convertam-se a mim de todo o coração; com jejuns, com choro e com pranto.',
    'Rasguem o coração, e não as suas roupas." Convertam-se ao Senhor , seu Deus, porque ele é bondoso e compassivo, tardio em irar-se e grande em misericórdia, e muda de ideia quanto ao mal que havia anunciado.',
    'Quem sabe se ele não se voltará e mudará de ideia, e, ao passar, deixe uma bênção, para que vocês possam trazer ofertas de cereais e libações ao Senhor , seu Deus?',
    'Toquem a trombeta em Sião, proclamem um santo jejum, convoquem uma reunião solene.',
    'Reúnam o povo, santifiquem a congregação, congreguem os anciãos, reúnam as crianças e os que mamam no peito. Que o noivo saia do seu quarto, e a noiva, dos seus aposentos.',
    'Que os sacerdotes, ministros do Senhor , chorem entre o pórtico e o altar, e orem: "Poupa o teu povo, ó Senhor , e não faças da tua herança um objeto de deboche e de zombaria entre as nações. Por que hão de dizer entre os povos: ‘Onde está o Deus deles?’"',
    'Então o Senhor teve grande amor pela sua terra e se compadeceu do seu povo.',
    'O Senhor respondeu ao seu povo: "Eis que lhes envio o cereal, o vinho e o azeite, e vocês ficarão satisfeitos. Nunca mais farei de vocês motivo de zombaria entre as nações.',
    'Mas o invasor que vem do Norte, eu o removerei para longe de vocês e o lançarei para uma terra seca e deserta. Lançarei a sua vanguarda para o mar oriental, e a sua retaguarda, para o mar ocidental. Subirá o seu mau cheiro, e subirá a sua podridão; porque agiu poderosamente."',
    '"Não tenha medo, ó terra; alegre-se e exulte, porque o Senhor faz grandes coisas.',
    'Não tenham medo, animais selvagens, porque os pastos do deserto reverdecerão, porque as árvores darão os seus frutos, as figueiras e as videiras produzirão com vigor.',
    'Filhos de Sião, alegrem-se e exultem no Senhor , seu Deus, porque ele lhes dará as chuvas em justa medida; fará descer, como no passado, as primeiras e as últimas chuvas.',
    'As eiras se encherão de trigo, e os lagares transbordarão de vinho e de azeite.',
    'Restituirei os anos que foram consumidos pelos gafanhotos — o migrador, o devorador e o destruidor —, o meu grande exército que enviei contra vocês.',
    'Vocês terão comida em abundância e ficarão satisfeitos, e louvarão o nome do Senhor , seu Deus, que fez maravilhas em favor de vocês. E nunca mais o meu povo será envergonhado.',
    'Vocês saberão que eu estou no meio de Israel, e que eu sou o Senhor , o Deus de vocês, e que não há outro. E nunca mais o meu povo será envergonhado."',
    '"E acontecerá, depois disso, que derramarei o meu Espírito sobre toda a humanidade. Os filhos e as filhas de vocês profetizarão, os seus velhos sonharão, e os seus jovens terão visões.',
    'Até sobre os servos e sobre as servas derramarei o meu Espírito naqueles dias.',
    'Mostrarei prodígios no céu e na terra: sangue, fogo e colunas de fumaça.',
    'O sol se transformará em trevas, e a lua, em sangue, antes que venha o grande e terrível Dia do Senhor ."',
    'E acontecerá que todo aquele que invocar o nome do Senhor será salvo. Porque, no monte Sião e em Jerusalém, estarão os que forem salvos, como o Senhor prometeu; e, entre os sobreviventes, aqueles que o Senhor chamar.'
]

const joel3_naa = [
    '— Eis que, naqueles dias e naquele tempo, em que mudarei a sorte de Judá e de Jerusalém,',
    'congregarei todas as nações e as farei descer ao vale de Josafá. E ali entrarei em juízo contra elas por causa do meu povo e da minha herança, Israel, a quem elas espalharam entre os povos, repartindo a minha terra entre si.',
    'Lançaram sortes sobre o meu povo, e deram meninos em troca de prostitutas, e venderam meninas por vinho, que beberam.',
    'O que vocês têm contra mim, Tiro, Sidom, e todas as regiões da Filístia? Estão querendo se vingar de mim? Se é isso que vocês querem, sem demora farei com que essa vingança caia sobre a cabeça de vocês.',
    'Visto que vocês levaram a minha prata e o meu ouro, e puseram as minhas joias preciosas nos seus templos,',
    'e venderam os filhos de Judá e os filhos de Jerusalém aos filhos dos gregos, para afastá-los da sua terra,',
    'eis que eu os trarei desse lugar para onde vocês os venderam e farei com que a vingança caia sobre a própria cabeça de vocês.',
    'Venderei os filhos e as filhas de vocês aos filhos de Judá, e estes os venderão aos sabeus, que são uma nação distante, porque o Senhor o disse.',
    '— Proclamem isto entre as nações: "Declarem guerra santa e convoquem os valentes. Que todos os homens de guerra se apresentem e se preparem.',
    'Transformem as suas lâminas de arado em espadas, e as suas foices, em lanças. Que o fraco diga: ‘Eu sou forte.’"',
    '"Todos vocês, povos vizinhos, apressem-se e venham depressa, e reúnam-se ali." Faze descer os teus valentes, ó Senhor !',
    '"Que todas as nações se levantem e sigam para o vale de Josafá, porque ali me assentarei para julgar todas as nações vizinhas.',
    'Peguem a foice e comecem a colher, porque a plantação está madura. Venham, pisem as uvas, porque o lagar está cheio, os seus compartimentos transbordam. Porque é grande a maldade dessas nações!"',
    '"Multidões, multidões no vale da Decisão! Porque o Dia do Senhor está perto, no vale da Decisão.',
    'O sol e a lua se escurecem, e as estrelas deixam de brilhar.',
    'O Senhor rugirá de Sião e de Jerusalém fará ouvir a sua voz. Os céus e a terra tremerão, mas o Senhor será o refúgio do seu povo e a fortaleza dos filhos de Israel."',
    '"Assim vocês saberão que eu sou o Senhor , o Deus de vocês, que habito em Sião, o meu santo monte. Jerusalém será santa; estranhos não passarão mais por ela.',
    'E acontecerá que, naquele dia, os montes destilarão vinho, e as colinas manarão leite, e todos os rios de Judá estarão cheios de água. Uma fonte sairá da Casa do Senhor e regará o vale de Sitim.',
    'O Egito se tornará uma desolação, e Edom se fará um deserto abandonado, por causa da violência que fizeram aos filhos de Judá, em cuja terra derramaram sangue inocente.',
    'Judá, porém, será habitada para sempre, e Jerusalém, de geração em geração.',
    'Eu vingarei o sangue deles, que ainda não foi vingado." E o Senhor habitará em Sião.'
]

const amos1 = [
    'As palavras de Amós, que estava entre os pastores de Tecoa, as quais viu a respeito de Israel, nos dias de Uzias, rei de Judá, e nos dias de Jeroboão, filho de Joás, rei de Israel, dois anos antes do terremoto.',
    'Ele disse: O Senhor bramará de Sião, e de Jerusalém fará ouvir a sua voz; os prados dos pastores prantearão, e secar-se-á o cume do Carmelo.',
    'Assim diz o Senhor: Por três transgressões de Damasco, e por quatro, não retirarei o castigo, porque trilharam a Gileade com trilhos de ferro.',
    'Por isso porei fogo à casa de Hazael, e ele consumirá os palácios de Ben-Hadade.',
    'E quebrarei o ferrolho de Damasco, e exterminarei o morador do vale de Áven, e ao que tem o cetro de Bete-Éden; e o povo da Síria será levado em cativeiro a Quir, diz o Senhor.',
    'Assim diz o Senhor: Por três transgressões de Gaza, e por quatro, não retirarei o castigo, porque levaram em cativeiro todos os cativos para os entregarem a Edom.',
    'Por isso porei fogo ao muro de Gaza, e ele consumirá os seus palácios.',
    'E exterminarei o morador de Asdode, e o que tem o cetro de Ascalom, e tornarei a minha mão contra Ecrom; e o restante dos filisteus perecerá, diz o Senhor DEUS.',
    'Assim diz o Senhor: Por três transgressões de Tiro, e por quatro, não retirarei o castigo, porque entregaram todos os cativos a Edom, e não se lembraram da aliança dos irmãos.',
    'Por isso porei fogo ao muro de Tiro, e ele consumirá os seus palácios.',
    'Assim diz o Senhor: Por três transgressões de Edom, e por quatro, não retirarei o castigo, porque perseguiu a seu irmão à espada, e aniquilou as suas misericórdias; e a sua ira despedaçou eternamente, e conservou a sua indignação para sempre.',
    'Por isso porei fogo a Temã, e ele consumirá os palácios de Bozra.',
    'Assim diz o Senhor: Por três transgressões dos filhos de Amom, e por quatro, não retirarei o castigo, porque fenderam o ventre às grávidas de Gileade, para dilatarem os seus termos.',
    'Por isso porei fogo ao muro de Rabá, e ele consumirá os seus palácios, com alarido no dia da batalha, com tempestade no dia da tormenta.',
    'E o seu rei irá para o cativeiro, ele e os seus príncipes juntamente, diz o Senhor.'
]

const amos2 = [
    'Assim diz o SENHOR: Por três transgressões de Moabe, e por quatro, não retirarei o castigo, porque queimou os ossos do rei de Edom, até os tornar a cal.',
    'Por isso porei fogo a Moabe, e consumirá os palácios de Queriote; e Moabe morrerá com grande estrondo, com alarido, com som de trombeta.',
    'E exterminarei o juiz do meio dele, e a todos os seus príncipes com ele matarei, diz o Senhor.',
    'Assim diz o Senhor: Por três transgressões de Judá, e por quatro, não retirarei o castigo, porque rejeitaram a lei do Senhor, e não guardaram os seus estatutos, antes se deixaram enganar por suas próprias mentiras, após as quais andaram seus pais.',
    'Por isso porei fogo a Judá, e ele consumirá os palácios de Jerusalém.',
    'Assim diz o Senhor: Por três transgressões de Israel, e por quatro, não retirarei o castigo, porque vendem o justo por dinheiro, e o necessitado por um par de sapatos,',
    'Suspirando pelo pó da terra, sobre a cabeça dos pobres, pervertem o caminho dos mansos; e um homem e seu pai entram à mesma moça, para profanarem o meu santo nome.',
    'E se deitam junto a qualquer altar sobre roupas empenhadas, e na casa dos seus deuses bebem o vinho dos que tinham multado.',
    'Todavia eu destruí diante dele o amorreu, cuja altura era como a altura dos cedros, e que era forte como os carvalhos; mas destruí o seu fruto por cima, e as suas raízes por baixo.',
    'Também vos fiz subir da terra do Egito, e quarenta anos vos guiei no deserto, para que possuísseis a terra do amorreu.',
    'E dentre vossos filhos suscitei profetas, e dentre os vossos jovens nazireus. Não é isto assim, filhos de Israel? diz o Senhor.',
    'Mas vós aos nazireus destes vinho a beber, e aos profetas ordenastes, dizendo: Não profetizareis.',
    'Eis que eu vos apertarei no vosso lugar como se aperta um carro cheio de feixes.',
    'Assim perecerá a fuga ao ágil; nem o forte corroborará a sua força, nem o poderoso livrará a sua vida.',
    'E não ficará em pé o que maneja o arco, nem o ligeiro de pés se livrará, nem tampouco se livrará o que vai montado a cavalo.',
    'E o mais corajoso entre os fortes fugirá nu naquele dia, diz o Senhor.'
]

const amos3 = [
    'Ouvi esta palavra que o SENHOR fala contra vós, filhos de Israel, contra toda a família que fiz subir da terra do Egito, dizendo:',
    'De todas as famílias da terra só a vós vos tenho conhecido; portanto eu vos punirei por todas as vossas iniqüidades.',
    'Porventura andarão dois juntos, se não estiverem de acordo?',
    'Rugirá o leão no bosque, sem que tenha presa? Levantará o leãozinho no seu covil a sua voz, se nada tiver apanhado?',
    'Cairá a ave no laço em terra, se não houver armadilha para ela? Levantar-se-á da terra o laço, sem que tenha apanhado alguma coisa?',
    'Tocar-se-á a trombeta na cidade, e o povo não estremecerá? Sucederá algum mal na cidade, sem que o Senhor o tenha feito?',
    'Certamente o Senhor DEUS não fará coisa alguma, sem ter revelado o seu segredo aos seus servos, os profetas.',
    'Rugiu o leão, quem não temerá? Falou o Senhor DEUS, quem não profetizará?',
    'Fazei ouvir isso nos palácios de Asdode, e nos palácios da terra do Egito, e dizei: Ajuntai-vos sobre os montes de Samaria, e vede que grandes alvoroços há no meio dela, e como são oprimidos dentro dela.',
    'Porque não sabem fazer o que é reto, diz o Senhor, aqueles que entesouram nos seus palácios a violência e a destruição.',
    'Portanto, o Senhor DEUS diz assim: O inimigo virá, e cercará a terra, derrubará a tua fortaleza, e os teus palácios serão saqueados.',
    'Assim diz o Senhor: Como o pastor livra da boca do leão as duas pernas, ou um pedaço da orelha, assim serão livrados os filhos de Israel que habitam em Samaria, no canto da cama, e no damasco do leito.',
    'Ouvi, e protestai contra a casa de Jacó, diz o Senhor DEUS, o Deus dos Exércitos;',
    'Pois no dia em que eu punir as transgressões de Israel, também castigarei os altares de Betel; e as pontas do altar serão cortadas, e cairão por terra.',
    'E ferirei a casa de inverno juntamente com a casa de verão; e as casas de marfim perecerão, e as grandes casas terão fim, diz o Senhor.'

]

const amos4 = [
    'Ouvi esta palavra vós, vacas de Basã, que estais no monte de Samaria, que oprimis aos pobres, que esmagais os necessitados, que dizeis a vossos senhores: Dai cá, e bebamos.',
    'Jurou o Senhor DEUS, pela sua santidade, que dias estão para vir sobre vós, em que vos levarão com ganchos e a vossos descendentes com anzóis de pesca.',
    'E saireis pelas brechas, uma após outra, e sereis lançadas para Harmom, disse o Senhor.',
    'Vinde a Betel, e transgredi; a Gilgal, e multiplicai as transgressões; e cada manhã trazei os vossos sacrifícios, e os vossos dízimos de três em três dias.',
    'E oferecei o sacrifício de louvores do que é levedado, e apregoai as ofertas voluntárias, publicai-as; porque disso gostais, ó filhos de Israel, disse o Senhor DEUS.',
    'Por isso também vos dei limpeza de dentes em todas as vossas cidades, e falta de pão em todos os vossos lugares; contudo não vos convertestes a mim, disse o Senhor.',
    'Além disso, retive de vós a chuva quando ainda faltavam três meses para a ceifa; e fiz que chovesse sobre uma cidade, e não chovesse sobre a outra cidade; sobre um campo choveu, mas o outro, sobre o qual não choveu, secou-se.',
    'E andaram errantes duas ou três cidades, indo a outra cidade para beberem água, mas não se saciaram; contudo não vos convertestes a mim, disse o Senhor.',
    'Feri-vos com queimadura, e com ferrugem; a multidão das vossas hortas, e das vossas vinhas, e das vossas figueiras, e das vossas oliveiras, comeu a locusta; contudo não vos convertestes a mim, disse o Senhor.',
    'Enviei a peste contra vós, à maneira do Egito; os vossos jovens matei à espada, e os vossos cavalos deixei levar presos, e o mau cheiro dos vossos arraiais fiz subir às vossas narinas; contudo não vos convertestes a mim, disse o Senhor.',
    'Subverti a alguns dentre vós, como Deus subverteu a Sodoma e Gomorra, e vós fostes como um tição arrebatado do incêndio; contudo não vos convertestes a mim, disse o Senhor.',
    'Portanto, assim te farei, ó Israel! E porque isso te farei, prepara-te, ó Israel, para te encontrares com o teu Deus.',
    'Porque eis aqui o que forma os montes, e cria o vento, e declara ao homem qual seja o seu pensamento, o que faz da manhã trevas, e pisa os altos da terra; o Senhor, o Deus dos Exércitos, é o seu nome.'
]

const amos5 = [
    'Ouvi esta palavra, que levanto como uma lamentação sobre vós, ó casa de Israel.',
    'A virgem de Israel caiu, e não mais tornará a levantar-se; desamparada está na sua terra, não há quem a levante.',
    'Porque assim diz o Senhor DEUS: A cidade da qual saem mil conservará cem, e aquela da qual saem cem conservará dez, para a casa de Israel.',
    'Porque assim diz o Senhor à casa de Israel: Buscai-me, e vivei.',
    'Mas não busqueis a Betel, nem venhais a Gilgal, nem passeis a Berseba, porque Gilgal certamente será levada ao cativeiro, e Betel será desfeita em nada.',
    'Buscai ao Senhor, e vivei, para que ele não irrompa na casa de José como um fogo, e a consuma, e não haja em Betel quem o apague.',
    'Vós que converteis o juízo em alosna, e deitais por terra a justiça,',
    'Procurai o que faz o sete-estrêlo e o órion e torna a sombra da noite em manhã, e faz escurecer o dia como a noite, que chama as águas do mar, e as derrama sobre a terra; o Senhor é o seu nome.',
    'O que promove súbita destruição contra o forte; de modo que venha a destruição contra a fortaleza.',
    'Odeiam na porta ao que os repreende, e abominam ao que fala sinceramente.',
    'Portanto, visto que pisais o pobre e dele exigis um tributo de trigo, edificastes casas de pedras lavradas, mas nelas não habitareis; vinhas desejáveis plantastes, mas não bebereis do seu vinho.',
    'Porque sei que são muitas as vossas transgressões e graves os vossos pecados; afligis o justo, tomais resgate, e rejeitais os necessitados na porta.',
    'Portanto, o que for prudente guardará silêncio naquele tempo, porque o tempo será mau.',
    'Buscai o bem, e não o mal, para que vivais; e assim o Senhor, o Deus dos Exércitos, estará convosco, como dizeis.',
    'Odiai o mal, e amai o bem, e estabelecei na porta o juízo. Talvez o Senhor Deus dos Exércitos tenha piedade do remanescente de José.',
    'Portanto, assim diz o Senhor, o Deus dos Exércitos, o Senhor: Em todas as ruas haverá pranto, e em todas as estradas dirão: Ai! Ai! E ao lavrador chamarão para choro, e para pranto os que souberem prantear.',
    'E em todas as vinhas haverá pranto; porque passarei pelo meio de ti, diz o Senhor.',
    'Ai daqueles que desejam o dia do Senhor! Para que quereis vós este dia do Senhor? Será de trevas e não de luz.',
    'É como se um homem fugisse de diante do leão, e se encontrasse com ele o urso; ou como se entrando numa casa, a sua mão encostasse à parede, e fosse mordido por uma cobra.',
    'Não será, pois, o dia do Senhor trevas e não luz, e escuridão, sem que haja resplendor?',
    'Odeio, desprezo as vossas festas, e as vossas assembléias solenes não me exalarão bom cheiro.',
    'E ainda que me ofereçais holocaustos, ofertas de alimentos, não me agradarei delas; nem atentarei para as ofertas pacíficas de vossos animais gordos.',
    'Afasta de mim o estrépito dos teus cânticos; porque não ouvirei as melodias das tuas violas.',
    'Corra, porém, o juízo como as águas, e a justiça como o ribeiro impetuoso.',
    'Oferecestes-me vós sacrifícios e oblações no deserto por quarenta anos, ó casa de Israel?',
    'Antes levastes a tenda de vosso Moloque, e a estátua das vossas imagens, a estrela do vosso deus, que fizestes para vós mesmos.',
    'Portanto vos levarei cativos, para além de Damasco, diz o Senhor, cujo nome é o Deus dos Exércitos.'
]

const amos6 = [
    'Ai dos que vivem sossegados em Sião, e dos que estão confiados no monte de Samaria, que têm nome entre as primeiras das nações, e aos quais vem a casa de Israel!',
    'Passai a Calne, e vede; e dali ide à grande Hamate; e depois descei a Gate dos filisteus; serão melhores que estes reinos? Ou maior o seu termo do que o vosso termo?',
    'Ó vós que afastais o dia mau, e fazeis chegar o assento da violência.',
    'Ai dos que dormem em camas de marfim, e se estendem sobre os seus leitos, e comem os cordeiros do rebanho, e os bezerros do meio do curral;',
    'Que cantam ao som da viola, e inventam para si instrumentos musicais, assim como Davi;',
    'Que bebem vinho em taças, e se ungem com o mais excelente óleo: mas não se afligem pela ruína de José;',
    'Portanto agora irão em cativeiro entre os primeiros dos que forem levados cativos, e cessarão os festins dos banqueteadores.',
    'Jurou o Senhor DEUS por si mesmo, diz o SENHOR, o Deus dos Exércitos: Abomino a soberba de Jacó, e odeio os seus palácios; por isso entregarei a cidade e tudo o que nela há.',
    'E acontecerá que, se numa casa ficarem dez homens, morrerão.',
    'Quando o tio de alguém, aquele que o queima, o tomar para levar-lhe os ossos para fora da casa, e disser ao que estiver no mais interior da casa: Está ainda alguém contigo? E este responder: Ninguém; então lhe dirá ele: Cala-te, porque não devemos fazer menção do nome do Senhor.',
    'Porque, eis que o Senhor ordena, e ferirá a casa grande de brechas, e a casa pequena de fendas.',
    'Porventura correrão cavalos sobre rocha? Lavrar-se-á nela com bois? Mas vós haveis tornado o juízo em fel, e o fruto da justiça em alosna;',
    'Vós que vos alegrais do nada, vós que dizeis: Não é assim que por nossa própria força nos temos tornado poderosos?',
    'Porque, eis que eu levantarei sobre vós, ó casa de Israel, uma nação, diz o Senhor, o Deus dos Exércitos, e oprimir-vos-á, desde a entrada de Hamate até ao ribeiro do deserto.'
]

const amos7 = [
    'O SENHOR DEUS assim me fez ver, e eis que ele formava gafanhotos no princípio do rebento da erva serôdia, e eis que era a erva serôdia depois de findas as ceifas do rei.',
    'E aconteceu que, tendo eles comido completamente a erva da terra, eu disse: Senhor DEUS, perdoa, rogo-te; quem levantará a Jacó? pois ele é pequeno.',
    'Então o Senhor se arrependeu disso. Não acontecerá, disse o Senhor.',
    'Assim me mostrou o Senhor DEUS: Eis que o Senhor DEUS clamava, para contender com fogo; este consumiu o grande abismo, e também uma parte da terra.',
    'Então eu disse: Senhor Deus, cessa, eu te peço; quem levantará a Jacó? pois é pequeno.',
    'E o SENHOR se arrependeu disso. Nem isso acontecerá, disse o Senhor DEUS.',
    'Mostrou-me também assim: e eis que o Senhor estava sobre um muro, levantado a prumo; e tinha um prumo na sua mão.',
    'E o Senhor me disse: Que vês tu, Amós? E eu disse: Um prumo. Então disse o Senhor: Eis que eu porei o prumo no meio do meu povo Israel; nunca mais passarei por ele.',
    'Mas os altos de Isaque serão assolados, e destruídos os santuários de Israel; e levantar-me-ei com a espada contra a casa de Jeroboão.',
    'Então Amazias, o sacerdote de Betel, mandou dizer a Jeroboão, rei de Israel: Amós tem conspirado contra ti, no meio da casa de Israel; a terra não poderá sofrer todas as suas palavras.',
    'Porque assim diz Amós: Jeroboão morrerá à espada, e Israel certamente será levado para fora da sua terra em cativeiro.',
    'Depois Amazias disse a Amós: Vai-te, ó vidente, e foge para a terra de Judá, e ali come o pão, e ali profetiza;',
    'Mas em Betel daqui por diante não profetizes mais, porque é o santuário do rei e casa real.',
    'E respondeu Amós, dizendo a Amazias: Eu não sou profeta, nem filho de profeta, mas boiadeiro, e cultivador de sicômoros.',
    'Mas o Senhor me tirou de seguir o rebanho, e o Senhor me disse: Vai, e profetiza ao meu povo Israel.',
    'Agora, pois, ouve a palavra do Senhor: Tu dizes: Não profetizes contra Israel, nem fales contra a casa de Isaque.',
    'Portanto assim diz o Senhor: Tua mulher se prostituirá na cidade, e teus filhos e tuas filhas cairão à espada, e a tua terra será repartida a cordel, e tu morrerás na terra imunda, e Israel certamente será levado cativo para fora da sua terra.'
]

const amos8 = [
    'O SENHOR DEUS assim me fez ver: E eis aqui um cesto de frutos do verão.',
    'E disse: Que vês, Amós? E eu disse: Um cesto de frutos do verão. Então o Senhor me disse: Chegou o fim sobre o meu povo Israel; nunca mais passarei por ele.',
    'Mas os cânticos do templo naquele dia serão gemidos, diz o Senhor DEUS; multiplicar-se-ão os cadáveres; em todos os lugares serão lançados fora em silêncio.',
    'Ouvi isto, vós que anelais o abatimento do necessitado; e destruís os miseráveis da terra,',
    'Dizendo: Quando passará a lua nova, para vendermos o grão, e o sábado, para abrirmos os celeiros de trigo, diminuindo o efa, e aumentando o siclo, e procedendo dolosamente com balanças enganosas,',
    'Para comprarmos os pobres por dinheiro, e os necessitados por um par de sapatos, e para vendermos o refugo do trigo?',
    'Jurou o Senhor pela glória de Jacó: Eu não me esquecerei de todas as suas obras para sempre.',
    'Por causa disto não estremecerá a terra, e não chorará todo aquele que nela habita? Certamente levantar-se-á toda ela como o grande rio, e será agitada, e baixará como o rio do Egito.',
    'E sucederá que, naquele dia, diz o Senhor Deus, farei que o sol se ponha ao meio-dia, e a terra se entenebreça no dia claro.',
    'E tornarei as vossas festas em luto, e todos os vossos cânticos em lamentações; e porei pano de saco sobre todos os lombos, e calva sobre toda cabeça; e farei que isso seja como luto por um filho único, e o seu fim como dia de amarguras.',
    'Eis que vêm dias, diz o Senhor DEUS, em que enviarei fome sobre a terra; não fome de pão, nem sede de água, mas de ouvir as palavras do SENHOR.',
    'E irão errantes de um mar até outro mar, e do norte até ao oriente; correrão por toda a parte, buscando a palavra do Senhor, mas não a acharão.',
    'Naquele dia as virgens formosas e os jovens desmaiarão de sede.',
    'Os que juram pela culpa de Samaria, dizendo: Vive o teu deus, ó Dã; e vive o caminho de Berseba; esses mesmos cairão, e não se levantarão jamais.'
]

const amos9 = [
    'Vi o Senhor, que estava em pé sobre o altar; e me disse: Fere o capitel, e estremeçam os umbrais, e faze tudo em pedaços sobre a cabeça de todos eles; e eu matarei à espada até ao último deles; nenhum deles conseguirá fugir, nenhum deles escapará.',
    'Ainda que cavem até ao inferno, a minha mão os tirará dali; e, se subirem ao céu, dali os farei descer.',
    'E, se se esconderem no cume do Carmelo, buscá-los-ei, e dali os tirarei; e, se dos meus olhos se ocultarem no fundo do mar, ali darei ordem à serpente, e ela os picará.',
    'E, se forem em cativeiro diante de seus inimigos, ali darei ordem à espada que os mate; e eu porei os meus olhos sobre eles para o mal, e não para o bem.',
    'Porque o Senhor DEUS dos Exércitos é o que toca a terra, e ela se derrete, e todos os que habitam nela chorarão; e ela subirá toda como um rio, e abaixará como o rio do Egito.',
    'Ele é o que edifica as suas câmaras superiores no céu, e fundou na terra a sua abóbada, e o que chama as águas do mar, e as derrama sobre a terra; o Senhor é o seu nome.',
    'Não me sois, vós, ó filhos de Israel, como os filhos dos etíopes? diz o Senhor: Não fiz eu subir a Israel da terra do Egito, e aos filisteus de Caftor, e aos sírios de Quir?',
    'Eis que os olhos do Senhor DEUS estão contra este reino pecador, e eu o destruirei de sobre a face da terra; mas não destruirei de todo a casa de Jacó, diz o SENHOR.',
    'Porque eis que darei ordem, e sacudirei a casa de Israel entre todas as nações, assim como se sacode grão no crivo, sem que caia na terra um só grão.',
    'Todos os pecadores do meu povo morrerão à espada, os que dizem: Não nos alcançará nem nos encontrará o mal.',
    'Naquele dia tornarei a levantar o tabernáculo caído de Davi, e repararei as suas brechas, e tornarei a levantar as suas ruínas, e o edificarei como nos dias da antigüidade;',
    'Para que possuam o restante de Edom, e todos os gentios que são chamados pelo meu nome, diz o Senhor, que faz essas coisas.',
    'Eis que vêm dias, diz o Senhor, em que o que lavra alcançará ao que sega, e o que pisa as uvas ao que lança a semente; e os montes destilarão mosto, e todos os outeiros se derreterão.',
    'E trarei do cativeiro meu povo Israel, e eles reedificarão as cidades assoladas, e nelas habitarão, e plantarão vinhas, e beberão o seu vinho, e farão pomares, e lhes comerão o fruto.',
    'E plantá-los-ei na sua terra, e não serão mais arrancados da sua terra que lhes dei, diz o Senhor teu Deus.'
]

const amos1_naa = [
    'Palavras que, em visão, vieram a Amós, um pastor da cidade de Tecoa, a respeito de Israel. Isso aconteceu nos dias de Uzias, rei de Judá, e nos dias de Jeroboão, filho de Joás, rei de Israel, dois anos antes do terremoto.',
    'Amós disse: "O Senhor rugirá de Sião e de Jerusalém fará ouvir a sua voz. Os campos dos pastores estarão de luto, e o alto do Carmelo secará."',
    'Assim diz o Senhor : "Por três transgressões de Damasco, sim, por causa de quatro, não suspenderei o castigo. Porque passaram um instrumento de trilhar com pontas de ferro sobre Gileade.',
    'Por isso, porei fogo à casa de Hazael, fogo que consumirá as fortalezas de Ben-Hadade.',
    'Quebrarei os ferrolhos de Damasco e eliminarei o morador de Biqueate-Áven e o que tem o cetro de Bete-Éden. O povo da Síria será levado em cativeiro a Quir", diz o Senhor .',
    'Assim diz o Senhor : "Por três transgressões de Gaza, sim, por causa de quatro, não suspenderei o castigo. Porque levaram em cativeiro todo um povo, para entregá-lo a Edom.',
    'Por isso, porei fogo nas muralhas de Gaza, fogo que consumirá as suas fortalezas.',
    'Eliminarei o morador de Asdode e o que tem o cetro de Asquelom. Voltarei a minha mão contra Ecrom, e o resto dos filisteus perecerá", diz o Senhor .',
    'Assim diz o Senhor : "Por três transgressões de Tiro, sim, por causa de quatro, não suspenderei o castigo. Porque levaram em cativeiro todo um povo, para entregá-lo a Edom e não se lembraram da aliança de irmãos.',
    'Por isso, porei fogo nas muralhas de Tiro, fogo que consumirá as suas fortalezas."',
    'Assim diz o Senhor : "Por três transgressões de Edom, sim, por causa de quatro, não suspenderei o castigo. Porque perseguiu o seu irmão com a espada e não teve nenhuma compaixão dele. A sua ira não cessou de despedaçar, e conservou a sua indignação para sempre.',
    'Por isso, porei fogo em Temã, fogo que consumirá as fortalezas de Bozra."',
    'Assim diz o Senhor : "Por três transgressões dos filhos de Amom, sim, por causa de quatro, não suspenderei o castigo. Porque rasgaram o ventre das grávidas da região de Gileade, para ampliarem as suas fronteiras.',
    'Por isso, porei fogo nas muralhas de Rabá, fogo que consumirá as suas fortalezas, com alarido no dia da batalha, com turbilhão no dia da tempestade.',
    'O seu rei irá para o cativeiro, ele e os seus príncipes com ele", diz o Senhor .'
]

const amos2_naa = [
    'Assim diz o Senhor : "Por três transgressões de Moabe, sim, por causa de quatro, não suspenderei o castigo. Porque queimou os ossos do rei de Edom, até reduzi-los a cinza.',
    'Por isso, porei fogo em Moabe, fogo que consumirá as fortalezas de Queriote. Moabe morrerá entre grande estrondo, alarido e som de trombeta.',
    'Eliminarei do meio dele o juiz, e juntamente com ele matarei todos os seus príncipes", diz o Senhor .',
    'Assim diz o Senhor : "Por três transgressões de Judá, sim, por causa de quatro, não suspenderei o castigo. Porque rejeitaram a lei do Senhor e não guardaram os seus estatutos. Os falsos deuses os enganaram, deuses que os pais deles haviam seguido.',
    'Por isso, porei fogo em Judá, fogo que consumirá as fortalezas de Jerusalém."',
    'Assim diz o Senhor : "Por três transgressões de Israel, sim, por causa de quatro, não suspenderei o castigo. Porque vendem o justo por dinheiro e condenam o necessitado por causa de um par de sandálias.',
    'Esmagam no pó da terra a cabeça dos pobres e pervertem o caminho dos necessitados. Um homem e seu pai têm relações com a mesma jovem e, assim, profanam o meu santo nome.',
    'Eles se deitam ao lado de qualquer altar sobre roupas recebidas como penhor e, no templo do seu deus, bebem o vinho dos que foram multados."',
    '"Todavia, fui eu que destruí diante deles os amorreus, que eram tão altos como os cedros e tão fortes como os carvalhos; destruí os seus frutos por cima e as suas raízes por baixo.',
    'Também fui eu que tirei vocês da terra do Egito e durante quarenta anos os conduzi pelo deserto, para que vocês pudessem tomar posse da terra dos amorreus.',
    'Escolhi alguns dos seus filhos para serem profetas e alguns dos seus jovens para serem nazireus. Não é isto assim, filhos de Israel?" — diz o Senhor .',
    '"Mas vocês deram vinho aos nazireus e ordenaram aos profetas que não profetizassem."',
    '"Como faz um carro carregado de feixes, eu os esmagarei ali onde vocês se encontram.',
    'Os mais ágeis não encontrarão refúgio, os fortes não poderão usar a sua força, e os valentes não conseguirão salvar a sua vida.',
    'Os que manejam o arco não resistirão, os mais velozes não conseguirão fugir, e os que vão montados a cavalo não conseguirão salvar a sua vida.',
    'Até mesmo os mais corajosos entre os valentes fugirão nus naquele dia", diz o Senhor .'
]

const amos3_naa = [
    'Ouçam a palavra que o Senhor fala contra vocês, filhos de Israel, contra toda a família que ele tirou da terra do Egito. Ele diz:',
    '"De todas as famílias da terra, somente a vocês eu escolhi; portanto, eu os punirei por todas as suas iniquidades.',
    'Será que dois andarão juntos, se não estiverem de acordo?',
    'Será que o leão vai rugir na floresta, sem que tenha encontrado presa? Será que o leãozinho fará ouvir a sua voz no covil, se não tiver apanhado nada?',
    'Será que a ave cairá na armadilha, se o laço não estiver armado? Será que o laço se levanta do chão, sem que tenha apanhado alguma coisa?',
    'Será possível tocar a trombeta na cidade, sem que o povo comece a tremer? Será que sobrevirá algum mal à cidade, sem que o Senhor o tenha feito?"',
    '"Certamente o Senhor Deus não fará coisa alguma, sem primeiro revelar o seu segredo aos seus servos, os profetas.',
    'O leão rugiu, quem não ficará com medo? O Senhor Deus falou, quem não profetizará?"',
    '"Proclamem nas fortalezas de Asdode e nos palácios da terra do Egito o seguinte: ‘Reúnam-se nos montes de Samaria e vejam que grandes tumultos lá existem e que opressões há no meio dela.’',
    'Porque o povo de Samaria não sabe fazer o que é reto", diz o Senhor , "e entesoura nos seus palácios a violência e a devastação."',
    'Portanto, assim diz o Senhor Deus: "Um inimigo cercará a sua terra, destruirá o seu poder, e os seus palácios serão saqueados."',
    'Assim diz o Senhor : — Como o pastor livra da boca do leão as duas pernas ou um pedacinho da orelha de um animal, assim serão salvos os filhos de Israel que vivem em Samaria com apenas o canto da cama e parte do leito.',
    '"Ouçam e deem testemunho contra a casa de Jacó", diz o Senhor Deus, o Deus dos Exércitos:',
    '"No dia em que eu punir Israel, por causa das suas transgressões, visitarei também os altares de Betel; e as pontas do altar serão cortadas e cairão por terra.',
    'Derrubarei a casa de inverno com a casa de verão; as casas de marfim ficarão em ruínas, e as grandes casas serão destruídas", diz o Senhor .'
]

const amos4_naa = [
    '"Ouçam esta palavra, vacas de Basã, vocês que estão no monte de Samaria, que oprimem os pobres, esmagam os necessitados e dizem aos maridos: ‘Tragam vinho, e vamos beber!’',
    'O Senhor Deus jurou pela sua santidade que virão dias em que vocês serão arrastadas com ganchos; até as últimas de vocês serão levadas com anzóis de pesca.',
    'Vocês sairão em fila pelas brechas e serão lançadas na direção do monte Hermom", diz o Senhor .',
    '"Venham a Betel e pequem! Venham a Gilgal e pequem ainda mais! Cada manhã, tragam os seus sacrifícios e, de três em três dias, os seus dízimos!',
    'Ofereçam sacrifícios de louvor com pão levedado e proclamem ofertas voluntárias! Tornem isso público, porque é disso que vocês gostam, ó filhos de Israel", diz o Senhor Deus.',
    '"Também deixei que vocês ficassem sem ter o que mastigar em todas as suas cidades e com falta de pão em todos os lugares, mas vocês não se converteram a mim", diz o Senhor .',
    '"Além disso, retive a chuva, faltando ainda três meses para a colheita. Fiz chover sobre uma cidade e sobre a outra, não; um campo teve chuva, mas o outro, que ficou sem chuva, secou.',
    'Pessoas de duas ou três cidades se dirigiram a outra cidade para beber água, sem conseguirem matar a sede, mas vocês não se converteram a mim", diz o Senhor .',
    '"Eu os castiguei com o crestamento e a ferrugem. Os gafanhotos devoraram as hortas e as vinhas, as figueiras e as oliveiras, mas vocês não se converteram a mim", diz o Senhor .',
    '"Enviei a peste contra vocês, assim como havia feito no Egito. Matei os seus jovens à espada, deixei que os seus cavalos fossem capturados, e fiz com que o mau cheiro dos acampamentos chegasse aos seus narizes, mas vocês não se converteram a mim", diz o Senhor .',
    '"Destruí alguns de vocês, como Deus destruiu Sodoma e Gomorra. Vocês foram como um toco de lenha tirado do fogo, mas não se converteram a mim", diz o Senhor .',
    '"Portanto, assim farei com você, Israel! E, porque farei isso com você, prepare-se, ó Israel, para se encontrar com o seu Deus!',
    'Porque é ele quem forma os montes, cria o vento e declara aos seres humanos qual é o seu pensamento; ele faz da manhã trevas e anda sobre os altos da terra; Senhor , Deus dos Exércitos, é o seu nome."'
]

const amos5_naa = [
    'Ouçam esta palavra que falo contra vocês, ó casa de Israel. É uma lamentação.',
    '"Caiu a virgem de Israel, para nunca mais se levantar! Está estendida na sua própria terra, e não há quem a levante."',
    'Porque assim diz o Senhor Deus: "A cidade da qual saem mil conservará apenas cem, e aquela da qual saem cem conservará apenas dez para a casa de Israel."',
    'Pois assim diz o Senhor à casa de Israel: "Busquem a mim e vocês viverão.',
    'Porém não busquem Betel, nem venham a Gilgal, nem passem a Berseba. Porque Gilgal certamente será levada cativa, e Betel será reduzida a nada.',
    'Busquem o Senhor e vocês viverão. Do contrário, ele irromperá na casa de José como um fogo que a consome, e não haverá em Betel quem consiga apagá-lo.',
    'Vocês que transformam o juízo em veneno e lançam por terra a justiça,',
    'busquem aquele que fez o Sete-estrelo e o Órion; aquele que torna as densas trevas em manhã e muda o dia em noite; aquele que chama as águas do mar e as derrama sobre a terra; Senhor é o seu nome.',
    'É ele que faz vir súbita destruição sobre o forte e ruína contra a fortaleza."',
    '"Vocês odeiam quem os repreende no tribunal e detestam quem fala com sinceridade.',
    'Portanto, visto que pisam os pobres e deles exigem tributo de trigo, vocês não habitarão nas casas de pedras lavradas que construíram, nem beberão o vinho das belas videiras que plantaram.',
    'Porque sei que são muitas as suas transgressões e que são graves os pecados que vocês cometem. Vocês afligem os justos, aceitam suborno e rejeitam as causas dos necessitados no tribunal.',
    'Por isso, numa época de tanta corrupção, quem é prudente prefere ficar calado."',
    '"Busquem o bem e não o mal, para que vocês vivam. E assim o Senhor , o Deus dos Exércitos, estará com vocês, como vocês dizem.',
    'Odeiem o mal e amem o bem. Promovam a justiça nos tribunais. Talvez o Senhor , o Deus dos Exércitos, se compadeça do remanescente de José."',
    'Portanto, assim diz o Senhor, o Senhor , Deus dos Exércitos: "Em todas as praças haverá pranto, e em todas as ruas dirão: ‘Ai! Ai!’ Chamarão os lavradores para o pranto e, para o choro, os que sabem prantear.',
    'Em todas as vinhas haverá pranto, porque passarei pelo meio de vocês", diz o Senhor .',
    '"Ai dos que desejam o Dia do Senhor ! Para que vocês desejam o Dia do Senhor ? Será um dia de trevas e não de luz.',
    'Será como se um homem fugisse de um leão e lhe saísse ao encontro um urso; ou como se, entrando em casa e encostando a mão na parede, fosse mordido por uma cobra.',
    'O dia do Senhor será um dia de trevas e não de luz! Será um dia de completa escuridão, sem nenhuma claridade!"',
    '"Eu odeio e desprezo as suas festas e com as suas reuniões solenes não tenho nenhum prazer.',
    'Mesmo que vocês me ofereçam holocaustos e ofertas de cereais, não me agradarei deles. Quanto às suas ofertas pacíficas de animais gordos, nem sequer olharei para elas.',
    'Afastem de mim o barulho dos seus cânticos, porque não ouvirei as melodias das suas liras.',
    'Em vez disso, corra o juízo como as águas, e a justiça, como um ribeiro perene."',
    '— Casa de Israel, por acaso vocês me apresentaram sacrifícios e ofertas de cereais durante os quarenta anos no deserto?',
    'Pelo contrário, levaram o seu rei Sicute e Quium, o seu deus-estrela, imagens que vocês fizeram para si mesmos.',
    'Por isso, vou mandar vocês ao exílio para além de Damasco, diz o Senhor , cujo nome é Deus dos Exércitos.'
]

const amos6_naa = [
    '"Ai dos que andam à vontade em Sião e dos que vivem sem receio no monte de Samaria, homens notáveis da principal das nações, aos quais se dirige a casa de Israel!',
    'Vão à cidade de Calné e olhem. Dali, vão à grande cidade de Hamate e, depois, desçam até Gate dos filisteus. Será que eles são melhores do que os reinos de vocês? Ou será que o território deles é maior do que o de vocês?',
    'Vocês imaginam que o dia mau está longe, mas estão fazendo com que o trono da violência se aproxime.',
    'Vocês dormem em camas de marfim e se espreguiçam sobre os seus leitos. Comem os cordeiros do rebanho e os bezerros que estão na engorda.',
    'Ficam cantando à toa ao som da lira e, como Davi, inventam instrumentos musicais.',
    'Bebem vinho em taças e se ungem com o mais excelente óleo, mas não se afligem com a ruína de José.',
    'Portanto, vocês estarão entre os primeiros que serão levados para o cativeiro, e cessarão as festanças dos que gostam de se espreguiçar."',
    'O Senhor Deus jurou por si mesmo. O Senhor , o Deus dos Exércitos, diz: "Eu detesto o orgulho de Jacó e odeio os seus palácios. Abandonarei a cidade e tudo o que nela há."',
    'Se numa casa ficarem dez homens, também esses morrerão.',
    'E, se um parente chegado, o qual os há de queimar, pega os cadáveres para os levar para fora da casa e pergunta ao que estiver lá dentro: "Há mais alguém com você?" E este responder: "Não, não há"; então lhe dirá: "Cale-se! Não mencione o nome do Senhor ."',
    'Pois eis que o Senhor ordena, e será destroçada a casa grande, e a pequena será feita em pedaços.',
    '"Será que os cavalos podem correr sobre as rochas? Será que é possível lavrá-las com bois? No entanto, vocês transformaram o juízo em veneno e o fruto da justiça, em alosna.',
    'Vocês se alegram por terem conquistado Lo-Debar, e dizem: ‘Não é fato que, com as nossas próprias forças, nos apoderamos de Carnaim?’',
    'Pois eis que trarei contra vocês, ó casa de Israel, uma nação que os oprimirá, desde a entrada de Hamate até o ribeiro da Arabá", diz o Senhor , o Deus dos Exércitos.'
]

const amos7_naa = [
    'O Senhor Deus me mostrou o seguinte: eis que ele formava uma nuvem de gafanhotos no momento em que começavam a brotar as plantas da entressafra, ou seja, a cultura tardia que vinha depois de concluída a colheita reservada ao rei.',
    'Quando tinham acabado de comer toda a plantação, eu disse: — Senhor Deus, perdoa, por favor! Como poderá Jacó sobreviver? Pois ele é pequeno.',
    'Então o Senhor mudou de ideia em relação a isso e falou: — Isso não vai acontecer.',
    'Depois, o Senhor Deus me mostrou o seguinte: eis que o Senhor Deus chamou o fogo para exercer a sua justiça. Este fogo consumiu o grande abismo e começava a devorar a terra.',
    'Então eu disse: — Senhor Deus, para, por favor! Como poderá Jacó sobreviver? Pois ele é pequeno.',
    'E o Senhor mudou de ideia em relação a isso e falou: — Também isso não vai acontecer.',
    'Mostrou-me também isto: eis que o Senhor estava sobre um muro levantado a prumo, e tinha um prumo na mão.',
    'O Senhor me perguntou: — O que você está vendo, Amós? Respondi: — Um prumo. Então o Senhor disse: — Eis que eu porei o prumo no meio do meu povo de Israel; não posso mais ignorar o que fazem.',
    'Os lugares altos de Isaque serão assolados, e os santuários de Israel serão destruídos. E eu me levantarei com a espada contra a casa de Jeroboão.',
    'Então Amazias, o sacerdote de Betel, mandou dizer a Jeroboão, rei de Israel: — Amós está conspirando contra o rei no meio da casa de Israel. A terra não pode suportar todas as suas palavras.',
    'Porque assim diz Amós: "Jeroboão morrerá à espada, e Israel certamente será levado para fora de sua terra, em cativeiro."',
    'Depois Amazias disse a Amós: — Saia daqui, vidente! Fuja para a terra de Judá e vá ganhar a vida por lá. Em Judá você pode profetizar.',
    'Mas em Betel, daqui em diante, você não poderá profetizar, porque este é o santuário do rei e o templo do reino.',
    'Amós respondeu e disse a Amazias: — Eu não sou profeta nem discípulo de profeta. Eu cuido de gado e colho sicômoros.',
    'Mas o Senhor me tirou do trabalho de andar atrás do gado e me disse: "Vá e profetize ao meu povo de Israel."',
    'Portanto, agora ouça a palavra do Senhor . Você diz: "Não profetize contra Israel nem fale contra a casa de Isaque."',
    'Pois bem, assim diz o Senhor : "A sua mulher se prostituirá na cidade, e os seus filhos e as suas filhas cairão à espada. A sua terra será repartida a cordel, e você morrerá numa terra impura. E Israel certamente será levado cativo para fora da sua terra."'
]

const amos8_naa = [
    'O Senhor Deus também me mostrou o seguinte: um cesto de frutos de verão.',
    'E perguntou: — O que você está vendo, Amós? E eu respondi: — Um cesto de frutos de verão. Então o Senhor me disse: "Chegou o fim para o meu povo de Israel; não posso mais ignorar o que fazem.',
    'Naquele dia", diz o Senhor Deus, "os cânticos do templo serão gritos de dor. Muitos cadáveres! Cadáveres jogados por toda parte! Silêncio!"',
    'Ouçam isto, vocês que pisam os necessitados e destroem os miseráveis da terra,',
    'dizendo: "Quando passará a Festa da Lua Nova, para vendermos os cereais? E o sábado, para abrirmos os celeiros de trigo, diminuindo a quantidade, aumentando o peso e enganando com balanças desonestas,',
    'para comprarmos os pobres por dinheiro e os necessitados por um par de sandálias e vendermos o refugo do trigo?"',
    'O Senhor jurou pela glória de Jacó, dizendo: "Nunca me esquecerei de nenhuma das suas obras!',
    'Por causa disto, será que a terra não vai tremer? E não estarão enlutados todos os seus moradores? Toda a terra se levantará como o Nilo, será agitada e abaixará como o rio do Egito."',
    '"Naquele dia", diz o Senhor Deus, "farei com que o sol se ponha ao meio-dia e com que a terra se cubra de trevas em pleno dia.',
    'Transformarei as suas festas em luto e todos os seus cânticos em lamentações. Vou fazer com que todos vistam roupas feitas de pano de saco e rapem a cabeça. Farei com que isso seja como luto por um filho único, luto cujo fim será como dia de amargura."',
    '"Eis que vêm dias", diz o Senhor Deus, "em que enviarei sobre a terra fome — não de pão, e sede — não de água, mas de ouvir as palavras do Senhor .',
    'Andarão de mar a mar e do Norte até o Oriente; correrão por toda parte, procurando a palavra do Senhor , mas não a acharão.',
    'Naquele dia, as moças bonitas e os jovens desmaiarão de sede,',
    'os que agora juram pelo ídolo de Samaria e dizem: ‘Tão certo como vive o seu deus, ó Dã!’ E: ‘Tão certo como vive o culto de Berseba!’ Esses mesmos cairão e nunca mais se levantarão."'
]

const amos9_naa = [
    'Vi o Senhor, que estava em pé junto ao altar. Ele me disse: "Bata nos capitéis das colunas, para que os umbrais comecem a tremer e os pedaços caiam sobre a cabeça de todos eles. Matarei à espada os que restarem. Nenhum deles fugirá, e nenhum escapará.',
    'Ainda que cavem para chegar ao mais profundo abismo, a minha mão os tirará de lá. Se subirem ao céu, de lá os farei descer.',
    'Se eles se esconderem no alto do Carmelo, irei atrás deles e de lá os tirarei. E, caso se ocultarem dos meus olhos no fundo do mar, ali darei ordem à serpente, e ela os morderá.',
    'Se forem levados para o cativeiro pelos seus inimigos, ali darei ordem à espada, e ela os matará; porei os meus olhos sobre eles para o mal e não para o bem."',
    'Porque o Senhor, o Senhor dos Exércitos, é o que toca na terra, e ela se derrete, e todos os seus moradores estarão de luto. Toda a terra subirá como o Nilo e abaixará como o rio do Egito.',
    'Deus é o que edifica as suas câmaras no céu e firmou a sua abóbada sobre a terra. Ele é o que chama as águas do mar e as derrama sobre a terra; Senhor é o seu nome.',
    '"Filhos de Israel, não é verdade que vocês são para mim como os filhos dos etíopes?" — diz o Senhor . "Não é fato que eu tirei Israel da terra do Egito, os filisteus de Caftor, e os sírios de Quir?',
    'Eis que os olhos do Senhor Deus estão contra este reino pecador, e eu o destruirei da face da terra. Mas não destruirei por completo a casa de Jacó", diz o Senhor .',
    '"Porque eis que darei ordens e sacudirei a casa de Israel entre todas as nações, assim como se sacode trigo na peneira, sem que um só grão caia na terra.',
    'Todos os pecadores do meu povo morrerão à espada, os que dizem: ‘O mal não nos alcançará nem nos encontrará.’"',
    '"Naquele dia, levantarei o tabernáculo caído de Davi. Vou reparar as suas brechas e levantá-lo das suas ruínas. Vou restaurá-lo, para que volte a ser como era nos dias da antiguidade,',
    'para que o meu povo tome posse do restante de Edom e de todas as nações que são chamadas pelo meu nome", diz o Senhor , que faz estas coisas.',
    '"Eis que vêm dias", diz o Senhor , "em que o que lavra virá logo após o que colhe, e o que pisa as uvas virá logo após o que lança semente. Os montes destilarão vinho, e todas as colinas se derreterão.',
    'Mudarei a sorte do meu povo de Israel. Eles reedificarão as cidades destruídas e nelas habitarão. Plantarão vinhas e beberão o seu vinho; farão pomares e comerão dos seus frutos.',
    'Eu os plantarei na sua terra, e, dessa terra que lhes dei, nunca mais serão arrancados", diz o Senhor , seu Deus.'
]

const obadias1 = [
    'Visão de Obadias: Assim diz o Senhor DEUS a respeito de Edom: Temos ouvido a pregação do SENHOR, e foi enviado aos gentios um emissário, dizendo: Levantai-vos, e levantemo-nos contra ela para a guerra.',
    'Eis que te fiz pequeno entre os gentios; tu és muito desprezado.',
    'A soberba do teu coração te enganou, como o que habita nas fendas das rochas, na sua alta morada, que diz no seu coração: Quem me derrubará em terra?',
    'Se te elevares como águia, e puseres o teu ninho entre as estrelas, dali te derrubarei, diz o Senhor.',
    'Se viessem a ti ladrões, ou assaltantes de noite (como estás destruído! ), não furtariam o que lhes bastasse? Se a ti viessem os vindimadores, não deixariam algumas uvas?',
    'Como foram rebuscados os bens de Esaú! Como foram investigados os seus tesouros escondidos!',
    'Todos os teus confederados te levaram até a fronteira; os que gozam da tua paz te enganaram, prevaleceram contra ti; os que comem o teu pão puseram debaixo de ti uma armadilha; não há nele entendimento.',
    'Porventura não acontecerá naquele dia, diz o Senhor, que farei perecer os sábios de Edom, e o entendimento do monte de Esaú?',
    'E os teus poderosos, ó Temã, estarão atemorizados, para que do monte de Esaú seja cada um exterminado pela matança.',
    'Por causa da violência feita a teu irmão Jacó, cobrir-te-á a confusão, e serás exterminado para sempre.',
    'No dia em que o confrontaste, no dia em que estranhos levaram cativo o seu exército, e os estrangeiros entravam pelas suas portas, e lançaram sortes sobre Jerusalém, tu eras também como um deles.',
    'Mas tu não devias olhar com prazer para o dia de teu irmão, no dia do seu infortúnio; nem alegrar-te sobre os filhos de Judá, no dia da sua ruína; nem alargar a tua boca, no dia da angústia;',
    'Nem entrar pela porta do meu povo, no dia da sua calamidade; sim, tu não devias olhar satisfeito o seu mal, no dia da sua calamidade; nem lançar mão dos seus bens, no dia da sua calamidade;',
    'Nem parar nas encruzilhadas, para exterminares os que escapassem; nem entregar os que lhe restassem, no dia da angústia.',
    'Porque o dia do Senhor está perto, sobre todos os gentios; como tu fizeste, assim se fará contigo; a tua recompensa voltará sobre a tua cabeça.',
    'Porque, como vós bebestes no meu santo monte, assim beberão também de contínuo todos os gentios; beberão, e sorverão, e serão como se nunca tivessem sido.',
    'Mas no monte Sião haverá livramento, e ele será santo; e os da casa de Jacó possuirão as suas herdades.',
    'E a casa de Jacó será fogo, e a casa de José uma chama, e a casa de Esaú palha; e se acenderão contra eles, e os consumirão; e ninguém mais restará da casa de Esaú, porque o Senhor o falou.',
    'E os do sul possuirão o monte de Esaú, e os das planícies, os filisteus; possuirão também os campos de Efraim, e os campos de Samaria; e Benjamim possuirá a Gileade.',
    'E os cativos deste exército, dos filhos de Israel, possuirão os cananeus, até Zarefate; e os cativos de Jerusalém, que estão em Sefarade, possuirão as cidades do sul.',
    'E subirão salvadores ao monte Sião, para julgarem o monte de Esaú; e o reino será do Senhor.'
]

const obadias1_naa = [
    'Visão de Obadias. Assim diz o Senhor Deus a respeito de Edom: "Ouvimos uma notícia vinda do Senhor , e um mensageiro foi enviado às nações para dizer: ‘Preparem-se! Preparem-se para a guerra contra Edom!’',
    'Eis que fiz de você uma nação pequena entre as outras, muito desprezada.',
    'O orgulho do seu coração o enganou. Você vive nas fendas das rochas, num lugar elevado, e diz em seu íntimo: ‘Quem poderá me jogar lá para baixo?’',
    'Ainda que você suba como a águia e faça o seu ninho entre as estrelas, de lá eu o derrubarei", diz o Senhor .',
    '"Se ladrões o atacassem ou assaltantes viessem de noite — como você está destruído! — não levariam só o que lhes bastasse? Se fossem até você os que colhem uvas, não deixariam pelo menos alguns cachos?',
    'Como foram saqueados os bens de Esaú! Como foram vasculhados os seus tesouros escondidos!',
    'Todos os seus aliados, ó Edom, o empurraram para fora do seu território. Aqueles que estavam em paz com você o enganaram e prevaleceram contra você. Aqueles que sentam à sua mesa prepararam uma armadilha para os seus pés. E não há em Edom entendimento."',
    '"Naquele dia", diz o Senhor , "destruirei os sábios de Edom e o entendimento do monte de Esaú.',
    'Os seus valentes, ó Temã, ficarão apavorados, para que, do monte de Esaú, todos sejam exterminados pela matança."',
    '"Por causa da violência feita ao seu irmão Jacó, você ficará coberto de vergonha e será exterminado para sempre.',
    'No dia em que estranhos levaram os bens de seu irmão Jacó, você estava presente; quando estrangeiros entraram pelos portões e lançaram sortes sobre Jerusalém, você mesmo era um deles.',
    'Você não devia ter olhado com prazer para o dia do seu irmão, o dia da sua calamidade. Você não devia ter-se alegrado pelo que aconteceu com os filhos de Judá, no dia da sua ruína. Você não devia ter falado de boca cheia, no dia da angústia.',
    'Você não devia ter entrado pelo portão do meu povo, no dia da sua calamidade. Você não devia ter olhado com prazer para o seu mal, no dia da sua calamidade. Você não devia ter posto as mãos sobre os seus bens, no dia da sua calamidade.',
    'Você não devia ter parado nas encruzilhadas, para exterminar os que escapassem. Você não devia ter entregado ao inimigo os que escaparam com vida, no dia da angústia."',
    '"Porque o Dia do Senhor está prestes a vir sobre todas as nações. Você será tratado da mesma forma como tratou os outros; o mal que você fez cairá sobre a sua cabeça.',
    'Porque, assim como vocês beberam no meu santo monte, assim todas as nações beberão sem parar; irão beber, engolir, e serão como se nunca tivessem existido."',
    '"Mas, no monte Sião, haverá livramento. O monte será santo, e os da casa de Jacó tomarão posse de sua herança.',
    'A casa de Jacó será fogo e a casa de José será chama, mas a casa de Esaú será a palha. O fogo e a chama incendiarão a palha e a consumirão; e ninguém mais restará da casa de Esaú, porque o Senhor o falou."',
    '"Os de Neguebe tomarão posse do monte de Esaú, e os da Sefelá ocuparão o território dos filisteus; tomarão posse também dos campos de Efraim e dos campos de Samaria; e Benjamim tomará posse de Gileade.',
    'Os cativos do exército dos filhos de Israel tomarão posse do território dos cananeus até Sarepta, e os cativos de Jerusalém, que estão em Sefarade, tomarão posse das cidades do Sul.',
    'Salvadores hão de subir ao monte Sião, para julgarem o monte de Esaú; e o reino será do Senhor ."'
]

const colossenses1 = [
    'Paulo, apóstolo de Jesus Cristo, pela vontade de Deus, e o irmão Timóteo,',
    'Aos santos e irmãos fiéis em Cristo, que estão em Colossos: Graça a vós, e paz da parte de Deus nosso Pai e do Senhor Jesus Cristo.',
    'Graças damos a Deus, Pai de nosso Senhor Jesus Cristo, orando sempre por vós,',
    'Porquanto ouvimos da vossa fé em Cristo Jesus, e do amor que tendes para com todos os santos;',
    'Por causa da esperança que vos está reservada nos céus, da qual já antes ouvistes pela palavra da verdade do evangelho,',
    'Que já chegou a vós, como também está em todo o mundo; e já vai frutificando, como também entre vós, desde o dia em que ouvistes e conhecestes a graça de Deus em verdade;',
    'Como aprendestes de Epafras, nosso amado conservo, que para vós é um fiel ministro de Cristo,',
    'O qual nos declarou também o vosso amor no Espírito.',
    'Por esta razão, nós também, desde o dia em que o ouvimos, não cessamos de orar por vós, e de pedir que sejais cheios do conhecimento da sua vontade, em toda a sabedoria e inteligência espiritual;',
    'Para que possais andar dignamente diante do Senhor, agradando-lhe em tudo, frutificando em toda a boa obra, e crescendo no conhecimento de Deus;',
    'Corroborados em toda a fortaleza, segundo a força da sua glória, em toda a paciência, e longanimidade com gozo;',
    'Dando graças ao Pai que nos fez idôneos para participar da herança dos santos na luz;',
    'O qual nos tirou da potestade das trevas, e nos transportou para o reino do Filho do seu amor;',
    'Em quem temos a redenção pelo seu sangue, a saber, a remissão dos pecados;',
    'O qual é imagem do Deus invisível, o primogênito de toda a criação;',
    'Porque nele foram criadas todas as coisas que há nos céus e na terra, visíveis e invisíveis, sejam tronos, sejam dominações, sejam principados, sejam potestades. Tudo foi criado por ele e para ele.',
    'E ele é antes de todas as coisas, e todas as coisas subsistem por ele.',
    'E ele é a cabeça do corpo, da igreja; é o princípio e o primogênito dentre os mortos, para que em tudo tenha a preeminência.',
    'Porque foi do agrado do Pai que toda a plenitude nele habitasse,',
    'E que, havendo por ele feito a paz pelo sangue da sua cruz, por meio dele reconciliasse consigo mesmo todas as coisas, tanto as que estão na terra, como as que estão nos céus.',
    'A vós também, que noutro tempo éreis estranhos, e inimigos no entendimento pelas vossas obras más, agora contudo vos reconciliou',
    'No corpo da sua carne, pela morte, para perante ele vos apresentar santos, e irrepreensíveis, e inculpáveis,',
    "Se, na verdade, permanecerdes fundados e firmes na fé, e não vos moverdes da esperança do evangelho que tendes ouvido, o qual foi pregado a toda criatura que há debaixo do céu, e do qual eu, Paulo, estou feito ministro.",
    'Regozijo-me agora no que padeço por vós, e na minha carne cumpro o resto das aflições de Cristo, pelo seu corpo, que é a igreja;',
    'Da qual eu estou feito ministro segundo a dispensação de Deus, que me foi concedida para convosco, para cumprir a palavra de Deus;',
    'O mistério que esteve oculto desde todos os séculos, e em todas as gerações, e que agora foi manifesto aos seus santos;',
    'Aos quais Deus quis fazer conhecer quais são as riquezas da glória deste mistério entre os gentios, que é Cristo em vós, esperança da glória;',
    'A quem anunciamos, admoestando a todo o homem, e ensinando a todo o homem em toda a sabedoria; para que apresentemos todo o homem perfeito em Jesus Cristo;',
    'E para isto também trabalho, combatendo segundo a sua eficácia, que opera em mim poderosamente.'
]

const colossenses2 = [
    'Porque quero que saibais quão grande combate tenho por vós, e pelos que estão em Laodicéia, e por quantos não viram o meu rosto em carne;',
    'Para que os seus corações sejam consolados, e estejam unidos em amor, e enriquecidos da plenitude da inteligência, para conhecimento do mistério de Deus e Pai, e de Cristo,',
    'Em quem estão escondidos todos os tesouros da sabedoria e da ciência.',
    'E digo isto, para que ninguém vos engane com palavras persuasivas.',
    'Porque, ainda que esteja ausente quanto ao corpo, contudo, em espírito estou convosco, regozijando-me e vendo a vossa ordem e a firmeza da vossa fé em Cristo.',
    'Como, pois, recebestes o Senhor Jesus Cristo, assim também andai nele,',
    'Arraigados e sobreedificados nele, e confirmados na fé, assim como fostes ensinados, nela abundando em ação de graças.',
    'Tende cuidado, para que ninguém vos faça presa sua, por meio de filosofias e vãs sutilezas, segundo a tradição dos homens, segundo os rudimentos do mundo, e não segundo Cristo;',
    'Porque nele habita corporalmente toda a plenitude da divindade;',
    'E estais perfeitos nele, que é a cabeça de todo o principado e potestade;',
    'No qual também estais circuncidados com a circuncisão não feita por mão no despojo do corpo dos pecados da carne, pela circuncisão de Cristo;',
    'Sepultados com ele no batismo, nele também ressuscitastes pela fé no poder de Deus, que o ressuscitou dentre os mortos.',
    'E, quando vós estáveis mortos nos pecados, e na incircuncisão da vossa carne, vos vivificou juntamente com ele, perdoando-vos todas as ofensas,',
    'Havendo riscado a cédula que era contra nós nas suas ordenanças, a qual de alguma maneira nos era contrária, e a tirou do meio de nós, cravando-a na cruz.',
    'E, despojando os principados e potestades, os expôs publicamente e deles triunfou em si mesmo.',
    'Portanto, ninguém vos julgue pelo comer, ou pelo beber, ou por causa dos dias de festa, ou da lua nova, ou dos sábados,',
    'Que são sombras das coisas futuras, mas o corpo é de Cristo.',
    'Ninguém vos domine a seu bel-prazer com pretexto de humildade e culto dos anjos, envolvendo-se em coisas que não viu; estando debalde inchado na sua carnal compreensão,',
    'E não ligado à cabeça, da qual todo o corpo, provido e organizado pelas juntas e ligaduras, vai crescendo em aumento de Deus.',
    'Se, pois, estais mortos com Cristo quanto aos rudimentos do mundo, por que vos carregam ainda de ordenanças, como se vivêsseis no mundo, tais como:',
    'Não toques, não proves, não manuseies?',
    'As quais coisas todas perecem pelo uso, segundo os preceitos e doutrinas dos homens;',
    'As quais têm, na verdade, alguma aparência de sabedoria, em devoção voluntária, humildade, e em disciplina do corpo, mas não são de valor algum senão para a satisfação da carne.'
]

const colossenses3 = [
    'Portanto, se já ressuscitastes com Cristo, buscai as coisas que são de cima, onde Cristo está assentado à destra de Deus.',
    'Pensai nas coisas que são de cima, e não nas que são da terra;',
    'Porque já estais mortos, e a vossa vida está escondida com Cristo em Deus.',
    'Quando Cristo, que é a nossa vida, se manifestar, então também vós vos manifestareis com ele em glória.',
    'Mortificai, pois, os vossos membros, que estão sobre a terra: a fornicação, a impureza, o afeição desordenada, a vil concupiscência, e a avareza, que é idolatria;',
    'Pelas quais coisas vem a ira de Deus sobre os filhos da desobediência;',
    'Nas quais, também, em outro tempo andastes, quando vivíeis nelas.',
    'Mas agora, despojai-vos também de tudo: da ira, da cólera, da malícia, da maledicência, das palavras torpes da vossa boca.',
    'Não mintais uns aos outros, pois que já vos despistes do velho homem com os seus feitos,',
    'E vos vestistes do novo, que se renova para o conhecimento, segundo a imagem daquele que o criou;',
    'Onde não há grego, nem judeu, circuncisão, nem incircuncisão, bárbaro, cita, servo ou livre; mas Cristo é tudo, e em todos.',
    'Revesti-vos, pois, como eleitos de Deus, santos e amados, de entranhas de misericórdia, de benignidade, humildade, mansidão, longanimidade;',
    'Suportando-vos uns aos outros, e perdoando-vos uns aos outros, se alguém tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós também.',
    'E, sobre tudo isto, revesti-vos de amor, que é o vínculo da perfeição.',
    'E a paz de Deus, para a qual também fostes chamados em um corpo, domine em vossos corações; e sede agradecidos.',
    'A palavra de Cristo habite em vós abundantemente, em toda a sabedoria, ensinando-vos e admoestando-vos uns aos outros, com salmos, hinos e cânticos espirituais, cantando ao Senhor com graça em vosso coração.',
    'E, quanto fizerdes por palavras ou por obras, fazei tudo em nome do Senhor Jesus, dando por ele graças a Deus Pai.',
    'Vós, mulheres, estai sujeitas a vossos próprios maridos, como convém no Senhor.',
    'Vós, maridos, amai a vossas mulheres, e não vos irriteis contra elas.',
    'Vós, filhos, obedecei em tudo a vossos pais, porque isto é agradável ao Senhor.',
    'Vós, pais, não irriteis a vossos filhos, para que não percam o ânimo.',
    'Vós, servos, obedecei em tudo a vossos senhores segundo a carne, não servindo só na aparência, como para agradar aos homens, mas em simplicidade de coração, temendo a Deus.',
    'E tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor, e não aos homens,',
    'Sabendo que recebereis do Senhor o galardão da herança, porque a Cristo, o Senhor, servis.',
    'Mas quem fizer agravo receberá o agravo que fizer; pois não há acepção de pessoas.'
]

const colossenses4 = [
    'Vós, senhores, fazei o que for de justiça e eqüidade a vossos servos, sabendo que também tendes um Senhor nos céus.',
    'Perseverai em oração, velando nela com ação de graças;',
    'Orando também juntamente por nós, para que Deus nos abra a porta da palavra, a fim de falarmos do mistério de Cristo, pelo qual estou também preso;',
    'Para que o manifeste, como me convém falar.',
    'Andai com sabedoria para com os que estão de fora, remindo o tempo.',
    'A vossa palavra seja sempre agradável, temperada com sal, para que saibais como vos convém responder a cada um.',
    'Tíquico, irmão amado e fiel ministro, e conservo no Senhor, vos fará saber o meu estado;',
    'O qual vos enviei para o mesmo fim, para que saiba do vosso estado e console os vossos corações;',
    'Juntamente com Onésimo, amado e fiel irmão, que é dos vossos; eles vos farão saber tudo o que por aqui se passa.',
    'Aristarco, que está preso comigo, vos saúda, e Marcos, o sobrinho de Barnabé, acerca do qual já recebestes mandamentos; se ele for ter convosco, recebei-o;',
    'E Jesus, chamado Justo; os quais são da circuncisão; são estes unicamente os meus cooperadores no reino de Deus; e para mim têm sido consolação.',
    'Saúda-vos Epafras, que é dos vossos, servo de Cristo, combatendo sempre por vós em orações, para que vos conserveis firmes, perfeitos e consumados em toda a vontade de Deus.',
    'Pois eu lhe dou testemunho de que tem grande zelo por vós, e pelos que estão em Laodicéia, e pelos que estão em Hierápolis.',
    'Saúda-vos Lucas, o médico amado, e Demas.',
    'Saudai aos irmãos que estão em Laodicéia e a Ninfa e à igreja que está em sua casa.',
    'E, quando esta epístola tiver sido lida entre vós, fazei que também o seja na igreja dos laodicenses, e a que veio de Laodicéia lede-a vós também.',
    'E dizei a Arquipo: Atenta para o ministério que recebeste no Senhor, para que o cumpras.',
    'Saudação de minha mão, de Paulo. Lembrai-vos das minhas prisões. A graça seja convosco. Amém.'
]

const colossenses1_naa = [
    'Paulo, apóstolo de Cristo Jesus, pela vontade de Deus, e o irmão Timóteo,',
    'aos santos e fiéis irmãos em Cristo que estão em Colossos. Que a graça e a paz de Deus, nosso Pai, estejam com vocês.',
    'Damos sempre graças a Deus, Pai de nosso Senhor Jesus Cristo, quando oramos por vocês,',
    "desde que ouvimos da fé que vocês têm em Cristo Jesus e do amor que vocês têm por todos os santos,",
    "por causa da esperança que está guardada para vocês nos céus. Desta esperança vocês ouviram falar anteriormente por meio da palavra da verdade do evangelho,",
    'que chegou até vocês. Esse evangelho está produzindo fruto e crescendo em todo o mundo, assim como acontece entre vocês, desde o dia em que ouviram e entenderam a graça de Deus na verdade.',
    'Isso vocês aprenderam de Epafras, nosso amado conservo e, em relação a vocês, fiel ministro de Cristo,',
    'o qual também nos contou do amor que vocês têm no Espírito.',
    'Por esta razão, também nós, desde o dia em que soubemos disso, não deixamos de orar por vocês e de pedir que transbordem do pleno conhecimento da vontade de Deus, em toda a sabedoria e entendimento espiritual.',
    'Dessa maneira, poderão viver de modo digno do Senhor, para o seu inteiro agrado, frutificando em toda boa obra e crescendo no conhecimento de Deus.',
    'Assim, vocês serão fortalecidos com todo o poder, segundo a força da sua glória, em toda a perseverança e paciência, com alegria,',
    'dando graças ao Pai, que os capacitou a participar da herança dos santos na luz.',
    'Ele nos libertou do poder das trevas e nos transportou para o Reino do seu Filho amado,',
    'em quem temos a redenção, a remissão dos pecados.',
    "Ele é a imagem do Deus invisível, o primogênito de toda a criação.",
    'Pois nele foram criadas todas as coisas, nos céus e sobre a terra, as visíveis e as invisíveis, sejam tronos, sejam soberanias, quer principados, quer potestades. Tudo foi criado por meio dele e para ele.',
    'Ele é antes de todas as coisas. Nele tudo subsiste.',
    'Ele é a cabeça do corpo, que é a igreja. Ele é o princípio, o primogênito dentre os mortos, para ter a primazia em todas as coisas.',
    'Porque Deus achou por bem que, nele, residisse toda a plenitude',
    'e que, havendo feito a paz pelo sangue da sua cruz, por meio dele, reconciliasse consigo mesmo todas as coisas, quer sobre a terra, quer nos céus.',
    'E vocês que, no passado, eram estranhos e inimigos no entendimento pelas obras más que praticavam,',
    'agora, porém, ele os reconciliou no corpo da sua carne, mediante a sua morte, para apresentá-los diante dele santos, inculpáveis e irrepreensíveis,',
    'se é que vocês permanecem na fé, alicerçados e firmes, não se deixando afastar da esperança do evangelho que vocês ouviram e que foi pregado a toda criatura debaixo do céu, e do qual eu, Paulo, me tornei ministro.',
    'Agora me alegro nos meus sofrimentos por vocês e preencho o que resta das aflições de Cristo, na minha carne, a favor do seu corpo, que é a igreja,',
    'da qual me tornei ministro de acordo com a dispensação da parte de Deus, que me foi confiada em favor de vocês, para dar pleno cumprimento à palavra de Deus:',
    'o mistério que esteve escondido durante séculos e gerações, mas que agora foi manifestado aos seus santos.',
    'A estes Deus quis dar a conhecer a riqueza da glória deste mistério entre os gentios, que é Cristo em vocês, a esperança da glória.',
    'Este Cristo nós anunciamos, advertindo a todos e ensinando a cada um em toda a sabedoria, a fim de que apresentemos cada pessoa perfeita em Cristo.',
    'É para esse fim que eu me empenho, esforçando-me o mais possível, segundo o poder de Cristo que opera poderosamente em mim.'
]

const colossenses2_naa = [
    'Quero que saibam quão grande tem sido a nossa luta por vocês, pelos que moram em Laodiceia e por muitos outros que não me viram face a face.',
    'Faço isto para que o coração deles seja consolado e para que eles, vinculados em amor, tenham toda a riqueza da plena convicção do entendimento, para conhecimento do mistério de Deus, que é Cristo,',
    'em quem estão ocultos todos os tesouros da sabedoria e do conhecimento.',
    'Digo isso a vocês para que ninguém os engane com argumentos falaciosos.',
    'Porque, embora ausente em pessoa, em espírito estou com vocês, alegrando-me e verificando a boa ordem de vocês e a firmeza da fé que têm em Cristo.',
    'Portanto, assim como vocês receberam Cristo Jesus, o Senhor, continuem a viver nele,',
    'estando enraizados e edificados nele, e confirmados na fé, como foi ensinado a vocês, crescendo em ação de graças.',
    'Tenham cuidado para que ninguém venha a enredá-los com sua filosofia e vãs sutilezas, conforme a tradição dos homens, conforme os rudimentos do mundo e não segundo Cristo.',
    'Porque nele habita corporalmente toda a plenitude da divindade.',
    'Também, nele, vocês receberam a plenitude. Ele é o cabeça de todo principado e potestade.',
    'Nele também vocês foram circuncidados, não com uma circuncisão feita por mãos humanas, mas pela remoção do corpo da carne, que é a circuncisão de Cristo,',
    'tendo sido sepultados juntamente com ele no batismo, no qual vocês também foram ressuscitados por meio da fé no poder de Deus que o ressuscitou dentre os mortos.',
    'E quando vocês estavam mortos nos seus pecados e na incircuncisão da carne, ele lhes deu vida juntamente com Cristo, perdoando todos os nossos pecados.',
    'Cancelando o escrito de dívida que era contra nós e que constava de ordenanças, o qual nos era prejudicial, removeu-o inteiramente, cravando-o na cruz.',
    'E, despojando os principados e as potestades, publicamente os expôs ao desprezo, triunfando sobre eles na cruz.',
    'Portanto, que ninguém julgue vocês por causa de comida e bebida, ou dia de festa, ou lua nova, ou sábados,',
    'porque tudo isso tem sido sombra das coisas que haviam de vir; porém o corpo é de Cristo.',
    'Não deixem que ninguém se faça de árbitro para desqualificar vocês, com pretexto de humildade e culto de anjos, baseando-se em visões, estando cheio de orgulho, sem motivo algum, na sua mente carnal,',
    'e não retendo a cabeça, a partir da qual todo o corpo, suprido e bem-vinculado por suas juntas e ligamentos, cresce o crescimento que vem de Deus.',
    'Se vocês morreram com Cristo para os rudimentos do mundo, por que se sujeitam a regras, como se ainda vivessem no mundo?',
    '"Não toque nisto", "não coma disso", "não pegue naquilo".',
    'Todas estas coisas se destroem com o uso; são preceitos e doutrinas dos homens.',
    'De fato, essas coisas têm aparência de sabedoria, ao promoverem um culto que as pessoas inventam, falsa humildade e tratamento austero do corpo. Mas elas não têm valor algum na luta contra as inclinações da carne.'
]

const colossenses3_naa = [
    'Portanto, se vocês foram ressuscitados juntamente com Cristo, busquem as coisas lá do alto, onde Cristo vive, assentado à direita de Deus.',
    'Pensem nas coisas lá do alto, e não nas que são aqui da terra.',
    'Porque vocês morreram, e a vida de vocês está oculta juntamente com Cristo, em Deus.',
    'Quando Cristo, que é a vida de vocês, se manifestar, então vocês também serão manifestados com ele, em glória.',
    'Portanto, façam morrer tudo o que pertence à natureza terrena: imoralidade sexual, impureza, paixões, maus desejos e a avareza, que é idolatria;',
    'por causa destas coisas é que vem a ira de Deus sobre os filhos da desobediência.',
    'Vocês também andaram nessas mesmas coisas, no passado, quando viviam nelas.',
    'Agora, porém, abandonem igualmente todas estas coisas: ira, indignação, maldade, blasfêmia, linguagem obscena no falar.',
    'Não mintam uns aos outros, uma vez que vocês se despiram da velha natureza com as suas práticas',
    'e se revestiram da nova natureza que se renova para o pleno conhecimento, segundo a imagem daquele que a criou.',
    'Aqui não pode haver mais grego e judeu, circuncisão e incircuncisão, bárbaro, cita, escravo, livre, mas Cristo é tudo e está em todos.',
    'Portanto, como eleitos de Deus, santos e amados, revistam-se de profunda compaixão, de bondade, de humildade, de mansidão, de paciência.',
    'Suportem-se uns aos outros e perdoem-se mutuamente, caso alguém tenha motivo de queixa contra outra pessoa. Assim como o Senhor perdoou vocês, perdoem também uns aos outros.',
    'Acima de tudo isto, porém, esteja o amor, que é o vínculo da perfeição.',
    'Que a paz de Cristo seja o árbitro no coração de vocês, pois foi para essa paz que vocês foram chamados em um só corpo. E sejam agradecidos.',
    'Que a palavra de Cristo habite ricamente em vocês. Instruam e aconselhem-se mutuamente em toda a sabedoria, louvando a Deus com salmos, hinos e cânticos espirituais, com gratidão no coração.',
    'E tudo o que fizerem, seja em palavra, seja em ação, façam em nome do Senhor Jesus, dando por ele graças a Deus Pai.',
    'Esposas, que cada uma de vocês se sujeite a seu próprio marido, como convém no Senhor.',
    'Maridos, que cada um de vocês ame a sua esposa e não a trate com amargura.',
    'Filhos, em tudo obedeçam a seus pais, pois fazer isso é agradável diante do Senhor.',
    'Pais, não irritem os seus filhos, para que eles não fiquem desanimados.',
    'Servos, obedeçam em tudo a seus senhores aqui na terra, não servindo apenas quando estão sendo vigiados, visando somente agradar pessoas, mas com sinceridade de coração, temendo o Senhor.',
    'Tudo o que fizerem, façam de todo o coração, como para o Senhor e não para as pessoas,',
    'sabendo que receberão do Senhor a recompensa da herança. É a Cristo, o Senhor, que vocês estão servindo.',
    'E quem fizer injustiça receberá em troca a injustiça feita. E nisto ninguém será tratado com parcialidade.'
]

const colossenses4_naa = [
    'Senhores, tratem os seus servos com justiça e igualdade, sabendo que também vocês têm um Senhor no céu.',
    'Continuem a orar, vigiando em oração com ação de graças.',
    'Ao mesmo tempo, orem também por nós, para que Deus nos abra uma porta à palavra, a fim de falarmos do mistério de Cristo, pelo qual também estou algemado.',
    'Orem para que eu torne esse mistério conhecido, como me cumpre fazer.',
    'Sejam sábios no modo de agir com os que são de fora e aproveitem bem o tempo.',
    'Que a palavra dita por vocês seja sempre agradável, temperada com sal, para que saibam como devem responder a cada um.',
    'Quanto à minha situação, Tíquico, irmão amado, fiel ministro e conservo no Senhor, lhes dará todas as informações.',
    'Eu o estou enviando com o expresso propósito de lhes dar conhecimento da nossa situação e de alentar o coração de vocês.',
    'Com ele estou enviando Onésimo, o fiel e amado irmão, que é da igreja de vocês. Eles contarão a vocês tudo o que está acontecendo aqui.',
    'Aristarco, que está preso comigo, manda saudações; e também Marcos, primo de Barnabé. A respeito dele vocês já receberam instruções; se ele for até aí, recebam-no bem.',
    'Também Jesus, conhecido por Justo, manda saudações. Estes são os únicos da circuncisão que cooperam pessoalmente comigo pelo Reino de Deus. Eles têm sido o meu consolo.',
    'Epafras, que é da igreja de vocês, manda saudações. Ele é um servo de Cristo Jesus que está sempre lutando por vocês em oração, para que vocês se conservem maduros e plenamente convictos em toda a vontade de Deus.',
    'E posso testemunhar a respeito de Epafras de que muito se empenha por vocês, pelos de Laodiceia e pelos de Hierápolis.',
    'Lucas, o médico amado, e também Demas mandam saudações.',
    'Saúdem os irmãos de Laodiceia, bem como Ninfa e a igreja que se reúne na casa dela.',
    'E, depois que esta carta tiver sido lida entre vocês, façam com que seja lida também na igreja dos laodicenses. E vocês, leiam também a carta que vier de Laodiceia.',
    'E digam a Arquipo: "Atente para o ministério que você recebeu no Senhor, cumprindo bem a sua tarefa."',
    'A saudação é de próprio punho: Paulo. Lembrem-se das minhas algemas. A graça esteja com vocês.'
]

const filemom1 = [
    'Paulo, prisioneiro de Jesus Cristo, e o irmão Timóteo, ao amado Filemom, nosso cooperador,',
    'E à nossa amada Áfia, e a Arquipo, nosso camarada, e à igreja que está em tua casa:',
    'Graça a vós e paz da parte de Deus nosso Pai, e do Senhor Jesus Cristo.',
    'Graças dou ao meu Deus, lembrando-me sempre de ti nas minhas orações;',
    'Ouvindo do teu amor e da fé que tens para com o Senhor Jesus Cristo, e para com todos os santos;',
    'Para que a comunicação da tua fé seja eficaz no conhecimento de todo o bem que em vós há por Cristo Jesus.',
    'Porque temos grande gozo e consolação do teu amor, porque por ti, ó irmão, as entranhas dos santos foram recreadas.',
    'Por isso, ainda que tenha em Cristo grande confiança para te mandar o que te convém,',
    'Todavia peço-te antes por amor, sendo eu tal como sou, Paulo o velho, e também agora prisioneiro de Jesus Cristo.',
    "Peço-te por meu filho Onésimo, que gerei nas minhas prisões;",
    'O qual noutro tempo te foi inútil, mas agora a ti e a mim muito útil; eu to tornei a enviar.',
    'E tu torna a recebê-lo como às minhas entranhas.',
    'Eu bem o quisera conservar comigo, para que por ti me servisse nas prisões do evangelho;',
    'Mas nada quis fazer sem o teu parecer, para que o teu benefício não fosse como por força, mas, voluntário.',
    'Porque bem pode ser que ele se tenha separado de ti por algum tempo, para que o retivesses para sempre,',
    'Não já como servo, antes, mais do que servo, como irmão amado, particularmente de mim, e quanto mais de ti, assim na carne como no Senhor?',
    'Assim, pois, se me tens por companheiro, recebe-o como a mim mesmo.',
    'E, se te fez algum dano, ou te deve alguma coisa, põe isso à minha conta.',
    'Eu, Paulo, de minha própria mão o escrevi; eu o pagarei, para te não dizer que ainda mesmo a ti próprio a mim te deves.',
    'Sim, irmão, eu me regozijarei de ti no Senhor; recreia as minhas entranhas no Senhor.',
    'Escrevi-te confiado na tua obediência, sabendo que ainda farás mais do que digo.',
    "E juntamente prepara-me também pousada, porque espero que pelas vossas orações vos hei de ser concedido.",
    'Saúdam-te Epafras, meu companheiro de prisão por Cristo Jesus,',
    'Marcos, Aristarco, Demas e Lucas, meus cooperadores.',
    'A graça de nosso Senhor Jesus Cristo seja com o vosso espírito. Amém.'
]

const filemom1_naa = [
    'Paulo, prisioneiro de Cristo Jesus, e o irmão Timóteo, ao amado Filemom, que é também nosso colaborador,',
    'à igreja que se reúne em sua casa, à irmã Áfia e a Arquipo, nosso companheiro de lutas.',
    'Que a graça e a paz de Deus, nosso Pai, e do Senhor Jesus Cristo estejam com vocês.',
    'Dou graças ao meu Deus, lembrando sempre de você nas minhas orações,',
    'porque tenho ouvido falar da fé que você tem no Senhor Jesus e do seu amor por todos os santos.',
    'Oro para que a comunhão da sua fé se torne eficaz no pleno conhecimento de todo o bem que há em nós, para com Cristo.',
    'Pois, irmão, o seu amor me trouxe grande alegria e consolo, visto que o coração dos santos tem sido reanimado por você.',
    'Pois bem, ainda que eu sinta plena liberdade em Cristo para ordenar a você o que convém ser feito,',
    'prefiro, no entanto, pedir em nome do amor, sendo o que sou, Paulo, o velho, e agora também prisioneiro de Cristo Jesus.',
    'Faço um pedido em favor de meu filho Onésimo, que gerei entre algemas.',
    'Antes, ele era inútil para você; atualmente, porém, é útil, para você e para mim.',
    'Eu o estou mandando de volta a você — ele, quero dizer, o meu próprio coração.',
    'Eu queria conservá-lo comigo, para que ele me servisse em seu lugar nas algemas que carrego por causa do evangelho.',
    'Mas não quis fazer nada sem o seu consentimento, para que a sua bondade não venha a ser como que uma obrigação, mas algo que é feito de livre vontade.',
    'Talvez ele tenha sido afastado de você temporariamente, a fim de que você o receba para sempre,',
    'não como escravo, mas, muito mais do que escravo, como irmão caríssimo, especialmente de mim e, com maior razão, de você, quer como ser humano, quer como irmão no Senhor.',
    'Portanto, se você me considera companheiro, receba-o como receberia a mim.',
    "E, se ele causou algum dano a você ou lhe deve alguma coisa, ponha tudo na minha conta.",
    "Eu, Paulo, de próprio punho, escrevo isto: Eu pagarei. É claro que não preciso dizer que você me deve a própria vida.",
    'Sim, irmão, que eu receba de você, no Senhor, este benefício. Reanime o meu coração em Cristo.',
    'Certo, como estou, da sua obediência, eu escrevo a você, sabendo que fará mais do que estou pedindo.',
    'E, ao mesmo tempo, prepare-me também pousada, pois espero que, por meio das orações de vocês, eu lhes seja restituído.',
    'Epafras, prisioneiro comigo, em Cristo Jesus,',
    'Marcos, Aristarco, Demas e Lucas, meus colaboradores, mandam saudações a você.',
    'A graça do Senhor Jesus Cristo esteja com o espírito de todos vocês.'
]

const hebreus1 = [
    'Havendo Deus antigamente falado muitas vezes, e de muitas maneiras, aos pais, pelos profetas, a nós falou-nos nestes últimos dias pelo Filho,',
    'A quem constituiu herdeiro de tudo, por quem fez também o mundo.',
    'O qual, sendo o resplendor da sua glória, e a expressa imagem da sua pessoa, e sustentando todas as coisas pela palavra do seu poder, havendo feito por si mesmo a purificação dos nossos pecados, assentou-se à destra da majestade nas alturas;',
    'Feito tanto mais excelente do que os anjos, quanto herdou mais excelente nome do que eles.',
    'Porque, a qual dos anjos disse jamais: Tu és meu Filho, Hoje te gerei? E outra vez: Eu lhe serei por Pai, E ele me será por Filho?',
    'E outra vez, quando introduz no mundo o primogênito, diz:E todos os anjos de Deus o adorem.',
    'E, quanto aos anjos, diz: Faz dos seus anjos espíritos, E de seus ministros labareda de fogo.',
    'Mas, do Filho, diz: Ó Deus, o teu trono subsiste pelos séculos dos séculos; Cetro de eqüidade é o cetro do teu reino.',
    'Amaste a justiça e odiaste a iniqüidade; por isso Deus, o teu Deus, te ungiuCom óleo de alegria mais do que a teus companheiros.',
    'E: Tu, Senhor, no princípio fundaste a terra, E os céus são obra de tuas mãos.',
    'Eles perecerão, mas tu permanecerás; E todos eles, como roupa, envelhecerão,',
    'E como um manto os enrolarás, e serão mudados. Mas tu és o mesmo, E os teus anos não acabarão.',
    'E a qual dos anjos disse jamais: Assenta-te à minha destra, Até que ponha a teus inimigos por escabelo de teus pés?',
    'Não são porventura todos eles espíritos ministradores, enviados para servir a favor daqueles que hão de herdar a salvação?'
]

const hebreus2 = [
    'Portanto, convém-nos atentar com mais diligência para as coisas que já temos ouvido, para que em tempo algum nos desviemos delas.',
    'Porque, se a palavra falada pelos anjos permaneceu firme, e toda a transgressão e desobediência recebeu a justa retribuição,',
    'Como escaparemos nós, se não atentarmos para uma tão grande salvação, a qual, começando a ser anunciada pelo Senhor, foi-nos depois confirmada pelos que a ouviram;',
    'Testificando também Deus com eles, por sinais, e milagres, e várias maravilhas e dons do Espírito Santo, distribuídos por sua vontade?',
    'Porque não foi aos anjos que sujeitou o mundo futuro, de que falamos.',
    'Mas em certo lugar testificou alguém, dizendo:Que é o homem, para que dele te lembres?Ou o filho do homem, para que o visites?',
    'Tu o fizeste um pouco menor do que os anjos,De glória e de honra o coroaste,E o constituíste sobre as obras de tuas mãos;',
    'Todas as coisas lhe sujeitaste debaixo dos pés.Ora, visto que lhe sujeitou todas as coisas, nada deixou que lhe não esteja sujeito. Mas agora ainda não vemos que todas as coisas lhe estejam sujeitas.',
    'Vemos, porém, coroado de glória e de honra aquele Jesus que fora feito um pouco menor do que os anjos, por causa da paixão da morte, para que, pela graça de Deus, provasse a morte por todos.',
    'Porque convinha que aquele, para quem são todas as coisas, e mediante quem tudo existe, trazendo muitos filhos à glória, consagrasse pelas aflições o príncipe da salvação deles.',
    'Porque, assim o que santifica, como os que são santificados, são todos de um; por cuja causa não se envergonha de lhes chamar irmãos,',
    'Dizendo:Anunciarei o teu nome a meus irmãos,Cantar-te-ei louvores no meio da congregação.',
    'E outra vez: Porei nele a minha confiança. E outra vez: Eis-me aqui a mim, e aos filhos que Deus me deu.',
    'E, visto como os filhos participam da carne e do sangue, também ele participou das mesmas coisas, para que pela morte aniquilasse o que tinha o império da morte, isto é, o diabo;',
    'E livrasse todos os que, com medo da morte, estavam por toda a vida sujeitos à servidão.',
    'Porque, na verdade, ele não tomou os anjos, mas tomou a descendência de Abraão.',
    'Por isso convinha que em tudo fosse semelhante aos irmãos, para ser misericordioso e fiel sumo sacerdote naquilo que é de Deus, para expiar os pecados do povo.',
    'Porque naquilo que ele mesmo, sendo tentado, padeceu, pode socorrer aos que são tentados.'
]

const hebreus3 = [
    'Por isso, irmãos santos, participantes da vocação celestial, considerai a Jesus Cristo, apóstolo e sumo sacerdote da nossa confissão,',
    'Sendo fiel ao que o constituiu, como também o foi Moisés em toda a sua casa.',
    'Porque ele é tido por digno de tanto maior glória do que Moisés, quanto maior honra do que a casa tem aquele que a edificou.',
    'Porque toda a casa é edificada por alguém, mas o que edificou todas as coisas é Deus.',
    'E, na verdade, Moisés foi fiel em toda a sua casa, como servo, para testemunho das coisas que se haviam de anunciar;',
    'Mas Cristo, como Filho, sobre a sua própria casa; a qual casa somos nós, se tão somente conservarmos firme a confiança e a glória da esperança até ao fim.',
    'Portanto, como diz o Espírito Santo: Se ouvirdes hoje a sua voz,',
    'Não endureçais os vossos corações,Como na provocação, no dia da tentação no deserto.',
    'Onde vossos pais me tentaram, me provaram,E viram por quarenta anos as minhas obras.',
    'Por isso me indignei contra esta geração, E disse: Estes sempre erram em seu coração, E não conheceram os meus caminhos.',
    'Assim jurei na minha ira Que não entrarão no meu repouso.',
    'Vede, irmãos, que nunca haja em qualquer de vós um coração mau e infiel, para se apartar do Deus vivo.',
    'Antes, exortai-vos uns aos outros todos os dias, durante o tempo que se chama Hoje, para que nenhum de vós se endureça pelo engano do pecado;',
    'Porque nos tornamos participantes de Cristo, se retivermos firmemente o princípio da nossa confiança até ao fim.',
    'Enquanto se diz: Hoje, se ouvirdes a sua voz, Não endureçais os vossos corações, como na provocação.',
    'Porque, havendo-a alguns ouvido, o provocaram; mas não todos os que saíram do Egito por meio de Moisés.',
    'Mas com quem se indignou por quarenta anos? Não foi porventura com os que pecaram, cujos corpos caíram no deserto?',
    'E a quem jurou que não entrariam no seu repouso, senão aos que foram desobedientes?',
    'E vemos que não puderam entrar por causa da sua incredulidade.'
]

const hebreus4 = [
    'Temamos, pois, que, porventura, deixada a promessa de entrar no seu repouso, pareça que algum de vós fica para trás.',
    'Porque também a nós foram pregadas as boas novas, como a eles, mas a palavra da pregação nada lhes aproveitou, porquanto não estava misturada com a fé naqueles que a ouviram.',
    'Porque nós, os que temos crido, entramos no repouso, tal como disse:Assim jurei na minha ira Que não entrarão no meu repouso; embora as suas obras estivessem acabadas desde a fundação do mundo.',
    'Porque em certo lugar disse assim do dia sétimo: E repousou Deus de todas as suas obras no sétimo dia.',
    'E outra vez neste lugar:Não entrarão no meu repouso.',
    'Visto, pois, que resta que alguns entrem nele, e que aqueles a quem primeiro foram pregadas as boas novas não entraram por causa da desobediência,',
    'Determina outra vez um certo dia, Hoje, dizendo por Davi, muito tempo depois, como está dito: Hoje, se ouvirdes a sua voz, Não endureçais os vossos corações.',
    'Porque, se Josué lhes houvesse dado repouso, não falaria depois disso de outro dia.',
    'Portanto, resta ainda um repouso para o povo de Deus.',
    'Porque aquele que entrou no seu repouso, ele próprio repousou de suas obras, como Deus das suas.',
    'Procuremos, pois, entrar naquele repouso, para que ninguém caia no mesmo exemplo de desobediência.',
    'Porque a palavra de Deus é viva e eficaz, e mais penetrante do que espada alguma de dois gumes, e penetra até à divisão da alma e do espírito, e das juntas e medulas, e é apta para discernir os pensamentos e intenções do coração.',
    'E não há criatura alguma encoberta diante dele; antes todas as coisas estão nuas e patentes aos olhos daquele com quem temos de tratar.',
    'Visto que temos um grande sumo sacerdote, Jesus, Filho de Deus, que penetrou nos céus, retenhamos firmemente a nossa confissão.',
    'Porque não temos um sumo sacerdote que não possa compadecer-se das nossas fraquezas; porém, um que, como nós, em tudo foi tentado, mas sem pecado.',
    'Cheguemos, pois, com confiança ao trono da graça, para que possamos alcançar misericórdia e achar graça, a fim de sermos ajudados em tempo oportuno.',
]

const hebreus5 = [
    'Porque todo o sumo sacerdote, tomado dentre os homens, é constituído a favor dos homens nas coisas concernentes a Deus, para que ofereça dons e sacrifícios pelos pecados;',
    'E possa compadecer-se ternamente dos ignorantes e errados; pois também ele mesmo está rodeado de fraqueza.',
    'E por esta causa deve ele, tanto pelo povo, como também por si mesmo, fazer oferta pelos pecados.',
    'E ninguém toma para si esta honra, senão o que é chamado por Deus, como Arão.',
    'Assim também Cristo não se glorificou a si mesmo, para se fazer sumo sacerdote, mas aquele que lhe disse: Tu és meu Filho,Hoje te gerei.',
    'Como também diz, noutro lugar: Tu és sacerdote eternamente, Segundo a ordem de Melquisedeque.',
    'O qual, nos dias da sua carne, oferecendo, com grande clamor e lágrimas, orações e súplicas ao que o podia livrar da morte, foi ouvido quanto ao que temia.',
    'Ainda que era Filho, aprendeu a obediência, por aquilo que padeceu.',
    'E, sendo ele consumado, veio a ser a causa da eterna salvação para todos os que lhe obedecem;',
    'Chamado por Deus sumo sacerdote, segundo a ordem de Melquisedeque.',
    'Do qual muito temos que dizer, de difícil interpretação; porquanto vos fizestes negligentes para ouvir.',
    'Porque, devendo já ser mestres pelo tempo, ainda necessitais de que se vos torne a ensinar quais sejam os primeiros rudimentos das palavras de Deus; e vos haveis feito tais que necessitais de leite, e não de sólido mantimento.',
    'Porque qualquer que ainda se alimenta de leite não está experimentado na palavra da justiça, porque é menino.',
    'Mas o mantimento sólido é para os perfeitos, os quais, em razão do costume, têm os sentidos exercitados para discernir tanto o bem como o mal.'
]

const hebreus6 = [
    'Por isso, deixando os rudimentos da doutrina de Cristo, prossigamos até à perfeição, não lançando de novo o fundamento do arrependimento de obras mortas e de fé em Deus,',
'E da doutrina dos batismos, e da imposição das mãos, e da ressurreição dos mortos, e do juízo eterno.',
'E isto faremos, se Deus o permitir.',
'Porque é impossível que os que já uma vez foram iluminados, e provaram o dom celestial, e se fizeram participantes do Espírito Santo,',
'E provaram a boa palavra de Deus, e as virtudes do século futuro,',
'E recaíram, sejam outra vez renovados para arrependimento; pois assim, quanto a eles, de novo crucificam o Filho de Deus, e o expõem ao vitupério.',
'Porque a terra que embebe a chuva, que muitas vezes cai sobre ela, e produz erva proveitosa para aqueles por quem é lavrada, recebe a bênção de Deus;',
'Mas a que produz espinhos e abrolhos, é reprovada, e perto está da maldição; o seu fim é ser queimada.',
'Mas de vós, ó amados, esperamos coisas melhores, e coisas que acompanham a salvação, ainda que assim falamos.',
'Porque Deus não é injusto para se esquecer da vossa obra, e do trabalho do amor que para com o seu nome mostrastes, enquanto servistes aos santos; e ainda servis.',
'Mas desejamos que cada um de vós mostre o mesmo cuidado até ao fim, para completa certeza da esperança;',
'Para que vos não façais negligentes, mas sejais imitadores dos que pela fé e paciência herdam as promessas.',
"Porque, quando Deus fez a promessa a Abraão, como não tinha outro maior por quem jurasse, jurou por si mesmo,",
'Dizendo: Certamente, abençoando te abençoarei, e multiplicando te multiplicarei.',
'E assim, esperando com paciência, alcançou a promessa.',
'Porque os homens certamente juram por alguém superior a eles, e o juramento para confirmação é, para eles, o fim de toda a contenda.',
"Por isso, querendo Deus mostrar mais abundantemente a imutabilidade do seu conselho aos herdeiros da promessa, se interpôs com juramento;",
'Para que por duas coisas imutáveis, nas quais é impossível que Deus minta, tenhamos a firme consolação, nós, os que pomos o nosso refúgio em reter a esperança proposta;',
'A qual temos como âncora da alma, segura e firme, e que penetra até ao interior do véu,',
'Onde Jesus, nosso precursor, entrou por nós, feito eternamente sumo sacerdote, segundo a ordem de Melquisedeque.',
]

const hebreus7 = [
    'Porque este Melquisedeque, que era rei de Salém, sacerdote do Deus Altíssimo, e que saiu ao encontro de Abraão quando ele regressava da matança dos reis, e o abençoou;',
    "A quem também Abraão deu o dízimo de tudo, e primeiramente é, por interpretação, rei de justiça, e depois também rei de Salém, que é rei de paz;",
    'Sem pai, sem mãe, sem genealogia, não tendo princípio de dias nem fim de vida, mas sendo feito semelhante ao Filho de Deus, permanece sacerdote para sempre.',
    "Considerai, pois, quão grande era este, a quem até o patriarca Abraão deu os dízimos dos despojos.",
    'E os que dentre os filhos de Levi recebem o sacerdócio têm ordem, segundo a lei, de tomar o dízimo do povo, isto é, de seus irmãos, ainda que tenham saído dos lombos de Abraão.',
    'Mas aquele, cuja genealogia não é contada entre eles, tomou dízimos de Abraão, e abençoou o que tinha as promessas.',
    'Ora, sem contradição alguma, o menor é abençoado pelo maior.',
    'E aqui certamente tomam dízimos homens que morrem; ali, porém, aquele de quem se testifica que vive.',
    'E, por assim dizer, por meio de Abraão, até Levi, que recebe dízimos, pagou dízimos.',
    'Porque ainda ele estava nos lombos de seu pai quando Melquisedeque lhe saiu ao encontro.',
    'De sorte que, se a perfeição fosse pelo sacerdócio levítico (porque sob ele o povo recebeu a lei), que necessidade havia logo de que outro sacerdote se levantasse, segundo a ordem de Melquisedeque, e não fosse chamado segundo a ordem de Arão?',
    "Porque, mudando-se o sacerdócio, necessariamente se faz também mudança da lei.",
    'Porque aquele de quem estas coisas se dizem pertence a outra tribo, da qual ninguém serviu ao altar,',
    'Visto ser manifesto que nosso Senhor procedeu de Judá, e concernente a essa tribo nunca Moisés falou de sacerdócio.',
    'E muito mais manifesto é ainda, se à semelhança de Melquisedeque se levantar outro sacerdote,',
    'Que não foi feito segundo a lei do mandamento carnal, mas segundo a virtude da vida incorruptível.',
    'Porque ele assim testifica: Tu és sacerdote eternamente, Segundo a ordem de Melquisedeque.',
    'Porque o precedente mandamento é abrogado por causa da sua fraqueza e inutilidade',
    '(Pois a lei nenhuma coisa aperfeiçoou) e desta sorte é introduzida uma melhor esperança, pela qual chegamos a Deus.',
    'E visto como não é sem prestar juramento (porque certamente aqueles, sem juramento, foram feitos sacerdotes,',
    "Mas este com juramento por aquele que lhe disse: Jurou o Senhor, e não se arrependerá; Tu és sacerdote eternamente, Segundo a ordem de Melquisedeque,",
    'De tanto melhor aliança Jesus foi feito fiador.',
    'E, na verdade, aqueles foram feitos sacerdotes em grande número, porque pela morte foram impedidos de permanecer,',
    'Mas este, porque permanece eternamente, tem um sacerdócio perpétuo.',
    'Portanto, pode também salvar perfeitamente os que por ele se chegam a Deus, vivendo sempre para interceder por eles.',
    'Porque nos convinha tal sumo sacerdote, santo, inocente, imaculado, separado dos pecadores, e feito mais sublime do que os céus;',
    'Que não necessitasse, como os sumos sacerdotes, de oferecer cada dia sacrifícios, primeiramente por seus próprios pecados, e depois pelos do povo; porque isto fez ele, uma vez, oferecendo-se a si mesmo.',
    'Porque a lei constitui sumos sacerdotes a homens fracos, mas a palavra do juramento, que veio depois da lei, constitui ao Filho, perfeito para sempre.'
]

const hebreus8 = [
    'Ora, a suma do que temos dito é que temos um sumo sacerdote tal, que está assentado nos céus à destra do trono da majestade,',
    'Ministro do santuário, e do verdadeiro tabernáculo, o qual o Senhor fundou, e não o homem.',
    'Porque todo o sumo sacerdote é constituído para oferecer dons e sacrifícios; por isso era necessário que este também tivesse alguma coisa que oferecer.',
    'Ora, se ele estivesse na terra, nem tão pouco sacerdote seria, havendo ainda sacerdotes que oferecem dons segundo a lei,',
    'Os quais servem de exemplo e sombra das coisas celestiais, como Moisés divinamente foi avisado, estando já para acabar o tabernáculo; porque foi dito: Olha, faze tudo conforme o modelo que no monte se te mostrou.',
    'Mas agora alcançou ele ministério tanto mais excelente, quanto é mediador de uma melhor aliança que está confirmada em melhores promessas.',
    'Porque, se aquela primeira fora irrepreensível, nunca se teria buscado lugar para a segunda.',
    'Porque, repreendendo-os, lhes diz: Eis que virão dias, diz o Senhor, Em que com a casa de Israel e com a casa de Judá estabelecerei uma nova aliança,',
    'Não segundo a aliança que fiz com seus pais No dia em que os tomei pela mão, para os tirar da terra do Egito;Como não permaneceram naquela minha aliança,Eu para eles não atentei, diz o Senhor.',
    'Porque esta é a aliança que depois daqueles diasFarei com a casa de Israel, diz o Senhor; Porei as minhas leis no seu entendimento, E em seu coração as escreverei; E eu lhes serei por Deus, E eles me serão por povo;',
    'E não ensinará cada um a seu próximo, Nem cada um ao seu irmão, dizendo: Conhece o Senhor; Porque todos me conhecerão, Desde o menor deles até ao maior.',
    'Porque serei misericordioso para com suas iniqüidades, E de seus pecados e de suas prevaricações não me lembrarei mais.',
    'Dizendo Nova aliança, envelheceu a primeira. Ora, o que foi tornado velho, e se envelhece, perto está de acabar.'
]

const hebreus9 = [
    'Ora, também a primeira tinha ordenanças de culto divino, e um santuário terrestre.',
    'Porque um tabernáculo estava preparado, o primeiro, em que havia o candeeiro, e a mesa, e os pães da proposição; ao que se chama o santuário.',
    'Mas depois do segundo véu estava o tabernáculo que se chama o santo dos santos,',
    'Que tinha o incensário de ouro, e a arca da aliança, coberta de ouro toda em redor; em que estava um vaso de ouro, que continha o maná, e a vara de Arão, que tinha florescido, e as tábuas da aliança;',
    'E sobre a arca os querubins da glória, que faziam sombra no propiciatório; das quais coisas não falaremos agora particularmente.',
    'Ora, estando estas coisas assim preparadas, a todo o tempo entravam os sacerdotes no primeiro tabernáculo, cumprindo os serviços;',
    'Mas, no segundo, só o sumo sacerdote, uma vez no ano, não sem sangue, que oferecia por si mesmo e pelas culpas do povo;',
    'Dando nisto a entender o Espírito Santo que ainda o caminho do santuário não estava descoberto enquanto se conservava em pé o primeiro tabernáculo,',
    'Que é uma alegoria para o tempo presente, em que se oferecem dons e sacrifícios que, quanto à consciência, não podem aperfeiçoar aquele que faz o serviço;',
    'Consistindo somente em comidas, e bebidas, e várias abluções e justificações da carne, impostas até ao tempo da correção.',
    'Mas, vindo Cristo, o sumo sacerdote dos bens futuros, por um maior e mais perfeito tabernáculo, não feito por mãos, isto é, não desta criação,',
    'Nem por sangue de bodes e bezerros, mas por seu próprio sangue, entrou uma vez no santuário, havendo efetuado uma eterna redenção.',
    'Porque, se o sangue dos touros e bodes, e a cinza de uma novilha esparzida sobre os imundos, os santifica, quanto à purificação da carne,',
    'Quanto mais o sangue de Cristo, que pelo Espírito eterno se ofereceu a si mesmo imaculado a Deus, purificará as vossas consciências das obras mortas, para servirdes ao Deus vivo?',
    'E por isso é Mediador de um novo testamento, para que, intervindo a morte para remissão das transgressões que havia debaixo do primeiro testamento, os chamados recebam a promessa da herança eterna.',
    'Porque onde há testamento, é necessário que intervenha a morte do testador.',
    'Porque um testamento tem força onde houve morte; ou terá ele algum valor enquanto o testador vive?',
    'Por isso também o primeiro não foi consagrado sem sangue;',
    'Porque, havendo Moisés anunciado a todo o povo todos os mandamentos segundo a lei, tomou o sangue dos bezerros e dos bodes, com água, lã purpúrea e hissopo, e aspergiu tanto o mesmo livro como todo o povo,',
    "Dizendo: Este é o sangue do testamento que Deus vos tem mandado.",
    'E semelhantemente aspergiu com sangue o tabernáculo e todos os vasos do ministério.',
    'E quase todas as coisas, segundo a lei, se purificam com sangue; e sem derramamento de sangue não há remissão.',
    'De sorte que era bem necessário que as figuras das coisas que estão no céu assim se purificassem; mas as próprias coisas celestiais com sacrifícios melhores do que estes.',
    'Porque Cristo não entrou num santuário feito por mãos, figura do verdadeiro, porém no mesmo céu, para agora comparecer por nós perante a face de Deus;',
    'Nem também para a si mesmo se oferecer muitas vezes, como o sumo sacerdote cada ano entra no santuário com sangue alheio;',
    'De outra maneira, necessário lhe fora padecer muitas vezes desde a fundação do mundo. Mas agora na consumação dos séculos uma vez se manifestou, para aniquilar o pecado pelo sacrifício de si mesmo.',
    'E, como aos homens está ordenado morrerem uma vez, vindo depois disso o juízo,',
    'Assim também Cristo, oferecendo-se uma vez para tirar os pecados de muitos, aparecerá segunda vez, sem pecado, aos que o esperam para salvação.'
]

const hebreus10 = [
    'Porque tendo a lei a sombra dos bens futuros, e não a imagem exata das coisas, nunca, pelos mesmos sacrifícios que continuamente se oferecem cada ano, pode aperfeiçoar os que a eles se chegam.',
    'Doutra maneira, teriam deixado de se oferecer, porque, purificados uma vez os ministrantes, nunca mais teriam consciência de pecado.',
    'Nesses sacrifícios, porém, cada ano se faz comemoração dos pecados,',
    'Porque é impossível que o sangue dos touros e dos bodes tire os pecados.',
    'Por isso, entrando no mundo, diz: Sacrifício e oferta não quiseste, Mas corpo me preparaste;',
    'Holocaustos e oblações pelo pecado não te agradaram.',
    'Então disse: Eis aqui venho(No princípio do livro está escrito de mim),Para fazer, ó Deus, a tua vontade.',
    'Como acima diz: Sacrifício e oferta, e holocaustos e oblações pelo pecado não quiseste, nem te agradaram (os quais se oferecem segundo a lei).',
    "Então disse: Eis aqui venho, para fazer, ó Deus, a tua vontade. Tira o primeiro, para estabelecer o segundo.",
    "Na qual vontade temos sido santificados pela oblação do corpo de Jesus Cristo, feita uma vez.",
    'E assim todo o sacerdote aparece cada dia, ministrando e oferecendo muitas vezes os mesmos sacrifícios, que nunca podem tirar os pecados;',
    "Mas este, havendo oferecido para sempre um único sacrifício pelos pecados, está assentado à destra de Deus,",
    'Daqui em diante esperando até que os seus inimigos sejam postos por escabelo de seus pés.',
    'Porque com uma só oblação aperfeiçoou para sempre os que são santificados.',
    'E também o Espírito Santo no-lo testifica, porque depois de haver dito:',
    'Esta é a aliança que farei com eles Depois daqueles dias, diz o Senhor:Porei as minhas leis em seus corações,E as escreverei em seus entendimentos; acrescenta:',
    'E jamais me lembrarei de seus pecados e de suas iniqüidades.',
    'Ora, onde há remissão destes, não há mais oblação pelo pecado.',
    'Tendo, pois, irmãos, ousadia para entrar no santuário, pelo sangue de Jesus,',
    'Pelo novo e vivo caminho que ele nos consagrou, pelo véu, isto é, pela sua carne,',
    'E tendo um grande sacerdote sobre a casa de Deus,',
    'Cheguemo-nos com verdadeiro coração, em inteira certeza de fé, tendo os corações purificados da má consciência, e o corpo lavado com água limpa,',
    'Retenhamos firmes a confissão da nossa esperança; porque fiel é o que prometeu.',
    'E consideremo-nos uns aos outros, para nos estimularmos ao amor e às boas obras,',
    'Não deixando a nossa congregação, como é costume de alguns, antes admoestando-nos uns aos outros; e tanto mais, quanto vedes que se vai aproximando aquele dia.',
    "Porque, se pecarmos voluntariamente, depois de termos recebido o conhecimento da verdade, já não resta mais sacrifício pelos pecados,",
    'Mas uma certa expectação horrível de juízo, e ardor de fogo, que há de devorar os adversários.',
    'Quebrantando alguém a lei de Moisés, morre sem misericórdia, só pela palavra de duas ou três testemunhas.',
    'De quanto maior castigo cuidais vós será julgado merecedor aquele que pisar o Filho de Deus, e tiver por profano o sangue da aliança com que foi santificado, e fizer agravo ao Espírito da graça?',
    'Porque bem conhecemos aquele que disse: Minha é a vingança, eu darei a recompensa, diz o Senhor. E outra vez: O Senhor julgará o seu povo.',
    'Horrenda coisa é cair nas mãos do Deus vivo.',
    'Lembrai-vos, porém, dos dias passados, em que, depois de serdes iluminados, suportastes grande combate de aflições.',
    'Em parte fostes feitos espetáculo com vitupérios e tribulações, e em parte fostes participantes com os que assim foram tratados.',
    'Porque também vos compadecestes das minhas prisões, e com alegria permitistes o roubo dos vossos bens, sabendo que em vós mesmos tendes nos céus uma possessão melhor e permanente.',
    'Não rejeiteis, pois, a vossa confiança, que tem grande e avultado galardão.',
    'Porque necessitais de paciência, para que, depois de haverdes feito a vontade de Deus, possais alcançar a promessa.',
    'Porque ainda um pouquinho de tempo, E o que há de vir virá, e não tardará.',
    'Mas o justo viverá pela fé; E, se ele recuar, a minha alma não tem prazer nele.',
    'Nós, porém, não somos daqueles que se retiram para a perdição, mas daqueles que crêem para a conservação da alma.'
]

const hebreus11 = [
    'Ora, a fé é o firme fundamento das coisas que se esperam, e a prova das coisas que se não vêem.',
    'Porque por ela os antigos alcançaram testemunho.',
    'Pela fé entendemos que os mundos pela palavra de Deus foram criados; de maneira que aquilo que se vê não foi feito do que é aparente.',
    'Pela fé Abel ofereceu a Deus maior sacrifício do que Caim, pelo qual alcançou testemunho de que era justo, dando Deus testemunho dos seus dons, e por ela, depois de morto, ainda fala.',
    'Pela fé Enoque foi trasladado para não ver a morte, e não foi achado, porque Deus o trasladara; visto como antes da sua trasladação alcançou testemunho de que agradara a Deus.',
    "Ora, sem fé é impossível agradar-lhe; porque é necessário que aquele que se aproxima de Deus creia que ele existe, e que é galardoador dos que o buscam.",
    'Pela fé Noé, divinamente avisado das coisas que ainda não se viam, temeu e, para salvação da sua família, preparou a arca, pela qual condenou o mundo, e foi feito herdeiro da justiça que é segundo a fé.',
    'Pela fé Abraão, sendo chamado, obedeceu, indo para um lugar que havia de receber por herança; e saiu, sem saber para onde ia.',
    'Pela fé habitou na terra da promessa, como em terra alheia, morando em cabanas com Isaque e Jacó, herdeiros com ele da mesma promessa.',
    "Porque esperava a cidade que tem fundamentos, da qual o artífice e construtor é Deus.",
    'Pela fé também a mesma Sara recebeu a virtude de conceber, e deu à luz já fora da idade; porquanto teve por fiel aquele que lho tinha prometido.',
    'Por isso também de um, e esse já amortecido, descenderam tantos, em multidão, como as estrelas do céu, e como a areia inumerável que está na praia do mar.',
    'Todos estes morreram na fé, sem terem recebido as promessas; mas vendo-as de longe, e crendo-as e abraçando-as, confessaram que eram estrangeiros e peregrinos na terra.',
    'Porque, os que isto dizem, claramente mostram que buscam uma pátria.',
    'E se, na verdade, se lembrassem daquela de onde haviam saído, teriam oportunidade de tornar.',
    "Mas agora desejam uma melhor, isto é, a celestial. Por isso também Deus não se envergonha deles, de se chamar seu Deus, porque já lhes preparou uma cidade.",
    'Pela fé ofereceu Abraão a Isaque, quando foi provado; sim, aquele que recebera as promessas ofereceu o seu unigênito.',
    'Sendo-lhe dito: Em Isaque será chamada a tua descendência, considerou que Deus era poderoso para até dentre os mortos o ressuscitar;',
    'E daí também em figura ele o recobrou.',
    'Pela fé Isaque abençoou Jacó e Esaú, no tocante às coisas futuras.',
    'Pela fé Jacó, próximo da morte, abençoou cada um dos filhos de José, e adorou encostado à ponta do seu bordão.',
    "Pela fé José, próximo da morte, fez menção da saída dos filhos de Israel, e deu ordem acerca de seus ossos.",
    "Pela fé Moisés, já nascido, foi escondido três meses por seus pais, porque viram que era um menino formoso; e não temeram o mandamento do rei.",
    'Pela fé Moisés, sendo já grande, recusou ser chamado filho da filha de Faraó,',
    'Escolhendo antes ser maltratado com o povo de Deus, do que por um pouco de tempo ter o gozo do pecado;',
    'Tendo por maiores riquezas o vitupério de Cristo do que os tesouros do Egito; porque tinha em vista a recompensa.',
    'Pela fé deixou o Egito, não temendo a ira do rei; porque ficou firme, como vendo o invisível.',
    'Pela fé celebrou a páscoa e a aspersão do sangue, para que o destruidor dos primogênitos lhes não tocasse.',
    'Pela fé passaram o Mar Vermelho, como por terra seca; o que intentando os egípcios, se afogaram.',
    'Pela fé caíram os muros de Jericó, sendo rodeados durante sete dias.',
    'Pela fé Raabe, a meretriz, não pereceu com os incrédulos, acolhendo em paz os espias.',
    "E que mais direi? Faltar-me-ia o tempo contando de Gideão, e de Baraque, e de Sansão, e de Jefté, e de Davi, e de Samuel e dos profetas,",
    'Os quais pela fé venceram reinos, praticaram a justiça, alcançaram promessas, fecharam as bocas dos leões,',
    'Apagaram a força do fogo, escaparam do fio da espada, da fraqueza tiraram forças, na batalha se esforçaram, puseram em fuga os exércitos dos estranhos.',
    'As mulheres receberam pela ressurreição os seus mortos; uns foram torturados, não aceitando o seu livramento, para alcançarem uma melhor ressurreição;',
    'E outros experimentaram escárnios e açoites, e até cadeias e prisões.',
    "Foram apedrejados, serrados, tentados, mortos ao fio da espada; andaram vestidos de peles de ovelhas e de cabras, desamparados, aflitos e maltratados",
    '(Dos quais o mundo não era digno), errantes pelos desertos, e montes, e pelas covas e cavernas da terra.',
    'E todos estes, tendo tido testemunho pela fé, não alcançaram a promessa,',
    "Provendo Deus alguma coisa melhor a nosso respeito, para que eles sem nós não fossem aperfeiçoados."
]

const hebreus12 = [
    'Portanto nós também, pois que estamos rodeados de uma tão grande nuvem de testemunhas, deixemos todo o embaraço, e o pecado que tão de perto nos rodeia, e corramos com paciência a carreira que nos está proposta,',
    'Olhando para Jesus, autor e consumador da fé, o qual, pelo gozo que lhe estava proposto, suportou a cruz, desprezando a afronta, e assentou-se à destra do trono de Deus.',
    'Considerai, pois, aquele que suportou tais contradições dos pecadores contra si mesmo, para que não enfraqueçais, desfalecendo em vossos ânimos.',
    'Ainda não resististes até ao sangue, combatendo contra o pecado.',
    'E já vos esquecestes da exortação que argumenta convosco como filhos: Filho meu, não desprezes a correção do Senhor, E não desmaies quando por ele fores repreendido;',
    'Porque o Senhor corrige o que ama,E açoita a qualquer que recebe por filho.',
    'Se suportais a correção, Deus vos trata como filhos; porque, que filho há a quem o pai não corrija?',
    'Mas, se estais sem disciplina, da qual todos são feitos participantes, sois então bastardos, e não filhos.',
    'Além do que, tivemos nossos pais segundo a carne, para nos corrigirem, e nós os reverenciamos; não nos sujeitaremos muito mais ao Pai dos espíritos, para vivermos?',
    'Porque aqueles, na verdade, por um pouco de tempo, nos corrigiam como bem lhes parecia; mas este, para nosso proveito, para sermos participantes da sua santidade.',
    "E, na verdade, toda a correção, ao presente, não parece ser de gozo, senão de tristeza, mas depois produz um fruto pacífico de justiça nos exercitados por ela.",
    'Portanto, tornai a levantar as mãos cansadas, e os joelhos desconjuntados,',
    'E fazei veredas direitas para os vossos pés, para que o que manqueja não se desvie inteiramente, antes seja sarado.',
    'Segui a paz com todos, e a santificação, sem a qual ninguém verá o Senhor;',
    'Tendo cuidado de que ninguém se prive da graça de Deus, e de que nenhuma raiz de amargura, brotando, vos perturbe, e por ela muitos se contaminem.',
    'E ninguém seja devasso, ou profano, como Esaú, que por uma refeição vendeu o seu direito de primogenitura.',
    'Porque bem sabeis que, querendo ele ainda depois herdar a bênção, foi rejeitado, porque não achou lugar de arrependimento, ainda que com lágrimas o buscou.',
    'Porque não chegastes ao monte palpável, aceso em fogo, e à escuridão, e às trevas, e à tempestade,',
    'E ao sonido da trombeta, e à voz das palavras, a qual os que a ouviram pediram que se lhes não falasse mais;',
    'Porque não podiam suportar o que se lhes mandava: Se até um animal tocar o monte será apedrejado ou passado com um dardo.',
    'E tão terrível era a visão, que Moisés disse: Estou todo assombrado, e tremendo.',
    'Mas chegastes ao monte Sião, e à cidade do Deus vivo, à Jerusalém celestial, e aos muitos milhares de anjos;',
    'À universal assembléia e igreja dos primogênitos, que estão inscritos nos céus, e a Deus, o juiz de todos, e aos espíritos dos justos aperfeiçoados;',
    'E a Jesus, o Mediador de uma nova aliança, e ao sangue da aspersão, que fala melhor do que o de Abel.',
    'Vede que não rejeiteis ao que fala; porque, se não escaparam aqueles que rejeitaram o que na terra os advertia, muito menos nós, se nos desviarmos daquele que é dos céus;',
    'A voz do qual moveu então a terra, mas agora anunciou, dizendo: Ainda uma vez comoverei, não só a terra, senão também o céu.',
    'E esta palavra: Ainda uma vez, mostra a mudança das coisas móveis, como coisas feitas, para que as imóveis permaneçam.',
    'Por isso, tendo recebido um reino que não pode ser abalado, retenhamos a graça, pela qual sirvamos a Deus agradavelmente, com reverência e piedade;',
    'Porque o nosso Deus é um fogo consumidor.'
]

const hebreus13 = [
    'Permaneça o amor fraternal.',
    'Não vos esqueçais da hospitalidade, porque por ela alguns, não o sabendo, hospedaram anjos.',
    'Lembrai-vos dos presos, como se estivésseis presos com eles, e dos maltratados, como sendo-o vós mesmos também no corpo.',
    'Venerado seja entre todos o matrimônio e o leito sem mácula; porém, aos que se dão à prostituição, e aos adúlteros, Deus os julgará.',
    'Sejam vossos costumes sem avareza, contentando-vos com o que tendes; porque ele disse: Não te deixarei, nem te desampararei.',
    'E assim com confiança ousemos dizer: O Senhor é o meu ajudador, e não temerei O que me possa fazer o homem.',
    'Lembrai-vos dos vossos pastores, que vos falaram a palavra de Deus, a fé dos quais imitai, atentando para a sua maneira de viver.',
    'Jesus Cristo é o mesmo, ontem, e hoje, e eternamente.',
    'Não vos deixeis levar em redor por doutrinas várias e estranhas, porque bom é que o coração se fortifique com graça, e não com alimentos que de nada aproveitaram aos que a eles se entregaram.',
    'Temos um altar, de que não têm direito de comer os que servem ao tabernáculo.',
    'Porque os corpos dos animais, cujo sangue é, pelo pecado, trazido pelo sumo sacerdote para o santuário, são queimados fora do arraial.',
    'E por isso também Jesus, para santificar o povo pelo seu próprio sangue, padeceu fora da porta.',
    'Saiamos, pois, a ele fora do arraial, levando o seu vitupério.',
    'Porque não temos aqui cidade permanente, mas buscamos a futura.',
    'Portanto, ofereçamos sempre por ele a Deus sacrifício de louvor, isto é, o fruto dos lábios que confessam o seu nome.',
    'E não vos esqueçais da beneficência e comunicação, porque com tais sacrifícios Deus se agrada.',
    'Obedecei a vossos pastores, e sujeitai-vos a eles; porque velam por vossas almas, como aqueles que hão de dar conta delas; para que o façam com alegria e não gemendo, porque isso não vos seria útil.',
    'Orai por nós, porque confiamos que temos boa consciência, como aqueles que em tudo querem portar-se honestamente.',
    'E rogo-vos com instância que assim o façais, para que eu mais depressa vos seja restituído.',
    "Ora, o Deus de paz, que pelo sangue da aliança eterna tornou a trazer dos mortos a nosso Senhor Jesus Cristo, grande pastor das ovelhas,",
    'Vos aperfeiçoe em toda a boa obra, para fazerdes a sua vontade, operando em vós o que perante ele é agradável por Cristo Jesus, ao qual seja glória para todo o sempre. Amém.',
    'Rogo-vos, porém, irmãos, que suporteis a palavra desta exortação; porque abreviadamente vos escrevi.',
    'Sabei que já está solto o irmão Timóteo, com o qual, se ele vier depressa, vos verei.',
    'Saudai a todos os vossos chefes e a todos os santos. Os da Itália vos saúdam.',
    'A graça seja com todos vós. Amém.'
]

const hebreus1_naa = [
    'Antigamente, Deus falou, muitas vezes e de muitas maneiras, aos pais, pelos profetas,',
    'mas, nestes últimos dias, nos falou pelo Filho, a quem constituiu herdeiro de todas as coisas e pelo qual também fez o universo.',
    'O Filho, que é o resplendor da glória de Deus e a expressão exata do seu Ser, sustentando todas as coisas pela sua palavra poderosa, depois de ter feito a purificação dos pecados, assentou-se à direita da Majestade, nas alturas,',
    'tendo-se tornado tão superior aos anjos quanto herdou mais excelente nome do que eles.',
    'Pois a qual dos anjos Deus em algum momento disse: "Você é meu Filho, hoje eu gerei você"? E, outra vez: "Eu lhe serei Pai, e ele me será Filho"?',
    'E, novamente, ao introduzir o Primogênito no mundo, diz: "E todos os anjos de Deus o adorem."',
    'Ainda, quanto aos anjos, diz: "Aquele que a seus anjos faz ventos, e a seus ministros, labareda de fogo."',
    'Mas, a respeito do Filho, diz: "O teu trono, ó Deus, é para todo o sempre; cetro de justiça é o cetro do teu reino.',
    'Amaste a justiça e odiaste a iniquidade; por isso, Deus, o teu Deus, te ungiu com o óleo de alegria como a nenhum dos teus companheiros."',
    'Diz ainda: "No princípio, Senhor, lançaste os fundamentos da terra, e os céus são obra das tuas mãos.',
    'Eles perecerão, mas tu permaneces; todos eles envelhecerão como veste;',
    'como manto tu os enrolarás, e, como roupas, serão igualmente mudados. Tu, porém, és o mesmo, e os teus anos jamais terão fim."',
    'Ora, a qual dos anjos Deus em algum momento disse: "Sente-se à minha direita, até que eu ponha os seus inimigos por estrado dos seus pés"?',
    'Não são todos eles espíritos ministradores, enviados para serviço a favor dos que hão de herdar a salvação?'
]

const hebreus2_naa = [
    'Por esta razão, importa que nos apeguemos, com mais firmeza, às verdades ouvidas, para que delas jamais nos desviemos.',
    'Porque, se a palavra falada por meio de anjos se tornou firme, e toda transgressão ou desobediência recebeu justo castigo,',
    'como escaparemos nós, se não levarmos a sério tão grande salvação? Esta, tendo sido anunciada inicialmente pelo Senhor, depois nos foi confirmada pelos que a ouviram.',
    'Também Deus testemunhou juntamente com eles, por meio de sinais, prodígios, vários milagres e a distribuição do Espírito Santo, segundo a sua vontade.',
    'Pois não foi a anjos que Deus sujeitou o mundo que há de vir, sobre o qual estamos falando.',
    'Pelo contrário, alguém, em certo lugar, deu testemunho, dizendo: "Que é o homem, que dele te lembres? Ou o filho do homem, que o visites?',
    'Fizeste-o, por um pouco, menor do que os anjos e de glória e de honra o coroaste.',
    'Todas as coisas sujeitaste debaixo dos seus pés." Ora, ao lhe sujeitar todas as coisas, nada deixou fora do seu domínio. Neste momento, porém, ainda não vemos todas as coisas a ele sujeitas.',
    'Vemos, porém, aquele que, por um pouco, foi feito menor do que os anjos, Jesus, que, por causa do sofrimento da morte, foi coroado de glória e de honra, para que, pela graça de Deus, provasse a morte por todos.',
    'Porque convinha que Deus, por causa de quem e por meio de quem todas as coisas existem, conduzindo muitos filhos à glória, aperfeiçoasse, por meio de sofrimentos, o Autor da salvação deles.',
    'Pois, tanto o que santifica como os que são santificados, todos vêm de um só. É por isso que Jesus não se envergonha de chamá-los de irmãos,',
    'dizendo: "A meus irmãos declararei o teu nome, no meio da congregação eu te louvarei."',
    'E, outra vez: "Eu porei nele a minha confiança." E, ainda: "Eis aqui estou eu e os filhos que Deus me deu."',
    'Visto, pois, que os filhos têm participação comum de carne e sangue, também Jesus, igualmente, participou dessas coisas, para que, por sua morte, destruísse aquele que tem o poder da morte, a saber, o diabo,',
    'e livrasse todos os que, pelo pavor da morte, estavam sujeitos à escravidão por toda a vida.',
    'Pois ele, evidentemente, não socorre anjos, mas socorre a descendência de Abraão.',
    'Por isso mesmo, era necessário que, em todas as coisas, ele se tornasse semelhante aos irmãos, para ser misericordioso e fiel sumo sacerdote nas coisas referentes a Deus e para fazer propiciação pelos pecados do povo.',
    'Pois, naquilo que ele mesmo sofreu, quando foi tentado, é poderoso para socorrer os que são tentados.'
]

const hebreus3_naa = [
    'Por isso, santos irmãos, vocês que são participantes da vocação celestial, considerem atentamente o Apóstolo e Sumo Sacerdote da nossa confissão, Jesus,',
    'o qual é fiel àquele que o constituiu, como também Moisés foi fiel em toda a casa de Deus.',
    'No entanto, assim como aquele que edifica uma casa tem maior honra do que a casa em si, também Jesus tem sido considerado digno de maior glória do que Moisés.',
    'Pois toda casa é edificada por alguém, mas aquele que edificou todas as coisas é Deus.',
    'E Moisés foi fiel, em toda a casa de Deus, como servo, para testemunho das coisas que haviam de ser anunciadas.',
    'Cristo, porém, como Filho, é fiel em sua casa. Esta casa somos nós, se guardarmos firme a ousadia e a exultação da esperança.',
    'Por isso, como diz o Espírito Santo: "Hoje, se ouvirem a sua voz,',
    'não endureçam o coração como foi na rebelião, no dia da tentação no deserto,',
    "onde os pais de vocês me tentaram, pondo-me à prova, e viram as minhas obras durante quarenta anos.",
    'Por isso, me indignei contra essa geração e disse: ‘O coração deles sempre se afasta de mim; e eles não conheceram os meus caminhos.’',
    'Assim, jurei na minha ira: ‘Não entrarão no meu descanso.’"',
    "Tenham cuidado, irmãos, para que nenhum de vocês tenha um coração mau e descrente, que se afaste do Deus vivo.",
    'Pelo contrário, animem uns aos outros todos os dias, durante o tempo que se chama "hoje", a fim de que nenhum de vocês seja endurecido pelo engano do pecado.',
    'Porque temos nos tornado participantes de Cristo, se, de fato, guardarmos firme, até o fim, a confiança que, desde o princípio, tivemos.',
    'Como se diz: "Hoje, se ouvirem a sua voz, não endureçam o coração, como foi na rebelião."',
    'E quem foram os que ouviram e, mesmo assim, se rebelaram? Não foram todos os que saíram do Egito por meio de Moisés?',
    'E contra quem Deus se indignou durante quarenta anos? Não foi contra os que pecaram, cujos cadáveres caíram no deserto?',
    'E a quem jurou que não entrariam no seu descanso, senão aos que foram desobedientes?',
    'Assim, vemos que não puderam entrar por causa da incredulidade.'
]

const hebreus4_naa = [
    'Portanto, visto que nos foi deixada a promessa de entrar no descanso de Deus, tenhamos cuidado para não parecer que algum de vocês deixou de alcançá-la.',
    "Porque também a nós foram anunciadas as boas-novas, exatamente como aconteceu com eles. Mas a palavra que eles ouviram não lhes trouxe proveito, porque não foram unidos por meio da fé com aqueles que a ouviram.",
    'Nós, porém, que cremos, entramos no descanso, conforme Deus disse: "Assim, jurei na minha ira: ‘Não entrarão no meu descanso.’" Ele disse isso, mesmo que as obras já estivessem concluídas desde a fundação do mundo.',
    'Porque, em certo lugar, assim disse a respeito do sétimo dia: "No sétimo dia, Deus descansou de todas as obras que tinha feito."',
    'E, novamente, no mesmo lugar: "Não entrarão no meu descanso."',
    "Visto, portanto, que resta entrarem alguns naquele descanso e que, por causa da desobediência, não entraram aqueles aos quais anteriormente foram anunciadas as boas-novas,",
    'de novo, determina certo dia, "hoje", falando por Davi, muito tempo depois, segundo antes tinha sido declarado: "Hoje, se ouvirem a sua voz, não endureçam o coração."',
    'Ora, se Josué lhes tivesse dado descanso, não falaria, posteriormente, a respeito de outro dia.',
    'Portanto, resta um repouso sabático para o povo de Deus.',
    'Porque aquele que entrou no descanso de Deus, também ele mesmo descansou de suas obras, como Deus descansou das suas.',
    'Portanto, esforcemo-nos por entrar naquele descanso, a fim de que ninguém caia, segundo aquele exemplo de desobediência.',
    'Porque a palavra de Deus é viva e eficaz, e mais cortante do que qualquer espada de dois gumes, e penetra até o ponto de dividir alma e espírito, juntas e medulas, e é apta para julgar os pensamentos e propósitos do coração.',
    'E não há criatura que não seja manifesta na sua presença; pelo contrário, todas as coisas estão descobertas e expostas aos olhos daquele a quem temos de prestar contas.',
    'Tendo, pois, Jesus, o Filho de Deus, como grande sumo sacerdote que adentrou os céus, conservemos firmes a nossa confissão.',
    'Porque não temos sumo sacerdote que não possa se compadecer das nossas fraquezas; pelo contrário, ele foi tentado em todas as coisas, à nossa semelhança, mas sem pecado.',
    'Portanto, aproximemo-nos do trono da graça com confiança, a fim de recebermos misericórdia e encontrarmos graça para ajuda em momento oportuno.'
]

const hebreus5_naa = [
    'Cada sumo sacerdote, sendo escolhido dentre os homens, é constituído nas coisas relacionadas com Deus, a favor dos homens, para oferecer dons e sacrifícios pelos pecados.',
    'Ele é capaz de se compadecer dos ignorantes e dos que se desviam do caminho, pois também ele mesmo está rodeado de fraquezas.',
    'Por esta razão, deve oferecer sacrifícios pelos pecados, tanto do povo como de si mesmo.',
    'E ninguém toma esta honra para si mesmo, a não ser quando chamado por Deus, como aconteceu com Arão.',
    'Assim, também Cristo não glorificou a si mesmo para se tornar sumo sacerdote, mas quem o glorificou foi aquele que lhe disse: "Você é meu Filho, hoje eu gerei você."',
    'E em outro lugar também diz: "Você é sacerdote para sempre, segundo a ordem de Melquisedeque."',
    'Ele, Jesus, nos dias da sua carne, tendo oferecido, com forte clamor e lágrimas, orações e súplicas a quem o podia livrar da morte, foi ouvido por causa da sua reverência.',
    'Embora fosse Filho, aprendeu a obediência pelas coisas que sofreu',
    "e, tendo sido aperfeiçoado, tornou-se o Autor da salvação eterna para todos os que lhe obedecem.",
    'E Deus o nomeou sumo sacerdote, segundo a ordem de Melquisedeque.',
    'A esse respeito temos muitas coisas a dizer, coisas difíceis de explicar, porque vocês ficaram com preguiça de ouvir.',
    'Pois, quando já deviam ser mestres, levando em conta o tempo decorrido, vocês têm, novamente, necessidade de alguém que lhes ensine quais são os princípios elementares dos oráculos de Deus. Passaram a ter necessidade de leite e não de alimento sólido.',
    'Ora, todo aquele que se alimenta de leite é inexperiente na palavra da justiça, porque é criança.',
    'Mas o alimento sólido é para os adultos, para aqueles que, pela prática, têm as suas faculdades exercitadas para discernir não somente o bem, mas também o mal.'
]

const hebreus6_naa = [
    'Por isso, deixando os princípios elementares da doutrina de Cristo, avancemos para o que é perfeito, não lançando de novo a base do arrependimento de obras mortas e da fé em Deus,',
    'o ensino de batismos e da imposição de mãos, da ressurreição dos mortos e do juízo eterno.',
    'Isso faremos, se Deus o permitir.',
    "É impossível, pois, que aqueles que uma vez foram iluminados, provaram o dom celestial, se tornaram participantes do Espírito Santo,",
    'provaram a boa palavra de Deus e os poderes do mundo vindouro',
    'e caíram, sim, é impossível outra vez renová-los para arrependimento, visto que, de novo, estão crucificando para si mesmos o Filho de Deus e expondo-o à zombaria.',
    'Porque a terra que absorve a chuva que frequentemente cai sobre ela e produz plantas úteis para aqueles que a cultivam recebe bênção da parte de Deus;',
    'mas, se produz espinhos e ervas daninhas, é rejeitada e está perto da maldição; e o seu fim é ser queimada.',
    'Quanto a vocês, meus amados, ainda que falemos desta maneira, estamos certos de que coisas melhores os esperam, coisas relacionadas com a salvação.',
    "Porque Deus não é injusto para se esquecer do trabalho que vocês fizeram e do amor que mostraram para com o seu nome, pois vocês serviram e ainda estão servindo aos santos.",
    'Desejamos que cada um de vocês continue mostrando, até o fim, o mesmo empenho para a plena certeza da esperança,',
    'para que não se tornem preguiçosos, mas imitadores daqueles que, pela fé e pela paciência, herdam as promessas.',
    'Pois, quando Deus fez a promessa a Abraão, visto que não tinha ninguém superior por quem jurar, jurou por si mesmo,',
    'dizendo: "Certamente eu o abençoarei e multiplicarei os seus descendentes."',
    'E assim, depois de esperar com paciência, Abraão obteve a promessa.',
    'Porque as pessoas juram pelo que lhes é superior, e o juramento, servindo de garantia, põe fim a toda discussão.',
    'Por isso, Deus, quando quis mostrar com mais clareza aos herdeiros da promessa que o seu propósito era imutável, confirmou-o com um juramento.',
    'Ele fez isso para que, mediante duas coisas imutáveis, nas quais é impossível que Deus minta, nós, que já corremos para o refúgio, tenhamos forte alento, para tomar posse da esperança que nos foi proposta.',
    'Temos esta esperança por âncora da alma, segura e firme e que entra no santuário que fica atrás do véu,',
    'onde Jesus, como precursor, entrou por nós, tendo-se tornado sumo sacerdote para sempre, segundo a ordem de Melquisedeque.'
]

const hebreus7_naa = [
    'Porque este Melquisedeque, rei de Salém, sacerdote do Deus Altíssimo, foi ao encontro de Abraão, quando este voltava da matança dos reis, e o abençoou.',
    'Foi para ele que Abraão separou o dízimo de tudo. Primeiramente o nome dele significa "rei da justiça"; depois também é "rei de Salém", ou seja, "rei da paz".',
    "Sem pai, sem mãe, sem genealogia, ele não teve princípio de dias nem fim de existência, mas, feito semelhante ao Filho de Deus, permanece sacerdote para sempre.",
    'Vejam como era grande esse a quem Abraão, o patriarca, pagou o dízimo tirado dos melhores despojos.',
    "Ora, os que dentre os filhos de Levi recebem o sacerdócio têm ordem, de acordo com a lei, de recolher os dízimos do povo, ou seja, dos seus irmãos, embora estes sejam descendentes de Abraão.",
    'Entretanto, aquele cuja genealogia não se inclui entre os filhos de Levi recebeu dízimos de Abraão e abençoou aquele que havia recebido as promessas.',
    'Evidentemente, não há dúvida de que o inferior é abençoado pelo superior.',
    "Aliás, aqui os que recebem dízimos são homens mortais, porém ali o dízimo foi recebido por aquele de quem se testifica que vive.",
    'E, por assim dizer, também Levi, que recebe dízimos, pagou-os na pessoa de Abraão.',
    'Porque Levi, por assim dizer, já estava no corpo de seu pai Abraão, quando Melquisedeque foi ao encontro deste.',
    "Portanto, se a perfeição fosse possível por meio do sacerdócio levítico — pois foi com base nele que o povo recebeu a lei —, que necessidade haveria ainda de que se levantasse outro sacerdote, segundo a ordem de Melquisedeque, e não segundo a ordem de Arão?",
    'Pois, quando se muda o sacerdócio, necessariamente muda também a lei.',
    'Porque aquele de quem são ditas estas coisas pertence a outra tribo, da qual ninguém prestou serviço diante do altar.',
    'Pois é evidente que nosso Senhor procedeu de Judá, tribo à qual Moisés nunca falou nada a respeito de sacerdócio.',
    'E isto é ainda muito mais evidente, quando, à semelhança de Melquisedeque, surge outro sacerdote,',
    'constituído não conforme a lei de mandamento carnal, mas segundo o poder de vida que não tem fim.',
    'Porque dele se testifica: "Você é sacerdote para sempre, segundo a ordem de Melquisedeque."',
    'Portanto, por um lado, se revoga a ordenança anterior, por causa de sua fraqueza e inutilidade,',
    'pois a lei nunca aperfeiçoou coisa alguma; e, por outro lado, se introduz esperança superior, pela qual nos chegamos a Deus.',
    'E isto não se deu sem juramento. Porque os outros são feitos sacerdotes sem juramento,',
    'mas este foi feito sacerdote com juramento, por aquele que lhe disse: "O Senhor jurou e não se arrependerá: ‘Você é sacerdote para sempre.’"',
    'Por isso mesmo, Jesus se tornou fiador de superior aliança.',
    "Ora, os outros são feitos sacerdotes em maior número, porque a morte os impede de continuar;",
    'Jesus, no entanto, porque continua para sempre, tem o seu sacerdócio imutável.',
    'Por isso, também pode salvar totalmente os que por ele se aproximam de Deus, vivendo sempre para interceder por eles.',
    'Porque nos convinha um sumo sacerdote como este, santo, inculpável, sem mácula, separado dos pecadores e exaltado acima dos céus,',
    'que não tem necessidade, como os outros sumos sacerdotes, de oferecer sacrifícios todos os dias, primeiro, por seus próprios pecados, depois, pelos do povo; porque fez isto uma vez por todas, quando a si mesmo ofereceu.',
    'Porque a lei constitui homens sujeitos a fraquezas como sumos sacerdotes, mas a palavra do juramento, que foi posterior à lei, constitui o Filho, perfeito para sempre.'
]

const hebreus8_naa = [
    "Ora, o essencial das coisas que estamos dizendo é que temos tal sumo sacerdote, que se assentou à direita do trono da Majestade nos céus,",
    'como ministro do santuário e do verdadeiro tabernáculo que o Senhor erigiu, e não o homem.',
    'Pois todo sumo sacerdote é constituído para oferecer dons e sacrifícios; por isso, era necessário que também esse sumo sacerdote tivesse o que oferecer.',
    'Se ele estivesse na terra, nem mesmo sacerdote seria, visto existirem aqueles que oferecem os dons segundo a lei.',
    'Estes ministram em figura e sombra das coisas celestiais, assim como Moisés foi divinamente instruído, quando estava para construir o tabernáculo. Pois Deus disse: "Tenha cuidado para fazer tudo de acordo com o modelo que foi mostrado a você no monte."',
    'Mas agora Jesus obteve um ministério tanto mais excelente, quanto é também Mediador de superior aliança instituída com base em superiores promessas.',
    'Porque, se aquela primeira aliança tivesse sido sem defeito, de maneira alguma estaria sendo buscado lugar para uma segunda aliança.',
    'E, de fato, repreendendo-os, diz: "Eis aí vêm dias, diz o Senhor, e firmarei nova aliança com a casa de Israel e com a casa de Judá,',
    "não segundo a aliança que fiz com os seus pais, no dia em que os tomei pela mão, para os tirar da terra do Egito; pois eles não continuaram na minha aliança, e eu não dei atenção a eles, diz o Senhor.",
    'Porque esta é a aliança que farei com a casa de Israel, depois daqueles dias, diz o Senhor: Imprimirei as minhas leis na mente deles e as inscreverei sobre o seu coração; e eu serei o seu Deus, e eles serão o meu povo.',
    'E não ensinará jamais cada um ao seu próximo, nem cada um ao seu irmão, dizendo: ‘Conheça o Senhor’; porque todos me conhecerão, desde o menor até o maior deles.',
    'Pois, para com as suas iniquidades, usarei de misericórdia e dos seus pecados jamais me lembrarei."',
    'Quando ele diz "nova aliança", torna antiquada a primeira. Ora, aquilo que se torna antiquado e envelhecido está prestes a desaparecer.'
]

const hebreus9_naa = [
    'Ora, a primeira aliança também tinha preceitos de culto divino e o seu santuário terrestre.',
    "Porque foi edificado um tabernáculo, cuja parte da frente, onde estavam o candelabro, a mesa e os pães da proposição, se chama o Santo Lugar.",
    'Por trás do segundo véu se encontrava o tabernáculo que se chama o Santo dos Santos,',
    'ao qual pertencia um altar de ouro para o incenso e a arca da aliança totalmente coberta de ouro, na qual estava uma urna de ouro contendo o maná, o bordão de Arão, que floresceu, e as tábuas da aliança.',
    'Sobre a arca estavam os querubins de glória, que, com a sua sombra, cobriam o propiciatório. Mas dessas coisas não falaremos, agora, com mais detalhes.',
    'Ora, depois que foram feitos todos esses preparativos, os sacerdotes entram continuamente no primeiro tabernáculo para realizar os serviços sagrados.',
    'Mas, no segundo, o sumo sacerdote entra sozinho uma vez por ano, não sem sangue, que oferece por si e pelos pecados de ignorância do povo.',
    'Com isto o Espírito Santo quer dar a entender que o caminho do Santuário ainda não se manifestou, enquanto o primeiro tabernáculo continua erguido.',
    'Isso é uma parábola para a época presente, na qual se oferecem dons e sacrifícios, embora estes, no que diz respeito à consciência, sejam ineficazes para aperfeiçoar aquele que presta culto,',
    'pois não passam de ordenanças da carne, baseadas somente em comidas, bebidas e diversas cerimônias de purificação, impostas até o tempo oportuno de reforma.',
    'Quando, porém, Cristo veio como sumo sacerdote dos bens já realizados, mediante o maior e mais perfeito tabernáculo, não feito por mãos humanas, quer dizer, não desta criação,',
    'e não pelo sangue de bodes e de bezerros, mas pelo seu próprio sangue, ele entrou no Santuário, uma vez por todas, e obteve uma eterna redenção.',
    'Portanto, se o sangue de bodes e de touros e a cinza de uma novilha, aspergidos sobre os contaminados, os santificam quanto à purificação da carne,',
    'muito mais o sangue de Cristo, que, pelo Espírito eterno, a si mesmo ofereceu sem mácula a Deus, purificará a nossa consciência de obras mortas, para servirmos ao Deus vivo!',
    'Por isso mesmo, ele é o Mediador da nova aliança, a fim de que os que foram chamados recebam a promessa da herança eterna, visto que houve uma morte para remissão das transgressões que foram cometidas sob a primeira aliança.',
    'Porque, onde há um testamento, é necessário constatar a morte de quem o fez.',
    'Sim, porque um testamento só é confirmado depois da morte de quem o fez, pois de maneira nenhuma um testamento tem força de lei enquanto ainda vive quem o fez.',
    'Por isso, nem a primeira aliança foi estabelecida sem sangue.',
    "Porque, havendo Moisés proclamado a todo o povo todos os mandamentos conforme a lei, pegou o sangue dos bezerros e dos bodes, com água, lã tingida de escarlate e hissopo e aspergiu não só o próprio livro, como também todo o povo,",
    'dizendo: "Este é o sangue da aliança que Deus ordenou para vocês."',
    'Igualmente também aspergiu com sangue o tabernáculo e todos os utensílios do serviço sagrado.',
    'De fato, segundo a lei, quase todas as coisas são purificadas com sangue; e sem derramamento de sangue não há remissão.',
    'Era necessário, portanto, que as figuras das coisas que estão nos céus fossem purificadas com tais sacrifícios, mas as próprias coisas celestiais requerem sacrifícios superiores àqueles.',
    'Porque Cristo não entrou em santuário feito por mãos humanas, figura do verdadeiro Santuário, porém no próprio céu, para comparecer, agora, por nós, diante de Deus.',
    'Ele não entrou para oferecer a si mesmo muitas vezes, como o sumo sacerdote entra todos os anos no Santo dos Santos com sangue alheio.',
    'Se fosse assim, ele precisaria ter sofrido muitas vezes desde a fundação do mundo; agora, porém, ao chegar o fim dos tempos, ele se manifestou uma vez por todas, para aniquilar o pecado por meio do sacrifício de si mesmo.',
    'E, assim como aos homens está ordenado morrerem uma só vez, vindo, depois disso, o juízo,',
    "assim também Cristo, tendo-se oferecido uma vez por todas para tirar os pecados de muitos, aparecerá segunda vez, não para tirar pecados, mas para salvar aqueles que esperam por ele."
]

const hebreus10_naa = [
    'Ora, visto que a lei é apenas uma sombra dos bens vindouros, não a imagem real das coisas, nunca consegue aperfeiçoar aqueles que se aproximam de Deus com os mesmos sacrifícios que, ano após ano, continuamente, eles oferecem.',
    'Se isto fosse possível, será que os sacrifícios não teriam deixado de ser oferecidos? Porque os que prestam culto, tendo sido purificados uma vez por todas, não mais teriam consciência de pecados!',
    'Entretanto, nesses sacrifícios ocorre recordação de pecados todos os anos,',
    'porque é impossível que o sangue de touros e de bodes remova pecados.',
    'Por isso, ao entrar no mundo, Cristo disse: "Sacrifício e oferta não quiseste, mas preparaste um corpo para mim;',
    'não te agradaste de holocaustos e ofertas pelo pecado.',
    'Então eu disse: ‘Eis aqui estou! No rolo do livro está escrito a meu respeito. Estou aqui para fazer, ó Deus, a tua vontade.’"',
    'Depois de dizer, como acima: "Sacrifícios, ofertas, holocaustos e ofertas pelo pecado não quiseste, nem deles te agradaste" — coisas que se oferecem segundo a lei —,',
    'num segundo momento acrescentou: "Eis aqui estou para fazer, ó Deus, a tua vontade." Ele remove o primeiro para estabelecer o segundo.',
    'Nessa vontade é que temos sido santificados, mediante a oferta do corpo de Jesus Cristo, uma vez por todas.',
    'Ora, todo sacerdote se apresenta, dia após dia, para exercer o serviço sagrado e oferecer muitas vezes os mesmos sacrifícios, que nunca jamais podem remover pecados.',
    'Jesus, porém, tendo oferecido, para sempre, um único sacrifício pelos pecados, assentou-se à direita de Deus,',
    'aguardando, daí em diante, até que os seus inimigos sejam postos por estrado dos seus pés.',
    'Porque, com uma única oferta, aperfeiçoou para sempre os que estão sendo santificados.',
    'E disto nos dá testemunho também o Espírito Santo. Porque, após ter dito:',
    '"Esta é a aliança que farei com eles, depois daqueles dias, diz o Senhor: Imprimirei as minhas leis no coração deles e as inscreverei sobre a sua mente",',
    'acrescenta: "Também dos seus pecados e das suas iniquidades jamais me lembrarei."',
    'Ora, onde há remissão de pecados, não existe mais necessidade de sacrifício pelo pecado.',
    'Portanto, meus irmãos, tendo ousadia para entrar no Santuário, pelo sangue de Jesus,',
    'pelo novo e vivo caminho que ele nos abriu por meio do véu, isto é, pela sua carne,',
    'e tendo um grande sacerdote sobre a casa de Deus,',
    "aproximemo-nos com um coração sincero, em plena certeza de fé, tendo o coração purificado de má consciência e o corpo lavado com água pura.",
    'Guardemos firme a confissão da esperança, sem vacilar, pois quem fez a promessa é fiel.',
    "Cuidemos também de nos animar uns aos outros no amor e na prática de boas obras.",
    "Não deixemos de nos congregar, como é costume de alguns. Pelo contrário, façamos admoestações, ainda mais agora que vocês veem que o Dia se aproxima.",
    "Porque, se continuarmos a pecar de propósito, depois de termos recebido o conhecimento da verdade, já não resta sacrifício pelos pecados.",
    "Pelo contrário, resta apenas uma terrível expectativa de juízo e fogo vingador prestes a consumir os adversários.",
    "Quem tiver rejeitado a lei de Moisés morre sem misericórdia, pelo depoimento de duas ou três testemunhas.",
    "Imaginem quanto mais severo deve ser o castigo daquele que pisou o Filho de Deus, profanou o sangue da aliança com o qual foi santificado e insultou o Espírito da graça!",
    'Pois conhecemos aquele que disse: "A mim pertence a vingança; eu retribuirei." E outra vez: "O Senhor julgará o seu povo."',
    "Horrível coisa é cair nas mãos do Deus vivo.",
    'Lembrem-se dos dias passados, quando, depois que foram iluminados, vocês sustentaram grande luta e sofrimentos.',
    "Em certos momentos vocês foram transformados em espetáculo, tanto para serem insultados quanto para serem maltratados; em outros vocês se tornaram coparticipantes com aqueles que foram tratados assim.",
    'Porque vocês não apenas se compadeceram dos encarcerados, mas também aceitaram com alegria a espoliação dos seus bens, porque sabiam que tinham um patrimônio superior e durável.',
    'Portanto, não percam a confiança de vocês, porque ela tem grande recompensa.',
    "Vocês precisam perseverar, para que, havendo feito a vontade de Deus, alcancem a promessa.",
    '"Porque, ainda dentro de pouco tempo, aquele que vem virá e não irá demorar;',
    'mas o meu justo viverá pela fé; e, se retroceder, dele a minha alma não se agradará."',
    'Nós, porém, não somos dos que retrocedem para a perdição, mas somos da fé, para a preservação da alma.'
]

const hebreus11_naa = [
    'Ora, a fé é a certeza de coisas que se esperam, a convicção de fatos que não se veem.',
    'Pois, pela fé, os antigos obtiveram bom testemunho.',
    'Pela fé, entendemos que o universo foi formado pela palavra de Deus, de maneira que o visível veio a existir das coisas que não são visíveis.',
    'Pela fé, Abel ofereceu a Deus um sacrifício mais excelente do que Caim, pelo qual obteve testemunho de ser justo, tendo a aprovação de Deus quanto às suas ofertas. Por meio da fé, mesmo depois de morto, ainda fala.',
    'Pela fé, Enoque foi levado a fim de não passar pela morte; não foi achado, porque Deus o havia levado. Pois, antes de ser levado, obteve testemunho de que havia agradado a Deus.',
    'De fato, sem fé é impossível agradar a Deus, porque é necessário que aquele que se aproxima de Deus creia que ele existe e que recompensa os que o buscam.',
    'Pela fé, Noé, divinamente instruído a respeito de acontecimentos que ainda não se viam e sendo temente a Deus, construiu uma arca para a salvação de sua família. Assim, ele condenou o mundo e se tornou herdeiro da justiça que vem da fé.',
    'Pela fé, Abraão, quando chamado, obedeceu, a fim de ir para um lugar que devia receber como herança; e partiu sem saber para onde ia.',
    "Pela fé, peregrinou na terra da promessa como em terra alheia, habitando em tendas com Isaque e Jacó, herdeiros com ele da mesma promessa.",
    "Porque Abraão aguardava a cidade que tem fundamentos, da qual Deus é o arquiteto e construtor.",
    "Pela fé, também, a própria Sara, apesar de não poder ter filhos e já ser idosa, recebeu poder para ser mãe, pois considerou fiel aquele que lhe havia feito a promessa.",
    'Por isso, também de um só homem, praticamente morto, saiu uma posteridade tão numerosa como as estrelas do céu e inumerável como a areia que está na praia do mar.',
    'Todos estes morreram na fé. Não obtiveram as promessas, mas viram-nas de longe e se alegraram com elas, confessando que eram estrangeiros e peregrinos na terra.',
    "Porque os que falam desse modo manifestam estar procurando uma pátria.",
    'E, se, na verdade, se lembrassem daquela de onde saíram, teriam oportunidade de voltar.',
    'Mas, agora, desejam uma pátria superior, isto é, celestial. Por isso, Deus não se envergonha deles, de ser chamado o seu Deus, porque lhes preparou uma cidade.',
    'Pela fé, Abraão, quando posto à prova, ofereceu Isaque. Aquele que acolheu as promessas de Deus estava a ponto de sacrificar o seu único filho,',
    'do qual havia sido dito: "A sua descendência virá por meio de Isaque."',
    'Abraão considerou que Deus era poderoso até para ressuscitar Isaque dentre os mortos, de onde também figuradamente o recebeu de volta.',
    'Pela fé, igualmente Isaque abençoou Jacó e Esaú, a respeito de coisas que ainda estavam para vir.',
    "Pela fé, Jacó, quando estava para morrer, abençoou cada um dos filhos de José e, apoiado sobre a extremidade do seu bordão, adorou a Deus.",
    "Pela fé, José, próximo do seu fim, fez menção do êxodo dos filhos de Israel, bem como deu ordens a respeito de seus próprios ossos.",
    'Pela fé, Moisés, depois de nascer, foi escondido por seus pais durante três meses, porque viram que era um menino bonito e não temeram o decreto do rei.',
    "Pela fé, Moisés, sendo homem feito, recusou ser chamado filho da filha de Faraó,",
    "preferindo ser maltratado junto com o povo de Deus a usufruir prazeres transitórios do pecado.",
    "Ele entendeu que ser desprezado por causa de Cristo era uma riqueza maior do que os tesouros do Egito, porque contemplava a recompensa.",
    "Pela fé, Moisés abandonou o Egito, não ficando amedrontado com a ira do rei, pois permaneceu firme como quem vê aquele que é invisível.",
    "Pela fé, celebrou a Páscoa e o derramamento do sangue, para que o exterminador não tocasse nos primogênitos dos israelitas.",
    "Pela fé, os israelitas atravessaram o mar Vermelho como por terra seca. Quando os egípcios tentaram fazer o mesmo, foram engolidos pelo mar.",
    'Pela fé, ruíram as muralhas de Jericó, depois de rodeadas por sete dias.',
    "Pela fé, Raabe, a prostituta, não foi destruída com os desobedientes, porque acolheu os espias com paz.",
    "E que mais direi? Certamente me faltará o tempo necessário para falar de Gideão, de Baraque, de Sansão, de Jefté, de Davi, de Samuel e dos profetas,",
    'os quais, por meio da fé, conquistaram reinos, praticaram a justiça, obtiveram promessas, fecharam a boca de leões,',
    'extinguiram a violência do fogo, escaparam de ser mortos à espada, da fraqueza tiraram força, fizeram-se poderosos na guerra, puseram em fuga exércitos estrangeiros.',
    'Mulheres receberam, pela ressurreição, os seus mortos. Alguns foram torturados, não aceitando seu resgate, para obterem superior ressurreição;',
    "outros, por sua vez, passaram pela prova de zombarias e açoites, sim, até de algemas e prisões.",
    'Foram apedrejados, serrados ao meio, mortos ao fio da espada. Andaram como peregrinos, vestidos de peles de ovelhas e de cabras; passaram por necessidades, foram afligidos e maltratados.',
    'O mundo não era digno deles. Andaram errantes pelos desertos, pelos montes, pelas covas, pelos antros da terra.',
    'Todos estes, mesmo tendo obtido bom testemunho por meio da fé, não obtiveram a concretização da promessa,',
    'porque Deus tinha previsto algo melhor para nós, para que eles, sem nós, não fossem aperfeiçoados.'
]

const hebreus12_naa = [
    'Portanto, também nós, visto que temos a rodear-nos tão grande nuvem de testemunhas, livremo-nos de todo peso e do pecado que tão firmemente se apega a nós e corramos com perseverança a carreira que nos está proposta,',
    'olhando firmemente para o Autor e Consumador da fé, Jesus, o qual, em troca da alegria que lhe estava proposta, suportou a cruz, sem se importar com a vergonha, e agora está sentado à direita do trono de Deus.',
    'Portanto, pensem naquele que suportou tamanha oposição dos pecadores contra si mesmo, para que vocês não se cansem nem desanimem.',
    'Na luta contra o pecado, vocês ainda não resistiram até o sangue.',
    'E vocês se esqueceram da exortação que lhes é dirigida, como a filhos: "Filho meu, não despreze a correção que vem do Senhor, nem desanime quando você é repreendido por ele;',
    'porque o Senhor corrige a quem ama e castiga todo filho a quem aceita."',
    'É para disciplina que vocês perseveram. Deus os trata como filhos. E qual é o filho a quem o pai não corrige?',
    'Mas, se estão sem essa correção, da qual todos se tornaram participantes, então vocês são bastardos e não filhos.',
    'Além disso, tínhamos os nossos pais humanos, que nos corrigiam, e nós os respeitávamos. Será que, então, não nos sujeitaremos muito mais ao Pai espiritual, para vivermos?',
    'Pois eles nos corrigiam por pouco tempo, segundo melhor lhes parecia; Deus, porém, nos disciplina para o nosso próprio bem, a fim de sermos participantes da sua santidade.',
    'Na verdade, toda disciplina, ao ser aplicada, não parece ser motivo de alegria, mas de tristeza. Porém, mais tarde, produz fruto pacífico aos que têm sido por ela exercitados, fruto de justiça.',
    'Por isso, levantem as mãos cansadas e fortaleçam os joelhos vacilantes.',
    'Façam caminhos retos para os seus pés, para que o manco não se desvie, mas seja curado.',
    'Procurem viver em paz com todos e busquem a santificação, sem a qual ninguém verá o Senhor.',
    'Cuidem para que ninguém fique afastado da graça de Deus, e que nenhuma raiz de amargura, brotando, cause perturbação, e, por meio dela, muitos sejam contaminados.',
    'E cuidem para que não haja nenhum impuro ou profano, como foi Esaú, o qual, por um prato de comida, vendeu o seu direito de primogenitura.',
    "Vocês sabem também que, posteriormente, querendo herdar a bênção, foi rejeitado, pois não achou lugar de arrependimento, embora, com lágrimas, o tivesse buscado.",
    'Ora, vocês não chegaram ao fogo palpável e aceso, à escuridão, às trevas, à tempestade,',
    'ao toque da trombeta e ao som de palavras tais, que aqueles que ouviram isso pediram que não lhes fosse dito mais nada,',
    'pois já não suportavam o que lhes era ordenado: "Até um animal, se tocar o monte, será apedrejado."',
    'Na verdade, o espetáculo era tão horrível, que Moisés disse: "Estou apavorado e trêmulo!"',
    'Pelo contrário, vocês chegaram ao monte Sião e à cidade do Deus vivo, a Jerusalém celestial, e a milhares de anjos. Vocês chegaram à assembleia festiva,',
    'a igreja dos primogênitos arrolados nos céus. Vocês chegaram a Deus, o Juiz de todos, e aos espíritos dos justos aperfeiçoados,',
    'e a Jesus, o Mediador da nova aliança, e ao sangue da aspersão, que fala melhor do que o sangue de Abel.',
    'Tenham cuidado e não se recusem a ouvir aquele que fala. Pois, se os que se recusaram a ouvir quem divinamente os advertia na terra não escaparam, muito menos escaparemos nós, se nos desviarmos daquele que dos céus nos adverte.',
    'Naquele tempo, a voz dele abalou a terra, mas agora ele promete, dizendo: "Mais uma vez eu farei tremer não só a terra, mas também o céu."',
    'Ora, as palavras "mais uma vez" significam a remoção dessas coisas abaladas, ou seja, das coisas criadas, para que permaneçam as coisas que não podem ser abaladas.',
    'Por isso, recebendo nós um Reino inabalável, retenhamos a graça, pela qual sirvamos a Deus de modo agradável, com reverência e temor.',
    'Porque o nosso Deus é fogo consumidor.'
]

const hebreus13_naa = [
    'Seja constante o amor fraternal.',
    'Não se esqueçam da hospitalidade, pois alguns, praticando-a, sem o saber acolheram anjos.',
    'Lembrem-se dos presos, como se estivessem na cadeia com eles; dos que sofrem maus-tratos, como se vocês mesmos fossem os maltratados.',
    'Digno de honra entre todos seja o matrimônio, bem como o leito conjugal sem mácula; porque Deus julgará os impuros e os adúlteros.',
    'Que a vida de vocês seja isenta de avareza. Contentem-se com as coisas que vocês têm, porque Deus disse: "De maneira alguma deixarei você, nunca jamais o abandonarei."',
    'Assim, afirmemos confiantemente: "O Senhor é o meu auxílio, não temerei. O que é que alguém pode me fazer?"',
    "Lembrem-se dos seus líderes, os quais pregaram a palavra de Deus a vocês; e, considerando atentamente o fim da vida deles, imitem a fé que tiveram.",
    'Jesus Cristo é o mesmo ontem, hoje e para sempre.',
    'Não se deixem levar por doutrinas diferentes e estranhas, porque o que vale é ter o coração confirmado com graça e não com alimentos, que nunca trouxeram proveito aos que se preocupam com isso.',
    'Temos um altar do qual os que ministram no tabernáculo não têm o direito de comer.',
    'Pois aqueles animais cujo sangue é trazido pelo sumo sacerdote para dentro do Santo dos Santos, como sacrifício pelo pecado, têm o corpo queimado fora do acampamento.',
    "Por isso, também Jesus, para santificar o povo, pelo seu próprio sangue, sofreu fora da cidade.",
    'Saiamos, pois, a ele, fora do acampamento, levando a mesma desonra que ele suportou.',
    'De fato, não temos aqui cidade permanente, mas buscamos a que há de vir.',
    'Por meio de Jesus, pois, ofereçamos a Deus, sempre, sacrifício de louvor, que é o fruto de lábios que confessam o seu nome.',
    'Não se esqueçam da prática do bem e da mútua cooperação, pois de tais sacrifícios Deus se agrada.',
    'Obedeçam aos seus líderes e sejam submissos a eles, pois zelam pela alma de vocês, como quem deve prestar contas. Que eles possam fazer isto com alegria e não gemendo; do contrário, isso não trará proveito nenhum para vocês.',
    'Orem por nós, pois estamos certos de que temos a consciência limpa, querendo em todas as circunstâncias fazer o que é correto.',
    'Peço, com insistência, que vocês façam isto, para que eu lhes seja restituído o mais depressa possível.',
    "Ora, o Deus da paz, que tornou a trazer dentre os mortos o nosso Senhor Jesus, o grande Pastor das ovelhas, pelo sangue da eterna aliança,",
    'aperfeiçoe vocês em todo o bem, para que possam fazer a vontade dele. Que ele opere em nós o que é agradável diante dele, por meio de Jesus Cristo, a quem seja a glória para todo o sempre. Amém!',
    'Irmãos, peço que escutem com paciência esta palavra de exortação, porque, na verdade, escrevi de forma bem resumida.',
    'Saibam que o irmão Timóteo foi posto em liberdade. Se ele vier logo, irei vê-los na companhia dele.',
    'Saúdem todos os seus líderes, bem como todos os santos. Os da Itália mandam saudações.',
    "A graça esteja com todos vocês."
]

const judas1 = [
    'Judas, servo de Jesus Cristo, e irmão de Tiago, aos chamados, santificados em Deus Pai, e conservados por Jesus Cristo:',
    'Misericórdia, e paz, e amor vos sejam multiplicados.',
    'Amados, procurando eu escrever-vos com toda a diligência acerca da salvação comum, tive por necessidade escrever-vos, e exortar-vos a batalhar pela fé que uma vez foi dada aos santos.',
    'Porque se introduziram alguns, que já antes estavam escritos para este mesmo juízo, homens ímpios, que convertem em dissolução a graça de Deus, e negam a Deus, único dominador e Senhor nosso, Jesus Cristo.',
    'Mas quero lembrar-vos, como a quem já uma vez soube isto, que, havendo o Senhor salvo um povo, tirando-o da terra do Egito, destruiu depois os que não creram;',
    'E aos anjos que não guardaram o seu principado, mas deixaram a sua própria habitação, reservou na escuridão e em prisões eternas até ao juízo daquele grande dia;',
    'Assim como Sodoma e Gomorra, e as cidades circunvizinhas, que, havendo-se entregue à fornicação como aqueles, e ido após outra carne, foram postas por exemplo, sofrendo a pena do fogo eterno.',
    'E, contudo, também estes, semelhantemente adormecidos, contaminam a sua carne, e rejeitam a dominação, e vituperam as dignidades.',
    'Mas o arcanjo Miguel, quando contendia com o diabo, e disputava a respeito do corpo de Moisés, não ousou pronunciar juízo de maldição contra ele; mas disse: O Senhor te repreenda.',
    'Estes, porém, dizem mal do que não sabem; e, naquilo que naturalmente conhecem, como animais irracionais se corrompem.',
    'Ai deles! porque entraram pelo caminho de Caim, e foram levados pelo engano do prêmio de Balaão, e pereceram na contradição de Coré.',
    'Estes são manchas em vossas festas de amor, banqueteando-se convosco, e apascentando-se a si mesmos sem temor; são nuvens sem água, levadas pelos ventos de uma para outra parte; são como árvores murchas, infrutíferas, duas vezes mortas, desarraigadas;',
    'Ondas impetuosas do mar, que escumam as suas mesmas abominações; estrelas errantes, para os quais está eternamente reservada a negrura das trevas.',
    'E destes profetizou também Enoque, o sétimo depois de Adão, dizendo: Eis que é vindo o Senhor com milhares de seus santos;',
    'Para fazer juízo contra todos e condenar dentre eles todos os ímpios, por todas as suas obras de impiedade, que impiamente cometeram, e por todas as duras palavras que ímpios pecadores disseram contra ele.',
    'Estes são murmuradores, queixosos da sua sorte, andando segundo as suas concupiscências, e cuja boca diz coisas mui arrogantes, admirando as pessoas por causa do interesse.',
    'Mas vós, amados, lembrai-vos das palavras que vos foram preditas pelos apóstolos de nosso Senhor Jesus Cristo;',
    'Os quais vos diziam que nos últimos tempos haveria escarnecedores que andariam segundo as suas ímpias concupiscências.',
    "Estes são os que a si mesmos se separam, sensuais, que não têm o Espírito.",
    'Mas vós, amados, edificando-vos a vós mesmos sobre a vossa santíssima fé, orando no Espírito Santo,',
    'Conservai-vos a vós mesmos no amor de Deus, esperando a misericórdia de nosso Senhor Jesus Cristo para a vida eterna.',
    'E apiedai-vos de alguns, usando de discernimento;',
    'E salvai alguns com temor, arrebatando-os do fogo, odiando até a túnica manchada da carne.',
    'Ora, àquele que é poderoso para vos guardar de tropeçar, e apresentar-vos irrepreensíveis, com alegria, perante a sua glória,',
    'Ao único Deus sábio, Salvador nosso, seja glória e majestade, domínio e poder, agora, e para todo o sempre. Amém.'
]

const judas1_naa = [
    'Judas, servo de Jesus Cristo e irmão de Tiago, aos que foram chamados, são amados em Deus Pai e guardados em Jesus Cristo.',
    'Que a misericórdia, a paz e o amor lhes sejam multiplicados.',
    'Amados, quando eu me empenhava para escrever-lhes a respeito da salvação que temos em comum, senti que era necessário corresponder-me com vocês, para exortá-los a lutar pela fé que uma vez por todas foi entregue aos santos.',
    'Pois certos indivíduos, cuja sentença de condenação foi promulgada há muito tempo, se infiltraram no meio de vocês sem serem notados. São pessoas ímpias, que transformam em libertinagem a graça do nosso Deus e negam o nosso único Soberano e Senhor, Jesus Cristo.',
    'Embora vocês já estejam cientes de tudo de uma vez por todas, quero lembrar-lhes que Jesus, tendo libertado um povo, tirando-o da terra do Egito, destruiu, depois, os que não creram.',
    'E a anjos — os que não guardaram o seu estado original, mas abandonaram o seu próprio lugar — ele tem guardado sob trevas, em algemas eternas, para o juízo do grande Dia.',
    'Igualmente Sodoma, Gomorra e as cidades vizinhas, que também se entregaram à imoralidade e adotaram práticas contrárias à natureza, foram postas como exemplo do castigo de um fogo eterno.',
    'Do mesmo modo também esses, quais sonhadores, contaminam a carne, rejeitam a autoridade e insultam os gloriosos seres celestiais.',
    'Contudo, nem mesmo o arcanjo Miguel, quando entrou em conflito com o diabo e discutia a respeito do corpo de Moisés, ousou pronunciar sentença difamatória contra ele. Pelo contrário, disse: "O Senhor repreenda você!"',
    'Esses, porém, quanto a tudo o que não entendem, difamam; e, quanto a tudo o que compreendem por instinto natural, como animais irracionais, até nessas coisas se corrompem.',
    'Ai deles! Porque seguiram o mesmo caminho de Caim e, movidos por ganância, caíram no erro de Balaão, e foram destruídos na revolta de Corá.',
    'Esses são como rochas submersas nas festas de fraternidade que vocês fazem, banqueteando-se com vocês sem qualquer receio. São pastores que apascentam a si mesmos; são nuvens sem água impelidas pelos ventos; são árvores que, em plena estação dos frutos, continuam sem frutos, duplamente mortas e arrancadas pela raiz;',
    'são ondas bravias do mar, que espumam as suas próprias sujeiras; são estrelas sem rumo, para as quais está reservada a mais profunda escuridão, para sempre.',
    'Foi a respeito deles que também profetizou Enoque, o sétimo depois de Adão, dizendo: "Eis que o Senhor vem com milhares de seus santos,',
    'para exercer juízo contra todos e para convencer todos os ímpios a respeito de todas as obras ímpias que praticaram e a respeito de todas as palavras insolentes que ímpios pecadores proferiram contra ele."',
    'Esses tais são murmuradores, pessoas descontentes que andam segundo as suas paixões. A sua boca vive falando grandes arrogâncias; adulam os outros por motivos interesseiros.',
    'Mas vocês, meus amados, lembrem-se das palavras anteriormente proferidas pelos apóstolos de nosso Senhor Jesus Cristo.',
    'Eles diziam a vocês: "Nos últimos tempos, haverá zombadores, andando segundo suas ímpias paixões."',
    'São estes os que promovem divisões, seguem os seus próprios instintos e não têm o Espírito.',
    'Mas vocês, meus amados, edificando-se na fé santíssima que vocês têm, orando no Espírito Santo,',
    'mantenham-se no amor de Deus, esperando a misericórdia do nosso Senhor Jesus Cristo, que conduz para a vida eterna.',
    'E tenham compaixão de alguns que estão em dúvida;',
    'salvem outros, arrebatando-os do fogo; quanto a outros, sejam também compassivos, mas com temor, detestando até a roupa contaminada pela carne.',
    'E ao Deus que é poderoso para evitar que vocês tropecem e que pode apresentá-los irrepreensíveis diante da sua glória, com grande alegria,',
    'a este que é o único Deus, nosso Salvador, mediante Jesus Cristo, Senhor nosso, sejam a glória, a majestade, o poder e a autoridade, antes de todas as eras, agora, e por toda a eternidade. Amém!'
]

const main = document.querySelector('main')
const p = document.querySelector('p')

const rute = {
    livro: 'Rute',
    capitulo: [rute1, rute2, rute3, rute4]
}

const joel = {
    livro: 'Joel',
    capitulo: [joel1, joel2, joel3]
}

const amos = {
    livro: 'Amós',
    capitulo: [amos1, amos2, amos3, amos4, amos5, amos6, amos7, amos8, amos9]
}

const obadias = {
    livro: 'Obadias',
    capitulo: [obadias1]
}

const colossenses = {
    livro: 'Colossenses',
    capitulo: [colossenses1, colossenses2, colossenses3, colossenses4]
}

const filemom = {
    livro: 'Filemom',
    capitulo: [filemom1]
}

const hebreus = {
    livro: 'Hebreus',
    capitulo: [hebreus1, hebreus2, hebreus3, hebreus4, hebreus5, hebreus6, hebreus7, hebreus8, hebreus9, hebreus10, hebreus11, hebreus12, hebreus13]
}

const judas = {
    livro: 'Judas',
    capitulo: [judas1]
}

const rute_naa = {
    livro: 'Rute',
    capitulo: [rute1_naa, rute2_naa, rute3_naa, rute4_naa]
}

const joel_naa = {
    livro: 'Joel',
    capitulo: [joel1_naa, joel2_naa, joel3_naa]
}

const amos_naa = {
    livro: 'Amós',
    capitulo: [amos1_naa, amos2_naa, amos3_naa, amos4_naa, amos5_naa, amos6_naa, amos7_naa, amos8_naa, amos9_naa]
}

const obadias_naa = {
    livro: 'Obadias',
    capitulo: [obadias1_naa]
}

const colossenses_naa = {
    livro: 'Colossenses',
    capitulo: [colossenses1_naa, colossenses2_naa, colossenses3_naa, colossenses4_naa]
}

const filemom_naa = {
    livro: 'Filemom',
    capitulo: [filemom1_naa]
}

const hebreus_naa = {
    livro: 'Hebreus',
    capitulo: [hebreus1_naa, hebreus2_naa, hebreus3_naa, hebreus4_naa, hebreus5_naa, hebreus6_naa, hebreus7_naa, hebreus8_naa, hebreus9_naa, hebreus10_naa, hebreus11_naa, hebreus12_naa, hebreus13_naa]
}

const judas_naa = {
    livro: 'Judas',
    capitulo: [judas1_naa]
}

const acf = new Array(rute, joel, amos, obadias, colossenses, filemom, hebreus, judas);
const naa = new Array(rute_naa, joel_naa, amos_naa, obadias_naa, colossenses_naa, filemom_naa, hebreus_naa, judas_naa);

const biblia  = [acf, naa];
let numVersion;
if(localStorage.version){
    numVersion = localStorage.version;
} else {
    numVersion = 0;
}

const div_campos_livros = document.querySelector('.campo_livros');
const div_btn_books = document.querySelector('.btn_books');
const btn_escolha_livro = document.querySelector('#btn_escolha_livro');
const btn_escolha_cap = document.querySelector('#btn_escolha_cap');
const btn_escolha_versao = document.querySelector('#btn_escolha_versao');
const div_content = document.querySelector('#content');

numVersion == 0 ? btn_escolha_versao.innerText = 'ACF' : btn_escolha_versao.innerText = 'NAA';

const showBooks = () => {
    paragrafo.innerHTML = '';
    div_btn_books.classList.toggle('visible');
    location.assign('#topo')
    fieldsBtnsNextPrevious.classList.add('hidden');
    toTop.style.display = 'none';
}

let menu_capitulos = document.querySelector('.capitulos');
let indice;
if(localStorage.book > 0){
    indice = localStorage.book;
} else {
    indice = 0;
}

function abrirLivro(id){
    indice = id;
    menu_capitulos.innerHTML = '';
    gerarBtnCaps(indice);
}

function gerarBtnCaps(indice){
    menu_capitulos.classList.toggle('visible2');
    fieldsBtnsNextPrevious.classList.add('hidden');
    toTop.style.display = 'none';

    let navBar_capitulo = document.createElement('nav');
    navBar_capitulo.classList.add('navBar_capitulo');
    menu_capitulos.appendChild(navBar_capitulo);

    let nomeLivro = document.createElement('h2');

    //comando para escolher qual versão será apresentada
    nomeLivro.innerText = biblia[numVersion][indice].livro;

    nomeLivro.addEventListener('click', () => {
        showBooks();
        menu_capitulos.style.display='none';
    })
    
    navBar_capitulo.appendChild(nomeLivro);
    
    let titulo = document.createElement('h3');
    titulo.innerText = 'CAPÍTULO:';
    
    navBar_capitulo.appendChild(titulo);

    let field_btnChap = document.createElement('section');
    field_btnChap.classList.add('field_btnChap');
    menu_capitulos.appendChild(field_btnChap);

    for(let i = 0; i< biblia[numVersion][indice].capitulo.length; i++){
        let btnCap = document.createElement('button');
        btnCap.innerText = `${i + 1}`;
        btnCap.setAttribute('id', `${i}`);
        btnCap.setAttribute('class', `btnCap`);
        btnCap.setAttribute('onclick', `mostrarCap(${indice}, id)`);
        field_btnChap.appendChild(btnCap);
        menu_capitulos.style = 'display: flex;';
    }
    btn_escolha_livro.innerText = `${biblia[numVersion][indice].livro}`;

}

function caps(){
    menu_capitulos.innerHTML = '';
    paragrafo.innerHTML = '';
    gerarBtnCaps(indice);
}

let id_capitulo = 0;
let paragrafo = document.createElement('p');
const main_p = document.getElementById('main_p');

// Iniciando a página com o texto
if(localStorage.getItem('book') || localStorage.getItem('chapter')){
    mostrarCap(Number(localStorage.book), Number(localStorage.chapter))
    btn_escolha_livro.innerText = `${biblia[numVersion][localStorage.book].livro}`;
} else {
    mostrarCap(0, 0);
}

const small = document.querySelectorAll('small');

function mostrarCap(indice, id){
    menu_capitulos.style.display = 'none';
    fieldsBtnsNextPrevious.classList.remove('hidden');
    toTop.style.display = 'flex';

    div_content.innerHTML = '';
    menu_capitulos.innerHTML = '';
    paragrafo.innerHTML = '';
    id_capitulo = id;
    for(let verso = 0; verso < biblia[numVersion][indice].capitulo[id].length; verso++){
        paragrafo.innerHTML += `    <small>${verso+1}</small> ${biblia[numVersion][indice].capitulo[id][verso]}<br class="brText">`;
        div_content.appendChild(paragrafo);
    }
    btn_escolha_cap.innerText = `${Number(id)+1}`;

    //salvando livro e capitulo
    localStorage.chapter = id;    
    localStorage.book = indice;

    changeNumSmall();

}

function changeNumSmall(){
    const small = document.querySelectorAll('small');

    for(let numSmall of small){
        numSmall.style.fontSize = `calc(${localStorage.fontSize}px * .66)`;
    }
}

const btn_versions = document.querySelector('.btn_versions');

function mostrarVersao(){
    btn_versions.classList.toggle('visible');
    fieldsBtnsNextPrevious.classList.add('hidden');
    toTop.style.display = 'none';
}

const escolherVersao = (id) => {
    numVersion = id;
    mostrarCap(indice, id_capitulo);
    numVersion == 0 ? btn_escolha_versao.innerText = 'ACF' : btn_escolha_versao.innerText = 'NAA';
    btn_escolha_livro.innerText = `${biblia[numVersion][indice].livro}`;
    mostrarVersao();
    //salvando a versão
    localStorage.setItem('version', numVersion);

    fieldsBtnsNextPrevious.classList.remove('hidden');
    toTop.style.display = 'flex';

}

const link_login = document.getElementById('link_login');
const h3_nameuser = document.getElementById('h3_nameuser');
const span_email = document.getElementById('span_email');
const link_logout = document.getElementById('link_logout');

if(localStorage.getItem('email')){
    span_email.innerText = localStorage.getItem('email');
    link_login.setAttribute('href', 'Assets/login_page/data_logoutPage.html');
    link_login.classList.add('login');
    h3_nameuser.innerText = localStorage.nome;
    link_logout.classList.add('able');
} else {
    h3_nameuser.innerText = 'Fazer Login';
    span_email.innerText = 'Criar uma Conta';
}

const popup_areaLogoutMenu = document.getElementById('popup_areaLogoutMenu');
const popup_logoutMenu = document.querySelector('.popup_logoutMenu');
const popupMesssageLogout = document.getElementById('popupMesssageLogout');
const buttonsOnOff = document.querySelector('.buttonsOnOff');
const btn_yes = document.getElementById('btn_yes');

function logout(){
    popup_areaLogoutMenu.classList.add('show');
    hamburguer.classList.add('hidden');
}

const cancelar = ()=>{
    popup_areaLogoutMenu.classList.remove('show');
    hamburguer.classList.remove('hidden')
}

const confirmaLogout= ()=>{
    popupMesssageLogout.textContent = 'Deslogado';
    buttonsOnOff.style.display = 'none';
    popup_logoutMenu.classList.add('final');
    btn_yes.classList.add('view');
}

function yes(){
    localStorage.removeItem('email');
    location.assign('index.html');
}

document.addEventListener('click', (e)=>{
    if(e.target == popup_areaLogoutMenu && !btn_yes.classList.contains('view')){
        cancelar();
    }
})

const input = document.getElementById('input');
const theme = document.querySelector('html');
const header = document.querySelector('header');
const book = document.querySelectorAll('.book');
const bar = document.querySelectorAll('.bar');
const dot = document.querySelectorAll('.dot');
const menuDots = document.querySelector('.menuDots');
const containerPopup = document.querySelectorAll('.containerPopup');

const h3popup = document.getElementsByClassName('h3popup');
const btnConfirmThema = document.querySelectorAll('.btnConfirmThema');
const span_fontSize = document.getElementById('spanRange');

if(!localStorage.whiteTheme){
    localStorage.setItem('whiteTheme', 'disabled');
}

let whiteTheme = localStorage.getItem('whiteTheme');

const enableWhiteTheme = () => {
    theme.classList.add('white-mode-theme');
    header.classList.add('white-mode-theme');
    paragrafo.classList.add('white-mode-theme');
    for(let button of book){
        button.classList.add('white-mode-btns_book');
    }
    for(let span of bar){
        span.classList.add('white-mode');
    }
    for(let span of dot){
        span.classList.add('white-mode');
    }
    hamburguer.classList.add('white-mode');
    dots.classList.add('white-mode');
    menuDots.classList.add('white-mode');

    for(let popup of containerPopup){
        popup.classList.add('white-mode');
    }

    for(let h3 of h3popup){
        h3.classList.add('white-mode');
    }

    for(let btn of btnConfirmThema){
        btn.classList.add('white-mode');
    }

    span_fontSize.classList.add('white-mode');

    input.checked = whiteTheme;    

    input.classList.remove('whiteTheme-input');
    localStorage.setItem('whiteTheme', 'enabled');
}

const disableWhiteTheme = () => {
    theme.classList.remove('white-mode-theme');
    header.classList.remove('white-mode-theme');
    paragrafo.classList.remove('white-mode-theme');
    for(let button of book){
        button.classList.remove('white-mode-btns_book');
    }
    for(let span of bar){
        span.classList.remove('white-mode');
    }
    for(let span of dot){
        span.classList.remove('white-mode');
    }
    hamburguer.classList.remove('white-mode');
    dots.classList.remove('white-mode');
    menuDots.classList.remove('white-mode');

    for(let popup of containerPopup){
        popup.classList.remove('white-mode');
    }

    for(let h3 of h3popup){
        h3.classList.remove('white-mode');
    }

    for(let btn of btnConfirmThema){
        btn.classList.remove('white-mode');
    }
    span_fontSize.classList.remove('white-mode');

    input.classList.add('whiteTheme-input');
    localStorage.setItem('whiteTheme', 'disabled');

}

if(whiteTheme === 'enabled'){
    enableWhiteTheme();
}

const saveTheme = () => {
    input.checked === true ? localStorage.setItem('whiteTheme', 'enabled') : localStorage.setItem('whiteTheme', 'disabled');
    whiteTheme = localStorage.getItem('whiteTheme');
    if(whiteTheme === 'disabled'){
        disableWhiteTheme();
    } else {
        enableWhiteTheme();
    }
    popupBkgColor.classList.add('closed');
    toTop.removeAttribute('disabled');
    ableNextPrevious();
}

const dontSaveTheme = () => {
    if(whiteTheme === 'disabled'){
        input.checked = false;
    } else {
        input.checked = true;        
    }
    popupBkgColor.classList.add('closed');
    toTop.removeAttribute('disabled');
    ableNextPrevious();
}

let spanRangeBefore = spanRange.textContent;

rangeFontSize.oninput = function(){
    spanRange.textContent = this.value;
}

confirmTheme.addEventListener('click', () => {
    paragrafo.style.fontSize = `${rangeFontSize.value}px`;

    spanRangeBefore = rangeFontSize.value;
    localStorage.fontSize = spanRangeBefore;
    popupAreaConfig.classList.add('closed');
    changeNumSmall();

    localStorage.fontSize > 50 ? main_p.classList.add('greatFontSize') : main_p.classList.remove('greatFontSize');
    toTop.removeAttribute('disabled');
    ableNextPrevious();
})

if(localStorage.getItem('fontSize')){
    paragrafo.style.fontSize = `${localStorage.getItem('fontSize')}px`;
    spanRangeBefore = localStorage.fontSize;
    spanRange.textContent = localStorage.fontSize;
    rangeFontSize.value = localStorage.fontSize;
}

cancelTheme.addEventListener('click', () => {
    popupAreaConfig.classList.add('closed');
    setTimeout(() => {
        spanRange.textContent = spanRangeBefore;
        rangeFontSize.value = spanRangeBefore;
    }, 1000);
    toTop.removeAttribute('disabled');
    ableNextPrevious();
})

configLeitura.onclick = () =>{
    popupAreaConfig.classList.add('opened');
    popupAreaConfig.classList.remove('closed');
    toTop.setAttribute('disabled', '');
    disabledNextPrevious();
}

configBkgColor.addEventListener('click', () => {
    popupBkgColor.classList.add('opened');
    popupBkgColor.classList.remove('closed');
    toTop.setAttribute('disabled', '');
    disabledNextPrevious();
})

document.addEventListener('click', (e) => {
    for(let menu of containerPopup){
        if(e.target == menu.parentNode){
            popupAreaConfig.classList.add('closed');
            cancelTheme.click();
            popupBkgColor.classList.add('closed');
            dontSaveTheme();
        }
    }
})

function previous(){
    if(localStorage.chapter > 0){
        mostrarCap(indice, Number(localStorage.chapter) - 1);
    } else if(indice > 0) {
        indice--;
        localStorage.chapter = (biblia[numVersion][indice].capitulo.length - 1);
        mostrarCap(indice, Number(localStorage.chapter));
    } else {
        indice = biblia[numVersion].length - 1;
        localStorage.chapter = (biblia[numVersion][indice].capitulo.length - 1);
        mostrarCap(indice, Number(localStorage.chapter));
    }
    btn_escolha_livro.innerText = `${biblia[numVersion][localStorage.book].livro}`;
    document.documentElement.style.scrollBehavior = 'auto';
    location.assign('#topo')
}

function next(){
    if(localStorage.chapter < biblia[numVersion][indice].capitulo.length - 1){
        mostrarCap(indice, Number(localStorage.chapter) + 1);
    } else if(indice < biblia[numVersion].length - 1) {
        indice++;
        localStorage.chapter = 0;
        mostrarCap(indice, Number(localStorage.chapter));
    } else {
        indice = 0;
        localStorage.chapter = 0;
        mostrarCap(indice, Number(localStorage.chapter));
    }
    btn_escolha_livro.innerText = `${biblia[numVersion][localStorage.book].livro}`;
    document.documentElement.style.scrollBehavior = 'auto';
    location.assign('#topo')
}

window.onscroll = () => scrollFunction();

function scrollFunction(){
    if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30){
        toTop.classList.add('showToTop');
        document.documentElement.style.scrollBehavior = 'smooth';
    } else {
        toTop.classList.remove('showToTop');
        document.documentElement.style.scrollBehavior = 'auto';
    }
}

function topFuntion(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const btnNextPrevious = document.querySelectorAll('.btnNextPrevious')

function disabledNextPrevious(){
    for(let btn of btnNextPrevious){
        btn.setAttribute('disabled', '');
    }
}

function ableNextPrevious(){
    for(let btn of btnNextPrevious){
        btn.removeAttribute('disabled');
    }
}