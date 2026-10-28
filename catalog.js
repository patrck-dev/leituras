// Fonte: lista fornecida pelo usuário em 28/10/2026. Descrições editoriais baseadas nessa lista.
// Não confundir página encontrada com reprodução ou idioma integralmente verificados.
export const works = [
 ['kafka','A Metamorfose','Franz Kafka','Identidade, família e estranhamento.','1915'],
 ['camus','O Estrangeiro','Albert Camus','O absurdo e a distância entre o indivíduo e o mundo.','1942'],
 ['dosto','Memórias do Subsolo','Fiódor Dostoiévski','Consciência, contradição e liberdade.','1864'],
 ['hesse','O Lobo da Estepe','Hermann Hesse','Solidão e as muitas faces de uma identidade.','1927'],
 ['clube','Clube da Luta','Chuck Palahniuk','Consumo, identidade e mal-estar contemporâneo.','1996'],
 ['humanismo','O Existencialismo é um Humanismo','Jean-Paul Sartre','Escolha, liberdade e responsabilidade.','1946'],
 ['ser','O Ser e o Nada','Jean-Paul Sartre','Consciência, existência e relações com o outro.','1943'],
 ['ou','Ou Isto, Ou Aquilo','Søren Kierkegaard','Escolhas e modos de existência. Materiais complementares, não análises integrais.','1843'],
 ['temor','Temor e Tremor','Søren Kierkegaard','Fé, ética e o paradoxo de Abraão.','1843'],
 ['doenca','A Doença para a Morte','Søren Kierkegaard','Desespero e a tarefa de tornar-se si mesmo.','1849']
].map(([id,title,author,description,year])=>({id,title,author,description,year}));
const rows = [
 ['kafka','Põe na Estante','Debate literário','Podcast',null,'https://www.b9.com.br/poenaestante/a-metamorfose-de-franz-kafka/','page'],
 ['kafka','CabulosoCast','Uma Barata Chamada Kafka','Podcast',96,'https://podcasts.apple.com/br/podcast/cabulosocast-29-uma-barata-chamada-kafka/id730234743?i=1000492314801'],
 ['kafka','Editora Viseu','Resumo e análise psicológica','Vídeo',null,'https://www.youtube.com/watch?v=mQBQMWdy6wU'],
 ['camus','Flávio Ricardo Vassoler','Resenha aprofundada','Vídeo',null,'https://www.youtube.com/watch?v=mcGIF022c6g','title'],
 ['camus','Ana Lis Soares','Resenha e interpretação filosófica','Vídeo',null,'https://www.youtube.com/watch?v=Ooxre9Ty__k'],
 ['camus','TV Cultura','Pondé e Thaís Oyama debatem O Estrangeiro','Vídeo',null,'https://cultura.uol.com.br/programas/linhascruzadas/videos/18354_o-que-e-a-filosofia-do-absurdo-ponde-e-thais-debatem-o-livro-o-estrangeiro-no-linhas-cruzadas.amp.html'],
 ['dosto','Jornal Nota','Debate com especialistas em literatura russa','Podcast',69,'https://podcasts.apple.com/br/podcast/por-que-ler-mem%C3%B3rias-do-subsolo-de-fi%C3%B3dor-doistoi%C3%A9vski/id1529182615?i=1000695971278','page'],
 ['dosto','Laise Sales Pinheiro','Análise literária e psicológica','Vídeo',108,'https://www.youtube.com/watch?v=ERC2-bwqszM'],
 ['dosto','Ichthus Podcast','Discussão da obra','Podcast',55,'https://podcasts.apple.com/br/podcast/mem%C3%B3rias-do-subsolo-fi%C3%B3dor-dostoi%C3%A9vski-liter%C3%A1rio/id1475055900?i=1000774321053'],
 ['hesse','UNIVESP TV','Literatura Fundamental, com Prof. Helmut Galle','Vídeo',null,'https://www.youtube.com/watch?v=KoN5n2ZLTBg'],
 ['hesse','Meu Inconsciente Coletivo','Tati Bernardi e Daniel Kupermann','Podcast',58,'https://podcasts.apple.com/br/podcast/o-lobo-da-estepe-s%C3%B3-para-os-loucos/id1550848782?i=1000565957542'],
 ['hesse','Lista de Livros','Análise de O Lobo da Estepe','Podcast',null,'https://podscan.fm/podcasts/lista-de-livros/episodes/o-lobo-da-estepe-de-hermann-hesse'],
 ['clube','Podcast Clube do Livro','Episódio 15: debate sobre o romance','Podcast',45,'https://podcasts.apple.com/br/podcast/podcast-clube-do-livro/id1516115700','series'],
 ['clube','Pausa Para um Café','Resenha do livro','Vídeo',null,'https://www.youtube.com/watch?v=cenBRHVImXs'],
 ['clube','Dan Folter','Resenha e comparação entre livro e filme','Vídeo',null,'https://www.youtube.com/watch?v=zQOGPIiBsj4'],
 ['humanismo','Bruno Neppo','Aula sobre O Existencialismo é um Humanismo','Vídeo',null,'https://www.youtube.com/watch?v=rxH-jT6Sd44'],
 ['humanismo','Flávio Ricardo Vassoler','Existencialismo: humanismo ou niilismo?','Vídeo',null,'https://www.youtube.com/watch?v=31sqgZFt47w'],
 ['humanismo','Franklin Leopoldo e Silva','Sartre e o Existencialismo','Vídeo',121,'https://clarafilosofia.com.br/video/sartre-existencialismo-liberdade-historia-responsabilidade','page'],
 ['ser','Romeu Ivolela','Videoaula sobre O Ser e o Nada','Vídeo',null,'https://www.youtube.com/watch?v=GJgsjuNMvV4'],
 ['ser','Ciclo Sartre','Prof. Luiz Damon Moutinho: introdução da obra','Vídeo',null,'https://www.youtube.com/watch?v=_J7WhoZl8dI'],
 ['ser','Saber em Foco','Ser-em-si, Ser-para-si e Ser-para-o-outro','Vídeo',null,'https://www.youtube.com/watch?v=Dg8nIMlaXYQ'],
 ['ou','Ludoviajante','Toda escolha é a escolha certa','Vídeo',null,'https://www.youtube.com/watch?v=czfbY18UPqU'],
 ['ou','Estado da Arte','Kierkegaard, escolhas e modos de existência','Podcast',59,'https://podtail.com/podcast/estado-da-arte-1/kierkegaard/'],
 ['ou','Mateus Salvadori','Os estágios estético, ético e religioso','Vídeo',null,'https://www.youtube.com/watch?v=Dmb1pR5hSN0'],
 ['temor','Flávio Ricardo Vassoler','Resenha de Temor e Tremor','Vídeo',null,'https://www.youtube.com/watch?v=zicYk0-IPH4'],
 ['temor','Edson Nunes','Parte 1: Até os demônios creem','Podcast',29,'https://podcasts.apple.com/br/podcast/temor-e-tremor-at%C3%A9-os-dem%C3%B4nios-creem-1-de-5-edson-nunes/id1684573400?i=1000610609022'],
 ['temor','Edson Nunes','Parte 3: O mistério da fé','Vídeo',null,'https://www.youtube.com/watch?v=6EWq2I9JKq0'],
 ['doenca','O Quarto de Platão','Leitura comentada, capítulo por capítulo — parte 1','Vídeo',null,'https://www.youtube.com/watch?v=2v_Tgec-Pmo'],
 ['doenca','Mentes e Maltes','Desespero e existência','Vídeo',null,'https://www.youtube.com/watch?v=Ajx4ZPgpnEQ'],
 ['doenca','Coexistenciais','Desespero Humano: Kierkegaard e psicologia','Vídeo',null,'https://www.youtube.com/watch?v=iEMGz2pQn8Q']
];
export const materials=rows.map(([work,creator,title,format,duration,url,verification='inconclusive'],i)=>({id:`${work}-${i+1}`,work,creator,title,format,duration,url,verification,language:'pt-BR',checkedAt:['page','title'].includes(verification)?'2026-10-28':null}));
export const normalize=s=>s.normalize('NFD').replace(/\p{Diacritic}/gu,'').toLowerCase();
export function selectMaterials(items,works,state,filters){return items.filter(m=>{const w=works.find(w=>w.id===m.work),p=state[m.id]?.progress||0;return (!filters.author||w.author===filters.author)&&(!filters.work||m.work===filters.work)&&(!filters.format||m.format===filters.format)&&(!filters.query||normalize(`${w.title} ${w.author} ${m.title} ${m.creator}`).includes(normalize(filters.query)))&&(!filters.view||filters.view==='all'||filters.view==='favorites'&&state[m.id]?.favorite||filters.view==='progress'&&p>0&&p<100||filters.view==='done'&&p===100)&&(!filters.status||filters.status==='new'&&p===0||filters.status==='progress'&&p>0&&p<100||filters.status==='done'&&p===100);});}
