// next.config.js

module.exports = {
  // Outras configurações do Next.js

  // Configuração para exportar como HTML estático
  // Veja mais detalhes em: https://nextjs.org/docs/advanced-features/static-html-export
  // Remova quaisquer opções obsoletas e use as configurações corretas

  // Exemplo de configuração para exportação estática
  // Note que `target` e `webpack5` não são mais necessários nas versões recentes do Next.js
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      // adicione outras rotas aqui, se necessário
    };
  },
};

  