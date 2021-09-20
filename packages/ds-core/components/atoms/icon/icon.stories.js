import Story from '../../story';
import Template from  './template.njk';

const story = new Story(Template);

// DOCS config
export default story.config({
  title: 'Atoms / Icon',
  description: 'Icon element',
  argTypes: {
    name: { control: 'text' }
  }
});

// STORIES
export const Default = story.create({
  name: 'search'
});

export const WithTitle = story.create({
  name: 'search',
  title: 'Search'
});