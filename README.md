# Ternário TI – site de preços e serviços

Site estático (HTML + CSS), publicado no GitHub Pages.

## Estrutura
- `index.html` – página única com três telas (Início, Preços, Contato). Navegação por rolagem, botões, teclado e URL (`#inicio`, `#precos`, `#contato`, `#s-diag`...).
- `meu-estilo.min.css` e `bootstrap-icons.min.css` – gerados automaticamente. **Não edite**.
- `src/` – CSS originais (Bootstrap + tema). Edite aqui.
- `build-css.cjs` – remove do CSS as classes que o `index.html` não usa e minifica.

## Como editar
- **Preços/serviços:** altere o texto e o preço direto no `index.html`. O link do WhatsApp de cada item é montado pelo JS com o nome e o preço da tabela, então não há mais link para ajustar à mão.
- **Telefone do WhatsApp:** a constante `NUM` no final do `index.html` (e os links `wa.me` do Início e do Contato).
- **Depois de adicionar uma classe nova ao HTML** (ou uma cor/regra em `src/`), rode:

      npm install     # só na primeira vez
      npm run build:css

## Pendências
- Confirmar o endereço do site em `canonical`, `og:url`, `og:image` e no JSON-LD (hoje `https://ternarioti.github.io/`).
- Botão "Acompanhar OS" está comentado no HTML; falta definir o link.
- Prazo e condições da garantia (hoje: "informados no orçamento").
