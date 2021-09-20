import { html } from 'js-beautify';

export default class Story {
  constructor (componentBuilder) {
    this.componentBuilder = componentBuilder;
    this.template = (storyParams) => {
      return componentBuilder({params: storyParams});
    };
  }

  // Docs config
  config ({title, description, argTypes}) {
    return {
      title,
      parameters: {
        docs: {
          description: {
            component: description,
          },
        },
      },
      argTypes: {
        // remove nunjucks props
        __nunjucks_loader_assets__: {
          table: {
            disable: true
          }
        },
        
        // story props
        ...argTypes
      },
    }
  }
  
  // new story
  create (args) {
    const story = this.template.bind({});
    story.args = args;
    story.parameters = {
      docs: {
        source: {
          code: html(this.componentBuilder({params: args}), {
            preserve_newlines: false,
          }),
          language: 'html'
        },
      },
    };

    return story;
  }
}