let nomePersonagem = "Alan ";
let xpPersonagem = 5000;
let nivelDoHeroi;

switch (true) {
    case xpPersonagem < 1000:
        nivelDoHeroi = "Ferro";
        break;
    case xpPersonagem >= 1001 && xpPersonagem <= 2000:
        nivelDoHeroi = "Bronze";
        break;
    case xpPersonagem >= 2001 && xpPersonagem <= 5000:
        nivelDoHeroi = "Prata";
        break;
    case xpPersonagem >= 5001 && xpPersonagem <= 7000:
        nivelDoHeroi = "Ouro";
        break;
    case xpPersonagem >= 7001 && xpPersonagem <= 8000:
        nivelDoHeroi = "Platina";
        break;
    case xpPersonagem >= 8001 && xpPersonagem <= 9000:
        nivelDoHeroi = "Ascendente";
        break;
    case xpPersonagem >= 9001 && xpPersonagem <= 10000:
        nivelDoHeroi = "Imortal";
        break;
    default:
        nivelDoHeroi = "Radiante";
}

console.log(nomePersonagem + "XP: " + xpPersonagem + " está no nível de " + nivelDoHeroi);
