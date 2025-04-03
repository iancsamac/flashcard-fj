import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const flashCards = [
  {
      id: 1,
      aluno: "102",
      front: "Quais são as consequências para agentes públicos que cometem atos de improbidade administrativa?",
      back: "Os atos de improbidade, conforme a Lei nº 8.429/1992, podem resultar em perda da função pública, suspensão dos direitos políticos, multa civil e ressarcimento ao erário, desde que haja dolo. A EC 115/2022 retirou a menção à improbidade do art. 37, § 4º, da CF."
  },
  {
      id: 2,
      aluno: "102",
      front: "Aos servidores titulares de cargos EFETIVOS da União, dos Estados, do DF e dos Municípios, são formas de aposentadoria:",
      back: "I- por invalidez permanente;\nII- compulsoriamente aos 70 anos;\nIII- voluntariamente, desde que cumprido tempo mínimo de dez (10) anos de efetivo exercício no serviço público e cinco (5) anos no cargo."
  },
  {
      id: 3,
      aluno: "100",
      front: "Acerca dos Servidores Públicos da União, DF, estados e municípios, a fixação dos padrões de vencimento deverá observar a quais critérios?",
      back: "I - por invalidez permanente.\n II- compulsoriamente aos 70 anos.\n III- voluntariamente, desde que cumprido tempo mínimo de dez (10) anos de efetivo exercício no serviço público e cinco (5) anos no cargo."
  },
  {
      id: 4,
      aluno: "102",
      front: "Os servidores públicos civis e militares possuem os mesmos direitos quanto à associação sindical e ao direito de greve?",
      back: "Não. A Constituição garante aos servidores civis o direito à livre associação sindical e à greve, nos termos de lei específica (art. 37, VI e VII). Já os militares não podem se sindicalizar nem fazer greve."
  },
  {
      id: 5,
      aluno: "103",
      front: "Qual poder limita os valores de vencimentos pagos aos outros poderes através do seu vencimento máximo recebido?",
      back: "Poder Executivo "
  },
  {
      id: 6,
      aluno: "103",
      front: "É possível que aconteça reajuste automático de vencimentos, a partir da vinculação de um cargo a outro?",
      back: "É VEDADA a vinculação ou equiparação de quaisquer espécies remuneratórias para o efeito de remuneração de pessoal do serviço público."
  },
  {
      id: 7,
      aluno: "104",
      front: "HIERARQUIA E DISCIPLINA: O que é cada uma?",
      back: "A  hierarquia é a organização e a ordem de prioridade entre as relações de subordinação entre os membros de um grupo, com graus sucessivos de poderes, diferenciando-se, por exemplo, pelos postos ou graduações, ou até mesmo pela antiguidade."
  },
  {
      id: 8,
      aluno: "104",
      front: "Qual a  importância da Hierarquia e Disciplina no Militarismo?",
      back: "Hierarquia e disciplina são os pilares que sustentam as Instituições Militares, por serem os referenciais mais importantes que orientam toda a estrutura militar, cuja rigorosa observância desses dois princípios é condição fundamental para a sua existência."
  },
  {
      id: 9,
      aluno: "105",
      front: "Quais são os Órgãos de Segurança Pública segundo o Art 144",
      back: "I - PF \nII - PRF\nIII - PFF;\nIV - PC;\nV - PM e CBM.\nVI - Polícias Penais federal, estaduais e distrital.\n\nObs.: Guarda Municipal tem Divergência ainda."
  },
  {
      id: 10,
      aluno: "105",
      front: "Quais atribuições Constitucionais do Corpo de Bombeiros?",
      back: "Execução de atividades de defesa civil.\n\n\"além das atribuições definidas em lei\"\n\nNa Constituição ESTADUAL BA\nArt. 148-A Emenda de 2014\nI - defesa civil;\nII - prevenção e combate a incêndios e a situações de pânico;\nIII - busca, resgate e salvamento de pessoas e bens ...\nIV - instrução e orientação de bombeiros voluntários, onde houver;\nV - polícia judiciária militar, a ser exercida em relação a seus integrantes, na forma da lei federal."
  },
  {
      id: 11,
      aluno: "107",
      front: "Quais são os entes da organização político-administrativa do Brasil?",
      back: "A União, os Estados, o Distrito Federal e os Municípios. Apenas a União é soberana, os outros são autônomos."
  },
  {
      id: 12,
      aluno: "107",
      front: "O que é necessário para fundir , dividir ou desmembrar Estados e Municípios?",
      back: "Estados: Plebiscito, aprovação do Congresso por Lei Complementar e consulta às Assembleias Legislativas. Municípios: Lei Estadual, plebiscito e estudos de viabilidade, mas falta uma Lei Complementar Federal para regulamentar isso."
  },
  {
      id: 13,
      aluno: "108",
      front: "Salvador tem aproximadamente 2.568.928, qual o limite máximo de vereadores ?",
      back: "43"
  },
  {
      id: 14,
      aluno: "108",
      front: "Complete a sentença:\nCompete ao município manter, com a____ da União e do Estado, programas de ___ e de ___.",
      back: "Cooperação técnica e financeira, educação infantil, ensino fundamental."
  },
  {
      id: 15,
      aluno: "109",
      front: "O que são competências concorrentes entre os entes federativos?",
      back: "São competências que tanto a União quanto os Estados e o Distrito Federal são capazes de legislar  "
  },
  {
      id: 16,
      aluno: "109",
      front: "Quais são os entes federativos adotados pelo Brasil?",
      back: "UNIÃO\nESTADOS\nMUNICÍPIOS\nDISTRITO FEDERAL"
  },
  {
      id: 17,
      aluno: "110",
      front: "O que vem a ser esse, Princípio da Indissolubilidade?",
      back: "Este trata do Pacto Federativo, ou seja; determina que a união dos Estados-membros, do Distrito Federal e dos Municípios não poderá ser desfeita."
  },
  {
      id: 18,
      aluno: "110",
      front: "Para que serve o sistema de freios e contrapesos entre os poderes se eles tem independência e harmonia entre si?",
      back: "Para que os poderes EX, LEG e JUD possam “supervisionar”, influenciar e  limitar  as ações uns dos outros.  Garantindo assim. o equilíbrio entre os poderes"
  },
  {
      id: 19,
      aluno: "111",
      front: "Quais são as principais atribuições da Polícia Militar, Polícia Civil e Corpo de Bombeiros Militar na Constituição do Estado da Bahia?",
      back: " PMBA: Policiamento ostensivo e preservação da ordem pública.BMBA: Combate a incêndios, salvamento, defesa civil e prevenção de desastres.Polícia Civil: Polícia judiciária e investigação criminal no estado"
  },
  {
      id: 20,
      aluno: "111",
      front: "O que estabelecem os artigos 146 e 148 da Constituição do Estado da Bahia sobre segurança pública?",
      back: "Art. 146: Regula a organização do sistema de segurança pública, detalhando as atribuições das polícias Civil, Militar e Bombeiros. Art. 148: Define PMBA e CBMBA como instituições permanentes, organizadas com hierarquia e disciplina, subordinadas ao governador."
  },
  {
      id: 21,
      aluno: "112",
      front: "O que é a Pirâmide Normativa de Hans Kelsen?",
      back: "É uma representação hierárquica do sistema jurídico, onde as normas são organizadas conforme sua importância e validade. Cada norma inferior deve estar de acordo com uma norma superior, tendo a Constituição no topo."
  },
  {
      id: 22,
      aluno: "112",
      front: "Como as normas são organizadas na Pirâmide de Kelsen?",
      back: "Constituição (norma superior)\nLeis complementares e ordinárias\nRegulamentos e decretos\nNormas individuais e concretas"
  },
  {
      id: 23,
      aluno: "113",
      front: "Fundamentos da República Federativa do Brasil,conforme o artigo 1º da Constituição de 1988",
      back: "Soberania,Cidadania, Dignidade da pessoa humana,Valores sociais do trabalho e da livre iniciativa e Pluralismo político"
  },
  {
      id: 24,
      aluno: "113",
      front: "O que trata o Artigo 5º da Constituição Federal de 1988?",
      back: "O Artigo 5º estabelece os direitos e garantias fundamentais dos cidadãos, assegurando liberdade, igualdade, segurança e propriedade a todos os indivíduos no Brasil."
  },
  {
      id: 25,
      aluno: "113",
      front: "Consequências previstas pelo inciso XLIII do Artigo 5º da Constituição para certos crimes:",
      back: "O inciso XLIII determina que a tortura, o tráfico de drogas, o terrorismo e os crimes hediondos são inhafiançáveis e imprescritíveis, ou seja, não podem ser perdoados, anistiados ou prescrever ao longo do tempo."
  },
  {
      id: 26,
      aluno: "113",
      front: "O que estabelece o inciso XLII do Artigo 5º?",
      back: "O inciso XLII trata da impunidade para a prática de racismo, classificando-o como crime inafiançável e imprescritível, com pena de reclusão."
  },
  {
      id: 27,
      aluno: "114",
      front: "Complete a sentença:\nO Município reger-se-á por ____, votada em ____, com o _____, e aprovada por___ dos membros da Câmara Municipal.",
      back: "Lei orgânica, dois turnos, interstício mínimo de dez dias, dois terços"
  },
  {
      id: 28,
      aluno: "113",
      front: "Complete a sentença:\nA fiscalização do Município será exercida pelo Poder ___ Municipal, mediante ____ e pelos sistemas de ____ do Poder ____ Municipal.",
      back: "legislativo, controle externo, controle interno, executivo"
  },
  {
      id: 29,
      aluno: "115",
      front: "Qual a diferença entre concessão e permissão de serviço público?",
      back: "A concessão é formalizada por contrato e exige licitação; a permissão é um ato unilateral e discricionário do Estado"
  },
  {
      id: 30,
      aluno: "115",
      front: "Em que situações o Estado pode ser responsabilizado por danos causados a terceiros?",
      back: "Quando houver ação ou omissão de agente público que cause prejuízo a terceiros, sendo aplicada a responsabilidade objetiva"
  },
  {
      id: 31,
      aluno: "113",
      front: "Quais são os tipos de licença previstos no Estatuto dos Militares da Bahia?",
      back: "1. Licença para tratar de interesses particulares\n2. Licença médica\n3. Licença por motivo de doença em pessoa da família\n4. Licença à gestante (licença maternidade)\n5. Licença paternidade\n6. Licença para tratamento de saúde em caso de acidente de serviço\n7. Licença especial"
  },
  {
      id: 32,
      aluno: "113",
      front: "Qual o período da licença à gestante prevista no Estatuto dos Militares da Bahia?",
      back: "A licença à gestante (licença maternidade) no Estatuto dos Militares da Bahia é de 180 dias (6 meses), podendo ser dividida entre o período pré e pós-parto, conforme a regulamentação do estatuto."
  },
  {
      id: 33,
      aluno: "117",
      front: "Quais são os tipos de autonomia dos estados federados segundo a Constituição Federal?",
      back: "Os estados possuem autonomia financeira, administrativa e política, o que inclui a capacidade de auto-organização, autogoverno, autolegislação e autoadministração."
  },
  {
      id: 34,
      aluno: "117",
      front: "Quais são os tipos de competências dos estados e como elas se dividem?",
      back: "A competência administrativa pode ser comum (Art. 23 CF) ou residual (tudo que não for da União, DF ou Municípios). A competência legislativa pode ser expressa, residual, delegada, concorrente ou suplementar, além da competência tributária (Art. 155 CF)."
  },
  {
      id: 35,
      aluno: "118",
      front: "Sabendo que as competências privadas podem ser delegadas para outro ente, são exemplos de competência privada da União?",
      back: "- Direito civil, comercial, penal, processual...\n- Desapropriação\n- Requisições civis e militares (Em iminente perigo ou em tempo de guerra)\n- Água, Energia, informática, telecomunicações e radiodifusão\n- Serviço Postal\n- Sistema Monetário\n- Trânsito e transporte."
  },
  {
      id: 36,
      aluno: "113",
      front: "São competências materiais COMUNS da União, Estados, Distrito Federal e Municípios?",
      back: "- Zelar pela guarda da Constituição.\n- Cuidar da saúde e assistência, da proteção e garantia das pessoas com deficiências\n- Impedir a evasão, a destruição e a descaracterização de obras de arte.\n- Proteger o meio ambiente e combater a poluição.\n- Preservar as florestas, a fauna e a flora.\n- Fomentar a produção agropecuária\n- Promover programas de construção de moradia."
  },
  { 
      id: 37,
      aluno: "119",
      front: "O que são Atos Vinculados? ", 
      back: "• São aqueles em que\na autoridade ou o servidor público\n não tem escolha sobre como agir.\na lei já diz exatamente o que deve ser feito em determinada situação, e a única coisa que a pessoa responsável precisa fazer é seguir a regra à risca\n•Não há espaço para interpretação ou decisão pessoal."
   },{ 
      id: 38,
      aluno: "119",
      front: "O que são Atos Descricionários?", 
      back: " • São aqueles em que a autoridade tem liberdade para escolher entre várias opções previstas pela lei.\nA lei dá um certo espaço para o servidor decidir o que é mais adequado ou conveniente para aquela situação, levando em consideração o interesse público."
   },{ 
      id: 39,
      aluno: "120",
      front: "1- Habeas Corpus\n2- Habeas Data\n3- Mandado de Segurança", 
      back: "1- Proteger o direito de locomoção contra ameaça ou violação por abuso de autoridade.\n2- Assegurar o acesso a informações pessoais em registros de entidades governamentais ou de caráter público, bem como solicitar sua retificação.\n3- Proteger direito líquido e certo não amparado por habeas corpus ou habeas data, contra ilegalidade ou abuso de poder."
   },{ 
      id: 40,
      aluno: "120",
      front: "1- Mandado de Segurança Coletivo\n2- Mandado de Injunção\n3- Ação Popular", 
      back: "1- Proteção de direitos coletivos por partidos políticos, sindicatos, entidades de classe ou associações legalmente constituídas.\n2- Garantir o exercício de um direito ou liberdade constitucionalmente assegurados quando houver ausência de norma regulamentadora.\n3-  Anular atos lesivos ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural."
   },{ 
      id: 41,
      aluno: "120",
      front: "Hipótese de extradição", 
      back: "Nenhum brasileiro será extraditado, salvo o naturalizado, em caso de crime comum, praticado antes da naturalização(1), ou de comprovado envolvimento em tráfico(2) ilícito de entorpecentes e drogas afins, na forma da lei"
   },{ 
      id: 42,
      aluno: "120",
      front: "Caso de prisão em flagrante", 
      back: "Ninguém será preso senão em flagrante(1) delito ou por ordem escrita e fundamentada de autoridade judiciária(2) competente, salvo nos casos de transgressão militar ou crime propriamente militar, definidos em lei."
   },{ 
      id: 43,
      aluno: "121",
      front: "Quais são os requisitos para aposentadoria voluntária no RPPS?", 
      back: "Com proventos integrais: 60 anos (homem) e 55 anos (mulher) + 35 e 30 anos de contribuição, respectivamente.\nCom proventos proporcionais: 65 anos (homem) e 60 anos (mulher), sem exigência mínima de contribuição."
   },{ 
      id: 44,
      aluno: "121",
      front: "Como é calculada a pensão por morte no RPPS?", 
      back: "Caso aposentado: totalidade dos proventos até o teto do RGPS + 70% do que exceder.\nCaso em atividade: totalidade da remuneração até o teto do RGPS + 70% do que exceder."
   },{ 
      id: 45,
      aluno: "122",
      front: "Quais são os direitos dos trabalhadores urbanos e rurais?", 
      back: "Salário mínimo, jornada máxima de 8h diárias, descanso semanal, FGTS, férias, 13º salário e licença-maternidade/paternidade."
   },{ 
      id: 46,
      aluno: "122",
      front: "Como funciona a participação dos trabalhadores na gestão das empresas?", 
      back: "A CF prevê essa participação, mas sua regulamentação depende de lei."
   },{ 
      id: 47,
      aluno: "122",
      front: "O direito ao trabalho é absoluto?", 
      back: "Não. Pode ser regulamentado por leis que definem condições e limitações, como idade mínima e exigências profissionais."
   },{ 
      id: 48,
      aluno: "122",
      front: "O que significa a função social da propriedade?", 
      back: "A propriedade privada deve atender ao interesse coletivo, podendo ser desapropriada se não cumprir sua função social."
   },{ 
      id: 49,
      aluno: "123",
      front: "Quem são considerados brasileiros natos? ", 
      back: "Nascidos no Brasil, mesmo com pais estrangeiros (exceto se a serviço do país deles).\nNascidos no exterior, filhos de pai ou mãe brasileira a serviço do Brasil."
   },{ 
      id: 50,
      aluno: "123",
      front: "Qual critério define a antiguidade em nomeações coletivas por conclusão de curso ou promoção?", 
      back: "A ordem de classificação obtida no curso."
   },{ 
      id: 51,
      aluno: "124",
      front: "PRINCÍPIOS DO DIREITO ADMINISTRATIVO", 
      back: "1- Legalidade: Agir com autorização da lei\n2- Impessoalidade: Atender ao interesse público\n3- Moralidade: Padrões éticos e agir com probidade\n4- Publicidade: Transparência nos atos\n5- Eficiência: Rapidez, perfeição e rendimento"
   },{ 
      id: 52,
      aluno: "124",
      front: "ENTES FEDERATIVOS", 
      back: "O Estado brasileiro é uma federação composta por União, Estados, Municípios e o Distrito Federal, que possuem autonomia política, administrativa e financeira"
   },{ 
      id: 53,
      aluno: "125",
      front: "QUAIS SÃO AS 4 CAUSAS DE PERDA DO CARGO PARA O SERVIDOR PÚBLICO ESTÁVEL?", 
      back: "APÓS SENTENÇA JUDICIAL TRANSITADA EM JULGADO;  PROCESSO ADMINISTRATIVO;  AVALIAÇÃO PERIÓDICA DE DESEMPENHO; OU QUANDO Extinto o cargo ou declarada a sua desnecessidade. "
   },{ 
      id: 54,
      aluno: "125",
      front: "NO CASO DE EXTINÇÃO DO CARGO PÚBLICO OU DECLARAÇÃO DE SUA DESNECESSIDADE, O QUE OCORRE COM O SERVIDOR ESTÁVEL?", 
      back: "Ficará em disponibilidade, com remuneração proporcional ao tempo de serviço, até seu adequado aproveitamento em outro cargo."
   },{ 
      id: 55,
      aluno: "101",
      front: "Sobre os direitos políticos, Quem são inelegíveis?", 
      back: "Os inalistáveis (estrangeiros e conscritos) e os analfabetos."
   },{ 
      id: 56,
      aluno: "101",
      front: "O alistamento eleitoral e o voto são facultativos para:", 
      back: "• Os analfabetos.\n• Os maiores de setenta (70) anos.\n• Os maiores de dezesseis e menores de dezoito anos."
   },{ 
      id: 57,
      aluno: "126",
      front: "Qual é o desafio da aplicação do Direito Administrativo nas corporações militares?", 
      back: "O desafio é equilibrar a hierarquia e a disciplina com a necessidade de garantir direitos constitucionais e a eficiência administrativa, evitando que o excesso de formalismo prejudique a justiça e a modernização dos processos."
   },{ 
      id: 58,
      aluno: "126",
      front: "Como é estruturada a hierarquia dentro do CBMBA?", 
      back: "A hierarquia segue uma organização baseada em patentes, onde os bombeiros são distribuídos em diferentes níveis de comando. Essa estrutura garante disciplina, coordenação eficiente das operações e cumprimento das ordens de forma organizada, respeitando a cadeia de comando estabelecida."
   },{ 
      id: 59,
      aluno: "127",
      front: "Segundo o Estatuto Militar da Bahia, o que é Graduação?", 
      back: "Graduação é o grau hierárquico da praça, conferido por Autoridade militar competente"
   },{ 
      id: 60,
      aluno: "127",
      front: "Segundo o Estatuto Militar da Bahia, o que é Posto ?", 
      back: "Posto é o grau hierárquico do Oficial, conferido por ato do Governador do Estado e registrado em Carta Patente"
   },{ 
      id: 61,
      aluno: "128",
      front: "Para que serve e como está dividida a pirâmide normativa?", 
      back: "É uma representação hierárquica do sistema jurídico, onde as normas são organizadas de acordo com seu grau de importância e validade. Segundo Kelses está dividida em 4 partes: Constituição; Leis complementares e ordinárias; Regulamentos, Decretos e Normas Infralegais; Atos Administrativos."
   },{ 
      id: 62,
      aluno: "128",
      front: "Como funciona o princípio da hieraquia?", 
      back: "A ideia central da pirâmide normativa é que uma norma inferior só é válida se for compatível com a norma superior, e qualquer contradição com normas de níveis mais elevados pode gerar a nulidade da norma inferior."
   },{ 
      id: 63,
      aluno: "129",
      front: "Aguns bens da União:", 
      back: " VI - o mar territorial\nVIII - os potenciais de energia hidráulica;"
   },{ 
      id: 64,
      aluno: "129",
      front: "COMPETE A UNIAO", 
      back: "II - declarar a guerra e celebrar a paz;\nVII - emitir moeda;"
   },{ 
      id: 65,
      aluno: "130",
      front: "A União pode intervir nos Estados ou no DF para assegurar os seguintes princípios constituicionais:", 
      back: "a) forma republicana, sistema representativo e regime democrático;\nb) direitos da pessoa humana;\nc) autonomia municipal;\nd) prestação de contas da administração pública, direta e indireta.\ne) aplicação do mínimo exigido da receita resultante de impostos estaduais, compreendida a proveniente de transferências, na manutenção e desenvolvimento do ensino e nas ações e serviços públicos de saúde."
   },{ 
      id: 66,
      aluno: "130",
      front: "O Estado não intervirá em seus Municípios, nem a União nos Municípios localizados em Território Federal, exceto quando:", 
      back: " I - deixar de ser paga, sem motivo de força maior, por dois anos consecutivos, a dívida fundada;\nII - não forem prestadas contas devidas, na forma da lei;\nIII - não tiver sido aplicado o mínimo exigido da receita municipal na manutenção e desenvolvimento do ensino e nas ações e serviços públicos de saúde;\nIV - o Tribunal de Justiça der provimento a representação para assegurar a observância de princípios indicados na Constituição Estadual, ou para prover a execução de lei, de ordem ou de decisão judicial."
   },{ 
      id: 67,
      aluno: "131",
      front: "O que é o princípio da autonomia dos entes federativos?", 
      back: "União, Estados, Municípios e DF possuem autonomia administrativa, financeira e legislativa, podendo criar leis, gerir recursos e atuar conforme suas atribuições."
   },{ 
      id: 68,
      aluno: "131",
      front: "Quais são os órgãos da Segurança Pública segundo o Art. 144 da CF?", 
      back: "Polícia Federal, Polícia Rodoviária Federal, Polícia Ferroviária Federal, Polícias Civis, Polícias Militares e Corpo de Bombeiro Militares e Polícias Penais Federal, Estaduais e Distrital."
   },{ 
      id: 69,
      aluno: "132",
      front: "O Distrito Federal pode ser dividido em municípios?", 
      back: "Não, a Constituição Federal veda a divisão do Distrito Federal em municípios."
   },{ 
      id: 70,
      aluno: "132",
      front: "Quem é responsável por dispor sobre a utilização das forças de segurança no Distrito Federal?", 
      back: "A regulamentação sobre a utilização da polícia civil, polícia penal, polícia militar e do corpo de bombeiros militar pelo Governo do Distrito Federal é feita por lei federal."
   },{ 
      id: 71,
      aluno: "132",
      front: "Quais são os requisitos para a promulgação da lei orgânica do Distrito Federal?", 
      back: "A lei orgânica do Distrito Federal deve ser votada em dois turnos, com um interstício mínimo de dez dias entre as votações, e ser aprovada por dois terços da Câmara Legislativa, que a promulgará, atendendo aos princípios estabelecidos na Constituição."
   },{ 
      id: 72,
      aluno: "132",
      front: "Como é organizada a administração nos Territórios Federais com mais de cem mil habitantes?", 
      back: "Nos Territórios Federais com mais de cem mil habitantes, além do Governador nomeado, haverá órgãos judiciários de primeira e segunda instância, membros do Ministério Público e defensores públicos federais. Também serão realizadas eleições para a Câmara Territorial, que terá competência deliberativa, conforme definido em lei."
   },{ 
      id: 73,
      aluno: "106",
      front: "Quais os principios gerais do direito?", 
      back: "• Legalidade\n• Igualdade\n• Boa-fé\n• Segurança Juridica\n• Proporcionalidade"
   },{ 
      id: 74,
      aluno: "106",
      front: "Quais os principios gerais do direito constitucional?", 
      back: "• Supremacia da constituição\n• Dignidade da Pessoa Humana\n• Separação dos Poderes\n• Democracia\n• Legalidade"
  },{ 
      id: 75,
      aluno: "116",
      front: "Quais são os tipos de licença previstos no Estatuto dos Militares da Bahia?", 
      back: "1. Licença para tratar de interesses particulares\n2. Licença médica\n3. Licença por motivo de doença em pessoa da família\n4. Licença à gestante (licença maternidade)\n5. Licença paternidade\n6. Licença para tratamento de saúde em caso de acidente de serviço\n7. Licença especial"
  },{ 
      id: 76,
      aluno: "116",
      front: "Qual o período da licença à gestante prevista no Estatuto dos Militares da Bahia?", 
      back: "A licença à gestante (licença maternidade) no Estatuto dos Militares da Bahia é de 180 dias (6 meses), podendo ser dividida entre o período pré e pós-parto, conforme a regulamentação do estatuto."
  }
];

