// chó : 10, mèo: 20, other: 40, accessort.. : 30
import {v4 as uuid} from 'uuid'

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
    to: '/dogs',
    child: [
      { title: 'Chó Akita' },
      { title: 'Chó Alaska' },
      { title: 'Chó Bull Pháp' },
      { title: 'Chó Chow Chow' },
      { title: 'Chó Corgi' },
      { title: 'Chó Golden' },
      { title: 'Chó Husky' },
      { title: 'Chó Labrador' },
      { title: 'Chó Shiba' },
    ],
  },
  {
    title: MEW,
    to: '/mews',
    child: [
      { title: 'Mèo Abyssinian' },
      { title: 'Mèo Ashera' },
      { title: 'Mèo Chartruex' },
      { title: 'Mèo Japanese Bobtail' },
    ],
  },
  {
    title: ACCESSORIES,
    to: '/accessories',
    child: [
      { title: 'Đồ chơi' },
      { title: 'Thức ăn' },
      { title: 'Vận dụng ăn uống' },
      { title: 'Lồng nuôi' },
    ],
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
    title: PETSOTHER,
    to: '/pet-other',
    child: [
      { title: 'Bò sát cảnh' },
      { title: 'Chim cảnh' },
      { title: 'Chuột Hamster' },
      { title: 'Cá cảnh' },
    ],
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

export const dataDogs = [
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/02/cho-alaska-soi-250x300.jpeg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/02/MG_1098-250x300.jpeg',
    name: 'Chó Alaska nâu đỏ – Sói',
    group: groupDogs,
    title: 'Bán chó cảnh',
    price:10000,
    hot: false,
    url: 'cho-alaska-nau-do',
    lineageId: 10
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/08/1-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/08/2-250x300.jpg',
    name: 'Chó Border Collie nâu đỏ – Pican',
    group: groupDogs,
    title: 'Bán chó cảnh',
    price: 50000,
    hot: true,
    lineageId: 11,
    url: 'cho-border-collie-nau-do-pican'
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/08/1.cho-alaska-nau-do-dogily-petsho-4-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/08/2.cho-alaska-nau-do-dogily-petsho-4-250x300.jpg',
    name: 'Chó Alaska nâu đỏ, size giant – Tica',
    group: groupDogs,
    title: 'Bán chó cảnh',
    price: 30000,
    hot: false,
    lineageId: 12,
    url: 'cho-alaska-nau-do-tica'
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/10/3-48-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/10/1-43-250x300.jpg',
    name: 'Chó Akita Inu màu vàng – Cần Tây',
    group: groupDogs,
    title: 'Bán chó cảnh',
    price: 100000,
    hot: false,
    lineageId: 13,
    url: 'cho-akita-inu-mau-vang-can-tay'
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/11/3-11-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/11/2-12-250x300.jpg',
    name: 'Chó Phốc sóc mini – Nili',
    group: groupDogs,
    title: 'Bán chó cảnh',
    price: 20000,
    hot: true,
    lineageId: 14,
    url: 'cho-phoc-soc-mini-nili',
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/11/1-1-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/11/2-1-250x300.jpg',
    name: 'Chó Phốc sóc màu vàng kem – Tiko',
    group: groupDogs,
    title: 'Bán chó cảnh',
    price: 200000,
    hot: true,
    lineageId: 15,
    url: 'cho-phoc-soc-mau-vang-kem-tiko'
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/02/cho-bichon-2-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/02/cho-bichon-8-1-250x300.jpg',
    name: 'Chó Bichon Frise – Simba',
    group: groupDogs,
    title: 'Bán chó cảnh',
    price: 150000,
    hot: true,
    lineageId: 16,
    url: 'cho-bichon-frise-simba'
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/02/cho-golden-1-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/02/cho-golden-1-1-250x300.jpg',
    name: 'Chó Golden Retriever – Aries',
    group: groupDogs,
    title: 'Bán chó cảnh',
    price: 50000,
    hot: true,
    lineageId: 17,
    url: 'cho-golden-retriever-aries'
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/09/1.-cho-dom-dogily-petshop-4-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/09/2.cho-dom-dogily-petshop-5-250x300.jpg',
    name: 'Chó Đốm (Dalmatian) – Ca cao',
    group: groupDogs,
    title: 'Bán chó cảnh',
    price: 20000,
    hot: false,
    lineageId: 18,
    url: 'cho-dom-dalmatian-ca-cao'
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/12/cho-basenji-5-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/12/cho-basenji-250x300.jpg',
    name: 'Chó Basenji – Đốp',
    group: groupDogs,
    title: 'Bán chó cảnh',
    price: 10000,
    hot: true,
    lineageId: 19,
    url: 'cho-basenji-dop'
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/02/cho-golden-1-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/02/cho-golden-1-1-250x300.jpg',
    name: 'Chó Golden Retriever – Aries',
    group: groupDogs,
    title: 'Bán chó cảnh',
    price: 50000,
    hot: true,
    lineageId: 10,
    url: 'cho-golden-retriever-aries'
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/09/1.-cho-dom-dogily-petshop-4-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/09/2.cho-dom-dogily-petshop-5-250x300.jpg',
    name: 'Chó Đốm (Dalmatian) – Ca cao',
    group: groupDogs,
    title: 'Bán chó cảnh',
    price: 20000,
    hot: false,
    lineageId: 11,
    url: 'cho-dom-dalmatian-ca-cao'
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/12/cho-basenji-5-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/12/cho-basenji-250x300.jpg',
    name: 'Chó Basenji – Đốp',
    group: groupDogs,
    title: 'Bán chó cảnh',
    price: 10000,
    hot: true,
    lineageId: 12,
    url: 'cho-basenji-dop'
  }
]

