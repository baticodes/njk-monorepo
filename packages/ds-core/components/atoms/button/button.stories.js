import Story from '../../story';
import Template from  './template.njk';

const story = new Story(Template);

// DOCS config
export default story.config({
  title: 'Atoms / Button',
  description: 'The button element gives users a way to take action in an interface. Tertiary button is the default state',
  argTypes: {
    label: { control: 'text' },
    type: {
      control: { type: 'select', options: ['primary', 'secondary', 'tertiary', 'ghost']},
    },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg'], labels: {
        'sm': 'small',
        'md': 'medium',
        'lg': 'large',
      } },
    },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
    iconOnly: { control: 'text' },
    disabled: { control: 'boolean' },
  }
});

// STORIES
export const Primary = story.create({
  label: 'Botón primario',
  type: 'primary',
  disabled: false
});

export const Secondary = story.create({
  label: 'Botón secundario',
  type: 'secondary',
  disabled: false
});

export const Tertiary = story.create({
  label: 'Botón terciario',
  disabled: false
});

export const Ghost = story.create({
  label: 'Botón fantasma',
  type: 'ghost',
  disabled: false
});

export const Disabled = story.create({
  label: 'Botón deshabilitado',
  disabled: true
});

export const IconOnly = story.create({
  iconOnly: 'search'
});