import { NextResponse } from "next/server";

export const listaDeLols = [
    {
        id: 1,
        produto: "LOL Surprise 7.07 Queen Bee",
        serie: "70.7",
        foto: "https://img.br.my-best.com/product_images/fa2122f949010bd260ab21ab18807951.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=240&h=240&fit=fill&fill=solid&fill-color=FFFFFF&s=d7e3e59a2b347ab04c5458605079faff",
        preco: 269.00,
        tema:"Não",
        tipo:"Individual",
        decricao: "Uma das LOL Mais Amadas. A LOL Queen Bee surgiu originalmente na série Glitter. Foi um sucesso tão grande, que voltou em uma edição de aniversário, A LOL 7.07 Series, uma edição especial, que traz os 4 maiores sucessos da LOL Nessa série, é possível escolher a boneca, que vem estampada na esfera.A série também disponibiliza as bonecas MC Swag, Neon QT e Diva, mas a Queen Bee é sem dúvidas a mais popular. Com esfera feita em papel ecológico, traz 7 surpresas: mensagem secreta, folha de adesivos colecionáveis e uma surpresa aquática, além de roupas e calçados.Nessa série, as bonecas também possuem funções extras, e podem chorar, cuspir ou tilintar. Infelizmente, a série 7.07 não foi lançada no Brasil."
    },
    {
        id: 2,
        produto: "LOL Hair Goals",
        serie: "Hair Goals",
        foto: "https://img.br.my-best.com/product_images/40d19400e05408817aa8451c815bbe08.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=240&h=240&fit=fill&fill=solid&fill-color=FFFFFF&s=ddc8eb35661bfb75d88485ad807bb4d9",
        preco: 134.99,
        tema:"Cabelo",
        tipo:"Individual",
        descricao: "Com Cabelo de Verdade para Pentear. A linha LOL Hair Goals é uma das mais buscadas por possuir um grande diferencial: é a única série de bonequinhas com cabelos de verdade. Elas vêm em uma cápsula com formato de spray para cabelos e acompanham uma escova para pentear.Ao todo são 15 surpresas, incluindo copinho ou garrafa, acessórios de cabelo, espelho, roupinha e calçados, entre outros. A abertura em camadas revela uma mensagem secreta com uma dica sobre qual modelo de boneca contém o kit.A LOL vem envolta em capa de borracha, que deve ser rasgada, aumentando a diversão. Com mais de 600 avaliações positivas na Amazon, a Hair Goals é quase uma unanimidade. A maioria dos compradores elogia a qualidade e beleza dos itens."
    },
    {
        id: 3,
        produto: "LOL Surprise Bigger Surprise",
        serie: "Variada",
        foto: "https://img.br.my-best.com/product_images/f3bf8ec828513239bcae9f4a569e329b.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=240&h=240&fit=fill&fill=solid&fill-color=FFFFFF&s=3fc483b4cd81766f4ac5faa6f504c555",
        preco: 410.91,
        tema:"Variado",
        tipo:"Kit",
        descricao: "Missão Cheia de Surpresas. Acompanhe a LOL na missão cheia de surpresas para encontrar seus pets perdidos! O pacote contém 1 lupa, 6 adesivos e 4 mensagens secretas, o que já rende bastante diversão. Mas, isso não é tudo: o kit inclui 26 acessórios para serem desempacotados, além de 6 cápsulas para expor as LOL.A opção também é satisfatória em relação à quantidade de bonecas. O kit oferece 2 LOL Surprise, 1 LOL LIL Sister com chaveiro e 1 lindo LOL Pet que já vem com o recipiente de areia. Com o Bigger Surprise, você adquire de uma só vez várias bonecas da turminha.Ao todo são mais de 60 surpresas, em uma maleta supercharmosa, que depois pode ser utilizada para guardar toda a coleção de LOL da criança. Em avaliações de e-commerces, este kit é denominado como perfeito, principalmente pelo tamanho e variedade de itens. As crianças amaram!"
    },
    {
        id: 4,
        produto: "LOL Color Change LIL Sisters",
        serie: "LIL Sisters",
        foto: "https://img.br.my-best.com/product_images/05a65421c1f71c0698c9a3aa3e80ffba.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=240&h=240&fit=fill&fill=solid&fill-color=FFFFFF&s=9ec1f0d718323dcfc4a21751b3b757b7",
        preco: 65.24,
        tema:"Não",
        tipo:"Individual",
        descricao: "A Linha de Bebês da LOL. A LIL Sisters é a linha de bebês LOL. Elas são ainda menores, sempre vestidas com fraldinhas. São essenciais para quem coleciona as bonecas, afinal trazem acessórios e bonequinhas que mudam de cor ou revelam detalhes quando expostos a temperaturas mais baixas.Cada esfera acompanha 5 surpresas, sendo uma boneca e mais 4 acessórios, como bolsas, sapatos, óculos e outros. Na primeira camada, um bilhete com uma mensagem secreta, dá uma dica de quais objetos estão na esfera. Para ver a dica, basta passar o dedo úmido no papel.Com cerca de 300 avaliações positivas na Amazon, a linha LIL Sisters é elogiada pela qualidade e pela mudança de cor de alguns detalhes da boneca, sendo o diferencial da linha. O tamanho das bonecas de cerca de 4 cm, também chama a atenção das crianças."
    },
    {
        id: 5,
        produto: "LOL Sparkle Series",
        serie: "Sparkles",
        foto: "https://img.br.my-best.com/product_images/4a6d3b2dff3dd6d396fedb672f7eea1a.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=240&h=240&fit=fill&fill=solid&fill-color=FFFFFF&s=7c2dc15bc58d6ecf34540b23b045c4e7",
        preco: 99.97,
        tema:"Glitter",
        tipo:"Individual",
        descricao: "LOL Versão Glitter para Encantar a Criançada. Uma das séries mais populares da linha, a Sparkes Series traz a versão glitter de algumas bonecas LOL. Cada esfera traz 7 surpresas, incluindo uma boneca, uma mensagem secreta, adesivos temáticos, um copinho com tampa, roupinha e outros acessórios.Ao todo, a Sparkle Series é composta por 12 modelos diferentes de bonequinhas, incluindo um menino com moicano azul supercharmoso. Como toda esfera, a abertura é feita por camadas, e já na primeira é possível encontrar a mensagem secreta.A série Sparkles é um grande sucesso da LOL e coleciona avaliações positivas nos e-commerces. A maioria é de pais satisfeitos com a alegria dos filhos ao receber o presente. O brilho presente nos cabelos, roupas e acessórios também é bastante elogiado."
    },
    {
        id: 6,
        produto: "LOL Surprise Glitter Globe Winter Disco",
        serie: "Glitter Globe",
        foto: "https://img.br.my-best.com/product_images/61d927288848ab50d1e917468232e33d.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=240&h=240&fit=fill&fill=solid&fill-color=FFFFFF&s=0a66a51beb39ed4828a1ebb2eaa13a82",
        preco: 76.95,
        tema:"Inverno",
        tipo:"Individual",
        descricao:"Brilho Surpreendente na Bonequinha. Essa opção conta com 8 surpresas na embalagem, mas a maior delas está no final. Cada uma dessas bonecas LOL vem com um copinho de água. Dê água de verdade a ela e veja se revelar um cabelo com brilho de glitter! Isso sem contar que ela ainda pode mudar de cor ou soltar um jato pela boca.Enquanto abre as embalagens, a criança pode seguir as instruções da mensagem secreta e do guia do colecionador. Ao terminar de abrir o brinquedo, ela descobre qual das 12 opções de boneca LOL estava oculta no pacote. Bem divertido, não é? Não à toa, as crianças amam ganhar essa boneca.O mais legal é que o copinho combina com as roupinhas. Ao adicionar água, a esfera vira um incrível globo de neve para colocar a LOL dentro. Em avaliações de e-commerces, a Glitter Globe é muito elogiada pela beleza e acessórios."
    },
    {
        id: 7,
        produto: "LOL OMG Lights Series",
        serie: "OMG Lights Series",
        foto: "https://img.br.my-best.com/product_images/e7565ac8e708269b68bad4f265053327.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=240&h=240&fit=fill&fill=solid&fill-color=FFFFFF&s=4d7c689e8f7c1bdccf8776ed1652ee0d",
        preco: 395.00,
        tema:"Brilho",
        tipo:"Individual",
        descricao:"A Boneca LOL que Brilha no Escuro. Para quem prefere uma boneca LOL grande, a linha OMG é perfeita. Elas têm cerca de 30 cm de altura, e acompanham 15 surpresas. Perfeitas para colecionadores, essa é a popular série da LOL que brilha no escuro.A série OMG Lights Series é composta por 3 modelos. Nos links, temos um dos mais famosos da série, a boneca Angles, supercolorida e irreverente. Para conhecer as cores de sua boneca basta puxar a frente da caixa e ver a ilustração ganhando cores como mágica.No interior, surpresas como bijuterias, roupas e outros acessórios. Entre eles, uma lanterna de luz negra. Apague as luzes, acenda a lanterna e veja todos os detalhes brilhando e mudando de cor. Em comentários de e-commerces, o produto é muito elogiado pela beleza e qualidade."
    },
    {
        id: 8,
        produto: "LOL Present Surprise",
        serie: "Present Surprise",
        foto: "https://img.br.my-best.com/product_images/6164110b293c2123fbb7efc44087cde9.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=abcf6f01b029ccf921de33d90a282e17",
        preco: 104.99,
        tema:"Não",
        tipo:"Individual",
        descricao:"Com Embalagem, Laço e Tag para Presentear. A LOL Present Surprise é uma excelente opção de presente para colecionadores. Isso porque o kit já vem em uma sacolinha de presente, com laço e tag com espaço para colocar o nome do presenteado. São 12 modelos diferentes para colecionar.Cada kit contém 8 surpresas, incluindo uma bonequinha LOL, uma mensagem misteriosa e uma caixinha de presente estampada e super colorida. O kit também traz diferentes acessórios, como roupas, calçados, óculos e fones de ouvidos, entre outros.Com selo de Escolha da Amazon, o Present Surprise tem excelente custo-benefício, e boas avaliações relativas ao detalhamento e criatividade das surpresas, que incluem até um tripé com luneta em um dos modelos. Gostou? Então acesse um dos links e adquira a sua!"
    },
    {
        id: 9,
        produto: "LOL Surprise Pop-Up Store",
        serie: "Surprise Pop-Up Store",
        foto: "https://img.br.my-best.com/product_images/04b7bbe19abf1f21b250c567258f109e.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=2804eb08bd24f50df4063226665991b2",
        preco: 375.00,
        tema:"Variado",
        tipo:"Kit",
        descricao:"Excelente para Colecionadores de LOL. O Pop Up Store é um estojo 3 em 1: uma de suas partes internas possui pequenos ambientes decorados; outra, é um cenário mais amplo para as brincadeiras com as bonecas. E, por fim, a terceira parte é a montagem do estojo em um expositor com 4 níveis para organizar todas as suas LOL!Cada nível ou degrau comporta 9 LOL. O kit tem capacidade para organiza 36 bonecas ao todo: um expositor perfeito para quem quer organizar suas bonecas LOL de modo atraente. Também é um ótimo incentivo para quem quer começar uma coleção!Com 50 surpresas, entre mensagens, adesivos, e acessórios, a LOL Pop Up Stores, assim como outros kits do ranking, inclui uma boneca exclusiva. Uma excelente opção para colecionadores com muitas peças para organizar e que não resistem a modelos exclusivos."
    },
    {
        id: 10,
        produto: "LOL Under Wraps Confetti",
        serie: "Under Wraps Confetti",
        foto: "https://img.br.my-best.com/product_images/bc06ceef483eb49eedbf4fc73068947c.jpg?ixlib=rails-4.3.1&q=70&lossless=0&w=800&h=800&fit=clip&s=ab08b3553c385f1fc93dc75269070cca",
        preco: 174.90,
        tema:"Não",
        tipo:"Individual",
        descricao:"Com Explosões de Confete. A LOL Under Wraps é um kit em formato cápsula com 15 surpresas, incluindo a boneca. Na série Confete, cada camada traz pequenas explosões de confetes, que acompanham as surpresas embaladas individualmente. São 12 kits para colecionar.Além de uma bonequinha, a cápsula, que também serve como expositor, traz adesivos, mensagem, roupas, calçados, copo e acessórios como bolsas, óculos e mochila, entre outros. As bonecas ainda possuem funções como beber, chorar, cuspir ou mudar de cor.Com bom custo-benefício pelo número grande surpresas, a Under Wraps é uma das linhas mais buscadas da LOL. Em avaliações de e-commerces, o produto é muito elogiado pela qualidade. Alguns usuários relatam dificuldades em abrir as camadas, compostas por botões e puxadores."
    }
];

export async function GET(){
    return NextResponse.json(listaDeLols)
}