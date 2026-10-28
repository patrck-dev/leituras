# Leituras

Biblioteca audiovisual responsiva em português brasileiro, sem dependências externas de execução. HTML, CSS e JavaScript nativos. Pronta para repositório GitHub e deploy estático na Vercel.

## Usar localmente

Requer Node.js 20 ou superior. Dentro desta pasta:

```sh
npm run dev
```

Abra http://127.0.0.1:4173. Não abra o HTML diretamente pelo explorador de arquivos: os módulos JavaScript precisam de um servidor HTTP.

```sh
npm test
npm run build
```

O build produz `dist/` com os quatro arquivos públicos. Não há instalação de pacotes nem segredos necessários.

## Recursos

- Navegação por sete autores e dez obras; 30 materiais da lista original.
- Busca sem distinção de acentos, filtros por obra, formato e estado; ordenação por obra ou duração conhecida.
- Favoritos, progresso percentual manual, ponto de parada e anotações por material.
- Visões de materiais em andamento e concluídos; resumo do percurso.
- Tema claro/escuro; navegação por teclado; atalho `/` para busca; modal com Escape para fechar; cores e layout adaptáveis.
- Vídeos do YouTube carregados apenas após clicar, usando o domínio de privacidade ampliada. Podcasts e outros sites abrem na origem.
- Exportação/importação JSON do progresso. A importação substitui os dados locais após confirmação.

## GitHub e Vercel

1. Crie um repositório vazio na sua conta GitHub.
2. Envie **o conteúdo desta pasta** para a raiz do repositório. Inclua os arquivos ocultos, especialmente `.gitignore`. Não envie o projeto ChatGPT inteiro.
3. Na Vercel, escolha **Add New → Project**, conecte o GitHub e importe esse repositório.
4. Selecione **Other** como framework. O `vercel.json` define o comando `npm run build` e a saída `dist`. Não são necessárias variáveis de ambiente.
5. Clique em **Deploy**. Os próximos pushes no repositório conectado geram novos deployments.

Se subir esta pasta dentro de outro repositório, selecione `leituras-site` como **Root Directory** na Vercel.

Referências oficiais: [importação Git](https://vercel.com/docs/git), [configuração de build](https://vercel.com/docs/builds/configure-a-build).

## Conteúdo e verificação

`catalog.js` é a fonte única do acervo. As URLs são as enviadas pelo usuário, sem o parâmetro de rastreamento `utm_source`. Os identificadores de episódios foram preservados. Descrições, canais e durações não verificadas vieram da lista fornecida. O idioma PT-BR é informado pela seleção original; não foi feita audição integral dos 30 materiais.

Foi tentado acesso aos 30 endereços em 28/10/2026. Três páginas tiveram conteúdo legível correspondente e um vídeo retornou título correspondente. Nos outros 26 endereços, a checagem não conseguiu confirmar conteúdo/reprodução. Isso **não prova indisponibilidade**. Consulte `VALIDACAO.md` para o resultado por material.

O endereço do Podcast Clube do Livro abre a série, não o episódio específico: o site avisa para localizar o episódio 15. Os três conteúdos de **Ou Isto, Ou Aquilo** são complementares. As partes 1 e 3 de Temor e Tremor e a parte 1 de A Doença para a Morte foram mantidas como fornecidas. A palestra de Franklin Leopoldo e Silva é sobre o existencialismo em geral.

Para alterar material, edite a linha correspondente em `catalog.js`, mantendo seu ID estável. Os IDs são gerados pela posição global da lista: **não reordene nem insira linhas no meio** para preservar o progresso existente. Para expansão do catálogo, substitua a geração por IDs explícitos e estáveis antes de adicionar itens. Não marque `page` sem confirmar o conteúdo da página; `title` indica somente título localizado; `inconclusive` indica checagem inconclusiva; `series` identifica o link genérico da série.

## Dados pessoais e limitações

O progresso fica em `localStorage`, associado ao navegador e endereço do site. Não há conta, servidor de dados nem sincronização entre dispositivos. O backup contém suas notas: guarde-o como um arquivo pessoal. Limpar os dados do navegador remove o progresso. Abrir em outra origem (por exemplo, trocar localhost pelo domínio da Vercel) requer exportar e importar o backup.

Progresso e ponto de parada são **manuais**, sem monitorar reprodução ou saltar automaticamente para o minuto anotado. O player externo pode recusar incorporação; o botão de abrir na plataforma permanece disponível. Não há download de mídia, rastreadores próprios ou analytics.

O acervo está incluído no build. Como em qualquer site público estático, seus links e descrições serão públicos quando você publicar; o progresso pessoal não é enviado junto.

## Estrutura

```text
index.html       Página e controles acessíveis
styles.css       Layout responsivo e temas
app.js           Navegação, player e dados locais
catalog.js       Obras, materiais e busca
catalog.test.js  Testes do catálogo e filtros
server.mjs       Servidor local restrito aos arquivos públicos
build.mjs        Geração de dist/
vercel.json      Configuração de deployment
VALIDACAO.md     Relatório das verificações de links
```

## Verificações

Testes automatizados verificam integridade do catálogo, busca sem acentos, combinações de filtros e estados de progresso. O build copia somente os arquivos públicos. A revisão visual no navegador integrado não pôde ser concluída neste ambiente porque a conexão ao servidor local expirou; faça uma revisão no preview da Vercel antes de divulgar o site.