export const dataMews = [
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/12/Meo-ALD-trang-thuan-chung-Dogily-Petshop-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/12/Meo-ALD-trang-thuan-chung-Dogily-Petshop-1-250x300.jpg',
    group: groupMews,
    url: 'meo-anh-long-trang-miu',
    name: 'Mèo Anh lông dài trắng – Miu',
    title: 'Bán mèo cảnh',
    lineageId: 20,
    price: 100000,
    hot: true
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/10/1-55-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/10/3-61-250x300.jpg',
    name: 'Siêu phẩm mào ALN màu Golden – Yuna',
    group: groupMews,
    url: 'sieu-pham-meo-aln-mau-golden-yuna',
    title: 'Bán mèo cảnh',
    lineageId: 21,
    price: 80000,
    hot: true
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/08/DSC04567-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/08/DSC04594-250x300.jpg',
    name: 'Mèo Anh lông ngắn siêu phẩm màu silver – Alex',
    group: groupMews,
    url: 'meo-anh-long-ngan-mau-siler-alex',
    title: 'Bán mèo cảnh',
    lineageId: 22,
    price: 100000,
    hot: true
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2019/12/meo-scottish-fold-tai-cup-tabby-dogily-301219-1-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2019/12/meo-scottish-fold-tai-cup-tabby-dogily-301219-3-250x300.jpg',
    name: 'Mèo tai cụp Scottish Fold silver – Chilly',
    group: groupMews,
    url: 'meo-tai-cup-scottish-fold-sliver-chilly',
    title: 'Bán mèo cảnh',
    lineageId: 23,
    price: 90000,
    hot: false
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/09/1.Meo-munchkin-mau-bicolor-dogily-petshop-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/09/6.Meo-munchkin-mau-bicolor-dogily-petshop-10-250x300.jpg',
    name: 'Mèo Munchkin màu Bicolor – Củ tỏi',
    group: groupMews,
    url: 'meo-munchkin-mau-bicolor-cu-toi',
    title: 'Bán mèo cảnh',
    lineageId: 24,
    price: 200000,
    hot: true
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/12/Meo-xiem-mau-hyma-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/12/Meo-xiem-mau-hyma-3-250x300.jpg',
    name: 'Mèo Xiêm màu Hyma – Bảo bảo',
    group: groupMews,
    url: 'meo-xiem-mau-hyam',
    title: 'Bán mèo cảnh',
    lineageId: 25,
    price: 200000,
    hot: true
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/11/3-37-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/11/1-37-250x300.jpg',
    name: 'Mèo Aln màu xám xanh – Cute',
    group: groupMews,
    url: 'meo-aln-xanh-xam-cute',
    title: 'Bán mèo cảnh',
    lineageId: 26,
    price: 50000,
    hot: true
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/12/Meo-bengal-dogily-petshop-4-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/12/Meo-bengal-dogily-petshop-250x300.jpg',
    name: 'Cặp mèo Bengal màu nâu đỏ – Jax và Ashe',
    group: groupMews,
    url: 'cap-meo-bengal-mau-nau-do',
    title: 'Bán mèo cảnh',
    lineageId: 27,
    price: 40000,
    hot: false
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/12/Meo-Maine-Coon-Dogily-Petshop-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/12/Meo-Maine-Coon-Dogily-Petshop-5-250x300.jpg',
    name: 'Mèo Maine Coon màu vàng trắng – Cà Rốt',
    group: groupMews,
    url: 'meo-maine-coon-mau-vang-trang',
    title: 'Bán mèo cảnh',
    lineageId: 28,
    price: 200000,
    hot: false
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/12/Meo-Bengal-3-250x300.jpg',
    srcSub: 'https://dogily.vn/wp-content/uploads/2020/12/Meo-Bengal-4-250x300.jpg',
    name: 'Mèo Maine Coon màu vàng trắng – Cà Rốt',
    group: groupMews,
    url: 'meo-maine-coon-mau vang-trang',
    title: 'Bán mèo cảnh',
    lineageId: 29,
    price: 20000,
    hot: false
  },
]

export const dataPetOther = [
  {
    id: uuid(),
    lineageId: 40,
    src: 'https://dogily.vn/wp-content/uploads/2019/08/avarta-ran-ngo.jpg',
    name: 'Rắn ngô Corn Snake',
    group: groupOther,
    title: 'BÁN BÒ SÁT CẢNH',
    price: 100000,
    url: 'ran-ngo-corn-snake'
  },
  {
    id: uuid(),
    lineageId: 41,
    src: 'https://dogily.vn/wp-content/uploads/2019/09/avarta-rua-bung-vang-dogily.vn_.jpg',
    group: groupOther,
    name: 'Rùa bụng vàng Yellow Belly Turtle',
    title: 'BÁN BÒ SÁT CẢNH',
    price: 90000,
    url: 'rua-bung-vang-yellow-belly-turtle'
  },
  {
    id: uuid(),
    lineageId: 42,
    src: 'https://dogily.vn/wp-content/uploads/2019/07/nhen-canh-red-g.rose-tarantula-250x300.jpg',
    group: groupOther,
    name: 'Nhện cảnh Red G.Rose Tarantula',
    title: 'BÁN BÒ SÁT CẢNH',
    price: 80000,
    url: 'nhen-canh-red-golrose-tarantula'
  },
  {
    id: uuid(),
    lineageId: 43,
    src: 'https://dogily.vn/wp-content/uploads/2019/08/Untitled-1-6.jpg',
    name: 'Rùa sao Ấn Độ – Indian Star Tortoise',
    group: groupOther,
    title: 'BÁN BÒ SÁT CẢNH',
    price: 200000,
    url: 'rua-sao-an-do'
  },
  {
    id: uuid(),
    lineageId: 44,
    src: 'https://dogily.vn/wp-content/uploads/2019/08/Untitled-1-5.jpg',
    name: 'Rắn sữa – milk shake',
    group: groupOther,
    title: 'BÁN BÒ SÁT CẢNH',
    price: 100000,
    url: 'ran-sua'
  },
  {
    id: uuid(),
    lineageId: 45,
    src: 'https://dogily.vn/wp-content/uploads/2019/08/68464720_740680509699667_3908864639626117120_n-250x288.jpg',
    name: 'Sóc bay Úc nhập khẩu Thái Lan',
    group: groupOther,
    title: 'Bán các loại thú cảnh khác',
    price: 30000,
    url: 'soc-bay-uc'
  },
  {
    id: uuid(),
    lineageId: 46,
    src: 'https://dogily.vn/wp-content/uploads/2019/07/nhen-chan-trang-white-knee-tarantula-3-250x300.jpg',
    name: 'Nhện chân trắng White Knee Tarantula',
    group: groupOther,
    title: 'Bán các loại thú cảnh khác',
    price: 20000,
    url: 'nhen-chan-ngan-white-knee-tarantula'
  },
  {
    id: uuid(),
    lineageId: 47,
    src: 'https://dogily.vn/wp-content/uploads/2019/07/nhen-goi-do-red-knee-tarantula-6-250x300.jpg',
    name: 'Nhện gối đỏ Red Knee Tarantula',
    group: groupOther,
    title: 'Bán các loại thú cảnh khác',
    price: 30000,
    url: 'nhen-goi-do-red-knee-tarantula'
  },
  {
    id: uuid(),
    lineageId: 48,
    src: 'https://dogily.vn/wp-content/uploads/2019/08/Untitled-1-7-250x300.jpg',
    name: 'Gián đất Dubia',
    group: groupOther,
    title: 'Bán các loại thú cảnh khác',
    price: 30000,
    url: 'gian-dat-dubia'
  },
  {
    id: uuid(),
    lineageId: 49,
    src: 'https://dogily.vn/wp-content/uploads/2019/07/ech-bo-chau-phi-affican-bull-frog-2-250x300.jpg',
    name: 'Ếch bò châu Phi – Afican Bull Frog',
    group: groupOther,
    title: 'Bán các loại thú cảnh khác',
    price: 50000,
    url: 'exh-bo-chau-phi'
  },
]

export const dataAccess = [
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/02/luoc-chai-long-cho-cho-meo-size-m-bobo-1.jpg',
    name: 'Lược chải lông cho chó mèo size L Fashion Pet Comb Bobo',
    group: groupAccessories,
    title: 'PHỤ KIỆN CHÓ MÈO',
    lineageId: 31,
    price: 10000,
    url: 'luoc-chia-long-thu-sizeL'
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/02/luoc-chai-long-cho-cho-meo-size-s-fashion-pet-comb-bobo.jpg',
    name: 'Lược chải lông cho chó mèo size S Fashion Pet Comb Bobo',
    group: groupAccessories,
    title: 'PHỤ KIỆN CHÓ MÈO',
    lineageId: 32,
    price: 20000,
    url: 'luoc-chai-long-thu-sizeS'
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/02/luoc-chai-long-cho-cho-meo-size-m-fashion-pet-comb-bobo.jpg',
    name: 'Lược chải lông cho chó mèo size M Fashion Pet Comb Bobo',
    group: groupAccessories,
    title: 'PHỤ KIỆN CHÓ MÈO',
    lineageId: 33,
    price: 30000,
    url: 'luoc-chai-long-thu-sizeM'
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/02/day_dat_yem_police_25mm.jpg',
    name: 'Dây dắt Yếm Police 6cm',
    group: groupAccessories,
    title: 'PHỤ KIỆN CHÓ MÈO',
    lineageId: 34,
    price: 10000,
    url: 'day-dat-yem-police-6cm'
  },
  {
    id: uuid(),
    src: 'https://dogily.vn/wp-content/uploads/2020/02/vong-co-luc-lac-cac-hinh.jpg',
    name: 'Vòng cổ lục lạc các hình cho chó mèo',
    group: groupAccessories,
    title: 'PHỤ KIỆN CHÓ MÈO',
    lineageId: 35,
    price: 5000,
    url: 'vong-co-luc-lac-cac-hing-cho-pets'
  },
  {
    name: 'Nhà Vải Có Mái Cho Chó Mèo S',
    id: uuid(),
    lineageId: 36,
    price: 50000,
    srcSub: 'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/12/15/03/17/1576379839_37.2-nha-vai-co-mai-cho-meo.jpg?v=4',
    src: 'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/12/15/03/17/1576379842_37.3-nha-vai-co-mai-cho-meo.jpg?v=4',
    group: groupAccessories,
    title: 'PHỤ KIỆN CHÓ MÈO',
    url: 'nha-vai-co-mai-cho-cho-meo-s'
  },
  {
    name: 'Khăn Len Chó Mèo',
    price: 800000,
    id: uuid(),
    lineageId: 37,
    srcSub: 'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/11/19/12/12/1574165557_30.5-khan-len---mau-ngau-nhien-6.jpg?v=4',
    src: 'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/11/19/12/09/1574165376_30.-3-khan-len---mau-ngau-nhien-4.jpg?v=4',
    group: groupAccessories,
    title: 'PHỤ KIỆN CHÓ MÈO',
    url: 'khan-len-cho-meo'
  },
  {
    name: 'Nhà Gỗ Biệt Thự (86 X 38x 57)- Màu Ngẫu Nhiên',
    price: 100000,
    id: uuid(),
    lineageId: 38,
    srcSub: 'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/11/19/09/19/1574155181_20.1nha-go-biet-thu-86x38x57---mau-ngau-nhien.jp.jpg',
    src: 'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/11/19/09/19/1574155194_20.2nha-go-biet-thu-86x38x57---mau-ngau-nhien.jp.jpg',
    group: groupAccessories,
    title: 'PHỤ KIỆN CHÓ MÈO',
    url: 'nha-go-biet-thu-86x38x57'
  },
  {
    name: 'ANF - Thức Ăn Chó 6 Free Vị Cừu 2kg',
    price: 100000,
    id: uuid(),
    lineageId: 39,
    src: 'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/07/24/10/34/1563964451_thuc-an-cho-cho-hon-hop-vi-thit-cuu-anf-6-free-lam.jpg?v=4',
    group: groupAccessories,
    title: 'PHỤ KIỆN CHÓ MÈO',
    url: 'anf-thuc-an-cho-6-free-vi-cuu'
  },
  {
    name: `Hạt O'Nature Adult Rau Và Cá Hồi 900g`,
    price: 100000,
    id: uuid(),
    lineageId: 310,
    src: 'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/07/24/10/34/1563964451_thuc-an-cho-cho-hon-hop-vi-thit-cuu-anf-6-free-lam.jpg?v=4',
    group: groupAccessories,
    title: 'PHỤ KIỆN CHÓ MÈO',
    url: 'hat-onature-adult-rau-va-ca-hoi-900g'
  },
  {
    name: `Thức Ăn Cho Mèo Catsrang 400g`,
    price: 1000000,
    id: uuid(),
    lineageId: 311,
    src: 'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/04/18/04/43/1555562619_4e2c0b5f08f3d01589180c468ca6e38f.jpg?v=4',
    group: groupAccessories,
    title: 'PHỤ KIỆN CHÓ MÈO',
    url: 'thuc-an-cho-meo-catsrang-400g'
  },
  {
    name: `Hạt Mềm Zenith Cho Chó 300g`,
    price: 50000,
    id: uuid(),
    lineageId: 312,
    srcSub: 'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/03/21/08/14/1553156522_25a612b93d1f47fbbd2a6db63aea139e.jpg?v=4',
    src: 'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/03/21/08/13/1553156501_54525616_1234128480076572_1354118766551629824_n.jp.jpg?v=4',
    group: groupAccessories,
    title: 'PHỤ KIỆN CHÓ MÈO',
    url: 'hat-mem-zenith-cho-cho-300g'
  },
  {
    name: `Cát Thủy Tinh Kitcat Chanh 5L`,
    price: 510000,
    id: uuid(),
    lineageId: 313,
    src: 'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/02/25/12/36/1551098632_1499372252469-jpeg.jpg?v=4',
    group: groupAccessories,
    title: 'PHỤ KIỆN CHÓ MÈO',
    url: 'cat-thuy-sinh-kitcat-chanh-5l'
  },
  {
    name: `Cát Vệ Sinh Mèo Katz Comfort Hương Táo (10L)`,
    price: 120000,
    id: uuid(),
    lineageId: 314,
    src: 'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/02/25/08/45/1551084794_ac1fe51493e0174149655bbd2ce18b0d.jpg?v=4',
    group: groupAccessories,
    title: 'PHỤ KIỆN CHÓ MÈO',
    url: 'cat-ve-sinh-meo-katz-comfort-huong-tao-10l'
  },
  {
    name: `Bát Cấp Nước Tự Động Size Nhỏ`,
    price: 12000,
    id: uuid(),
    lineageId: 315,
    src: 'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/03/16/03/39/1552708060_bat_va_binh_600x390.jpg?v=4',
    srcSub: 'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/03/16/03/39/1552708051_bat-uong-nuoc-tu-dong-cho-cho-meo-1m4g3-vj5p13_sim.jpg?v=4',
    group: groupAccessories,
    title: 'PHỤ KIỆN CHÓ MÈO',
    url: 'bat-cap-nuoc-tu-dong-nho'
  },
  {
    name: `Bát Ăn Đôi Cho Chó Mèo PinterChains Size Lớn`,
    price: 120000,
    id: uuid(),
    lineageId: 316,
    src: 'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/03/16/02/21/1552703380_80ffd9a9b72a457796bd7ab0293d5d92.jpg?v=4',
    group: groupAccessories,
    title: 'PHỤ KIỆN CHÓ MÈO',
    url: 'bat-an-doi-cho-cho-meo-pinterchains-lon'
  },
  {
    name: `Áo Cho Thú Cưng TĐ Gấu Teddy`,
    price: 120000,
    id: uuid(),
    lineageId: 317,
    src: 'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/10/22/09/45/1571737554_70534531_966761040344819_948004122378895360_n.jpg?v=4',
    srcSub: 'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/10/22/09/45/1571737551_74789168_1785044821639201_3548865153799815168_n.jp.jpg?v=4',
    group: groupAccessories,
    title: 'PHỤ KIỆN CHÓ MÈO',
    url: 'ao-cho-thu-cung-gau-teddy'
  },
]

export const dataAll = [...dataDogs, ...dataMews, ...dataPetOther, ...dataAccess]

export const infoProduct = [
  {
    id: uuid(),
    lineageProductId: 10,
    imgs: [
      'https://dogily.vn/wp-content/uploads/2020/02/cho-alaska-soi-510x765.jpeg',
      'https://dogily.vn/wp-content/uploads/2020/02/MG_1101-510x765.jpeg',
      'https://dogily.vn/wp-content/uploads/2020/02/MG_1111-510x765.jpeg',
      'https://dogily.vn/wp-content/uploads/2020/02/MG_1124-510x765.jpeg',
      'https://dogily.vn/wp-content/uploads/2020/02/MG_1127-510x765.jpeg',
    ],
    description: [
      {
        name: 'Sói',
        lineage: 'Chó Alaska Malamute',
        color: 'Nâu đỏ',
        gender: 'Đực',
        age: '2,5 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 11,
    imgs: [
      'https://dogily.vn/wp-content/uploads/2020/08/1.jpg',
      'https://dogily.vn/wp-content/uploads/2020/08/2.jpg',
      'https://dogily.vn/wp-content/uploads/2020/08/3.jpg',
      'https://dogily.vn/wp-content/uploads/2020/08/4.jpg',
      'https://dogily.vn/wp-content/uploads/2020/08/5.jpg',
    ],
    description: [
      {
        name: 'Nâu',
        lineage: 'Chó Border Collie nâu đỏ – Pican',
        color: 'Nâu đỏ',
        gender: 'Đực',
        age: '2,5 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 12,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2020/08/1.cho-alaska-nau-do-dogily-petsho-4.jpg",
      "https://dogily.vn/wp-content/uploads/2020/08/2.cho-alaska-nau-do-dogily-petsho-4.jpg",
      "https://dogily.vn/wp-content/uploads/2020/08/3.cho-alaska-nau-do-dogily-petshop-8.jpg",
      "https://dogily.vn/wp-content/uploads/2020/08/4.cho-alaska-nau-do-dogily-petshop-8.jpg",
      "https://dogily.vn/wp-content/uploads/2020/08/5.-cho-alaska-nau-do-dogily-petshop-6.jpg",
      "https://dogily.vn/wp-content/uploads/2020/08/7.cho-alaska-nau-do-dogily-petshop-8-510x340.jpg",
      "https://dogily.vn/wp-content/uploads/2020/08/6.-cho-alaska-nau-do-dogily-petshop-7-510x340.jpg"
    ],
    description: [
      {
        name: 'Bé bự',
        lineage: 'Giống Chó Alaska Giant',
        color: 'Nâu đỏ',
        gender: 'Đực',
        age: '2,5 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 13,
    imgs: [
      'https://dogily.vn/wp-content/uploads/2020/10/3-48-510x765.jpg',
      'https://dogily.vn/wp-content/uploads/2020/10/1-43-510x765.jpg',
      'https://dogily.vn/wp-content/uploads/2020/10/2-50-510x765.jpg',
      "https://dogily.vn/wp-content/uploads/2020/10/3-49-510x765.jpg",
      "https://dogily.vn/wp-content/uploads/2020/10/4-50-510x765.jpg",
      "https://dogily.vn/wp-content/uploads/2020/10/5-22-510x881.jpg",
    ],
    description: [
      {
        name: 'Cần tây',
        lineage: 'Chó Akita Inu',
        color: 'Màu vàng',
        gender: 'Đực',
        age: '2,5 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 14,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2020/11/3-11-510x776.jpg",
      "https://dogily.vn/wp-content/uploads/2020/11/2-12-510x648.jpg",
      "https://dogily.vn/wp-content/uploads/2020/11/2-12-510x648.jpg",
      "https://dogily.vn/wp-content/uploads/2020/11/3-12-510x776.jpg",
      "https://dogily.vn/wp-content/uploads/2020/11/4-12-510x664.jpg",
    ],
    description: [
      {
        name: 'Sóc',
        lineage: 'Chó Phốc sóc mini',
        color: 'Màu trắng',
        gender: 'Đực',
        age: '2,5 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 15,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2020/11/1-1-510x553.jpg",
      "https://dogily.vn/wp-content/uploads/2020/11/2-1-510x576.jpg",
      "https://dogily.vn/wp-content/uploads/2020/11/3-1-510x623.jpg",
      "https://dogily.vn/wp-content/uploads/2020/11/4-1-510x579.jpg",
    ],
    description: [
      {
        name: 'Sóc',
        lineage: 'Chó Phốc sóc',
        color: 'Màu vàng kem',
        gender: 'Đực',
        age: '2,5 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 16,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2020/02/cho-bichon-2.jpg",
      "https://dogily.vn/wp-content/uploads/2020/02/cho-bichon-8-1.jpg",
      "https://dogily.vn/wp-content/uploads/2020/02/cho-bichon-3.jpg",
      "https://dogily.vn/wp-content/uploads/2020/02/cho-bichon-4-510x340.jpg",
      "https://dogily.vn/wp-content/uploads/2020/02/cho-bichon-5-510x340.jpg",
      "https://dogily.vn/wp-content/uploads/2020/02/cho-bichon-6-510x340.jpg",
      "https://dogily.vn/wp-content/uploads/2020/02/cho-bichon-7.jpg",
      "https://dogily.vn/wp-content/uploads/2020/02/cho-bichon-1.jpg",


    ],
    description: [
      {
        name: 'Simba',
        lineage: 'Chó Bichon Frise',
        color: 'Màu trắng',
        gender: 'Đực',
        age: '7 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 17,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2020/02/cho-golden-1.jpg",
      "https://dogily.vn/wp-content/uploads/2020/02/cho-golden-1-1.jpg",
      "https://dogily.vn/wp-content/uploads/2020/02/cho-golden-2.jpg",
      "https://dogily.vn/wp-content/uploads/2020/02/cho-golden-3.jpg",
      "https://dogily.vn/wp-content/uploads/2020/02/cho-golden-4-510x340.jpg",
      "https://dogily.vn/wp-content/uploads/2020/02/cho-golden-5.jpg",
    ],
    description: [
      {
        name: 'Simba',
        lineage: 'Chó Golden Retriever',
        color: 'Vàng nhạt',
        gender: 'Đực',
        age: '7 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 18,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2020/09/1.-cho-dom-dogily-petshop-4.jpg",
      "https://dogily.vn/wp-content/uploads/2020/09/2.cho-dom-dogily-petshop-5.jpg",
      "https://dogily.vn/wp-content/uploads/2020/09/3.cho-dom-dogily-petshop-3.jpg",
      "https://dogily.vn/wp-content/uploads/2020/09/4.cho-dom-dogily-petshop.jpg",
      "https://dogily.vn/wp-content/uploads/2020/09/5.cho-dom-dogily-petshop-2.jpg",
    ],
    description: [
      {
        name: 'Đốm',
        lineage: 'Chó Đốm',
        color: 'Đen trắng',
        gender: 'Đực',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 19,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2020/12/cho-basenji-5-510x706.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/cho-basenji-1-510x383.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/cho-basenji-2-510x383.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/cho-basenji-4-510x777.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/cho-basenji-6-510x750.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/cho-basenji-7-510x750.jpg",
    ],
    description: [
      {
        name: 'Sen',
        lineage: 'chó Basenji',
        color: 'Vàng',
        gender: 'Đực',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 20,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-ALD-trang-thuan-chung-Dogily-Petshop-1-510x391.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-ALD-trang-thuan-chung-Dogily-Petshop-510x405.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-ALD-trang-thuan-chung-Dogily-Petshop-2-510x396.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-ALD-trang-thuan-chung-Dogily-Petshop-3-510x383.jpg",
      'https://dogily.vn/wp-content/uploads/2020/12/Meo-ALD-trang-thuan-chung-Dogily-Petshop-4-510x398.jpg',

    ],
    description: [
      {
        name: 'Miu',
        lineage: 'Mèo Anh lông dài',
        color: 'Trắng',
        gender: 'Đực',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 21,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2020/10/3-61-510x380.jpg",
      "https://dogily.vn/wp-content/uploads/2020/10/1-55-510x737.jpg",
      "https://dogily.vn/wp-content/uploads/2020/10/2-61-510x359.jpg",
      "https://dogily.vn/wp-content/uploads/2020/10/4-61-510x356.jpg",
      "https://dogily.vn/wp-content/uploads/2020/10/3-61-510x380.jpg",
    ],
    description: [
      {
        name: 'Yuna ',
        lineage: 'Mèo ALN',
        color: 'Golden',
        gender: 'Đực',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 22,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2020/08/DSC04567-510x340.jpg",
      "https://dogily.vn/wp-content/uploads/2020/08/DSC04594-510x765.jpg",
      "https://dogily.vn/wp-content/uploads/2020/08/DSC04595-510x765.jpg",
      "https://dogily.vn/wp-content/uploads/2020/08/DSC04599-510x340.jpg",
    ],
    description: [
      {
        name: 'Bánh Bao ',
        lineage: 'Mèo British Shorthair',
        color: 'xám xanh',
        gender: 'cái',
        age: '8 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 23,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2019/12/meo-scottish-fold-tai-cup-tabby-dogily-301219-3-510x510.jpg",
      "https://dogily.vn/wp-content/uploads/2019/12/meo-scottish-fold-tai-cup-tabby-dogily-301219-1-510x340.jpg",
      'https://dogily.vn/wp-content/uploads/2019/12/meo-scottish-fold-tai-cup-tabby-dogily-301219-2-510x340.jpg',
      "https://dogily.vn/wp-content/uploads/2019/12/meo-scottish-fold-tai-cup-tabby-dogily-301219-7-510x340.jpg",
      "https://dogily.vn/wp-content/uploads/2019/12/meo-scottish-fold-tai-cup-tabby-dogily-301219-9.jpg",
      "https://dogily.vn/wp-content/uploads/2019/12/meo-scottish-fold-tai-cup-tabby-dogily-301219-2-510x340.jpg",
    ],
    description: [
      {
        name: 'Chilly ',
        lineage: 'Mèo Scottish',
        color: 'bạc',
        gender: 'cái',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 24,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2020/09/1.Meo-munchkin-mau-bicolor-dogily-petshop.jpg",
      "https://dogily.vn/wp-content/uploads/2020/09/6.Meo-munchkin-mau-bicolor-dogily-petshop-10-510x340.jpg",
      "https://dogily.vn/wp-content/uploads/2020/09/3.Meo-munchkin-mau-bicolor-dogily-petshop-3-510x340.jpg",
      "https://dogily.vn/wp-content/uploads/2020/09/4.Meo-munchkin-mau-bicolor-dogily-petshop-5-510x340.jpg",
      "https://dogily.vn/wp-content/uploads/2020/09/5.Meo-munchkin-mau-bicolor-dogily-petshop-8-510x340.jpg",
      "https://dogily.vn/wp-content/uploads/2020/09/2.Meo-munchkin-mau-bicolor-dogily-petshop-2-510x340.jpg",
    ],
    description: [
      {
        name: 'Củ tỏi ',
        lineage: 'Mèo Bicolor',
        color: 'Bicolor ',
        gender: 'cái',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 25,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-xiem-mau-hyma-3-510x382.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-xiem-mau-hyma-510x365.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-xiem-mau-hyma-1-510x374.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-xiem-mau-hyma-2-510x378.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-xiem-mau-hyma-5-510x420.jpg",
    ],
    description: [
      {
        name: 'Bảo bảo',
        lineage: 'Mèo Xiêm',
        color: 'Hyma  ',
        gender: 'cái',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 26,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2020/11/3-37-510x397.jpg",
      "https://dogily.vn/wp-content/uploads/2020/11/1-37-510x397.jpg",
      "https://dogily.vn/wp-content/uploads/2020/11/2-36-510x397.jpg",
      "https://dogily.vn/wp-content/uploads/2020/11/4-32-510x397.jpg",
      "https://dogily.vn/wp-content/uploads/2020/11/3-37-510x397.jpg",
    ],
    description: [
      {
        name: 'Cute',
        lineage: 'Mèo Anh lông ngắn',
        color: 'Xám xanh',
        gender: 'cái',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 27,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-bengal-dogily-petshop-4-510x402.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-bengal-dogily-petshop-510x370.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-bengal-dogily-petshop-1-510x342.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-bengal-dogily-petshop-2-510x383.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-bengal-dogily-petshop-5-510x397.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-bengal-dogily-petshop-6-510x359.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-bengal-dogily-petshop-7-510x383.jpg",
    ],
    description: [
      {
        name: 'Jax anh Ashe',
        lineage: 'Mèo Bengal',
        color: 'Nâu đỏ',
        gender: '1 cái, 1 đực',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 28,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-Maine-Coon-Dogily-Petshop-5-510x383.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-Maine-Coon-Dogily-Petshop-510x763.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-Maine-Coon-Dogily-Petshop-1-510x680.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-Maine-Coon-Dogily-Petshop-7-510x383.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-Maine-Coon-Dogily-Petshop-9-510x383.jpg",
    ],
    description: [
      {
        name: 'Cà Rốt',
        lineage: 'Mèo Maine',
        color: 'Vàng trắng',
        gender: 'Cái',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 29,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-Bengal-3-510x358.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-Bengal-4-510x348.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-Bengal-5-510x343.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-Bengal-7-510x355.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-Bengal-66-510x346.jpg",
      "https://dogily.vn/wp-content/uploads/2020/12/Meo-Bengal-1-510x351.jpg"
    ],
    description: [
      {
        name: 'Nanas',
        lineage: 'Mèo Toyger',
        color: 'Brown Backerel Tabby',
        gender: 'đực',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    imgs: [
      'https://dogily.vn/wp-content/uploads/2020/02/luoc-chai-long-cho-cho-meo-size-m-bobo-1.jpg'
    ],
    lineageProductId: 31,
    description: []
  },
  {
    id: uuid(),
    imgs: [
      'https://dogily.vn/wp-content/uploads/2020/02/luoc-chai-long-cho-cho-meo-size-s-fashion-pet-comb-bobo.jpg',
    ],
    lineageProductId: 32,
    description: []
  },
  {
    id: uuid(),
    imgs: [
      'https://dogily.vn/wp-content/uploads/2020/02/luoc-chai-long-cho-cho-meo-size-m-fashion-pet-comb-bobo.jpg'
    ],
    lineageProductId: 33,
    description: []
  },
  {
    id: uuid(),
    imgs: [
      'https://dogily.vn/wp-content/uploads/2020/02/day_dat_yem_police_25mm.jpg'
    ],
    lineageProductId: 34,
    description: []
  },
  {
    id: uuid(),
    imgs: [
      'https://dogily.vn/wp-content/uploads/2020/02/vong-co-luc-lac-cac-hinh.jpg'
    ],
    lineageProductId: 35,
    description: []
  },
  {
    id: uuid(),
    lineageProductId: 36,
    imgs: [
      "http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/12/15/03/17/1576379842_37.3-nha-vai-co-mai-cho-meo.jpg?v=4",
      "http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/12/15/03/17/1576379827_37.1-nha-vai-co-mai-cho-meo.jpg?v=4",
      "http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/12/15/03/17/1576379839_37.2-nha-vai-co-mai-cho-meo.jpg?v=4",
    ],
    description: [
      `Ngôi nhà cho chó mèo được làm từ chất liệu cotton thông thoáng, dễ vệ sinh.`,
      'Có thể tháo rời để tiện cho việc vận chuyển.',
      `Sản phẩm Nhà Đệm Có Mái Cửa Vuông được làm từ những chất liệu
      hoàn toàn thân thiện với thú cưng. Các chất liệu đều được chọn lọc kỹ lưỡng,
      đảm bảo an toàn cho chó mèo sử dụng. Vì thế bạn không cần lo lắng về chất lượng sản phẩm.`,
    ]
  },
  {
    id: uuid(),
    lineageProductId: 37,
    imgs: [
      "http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/11/19/12/13/1574165581_30.-2-khan-len---mau-ngau-nhien-3.jpg?v=4",
      "http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/11/19/12/09/1574165376_30.-3-khan-len---mau-ngau-nhien-4.jpg?v=4",
      "http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/11/19/12/12/1574165557_30.5-khan-len---mau-ngau-nhien-6.jpg?v=4",
      "http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/11/19/12/12/1574165569_30.-khan-len---mau-ngau-nhien-1.jpg?v=4",
    ],
    description: [
      'Chất liệu len mềm mại và ấm áp',
      'Màu sắc đã dạng',
      'Có size S-M-L (các bạn note cân nặng để Shop lấy size phù hợp)',
    ]
  },
  {
    id: uuid(),
    lineageProductId: 38,
    imgs: [
      "http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/11/19/09/20/1574155204_20.nha-go-biet-thu-86x38x57---mau-ngau-nhien.jpg?v=4",
      "http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/11/19/09/19/1574155181_20.1nha-go-biet-thu-86x38x57---mau-ngau-nhien.jp.jpg",
      "http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/11/19/09/19/1574155194_20.2nha-go-biet-thu-86x38x57---mau-ngau-nhien.jp.jpg",
    ],
    description: [
      'Chất liệu gỗ chắc chắn',
      'Màu sắc: xanh dương, vàng, hồng',
      'Kích thước: 86 x 38x 57',
    ]
  },
  {
    id: uuid(),
    lineageProductId: 39,
    imgs: [
      'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/07/24/10/34/1563964451_thuc-an-cho-cho-hon-hop-vi-thit-cuu-anf-6-free-lam.jpg?v=4',
    ],
    description: [
      'Không thuốc kháng sinh',
      'Không đột biến gen',
      'Không thuốc trừ sâu',
      'Không thuốc hoocmon',
      'Không màu nhân tạo',
      'Không chất bảo quản hóa học'
    ]
  },
  {
    id: uuid(),
    lineageProductId: 310,
    imgs: [
      'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/07/24/10/34/1563964451_thuc-an-cho-cho-hon-hop-vi-thit-cuu-anf-6-free-lam.jpg?v=4',
    ],
    description: [
      `Thương hiệu: O'Nature`,
      'Xuất sứ thương hiệu: Hàn quốc',
      'Trọng lượng: 900G',
      'Hướng dẫn bảo quản: Bảo quản nơi khô ráo, thoáng mát',
    ]
  },
  {
    id: uuid(),
    lineageProductId: 311,
    imgs: [
      'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/04/18/04/43/1555562619_4e2c0b5f08f3d01589180c468ca6e38f.jpg?v=4',
    ],
    description: [
      `Tăng cường hệ miễn dịch và thúc đẩy sinh trưởng ở mèo con`,
      'Tăng cường sức khỏe răng miệng và ngăn ngừa búi lông ở mèo',
      'Giảm thiểu mùi phân của mèo',
      'Để nước sạch và thức ăn riêng, không được trộn lẫn',
    ]
  },
  {
    id: uuid(),
    lineageProductId: 312,
    imgs: [
      'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/03/21/08/13/1553156501_54525616_1234128480076572_1354118766551629824_n.jp.jpg?v=4',
      'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/03/21/08/14/1553156522_25a612b93d1f47fbbd2a6db63aea139e.jpg?v=4',
    ],
    description: [
      'Không thuốc kháng sinh',
      'Không đột biến gen',
      'Không thuốc trừ sâu',
      'Không thuốc hoocmon',
      'Không màu nhân tạo',
      'Không chất bảo quản hóa học'
    ]
  },
  {
    id: uuid(),
    lineageProductId: 313,
    imgs: [
     'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/02/25/12/36/1551098632_1499372252469-jpeg.jpg?v=4'
    ],
    description: [
      'Dùng Kit Cat Crystal vệ sinh dễ dàng hút mùi, thấm mạnh và giữ khay luôn khô ráo, vệ sinh.',
      'Không dính chân, dính lông, không có bụi, giữ cho nhà bạn luôn sạch',
      'Không độc hại & thân thiện với môi trường an toàn',
      'Giữ cho không gian nhà bạn luôn thơm',
      'Gói tiết kiệm : 1 gói dùng được đến 40 ngày cho 1 mèo',
    ]
  },
  {
    id: uuid(),
    lineageProductId: 314,
    imgs: [
     'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/02/25/08/45/1551084794_ac1fe51493e0174149655bbd2ce18b0d.jpg?v=4'
    ],
    description: [
      'Thành phần tự nhiên',
      'Kiểm soát mùi hiệu quả',
      'Thấm hút tốt',
    ]
  },
  {
    id: uuid(),
    lineageProductId: 315,
    imgs: [
     'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/03/16/03/39/1552708060_bat_va_binh_600x390.jpg?v=4',
     'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/03/16/03/39/1552708051_bat-uong-nuoc-tu-dong-cho-cho-meo-1m4g3-vj5p13_sim.jpg?v=4'
    ],
    description: [
      'Chất liệu : Nhựa',
      'Màu sắc : Xanh, đỏ',
    ]
  },
  {
    id: uuid(),
    lineageProductId: 316,
    imgs: [
     'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/03/16/02/21/1552703380_80ffd9a9b72a457796bd7ab0293d5d92.jpg?v=4'
    ],
    description: [
      'Sản phẩm được làm từ chất liệu nhựa và lõi bátinox cao cấp',
      'đế lót miếng cao su chống trượt',
      'tiện lợi khi nuôi nhiều thú cưng'
    ]
  },
  {
    id: uuid(),
    lineageProductId: 317,
    imgs: [
     'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/10/22/09/45/1571737554_70534531_966761040344819_948004122378895360_n.jpg?v=4',
     'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/10/22/09/45/1571737551_74789168_1785044821639201_3548865153799815168_n.jp.jpg?v=4',
     'http://cdn-img-v2.webbnc.net/uploadv2/web/11/11451/product/2019/10/22/09/45/1571737557_74229566_498272617392837_3869637573735350272_n.jpg?v=4',
    ],
    description: [
      `Muốn bé cưng của mình trở thành tín đồ thời trang đúng chuẩn`,
      'chuyên nghiệp với những bộ quần áo chó mèo xinh xắn.'
    ]
  },
  {
    id: uuid(),
    lineageProductId: 40,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2019/08/avarta-ran-ngo-510x510.jpg",
      "https://dogily.vn/wp-content/uploads/2019/08/con-ran.jpg",
      "https://dogily.vn/wp-content/uploads/2019/08/ran-ngo.jpg",
    ],
    description: [
      {
        name: 'Ngô',
        lineage: 'chó BasenjiRắn ngô Corn Snake',
        color: 'Cam',
        gender: 'Đực',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 41,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2019/09/avarta-rua-bung-vang-dogily.vn_-510x510.jpg",
      "https://dogily.vn/wp-content/uploads/2019/08/rua-bung-vang-Yellow-Belly-Turtle.jpg",
      "https://dogily.vn/wp-content/uploads/2019/08/avarta-rua-bung-vang.jpg",
    ],
    description: [
      {
        name: 'Thụt',
        lineage: 'Rùa bụng vàng Yellow Belly Turtle',
        color: 'Sọc vàng',
        gender: 'cái',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 42,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2019/07/nhen-canh-red-g.rose-tarantula-dogily-petshop.jpg",
      "https://dogily.vn/wp-content/uploads/2019/07/cham-soc-nhen-canh-red-g.rose-tarantula.jpg",
      "https://dogily.vn/wp-content/uploads/2019/07/mua-nhen-canh-red-g.rose-tarantula-1.jpg",
    ],
    description: [
      {
        name: 'Red G.Rose',
        lineage: 'Nhện cảnh Red G.Rose Tarantula',
        color: 'Đỏ cam',
        gender: 'cái',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 43,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2019/08/Untitled-1-6-510x510.jpg",
      "https://dogily.vn/wp-content/uploads/2019/08/20160125-thu-dot-tien-nuoi-rua-canh-doc-di-cua-dan-choi-viet-10.jpg",
      "https://dogily.vn/wp-content/uploads/2019/08/Geochelone-elegans3.jpg",
      'https://dogily.vn/wp-content/uploads/2019/08/indian.jpg',
      'https://dogily.vn/wp-content/uploads/2019/08/nuoi-rua-1.jpg'
    ],
    description: [
      {
        name: 'Star',
        lineage: 'Rùa sao Ấn Độ',
        color: 'golden',
        gender: 'cái',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 44,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2019/08/Untitled-1-5-510x510.jpg",
      "https://dogily.vn/wp-content/uploads/2019/08/rắn-sữa-lampropeltis-triangulum.jpg",
      "https://dogily.vn/wp-content/uploads/2019/08/4-quai-vat-nhin-dang-so-nhung-gan-nhu-vo-hai-ran-sua.jpg",
      'https://dogily.vn/wp-content/uploads/2019/08/maxresdefault-2-1.jpg',
      'https://dogily.vn/wp-content/uploads/2019/08/ran-sua-milk.jpg',
    ],
    description: [
      {
        name: 'Ss',
        lineage: 'Rắn sữa – milk shake',
        color: '',
        gender: 'cái',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 45,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2019/08/68464720_740680509699667_3908864639626117120_n.jpg",
      "https://dogily.vn/wp-content/uploads/2019/08/69419306_477813246391324_8025258963668828160_n.jpg",
      "https://dogily.vn/wp-content/uploads/2019/08/68473617_430673161124469_5777928308268204032_n.jpg",
      'https://dogily.vn/wp-content/uploads/2019/08/69070225_1328462553976172_6810343153787207680_n.jpg',
      'https://dogily.vn/wp-content/uploads/2019/08/67410064_353282148958439_795695158904487936_n.jpg',
      'https://dogily.vn/wp-content/uploads/2019/08/60889097_1448114755328560_7326563609624969216_n.jpg'
    ],
    description: [
      {
        name: 'Nhóc',
        lineage: 'Sóc bay Úc thuần chủng',
        color: 'Trắng và sóc đen',
        gender: 'đực, cái',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 46,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2019/07/nhen-chan-trang-white-knee-tarantula-3-510x340.jpg",
      "https://dogily.vn/wp-content/uploads/2019/07/nhen-chan-trang-white-knee-tarantula-1.jpg",
      "https://dogily.vn/wp-content/uploads/2019/07/nhen-chan-trang-white-knee-tarantula-4.jpg",
      'https://dogily.vn/wp-content/uploads/2019/07/nhen-chan-trang-white-knee-tarantula-8.jpg',
    ],
    description: [
      {
        name: 'Nhện',
        lineage: 'Nhện chân trắng Brazil hoặc Nhện gối trắng Brazil.',
        color: 'Trắng tía',
        gender: 'cái',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 47,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2019/07/nhen-goi-do-red-knee-tarantula-6-510x340.jpg",
      "https://dogily.vn/wp-content/uploads/2019/07/nhen-goi-do-red-knee-tarantula-4.jpg",
      "https://dogily.vn/wp-content/uploads/2019/07/nhen-goi-do-red-knee-tarantula-5.jpg",
      'https://dogily.vn/wp-content/uploads/2019/07/nhen-goi-do-red-knee-tarantula-6.jpg',
    ],
    description: [
      {
        name: 'Bư',
        lineage: 'Nhện gối đỏ Red Knee Tarantula',
        color: 'Đỏ',
        gender: 'cái',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 48,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2019/08/Untitled-1-7-510x510.jpg",
      "https://dogily.vn/wp-content/uploads/2019/08/5af8f7fc441bb-1714042.jpg",
      "https://dogily.vn/wp-content/uploads/2019/08/5af8f7fd88091-1714054.jpg",
      'https://dogily.vn/wp-content/uploads/2019/08/bdh1373377557.jpg',
    ],
    description: [
      {
        name: 'Bự',
        lineage: 'Gián đất Dubia',
        color: 'Nâu',
        gender: 'cái',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
  {
    id: uuid(),
    lineageProductId: 49,
    imgs: [
      "https://dogily.vn/wp-content/uploads/2019/07/ech-bo-chau-phi-affican-bull-frog-2-510x510.jpg",
      "https://dogily.vn/wp-content/uploads/2019/07/anh-ech-bo-chau-phi-affican-bull-frog.jpg",
      "https://dogily.vn/wp-content/uploads/2019/07/xuat-xu-ech-bo-chau-phi-affican-bull-frog.jpg",
      'https://dogily.vn/wp-content/uploads/2019/07/ech-bo-chau-phi-affican-bull-frog.jpg',
      'https://dogily.vn/wp-content/uploads/2019/07/gia-ech-bo-chau-phi-affican-bull-frog.jpg'
    ],
    description: [
      {
        name: 'Bò bự',
        lineage: 'Ếch bò châu Phi',
        color: 'Xanh ô liu',
        gender: 'cái',
        age: '2 tháng',
        vacxin: '2 mũi',
        wormRemover: 'lần 1',
        origin: 'Sinh tại Việt Nam',
        guarantee: '15-45 ngày',
        ship: false,
        present: `voucher 1 triệu: mua đồ dùng thú cưng của Dogily Pet Mart,
          khám chữa bệnh tại phòng khám thú y Dogily Vet,
          tắm sấy, cắt tỉa tại Dogily Spa & Grooming.`
      }
    ]
  },
]
