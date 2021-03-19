import { Story, Meta } from '@storybook/react/types-6-0'
import OrdersList, { OrderListProps } from '.'

import itemsMock from 'components/OrdersList/mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList,
  args: {
    items: itemsMock
  }
} as Meta

export const Default: Story<OrderListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrdersList {...args} />
  </div>
)
