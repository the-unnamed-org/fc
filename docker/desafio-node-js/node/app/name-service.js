const names = [
    'Goku', 
    'Vegeta', 
    'Kuririn', 
    'Piccolo', 
    'Freeza', 
    'Trunks', 
    'Yamcha', 
    'Tenshinhan',
    'Jiraya',
    'Megazord',
    'Justin Bieber',
    'Teceu'
]

const surNames = [
    'Malhado', 
    'Saudável', 
    'Suadinho', 
    'Esquentado', 
    'Mão de Vaca', 
    'Atirado', 
    'Trovador', 
    'Bom Amigo', 
    'Sem Controle',
    'Berranteiro',
    'Cowboy',
    'Trincado',
    'Bom de Copo',
    'Matador de Onça',
    'Atrevido'
]

const getRandom = () => {
    const name = names[Math.floor(Math.random() * names.length)]
    const surName = surNames[Math.floor(Math.random() * surNames.length)]
    return `${name} ${surName}`
}

exports.getRandom = getRandom