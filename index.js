class Animal {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  emitirSom() {
    console.log(`${this.nome} está emitindo um som.`);
  }
}

class Cachorro extends Animal {
  constructor(nome, idade, raca) {
    super(nome, idade);
    this.raca = raca;
  }

  emitirSom() {
    console.log(`${this.nome} está latindo.`);
  }
}

class Gato extends Animal {
  constructor(nome, idade, cor) {
    super(nome, idade);
    this.cor = cor;
  }

  emitirSom() {
    console.log(`${this.nome} está miando.`);
  }
}
const cachorro1 = new Cachorro('Rex', 5, 'Labrador');
const gato1 = new Gato('Mingau', 2, 'Branco');
const cachorro2 = new Cachorro('Bolt', 3, 'Golden Retriever');

cachorro1.emitirSom(); 
gato1.emitirSom(); 
cachorro2.emitirSom(); 

console.log(cachorro1);
console.log(cachorro2);
console.log(gato1);
