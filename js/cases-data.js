// ── CASES DATA ──
// Para adicionar fotos reais: substitua as URLs abaixo pelas URLs das suas imagens.
// Cada case pode ter quantas fotos quiser no array "photos".

window.casesData = [

  // ── VAREJO ──
  {
    id: 'varejo-calcados-morumbi',
    cat: 'Varejo',
    name: 'Loja de Calçados — Shopping Morumbi',
    location: 'Shopping Morumbi, São Paulo – SP',
    desc: 'Reforma completa Turnkey em 18 dias. Piso porcelanato 120×120cm, drywall e iluminação LED cenográfica. Entrega sem impacto na operação do shopping.',
    atuacao: [
      'Demolição e preparo do espaço',
      'Piso porcelanato 120×120cm',
      'Divisórias em drywall',
      'Iluminação LED cenográfica',
      'Elétrica e cabeamento estruturado',
    ],
    photos: [
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80',
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
      'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=1200&q=80',
    ],
  },
  {
    id: 'varejo-moda-iguatemi',
    cat: 'Varejo',
    name: 'Franquia de Moda — Iguatemi SP',
    location: 'Shopping Iguatemi, São Paulo – SP',
    desc: 'Implantação de nova unidade com prazo de 21 dias. Fachada ACM, vitrine de vidro temperado e elétrica de alta densidade.',
    atuacao: [
      'Fachada em ACM',
      'Vitrine em vidro temperado',
      'Iluminação de vitrine e salão',
      'Elétrica de alta densidade',
      'Piso e revestimentos',
    ],
    photos: [
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=1200&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
    ],
  },
  {
    id: 'varejo-eletronicos-vilaolimpia',
    cat: 'Varejo',
    name: 'PDV Eletrônicos — Vila Olímpia',
    location: 'Vila Olímpia, São Paulo – SP',
    desc: 'Retrofit completo com troca de piso, forro, climatização e cabeamento estruturado para área de 320m².',
    atuacao: [
      'Retrofit completo 320m²',
      'Troca de piso e forro modular',
      'Climatização de alta eficiência',
      'Cabeamento estruturado',
    ],
    photos: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80',
      'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80',
      'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=1200&q=80',
    ],
  },

  // ── CORPORATIVO ──
  {
    id: 'corp-hq-tecnologia',
    cat: 'Corporativo',
    name: 'Headquarters — Empresa de Tecnologia',
    location: 'Faria Lima, São Paulo – SP',
    desc: 'Reengenharia total de 1.200m² de escritório. Divisórias em vidro, piso elevado, forro modular e elétrica de alta performance.',
    atuacao: [
      'Reengenharia total 1.200m²',
      'Divisórias em vidro laminado',
      'Piso elevado técnico',
      'Forro modular termoacústico',
      'Elétrica de alta performance',
    ],
    photos: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80',
    ],
  },
  {
    id: 'corp-torre-farialima',
    cat: 'Corporativo',
    name: 'Torre Corporativa — Faria Lima',
    location: 'Av. Faria Lima, São Paulo – SP',
    desc: 'Reforma de 4 andares com salas de reunião em vidro laminado, lounge e auditório. Entregue em 45 dias.',
    atuacao: [
      'Reforma de 4 andares',
      'Salas de reunião em vidro',
      'Auditório com 80 lugares',
      'Lounge executivo',
      'Infraestrutura AV e TI',
    ],
    photos: [
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80',
    ],
  },
  {
    id: 'corp-openspace-financeiro',
    cat: 'Corporativo',
    name: 'Open Space — Empresa Financeira',
    location: 'Pinheiros, São Paulo – SP',
    desc: 'Adequação de layout para modelo colaborativo. Drywall acústico, iluminação circadiana e infraestrutura TI integrada.',
    atuacao: [
      'Layout colaborativo open space',
      'Drywall acústico de alta performance',
      'Iluminação circadiana LED',
      'Infraestrutura TI integrada',
    ],
    photos: [
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
      'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=80',
    ],
  },

  // ── INDUSTRIAL ──
  {
    id: 'ind-galpao-cajamar',
    cat: 'Industrial',
    name: 'Galpão Industrial — Cajamar SP',
    location: 'Cajamar, São Paulo – SP',
    desc: 'Construção de galpão metálico de 4.500m² com mezanino técnico, piso industrial e cobertura termoacústica. ART emitida.',
    atuacao: [
      'Galpão metálico 4.500m²',
      'Mezanino técnico 600m²',
      'Piso industrial de alta resistência',
      'Cobertura termoacústica',
      'ART e documentação completa',
    ],
    photos: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80',
      'https://images.unsplash.com/photo-1487992783522-7788980b9c8d?w=1200&q=80',
    ],
  },
  {
    id: 'ind-ampliacao-quimica',
    cat: 'Industrial',
    name: 'Ampliação de Planta — Indústria Química',
    location: 'Guarulhos, São Paulo – SP',
    desc: 'Reforço estrutural e ampliação de 800m² com obra realizada sem parar a produção. Prazo cumprido em 30 dias.',
    atuacao: [
      'Reforço estrutural existente',
      'Ampliação 800m² sem parar produção',
      'Nova cobertura metálica',
      'Piso industrial resistente a químicos',
    ],
    photos: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=80',
    ],
  },
  {
    id: 'ind-mezanino-autopecas',
    cat: 'Industrial',
    name: 'Mezanino Técnico — Fabricante de Autopeças',
    location: 'Santo André, São Paulo – SP',
    desc: 'Mezanino metálico de 600m² com capacidade de 1.000kg/m². Passarelas, escadas e guarda-corpos normatizados NR12.',
    atuacao: [
      'Mezanino metálico 600m²',
      'Capacidade 1.000kg/m²',
      'Passarelas e escadas NR12',
      'Guarda-corpos normatizados',
      'ART de projeto e execução',
    ],
    photos: [
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
      'https://images.unsplash.com/photo-1487992783522-7788980b9c8d?w=1200&q=80',
    ],
  },

  // ── SAÚDE ──
  {
    id: 'saude-clinica-moema',
    cat: 'Saúde',
    name: 'Clínica Médica — Moema SP',
    location: 'Moema, São Paulo – SP',
    desc: 'Reforma completa de clínica de 280m² com materiais assépticos, iluminação técnica e adequação à ANVISA. Entregue em 25 dias.',
    atuacao: [
      'Reforma completa 280m²',
      'Materiais assépticos certificados',
      'Iluminação técnica hospitalar',
      'Adequação ANVISA',
      'Elétrica e gases medicinais',
    ],
    photos: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80',
    ],
  },
  {
    id: 'saude-centro-odonto-paulista',
    cat: 'Saúde',
    name: 'Centro Odontológico — Paulista',
    location: 'Av. Paulista, São Paulo – SP',
    desc: 'Implantação de 12 consultórios com infraestrutura de gases medicinais, elétrica dedicada e acabamento padrão premium.',
    atuacao: [
      '12 consultórios implantados',
      'Infraestrutura de gases medicinais',
      'Elétrica dedicada por consultório',
      'Acabamento padrão premium',
      'Conformidade ANVISA',
    ],
    photos: [
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80',
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
    ],
  },

  // ── RESTAURANTE ──
  {
    id: 'rest-contemporaneo-itaim',
    cat: 'Restaurantes',
    name: 'Restaurante Contemporâneo — Itaim',
    location: 'Itaim Bibi, São Paulo – SP',
    desc: 'Reforma completa com cozinha industrial, salão de 200 lugares, revestimentos acústicos e climatização de alta eficiência.',
    atuacao: [
      'Cozinha industrial completa',
      'Salão de 200 lugares',
      'Revestimentos acústicos',
      'Climatização de alta eficiência',
      'Hidráulica e elétrica novas',
    ],
    photos: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80',
    ],
  },
  {
    id: 'rest-gastrobar-vilamadalena',
    cat: 'Restaurantes',
    name: 'Bar & Gastrobar — Vila Madalena',
    location: 'Vila Madalena, São Paulo – SP',
    desc: 'Retrofit de espaço de 350m² com deck externo, fachada em steel frame, elétrica e hidráulica novas. Prazo: 28 dias.',
    atuacao: [
      'Retrofit completo 350m²',
      'Deck externo em madeira tratada',
      'Fachada em steel frame',
      'Elétrica e hidráulica novas',
    ],
    photos: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80',
    ],
  },

  // ── LOGÍSTICA ──
  {
    id: 'log-cd-guarulhos',
    cat: 'Logística',
    name: 'Centro de Distribuição — Guarulhos',
    location: 'Guarulhos, São Paulo – SP',
    desc: 'Piso industrial de alta resistência para tráfego de empilhadeiras, cobertura metálica e adequação de docas. 8.000m².',
    atuacao: [
      'Piso industrial 8.000m²',
      'Cobertura metálica',
      'Adequação de 12 docas',
      'Sistema de drenagem industrial',
      'Iluminação LED industrial',
    ],
    photos: [
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    ],
  },
  {
    id: 'log-hub-cotia',
    cat: 'Logística',
    name: 'Hub Logístico — Cotia SP',
    location: 'Cotia, São Paulo – SP',
    desc: 'Construção de galpão logístico 3.200m² com sistema de sprinklers, iluminação LED industrial e mezanino de 400m².',
    atuacao: [
      'Galpão logístico 3.200m²',
      'Sistema de sprinklers PPCI',
      'Iluminação LED industrial',
      'Mezanino 400m²',
      'ART e laudo de vistoria',
    ],
    photos: [
      'https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80',
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    ],
  },
];
