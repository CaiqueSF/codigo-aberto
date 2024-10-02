let listaDados = [
    {
        linguagem: "Python - A Versatilidade em um Código Elegante",
        descricao: "Python é uma linguagem fácil de aprender, ideal para iniciantes e projetos complexos como inteligência artificial. Com ela, você pode automatizar tarefas, analisar dados e criar sistemas inteligentes. Sua sintaxe clara e o grande número de bibliotecas disponíveis tornam a programação em Python produtiva e agradável.",
        link: "https://www.python.org/",
        tags: "estatística análise de dados data science machine learning"
    },
    {
        linguagem: "C# - A Potência da Plataforma .NET",
        descricao: "C# é perfeito para desenvolver aplicações robustas, especialmente para Windows e jogos. Utilizando a plataforma .NET, você pode criar desde apps simples até jogos avançados. É uma linguagem muito usada no desenvolvimento profissional.",
        link: "https://learn.microsoft.com/pt-br/dotnet/csharp/",
        tags: ".net asp.net microsoft"
    },
    {
        linguagem: "JavaScript - A Linguagem do Navegador e Além",
        descricao: "JavaScript é essencial para criar sites dinâmicos e interativos. Além do front-end, com Node.js, você também pode criar servidores e aplicações completas. Ferramentas como React e Angular facilitam o desenvolvimento de interfaces modernas.",
        link: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
        tags: "js"
    },
    {
        linguagem: "Java - A Linguagem do Mundo Corporativo",
        descricao: "Java é muito utilizada em grandes empresas, no desenvolvimento de apps Android e sistemas distribuídos. Sua segurança e portabilidade fazem dela uma excelente escolha para projetos de grande escala.",
        link: "https://www.oracle.com/java/",
        tags: ""
    },
    {
        linguagem: "C++ - A Linguagem de Alto Desempenho",
        descricao: "C++ é usada para desenvolvimento de sistemas, jogos e software de engenharia. Oferece controle detalhado sobre o hardware e é ideal para aplicações que exigem máximo desempenho.",
        link: "https://isocpp.org/",
        tags: "jogos"
    },
    {
        linguagem: "Go - A Linguagem Simples e Eficiente",
        descricao: "Go, criada pelo Google, é uma linguagem rápida e eficiente, ideal para aplicações em nuvem e sistemas distribuídos. Sua simplicidade facilita a construção de serviços web escaláveis.",
        link: "https://go.dev/",
        tags: "google"
    },
    {
        linguagem: "Ruby - A Linguagem da Programação Feliz",
        descricao: "Ruby é uma linguagem com sintaxe elegante, usada principalmente no desenvolvimento web com Ruby on Rails. É conhecida por tornar o processo de programação mais simples e prazeroso.",
        link: "https://www.ruby-lang.org/",
        tags: "rails"
    },
    {
        linguagem: "Swift - A Linguagem para iOS e macOS",
        descricao: "Swift, criada pela Apple, é a principal linguagem para o desenvolvimento de apps em iOS e macOS. É conhecida por sua segurança, alta performance e excelente suporte para desenvolvimento de aplicativos Apple.",
        link: "https://swift.org/",
        tags: "ios macos watchOS tvOS"
    },
    {
        linguagem: "PHP - A Linguagem do WordPress",
        descricao: "PHP é amplamente utilizado em desenvolvimento web, especialmente em sistemas de gerenciamento de conteúdo como WordPress. É uma linguagem server-side fácil de integrar com bancos de dados.",
        link: "https://www.php.net/",
        tags: "wordpress"
    },
    {
        linguagem: "Rust - A Linguagem Segura e Concorrente",
        descricao: "Rust é focada em segurança e concorrência. Ideal para projetos de alta performance que exigem confiabilidade e segurança, como sistemas operacionais e aplicações críticas.",
        link: "https://www.rust-lang.org/",
        tags: ""
    },
    {
        linguagem: "Kotlin - A Linguagem Moderna para o Desenvolvimento Android",
        descricao: "Kotlin é a linguagem preferida para desenvolvimento Android, conhecida por sua concisão e interoperabilidade com Java. Facilita o desenvolvimento de apps modernos e eficientes.",
        link: "https://kotlinlang.org/",
        tags: "android"
    },
    {
        linguagem: "TypeScript - JavaScript com Tipagem Estática",
        descricao: "TypeScript melhora o desenvolvimento em JavaScript ao adicionar tipagem estática, permitindo mais segurança e melhor escalabilidade para grandes projetos.",
        link: "https://www.typescriptlang.org/",
        tags: "ts"
    },
    {
        linguagem: "Scala - A Linguagem Funcional para a JVM",
        descricao: "Scala combina programação funcional e orientada a objetos, sendo executada na JVM. É ideal para aplicações que exigem alta escalabilidade e desempenho.",
        link: "https://www.scala-lang.org/",
        tags: "jvm"
    },
    {
        linguagem: "R - Para Estatística e Análise de Dados",
        descricao: "R é amplamente utilizado em estatística e data science, sendo uma linguagem poderosa para análise de dados e visualização. Ideal para cientistas de dados e pesquisadores.",
        link: "https://www.r-project.org/",
        tags: "estatística análise de dados data science machine learning"
    },
    {
        linguagem: "Perl - A Linguagem da Ferramenta",
        descricao: "Perl é conhecida por sua flexibilidade, ideal para automação de tarefas e processamento de texto. Frequentemente usada para scripts rápidos e manipulação de arquivos.",
        link: "https://www.perl.org/",
        tags: ""
    },
    {
        linguagem: "Lua - A Linguagem Leve e Embutível",
        descricao: "Lua é uma linguagem leve usada em desenvolvimento de jogos e sistemas embarcados. Sua simplicidade e eficiência a tornam uma ótima escolha para scripts embutidos.",
        link: "https://www.lua.org/",
        tags: "jogos embarcados"
    },
    {
        linguagem: "Haskell - A Linguagem Funcional Pura",
        descricao: "Haskell é uma linguagem funcional pura, com um sistema de tipos forte. É ideal para projetos que exigem alta confiabilidade e manutenção de código claro e correto.",
        link: "https://www.haskell.org/",
        tags: ""
    },
    {
        linguagem: "Dart - A Linguagem para Flutter",
        descricao: "Dart é usada principalmente com o Flutter para criar aplicativos móveis e web. Desenvolvida pelo Google, combina simplicidade com performance para construção de apps multiplataforma.",
        link: "https://dart.dev/",
        tags: "google flutter"
    },
    {
        linguagem: "Julia - Para Ciência de Dados e Computação Científica",
        descricao: "Julia é uma linguagem de alto desempenho voltada para computação científica. Ideal para trabalhos com grandes volumes de dados e cálculos complexos.",
        link: "https://julialang.org/",
        tags: "computacao cientifica"
    },
    {
        linguagem: "Elixir - A Linguagem Funcional para a Máquina Virtual Erlang",
        descricao: "Elixir é uma linguagem funcional projetada para rodar na máquina virtual Erlang. É usada para construir sistemas distribuídos e altamente tolerantes a falhas.",
        link: "https://elixir-lang.org/",
        tags: "erlang"
    }
];
