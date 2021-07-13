import { Tabs } from 'antd'
import InfoDetailProduct from './InfoDetailProduct'
import FormComponent from './FormComponent'

const TabsInfoProduct = () => {
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
          <FormComponent />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default TabsInfoProduct
