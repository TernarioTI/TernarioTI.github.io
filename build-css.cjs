// Uso: npm run build:css
// Lê src/*.css, remove as classes que o index.html não usa e grava os .min.css na raiz.
const fs = require('fs');
const { PurgeCSS } = require('purgecss');
const CleanCSS = require('clean-css');

(async () => {
  const resultados = await new PurgeCSS().purge({
    content: ['index.html'],
    css: ['src/meu-estilo.css', 'src/bootstrap-icons.css'],
    keyframes: true,
    // classes trocadas pelo JS em tempo de execução
    safelist: { standard: ['d-none', 'aberta', 'topo', 'travado', 'bg-success', 'bg-danger', 'bg-warning'] }
  });
  for (const r of resultados) {
    const nome = r.file.split('/').pop().replace('.css', '.min.css');
    const min = new CleanCSS({ rebase: false }).minify(r.css);
    if (min.errors.length) throw new Error(min.errors.join('\n'));
    fs.writeFileSync(nome, min.styles);
    console.log(nome, (min.styles.length / 1024).toFixed(1) + ' KB');
  }
})();
