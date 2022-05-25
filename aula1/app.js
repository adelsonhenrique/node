const nome = 'Henrique';

const sobrenome = 'Fernandes';

const falaNome = () => {
    console.log(nome, sobrenome);
};

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falanome = falanome;


exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar';