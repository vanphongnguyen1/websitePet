// chó : 10, mèo: 20, other: 40, accessort.. : 30
export const HOME = "Trang chủ"
export const MEW = "Mèo cảnh"
export const DOG = "Chó cảnh"
export const ACCESSORIES = "Phụ kiện"
export const PETSOTHER = "Thú kiểng"
export const NEW = "Tin tức"
export const SUPORT = "Hỗ trợ khách hàng"
export const SERVICE = "Dịch vụ"
export const COLOR = "#f69"
export const PRODUCTHOT = "Sản phầm bán chạy"

export const groupDogs = 'dogs'
export const groupMews = 'cats'
export const groupOther = 'pet orther'
export const groupAccessories = 'accessories'

export const REGEX = {
  // EMAIL: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,
  EMAIL: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
  PHONE: /(09|03|08|05|07)+([0-9]{8})\b/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
}

export const STATUS_FETCH = {
  SUCCESS: 'success',
  LOADING: 'loading',
  FAILED: 'failed'
}

export const API_NAME = {
  USERS: 'users',
  ORDERS: 'orders',
  CUSTOMERS: 'customers',
  COMMENTS: 'comments',
  PRODUCTS: 'products',
  DETAILORDER: 'detailOrder',
  CART: 'carts',
  PRODUCTINCART: 'productincart',

  TYPEPRODUCT: 'typeProduct',
  PRODUCTDETAILORDER: 'productDetailOrder',

  GROUPS: 'groups',
  LINEAGE: 'lineage',
  GENDER: 'gender',

  IMAGES: 'images',
  KEYSEARCH: 'keySearch',
  PEYMENT: 'peyment',
  STATUS: 'status',
  TRASPORT: 'trasport',
  SLIDER: 'slider',
  STATUSCOMMENTS: 'statusComments',
}

export const DATACONTACT = [
  {
    text: 'Số 347, Cổ Nhuế, Bắc Từ Liêm, Hà Nội',
    iconHeader: 'fas fa-map-marker-alt',
  },
  {
    text: '8:00am-18:00pm',
    iconHeader: 'far fa-alarm-clock',
  },
  {
    text: 'vanphongnguyen34@gmail.com',
    iconHeader: 'far fa-envelope',
  },
  {
    text: '0337 263 377',
    iconHeader: 'fas fa-phone-volume',
  },
]

export const DATAICONTOOLTIP = [
  {
    icon: ' fab fa-facebook-f',
    title: 'Follow on Faceboock'
  },
  {
    icon: 'fab fa-instagram',
    title: 'Follow on Instagram'
  },
  {
    icon: 'fab fa-twitter',
    title: 'Follow on Twitter'
  },
  {
    icon: 'fab fa-snapchat-ghost',
    title: 'Follow on Snapchat'
  },
]

export const DATANAV = [
  {
    title: HOME,
    to: '/'
  },
  {
    title: DOG,
    to: '/dogs'
  },
  {
    title: MEW,
    to: '/cats'
  },
  {
    title: PETSOTHER,
    to: '/pet-other',
  },
  {
    title: ACCESSORIES,
    to: '/accessories'
  },
  {
    title: SERVICE,
    to: '/service',
    child: [
      { title: 'Dịch vụ trông giữ thú cưng' },
      { title: 'Bệnh viện thú y' },
      { title: 'Phối giống chó mèo' },
      { title: 'Spa & Grooming' },
    ]
  },
  {
    title: NEW,
    to: '/news',
    child: [
      { title: 'Tin tức thú cưng'},
      { title: 'Hoạt động Dogily PetShop'},
    ]
  },
  {
    title: SUPORT,
    to: '/suport',
    child: [
      { title: 'Hướng dẫn mua hàng'},
      { title: 'Chính sách bảo hành'},
      { title: 'Chính sách bảo mật'},
      { title: 'Chính sách thanh toán'},
      { title: 'Chính sách giao hàng'},
    ]
  },
]

