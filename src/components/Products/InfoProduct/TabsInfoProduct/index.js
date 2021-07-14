import { Tabs } from 'antd'
import InfoDetailProduct from './InfoDetailProduct'
import FormComponents from './FormComments'

const TabsInfoProduct = ({ idProduct }) => {
  const { TabPane } = Tabs

  const callback = key => {
    console.log(key)
  }

  return (
    <div className="info-detail">
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Video giới thiệu" key="1">
          <InfoDetailProduct />
        </TabPane>

        <TabPane tab="Bình luận" key="2">
          <FormComponents idProduct={idProduct} />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default TabsInfoProduct
