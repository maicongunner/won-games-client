import { Story, Meta } from '@storybook/react/types-6-0'
import Radio, { RadioProps } from '.'

export default {
  title: 'Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<RadioProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Radio
        name="nome"
        label="primeiro"
        labelFor="primeiro"
        value="primeiro"
        defaultChecked
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        name="nome"
        label="segundo"
        labelFor="segundo"
        value="segundo"
        {...args}
      />
    </div>
    <div style={{ padding: 10 }}>
      <Radio
        name="nome"
        label="terceiro"
        labelFor="terceiro"
        value="terceiro"
        {...args}
      />
    </div>
  </>
)
