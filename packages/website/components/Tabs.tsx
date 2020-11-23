import { Tabs as BaseTabs, styles } from '@interop-ui/react-tabs';
import { styled } from '../stitches.config'

const Tabs = styled(BaseTabs, {
  ...styles.root
})

const List = styled(BaseTabs.List, {
  ...styles.tabList
})

const Tab = styled(BaseTabs.Tab, {
  ...styles.tab
})

const Panel = styled(BaseTabs.Panel, {
  ...styles.tabPanel
})
