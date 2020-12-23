import { Story, Meta } from '@storybook/react/types-6-0'
import Highlight, { highLightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: "Read Dead it's back",
    subTitle: "Come see John's new adventures",
    backgroundImage: '/img/red-dead-img.jpg',
    buttonLabel: 'buy now',
    buttonLink: '/rdr2'
  }
} as Meta

export const Default: Story<highLightProps> = (args) => <Highlight {...args} />
