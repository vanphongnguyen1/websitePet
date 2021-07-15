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
    to: '/dich-vu',
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


export const dataPost = [
  {
    img: 'https://dogily.vn/wp-content/uploads/2020/05/cua-hang-cho-canh-dogilypetshop-400x600.jpg',
    title: 'Top 8 cửa hàng bán chó cảnh uy tín nhất tại Hà Nội',
    sub: '“Người yêu có thể không có, nhưng chó phải có một con.” Bạn nào đang [...]',
    activate: 1
  },
  {
    img: 'https://dogily.vn/wp-content/uploads/2020/05/giong-cho-tongao-tay-tang-600x400.jpg',
    title: 'Top 10 giống chó to bảo vệ cho ngôi nhà của bạn',
    sub: 'Top 10 giống chó to nhất thế giới sẽ là bài viết tiếp theo mà [...]',
    activate: 1
  },
  {
    img: 'https://dogily.vn/wp-content/uploads/2020/05/nguoi-nuoi-meo-moi-hieu--600x400.jpg',
    title: 'Chỉ người nuôi mèo mới hiểu những chuyện cười ra nước mắt này',
    sub: 'Bạn có phải là người nuôi mèo cảnh? Bạn đã bao giờ đúc kết loạt [...]',
    activate: 2
  },
  {
    img: 'https://dogily.vn/wp-content/uploads/2020/05/chim-ung-cach-nuoi-1-600x400.jpg',
    title: 'Cách nuôi chim ưng Ấn Độ, ưng Shikra và ưng Lửa',
    sub: 'Chim ưng là tuyển thủ săn mồi số một, số hai trên bầu trời. Thế [...]',
    activate: 1
  },
  {
    img: 'https://dogily.vn/wp-content/uploads/2020/05/meo-van-tho-nhi-ky--600x400.jpg',
    title: 'Top 8 giống chó lông xù được nuôi nhiều nhất tại nước ta',
    sub: 'Chó là loài vật trung thành và gần gũi với con người. Tại Việt Nam, [...]',
    activate: 1
  },
  {
    img: 'https://dogily.vn/wp-content/uploads/2020/05/cho-Maltese-long-xu-600x400.jpg',
    title: 'Top 10 giống mèo thông minh nhất hành tinh',
    sub: 'Mèo không dễ huấn luyện như chó. Mèo cũng không đảm nhận vai trò truy [...]',
    activate: 1
  },
  {
    img: 'https://dogily.vn/wp-content/uploads/2020/04/dogily-pet-shop-thien-duong-meo-anh-long-ngan-600x400.jpg',
    title: 'Dogily Petshop – “Thiên đường vàng” của loài mèo Anh lông ngắn',
    sub: 'Mèo Anh lông ngắn là giống mèo cưng được ưa chuộng và nuôi phổ biến [...]',
    activate: 1
  },
  {
    img: 'https://dogily.vn/wp-content/uploads/2020/04/thu-choi-choi-chim-600x400.jpg',
    title: 'Thú chơi chim hót thi đá',
    sub: 'Nuôi chim hót là một thú vui vô cùng tao nhã và lành mạnh, lại [...]',
    activate: 1
  },
  {
    img: 'https://dogily.vn/wp-content/uploads/2020/01/dai-dien-cac-nhom-bao-ve-cho-bieu-tinh-600x400.png',
    title: 'Sang Đài Loan Làm Việc Nhóm Người Việt Bị Phạt Nặng Vì Ăn Thịt Chó',
    sub: 'Một nhóm người Việt sau khi đi xuất khẩu lao động sang Đài Loan đã [...]',
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2020/01/nguoi-khong-lo-diu-dang-13-600x400.jpg",
    title: "Vẻ đẹp hút hồn của giống mèo huyền thoại thuần chủng nhất",
    sub: "Mèo Maine Coon là giống mèo thuần chủng lớn nhất trên thế giới. Maine Coon [...]",
    activate: 1
  },

{
img: "https://dogily.vn/wp-content/uploads/2020/01/cho-khong-long-xolo-600x600.jpg",
title: "10 Giống Chó Có Ngoại Hình Kì Lạ Nhất Thế Giới Gây Ấn Tượng Khó Quên",
sub: "Con người luôn xem chó là người bạn thân thiết nhất. Dù nghèo hay giàu [...]",
activate: 1
},
{
img: "https://dogily.vn/wp-content/uploads/2019/12/Chú-mèo-anh-lông-dài-màu-silver-bạc-nhập-khẩu-Liên-Bang-Nga-tại-Dogily-Petshop-Quận-1-TP.HCM_-600x400.jpeg",
title: "DOGILY PETSHOP – MANG NIỀM VUI THÚ CƯNG ĐẾN MỖI GIA ĐÌNH",
sub: "Trong cuộc sống hiện đại, việc nuôi thú cưng như một thành viên trong gia [...]",
activate: 2
},
{
img: "https://dogily.vn/wp-content/uploads/2019/12/hình-ảnh-được-đăng-tải-trên-mạng-xã-hội-ngày-24.12-600x400.png",
title: "TRỘM CHÓ NHẢY XUỐNG SÔNG TRỐN LÊN ĐẦU HÀNG VÌ QUÁ LẠNH",
sub: "Sáng ngày 24 – 12, mạng xã hội xuất hiện hình ảnh một người đàn [...]",
activate: 2
},
{
img: "https://dogily.vn/wp-content/uploads/2019/12/Các-nhân-vật-trong-game-600x400.jpg",
title: "HAI CAO THỦ ĐỘNG VẬT – CHÓ SHIBA VÀ CÁO CƠ BẮP LẠI TÁI XUẤT",
sub: "Cáo cơ bắp và chó Shiba xoay người đấm móc chính thức thượng đài tỷ [...]",
activate: 2
},
{
img: "https://dogily.vn/wp-content/uploads/2019/12/Chó-nghiệp-vụ-Mỹ-1-600x400.jpg",
title: "CHÓ NGHIỆP VỤ CỦA MỸ CHẾT VÌ KHÔNG ĐƯỢC CHĂM SÓC TỬ TẾ",
sub: "Nhiều chú chó nghiệp vụ Mỹ được huấn luyện bày bản chết vì không được [...]",
activate: 2
},
{
img: "https://dogily.vn/wp-content/uploads/2019/12/NÃO-BỘ-LOÀI-CHÓ-THAY-ĐỔI-SAU-15000-NĂM-600x400.jpg",
title: "NÃO CỦA CHÓ THAY ĐỔI SAU 15.000 NĂM SỐNG CHUNG VỚI NGƯỜI",
sub: "Con người chúng ta thường xuyên tác động lên quá trình tiến hóa của các [...]",
activate: 2
},
{
img: "https://dogily.vn/wp-content/uploads/2019/12/cái-đuôi-kì-lạ-trên-đầu-của-chú-chó-600x400.jpeg",
title: "NARWHAL (KỲ LÂN) – CHÚ CÚN KỲ LẠ VÀ CHIẾC ĐUÔI MỌC Ở TRÊN MẶT",
sub: "Mới đây nhất trên mạng xã hội bỗng dưng xuất hiện một chú cún con [...]",
activate: 1
},
{
img: "https://dogily.vn/wp-content/uploads/2019/12/a124b22b7ea887f6deb9-600x400.jpg",
title: "DỰ ÁN PHIM ĐIỆN ẢNH “CẬU VÀNG” ĐƯỢC ĐÔNG ĐẢO DÀN NGHỆ SĨ CÓ TÊN TUỔI THAM GIA",
sub: "Bộ phim “Cậu Vàng” theo truyện Nam Cao đã quy tụ được đông đảo các [...]",
activate: 2
},
{
img: "https://dogily.vn/wp-content/uploads/2019/12/ra-m%E1%BA%AFt-phim-7-600x400.jpg",
title: "TRƯỚC NGÀY QUAY, LÃO HẠC VẪN CHƯA BIẾT MẶT MŨI CẬU VÀNG",
sub: "Tại buổi ra mắt phim “Cậu Vàng” có đến 5 “diễn viên bốn chân” xuất [...]",
activate: 2
},
{
img: "https://dogily.vn/wp-content/uploads/2019/12/7-CH%C3%9A-CH%C3%93-1-600x400.jpg",
title: "HÉ LỘ DÀN NGHỆ SĨ TRONG PHIM VÀ SỰ XUẤT HIỆN ĐẾN KHOẢNG 7 “CẬU VÀNG”",
sub: "Cuộc họp báo công bố dàn diễn viên người thật trong bộ phim “Cậu Vàng” [...]",
activate: 2
},
{
img: "https://dogily.vn/wp-content/uploads/2019/12/e34e346655e7acb9f5f6-600x400.jpg",
title: "ĐIỂM ĐẶC BIỆT CỦA CHÚ CHÓ ĐƯỢC CHỌN VÀO VAI CẬU VÀNG LÀ GÌ?",
sub: "Việc một chú chó Nhật thuần chủng được chọn làm nhân vật chính trong bộ [...]",
activate: 2
},
  {
    img: "https://dogily.vn/wp-content/uploads/2019/12/ch%C3%BA-ch%C3%B3-2-tu%E1%BB%95i-1-600x400.jpg",
    title: "“CẬU VÀNG” VÀ TRANH LUẬN GAY GẮT GIỮA CHÓ TA VÀ CHÓ NHẬT",
    sub: "Mới đây một bộ phim được phóng tác từ truyện ngắn Việt Nam nổi tiếng [...]",
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/12/Cho-san-vit-Poodle-600x426.jpg",
    title: "TOP NHỮNG GIỐNG CHÓ ĐẸP, THÔNG MINH NHẤT THẾ GIỚI BẠN NÊN BIẾT",
    sub: "Chắc hẳn những ai có niềm đam mê với thú cưng cũng không còn xa [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/12/Cau-Vang-600x400.png",
    title: "Ê-KÍP PHIM “CẬU VÀNG” BÁC BỎ THÔNG TIN KHÔNG CHÍNH XÁC VỀ VAI CẬU VÀNG",
    sub: "Ê – kíp phim “Cậu Vàng” cho biết thông tin trên các trang mạng nói [...]",
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/12/VOH1-600x400.png",
    title: "BỘ PHIM ĐIỆN ẢNH VIỆT ĐẦU TIÊN VỚI VAI CHÍNH LÀ MỘT CHÚ CHÓ",
    sub: "Dự án bộ phim “Cậu Vàng” là một dự án đầy tâm huyến của đạo [...]",
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/12/cun-cung-tr%E1%BB%9F-v%E1%BB%81.jpg",
    title: "SAU 6 NĂM THẤT LẠC CHÚ CÚN CƯNG TRỞ VỀ NGAY TRƯỚC LỄ GIÁNG SINH",
    sub: "Gặp lại chú cún cưng của mình sau 6 năm bị thất lạc trước đêm [...]",
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/12/h%C3%B2a-nh%E1%BA%ADp-600x449.jpg",
    title: "Dogily Petshop – Mang tình yêu thú cưng đến mỗi gia đình.",
    sub: "“Pets are Family – Thú cưng là gia đình”, Dogily Petshop thương hiệu của Công [...]",
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/12/top-10-gi%E1%BB%91ng-ch%C3%B3-to-nh%E1%BA%A5t-th%E1%BA%BF-gi%E1%BB%9Bi-2.jpg",
    title: "Top 10 Những Chú Chó To Nhất Thế Giới Khiến Bạn Ngỡ Ngàng",
    sub: "Dogily Petshop xin giới thiệu với mọi người top 10 những giống chó to nhất [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/12/rezzi-600x400.jpg",
    title: "THỊT CHÓ ĐÓNG HỘP VÀ SỰ PHẢN ỨNG GAY GẮT CỦA DƯ LUẬN",
    sub: "Hiện nay, vụ xưởng sản xuất thịt chó đóng hộp đang nhận được nhiều ý [...]",
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/12/%C4%91%C3%A3-resize1-600x400.jpg",
    title: "THUÊ HẲN MÁY BAY KÉO BIỂU NGỮ ĐỂ TÌM LẠI CHÚ CHÓ CƯNG JACKSON BỊ BẮT TRỘM",
    sub: "Chú chó cưng của Talermo, được gọi với tên là Jackson bị bắt trộm hôm [...]",
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/12/%C4%91%C3%A3-resize-600x400.jpg",
    title: "FAN TIẾC NUỐI TRƯỚC CÁI CHẾT BẤT NGỜ CỦA CÔ MÈO LIL BUB",
    sub: "Một cô mèo tên Lil Bub sở hữu hàng triệu lượt theo dõi trên các [...]",
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/12/1-1-600x400.jpg",
    title: "BỘ LUẬT CHĂN NUÔI VÀ VIỆC CẤM ĐÁNH ĐẬP, HÀNH HẠ CHÓ MÈO",
    sub: "Luật chăn nuôi 2018 được ban hành ngày 19/11/2018 và sẽ bắt đầu có hiệu [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/12/đã-réize-600x400.jpg",
    title: "PAISLEY – CHÚ MÈO BÉO NHẤT NƯỚC ANH, KHÔNG THỂ LIẾM ĐƯỢC LÔNG",
    sub: "Một chú mèo sống ở Anh, có tên là Paisley không thể tự làm vệ [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/09/Noi-dung-Muc-dich-song-cua-mot-chu-cho-300x300.jpg",
    title: "Những bộ phim hay về chó mà bạn nhất định không thể bỏ lỡ",
    sub: "Chó – một giống loài không chỉ là thú cưng đáng yêu của con người [...]",
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/09/Ken’s-House-Coffee-Mot-trong-nhung-tiem-cafe-thu-cung-hot-nhat-HCM-hien-nay-300x300.jpg",
    title: "Điểm tên các tiệm cafe thú cưng siêu xinh cho các bạn yêu thích động vật",
    sub: "Với những người yêu thú cưng nhưng không có điều kiện nuôi thì chính là [...]",
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/09/Mo-thay-con-cho-den-300x300.jpg",
    title: "Giải mã giấc mơ thấy chó và ý nghĩa tâm linh có thể bạn chưa biết",
    sub: "Các chú chó luôn là những thành viên đặc biệt trong nhà. Các bạn ấy [...]",
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/09/Chu-cho-Toki-de-thuong-300x300.jpg",
    title: "Tại sao nên nuôi thú cưng? – Lợi ích từ việc nuôi thú cưng",
    sub: "Tại sao nên nuôi thú cưng ? Câu hỏi tưởng chừng đơn giản nhưng rất [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/09/Hinh-anh-ve-cac-chu-cho-dang-yeu-Corgi-300x300.jpg",
    title: "Chia sẻ hình ảnh về các chú chó đáng yêu nhất quả đất không cưỡng lại được <3",
    sub: "Ngày nay, nuôi thú cưng đã trở nên rất phổ biến. Chúng ta có thể [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/09/Chu-cho-beo-nhat-Ha-Noi-300x300.jpg",
    title: "Tổng hợp hình ảnh những chú chó nổi tiếng trên mạng xã hội",
    sub: "Hình ảnh của những chú chó nổi tiếng trên mạng xã hội  luôn thu hút [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/09/dai-t…a-nang-tieu-thu-cho-alaska-trung-quoc-300x193.jpg",
    title: "Cuộc sống sang chảnh của tiểu thư chó Alaska Trung Quốc",
    sub: "Ngày nay rất dễ để ta bắt gặp những cô chiêu cậu ấm tặng nhau [...]",
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/08/Cac-s…n-thuong-co-so-luong-thu-cung-da-dang-300x300.jpg",
    title: "Shop thú cưng – cách lựa chọn địa chỉ uy tín bạn không thể bỏ qua",
    sub: "Các shop thú cưng đang là lựa chọn của nhiều người. Với độ uy tín [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2018/05/s-225x300.jpg",
    title: "Bảo vệ: Hàng loạt chú chó bị sốc nhiệt trong những ngày nắng nóng kỷ lục",
    sub: "Không có trích dẫn vì bài này được bảo vệ. [...]",
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/03/chu-cho-akita-inu-mame-cuu-chu-dogily-petshop-300x200.jpg",
    title: "Chó akita cứu người già tại Nhật Bản",
    sub: "Một chú chó Akita có tên là Mame sẽ được vinh danh vào ngày 1 [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/02/hinh-anh-dogilypetshop-3-chu-shiba-noi-tieng-nhat-ban-2-300x300.jpg",
    title: "Bấn loạn cùng hội ba anh em chó Shiba đến từ Nhật Bản",
    sub: "Không chỉ khiến bạn yêu ngay từ cái nhìn đầu tiên mà anh em chó [...]",
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/02/hinh-anh-dogilypetshop-cho-shiba-Daifuku-2-300x200.jpg",
    title: "Thu về 400.000 người theo dõi, chú chó Shiba Daifuku nổi tiếng mạng xã hội",
    sub: "Chú chó Shiba Daifuku sở hữu những hình ảnh đời thường đáng yêu và khoảnh [...]",
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/02/hinh-anh-dogilypetshop-cho-shiba-Ryuji-2-300x300.jpg",
    title: "“ Thánh biểu cảm ” của xứ sở Hoa anh đào – chú chó Shiba Inu vui tính, đẹp trai",
    sub: "Chú chó Shiba Inu mang một gương mặt siêu dễ thương và tính tình sự [...]",
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/02/hinh-anh-dogilypetshop-husky-sat-hai-trai-ga-1-300x200.jpg",
    title: "Hơn 600 con gà bị tàn sát trong đêm bởi chú chó Husky",
    sub: "Tại Trung Quốc, một trang trại gà khoảng 600 con bị tàn sát sau 1 [...]",
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/01/Hình_ảnh_chó_Pug_cách_đây_100_năm-200x300.jpg",
    title: "Chó Pug: Mặt trái phía sau giống chó được yêu thích nhất Việt Nam.",
    sub: "Chó pug mặt xệ, với gương mặt rất hài hước và đáng yêu. Tính tình [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/01/Mối_liên_hệ_giữa_giống_chó_Akita_và_tỉnh_Akita_-Dogily_Petshop-300x200.jpg",
    title: "Chó Akita Inu – biểu tượng văn hóa tại quê hương Odate",
    sub: "Chó Akita, hay còn được gọi là “akita inu” trong tiếng Nhật. Chúng có nguồn [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/01/H%C3%…BA%ADt_B%E1%BA%A3n_-_Dogily_Petshop_7-300x200.jpg",
    title: "Trải nghiệm google street view với góc nhìn một chú chó Akita",
    sub: "Google đã thu thập hình ảnh ở tất cả mọi nơi trên thế giới vào [...]",
    activate: 2
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2019/01/H%C3%…ta_v%C3%A0_Shiba_Inu_Dogily_Petshop_1-600x400.jpg",
    title: "Phân biệt chó akita và shiba inu",
    sub: "Chó akita và shiba Inu đều là hai giống chó nổi tiếng nhất của Nhật [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2018/12/Ch%E1…a-Shimba-c%E1%BB%A7a-Dogily-Petshop-1-300x200.jpg",
    title: "Bộ ảnh chó Akita Inu trong ánh hoàng hôn tuyệt đẹp…ại Vườn nhãn Long Biên. Thêm một lần nhớ Hachiko…",
    sub: "Đến với vườn nhãn Long Biên, nơi bạn như được lạc vào một khu rừng [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2018/12/Chó_alaska_giant_khổng_lồ_Dogily_Petshop_2-300x200.jpg",
    title: "Chó alaska giant khổng lồ trên 70 kg khiến bao con tim thổn thức.",
    sub: "Chú chó alaska giant khổng lồ có tên gọi Ato (thuộc giống Alaska) đang nổi [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2018/11/Chó_alaska_malamute_-_Dogily_Kennels_mẫu_7-300x225.jpg",
    title: "7 giống chó kéo xe nổi tiếng nhất trên thế giới",
    sub: "Chó kéo xe là một loại hình di chuyển đặc sắc trong lịch sử loài [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2018/11/Chú_chó_border_collie_thuần_chủng_màu_blue_merle__-_Dogily_Kennel_5-1-200x300.jpg",
    title: "8 giống chó chăn cừu nổi tiếng nhất tại Việt Nam hiện nay.",
    sub: "Trong suốt lịch sử loài người, chó là người bạn đồng hành vô cùng thân [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2018/11/Bản_đồ_nguồn_gốc_của_các_giống_chó_Nhật_Bản-300x300.jpg",
    title: "9 giống chó phổ biến nhất của Nhật Bản. Mua bán chó Nhật bản ở đâu tại Tphcm và hà nội",
    sub: "Bạn có biết những thông tin thú vị về các giống chó Nhật Bản chưa [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2018/06/Hình_ảnh_ca_sĩ_Lam_Trường_và_một_chú_chó_Akita_lông_dài_Dogily_Petshop_4-200x300.jpg",
    title: "Chó Akita lông dài (xù) – Gấu bông Nhật Bản",
    sub: "Chó akita lông xù (lông dài) là một phiên bản đẹp của giống chó Akita [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2018/05/2-3-199x300.jpg",
    title: "Wasao – chú chó akita lông dài. Sức hấp dẫn của “xấu lạ” đa tài.",
    sub: "Nói đến giống chó Akita, chắc hẳn mọi người đều nghĩ đến chú chó Hachiko [...]",
    activate: 1
  },
  {
    img: "https://dogily.vn/wp-content/uploads/2018/05/1-300x200.jpg",
    title: "Câu chuyện cảm động phía sau một tấm hình …",
    sub: "Dogily – Gia đình cún cưng: Câu chuyện cảm động phía sau một tấm hình Thời [...]",
    activate: 2
  }
]

