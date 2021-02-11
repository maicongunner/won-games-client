import { Story, Meta } from '@storybook/react/types-6-0'
import Showcase, { ShowcaseProps } from '.'
import hightlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />

Default.args = {
  title: 'Most Popular',
  hightlight: hightlightMock,
  games: gamesMock
}

export const WhithoutTitle: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WhithoutTitle.args = {
  hightlight: hightlightMock,
  games: gamesMock
}

export const WhithoutHighligth: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WhithoutHighligth.args = {
  title: 'Most Popular',
  games: gamesMock
}

export const WhithoutGames: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WhithoutGames.args = {
  title: 'Most Popular',
  hightlight: hightlightMock
}
