export type SearchResult = {
  title: string;
  description: string;
  url: string;
  category: string;
  keywords: string[];
};

export const searchData: SearchResult[] = [
  // Página Inicial
  {
    title: "Rede Autoestima-se",
    description: "Organização da sociedade civil que democratiza o acesso a atendimentos psicológicos e práticas terapêuticas para mulheres e jovens ativistas",
    url: "/",
    category: "Início",
    keywords: ["home", "início", "principal", "autoestima", "saúde mental", "bem-estar", "psicologia", "terapia"]
  },

  // Acolhimento
  {
    title: "Acolhimento Psicológico",
    description: "Oferecemos atendimento psicológico de psicoterapia focal breve e grupos de acolhimento com profissionais da psicologia",
    url: "/pages/acolhimento",
    category: "O que fazemos",
    keywords: ["acolhimento", "psicologia", "terapia", "atendimento", "psicólogo", "sessões", "apoio emocional", "saúde mental"]
  },

  // Doe
  {
    title: "Doe Agora",
    description: "Apoie nossa causa e ajude a democratizar o acesso à saúde mental. Conheça nosso plano de doação",
    url: "/pages/doe",
    category: "Apoio",
    keywords: ["doar", "doação", "apoiar", "contribuir", "ajudar", "financeiro", "suporte"]
  },

  // Sobre Nós
  {
    title: "Sobre Nós",
    description: "Conheça a história da Rede Autoestima-se, nossa missão, visão, valores e a equipe que trabalha para democratizar a saúde mental",
    url: "/pages/sobre-nos",
    category: "Institucional",
    keywords: ["sobre", "quem somos", "história", "missão", "visão", "valores", "equipe", "fundadora", "time"]
  },

  // Transparência
  {
    title: "Transparência",
    description: "Confira nossos relatórios, prestação de contas e documentos institucionais",
    url: "/pages/transparencia",
    category: "Institucional",
    keywords: ["transparência", "relatórios", "prestação de contas", "documentos", "balanço", "financeiro"]
  },

  // Iniciativas - Vozes do Bem-Estar
  {
    title: "Vozes do Bem-Estar",
    description: "Podcast que propaga o tema da saúde mental para profissionais da saúde, mídia e sociedade",
    url: "/pages/iniciativas/vozes-do-bem-estar",
    category: "Iniciativas",
    keywords: ["podcast", "vozes", "bem-estar", "comunicação", "mídia", "saúde mental", "entrevistas"]
  },

  // Iniciativas - Atendimento para Ativistas
  {
    title: "Atendimento para Ativistas",
    description: "Apoio psicológico especializado para ativistas e defensores de direitos humanos",
    url: "/pages/iniciativas/atendimento-para-ativistas",
    category: "Iniciativas",
    keywords: ["ativistas", "advocacy", "direitos humanos", "defensores", "atendimento especializado", "apoio"]
  },

  // Iniciativas - Fundo Autoviver
  {
    title: "Fundo Autoviver",
    description: "Fundo destinado a apoiar projetos de saúde mental e bem-estar em comunidades vulneráveis",
    url: "/pages/iniciativas/fundo-autoviver",
    category: "Iniciativas",
    keywords: ["fundo", "autoviver", "projetos", "comunidades", "vulnerabilidade", "investimento social"]
  },

  // Iniciativas - Saúde Mental na Amazônia
  {
    title: "Saúde Mental na Amazônia",
    description: "Projeto de promoção da saúde mental para comunidades amazônicas",
    url: "/pages/iniciativas/saude-mental-na-amazonia",
    category: "Iniciativas",
    keywords: ["amazônia", "comunidades amazônicas", "região norte", "saúde mental", "projeto regional"]
  },

  // O que fazemos - Empresas
  {
    title: "Programa para Empresas",
    description: "Soluções em saúde mental e bem-estar para empresas que desejam cuidar de seus colaboradores",
    url: "/pages/o-que-fazemos/empresas",
    category: "O que fazemos",
    keywords: ["empresas", "corporativo", "colaboradores", "RH", "recursos humanos", "bem-estar corporativo", "clima organizacional"]
  },

  // O que fazemos - Instituições de Ensino
  {
    title: "Programa Felicidade nas Escolas",
    description: "Iniciativas de saúde mental e bem-estar para instituições de ensino, estudantes e educadores",
    url: "/pages/o-que-fazemos/instituicoes-de-ensino",
    category: "O que fazemos",
    keywords: ["escolas", "educação", "estudantes", "professores", "educadores", "ensino", "universidades", "faculdades", "felicidade"]
  },

  // O que fazemos - Voluntariado
  {
    title: "Voluntariado",
    description: "Seja voluntário da Rede Autoestima-se e contribua com sua experiência e conhecimento",
    url: "/pages/o-que-fazemos/voluntariado",
    category: "O que fazemos",
    keywords: ["voluntário", "voluntariado", "voluntariar", "ajudar", "contribuir", "participar", "engajamento"]
  },

  // O que fazemos - Como Fazemos
  {
    title: "Como Fazemos",
    description: "Conheça nossa metodologia de trabalho e como atuamos para democratizar a saúde mental",
    url: "/pages/o-que-fazemos/como-fazemos",
    category: "O que fazemos",
    keywords: ["metodologia", "processo", "como funciona", "atuação", "trabalho", "método"]
  },

  // Informações adicionais
  {
    title: "Assistência Psicossocial",
    description: "Atendimento psicológico com psicoterapia focal breve para mulheres e jovens",
    url: "/pages/acolhimento",
    category: "Serviços",
    keywords: ["assistência", "psicossocial", "mulheres", "jovens", "atendimento online", "gratuito"]
  },

  {
    title: "Comunicação e Mídia",
    description: "Ações de comunicação para propagar o tema da saúde mental",
    url: "/pages/iniciativas/vozes-do-bem-estar",
    category: "Comunicação",
    keywords: ["mídia", "comunicação", "propaganda", "divulgação", "conscientização"]
  },

  {
    title: "Advocacy e Políticas Públicas",
    description: "Trabalhamos para influenciar e defender políticas de saúde mental e bem-estar",
    url: "/pages/iniciativas/atendimento-para-ativistas",
    category: "Advocacy",
    keywords: ["políticas públicas", "advocacy", "influência", "governo", "legislação", "direitos"]
  },

  {
    title: "Reconhecimentos e Prêmios",
    description: "Conheça os prêmios e reconhecimentos recebidos pela Rede Autoestima-se",
    url: "/pages/sobre-nos",
    category: "Conquistas",
    keywords: ["prêmios", "reconhecimento", "conquistas", "ashoka", "folha", "onu", "awards"]
  },

  {
    title: "Parceiros e Doadores",
    description: "Conheça nossos parceiros estratégicos e organizações que apoiam nossa causa",
    url: "/pages/sobre-nos",
    category: "Parceiros",
    keywords: ["parceiros", "doadores", "apoiadores", "patrocinadores", "colaboradores", "organizações"]
  }
];