export const contentPost = [
  {
    title: 'Dogily Petshop – Cửa hàng bán chó cảnh uy tín tại Hà Nội',
    text1: `Dogily Petshop là thương hiệu chuyên nhập khẩu chó cảnh uy tín từ châu Âu về, đồng thời đi đầu trong việc xây dựng hệ thống trang trại tự chủ nhân giống tại Việt Nam. Qua nhiều năm hoạt động, Dogily đã hình thành nên mối quan hệ hợp tác mật thiết với các trại chó đáng tin cậy khắp trời Âu, Nhật Bản hay Thái Lan. Những con giống được cửa hàng chó cảnh uy tín này lựa chọn đều phải đảm bảo nguồn gen thuần chủng, phả hệ vô địch và có biểu hiện tốt tại các dog show.`,
    text2: `Sau khi tìm thấy nguồn gen quý, các chú chó bố, chó mẹ này sẽ được đưa về trang trại Dogily Kennel. Tại đây, tất cả các bé đều được hưởng chế độ dinh dưỡng, chăm sóc và tiến hành nhân giống theo mô hình chuẩn châu Âu. Bản thân nhà sáng lập và đội ngũ nhân viên của cửa hàng bán chó cảnh Dogily cũng là người yêu quý thú cưng. Họ hoạt động với sứ mệnh đưa những chú cún khỏe đẹp, tình cảm, trung thành đến làm bạn với ai có nhu cầu.`,
    text3: `Lý do khiến Dogily trở thành cửa hàng chó cảnh uy tín đầu tiên được nhắc đến trong danh sách này là vì nơi đây tuyệt đối chỉ cung cấp những bé giống tốt, có nguồn gốc rõ ràng và đảm bảo. Cún mà bạn mua sẽ được bảo hành từ 1 đến 3 tháng, đồng thời được tư vấn kỹ càng về thực đơn, cách chăm sóc để đảm bảo các bé có thể phát triển tốt nhất. Dogily cũng cam kết sẽ đồng hành, hỗ trợ chu đáo trong suốt vòng đời của thú cưng.`,
    img: 'https://dogily.vn/wp-content/uploads/2020/05/cua-hang-cho-canh-dogilypetshop.jpg',
    concastInfo: {
      addressShop: '262 Vĩnh Hưng, quận Hoàng Mai, thành phố Hà Nội.',
      farm: 'Ngõ 1, Xóm 2, Thôn 3, Xã Vạn Phúc, Huyện Thanh Trì, Thành Phố Hà Nội.',
      phone: '0337263377',
      email: 'dogily@gmail.com',
      website: 'https://dogily.vn/',
      facebook: 'https://www.facebook.com/DogilyPetshop/'
    }
  },
  {
    title: 'Tùng Lộc Pet – Cửa hàng bán chó cảnh uy tín tại Hà Nội',
    text1: `Cửa hàng bán chó cảnh uy tín Tùng Lộc Pet ra đời với mục tiêu mang đến những chú cún thuần chủng, khỏe mạnh cho các bạn yêu thú cưng tại Hà Nội. Để trở thành con giống ở đây, đàn chó bố, chó mẹ phải vượt qua quá trình chọn lựa nghiêm ngặt về nguồn gốc, độ thuần chủng. Và sau đó là quá trình nhân giống theo quy trình đạt chuẩn quốc tế.`,
    text2: `Trước khi “xuất chuồng”, các bé cún luôn được cửa hàng bán chó cảnh uy tín Tùng Lộc Pet tiêm phòng đầy đủ, kiểm tra kỹ càng về trạng thái sức khỏe. Đội ngũ nhân viên giàu kinh nghiệm cũng sẽ hướng dẫn người mua về cách chăm sóc, cho ăn, phòng chống bệnh phù hợp với từng loại thú cưng.`,
    text3: `Bên cạnh đó, cửa hàng bán chó cảnh uy tín Tùng Lộc Pet còn sở hữu cơ sở vật chất hiện đại, áp dụng nhiều chính sách ưu đãi hấp dẫn. Nếu cún cảnh bạn mua bị bệnh trong thời gian bảo hành, chúng sẽ được khám chữa miễn phí tại Tùng Lộc Pet. Cơ sở này cũng hỗ trợ vận chuyển trên toàn quốc và tư vấn thông tin trong suốt quãng đời của Boss.`,
    img: `https://dogily.vn/wp-content/uploads/2020/05/cua-hang-ban-cho-canh-uy-tin-ha-noi-tung-loc-pet.jpg`,
    concastInfo: {
      addressShop: '151 Hồ Đắc Di – Quang Trung – Đống Đa – Hà Nội',
      farm: 'Ngõ 143 Thuý Lĩnh, Lĩnh Nam, Hoàng Mai, Hà Nội',
      phone: '0826880528',
      email: '',
      website: 'Tunglocpet.com',
      facebook: 'https://www.facebook.com/tunglocpet.2011/',
    },
  },

  {
    title: 'AZPET Shop – Cửa hàng bán chó cảnh uy tín tại Hà Nội',
    text1: `Ra đời từ 2009, AZPET Shop đã có hơn 10 năm kinh nghiệm hoạt động trong lĩnh vực mua bán, nhân giống, huấn luyện thú cưng. Thương hiệu này sở hữu trang trại chó và đã lai tạo thành công nhiều giống chó cảnh được ưa chuộng nhất tại nước ta hiện nay, ví dụ như Poodle, Alaska, Bull Pháp, Phốc Sóc, Corgi, Husky, Pug, Malinois, Lạp xưởng, Golden Retriever, Labrador, Samoyed v.v…`,
    text2: `Do đó, không có gì khó hiểu khi AZPET Shop nằm trong top được đề cử hàng đầu khi bạn muốn tìm cửa hàng bán chó cảnh uy tín tại Hà Nội.

    Khi giao dịch tại đây, khách hàng được cam kết thú cưng họ mua được nhân giống từ bố mẹ thuần chủng, khỏe mạnh, không mắc bệnh, full giấy tờ chứng minh xuất xứ. Nếu bạn phát hiện ra mình mua phải chó lai tạp, mắc bệnh bẩm sinh, AZPET Shop sẵn sàng hoàn tiền gấp đôi.`,
    text3: `Một ưu điểm nữa của cửa hàng bán chó cảnh uy tín này là bảo hành sức khỏe cún cưng trong vòng 1 tháng đầu, miễn tiền vận chuyển, hỗ trợ tư vấn suốt cả đời. Ngoài ra, khách hàng của AZPET Shop cũng được tối ưu quyền lợi với hợp đồng rõ ràng, tặng quà đi kèm, giảm giá khi tiếp tục sử dụng sản phẩm, dịch vụ khác v.v…`,
    img: `https://dogily.vn/wp-content/uploads/2020/05/cua-hang-ban-cho-canh-uy-tin-ha-noi-azpet-shop.jpg`,
    concastInfo: {
      addressShop: 'Số 59, đường Văn Cao, Liễu Giai, Ba Đình, Hà Nội.',
      farm: 'Ngõ 310 Nghi Tàm, Quảng An, Tây Hồ, Hà Nội',
      phone: '0888 083 388',
      email: '',
      website: 'https://azpet.com.vn/',
      facebook: 'Facebook.com/azdogshop',
    },
  },
  {
    title: 'Voodlehouse shop – Cửa hàng bán chó cảnh uy tín tại Hà Nội',
    text1: `Đây là cửa hàng bán chó cảnh uy tín hàng đầu Hà Nội về giống Poodle. Voodlehouse Shop sở hữu trang trại nhân giống, đảm bảo nguồn gen thuần chủng, cung cấp đủ các loại Poodle từ Standard, Miniature, cho đến những dòng hiếm hơn như Tiny, Teacup, với nhiều màu sắc khác nhau để khách hàng thoải mái lựa chọn: nâu, đen, xám, chocolate, bò sữa, đỏ v.v…`,
    text2: `Trước khi đến tay người yêu thú cưng, các bé cún của cửa hàng bán chó cảnh uy tín Voodlehouse Shop đều đã được tiêm phòng cho 7 bệnh, bảo hành sức khỏe trong vòng 2 tháng đầu và có sổ theo dõi đàng hoàng.`,
    text3: `Bên cạnh đó, cửa hàng bán chó cảnh uy tín Voodlehouse Shop còn cung cấp dịch vụ spa, tắm sấy, cắt tỉa lông cho cún cưng; đi kèm với phúc lợi hỗ trợ tư vấn về cách chăm sóc, chữa trị bệnh trong suốt quãng đời của Boss. Nơi đây cũng nhận phối giống theo đúng yêu cầu cụ thể, cho ra đời các bé Poodle xinh xắn với ngoại hình, kích cỡ, màu lông đúng sở thích của chủ nhân.`,
    img: `https://dogily.vn/wp-content/uploads/2020/05/cua-hang-ban-cho-canh-uy-tin-ha-noi-voodlehouse-shop.jpg`,
    concastInfo: {
      addressShop: '66 Đại La, Bạch Mai, Hà Nội.',
      farm: '391 Trần Đại Nghĩa, Hà Nội',
      phone: '0941069999',
      email: 'voodlehouse@gmail.com',
      website: 'https://voodle.vn/',
      facebook: 'https://www.facebook.com/petvoodlehouse/',
    },
  },
  {
    title: 'Thú Kiểng – Cửa hàng bán chó cảnh uy tín tại Hà Nội',
    text1: `Ngoài việc sở hữu một website rất mạnh về thú cưng, cửa hàng bán chó cảnh uy tín mang tên Thú Kiểng cũng cung cấp được gần như toàn bộ các giống thú cưng đang được tìm mua trên cả nước. Riêng về chó cảnh, Thú Kiểng có sẵn hơn 20 dòng khác nhau, từ những giống chó to như Alaska, Pitbull, Becgie, Golden, Labrado… cho đến các giống chó nhỏ như Chihuahua, Phốc sóc, chó Boo v.v…`,
    text2: `Cửa hàng bán chó cảnh uy tín Thú Kiển chỉ cho cún xuất chuồng khi đã đủ 2 tháng tuổi, đã qua tiêm phòng đầy đủ, biết ăn hạt và đi vệ sinh đúng chỗ. Thời gian bảo hành ở đây ngắn hơn so với một số shop khác, chỉ tầm nửa tháng nhưng cơ bản đều không gặp vấn đề về sức khỏe nên các bạn có thể yên tâm.`,
    text3: ``,
    img: `https://dogily.vn/wp-content/uploads/2020/05/cua-hang-ban-cho-canh-uy-tin-ha-noi-thu-kieng.jpg`,
    concastInfo: {
      addressShop: '93/108 ngõ 93 Hoàng Văn Thái, Thanh Xuân, Hà Nội',
      farm: '',
      phone: '085 9853 946',
      email: '',
      website: 'https://www.thukieng.com',
      facebook: '',
    },
  },
  {
    title: 'Trại chó Bình Xoáy Thái – Cửa hàng bán chó cảnh uy tín tại Hà Nội',
    text1: `Dù mới nổi lên vài năm trở lại đây nhưng Trại chó Bình Xoáy Thái đã nhanh chóng ghi tên vào danh sách những cửa hàng bán chó cảnh uy tín tại Hà Nội và được nhiều bạn trẻ thủ đô quan tâm. Bình Xoáy Thái cũng sở hữu trang trại riêng và chuyên cung cấp những giống chó phổ biến như Dorberman, Bully, Manilois, Pitbull, Phú Quốc, Phốc sóc,  Minpin v.v…`,
    text2: `Bản thân anh Bình – nhà sáng lập của cửa hàng bán chó cảnh uy tín Bình Xoáy Thái cũng là một người cực kỳ yêu cún cảnh. Anh dành rất nhiều tâm huyết cho chúng và thường xuyên sang Thái Lan tham dự những dog show để học hỏi kinh nghiệm cũng như chọn được giống chó tốt cho trang trại của mình.`,
    text3: ``,
    img: `https://dogily.vn/wp-content/uploads/2020/05/cua-hang-ban-cho-canh-uy-tin-ha-noi-trai-cho-binh-xoay-thai.jpg`,
    concastInfo: {
      addressShop: 'Xóm Mới, thôn Nguyên Xá, Bắc Từ Liêm, Hà Nội.',
      farm: '',
      phone: '0948485555',
      email: '',
      website: '',
      facebook: 'https://www.facebook.com/Trại-Chó-Bình-Xoáy-Thái-1579161008998077/',
    },
  },
  {
    title: 'PT Pet Shop – Cửa hàng bán chó cảnh uy tín tại Hà Nội',
    text1: `PT Pet Shop là cửa hàng bán chó cảnh uy tín nhận được nhiều đề cử vì mức giá phải chăng mà vẫn đảm bảo về sức khỏe cho các bé cún. Shop này chuyên nhân giống và mua bán các dòng chó từ to đến nhỏ, ví dụ như Samoyed, Alaska, Poodle, Malinois, Phốc hươu, Phốc Sóc, Pug, Pitbull v.v…`,
    text2: `Ngoài ra nơi đây còn là thiên đường mua sắm phụ kiện thú cưng, bao gồm thức ăn, dây đeo, vòng cổ, đồ gặm, bàn chải, bấm móng chân, bông ngoáy tai… Chưa hết, cửa hàng bán chó cảnh uy tín PT Pet Shop cũng cung cấp các dịch vụ tắm sấy, cắt tỉa lông, nhuộm lông, cắt tuyến hôi…, được thực hiện bởi đội ngũ nhân viên nhiệt tình, trách nhiệm và lành nghề.`,
    text3: ``,
    img: `https://dogily.vn/wp-content/uploads/2020/05/cua-hang-ban-cho-canh-uy-tin-ha-noi-pt-pet-shop.jpg`,
    concastInfo: {
      addressShop: '199 Hoa Vôi, Quốc Oai, Hà Nội',
      farm: '',
      phone: '0392 663 686',
      email: '',
      website: '',
      facebook: 'https://www.facebook.com/ptpetshop9293/',
    },
  },
  {
    title: 'Rottweiler Gervi Kennel – Cửa hàng bán chó cảnh uy tín tại Hà Nội',
    text1: `Rottweiler Gervi Kennel là cửa hàng bán chó cảnh uy tín chuyên phối giống và cung cấp dòng Rottweiler của Đức. Cơ sở này được Hiệp hội những người nuôi chó giống Việt Nam cấp giấy phép từ năm 2015.`,
    text2: `Dòng chó này rất cao lớn và khỏe mạnh, thường được nhận nuôi để trở thành người bảo vệ cho sự an toàn của các thành viên trong gia đình và tài sản hay làm chó đặc nhiệm trong quân đội.`,
    text3: `Tại cửa hàng bán chó cảnh uy tín Rottweiler Gervi Kennel, các em cún được nuôi dưỡng cho đến khi đủ 2.5 hoặc 4 tháng tuổi thì mới xuất chuồng, sau khi đã chủng ngừa đầy đủ và đạt yêu cầu về sức khỏe.`,
    img: `https://dogily.vn/wp-content/uploads/2020/05/cua-hang-ban-cho-canh-uy-tin-ha-noi-rottweiler-gervi-kennel.jpg`,
    concastInfo: {
      addressShop: '99 Định Công Hạ, Hoàng Mai, Hà Nội.',
      farm: 'Đông Xuân, Sóc Sơn, Hà Nội.',
      phone: '098 111 50 00',
      email: '',
      website: '',
      facebook: 'https://www.facebook.com/RottweilerGervikennel/',
    },
  }
]

export const dataServices = [
  {
    img: 'https://dogily.vn/wp-content/uploads/2020/05/cua-hang-cho-canh-dogilypetshop-400x600.jpg',
    title: 'Top 8 cửa hàng bán chó cảnh uy tín nhất tại Hà Nội',
    sub: '“Người yêu có thể không có, nhưng chó phải có một con.” Bạn nào đang [...]',
    activate: 1
  },

]
