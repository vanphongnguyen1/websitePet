import { Tabs } from 'antd'
import InfoDetailProduct from './InfoDetailProduct'
import FormComponents from './FormComments'

const TabsInfoProduct = ({ idProduct, idGroup }) => {
  const { TabPane } = Tabs
  return (
    <div className="info-detail">
      <Tabs defaultActiveKey="1">
        <TabPane tab="Video giới thiệu" key="1">
          <InfoDetailProduct idGroup={idGroup}/>
        </TabPane>

        <TabPane tab="Bình luận" key="2">
          <FormComponents idProduct={idProduct} />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default TabsInfoProduct