export const DATANEWS = [
  {
    id: 0,
    large: true,
    src: 'https://dogily.vn/wp-content/uploads/2020/04/pomeranian-nho-nhan-dang-yeu-600x400.jpg',
    title: `Chó Phốc Sóc giá rẻ 250k, 100k lai có lừa đảo không?
      Mua chó Pomeranian mini teacup mặt gấu con giá bao nhiêu
      tại Dogily Pet Shop Tphcm Hà Nội?`,
    text: `Video Giới Thiệu Giống Chó Phốc Sóc Tại Dogily.
      Hình ảnh khách hàng mua chó con check in tại hệ thống
      Dogily Petshop Video Giới Thiệu Giống Chó Phốc Sóc Tại Dogily.
      Hình ảnh khách hàng mua chó con check in tại hệ thống Dogily Petshop`,
    day: 13,
    month: 'Th1'
  },
  {
    id: 1,
    large: false,
    src: 'https://dogily.vn/wp-content/uploads/2020/05/hinh-nen-bai-viet-meo-munchkin-dogily-petshop-420x600.jpg',
    title: `Mèo Munchkin Chân Ngắn`,
    text: `Video Giới Thiệu Giống Chó Phốc Sóc Tại Dogily.
      Hình ảnh khách hàng mua chó con check in tại hệ thống
      Dogily Petshop Video Giới Thiệu Giống Chó Phốc Sóc Tại Dogily.
      Hình ảnh khách hàng mua chó con check in tại hệ thống Dogily Petshop`,
    day: 13,
    month: 'Th1'
  },
  {
    id: 2,
    large: false,
    src: 'https://dogily.vn/wp-content/uploads/2020/06/cho-golden-600x337.jpg',
    title: `Top 8 Giống Chó Golden Retriever Lai Ít Người Biết`,
    text: `Nhận được nhiều thắc mắc về việc mua chó Golden
      Rettriever thuần chủng giá rẻ của nhiều bạn trẻ như ở hệ thống Dogily Petshop.
      Hình ảnh khách hàng mua chó con check in tại hệ thống Dogily Petshop `,
    day: 13,
    month: 'Th1'
  },
  {
    id: 3,
    large: false,
    src: 'https://dogily.vn/wp-content/uploads/2020/06/cho-golden-600x337.jpg',
    title: `Chó Golden Retriever Con Thuần Chủng Mua Bán Giá Bao Nhiêu Tại Dogily Pet Shop ?`,
    text: `4 LÝ DO KHIẾN BẠN PHẢI TÌM MUA NGAY MỘT CÚN GOLDEN VỀ NUÔI,
      mua chó con check in tại hệ thống Dogily Petshop
      Video Giới Thiệu Giống Chó Phốc Sóc Tại Dogily.`,
    day: 13,
    month: 'Th1'
  },
]

export const textBanner = [
  {
    title: 'Năm mới 2021',
    heading: 'Tiết kiệm mới!',
    sub1: 'Tiết kiệm cho những thứ quan trọng của bạn',
    sub2: 'Tại cửa hàng và trực tuyến',
    btn: 'Bắt đầu',
    sale: 'http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/11/sale-25.png'
  },
  {
    title: 'Mua hàng online!',
    heading: 'Tiết kiệm mới!',
    sub1: 'Tiết kiệm cho những thứ quan trọng của bạn',
    sub2: 'Tại cửa hàng và trực tuyến',
    btn: 'Bắt đầu',
    sale: 'http://mauweb.monamedia.net/petcare/wp-content/uploads/2019/11/sale-30.png'
  }
]

