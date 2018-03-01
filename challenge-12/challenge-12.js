(function() {
	/*
	Envolva todo o conteúdo desse arquivo em uma IIFE.
	*/

	/*
	Crie um objeto chamado `person`, com as propriedades:
			`name`: String
			`lastname`: String
			`age`: Number
	Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
	de valor para cada propriedade.
	*/
	var person = {
		name: 'Gabriel',
		lastname: 'Pereira',
		age: 22
	};

	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	console.log( 'Propriedades de "person":', Object.keys(person));

	/*
	Crie um array vazio chamado `books`.
	*/
	var books = [];

	/*
	Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
	seguintes propriedades:
	`name`: String
	`pages`: Number
	*/
	books.push(
		{
			name: 'Livro 1',
			pages: 550
		},

		{
			name: 'Livro 2',
			pages: 937
		},

		{
			name: 'Livro 3',
			pages: 487
		}
	);

	/*
	Mostre no console todos os livros.
	*/
	console.log( '\nLista de livros:', books);

	/*
	Remova o último livro, e mostre-o no console.
	*/
	console.log( '\nLivro que está sendo removido:', books.pop());

	/*
	Mostre no console os livros restantes.
	*/
	console.log( '\nAgora sobraram somente os livros:', books);

	/*
	Converta os objetos que ficaram em `books` para strings.
	*/
	books = JSON.stringify(books);

	/*
	Mostre os livros nesse formato no console:
	*/
	console.log( '\nLivros em formato string:', books);

	/*
	Converta os livros novamente para objeto.
	*/
	books = JSON.parse(books);

	console.log( '\nAgora os livros são objetos novamente:', books);

	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
			"[PROPRIEDADE]: [VALOR]"
	*/
	for (var prop in books) {
		var property = Object.keys(books[prop]);

		for (var content in property) {
			current = property[content];

			console.log(current + ': ' + books[prop][current]);
		}
	}

	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	var arrayWithPerson = [];

	for (var prop in person) {
		var value = Object.keys(person[prop]);

		for (var i in value) {
			current = value[i];

			arrayWithPerson.push(person[prop][current])
		}
	}

	var myName = arrayWithPerson;

	console.log( '\nMeu nome é:' );

	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
	console.log(myName.join(''));

	console.log( '\nMeu nome invertido é:' );

	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	console.log(myName.reverse().join(''));

	console.log( '\nAgora em ordem alfabética:' );
	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	console.log(myName.sort().join(''));
}());
