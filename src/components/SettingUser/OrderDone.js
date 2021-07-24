import { Table } from 'antd'
import PropTypes from 'prop-types'
import { date } from '../assets/js/myMonment'
import moment from 'moment'
import './orderDone.scss'

const OrderDone = ({ dataOrder }) => {
  const columns = [
    {
      title: 'Ngày đặt',
      dataIndex: 'created',
      fixed: 'left',
      width: 130,
      sorter: {
        compare: (a, b) =>
          moment(a.updated).format('x') - moment(b.updated).format('x'),
      },
      render: (text, record) => <p className="antd-link">{date(text)}</p>,
    },
    {
      title: 'Tên khách hàng',
      dataIndex: 'name',
      fixed: 'left',
      width: 150,
      render: (text, record) => <p className="antd-link">{text}</p>,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      render: (text, record) => <p className="antd-link">{text}</p>,
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      width: 350,
      render: (text, record) => <p className="antd-link">{text}</p>,
    },
    {
      title: 'Sản phẩm',
      dataIndex: 'products',
      width: 350,
      render: (text, record) => (
        <div className="antd-link">
          {text.map((item, index) => {
            return <p key={index}>{item.name}</p>
          })}
        </div>
      ),
    },
    {
      title: 'Tổng số lượng',
      dataIndex: 'totalCount',
      render: (text, record) => <p className="antd-link">{text}</p>,
    },
    {
      title: 'Tổng giá',
      dataIndex: 'totalPrice',
      render: (text, record) => (
        <p className="antd-link">{text.toLocaleString()}VNĐ</p>
      ),
    },
    {
      title: 'Phí giao hàng',
      dataIndex: 'trasport',
      render: (text, record) => (
        <p className="antd-link">{text.toLocaleString()}VNĐ</p>
      ),
    },
    {
      title: 'Thành tiền',
      dataIndex: 'intoMeny',
      render: (text, record) => (
        <p className="antd-link">{text.toLocaleString()}VNĐ</p>
      ),
    },
    {
      title: 'Trạng thái',
      dataIndex: 'status',
      width: 130,
      sorter: {
        compare: (a, b) => a.status.localeCompare(b.status),
      },
      fixed: 'right',
      render: (text, record) => (
        <p
          className={`antd-link status ${
            'delivered' === text ? 'done-order' : 'pendding-order'
          }`}
        >
          {text}
        </p>
      ),
    },
  ]

  return (
    <>
      <div className="box-title">
        <h6 className="title-info">Quản lý đơn hàng</h6>
      </div>

      <div className="order-box">
        <Table
          rowKey="id"
          columns={columns}
          dataSource={dataOrder}
          pagination={dataOrder.length > 10}
          scroll={{ x: 1700 }}
        />
      </div>
    </>
  )
}

OrderDone.propTypes = {
  data: PropTypes.array,
  url: PropTypes.string,
}

OrderDone.defaultProps = {
  data: [],
  url: '',
}

export default OrderDone