export const alunos:{ [key: string]: string } = {
  "100":"AL SD BM HAKYLLA",
  "101":"AL SD BM HELTON",
  "102":"AL SD BM HENDERSON",
  "103":"AL SD BM CÉSAR",
  "104":"AL SD BM HIAGGO BRITO",
  "105":"AL SD BM HIGO CABRAL",
  "106":"AL SD BM HIGOR VIEIRA",
  "107":"AL SD BM HUGO",
  "108":"AL SD BM IAGO LUCIANO",
  "109":"AL SD BM IAGO MATOS",
  "110":"AL SD BM IAN BRENO",
  "111":"AL SD BM IAN LESSA",
  "112":"AL SD BM IANC",
  "113":"AL SD BM IANDERLEI",
  "114":"AL SD BM IGOR CRUZ",
  "115":"AL SD BM IGOR LOPES",
  "116":"AL SD BM IRES",
  "117":"AL SD BM ISLLA",
  "118":"AL SD BM ITALO VINICIUS",
  "119":"AL SD BM ITHALO MASCARENHAS",
  "120":"AL SD BM SARAIVA",
  "121":"AL SD BM JACKSON",
  "122":"AL SD BM JADE",
  "123":"AL SD BM JAQUELINE",
  "124":"AL SD BM JARED",
  "125":"AL SD BM JESSICA",
  "126":"AL SD BM JOÃO GABRIEL",
  "127":"AL SD BM JOÃO SOUZA",
  "128":"AL SD BM SODRÉ",
  "129":"AL SD BM JOÃO BRITO",
  "130":"AL SD BM JOÃO MARCELO",
  "132":"AL SD BM JOÃO SANTIAGO",
  "131":"AL SD BM JOÃO MAURICIO",
}