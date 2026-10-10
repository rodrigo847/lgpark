# LG Park — Borracharia e Estacionamento

Landing page responsiva para a LG Park, no Água Verde, Curitiba. Site estático em HTML, CSS e JavaScript, sem dependências, banco de dados ou etapa de build.

## Visualizar

Abra `index.html` no navegador ou use a extensão Live Server do VS Code. Os caminhos são relativos, permitindo visualizar localmente e publicar na Hostinger.

## Publicar na Hostinger

1. No hPanel, selecione a hospedagem do domínio `lgpark.com.br` e abra o Gerenciador de Arquivos.
2. Faça um backup de qualquer site existente antes de substituir seus arquivos.
3. Envie **apenas** estes arquivos para a pasta `public_html` do domínio:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `robots.txt`
   - `sitemap.xml`
   - `llms.txt`
   - `img/LOGO.png`
   - `img/oficina.jpg`
   - `img/pneus.jpg`
4. Preserve a pasta `img`, os nomes e a capitalização dos arquivos.
5. Configure `lgpark.com.br` e `www.lgpark.com.br` conforme as instruções da sua hospedagem Hostinger. Preserve os registros DNS de e-mail existentes.
6. Ative o certificado SSL e o redirecionamento HTTPS no hPanel. Configure a versão sem `www` para redirecionar para `https://www.lgpark.com.br`, endereço canônico do site.
7. Acesse o domínio e teste navegação, imagens, WhatsApp e o link de localização no celular e computador.

Não é necessário publicar na Vercel ou instalar Node.js no servidor. Versionar no Git/GitHub não muda onde o site está hospedado. Uma publicação via Git, se disponível no seu plano, deve servir a raiz deste projeto, sem comando de build.

**Não envie a pasta `dados`, os comprovantes, os documentos administrativos ou as imagens de referência para `public_html`.** O `.gitignore` exclui esses arquivos do versionamento; ele não impede que sejam enviados manualmente à hospedagem.

## Versionar no Git

O repositório local pode ser conectado a um repositório vazio no GitHub:

```sh
git add .
git status
git commit -m "Cria landing page da LG Park"
git branch -M main
git remote add origin <URL-DO-SEU-REPOSITORIO>
git push -u origin main
```

Confira os arquivos em `git status` antes de fazer o commit. Nunca inclua credenciais da Hostinger. O envio ao GitHub e a publicação na Hostinger são etapas separadas.

## Conteúdo e funcionamento

- Telefone/WhatsApp: **(41) 99717-5844**.
- Endereço: **Rua Amazonas, 346 — Água Verde, Curitiba / PR, CEP 80610-030**.
- Instagram: **@lg_park_estacionamento_**.
- Serviços baseados nos materiais fornecidos: reparo e troca de pneus, vulcanização, balanceamento, manutenção preventiva e estacionamento.
- O formulário prepara uma mensagem e abre o WhatsApp na mesma aba. O visitante precisa enviá-la e aguardar confirmação da equipe. Não existe confirmação automática de agendamento.
- Não há armazenamento dos campos, ferramentas de analytics, cookies próprios ou mapa incorporado. WhatsApp, Instagram e Google Maps são serviços externos, sujeitos às respectivas políticas.
- Sem JavaScript, os links diretos de contato continuam funcionando; o formulário apresenta uma alternativa de contato.
- Os horários e preços não foram informados; a página orienta a consultar a equipe. Não foram criados depoimentos, avaliações ou serviços não confirmados.
- As fotos ilustrativas em `img/oficina.jpg` e `img/pneus.jpg` foram recortadas do material fornecido `img/base preventiva.png`; não são apresentadas como fotos das instalações da LG Park. Confirme os direitos de uso desses materiais antes da publicação.

## Alterar o site

- `index.html`: textos, contatos, links, metadados e dados estruturados.
- `styles.css`: cores, layout e adaptação para celular.
- `script.js`: menu móvel, validação e preparação da mensagem.
- `img/`: logotipo e fotos.

Ao alterar o WhatsApp, atualize o endereço `action` do formulário e todos os links `wa.me` no HTML. A lógica do formulário utiliza esse mesmo `action`. Atualize também o telefone nos dados estruturados.

## Descoberta no Google e em ferramentas de IA

O site inclui descrição, URL canônica, dados estruturados `AutomotiveBusiness` com catálogo de serviços, conteúdo textual e perguntas frequentes acessíveis sem JavaScript. `robots.txt` permite rastreamento geral e informa o sitemap, que lista apenas a página real, sem tratar âncoras como páginas separadas.

`llms.txt` é um resumo complementar em Markdown, com fontes oficiais e informações confirmadas. É uma proposta com suporte variável: não garante leitura por IAs, não é requisito do Google e não substitui conteúdo HTML, indexação ou dados estruturados. A permissão geral de rastreamento também não obriga robôs a visitar o site ou incluir seu conteúdo.

### Após publicar os arquivos atualizados

1. Confira que `/robots.txt`, `/sitemap.xml` e `/llms.txt` abrem no domínio com resposta HTTP 200, sem página de erro. `sitemap.xml` deve conter XML, e os arquivos `.txt`, texto.
2. Mantenha a versão canônica `https://www.lgpark.com.br/`. Na Hostinger, configure redirecionamento permanente (301 ou 308) de `https://lgpark.com.br/` para a versão com `www`, preservando os caminhos. Evite regras nos dois sentidos. Se escolher a versão sem `www`, atualize primeiro as URLs no HTML, sitemap, robots e llms.
3. Acesse [Google Search Console](https://search.google.com/search-console), adicione a propriedade de domínio `lgpark.com.br` e faça a verificação usando o registro TXT de DNS fornecido pelo Google. Não substitua registros existentes de site ou e-mail.
4. Na área Sitemaps do Search Console, envie `https://www.lgpark.com.br/sitemap.xml`.
5. Use Inspeção de URL para testar `https://www.lgpark.com.br/` e solicitar indexação. A solicitação não garante inclusão nem prazo.
6. Crie ou reivindique o [Perfil da Empresa no Google](https://www.google.com/business/) e conclua a verificação solicitada. Use o mesmo nome, endereço, telefone e site. Informe horários reais, serviços confirmados e fotos próprias. Não crie uma ficha duplicada se já existir.
7. Confira o JSON-LD no [Schema Markup Validator](https://validator.schema.org/) e a elegibilidade no [Teste de resultados avançados](https://search.google.com/test/rich-results). Marcação válida não garante exibição especial.
8. Acompanhe a indexação e os termos de pesquisa no Search Console. Confira também se as regras de proteção da Hostinger/CDN não estão bloqueando rastreadores legítimos.

Não há garantia de posição, tráfego ou citação por ferramentas de IA. Segundo a [documentação oficial do Google](https://developers.google.com/search/docs/appearance/ai-features), os recursos de IA da Busca usam os mesmos fundamentos de SEO, sem exigir arquivos especiais para IA.

Mantenha o HTML, os dados estruturados, `llms.txt` e o Perfil da Empresa consistentes ao atualizar serviços, endereço ou telefone. Não publique horários, avaliações, preços ou coordenadas sem confirmação.