// export const DATAVIDEO = [
//   'https://www.youtube.com/embed/QLayz79GrrI?autoplay=1&origin=http://localhost:3000"',
//   'https://www.youtube.com/embed/HVZ-Mtaly0E?autoplay=1&origin=http://localhost:3000"',
//   'https://www.youtube.com/embed/TFZ-nskP6jg?autoplay=1&origin=http://localhost:3000"',
//   'https://www.youtube.com/embed/melUiWWoYbo?autoplay=1&origin=http://localhost:3000"',
//   'https://www.youtube.com/embed/-41J8qaIjUw?autoplay=1&origin=http://localhost:3000"',
//   'https://www.youtube.com/embed/R1jIGphAn7Y?autoplay=1&origin=http://localhost:3000"',
//   'https://www.youtube.com/embed/VwMc9yfvQcQ?autoplay=1&origin=http://localhost:3000"',
//   'https://www.youtube.com/embed/2frAwGpv84I?autoplay=1&origin=http://localhost:3000"',
//   'https://www.youtube.com/embed/ZV0IeaTXfZM?autoplay=1&origin=http://localhost:3000"',
//   'https://www.youtube.com/embed/9XtkIXbpLAo?autoplay=1&origin=http://localhost:3000"',
//   'https://www.youtube.com/embed/PXIlsc9WWI4?autoplay=1&origin=http://localhost:3000"',
//   'https://www.youtube.com/embed/0Tk8b4vHlLw?autoplay=1&origin=http://localhost:3000"',
//   'https://www.youtube.com/embed/wRlrKF4sueg?autoplay=1&origin=http://localhost:3000"'
// ]

export const DATAVIDEO = [
  {
    video: '//www.youtube.com/embed/QLayz79GrrI?autoplay=1&mute=1&enablejsapi=1',
    img: 'https://i.ytimg.com/vi/QLayz79GrrI/hqdefault.jpg'
  },
  {
    video: '//www.youtube.com/embed/HVZ-Mtaly0E?autoplay=1&mute=1&enablejsapi=1',
    img: 'https://i.ytimg.com/vi/HVZ-Mtaly0E/hqdefault.jpg'
  },
  {
    video: '//www.youtube.com/embed/TFZ-nskP6jg?autoplay=1&mute=1&enablejsapi=1',
    img: 'https://i.ytimg.com/vi/TFZ-nskP6jg/hqdefault.jpg'
  },
  {
    video: '//www.youtube.com/embed/melUiWWoYbo?autoplay=1&mute=1&enablejsapi=1',
    img: 'https://i.ytimg.com/vi/melUiWWoYbo/hqdefault.jpg'
  },

  {
    video: '//www.youtube.com/embed/-41J8qaIjUw?autoplay=1&mute=1&enablejsapi=1',
    img: 'https://i.ytimg.com/vi/-41J8qaIjUw/hqdefault.jpg'
  },
  {
    video: '//www.youtube.com/embed/R1jIGphAn7Y?autoplay=1&mute=1&enablejsapi=1',
    img: 'https://i.ytimg.com/vi/R1jIGphAn7Y/hqdefault.jpg'
  },
  {
    video: '//www.youtube.com/embed/VwMc9yfvQcQ?autoplay=1&mute=1&enablejsapi=1',
    img: 'https://i.ytimg.com/vi/VwMc9yfvQcQ/hqdefault.jpg'
  },
  {
    video: '//www.youtube.com/embed/2frAwGpv84I?autoplay=1&mute=1&enablejsapi=1',
    img: 'https://i.ytimg.com/vi/JBq7l9i0baQ/hqdefault.jpg'
  },
  {
    video: '//www.youtube.com/embed/ZV0IeaTXfZM?autoplay=1&mute=1&enablejsapi=1',
    img: 'https://i.ytimg.com/vi/2frAwGpv84I/hqdefault.jpg'
  },
  {
    video: '//www.youtube.com/embed/9XtkIXbpLAo?autoplay=1&mute=1&enablejsapi=1',
    img: 'https://i.ytimg.com/vi/ZV0IeaTXfZM/hqdefault.jpg'
  },
  {
    video: '//www.youtube.com/embed/PXIlsc9WWI4?autoplay=1&mute=1&enablejsapi=1',
    img: 'https://i.ytimg.com/vi/PXIlsc9WWI4/hqdefault.jpg'
  },
  {
    video: '//www.youtube.com/embed/0Tk8b4vHlLw?autoplay=1&mute=1&enablejsapi=1',
    img: 'https://i.ytimg.com/vi/0Tk8b4vHlLw/hqdefault.jpg'
  },
  {
    video: '//www.youtube.com/embed/wRlrKF4sueg?autoplay=1&mute=1&enablejsapi=1',
    img: 'https://i.ytimg.com/vi/wRlrKF4sueg/hqdefault.jpg'
  },
]
