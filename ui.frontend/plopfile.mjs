export default function (plop) {
  // EAndEnterprise Custom Component generator
  plop.setGenerator('EAndEnterprise JS + CSS Custom Component', {
    description: 'EAndEnterprise Custom Component Generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter a name to generate the EAndEnterprise Custom Component',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/main/webpack/eandenterprise/custom-components/{{dashCase name}}/index.js',
        templateFile: 'plop-templates/eandenterprise/custom-component/index.js',
      },
      {
        type: 'add',
        path: 'src/main/webpack/eandenterprise/custom-components/{{dashCase name}}/index.scss',
        templateFile: 'plop-templates/eandenterprise/custom-component/index.scss',
      },
      {
        type: 'add',
        path: 'src/main/webpack/eandenterprise/custom-components/{{dashCase name}}/{{dashCase name}}.html',
        templateFile: 'plop-templates/eandenterprise/custom-component/custom-component.html',
      },
      {
        type: 'add',
        path: 'src/main/webpack/eandenterprise/custom-components/{{dashCase name}}/{{dashCase name}}.js',
        templateFile: 'plop-templates/eandenterprise/custom-component/custom-component.js',
      },
      {
        type: 'add',
        path: 'src/main/webpack/eandenterprise/custom-components/{{dashCase name}}/{{dashCase name}}.scss',
        templateFile: 'plop-templates/eandenterprise/custom-component/custom-component.scss',
      },
      {
        type: 'add',
        path: 'src/main/webpack/eandenterprise/custom-components/{{dashCase name}}/{{dashCase name}}.stories.js',
        templateFile: 'plop-templates/eandenterprise/custom-component/custom-component.stories.js',
      }
    ],
  });

  plop.setGenerator('EAndEnterprise CSS Only Custom Component', {
    description: 'EAndEnterprise Custom Component Generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter a name to generate the EAndEnterprise Custom Component',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/main/webpack/eandenterprise/custom-components/{{dashCase name}}/index.scss',
        templateFile: 'plop-templates/eandenterprise/custom-component/index.scss',
      },
      {
        type: 'add',
        path: 'src/main/webpack/eandenterprise/custom-components/{{dashCase name}}/{{dashCase name}}.html',
        templateFile: 'plop-templates/eandenterprise/custom-component/custom-component.html',
      },
      {
        type: 'add',
        path: 'src/main/webpack/eandenterprise/custom-components/{{dashCase name}}/{{dashCase name}}.scss',
        templateFile: 'plop-templates/eandenterprise/custom-component/custom-component.scss',
      },
      {
        type: 'add',
        path: 'src/main/webpack/eandenterprise/custom-components/{{dashCase name}}/{{dashCase name}}.stories.js',
        templateFile: 'plop-templates/eandenterprise/custom-component/custom-component-css-only.stories.js',
      }
    ],
  });

  plop.setGenerator('EAndEnterprise JS Only Custom Component', {
    description: 'EAndEnterprise Custom Component Generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Please enter a name to generate the EAndEnterprise Custom Component',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/main/webpack/eandenterprise/custom-components/{{dashCase name}}/index.js',
        templateFile: 'plop-templates/eandenterprise/custom-component/index.js',
      },
      {
        type: 'add',
        path: 'src/main/webpack/eandenterprise/custom-components/{{dashCase name}}/{{dashCase name}}.html',
        templateFile: 'plop-templates/eandenterprise/custom-component/custom-component.html',
      },
      {
        type: 'add',
        path: 'src/main/webpack/eandenterprise/custom-components/{{dashCase name}}/{{dashCase name}}.js',
        templateFile: 'plop-templates/eandenterprise/custom-component/custom-component.js',
      },
      {
        type: 'add',
        path: 'src/main/webpack/eandenterprise/custom-components/{{dashCase name}}/{{dashCase name}}.stories.js',
        templateFile: 'plop-templates/eandenterprise/custom-component/custom-component.stories.js',
      }
    ],
  });
}
