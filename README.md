# SOLID_SRP_UnitTest
Projeto com demonstração de UnitTest, SOLID e DDD


Tarefa do dia

Cenário: Você é um consultor que atua no desenvolvimento de Software e seu cliente, uma universidade, pediu o desenvolvimento de uma aplicação Web Responsiva que tenha as seguintes características:

a) Como a universidade possui uma equipe de TI, eles ficarão com o código fonte para futuras implementações e querem garantia de um código que siga os principais padrões de projeto, com baixo acoplamento, fortemente orientado a Testes Unitários, que sigam os princípios SOLID e DDD e que tenha uma arquitetura que facilite manutenções futuras. 

b) Dentro das funcionalidades previstas estão o desenvolvimento de uma API que possibilite o consumo por qualquer dispositivo seja móvel ou não. (DEIXAR PARA SER FEITO DEPOIS)

Tarefa 1: 

a) Implementar/Desenvolver a arquitetura inicial do projeto seguindo o primeiro princípio SOLID: SRP - Single Responsibility Principle.

b) Deverá ser implementado uma classe de domínio chamada "Aluno", em um projeto separado chamado "DOMAIN", que deverá ter no mínimo as seguintes propriedades: Id, Nome, Email, DataNascimento, RA. 
b1) O sistema também deve possibilitar o envio de mensagens para um aluno, tendo como parâmetro de entrada seu RA e EMAIL.
b2) A classe "Aluno" deverá ter um método IsValid() que deverá retornar boolean para CPF (tamanho = 11), maior de 18 anos e RA (tamanho = 6);

c) Criar um projeto de Testes de Unidade e fazer os seguintes testes:
-> Para um aluno estar válido ele deverá:
 - ter mais de 18 anos 
 - um RA válido(a quantidade de caracteres maior ou igual a 6) 
 - CPF válido (a quantidade de caracteres iggual a 11)
 - email deverá conter '@'

Tarefa 2:
Criar mais 2 projetos:
1. Projeto Web, Template Empty e Folders para API
2. Projeto Web, Template Empty e Folders para MVC

No Projeto de API vamos criar um controller WebApi para prover acesso a algumas funcionalidades de aluno:
Exemplo: https://github.com/fpnav/apiteste/blob/master/ApiTeste2/Controllers/ProductsController.cs

Método Get -> retorna todos os alunos da lista

public class AlunoController : ApiController
    {

        static List<Aluno> _alunos = new List<Aluno>
        {
            new Aluno { Id = 1, Nome= "Asdrubal Freitas", Cpf= "12345678901", DataNascimento= new DateTime(1975, 01,01),
                Ra = 123456, Email = "asd@teste.com"},
            new Aluno { Id = 2, Nome= "Ascleidson Morais", Cpf= "111222333", DataNascimento= new DateTime(2005, 02,01),
                Ra = 996633, Email = "asc@teste.com"},
            new Aluno { Id = 3, Nome= "Alsberto Firme", Cpf= "12345612301", DataNascimento= new DateTime(2010, 03,01),
                Ra = 112233, Email = "alsb@teste.com"}
        };

        public IHttpActionResult Get()
        {
            return Ok(_alunos);
        }
    }
    
 Vamos fazer um teste rodando a aplicação, porém agora temos várias aplicações que deverão rodar em conjunto, por exemplo a API e o projeto WEB devem startar em conjunto. Para isso, devemos clicar na Solution e em "Set StartUp Projects" e escolher os 2 projetos que deverão ser startados.
 
 Depois faremos um teste dando um F5 para debugarmos localmente a aplicação, onde deverão abrir no browser 2 páginas representando os 2 projetos que foram rodados, api e web. (reparem que a página em si aparece como um erro, na verdade é que não há uma página index que seja encontrada em nenhum dos projetos, mas estão funcionando).
 
 
 
 

