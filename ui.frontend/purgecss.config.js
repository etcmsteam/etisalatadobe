const glob = require('glob');

// TODO: Need to add this when policies for eandenterprise finalized on AEM
/* const eAndEnterprisePolicyClassesStr = fs.readFileSync('../ui.content/src/main/content/jcr_root/conf/etisalat/settings/wcm/policies/.content.xml', 'utf-8');
const eAndEnterprisePolicyClasses = [];
eAndEnterprisePolicyClassesStr.replace(/cq:styleClasses="(.+)"/g, ($1, $2) => {
  eAndEnterprisePolicyClasses.push(new RegExp($2));
}); */

module.exports = {
  paths: [
    // TODO: Need to add this when policies for eandenterprise finalized on AEM
    // ...glob.sync('../ui.content/src/main/content/jcr_root/conf/etisalat/settings/wcm/policies/**/.*.xml', { nodir: true }),
    ...glob.sync('./src/main/webpack/eandenterprise/**/*.js', { nodir: true }),
    ...glob.sync('./src/main/webpack/eandenterprise/**/*.html', { nodir: true }),
    ...glob.sync('./node_modules/swiper/dist/js/swiper.js', { nodir: true }),
  ],
  safelist: {
    greedy: [],
  },
  /* extractors: [
    {
      extractor: (content) => content.match(/[A-Za-z0-9-_:\/]+/g) || [],
      extensions: ['xml'],
    },
  ], */
};

