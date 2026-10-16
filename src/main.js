import "./style.css";

const PART1 = [
{
 id:"m1", no:"01", title:"Nền tảng Logistics", tone:"--c1",
 desc:"Logistics là gì, gồm những hoạt động nào, ai tham gia và nó nằm ở đâu trong chuỗi cung ứng.",
 lessons:[
 {
  id:"1.1", title:"Logistics là gì?", min:15,
  goals:["Hiểu định nghĩa logistics theo pháp luật Việt Nam và theo thông lệ quốc tế","Phân biệt logistics với chuỗi cung ứng","Nhớ nguyên tắc “7 đúng” và ba dòng chảy của logistics"],
  body:`<p>Bạn đặt một chiếc áo trên sàn thương mại điện tử lúc 9 giờ tối, hai ngày sau áo đến tận cửa. Phía sau hai ngày đó là cả một chuỗi việc: nhà máy may xong áo, xe chở áo về kho, nhân viên kho cất áo lên kệ, hệ thống nhận đơn, người lấy hàng đóng gói, xe tải chở về bưu cục, shipper giao cho bạn và thu tiền. Toàn bộ việc tổ chức để hàng đi đúng như vậy chính là <b>logistics</b>.</p>
<h3>Định nghĩa</h3>
<p><b>Theo Luật Thương mại 2005 (Điều 233)</b>, dịch vụ logistics là hoạt động thương mại, trong đó thương nhân tổ chức thực hiện một hoặc nhiều công việc như nhận hàng, vận chuyển, lưu kho, lưu bãi, làm thủ tục hải quan và giấy tờ, tư vấn, đóng gói, ghi ký mã hiệu, giao hàng hoặc dịch vụ khác liên quan đến hàng hoá theo thoả thuận với khách hàng để hưởng thù lao.</p>
<p><b>Theo thông lệ quốc tế</b> (Hội đồng các chuyên gia quản trị chuỗi cung ứng – CSCMP), logistics là phần của quản trị chuỗi cung ứng, lo việc lập kế hoạch, thực hiện và kiểm soát dòng hàng hoá, dịch vụ và thông tin, theo cả chiều xuôi lẫn chiều ngược, từ điểm khởi đầu đến điểm tiêu thụ sao cho hiệu quả và đáp ứng yêu cầu khách hàng.</p>
<h3>Nguyên tắc “7 đúng” (7R)</h3>
<p>Mục tiêu của logistics thường được tóm gọn thành: đưa <b>đúng sản phẩm</b>, với <b>đúng số lượng</b>, ở <b>đúng tình trạng</b>, đến <b>đúng nơi</b>, vào <b>đúng thời điểm</b>, cho <b>đúng khách hàng</b>, với <b>đúng chi phí</b>. Sai một trong bảy yếu tố là khách hàng không hài lòng hoặc doanh nghiệp mất tiền.</p>
<h3>Ba dòng chảy</h3>
<ul><li><b>Dòng hàng hoá</b>: nguyên liệu, bán thành phẩm, thành phẩm di chuyển giữa các điểm.</li><li><b>Dòng thông tin</b>: đơn hàng, lịch tàu, tồn kho, chứng từ, trạng thái giao hàng.</li><li><b>Dòng tiền</b>: thanh toán tiền hàng, cước vận chuyển, thuế, phí.</li></ul>
<p>Người mới thường chỉ nhìn thấy dòng hàng. Thực tế, phần lớn sự cố logistics bắt đầu từ dòng thông tin: sai một con số trên chứng từ có thể khiến cả container nằm ở cảng thêm một tuần.</p>
<h3>Logistics khác chuỗi cung ứng thế nào?</h3>
<div class="tbl"><table><thead><tr><th></th><th>Logistics</th><th>Chuỗi cung ứng (Supply Chain)</th></tr></thead><tbody><tr><td>Phạm vi</td><td>Di chuyển và lưu trữ hàng, thông tin</td><td>Toàn bộ mạng lưới từ nguồn nguyên liệu đến người tiêu dùng</td></tr><tr><td>Bao gồm</td><td>Vận tải, kho, tồn kho, đóng gói, chứng từ</td><td>Logistics + mua hàng, sản xuất, hoạch định, quan hệ nhà cung cấp</td></tr><tr><td>Quan hệ</td><td colspan="2">Logistics là <b>một bộ phận</b> của quản trị chuỗi cung ứng</td></tr></tbody></table></div>
<div class="ex"><b>Ví dụ:</b> Một lô cà phê nhân từ Tây Nguyên xuất sang Đức. Logistics lo xe tải chở cà phê về kho, đóng vào container, làm thủ tục hải quan, đặt chỗ tàu ở cảng Cát Lái, theo dõi tàu và giao bộ chứng từ. Chuỗi cung ứng rộng hơn: còn có việc chọn nông hộ, thu mua, sơ chế, đàm phán giá với nhà rang xay ở Đức.</div>`,
  terms:[["Logistics","Tổ chức dòng hàng, thông tin, tiền từ nơi đi đến nơi nhận"],["Supply Chain","Chuỗi cung ứng – toàn mạng lưới tạo ra và đưa sản phẩm tới khách"],["Lead time","Thời gian từ khi đặt hàng đến khi nhận hàng"],["7R","Bảy chữ “đúng” – mục tiêu của logistics"]],
  practice:"Chọn một món đồ trong nhà bạn (gói mì, chai nước mắm, điện thoại). Viết ra 5–7 bước hành trình của nó từ nơi sản xuất đến tay bạn, và đánh dấu bước nào là vận tải, bước nào là lưu kho, bước nào là thông tin.",
  quiz:[
   {q:"Theo Luật Thương mại 2005, dịch vụ logistics là gì?",o:["Chỉ là hoạt động vận chuyển hàng bằng xe tải","Hoạt động thương mại tổ chức một hoặc nhiều công việc liên quan đến hàng hoá (vận chuyển, lưu kho, thủ tục hải quan…) để hưởng thù lao","Hoạt động sản xuất hàng hoá trong nhà máy"],a:1,e:"Điều 233 định nghĩa logistics là hoạt động thương mại gồm một hoặc nhiều công việc liên quan đến hàng hoá, không chỉ riêng vận chuyển."},
   {q:"Quan hệ đúng giữa logistics và chuỗi cung ứng là:",o:["Hai khái niệm giống hệt nhau","Chuỗi cung ứng là một phần của logistics","Logistics là một bộ phận của quản trị chuỗi cung ứng"],a:2,e:"Chuỗi cung ứng rộng hơn, bao gồm cả mua hàng, sản xuất, hoạch định. Logistics là một phần trong đó."},
   {q:"Ba dòng chảy của logistics gồm:",o:["Hàng hoá, thông tin, tiền","Hàng hoá, con người, máy móc","Nguyên liệu, nhân công, thuế"],a:0,e:"Hàng đi một chiều, thông tin và tiền đi theo cả hai chiều."}
  ]
 },
 {
  id:"1.2", title:"Các hoạt động cốt lõi và chỉ số đo lường", min:20,
  goals:["Kể tên 7 hoạt động chính của logistics","Hiểu khái niệm “tổng chi phí” và sự đánh đổi giữa các chi phí","Tính được vài chỉ số KPI cơ bản: OTIF, vòng quay tồn kho"],
  body:`<h3>7 hoạt động chính</h3>
<ol><li><b>Vận tải</b> – thường là khoản chi phí lớn nhất trong logistics.</li><li><b>Kho bãi</b> – lưu trữ, bảo quản, gom và chia hàng.</li><li><b>Quản lý tồn kho</b> – quyết định giữ bao nhiêu hàng, ở đâu, khi nào đặt thêm.</li><li><b>Xử lý đơn hàng</b> – nhận, kiểm tra, xác nhận và theo dõi đơn.</li><li><b>Đóng gói và ký mã hiệu</b> – bảo vệ hàng và ghi thông tin nhận diện (shipping mark).</li><li><b>Chứng từ và thủ tục hải quan</b> – với hàng xuất nhập khẩu.</li><li><b>Hệ thống thông tin</b> – phần mềm, dữ liệu kết nối tất cả các bước trên.</li></ol>
<h3>Tư duy “tổng chi phí” và sự đánh đổi</h3>
<p>Các chi phí logistics thường kéo nhau theo chiều ngược lại. Giảm hàng tồn trong kho thì tiết kiệm tiền kho, nhưng phải giao hàng thường xuyên hơn, gấp hơn, nên tốn vận tải hơn. Chuyển từ đường biển sang đường hàng không thì nhanh hơn, giảm tồn kho đi đường, nhưng cước cao gấp nhiều lần.</p>
<p>Vì vậy người làm logistics không tối ưu từng khoản riêng lẻ mà nhìn vào <b>tổng chi phí</b> (vận tải + kho + tồn kho + xử lý đơn + hao hụt) so với <b>mức dịch vụ</b> khách hàng cần.</p>
<div class="ex"><b>Ví dụ đánh đổi:</b> Một cửa hàng điện thoại ở Đà Nẵng có thể (A) nhập hàng mỗi tháng một lần bằng xe tải ghép: cước rẻ nhưng phải giữ nhiều hàng; hoặc (B) nhập hàng mỗi tuần: tồn kho thấp, ít rủi ro mất giá, nhưng cước cao hơn. Lựa chọn đúng phụ thuộc giá trị hàng và tốc độ bán.</div>
<h3>Chỉ số đo lường (KPI) cơ bản</h3>
<div class="tbl"><table><thead><tr><th>KPI</th><th>Ý nghĩa</th><th>Cách tính</th></tr></thead><tbody>
<tr><td><b>OTIF</b> (On Time In Full)</td><td>Tỷ lệ đơn giao đúng hạn và đủ số lượng</td><td>Số đơn đúng hạn và đủ ÷ tổng số đơn</td></tr>
<tr><td><b>Lead time</b></td><td>Thời gian từ đặt hàng đến nhận hàng</td><td>Ngày nhận − ngày đặt</td></tr>
<tr><td><b>Fill rate</b></td><td>Tỷ lệ đáp ứng ngay từ tồn kho</td><td>Số lượng giao được ÷ số lượng đặt</td></tr>
<tr><td><b>Vòng quay tồn kho</b></td><td>Hàng tồn “quay” được bao nhiêu lần một năm</td><td>Giá vốn hàng bán ÷ tồn kho bình quân</td></tr>
<tr><td><b>Chi phí logistics / doanh thu</b></td><td>Logistics “ăn” bao nhiêu phần doanh thu</td><td>Tổng chi phí logistics ÷ doanh thu</td></tr>
</tbody></table></div>
<div class="ex"><b>Tính thử:</b> Tháng này có 100 đơn. 92 đơn giao đúng hạn, nhưng trong đó 4 đơn thiếu hàng. OTIF = 88 ÷ 100 = <b>88%</b>. Chú ý: OTIF luôn ≤ tỷ lệ đúng hạn, vì đơn phải thoả cả hai điều kiện.</div>`,
  terms:[["OTIF","On Time In Full – đúng hạn và đủ hàng"],["Fill rate","Tỷ lệ đáp ứng đơn từ tồn kho sẵn có"],["Inventory turnover","Vòng quay tồn kho"],["Shipping mark","Ký mã hiệu ghi trên kiện hàng"],["Trade-off","Sự đánh đổi giữa các chi phí"]],
  practice:"Một cửa hàng có giá vốn hàng bán cả năm 2,4 tỷ đồng, tồn kho bình quân 400 triệu đồng. Hãy tính vòng quay tồn kho và số ngày tồn kho bình quân (365 ÷ vòng quay). Đáp án: 6 vòng, khoảng 61 ngày.",
  quiz:[
   {q:"OTIF là viết tắt của chỉ số nào?",o:["On Time In Full – đúng hạn và đủ hàng","Order To Invoice Flow","On Truck In Factory"],a:0,e:"OTIF đo cùng lúc hai điều kiện: giao đúng hạn và giao đủ số lượng."},
   {q:"Giá vốn hàng bán 1,2 tỷ đồng/năm, tồn kho bình quân 200 triệu đồng. Vòng quay tồn kho là:",o:["4 vòng","6 vòng","10 vòng"],a:1,e:"1.200 ÷ 200 = 6 vòng/năm."},
   {q:"Chuyển hàng từ đường biển sang đường hàng không thường dẫn đến:",o:["Giảm cả cước và thời gian","Tăng cước vận tải nhưng giảm thời gian và tồn kho đi đường","Không thay đổi tổng chi phí"],a:1,e:"Đây là ví dụ điển hình của sự đánh đổi: nhanh hơn nhưng đắt hơn."}
  ]
 },
 {
  id:"1.3", title:"Ai tham gia vào logistics? Mô hình 1PL–4PL", min:20,
  goals:["Nhận diện các bên trong một lô hàng xuất nhập khẩu","Phân biệt hãng vận chuyển (carrier) và công ty giao nhận (forwarder)","Hiểu các mô hình 1PL, 2PL, 3PL, 4PL"],
  body:`<h3>Các bên trong một lô hàng</h3>
<div class="tbl"><table><thead><tr><th>Bên</th><th>Vai trò</th></tr></thead><tbody>
<tr><td><b>Shipper</b> (người gửi hàng)</td><td>Thường là người bán/nhà xuất khẩu, giao hàng cho người chuyên chở</td></tr>
<tr><td><b>Consignee</b> (người nhận hàng)</td><td>Người có quyền nhận hàng tại nơi đến, thường là người mua</td></tr>
<tr><td><b>Notify party</b></td><td>Bên được thông báo khi hàng đến (thường là người mua hoặc đại lý của họ)</td></tr>
<tr><td><b>Carrier</b> (người chuyên chở)</td><td>Hãng tàu, hãng hàng không, nhà xe, đường sắt – trực tiếp vận chuyển</td></tr>
<tr><td><b>Freight forwarder</b></td><td>Công ty giao nhận: thay mặt chủ hàng tổ chức vận chuyển, đặt chỗ, làm chứng từ</td></tr>
<tr><td><b>NVOCC</b></td><td>Người chuyên chở không tàu: không sở hữu tàu nhưng phát hành vận đơn và chịu trách nhiệm như người chuyên chở</td></tr>
<tr><td><b>Customs broker</b></td><td>Đại lý làm thủ tục hải quan</td></tr>
<tr><td><b>Cảng, depot, kho</b></td><td>Nơi xếp dỡ, lưu container, lưu hàng</td></tr>
<tr><td><b>Ngân hàng, bảo hiểm, cơ quan nhà nước</b></td><td>Thanh toán, bảo hiểm hàng, hải quan, kiểm dịch, kiểm tra chất lượng</td></tr>
</tbody></table></div>
<h3>Carrier và Forwarder khác nhau thế nào?</h3>
<p>Hãng tàu như Maersk, MSC, CMA CGM, COSCO, ONE sở hữu hoặc khai thác tàu. Forwarder thường <b>không có tàu</b>: họ mua chỗ (slot) từ hãng tàu với giá sỉ, rồi bán lại cho nhiều chủ hàng kèm dịch vụ trọn gói: lấy hàng tại kho, khai hải quan, gom hàng lẻ, theo dõi lô hàng. Hãng tàu phát hành <b>vận đơn chủ (Master B/L)</b> cho forwarder; forwarder phát hành <b>vận đơn nhà (House B/L)</b> cho chủ hàng. Bạn sẽ học kỹ hai loại vận đơn này ở Môn 5.</p>
<h3>Mô hình thuê ngoài logistics</h3>
<div class="tbl"><table><thead><tr><th>Mô hình</th><th>Ý nghĩa</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td><b>1PL</b></td><td>Doanh nghiệp tự làm logistics bằng xe, kho của mình</td><td>Nhà máy nước đá tự chở hàng cho quán</td></tr>
<tr><td><b>2PL</b></td><td>Thuê một nhà cung cấp làm một việc cụ thể (chỉ vận tải hoặc chỉ kho)</td><td>Thuê nhà xe chở một chuyến hàng</td></tr>
<tr><td><b>3PL</b></td><td>Thuê ngoài trọn gói nhiều dịch vụ tích hợp: kho, vận tải, hải quan, đóng gói</td><td>Shop online thuê công ty fulfillment lưu kho và giao hàng</td></tr>
<tr><td><b>4PL</b></td><td>Đơn vị điều phối, thiết kế và quản lý toàn bộ chuỗi, có thể điều hành nhiều 3PL</td><td>Một tập đoàn giao cho đối tác quản lý toàn bộ mạng lưới phân phối châu Á</td></tr>
</tbody></table></div>
<p>Một số tài liệu còn nhắc tới 5PL – mô hình tổng hợp nhu cầu của nhiều chuỗi cung ứng trên nền tảng số. Với người mới, chỉ cần nắm chắc 1PL–4PL.</p>`,
  terms:[["Shipper","Người gửi hàng"],["Consignee","Người nhận hàng"],["Carrier","Người chuyên chở thực tế"],["Forwarder","Công ty giao nhận vận tải"],["NVOCC","Non-Vessel Operating Common Carrier – người chuyên chở không tàu"],["3PL","Third-Party Logistics – logistics thuê ngoài trọn gói"]],
  practice:"Tìm website của một công ty logistics Việt Nam bất kỳ. Liệt kê các dịch vụ họ cung cấp và tự xếp họ vào nhóm: carrier, forwarder, hay 3PL. Giải thích ngắn vì sao.",
  quiz:[
   {q:"Consignee là ai?",o:["Người gửi hàng","Người có quyền nhận hàng tại nơi đến","Hãng tàu vận chuyển"],a:1,e:"Consignee là người nhận hàng; shipper là người gửi."},
   {q:"Điểm khác biệt điển hình giữa forwarder và hãng tàu là:",o:["Forwarder thường không sở hữu tàu, mua chỗ từ hãng tàu và cung cấp dịch vụ trọn gói","Forwarder luôn có đội tàu lớn hơn hãng tàu","Forwarder chỉ làm thủ tục hải quan"],a:0,e:"Forwarder là người tổ chức; hãng tàu là người chuyên chở thực tế."},
   {q:"Một shop online thuê một công ty vừa lưu kho, đóng gói, vừa giao hàng cho khách. Đây là mô hình:",o:["1PL","2PL","3PL"],a:2,e:"Nhiều dịch vụ tích hợp do một bên ngoài cung cấp là 3PL."}
  ]
 },
 {
  id:"1.4", title:"Chuỗi cung ứng: chiều xuôi, chiều ngược và hiệu ứng roi da", min:20,
  goals:["Phân biệt inbound, outbound và reverse logistics","Hiểu chiến lược đẩy (push) và kéo (pull)","Giải thích hiệu ứng roi da (bullwhip effect)"],
  body:`<h3>Ba chiều của logistics</h3>
<ul><li><b>Inbound logistics</b> (logistics đầu vào): đưa nguyên vật liệu từ nhà cung cấp về nhà máy. Ví dụ: vải, chỉ, cúc nhập về xưởng may.</li><li><b>Outbound logistics</b> (logistics đầu ra): đưa thành phẩm từ nhà máy đến nhà phân phối và khách hàng.</li><li><b>Reverse logistics</b> (logistics ngược): hàng đi ngược chiều – hàng trả lại, hàng lỗi bảo hành, thu hồi bao bì, tái chế. Thương mại điện tử làm mảng này tăng mạnh vì tỷ lệ hoàn hàng cao.</li></ul>
<h3>Chiến lược đẩy và kéo</h3>
<p><b>Đẩy (Push)</b>: sản xuất và đưa hàng ra thị trường dựa trên <i>dự báo</i>. Phù hợp hàng có nhu cầu ổn định (gạo, nước mắm). Rủi ro: dự báo sai thì tồn kho nhiều.</p>
<p><b>Kéo (Pull)</b>: chỉ sản xuất hoặc giao hàng khi có <i>đơn thực tế</i>. Phù hợp hàng đặt riêng, hàng đắt tiền. Rủi ro: khách phải chờ lâu hơn.</p>
<p>Đa số doanh nghiệp kết hợp: sản xuất bán thành phẩm theo dự báo (đẩy), rồi hoàn thiện theo đơn (kéo).</p>
<h3>Hiệu ứng roi da (Bullwhip effect)</h3>
<p>Khi nhu cầu của người tiêu dùng chỉ dao động nhẹ, đơn đặt hàng lại dao động mạnh dần khi đi ngược lên chuỗi: cửa hàng đặt nhà phân phối nhiều hơn một chút “cho chắc”, nhà phân phối đặt nhà máy nhiều hơn nữa, nhà máy đặt nhà cung cấp nguyên liệu càng nhiều. Giống như vẩy nhẹ cán roi thì đầu roi quất rất mạnh.</p>
<p><b>Nguyên nhân:</b> mỗi bên chỉ nhìn đơn hàng của bên ngay sau mình chứ không thấy nhu cầu thật; đặt hàng theo lô lớn; chạy khuyến mãi làm nhu cầu đột biến; lo thiếu hàng nên đặt dư.</p>
<p><b>Cách giảm:</b> chia sẻ dữ liệu bán hàng thực tế cho cả chuỗi, rút ngắn lead time, đặt hàng nhỏ và đều hơn, hạn chế khuyến mãi giật cục.</p>
<div class="ex"><b>Ví dụ:</b> Năm 2020–2021, nhu cầu thiết bị điện tử tăng lên, các hãng đặt chip dồn dập vì sợ thiếu. Đến khi nhu cầu chững lại, nhiều hãng rơi vào cảnh tồn kho chip dư thừa. Đây là một biểu hiện của hiệu ứng roi da ở quy mô toàn cầu.</div>`,
  terms:[["Inbound","Logistics đầu vào"],["Outbound","Logistics đầu ra"],["Reverse logistics","Logistics ngược – hàng trả lại, thu hồi, tái chế"],["Push / Pull","Chiến lược đẩy theo dự báo / kéo theo đơn thực"],["Bullwhip effect","Hiệu ứng roi da – dao động đơn hàng khuếch đại ngược chuỗi"]],
  practice:"Nghĩ về một chuỗi trà sữa. Nguyên liệu nào là inbound? Ly trà sữa giao qua ứng dụng là outbound gì? Ly nhựa thu hồi để tái chế thuộc loại logistics nào? Viết 3 câu trả lời.",
  quiz:[
   {q:"Một khách trả lại đôi giày mua online vì không vừa. Hoạt động đưa giày về kho thuộc:",o:["Inbound logistics","Reverse logistics","Outbound logistics"],a:1,e:"Hàng đi ngược chiều từ khách về doanh nghiệp là reverse logistics."},
   {q:"Hiệu ứng roi da mô tả hiện tượng:",o:["Đơn hàng dao động mạnh dần khi đi ngược lên chuỗi cung ứng","Giá cước vận tải giảm dần theo mùa","Hàng hoá bị hư hỏng khi vận chuyển"],a:0,e:"Dao động nhỏ ở người tiêu dùng khuếch đại thành dao động lớn ở nhà sản xuất và nhà cung cấp."},
   {q:"Chiến lược “kéo” (pull) có nghĩa là:",o:["Sản xuất trước theo dự báo","Chỉ sản xuất hoặc giao khi có đơn thực tế","Kéo giá bán xuống thấp"],a:1,e:"Pull dựa trên nhu cầu thực; push dựa trên dự báo."}
  ]
 }
 ],
 test:[
  {q:"Theo nguyên tắc 7R, yếu tố nào KHÔNG thuộc 7 chữ “đúng”?",o:["Đúng thời điểm","Đúng chi phí","Đúng thương hiệu"],a:2,e:"7R gồm: sản phẩm, số lượng, tình trạng, nơi, thời điểm, khách hàng, chi phí."},
  {q:"Khoản chi phí nào thường lớn nhất trong tổng chi phí logistics?",o:["Vận tải","Đóng gói","In chứng từ"],a:0,e:"Vận tải thường chiếm tỷ trọng lớn nhất."},
  {q:"Tháng này có 200 đơn, 180 đơn đúng hạn, trong đó 10 đơn bị thiếu hàng. OTIF là:",o:["90%","85%","95%"],a:1,e:"Đơn đúng hạn và đủ hàng = 180 − 10 = 170. 170 ÷ 200 = 85%."},
  {q:"Một công ty giao nhận mua chỗ trên tàu của hãng tàu, phát hành vận đơn của mình cho chủ hàng. Vận đơn này gọi là:",o:["Master B/L","House B/L","Seaway bill của hãng tàu"],a:1,e:"Forwarder phát hành House B/L; hãng tàu phát hành Master B/L."},
  {q:"Doanh nghiệp giao toàn bộ việc thiết kế và điều phối mạng lưới logistics, kể cả quản lý nhiều nhà 3PL, cho một đối tác. Đây là:",o:["2PL","3PL","4PL"],a:2,e:"4PL là đơn vị điều phối, tích hợp toàn chuỗi."},
  {q:"Vải nhập từ nhà cung cấp về xưởng may thuộc:",o:["Inbound logistics","Outbound logistics","Reverse logistics"],a:0,e:"Nguyên liệu đi vào nhà máy là inbound."},
  {q:"Cách hiệu quả nhất để giảm hiệu ứng roi da là:",o:["Mỗi bên tự đặt dư hàng để an toàn","Chia sẻ dữ liệu bán hàng thực tế cho cả chuỗi","Tăng khuyến mãi đột xuất"],a:1,e:"Khi mọi bên thấy nhu cầu thật, họ không phải đoán và đặt dư."},
  {q:"Cửa hàng giảm tồn kho bằng cách nhập hàng hằng tuần thay vì hằng tháng. Hệ quả thường gặp là:",o:["Chi phí vận tải có xu hướng tăng","Chi phí kho tăng mạnh","Không ảnh hưởng gì"],a:0,e:"Giao nhiều chuyến nhỏ hơn thì cước tính trên mỗi đơn vị hàng thường cao hơn – đó là sự đánh đổi."}
 ]
},
{
 id:"m2", no:"02", title:"Vận tải", tone:"--c2",
 desc:"Năm phương thức vận tải, vận tải biển bằng container, các loại container và cách tính cước.",
 lessons:[
 {
  id:"2.1", title:"Năm phương thức vận tải", min:15,
  goals:["So sánh đường bộ, đường sắt, đường thủy, hàng không, đường ống","Biết khi nào chọn phương thức nào","Hiểu vận tải đa phương thức"],
  body:`<h3>So sánh nhanh</h3>
<div class="tbl"><table><thead><tr><th>Phương thức</th><th>Tốc độ</th><th>Chi phí/tấn</th><th>Phù hợp với</th></tr></thead><tbody>
<tr><td><b>Đường bộ</b></td><td>Nhanh ở chặng ngắn</td><td>Trung bình</td><td>Giao tận nơi (door-to-door), chặng ngắn và trung bình, nối các phương thức khác</td></tr>
<tr><td><b>Đường sắt</b></td><td>Trung bình</td><td>Thấp</td><td>Hàng khối lượng lớn, chặng dài trên đất liền; tuyến Bắc – Nam, liên vận sang Trung Quốc</td></tr>
<tr><td><b>Đường thủy nội địa</b></td><td>Chậm</td><td>Rất thấp</td><td>Sà lan chở container, vật liệu xây dựng, nông sản – rất phổ biến ở Đồng bằng sông Cửu Long</td></tr>
<tr><td><b>Đường biển</b></td><td>Chậm</td><td>Rất thấp</td><td>Hàng xuất nhập khẩu khối lượng lớn; chiếm hơn 80% khối lượng thương mại hàng hoá thế giới</td></tr>
<tr><td><b>Hàng không</b></td><td>Rất nhanh</td><td>Rất cao</td><td>Hàng giá trị cao, nhẹ, gấp, dễ hỏng: linh kiện điện tử, dược phẩm, hoa tươi, hàng mẫu</td></tr>
<tr><td><b>Đường ống</b></td><td>Liên tục</td><td>Thấp khi đã xây xong</td><td>Dầu, khí, nước – hàng lỏng, khí, chảy liên tục</td></tr>
</tbody></table></div>
<h3>Chọn phương thức dựa trên 5 câu hỏi</h3>
<ol><li>Hàng nặng bao nhiêu, cồng kềnh thế nào?</li><li>Hàng có giá trị cao hay thấp so với trọng lượng?</li><li>Khách cần hàng gấp tới mức nào?</li><li>Hàng có đặc thù gì (đông lạnh, nguy hiểm, dễ vỡ)?</li><li>Điểm đi và điểm đến có cảng, sân bay, ga đường sắt gần không?</li></ol>
<div class="ex"><b>Ví dụ:</b> 20 tấn gạo đi Philippines → đường biển. 50 kg linh kiện điện thoại cần ở Hàn Quốc trong 2 ngày → hàng không. Một container hàng từ nhà máy ở Long An ra cảng Cát Lái → đường bộ hoặc sà lan.</div>
<h3>Vận tải đa phương thức (Multimodal)</h3>
<p>Hầu hết lô hàng quốc tế dùng nhiều phương thức: xe tải chở container từ nhà máy ra cảng, tàu biển chở qua đại dương, rồi xe tải hoặc đường sắt chở vào nội địa nước nhập. Khi toàn bộ hành trình do <b>một người kinh doanh vận tải đa phương thức (MTO)</b> chịu trách nhiệm theo <b>một hợp đồng, một chứng từ</b>, ta gọi đó là vận tải đa phương thức. Lợi ích: chủ hàng chỉ làm việc với một đầu mối.</p>`,
  terms:[["Door-to-door","Giao từ cửa kho người gửi đến cửa kho người nhận"],["Multimodal","Vận tải đa phương thức – một hợp đồng, nhiều phương thức"],["MTO","Multimodal Transport Operator – người kinh doanh vận tải đa phương thức"],["Barge","Sà lan"]],
  practice:"Chọn phương thức phù hợp cho 3 lô hàng sau và giải thích: (1) 2 tấn sầu riêng tươi đi Thượng Hải; (2) 500 tấn xi măng từ Hải Phòng vào TP.HCM; (3) 3 kg mẫu vải gửi khách ở Mỹ cần trong 3 ngày.",
  quiz:[
   {q:"Phương thức nào chiếm tỷ trọng lớn nhất trong khối lượng thương mại hàng hoá quốc tế?",o:["Hàng không","Đường biển","Đường sắt"],a:1,e:"Đường biển chở hơn 80% khối lượng thương mại hàng hoá thế giới."},
   {q:"50 kg linh kiện điện tử giá trị cao cần đến Nhật trong 2 ngày nên đi:",o:["Đường biển","Đường thủy nội địa","Hàng không"],a:2,e:"Hàng nhẹ, giá trị cao, gấp – phù hợp hàng không."},
   {q:"Vận tải đa phương thức có đặc điểm chính là:",o:["Dùng nhiều phương thức với một hợp đồng và một người chịu trách nhiệm","Chỉ dùng đường biển","Mỗi chặng ký một hợp đồng riêng với một hãng khác nhau"],a:0,e:"Điểm cốt lõi là một hợp đồng, một chứng từ, một đầu mối chịu trách nhiệm."}
  ]
 },
 {
  id:"2.2", title:"Vận tải biển: FCL, LCL và lịch tàu", min:25,
  goals:["Phân biệt hàng nguyên container (FCL) và hàng lẻ (LCL)","Hiểu tàu chợ và tàu chuyến","Nắm các thuật ngữ booking, ETD, ETA, cut-off, VGM"],
  body:`<h3>FCL và LCL</h3>
<div class="tbl"><table><thead><tr><th></th><th>FCL (Full Container Load)</th><th>LCL (Less than Container Load)</th></tr></thead><tbody>
<tr><td>Nghĩa</td><td>Hàng nguyên container – một chủ hàng thuê cả container</td><td>Hàng lẻ – nhiều chủ hàng dùng chung một container</td></tr>
<tr><td>Đóng hàng</td><td>Tại kho người gửi hoặc tại bãi</td><td>Tại kho CFS của người gom hàng (consolidator)</td></tr>
<tr><td>Tính cước</td><td>Theo container</td><td>Theo m³ (CBM) hoặc tấn, lấy số lớn hơn</td></tr>
<tr><td>Phù hợp</td><td>Hàng nhiều, khoảng từ 15 m³ trở lên</td><td>Hàng ít, vài m³</td></tr>
<tr><td>Rủi ro</td><td>Thấp, container niêm phong từ đầu</td><td>Cao hơn, hàng bị bốc xếp nhiều lần, chờ gom đủ hàng</td></tr>
</tbody></table></div>
<h3>Tàu chợ và tàu chuyến</h3>
<p><b>Tàu chợ (liner)</b> chạy theo tuyến và lịch cố định, công bố trước, như xe buýt – hầu hết tàu container là tàu chợ. <b>Tàu chuyến (tramp)</b> không có lịch cố định, được thuê theo chuyến hoặc theo thời gian, như taxi – thường chở hàng rời khối lượng lớn: than, quặng, gạo xá, phân bón.</p>
<h3>Thuật ngữ lịch tàu phải thuộc</h3>
<ul><li><b>Booking</b>: đặt chỗ trên tàu. Hãng tàu gửi lại <i>booking confirmation</i> để chủ hàng lấy container rỗng.</li><li><b>POL / POD</b>: cảng xếp hàng (Port of Loading) / cảng dỡ hàng (Port of Discharge).</li><li><b>ETD / ETA</b>: thời gian dự kiến tàu chạy / thời gian dự kiến tàu đến.</li><li><b>Transit time</b>: thời gian hành trình trên biển.</li><li><b>Transshipment</b>: chuyển tải ở cảng trung gian (ví dụ hàng đi châu Âu chuyển tải ở Singapore).</li><li><b>Cut-off</b>: hạn chót. <i>CY cut-off</i> là hạn hạ container có hàng vào bãi cảng; <i>SI cut-off</i> là hạn gửi hướng dẫn làm vận đơn (Shipping Instruction).</li><li><b>VGM</b>: khối lượng toàn bộ container đã được xác nhận – bắt buộc theo Công ước SOLAS, phải khai trước khi xếp lên tàu.</li></ul>
<h3>Quy trình một lô hàng FCL xuất khẩu</h3>
<ol><li>Đặt chỗ (booking) với hãng tàu hoặc forwarder.</li><li>Nhận lệnh cấp container rỗng, kéo container từ depot về kho.</li><li>Đóng hàng vào container, bấm chì (seal).</li><li>Kéo container hạ bãi cảng trước CY cut-off.</li><li>Khai báo và thông quan hàng xuất khẩu.</li><li>Gửi SI và VGM trước hạn.</li><li>Tàu chạy → hãng tàu phát hành vận đơn (B/L).</li></ol>`,
  terms:[["FCL","Hàng nguyên container"],["LCL","Hàng lẻ, ghép container"],["Liner / Tramp","Tàu chợ / tàu chuyến"],["POL / POD","Cảng xếp / cảng dỡ"],["ETD / ETA","Dự kiến khởi hành / dự kiến đến"],["Cut-off","Hạn chót hạ bãi hoặc gửi chứng từ"],["VGM","Verified Gross Mass – khối lượng toàn bộ đã xác nhận"],["Seal","Chì niêm phong container"]],
  practice:"Tra lịch tàu (sailing schedule) trên website một hãng tàu lớn cho tuyến từ Cát Lái (hoặc Hải Phòng) đi Rotterdam. Ghi lại: ETD, ETA, transit time, có chuyển tải không, chuyển tải ở đâu.",
  quiz:[
   {q:"Chủ hàng có 4 m³ hàng muốn đi Úc. Hình thức phù hợp thường là:",o:["FCL 40'","LCL","Thuê tàu chuyến"],a:1,e:"Lượng hàng nhỏ, vài m³, nên đi hàng lẻ LCL."},
   {q:"“CY cut-off” là:",o:["Hạn chót hạ container có hàng vào bãi cảng","Thời điểm tàu cập cảng đến","Hạn thanh toán cước"],a:0,e:"Trễ CY cut-off thì container có thể bị rớt tàu."},
   {q:"VGM là gì?",o:["Mã số của tàu","Khối lượng toàn bộ container đã được xác nhận, bắt buộc theo SOLAS","Phí lưu container"],a:1,e:"VGM phải được khai trước khi container được xếp lên tàu."}
  ]
 },
 {
  id:"2.3", title:"Container: loại, kích thước và cách đọc số hiệu", min:20,
  goals:["Phân biệt các loại container thông dụng","Tính số TEU","Đọc số hiệu container theo ISO 6346"],
  body:`<h3>Các loại container thông dụng</h3>
<div class="tbl"><table><thead><tr><th>Loại</th><th>Thể tích (xấp xỉ)</th><th>Đặc điểm và công dụng</th></tr></thead><tbody>
<tr><td><b>20' DC/GP</b> (Dry/General Purpose)</td><td>~33 m³</td><td>Container khô 20 feet, dài trong ~5,9 m. Hợp hàng nặng: gạch, đá, gạo bao</td></tr>
<tr><td><b>40' DC/GP</b></td><td>~67 m³</td><td>Dài trong ~12 m, chiều cao như 20'</td></tr>
<tr><td><b>40' HC</b> (High Cube)</td><td>~76 m³</td><td>Cao hơn 40' thường khoảng 30 cm. Hợp hàng nhẹ, cồng kềnh: nội thất, may mặc</td></tr>
<tr><td><b>Reefer (RF)</b></td><td>20' hoặc 40'</td><td>Container lạnh có máy, cắm điện duy trì nhiệt độ: thủy sản, trái cây, thịt</td></tr>
<tr><td><b>Open Top (OT)</b></td><td>20' hoặc 40'</td><td>Không có nóc cứng, phủ bạt; xếp hàng từ trên xuống bằng cẩu: máy móc cao</td></tr>
<tr><td><b>Flat Rack (FR)</b></td><td>20' hoặc 40'</td><td>Chỉ có sàn và hai vách đầu: hàng quá khổ, quá tải</td></tr>
<tr><td><b>ISO Tank</b></td><td>20'</td><td>Bồn chứa trong khung container: hoá chất lỏng, dầu ăn</td></tr>
</tbody></table></div>
<h3>TEU và FEU</h3>
<p><b>TEU</b> (Twenty-foot Equivalent Unit) là đơn vị quy đổi tương đương một container 20 feet. Một container 40' = 2 TEU = 1 FEU. Sức chở của tàu và sản lượng cảng đều được tính bằng TEU.</p>
<div class="ex"><b>Tính thử:</b> Lô hàng gồm 3 container 40' và 2 container 20' → 3 × 2 + 2 × 1 = <b>8 TEU</b>.</div>
<h3>Nặng thì chọn 20', nhẹ thì chọn 40'HC</h3>
<p>Container bị giới hạn bởi <b>cả thể tích và trọng tải</b>. Trên cửa container luôn in ba con số: <b>MAX GROSS</b> (tổng trọng lượng tối đa), <b>TARE</b> (trọng lượng vỏ), <b>PAYLOAD/NET</b> (hàng tối đa được đóng). Hàng nặng như gạch men thường “đầy tải” trước khi “đầy thể tích”, nên dùng 20' là đủ. Ngoài giới hạn của container, xe chở trên đường bộ còn phải tuân theo tải trọng cho phép của đường, cầu.</p>
<h3>Đọc số hiệu container (ISO 6346)</h3>
<p>Mỗi container có một số hiệu duy nhất gồm 11 ký tự, ví dụ <span class="code">MSKU 123456 7</span>:</p>
<ul><li><b>3 chữ đầu</b> (MSK): mã chủ sở hữu, đăng ký với tổ chức BIC.</li><li><b>Chữ thứ 4</b> (U): loại thiết bị – U là container chở hàng, J là thiết bị gắn kèm, Z là rơ-moóc/khung.</li><li><b>6 số</b> (123456): số sê-ri.</li><li><b>1 số cuối</b> (7): số kiểm tra, tính từ 10 ký tự trước theo công thức để phát hiện ghi sai.</li></ul>
<p class="note">Mỗi môn trong khoá học này được “đánh số” như một container thật, với số kiểm tra được tính đúng theo ISO 6346. Hãy nhìn lại các thẻ môn học trên trang lộ trình.</p>`,
  terms:[["TEU","Đơn vị tương đương container 20 feet"],["FEU","Đơn vị tương đương container 40 feet = 2 TEU"],["DC / GP","Container khô thông thường"],["HC","High Cube – container cao"],["Reefer","Container lạnh"],["Tare","Trọng lượng vỏ container"],["Payload","Trọng lượng hàng tối đa được đóng"]],
  practice:"Lần tới khi đi đường gần cảng hoặc khu công nghiệp, hãy chụp ảnh cửa một container. Đọc mã chủ sở hữu, số sê-ri, số kiểm tra, MAX GROSS và TARE. Nếu không có dịp, tìm ảnh “container door markings” trên mạng và đọc thử.",
  quiz:[
   {q:"2 container 40' HC và 3 container 20' DC tương đương bao nhiêu TEU?",o:["5 TEU","7 TEU","10 TEU"],a:1,e:"2 × 2 + 3 × 1 = 7 TEU."},
   {q:"Hàng nội thất nhẹ, cồng kềnh nên ưu tiên loại container nào?",o:["20' DC","40' HC","Flat Rack"],a:1,e:"40' HC có thể tích lớn nhất trong các loại thông dụng."},
   {q:"Trong số hiệu container, chữ cái thứ 4 là “U” cho biết:",o:["Container của Mỹ","Container chở hàng (freight container)","Container lạnh"],a:1,e:"Theo ISO 6346, U là ký hiệu loại thiết bị: container chở hàng."}
  ]
 },
 {
  id:"2.4", title:"Hàng không và cách tính cước", min:25,
  goals:["Tính trọng lượng tính cước (chargeable weight) hàng không","Tính cước hàng lẻ đường biển theo W/M","Phân biệt MAWB và HAWB"],
  body:`<h3>Vì sao không tính theo trọng lượng thật?</h3>
<p>Máy bay giới hạn cả sức nặng lẫn không gian. Một kiện gối bông nhẹ nhưng chiếm rất nhiều chỗ. Vì vậy hãng bay so sánh <b>trọng lượng thực tế</b> với <b>trọng lượng thể tích</b> và tính cước theo số <b>lớn hơn</b>. Số đó gọi là <b>trọng lượng tính cước (chargeable weight)</b>.</p>
<div class="formula">Trọng lượng thể tích (kg) = Dài × Rộng × Cao (cm) ÷ 6.000</div>
<p>Với dịch vụ chuyển phát nhanh (DHL, FedEx, UPS…), hệ số chia thường là 5.000, nên trọng lượng thể tích cao hơn.</p>
<div class="ex"><b>Tính thử:</b> 1 kiện 100 × 80 × 60 cm, cân nặng 50 kg.<br>Thể tích quy đổi = 480.000 ÷ 6.000 = 80 kg.<br>So sánh 80 kg với 50 kg → tính cước theo <b>80 kg</b>.<br>Nếu có 3 kiện như vậy: 240 kg thể tích so với 150 kg thực → tính 240 kg.</div>
<h3>Cước hàng lẻ đường biển: W/M</h3>
<p>Hàng LCL tính theo <b>W/M (Weight or Measurement)</b>: quy ước <b>1 m³ tương đương 1.000 kg</b>. So sánh số m³ với số tấn, lấy số lớn hơn làm đơn vị tính cước (gọi là RT – revenue ton).</p>
<div class="ex"><b>Tính thử:</b> Lô hàng 2,5 m³, nặng 1.800 kg (= 1,8 tấn). So sánh 2,5 với 1,8 → tính 2,5 RT. Nếu cước là 20 USD/RT thì tiền cước = 50 USD (chưa gồm phụ phí).</div>
<h3>Cách tính m³ (CBM)</h3>
<div class="formula">CBM = Dài × Rộng × Cao (m) × số kiện</div>
<p>Ví dụ 10 thùng, mỗi thùng 0,5 × 0,4 × 0,4 m → 0,08 × 10 = 0,8 m³.</p>
<h3>Vận đơn hàng không</h3>
<p>Chứng từ chính của hàng không là <b>AWB (Air Waybill)</b>. <b>MAWB</b> do hãng hàng không phát hành; <b>HAWB</b> do forwarder phát hành cho từng chủ hàng khi forwarder gom nhiều lô vào một lô lớn. Khác với vận đơn đường biển, AWB <b>không phải chứng từ sở hữu hàng</b>, không chuyển nhượng được.</p>
<h3>Lưu ý hàng nguy hiểm</h3>
<p>Pin lithium, nước hoa, sơn, bình xịt… là <b>hàng nguy hiểm (DG – Dangerous Goods)</b> khi đi hàng không, phải khai báo, đóng gói và dán nhãn theo quy định IATA. Khai sai có thể bị phạt nặng hoặc gây cháy nổ.</p>`,
  terms:[["Chargeable weight","Trọng lượng tính cước"],["Volumetric weight","Trọng lượng thể tích"],["CBM","Cubic meter – mét khối"],["W/M","Weight or Measurement – tính theo trọng lượng hoặc thể tích, lấy số lớn hơn"],["AWB","Air Waybill – vận đơn hàng không"],["DG","Dangerous Goods – hàng nguy hiểm"]],
  practice:"Lô hàng gồm 5 thùng, mỗi thùng 60 × 50 × 40 cm, nặng 12 kg. Hãy tính: (a) tổng CBM; (b) trọng lượng tính cước hàng không. Đáp án: (a) 0,6 m³; (b) thể tích quy đổi 100 kg, thực tế 60 kg → tính 100 kg.",
  quiz:[
   {q:"Một kiện 120 × 100 × 50 cm, nặng 70 kg đi hàng không (hệ số 6.000). Trọng lượng tính cước là:",o:["70 kg","100 kg","600 kg"],a:1,e:"600.000 ÷ 6.000 = 100 kg > 70 kg → tính 100 kg."},
   {q:"Lô hàng LCL 3 m³, nặng 4.200 kg. Số RT tính cước là:",o:["3 RT","4,2 RT","7,2 RT"],a:1,e:"4.200 kg = 4,2 tấn > 3 m³ → tính 4,2 RT."},
   {q:"Điều nào đúng về vận đơn hàng không (AWB)?",o:["Là chứng từ sở hữu, chuyển nhượng được","Không phải chứng từ sở hữu hàng, không chuyển nhượng được","Chỉ hãng tàu biển mới phát hành"],a:1,e:"AWB không phải chứng từ sở hữu, khác với B/L đường biển."}
  ]
 }
 ],
 test:[
  {q:"Lô hàng 25 tấn gạo đi Malaysia, không gấp. Phương thức hợp lý nhất là:",o:["Hàng không","Đường biển","Chuyển phát nhanh"],a:1,e:"Hàng nặng, giá trị thấp so với trọng lượng, không gấp → đường biển."},
  {q:"Tàu chạy theo tuyến và lịch cố định, công bố trước, gọi là:",o:["Tàu chuyến (tramp)","Tàu chợ (liner)","Tàu kéo"],a:1,e:"Tàu container hầu hết là tàu chợ."},
  {q:"Hàng LCL được gom và đóng vào container tại:",o:["Kho CFS","Depot container rỗng","Kho ngoại quan bắt buộc"],a:0,e:"CFS (Container Freight Station) là nơi gom và tách hàng lẻ."},
  {q:"Lô gạch men 26 tấn, thể tích 18 m³. Loại container phù hợp nhất:",o:["40' HC","20' DC","Open Top"],a:1,e:"Hàng nặng nhưng ít thể tích; 20' DC đủ chỗ và chịu được tải trọng (cần kiểm tra payload của container cụ thể)."},
  {q:"Số hiệu container gồm bao nhiêu ký tự?",o:["8","11","15"],a:1,e:"4 chữ cái + 6 số sê-ri + 1 số kiểm tra = 11 ký tự."},
  {q:"Một kiện hàng không 80 × 60 × 50 cm, nặng 30 kg (hệ số 6.000). Trọng lượng tính cước là:",o:["30 kg","40 kg","24 kg"],a:1,e:"240.000 ÷ 6.000 = 40 kg > 30 kg → tính 40 kg."},
  {q:"Hàng thủy sản đông lạnh xuất khẩu cần loại container:",o:["Flat Rack","Reefer","ISO Tank"],a:1,e:"Reefer có máy lạnh duy trì nhiệt độ."},
  {q:"Chuyển tải (transshipment) nghĩa là:",o:["Hàng được dỡ khỏi tàu này và xếp lên tàu khác ở cảng trung gian","Hàng chuyển từ kho này sang kho khác trong nội địa","Đổi người nhận hàng"],a:0,e:"Ví dụ hàng từ Việt Nam đi châu Âu chuyển tải ở Singapore."}
 ]
},
{
 id:"m3", no:"03", title:"Kho bãi & Tồn kho", tone:"--c3",
 desc:"Các loại kho, quy trình vận hành kho và các công cụ quản lý tồn kho cơ bản.",
 lessons:[
 {
  id:"3.1", title:"Các loại kho và bãi", min:15,
  goals:["Phân biệt kho thường, kho lạnh, kho ngoại quan, CFS, ICD, depot","Hiểu trung tâm phân phối và cross-docking"],
  body:`<p>Kho không chỉ là chỗ “để hàng”. Kho giúp cân bằng giữa lúc sản xuất và lúc bán, gom hàng nhỏ thành lô lớn để vận chuyển rẻ hơn, chia lô lớn thành đơn nhỏ để giao, và giữ hàng gần khách để giao nhanh.</p>
<h3>Theo điều kiện bảo quản</h3>
<ul><li><b>Kho thường (kho khô)</b>: hàng tiêu dùng, may mặc, điện tử.</li><li><b>Kho mát</b>: khoảng 0–8°C cho rau quả, sữa, một số dược phẩm.</li><li><b>Kho đông lạnh</b>: khoảng −18°C trở xuống cho thủy sản, thịt đông lạnh, kem.</li><li><b>Kho hàng nguy hiểm</b>: hoá chất, gas – có tiêu chuẩn phòng cháy riêng.</li></ul>
<h3>Kho và bãi gắn với xuất nhập khẩu</h3>
<div class="tbl"><table><thead><tr><th>Loại</th><th>Chức năng</th></tr></thead><tbody>
<tr><td><b>Kho ngoại quan</b> (bonded warehouse)</td><td>Khu vực chịu giám sát hải quan, lưu giữ hàng từ nước ngoài chưa nộp thuế nhập khẩu, hoặc hàng đã làm thủ tục xuất khẩu chờ đưa đi. Dùng để chờ bán, chờ tái xuất, trung chuyển.</td></tr>
<tr><td><b>Kho CFS</b> (Container Freight Station)</td><td>Gom hàng lẻ để đóng vào container (xuất) và rút hàng lẻ ra khỏi container (nhập).</td></tr>
<tr><td><b>ICD</b> (cảng cạn)</td><td>Cảng nằm sâu trong nội địa, có chức năng như một cảng: làm thủ tục hải quan, lưu container, kết nối với cảng biển bằng đường bộ, sắt hoặc sà lan. Ví dụ: ICD Sóng Thần, ICD Mỹ Đình.</td></tr>
<tr><td><b>Depot</b></td><td>Bãi chứa container rỗng; nơi chủ hàng lấy vỏ để đóng hàng và trả vỏ sau khi rút hàng.</td></tr>
<tr><td><b>Bãi container cảng (CY)</b></td><td>Nơi chứa container có hàng chờ xếp lên tàu hoặc chờ chủ hàng lấy về.</td></tr>
</tbody></table></div>
<h3>Trung tâm phân phối và cross-docking</h3>
<p><b>Trung tâm phân phối (DC – Distribution Center)</b> tập trung vào hàng ra vào nhanh, không lưu lâu. Một chuỗi siêu thị có thể có một DC ở mỗi miền cung cấp hàng cho hàng trăm cửa hàng.</p>
<p><b>Cross-docking</b>: hàng vừa dỡ ở cửa nhập được phân loại và chuyển thẳng sang cửa xuất, gần như không cất lên kệ, thường trong vòng dưới 24 giờ. Giảm chi phí lưu kho nhưng đòi hỏi lịch xe và thông tin cực kỳ chính xác.</p>
<p><b>Fulfillment center</b>: kho chuyên phục vụ thương mại điện tử – nhận hàng của nhiều người bán, lưu trữ, lấy hàng và đóng gói từng đơn lẻ.</p>`,
  terms:[["Bonded warehouse","Kho ngoại quan"],["CFS","Kho gom/tách hàng lẻ"],["ICD","Inland Container Depot – cảng cạn"],["Depot","Bãi container rỗng"],["CY","Container Yard – bãi container"],["DC","Distribution Center – trung tâm phân phối"],["Cross-docking","Chuyển hàng thẳng từ cửa nhập sang cửa xuất"]],
  practice:"Tìm trên bản đồ (Google Maps) vị trí 2 ICD và 1 kho ngoại quan gần nơi bạn sống. Ghi lại chúng gần tuyến đường hay cảng nào, và đoán xem vì sao họ đặt kho ở đó.",
  quiz:[
   {q:"Hàng nhập khẩu được lưu giữ chờ quyết định bán hay tái xuất, chưa nộp thuế nhập khẩu, thường được đưa vào:",o:["Kho ngoại quan","Depot container rỗng","Kho mát"],a:0,e:"Kho ngoại quan chịu giám sát hải quan, hàng chưa phải nộp thuế nhập khẩu."},
   {q:"ICD (cảng cạn) là:",o:["Cảng nằm trong nội địa, có thủ tục hải quan và kết nối với cảng biển","Bến du thuyền","Kho lạnh trong cảng biển"],a:0,e:"ICD đưa chức năng cảng vào sâu trong nội địa, gần nhà máy."},
   {q:"Cross-docking có đặc điểm:",o:["Lưu hàng nhiều tháng","Hàng chuyển gần như thẳng từ cửa nhập sang cửa xuất, rất ít lưu kho","Chỉ dùng cho hàng lạnh"],a:1,e:"Mục tiêu là giảm thời gian và chi phí lưu kho."}
  ]
 },
 {
  id:"3.2", title:"Quy trình vận hành kho và WMS", min:20,
  goals:["Mô tả 6 bước vận hành kho","Hiểu mã vị trí và SKU","Biết WMS dùng để làm gì"],
  body:`<h3>6 bước vận hành kho</h3>
<ol><li><b>Nhận hàng (Receiving)</b>: đối chiếu với đơn mua hàng (PO) hoặc thông báo giao hàng trước (ASN); kiểm đếm số lượng, kiểm tra tình trạng, ghi nhận hư hỏng trên biên bản.</li><li><b>Cất hàng (Putaway)</b>: đưa hàng lên đúng vị trí đã định.</li><li><b>Lưu trữ (Storage)</b>: bảo quản, kiểm soát nhiệt độ, độ ẩm, an ninh, kiểm kê định kỳ.</li><li><b>Lấy hàng (Picking)</b>: lấy đúng mã, đúng số lượng theo đơn – thường là công đoạn tốn nhiều nhân công nhất.</li><li><b>Đóng gói (Packing)</b>: kiểm tra lại, đóng gói, dán nhãn vận chuyển.</li><li><b>Xuất hàng (Shipping)</b>: xếp lên xe, ký giao nhận, cập nhật hệ thống.</li></ol>
<h3>SKU và mã vị trí</h3>
<p><b>SKU</b> (Stock Keeping Unit) là mã nhận diện từng mặt hàng quản lý riêng. Cùng một mẫu áo nhưng size M màu đen và size L màu trắng là hai SKU khác nhau.</p>
<p><b>Mã vị trí</b> giúp tìm hàng nhanh. Ví dụ <span class="code">A-03-02-B</span> = khu A, dãy kệ 03, tầng 02, ô B. Không có mã vị trí, nhân viên mới phải đi tìm hàng theo trí nhớ của người cũ.</p>
<h3>Các cách lấy hàng</h3>
<ul><li><b>Theo từng đơn</b>: lấy xong đơn này mới sang đơn khác. Đơn giản, phù hợp kho nhỏ.</li><li><b>Theo lô (batch)</b>: gom nhiều đơn có chung mặt hàng để lấy một lượt, sau đó chia lại.</li><li><b>Theo khu (zone)</b>: mỗi người phụ trách một khu, đơn được chuyển qua các khu.</li><li><b>Theo đợt (wave)</b>: phát lệnh lấy hàng theo khung giờ, khớp với giờ xe chạy.</li></ul>
<h3>WMS – phần mềm quản lý kho</h3>
<p>WMS (Warehouse Management System) ghi nhận mọi lần hàng vào, ra, di chuyển; gợi ý vị trí cất; tạo danh sách lấy hàng theo lộ trình ngắn nhất; cho biết tồn kho theo thời gian thực. Nhân viên dùng máy quét mã vạch (barcode) để xác nhận từng bước, giảm sai sót do ghi chép tay.</p>
<div class="ex"><b>Sai lầm phổ biến ở kho mới:</b> Ký nhận hàng mà không kiểm, sau đó phát hiện thiếu thì không còn bằng chứng khiếu nại nhà cung cấp hoặc nhà xe. Quy tắc vàng: <b>kiểm trước, ký sau</b>, ghi rõ tình trạng bất thường lên biên bản giao nhận.</div>`,
  terms:[["Receiving","Nhận hàng"],["Putaway","Cất hàng lên vị trí"],["Picking","Lấy hàng theo đơn"],["SKU","Mã quản lý từng mặt hàng"],["PO","Purchase Order – đơn mua hàng"],["ASN","Advance Shipping Notice – thông báo giao hàng trước"],["WMS","Phần mềm quản lý kho"]],
  practice:"Một cửa hàng bán áo thun có 3 mẫu, mỗi mẫu 4 size và 3 màu. Có bao nhiêu SKU? Sau đó tự thiết kế một quy tắc mã vị trí cho kho 2 khu, mỗi khu 5 dãy kệ, mỗi kệ 4 tầng. Đáp án SKU: 3 × 4 × 3 = 36.",
  quiz:[
   {q:"Bước nào trong kho thường tốn nhiều nhân công nhất?",o:["Nhận hàng","Lấy hàng (picking)","Kiểm kê cuối năm"],a:1,e:"Picking đòi hỏi đi lại nhiều và xử lý từng đơn."},
   {q:"Áo cùng mẫu nhưng khác size, khác màu được quản lý như thế nào?",o:["Chung một SKU","Mỗi tổ hợp size – màu là một SKU riêng","Không cần mã"],a:1,e:"SKU phân biệt từng biến thể cần theo dõi tồn kho riêng."},
   {q:"Nguyên tắc khi nhận hàng từ nhà xe là:",o:["Ký trước cho nhanh, kiểm sau","Kiểm trước, ký sau, ghi rõ bất thường vào biên bản","Chỉ cần đếm số kiện"],a:1,e:"Biên bản có ghi nhận bất thường là căn cứ để khiếu nại."}
  ]
 },
 {
  id:"3.3", title:"Quản lý tồn kho: FIFO, tồn kho an toàn, điểm đặt hàng", min:25,
  goals:["Phân biệt FIFO, FEFO, LIFO","Hiểu tồn kho an toàn","Tính điểm đặt hàng lại (ROP)"],
  body:`<h3>Vì sao phải giữ tồn kho?</h3>
<p>Tồn kho giúp đáp ứng khách ngay khi họ cần, chống lại biến động nhu cầu và chậm trễ của nhà cung cấp, và tận dụng giá mua theo lô lớn. Nhưng tồn kho cũng là <b>tiền nằm chết</b>: tốn vốn, tốn chỗ, có thể hư hỏng, hết hạn, lỗi mốt. Quản lý tồn kho là tìm điểm cân bằng giữa <b>thiếu hàng</b> (mất doanh thu) và <b>thừa hàng</b> (đọng vốn).</p>
<h3>Nguyên tắc xuất hàng</h3>
<div class="tbl"><table><thead><tr><th>Nguyên tắc</th><th>Nghĩa</th><th>Dùng cho</th></tr></thead><tbody>
<tr><td><b>FIFO</b></td><td>Nhập trước – xuất trước</td><td>Hầu hết hàng hoá</td></tr>
<tr><td><b>FEFO</b></td><td>Hết hạn trước – xuất trước</td><td>Thực phẩm, dược phẩm, mỹ phẩm</td></tr>
<tr><td><b>LIFO</b></td><td>Nhập sau – xuất trước</td><td>Hàng không có hạn dùng, xếp chồng: cát, than, sắt thép</td></tr>
</tbody></table></div>
<p>Lưu ý: lô nhập sau đôi khi lại có hạn dùng sớm hơn. Với hàng có hạn, FEFO an toàn hơn FIFO.</p>
<h3>Tồn kho an toàn (Safety Stock)</h3>
<p>Là lượng hàng “dự phòng” giữ thêm để không bị hết hàng khi bán nhiều hơn dự kiến hoặc hàng về chậm. Nhu cầu càng biến động, nhà cung cấp càng thất thường thì tồn kho an toàn càng phải lớn.</p>
<h3>Điểm đặt hàng lại (ROP – Reorder Point)</h3>
<p>Là mức tồn kho mà khi chạm tới, bạn phải đặt hàng ngay để hàng mới về kịp trước khi hết.</p>
<div class="formula">ROP = Nhu cầu trung bình mỗi ngày × Lead time (ngày) + Tồn kho an toàn</div>
<div class="ex"><b>Tính thử:</b> Cửa hàng bán trung bình 40 thùng nước/ngày. Nhà cung cấp giao sau 5 ngày. Tồn kho an toàn 60 thùng.<br>ROP = 40 × 5 + 60 = <b>260 thùng</b>.<br>Nghĩa là: khi kho còn 260 thùng, đặt hàng ngay. Trong 5 ngày chờ, bạn bán khoảng 200 thùng, khi hàng mới về vẫn còn khoảng 60 thùng dự phòng.</div>
<h3>Chi phí tồn kho gồm những gì?</h3>
<ul><li>Chi phí vốn (lãi vay, cơ hội đầu tư khác)</li><li>Chi phí kho bãi, điện, nhân công</li><li>Bảo hiểm</li><li>Hư hỏng, hết hạn, mất mát</li><li>Lỗi thời (hàng hết mốt, mẫu cũ)</li></ul>`,
  terms:[["FIFO","First In First Out – nhập trước xuất trước"],["FEFO","First Expired First Out – hết hạn trước xuất trước"],["Safety stock","Tồn kho an toàn"],["ROP","Reorder Point – điểm đặt hàng lại"],["Stockout","Hết hàng"],["Holding cost","Chi phí lưu giữ tồn kho"]],
  practice:"Một quầy thuốc bán trung bình 15 hộp sữa/ngày, nhà phân phối giao sau 4 ngày, muốn giữ 20 hộp dự phòng. Tính ROP. Sau đó giải thích vì sao quầy nên dùng FEFO thay vì FIFO. Đáp án ROP: 15 × 4 + 20 = 80 hộp.",
  quiz:[
   {q:"Kho dược phẩm nên áp dụng nguyên tắc xuất hàng nào?",o:["LIFO","FEFO","Ngẫu nhiên"],a:1,e:"Hàng có hạn dùng nên xuất lô hết hạn trước."},
   {q:"Nhu cầu 30 cái/ngày, lead time 6 ngày, tồn kho an toàn 50 cái. ROP là:",o:["180 cái","230 cái","86 cái"],a:1,e:"30 × 6 + 50 = 230 cái."},
   {q:"Khi nhu cầu biến động mạnh hơn, tồn kho an toàn nên:",o:["Tăng lên","Giảm xuống","Giữ bằng 0"],a:0,e:"Biến động lớn hơn cần dự phòng nhiều hơn để tránh hết hàng."}
  ]
 },
 {
  id:"3.4", title:"EOQ và phân tích ABC", min:25,
  goals:["Tính lượng đặt hàng kinh tế (EOQ)","Phân loại hàng hoá theo ABC","Áp dụng ABC vào kiểm kê và bố trí kho"],
  body:`<h3>Lượng đặt hàng kinh tế (EOQ)</h3>
<p>Mỗi lần đặt hàng tốn chi phí cố định (làm đơn, vận chuyển, nhận hàng). Đặt ít lần, mỗi lần nhiều thì tiết kiệm phí đặt hàng nhưng tồn kho cao. Đặt nhiều lần, mỗi lần ít thì ngược lại. EOQ là lượng đặt mỗi lần giúp <b>tổng hai chi phí này nhỏ nhất</b>.</p>
<div class="formula">EOQ = √( 2 × D × S ÷ H )</div>
<ul><li><b>D</b>: nhu cầu cả năm (đơn vị)</li><li><b>S</b>: chi phí cho mỗi lần đặt hàng</li><li><b>H</b>: chi phí lưu kho một đơn vị trong một năm</li></ul>
<div class="ex"><b>Tính thử:</b> D = 12.000 cái/năm; S = 500.000 đ/lần đặt; H = 12.000 đ/cái/năm.<br>EOQ = √(2 × 12.000 × 500.000 ÷ 12.000) = √1.000.000 = <b>1.000 cái/lần</b>.<br>Số lần đặt mỗi năm = 12.000 ÷ 1.000 = 12 lần, tức khoảng mỗi tháng một lần.</div>
<p>EOQ dựa trên giả định nhu cầu đều và giá không đổi. Thực tế có chiết khấu số lượng, giới hạn kho, quy cách đóng gói, nên EOQ là điểm khởi đầu để cân nhắc chứ không phải con số bắt buộc.</p>
<h3>Phân tích ABC</h3>
<p>Dựa trên nguyên tắc Pareto: một số ít mặt hàng chiếm phần lớn giá trị. Sắp xếp các SKU theo <b>giá trị sử dụng hằng năm</b> (số lượng × đơn giá), rồi chia nhóm:</p>
<div class="tbl"><table><thead><tr><th>Nhóm</th><th>Tỷ lệ số mặt hàng (xấp xỉ)</th><th>Tỷ lệ giá trị (xấp xỉ)</th><th>Cách quản lý</th></tr></thead><tbody>
<tr><td><b>A</b></td><td>10–20%</td><td>70–80%</td><td>Kiểm soát chặt, kiểm kê thường xuyên, dự báo kỹ</td></tr>
<tr><td><b>B</b></td><td>~30%</td><td>~15–25%</td><td>Kiểm soát vừa phải</td></tr>
<tr><td><b>C</b></td><td>50–60%</td><td>~5–10%</td><td>Quản lý đơn giản, đặt lô lớn, kiểm kê thưa</td></tr>
</tbody></table></div>
<h3>Ứng dụng</h3>
<ul><li><b>Kiểm kê theo chu kỳ (cycle count)</b>: đếm nhóm A hằng tháng, nhóm B hằng quý, nhóm C nửa năm, thay vì đóng kho kiểm kê toàn bộ một lần.</li><li><b>Bố trí kho</b>: hàng xuất nhiều (thường gọi phân loại ABC theo tần suất lấy hàng) đặt gần cửa xuất, ở tầng kệ ngang tầm tay để giảm quãng đường đi lấy.</li><li><b>Ưu tiên nguồn lực</b>: tập trung đàm phán, theo dõi nhà cung cấp của hàng nhóm A.</li></ul>`,
  terms:[["EOQ","Economic Order Quantity – lượng đặt hàng kinh tế"],["ABC analysis","Phân loại hàng theo giá trị"],["Pareto","Nguyên tắc 80/20"],["Cycle count","Kiểm kê theo chu kỳ"]],
  practice:"Tính EOQ với D = 8.000 sản phẩm/năm, S = 400.000 đ/lần, H = 16.000 đ/sản phẩm/năm. Đáp án: √(2 × 8.000 × 400.000 ÷ 16.000) = √400.000 ≈ 632 sản phẩm/lần.",
  quiz:[
   {q:"D = 5.000/năm, S = 200.000 đ, H = 8.000 đ. EOQ bằng:",o:["250","500","1.000"],a:1,e:"√(2 × 5.000 × 200.000 ÷ 8.000) = √250.000 = 500."},
   {q:"Nhóm A trong phân tích ABC có đặc điểm:",o:["Nhiều mặt hàng nhất, giá trị ít nhất","Ít mặt hàng nhưng chiếm phần lớn giá trị","Chỉ gồm hàng hết hạn"],a:1,e:"Nhóm A khoảng 10–20% số mặt hàng nhưng 70–80% giá trị."},
   {q:"Khi tăng chi phí lưu kho H (các yếu tố khác giữ nguyên), EOQ sẽ:",o:["Tăng","Giảm","Không đổi"],a:1,e:"H nằm ở mẫu số: lưu kho đắt hơn thì nên đặt mỗi lần ít hơn."}
  ]
 }
 ],
 test:[
  {q:"Kho nào dùng để rút hàng lẻ từ container nhập khẩu và chia cho nhiều người nhận?",o:["CFS","Depot","Kho lạnh"],a:0,e:"CFS gom (xuất) và tách (nhập) hàng lẻ."},
  {q:"Một chuỗi siêu thị nhận hàng từ nhà cung cấp và chuyển thẳng lên xe đi các cửa hàng trong vài giờ. Đây là:",o:["Kho ngoại quan","Cross-docking","Kho lưu trữ dài hạn"],a:1,e:"Hàng gần như không lưu kho là đặc trưng của cross-docking."},
  {q:"Mã vị trí B-05-03-A thường được hiểu là:",o:["Khu B, dãy 05, tầng 03, ô A","Ngày 05/03 nhập lô A","Xe số B05"],a:0,e:"Mã vị trí mô tả khu – dãy – tầng – ô."},
  {q:"Nhu cầu 50 sản phẩm/ngày, lead time 4 ngày, tồn kho an toàn 100. ROP là:",o:["200","300","154"],a:1,e:"50 × 4 + 100 = 300."},
  {q:"Kho sữa tươi có lô nhập sau nhưng hạn dùng sớm hơn lô nhập trước. Nên xuất lô nào trước?",o:["Lô nhập trước (FIFO)","Lô có hạn dùng sớm hơn (FEFO)","Lô nào cũng được"],a:1,e:"FEFO tránh để hàng hết hạn trong kho."},
  {q:"D = 20.000/năm, S = 1.000.000 đ/lần, H = 10.000 đ/năm. EOQ là:",o:["2.000","4.000","20.000"],a:0,e:"√(2 × 20.000 × 1.000.000 ÷ 10.000) = √4.000.000 = 2.000."},
  {q:"Theo phân tích ABC, nhóm nên được kiểm kê thường xuyên nhất là:",o:["Nhóm A","Nhóm B","Nhóm C"],a:0,e:"Nhóm A giá trị lớn, sai lệch gây thiệt hại nhiều."},
  {q:"Chi phí nào KHÔNG phải chi phí lưu giữ tồn kho?",o:["Lãi vay cho số vốn nằm trong hàng tồn","Hàng hư hỏng, hết hạn","Chi phí quảng cáo sản phẩm mới"],a:2,e:"Quảng cáo là chi phí marketing, không phải chi phí tồn kho."}
 ]
}
];
const PART2 = [
{
 id:"m4", no:"04", title:"Thương mại quốc tế & Incoterms", tone:"--c4",
 desc:"Quy trình xuất nhập khẩu, 11 điều kiện Incoterms 2020 và các phương thức thanh toán quốc tế.",
 lessons:[
 {
  id:"4.1", title:"Quy trình xuất nhập khẩu và hợp đồng ngoại thương", min:20,
  goals:["Nắm 8 bước của một thương vụ xuất khẩu","Biết các điều khoản chính của hợp đồng ngoại thương"],
  body:`<h3>Một thương vụ xuất khẩu diễn ra thế nào?</h3>
<ol><li><b>Chào hàng và đàm phán</b>: người bán gửi báo giá, có thể kèm <i>Proforma Invoice</i> (hoá đơn chiếu lệ); người mua gửi đơn đặt hàng (PO).</li><li><b>Ký hợp đồng ngoại thương</b> (Sales Contract).</li><li><b>Chuẩn bị hàng và thanh toán đặt cọc</b> (nếu có), hoặc người mua mở L/C.</li><li><b>Thuê phương tiện vận tải</b>: bên nào thuê do điều kiện Incoterms quyết định.</li><li><b>Kiểm tra, đóng gói, ký mã hiệu</b>; xin các giấy phép, kiểm dịch, chứng nhận cần thiết.</li><li><b>Làm thủ tục hải quan xuất khẩu</b>.</li><li><b>Giao hàng cho người chuyên chở</b>, nhận vận đơn.</li><li><b>Lập bộ chứng từ và thu tiền</b>; người mua dùng chứng từ để nhận hàng và làm thủ tục nhập khẩu.</li></ol>
<p>Phía nhập khẩu đi theo chiều ngược lại: nhận thông báo hàng đến, lấy lệnh giao hàng, làm thủ tục hải quan nhập khẩu, nộp thuế, nhận hàng về kho.</p>
<h3>Điều khoản chính của hợp đồng ngoại thương</h3>
<div class="tbl"><table><thead><tr><th>Điều khoản</th><th>Ghi những gì</th></tr></thead><tbody>
<tr><td>Tên hàng (Commodity)</td><td>Tên thương mại, tên khoa học, quy cách – càng rõ càng tốt</td></tr>
<tr><td>Số lượng (Quantity)</td><td>Đơn vị tính, dung sai cho phép (ví dụ ±5%)</td></tr>
<tr><td>Chất lượng (Quality)</td><td>Tiêu chuẩn, mẫu, độ ẩm, tỷ lệ tạp chất…</td></tr>
<tr><td>Giá (Price)</td><td>Đơn giá, đồng tiền, <b>điều kiện Incoterms và địa điểm</b>, tổng giá trị</td></tr>
<tr><td>Thanh toán (Payment)</td><td>Phương thức (T/T, L/C…), thời hạn, chứng từ yêu cầu</td></tr>
<tr><td>Giao hàng (Shipment)</td><td>Thời gian, cảng đi, cảng đến, có cho giao từng phần, chuyển tải không</td></tr>
<tr><td>Đóng gói và ký mã hiệu</td><td>Quy cách bao bì, shipping mark</td></tr>
<tr><td>Bảo hiểm, khiếu nại, bất khả kháng, trọng tài</td><td>Ai mua bảo hiểm; thời hạn khiếu nại; xử lý tranh chấp ở đâu, theo luật nào</td></tr>
</tbody></table></div>
<div class="ex"><b>Bài học thực tế:</b> Hợp đồng chỉ ghi “gạo trắng 5% tấm” mà không ghi độ ẩm, khi hàng đến bị người mua chê ẩm cao và đòi giảm giá. Người bán không có căn cứ để phản bác. Người làm logistics thường là người đầu tiên phát hiện điều khoản mập mờ, vì họ phải biến hợp đồng thành chứng từ.</div>`,
  terms:[["Proforma Invoice","Hoá đơn chiếu lệ – báo giá chính thức trước khi giao hàng"],["Sales Contract","Hợp đồng mua bán"],["Tolerance","Dung sai số lượng"],["Force majeure","Bất khả kháng"],["Arbitration","Trọng tài"]],
  practice:"Viết nháp 8 điều khoản cho một hợp đồng giả định: bạn bán 1 container 20' hạt điều cho khách ở Dubai. Không cần chính xác pháp lý, chỉ cần đủ ý từng điều khoản.",
  quiz:[
   {q:"Điều kiện Incoterms trong hợp đồng thường được ghi kèm ở điều khoản nào?",o:["Giá","Khiếu nại","Bất khả kháng"],a:0,e:"Giá luôn đi kèm điều kiện cơ sở giao hàng, ví dụ 1.200 USD/MT FOB Ho Chi Minh City."},
   {q:"Proforma Invoice là:",o:["Hoá đơn chiếu lệ, gửi trước khi giao hàng","Hoá đơn VAT nội địa","Biên lai thu cước"],a:0,e:"Proforma Invoice dùng để chào giá, mở L/C, xin giấy phép."},
   {q:"Ai thuê phương tiện vận tải chính trong thương vụ xuất nhập khẩu?",o:["Luôn là người bán","Luôn là người mua","Tuỳ điều kiện Incoterms đã thoả thuận"],a:2,e:"Ví dụ FOB thì người mua thuê tàu, CIF thì người bán thuê tàu."}
  ]
 },
 {
  id:"4.2", title:"Incoterms 2020: bức tranh tổng thể", min:25,
  goals:["Hiểu Incoterms là gì và không quy định những gì","Thuộc 11 điều kiện và 2 nhóm","Biết cách ghi Incoterms đúng trong hợp đồng"],
  body:`<h3>Incoterms là gì?</h3>
<p>Incoterms (International Commercial Terms) là bộ quy tắc của <b>Phòng Thương mại Quốc tế (ICC)</b> giải thích các điều kiện thương mại viết tắt ba chữ cái. Phiên bản hiện hành là <b>Incoterms 2020</b>, có hiệu lực từ 1/1/2020. ICC thường sửa đổi khoảng 10 năm một lần.</p>
<p><b>Incoterms không phải luật.</b> Nó chỉ có hiệu lực khi được dẫn chiếu trong hợp đồng. Cách ghi chuẩn: điều kiện + địa điểm cụ thể + phiên bản, ví dụ <span class="code">FOB Cat Lai Port, Vietnam, Incoterms® 2020</span>. Nếu chỉ ghi “FOB” mà không ghi phiên bản, các bên có thể hiểu khác nhau.</p>
<h3>Incoterms trả lời 4 câu hỏi</h3>
<ol><li>Người bán <b>giao hàng ở đâu</b>?</li><li><b>Rủi ro</b> mất mát, hư hỏng chuyển sang người mua khi nào?</li><li>Ai trả <b>chi phí</b> gì (vận tải, bốc dỡ, bảo hiểm…)?</li><li>Ai làm <b>thủ tục hải quan</b> xuất khẩu, nhập khẩu?</li></ol>
<p><b>Incoterms không quy định</b>: chuyển quyền sở hữu, giá cả, phương thức thanh toán, vi phạm hợp đồng. Những điều đó phải ghi riêng trong hợp đồng.</p>
<h3>11 điều kiện, chia 2 nhóm</h3>
<div class="tbl"><table><thead><tr><th>Mã</th><th>Tên đầy đủ</th><th>Nghĩa ngắn gọn</th></tr></thead><tbody>
<tr class="grp"><td colspan="3">Nhóm 1 – Dùng cho mọi phương thức vận tải</td></tr>
<tr><td><b>EXW</b></td><td>Ex Works</td><td>Giao tại xưởng người bán; người mua lo gần như mọi thứ</td></tr>
<tr><td><b>FCA</b></td><td>Free Carrier</td><td>Giao cho người chuyên chở do người mua chỉ định tại địa điểm thoả thuận</td></tr>
<tr><td><b>CPT</b></td><td>Carriage Paid To</td><td>Người bán trả cước đến nơi đến; rủi ro chuyển khi giao cho người chuyên chở đầu tiên</td></tr>
<tr><td><b>CIP</b></td><td>Carriage and Insurance Paid To</td><td>Như CPT + người bán mua bảo hiểm (mức cao, ICC A)</td></tr>
<tr><td><b>DAP</b></td><td>Delivered at Place</td><td>Giao tại nơi đến, hàng còn trên phương tiện, chưa dỡ</td></tr>
<tr><td><b>DPU</b></td><td>Delivered at Place Unloaded</td><td>Giao tại nơi đến, đã dỡ hàng (thay cho DAT của bản 2010)</td></tr>
<tr><td><b>DDP</b></td><td>Delivered Duty Paid</td><td>Người bán giao tận nơi và chịu cả thuế, thủ tục nhập khẩu</td></tr>
<tr class="grp"><td colspan="3">Nhóm 2 – Chỉ dùng cho đường biển và đường thủy nội địa</td></tr>
<tr><td><b>FAS</b></td><td>Free Alongside Ship</td><td>Giao dọc mạn tàu tại cảng đi</td></tr>
<tr><td><b>FOB</b></td><td>Free On Board</td><td>Giao khi hàng đã xếp lên tàu tại cảng đi</td></tr>
<tr><td><b>CFR</b></td><td>Cost and Freight</td><td>Như FOB + người bán trả cước đến cảng đến</td></tr>
<tr><td><b>CIF</b></td><td>Cost, Insurance and Freight</td><td>Như CFR + người bán mua bảo hiểm (mức tối thiểu, ICC C)</td></tr>
</tbody></table></div>
<h3>Mẹo nhớ theo chữ cái đầu</h3>
<ul><li><b>E</b> (EXW): người bán gần như không làm gì – giao tại nhà mình.</li><li><b>F</b> (FCA, FAS, FOB): người bán giao cho người chuyên chở, <b>người mua trả cước chính</b>.</li><li><b>C</b> (CPT, CIP, CFR, CIF): <b>người bán trả cước chính</b>, nhưng rủi ro vẫn chuyển ở nước xuất khẩu.</li><li><b>D</b> (DAP, DPU, DDP): người bán chịu rủi ro đến tận nước nhập khẩu.</li></ul>
<p>Đi từ E → F → C → D, nghĩa vụ của người bán tăng dần.</p>`,
  terms:[["ICC","International Chamber of Commerce – Phòng Thương mại Quốc tế"],["Incoterms® 2020","Phiên bản quy tắc Incoterms hiện hành"],["Named place","Địa điểm cụ thể đi kèm điều kiện"],["DPU","Điều kiện mới của bản 2020, thay DAT"]],
  practice:"Viết 11 mã Incoterms ra giấy theo thứ tự E–F–C–D, che phần nghĩa và tự đọc to nghĩa từng điều kiện. Làm lại vào ngày mai để nhớ lâu.",
  quiz:[
   {q:"Điều kiện nào CHỈ dùng cho vận tải biển và thủy nội địa?",o:["FCA","FOB","DAP"],a:1,e:"FAS, FOB, CFR, CIF chỉ dùng cho đường biển và thủy nội địa."},
   {q:"Incoterms KHÔNG quy định vấn đề nào?",o:["Điểm chuyển giao rủi ro","Ai trả cước vận tải chính","Thời điểm chuyển quyền sở hữu hàng hoá"],a:2,e:"Chuyển quyền sở hữu do hợp đồng và luật áp dụng quy định."},
   {q:"Ở nhóm C (CFR, CIF, CPT, CIP), ai trả cước vận tải chính?",o:["Người bán","Người mua","Hãng tàu"],a:0,e:"Nhóm C: người bán trả cước chính, dù rủi ro đã chuyển ở nước xuất khẩu."}
  ]
 },
 {
  id:"4.3", title:"Điểm chuyển rủi ro: FOB, CIF, FCA, DDP", min:25,
  goals:["Xác định điểm chuyển rủi ro và chi phí của các điều kiện phổ biến","Hiểu “hai điểm tới hạn” của nhóm C","Biết vì sao hàng container nên dùng FCA thay FOB"],
  body:`<h3>Rủi ro và chi phí không chuyển cùng một chỗ</h3>
<p>Đây là điểm người mới hay nhầm nhất. Với nhóm C, người bán trả cước đến cảng đến, nhưng <b>rủi ro đã chuyển sang người mua ngay khi hàng lên tàu ở cảng đi</b>. Nếu tàu gặp bão giữa biển làm hỏng hàng, người mua chịu thiệt (và đòi bồi thường từ bảo hiểm). Vì vậy nhóm C có <b>hai điểm tới hạn</b>: điểm chuyển rủi ro (nước xuất) và điểm kết thúc chi phí của người bán (nước nhập).</p>
<h3>So sánh các điều kiện hay gặp</h3>
<div class="tbl"><table><thead><tr><th>Điều kiện</th><th>Rủi ro chuyển sang người mua khi</th><th>Người bán trả cước đến</th><th>Bảo hiểm</th><th>Thủ tục NK</th></tr></thead><tbody>
<tr><td><b>EXW</b></td><td>Hàng sẵn sàng tại xưởng người bán (người mua tự bốc)</td><td>Không trả</td><td>Không bắt buộc</td><td>Người mua</td></tr>
<tr><td><b>FCA</b></td><td>Giao cho người chuyên chở của người mua</td><td>Nơi giao</td><td>Không bắt buộc</td><td>Người mua</td></tr>
<tr><td><b>FOB</b></td><td>Hàng đã xếp lên tàu ở cảng đi</td><td>Lên tàu</td><td>Không bắt buộc</td><td>Người mua</td></tr>
<tr><td><b>CFR</b></td><td>Hàng đã xếp lên tàu ở cảng đi</td><td>Cảng đến</td><td>Không bắt buộc</td><td>Người mua</td></tr>
<tr><td><b>CIF</b></td><td>Hàng đã xếp lên tàu ở cảng đi</td><td>Cảng đến</td><td>Người bán mua, tối thiểu ICC (C)</td><td>Người mua</td></tr>
<tr><td><b>CIP</b></td><td>Giao cho người chuyên chở đầu tiên</td><td>Nơi đến</td><td>Người bán mua, tối thiểu ICC (A)</td><td>Người mua</td></tr>
<tr><td><b>DAP</b></td><td>Hàng đến nơi đến, sẵn sàng để dỡ</td><td>Nơi đến</td><td>Không bắt buộc</td><td>Người mua</td></tr>
<tr><td><b>DDP</b></td><td>Hàng đến nơi đến, sẵn sàng để dỡ</td><td>Nơi đến</td><td>Không bắt buộc</td><td><b>Người bán</b></td></tr>
</tbody></table></div>
<h3>Vì sao hàng container nên dùng FCA thay vì FOB?</h3>
<p>Với hàng container, người bán thường giao container cho hãng tàu tại <b>bãi cảng (CY) vài ngày trước khi tàu chạy</b>, không trực tiếp chứng kiến lúc xếp lên tàu. Theo FOB, rủi ro vẫn thuộc người bán trong thời gian container nằm bãi – nơi họ không còn kiểm soát. FCA khớp với thực tế hơn: rủi ro chuyển khi giao container cho người chuyên chở. Incoterms 2020 còn cho phép theo FCA, các bên thoả thuận để người bán nhận được <b>vận đơn đã xếp hàng (on-board B/L)</b>, thuận tiện khi thanh toán bằng L/C.</p>
<p>Dù vậy, trong thực tế ở Việt Nam, FOB (khi xuất) và CIF (khi nhập) vẫn rất phổ biến vì thói quen. Bạn cần hiểu cả hai.</p>
<div class="ex"><b>Tình huống:</b> Bán FOB Hải Phòng. Container đã hạ bãi cảng, trong lúc chờ xếp lên tàu thì bị xe nâng làm thủng vách, hàng bị ướt. Theo FOB, hàng chưa lên tàu nên rủi ro vẫn thuộc <b>người bán</b>.</div>
<h3>Về EXW và DDP</h3>
<p><b>EXW</b> có vẻ dễ cho người bán, nhưng ở Việt Nam người mua nước ngoài thường không tự đứng tên làm thủ tục xuất khẩu được. <b>DDP</b> buộc người bán làm thủ tục và nộp thuế ở nước người mua – nhiều người bán không làm được. Hai điều kiện này cần cân nhắc kỹ.</p>`,
  terms:[["Risk transfer","Điểm chuyển giao rủi ro"],["ICC (A) / ICC (C)","Điều kiện bảo hiểm mức rộng nhất / mức tối thiểu"],["On-board B/L","Vận đơn xác nhận hàng đã xếp lên tàu"],["Two critical points","Hai điểm tới hạn của nhóm C"]],
  practice:"Với mỗi tình huống, xác định ai chịu thiệt: (1) Bán CIF Busan, tàu gặp bão giữa đường, hàng ướt. (2) Bán DAP kho người mua ở Bangkok, xe tải lật trên đường từ cảng về kho. (3) Bán FCA kho người bán, hàng đổ vỡ khi đang bốc lên xe của người chuyên chở do người mua chỉ định. Gợi ý: (1) người mua; (2) người bán; (3) người bán – theo FCA tại cơ sở người bán, người bán chịu trách nhiệm bốc hàng lên phương tiện.",
  quiz:[
   {q:"Bán CIF Singapore. Tàu gặp bão sau khi rời cảng Việt Nam, hàng hư hỏng. Rủi ro thuộc về:",o:["Người bán","Người mua","Hãng tàu trong mọi trường hợp"],a:1,e:"Theo CIF, rủi ro chuyển sang người mua khi hàng đã xếp lên tàu ở cảng đi. Người mua dùng bảo hiểm người bán đã mua để đòi bồi thường."},
   {q:"Theo Incoterms 2020, CIP yêu cầu người bán mua bảo hiểm ở mức:",o:["Tối thiểu ICC (C)","Rộng nhất ICC (A)","Không cần bảo hiểm"],a:1,e:"CIP: tối thiểu ICC (A); CIF: tối thiểu ICC (C), trừ khi các bên thoả thuận khác."},
   {q:"Điều kiện nào người bán phải làm thủ tục và nộp thuế nhập khẩu tại nước người mua?",o:["DAP","DDP","CIF"],a:1,e:"DDP – Delivered Duty Paid: người bán chịu cả thuế và thủ tục nhập khẩu."}
  ]
 },
 {
  id:"4.4", title:"Thanh toán quốc tế: T/T, nhờ thu, L/C", min:20,
  goals:["Phân biệt chuyển tiền T/T, nhờ thu D/P, D/A và tín dụng chứng từ L/C","Biết mỗi phương thức có lợi cho bên nào","Hiểu vai trò của chứng từ trong thanh toán"],
  body:`<h3>Bốn phương thức phổ biến</h3>
<div class="tbl"><table><thead><tr><th>Phương thức</th><th>Cách hoạt động</th><th>Có lợi cho</th></tr></thead><tbody>
<tr><td><b>T/T trả trước</b></td><td>Người mua chuyển tiền trước khi người bán giao hàng</td><td>Người bán (gần như không rủi ro)</td></tr>
<tr><td><b>T/T trả sau</b></td><td>Người bán giao hàng, gửi chứng từ, người mua chuyển tiền sau</td><td>Người mua</td></tr>
<tr><td><b>Nhờ thu D/P</b> (Documents against Payment)</td><td>Người bán gửi chứng từ qua ngân hàng; người mua phải <b>trả tiền</b> mới được nhận chứng từ để lấy hàng</td><td>Cân bằng hơn, nhưng ngân hàng không cam kết trả thay</td></tr>
<tr><td><b>Nhờ thu D/A</b> (Documents against Acceptance)</td><td>Người mua chỉ cần <b>ký chấp nhận hối phiếu</b> (hứa trả vào ngày đến hạn) là nhận chứng từ</td><td>Người mua</td></tr>
<tr><td><b>L/C</b> (Letter of Credit – tín dụng chứng từ)</td><td>Ngân hàng của người mua <b>cam kết</b> trả tiền nếu người bán xuất trình bộ chứng từ phù hợp với điều kiện L/C</td><td>Cân bằng cho cả hai, nhưng phí cao, thủ tục chặt</td></tr>
</tbody></table></div>
<h3>Thực tế hay gặp: T/T đặt cọc + trả nốt</h3>
<p>Ví dụ: “30% T/T đặt cọc khi ký hợp đồng, 70% còn lại thanh toán khi nhận bản sao vận đơn”. Người bán chỉ gửi vận đơn gốc hoặc điện giao hàng (telex release) cho người mua sau khi nhận đủ 70%.</p>
<h3>L/C và nguyên tắc “chứng từ phải phù hợp”</h3>
<p>Ngân hàng chỉ kiểm tra <b>chứng từ</b>, không kiểm tra hàng thật. Nếu chứng từ có sai khác với điều kiện L/C (gọi là <b>bất hợp lệ – discrepancy</b>), ngân hàng có quyền từ chối thanh toán. Các lỗi hay gặp: giao hàng trễ hơn ngày giao hàng muộn nhất, xuất trình chứng từ quá hạn, tên hàng trên hoá đơn khác L/C, vận đơn không ghi “clean on board”. L/C thường dẫn chiếu quy tắc <b>UCP 600</b> của ICC.</p>
<p>Đây là lý do người làm chứng từ logistics phải đọc L/C kỹ từng chữ: một dấu phẩy sai có thể làm chậm việc thu tiền hàng trăm nghìn USD.</p>
<h3>Chọn phương thức theo mức độ tin cậy</h3>
<ul><li>Khách mới, chưa tin nhau → trả trước, hoặc L/C.</li><li>Khách quen, đã giao dịch ổn định → T/T trả sau, D/P.</li><li>Khách lâu năm, tin tưởng cao → D/A, ghi sổ (open account).</li></ul>`,
  terms:[["T/T","Telegraphic Transfer – chuyển tiền bằng điện"],["D/P","Nhờ thu trả tiền đổi chứng từ"],["D/A","Nhờ thu chấp nhận hối phiếu đổi chứng từ"],["L/C","Letter of Credit – thư tín dụng"],["Discrepancy","Bất hợp lệ chứng từ"],["UCP 600","Quy tắc thực hành thống nhất về tín dụng chứng từ"]],
  practice:"Bạn xuất khẩu lần đầu cho một khách hàng mới ở châu Phi, lô hàng 50.000 USD. Bạn sẽ đề xuất phương thức thanh toán nào? Viết 3 lý do.",
  quiz:[
   {q:"Phương thức nào ngân hàng cam kết trả tiền nếu chứng từ phù hợp?",o:["T/T","D/P","L/C"],a:2,e:"Chỉ L/C có cam kết thanh toán của ngân hàng phát hành."},
   {q:"Theo D/A, người mua nhận được chứng từ khi:",o:["Đã trả đủ tiền","Ký chấp nhận hối phiếu, cam kết trả vào ngày đến hạn","Hàng đã về kho"],a:1,e:"D/A: chấp nhận thanh toán (acceptance) là nhận chứng từ, nên rủi ro nghiêng về người bán."},
   {q:"Khi thanh toán bằng L/C, ngân hàng kiểm tra:",o:["Chất lượng hàng thực tế","Sự phù hợp của bộ chứng từ với điều kiện L/C","Giá thị trường của hàng"],a:1,e:"Ngân hàng giao dịch trên chứng từ, không kiểm tra hàng."}
  ]
 }
 ],
 test:[
  {q:"Cách ghi Incoterms đúng nhất trong hợp đồng là:",o:["FOB","FOB Vietnam","FOB Hai Phong Port, Vietnam, Incoterms® 2020"],a:2,e:"Cần đủ: điều kiện + địa điểm cụ thể + phiên bản."},
  {q:"Incoterms 2020 có bao nhiêu điều kiện?",o:["9","11","13"],a:1,e:"7 điều kiện cho mọi phương thức + 4 điều kiện cho đường biển/thủy nội địa."},
  {q:"Điều kiện DPU thay thế cho điều kiện nào của Incoterms 2010?",o:["DAT","DDU","DES"],a:0,e:"DAT (Delivered at Terminal) được đổi thành DPU trong bản 2020."},
  {q:"Bán FOB Cát Lái. Container nằm ở bãi cảng chờ xếp tàu thì bị hư hại. Ai chịu rủi ro?",o:["Người bán","Người mua","Không ai"],a:0,e:"Theo FOB, rủi ro chỉ chuyển khi hàng đã xếp lên tàu."},
  {q:"Với hàng container, ICC khuyến nghị dùng điều kiện nào thay cho FOB?",o:["FAS","FCA","EXW"],a:1,e:"FCA phù hợp với thực tế giao container cho người chuyên chở tại bãi."},
  {q:"Người mua Việt Nam nhập khẩu theo CIF. Ai mua bảo hiểm cho chặng biển?",o:["Người bán","Người mua","Hãng tàu"],a:0,e:"CIF: người bán mua bảo hiểm (mức tối thiểu ICC C) cho người mua hưởng."},
  {q:"Khách hàng mới, giá trị lô hàng lớn, hai bên chưa tin nhau. Phương thức thanh toán cân bằng rủi ro nhất là:",o:["D/A","T/T trả sau 90 ngày","L/C"],a:2,e:"L/C có ngân hàng cam kết, bảo vệ cả hai bên."},
  {q:"Theo nhóm E–F–C–D, nghĩa vụ của người bán:",o:["Giảm dần","Tăng dần","Không đổi"],a:1,e:"EXW ít nghĩa vụ nhất; DDP nhiều nghĩa vụ nhất."}
 ]
},
{
 id:"m5", no:"05", title:"Chứng từ & Hải quan", tone:"--c5",
 desc:"Bộ chứng từ xuất nhập khẩu, vận đơn, mã HS, thuế, xuất xứ và thủ tục hải quan Việt Nam.",
 lessons:[
 {
  id:"5.1", title:"Bộ chứng từ xuất nhập khẩu", min:20,
  goals:["Kể tên và nêu chức năng của các chứng từ chính","Biết chứng từ nào do ai phát hành","Hiểu yêu cầu thống nhất giữa các chứng từ"],
  body:`<h3>Các chứng từ cốt lõi</h3>
<div class="tbl"><table><thead><tr><th>Chứng từ</th><th>Ai phát hành</th><th>Dùng để</th></tr></thead><tbody>
<tr><td><b>Sales Contract</b> (Hợp đồng)</td><td>Hai bên ký</td><td>Căn cứ pháp lý của toàn bộ thương vụ</td></tr>
<tr><td><b>Commercial Invoice</b> (Hoá đơn thương mại)</td><td>Người bán</td><td>Đòi tiền; căn cứ khai hải quan và tính thuế</td></tr>
<tr><td><b>Packing List</b> (Phiếu đóng gói)</td><td>Người bán</td><td>Chi tiết từng kiện: số lượng, trọng lượng, kích thước – để kiểm hàng, kiểm hoá</td></tr>
<tr><td><b>Bill of Lading / Air Waybill</b></td><td>Hãng tàu/hãng bay hoặc forwarder</td><td>Bằng chứng giao hàng cho người chuyên chở; với B/L còn là chứng từ sở hữu</td></tr>
<tr><td><b>C/O</b> (Giấy chứng nhận xuất xứ)</td><td>Cơ quan có thẩm quyền hoặc người xuất khẩu tự chứng nhận (theo FTA)</td><td>Hưởng thuế ưu đãi theo hiệp định thương mại</td></tr>
<tr><td><b>Insurance Certificate/Policy</b></td><td>Công ty bảo hiểm</td><td>Bằng chứng hàng được bảo hiểm (CIF, CIP)</td></tr>
<tr><td><b>Phytosanitary Certificate</b></td><td>Cơ quan kiểm dịch thực vật</td><td>Hàng nông sản, gỗ – chứng nhận sạch sâu bệnh</td></tr>
<tr><td><b>Fumigation Certificate</b></td><td>Đơn vị hun trùng</td><td>Hàng hoặc pallet gỗ đã được hun trùng</td></tr>
<tr><td><b>Certificate of Quality/Quantity</b></td><td>Người bán hoặc tổ chức giám định</td><td>Chứng nhận chất lượng, số lượng</td></tr>
<tr><td><b>Tờ khai hải quan</b></td><td>Người khai hải quan, qua hệ thống</td><td>Thông quan hàng hoá</td></tr>
</tbody></table></div>
<h3>Chứng từ phía nhập khẩu</h3>
<ul><li><b>Arrival Notice</b> (Thông báo hàng đến): hãng tàu/forwarder gửi khi tàu sắp đến, kèm các khoản phí phải trả.</li><li><b>D/O – Delivery Order</b> (Lệnh giao hàng): người nhận đổi vận đơn (hoặc xuất trình theo hướng dẫn) và trả phí để lấy D/O, dùng D/O để nhận hàng tại cảng.</li></ul>
<h3>Quy tắc thống nhất</h3>
<p>Tên hàng, số lượng, trọng lượng, số kiện, ký mã hiệu, tên người bán người mua phải <b>khớp nhau giữa Invoice, Packing List, B/L, C/O và tờ khai</b>. Sai lệch nhỏ (ví dụ Invoice ghi 1.000 thùng, B/L ghi 1.050 thùng) có thể bị hải quan yêu cầu giải trình, bị từ chối C/O, hoặc bị ngân hàng coi là bất hợp lệ khi thanh toán L/C.</p>
<div class="ex"><b>Shipping mark là gì?</b> Là ký hiệu ghi trên kiện hàng, thường gồm: tên viết tắt người nhận, cảng đến, số hợp đồng, số kiện (ví dụ “C/No. 1–120”), có thể kèm ký hiệu cẩn thận như “Hàng dễ vỡ”, “Để hướng này lên trên”. Shipping mark trên kiện phải giống trên Packing List.</div>`,
  terms:[["Commercial Invoice","Hoá đơn thương mại"],["Packing List","Phiếu đóng gói"],["C/O","Certificate of Origin – chứng nhận xuất xứ"],["Phytosanitary","Kiểm dịch thực vật"],["Arrival Notice","Thông báo hàng đến"],["D/O","Delivery Order – lệnh giao hàng"]],
  practice:"Tìm mẫu Commercial Invoice và Packing List trên mạng (từ khoá “commercial invoice template”). So sánh và liệt kê 5 thông tin giống nhau, 3 thông tin chỉ có ở Packing List.",
  quiz:[
   {q:"Chứng từ nào là căn cứ chính để khai trị giá hàng và tính thuế?",o:["Packing List","Commercial Invoice","Arrival Notice"],a:1,e:"Hoá đơn thương mại thể hiện giá trị giao dịch."},
   {q:"Chứng từ nào thể hiện chi tiết trọng lượng, kích thước từng kiện?",o:["Packing List","C/O","Hợp đồng"],a:0,e:"Packing List mô tả chi tiết đóng gói."},
   {q:"Người nhập khẩu dùng chứng từ nào để nhận hàng tại cảng?",o:["Arrival Notice","D/O – Lệnh giao hàng","Fumigation Certificate"],a:1,e:"D/O do hãng tàu/forwarder cấp, cho phép nhận hàng."}
  ]
 },
 {
  id:"5.2", title:"Vận đơn đường biển (B/L)", min:25,
  goals:["Nêu 3 chức năng của vận đơn","Phân biệt Master/House B/L, Original/Surrendered/Seaway bill","Phân biệt vận đơn đích danh, theo lệnh, vận đơn sạch"],
  body:`<h3>Ba chức năng của B/L</h3>
<ol><li><b>Biên lai nhận hàng</b>: người chuyên chở xác nhận đã nhận hàng với số lượng, tình trạng ghi trên vận đơn.</li><li><b>Bằng chứng của hợp đồng vận chuyển</b> giữa chủ hàng và người chuyên chở.</li><li><b>Chứng từ sở hữu hàng</b> (document of title): ai giữ vận đơn gốc hợp lệ thì có quyền nhận hàng. Vì vậy B/L có thể mua bán, cầm cố, chuyển nhượng.</li></ol>
<h3>Master B/L và House B/L</h3>
<p><b>MBL</b> do hãng tàu phát hành, người gửi hàng trên MBL thường là forwarder. <b>HBL</b> do forwarder phát hành cho chủ hàng thật. Khi hàng đến, forwarder ở đầu nhập dùng MBL để lấy hàng từ hãng tàu, rồi giao cho người nhận cầm HBL.</p>
<h3>Hình thức phát hành</h3>
<div class="tbl"><table><thead><tr><th>Loại</th><th>Đặc điểm</th><th>Khi nào dùng</th></tr></thead><tbody>
<tr><td><b>Original B/L</b></td><td>Bản gốc giấy, thường bộ 3 bản. Người nhận phải xuất trình bản gốc để lấy hàng</td><td>Thanh toán L/C, D/P – cần kiểm soát hàng bằng chứng từ</td></tr>
<tr><td><b>Surrendered B/L / Telex release</b></td><td>Người gửi nộp lại bản gốc tại nơi đi (hoặc không phát hành bản gốc); hãng tàu điện cho đầu nhập giao hàng không cần bản gốc</td><td>Đã nhận tiền, muốn giao nhanh, tránh gửi chứng từ chậm</td></tr>
<tr><td><b>Seaway Bill</b></td><td>Chỉ là biên lai và bằng chứng hợp đồng, <b>không phải chứng từ sở hữu</b>; giao cho người nhận ghi tên</td><td>Công ty mẹ – con, khách quen tin cậy</td></tr>
</tbody></table></div>
<h3>Theo cách ghi người nhận</h3>
<ul><li><b>Straight B/L</b> (đích danh): ghi rõ tên người nhận, không chuyển nhượng được.</li><li><b>To order B/L</b> (theo lệnh): ghi “To order” hoặc “To order of [ngân hàng]”, chuyển nhượng được bằng ký hậu (endorsement). Hay dùng trong L/C.</li><li><b>Bearer B/L</b> (vô danh): ai cầm thì người đó nhận hàng – rủi ro cao, ít dùng.</li></ul>
<h3>Theo tình trạng hàng</h3>
<ul><li><b>Clean B/L</b> (vận đơn sạch): không có ghi chú xấu về hàng hoặc bao bì.</li><li><b>Claused/Unclean B/L</b>: có ghi chú như “thùng bị móp”, “bao rách”. Ngân hàng thường từ chối trong L/C.</li><li><b>Shipped on board B/L</b>: xác nhận hàng đã xếp lên tàu. <b>Received for shipment B/L</b>: mới nhận để chở, chưa xếp lên tàu.</li></ul>
<h3>Nội dung chính trên vận đơn</h3>
<p>Shipper, Consignee, Notify party, tên tàu và số chuyến, cảng xếp, cảng dỡ, số container và số chì, mô tả hàng, số kiện, trọng lượng, thể tích, cước trả trước (Freight Prepaid) hay trả sau (Freight Collect), ngày và nơi phát hành, số bản gốc.</p>`,
  terms:[["Document of title","Chứng từ sở hữu"],["MBL / HBL","Vận đơn chủ / vận đơn nhà"],["Telex release","Điện giao hàng không cần vận đơn gốc"],["Seaway Bill","Giấy gửi hàng đường biển, không phải chứng từ sở hữu"],["To order","Vận đơn theo lệnh"],["Endorsement","Ký hậu chuyển nhượng"],["Freight Prepaid / Collect","Cước trả trước / trả sau"]],
  practice:"Tìm ảnh một vận đơn mẫu trên mạng (từ khoá “bill of lading sample”). Tìm và khoanh vào: Shipper, Consignee, Notify party, POL, POD, số container, số chì, Freight Prepaid/Collect, số bản gốc.",
  quiz:[
   {q:"Chức năng nào làm B/L khác với AWB?",o:["Là biên lai nhận hàng","Là chứng từ sở hữu, có thể chuyển nhượng","Là bằng chứng hợp đồng vận chuyển"],a:1,e:"B/L gốc theo lệnh là chứng từ sở hữu; AWB và Seaway bill thì không."},
   {q:"Người bán đã nhận đủ tiền và muốn người mua lấy hàng nhanh không cần bản gốc. Nên dùng:",o:["Original B/L gửi chuyển phát","Surrendered B/L / Telex release","Bearer B/L"],a:1,e:"Telex release cho phép giao hàng không cần xuất trình bản gốc."},
   {q:"Vận đơn ghi chú “3 cartons damaged” là:",o:["Clean B/L","Unclean/Claused B/L","Seaway Bill"],a:1,e:"Có ghi chú xấu về tình trạng hàng là vận đơn không sạch."}
  ]
 },
 {
  id:"5.3", title:"Mã HS, thuế và xuất xứ (C/O)", min:25,
  goals:["Hiểu cấu trúc mã HS","Biết các loại thuế khi nhập khẩu vào Việt Nam","Tính được khoản tiết kiệm khi có C/O ưu đãi"],
  body:`<h3>Mã HS là gì?</h3>
<p>HS (Harmonized System) là hệ thống mã phân loại hàng hoá do <b>Tổ chức Hải quan Thế giới (WCO)</b> xây dựng, dùng chung ở hầu hết các nước. Mã HS quyết định <b>thuế suất</b>, <b>chính sách quản lý</b> (cần giấy phép, kiểm tra chuyên ngành hay không) và <b>quy tắc xuất xứ</b>.</p>
<ul><li><b>2 số đầu</b>: Chương (ví dụ Chương 09 – Cà phê, chè, gia vị).</li><li><b>4 số</b>: Nhóm (0901 – Cà phê).</li><li><b>6 số</b>: Phân nhóm – <b>thống nhất quốc tế</b>.</li><li>Việt Nam dùng mã <b>8 số</b> (theo Danh mục thuế quan hài hoà ASEAN – AHTN); các nước khác có thể dùng 10 số.</li></ul>
<p>Phân loại sai mã HS là lỗi phổ biến và tốn kém: có thể bị truy thu thuế, phạt, hoặc mất ưu đãi. Khi không chắc, doanh nghiệp có thể đề nghị cơ quan hải quan xác định trước mã số.</p>
<h3>Các loại thuế khi nhập khẩu vào Việt Nam</h3>
<ul><li><b>Thuế nhập khẩu</b>: thuế suất thông thường, ưu đãi (MFN – cho nước thành viên WTO) hoặc ưu đãi đặc biệt (theo FTA).</li><li><b>Thuế giá trị gia tăng (VAT)</b> hàng nhập khẩu.</li><li><b>Thuế tiêu thụ đặc biệt</b>: ô tô, rượu bia, thuốc lá…</li><li><b>Thuế bảo vệ môi trường</b>: xăng dầu, túi ni lông…</li><li><b>Thuế phòng vệ thương mại</b>: chống bán phá giá, chống trợ cấp, tự vệ (nếu có).</li></ul>
<p>Trị giá tính thuế nhập khẩu tại Việt Nam được xác định đến <b>cửa khẩu nhập đầu tiên</b>, nên thực tế tương đương trị giá CIF. Nếu mua theo FOB thì phải cộng thêm cước và bảo hiểm để tính thuế.</p>
<h3>C/O và hiệp định thương mại tự do (FTA)</h3>
<p>Việt Nam tham gia nhiều FTA. Hàng có xuất xứ từ nước thành viên, đáp ứng quy tắc xuất xứ, có thể được hưởng thuế nhập khẩu thấp hơn hoặc bằng 0%. Một số mẫu C/O và hình thức hay gặp:</p>
<div class="tbl"><table><thead><tr><th>Hiệp định</th><th>Chứng từ xuất xứ</th></tr></thead><tbody>
<tr><td>ATIGA (ASEAN)</td><td>C/O mẫu D hoặc tự chứng nhận</td></tr>
<tr><td>ACFTA (ASEAN – Trung Quốc)</td><td>C/O mẫu E</td></tr>
<tr><td>AKFTA / VKFTA (Hàn Quốc)</td><td>C/O mẫu AK / VK</td></tr>
<tr><td>EVFTA (EU)</td><td>EUR.1 hoặc tự chứng nhận xuất xứ</td></tr>
<tr><td>CPTPP</td><td>Tự chứng nhận xuất xứ</td></tr>
</tbody></table></div>
<div class="ex"><b>Tính thử:</b> Nhập lô hàng trị giá CIF 10.000 USD từ Trung Quốc. Thuế nhập khẩu ưu đãi MFN 10%, theo ACFTA (có C/O mẫu E) 0%. VAT 10%.<br><b>Không có C/O:</b> Thuế NK = 1.000 USD; VAT = (10.000 + 1.000) × 10% = 1.100 USD. Tổng = 2.100 USD.<br><b>Có C/O mẫu E:</b> Thuế NK = 0; VAT = 10.000 × 10% = 1.000 USD. Tổng = 1.000 USD.<br>→ Tiết kiệm <b>1.100 USD</b> chỉ nhờ một tờ C/O hợp lệ.</div>
<p class="note">Thuế suất thực tế thay đổi theo từng mã hàng và từng năm. Luôn tra biểu thuế hiện hành trước khi báo giá.</p>`,
  terms:[["HS code","Mã phân loại hàng hoá"],["WCO","Tổ chức Hải quan Thế giới"],["MFN","Most Favoured Nation – thuế suất ưu đãi tối huệ quốc"],["FTA","Free Trade Agreement – hiệp định thương mại tự do"],["Form D / E","Mẫu C/O ATIGA / ACFTA"],["Self-certification","Tự chứng nhận xuất xứ"]],
  practice:"Tra mã HS của “cà phê nhân chưa rang, chưa khử caffein” (gợi ý: Chương 09). Sau đó tính lại ví dụ trên nếu trị giá CIF là 25.000 USD. Đáp án: không C/O tổng thuế 5.250 USD; có C/O 2.500 USD; tiết kiệm 2.750 USD.",
  quiz:[
   {q:"Phần mã HS thống nhất trên toàn thế giới gồm bao nhiêu số đầu?",o:["4 số","6 số","8 số"],a:1,e:"6 số đầu thống nhất quốc tế; Việt Nam dùng 8 số."},
   {q:"Hàng xuất xứ Trung Quốc muốn hưởng ưu đãi ACFTA khi nhập vào Việt Nam cần C/O mẫu:",o:["Form D","Form E","EUR.1"],a:1,e:"Form E là mẫu C/O của hiệp định ASEAN – Trung Quốc."},
   {q:"Trị giá CIF 20.000 USD, thuế NK 5%, VAT 10%. Tổng thuế phải nộp là:",o:["3.000 USD","3.100 USD","2.000 USD"],a:1,e:"Thuế NK = 1.000; VAT = (20.000 + 1.000) × 10% = 2.100. Tổng 3.100 USD."}
  ]
 },
 {
  id:"5.4", title:"Thủ tục hải quan và các khoản phí tại cảng", min:25,
  goals:["Nắm các bước thông quan và ý nghĩa 3 luồng xanh, vàng, đỏ","Nhận biết các khoản phí địa phương (local charges)","Hiểu phí DEM, DET và thời gian miễn phí"],
  body:`<h3>Hải quan điện tử ở Việt Nam</h3>
<p>Doanh nghiệp khai hải quan điện tử qua hệ thống <b>VNACCS/VCIS</b>, thường dùng phần mềm khai báo kết nối với hệ thống. Nhiều giấy phép, kiểm tra chuyên ngành được thực hiện qua <b>Cổng thông tin một cửa quốc gia</b>.</p>
<h3>Các bước thông quan hàng nhập khẩu</h3>
<ol><li>Chuẩn bị chứng từ: hợp đồng, invoice, packing list, B/L, C/O, giấy phép (nếu có).</li><li>Khai tờ khai trên hệ thống, khai báo mã HS, trị giá, xuất xứ, thuế.</li><li>Hệ thống tự động <b>phân luồng</b>.</li><li>Nộp thuế (nếu có).</li><li>Thông quan, sau đó làm thủ tục qua khu vực giám sát hải quan tại cảng để đưa hàng ra.</li><li>Lấy hàng về kho, trả container rỗng về depot đúng hạn.</li></ol>
<h3>Ba luồng</h3>
<div class="tbl"><table><thead><tr><th>Luồng</th><th>Mức kiểm tra</th></tr></thead><tbody>
<tr><td><span class="lane g">Xanh</span></td><td>Miễn kiểm tra chi tiết hồ sơ và miễn kiểm tra thực tế hàng hoá</td></tr>
<tr><td><span class="lane y">Vàng</span></td><td>Kiểm tra chi tiết hồ sơ, miễn kiểm tra thực tế hàng</td></tr>
<tr><td><span class="lane r">Đỏ</span></td><td>Kiểm tra chi tiết hồ sơ <b>và</b> kiểm tra thực tế hàng hoá (kiểm hoá)</td></tr>
</tbody></table></div>
<p>Phân luồng dựa trên quản lý rủi ro: lịch sử tuân thủ của doanh nghiệp, loại hàng, xuất xứ… Chứng từ khớp nhau, khai đúng mã HS và trị giá là cách tốt nhất để giảm khả năng vào luồng đỏ.</p>
<h3>Kiểm tra chuyên ngành</h3>
<p>Một số hàng phải qua kiểm tra của bộ, ngành chuyên môn trước hoặc trong khi thông quan: kiểm dịch động vật, thực vật; kiểm tra an toàn thực phẩm; kiểm tra chất lượng, hợp quy; giấy phép nhập khẩu. Đây thường là nguyên nhân khiến hàng nằm cảng lâu.</p>
<h3>Phí địa phương (Local charges) hay gặp</h3>
<div class="tbl"><table><thead><tr><th>Phí</th><th>Ý nghĩa</th></tr></thead><tbody>
<tr><td><b>THC</b> (Terminal Handling Charge)</td><td>Phí xếp dỡ container tại cảng</td></tr>
<tr><td><b>B/L fee / Doc fee</b></td><td>Phí phát hành vận đơn / chứng từ</td></tr>
<tr><td><b>D/O fee</b></td><td>Phí lệnh giao hàng (hàng nhập)</td></tr>
<tr><td><b>CFS fee</b></td><td>Phí xử lý hàng lẻ tại kho CFS</td></tr>
<tr><td><b>Seal fee</b></td><td>Phí chì niêm phong</td></tr>
<tr><td><b>CIC</b></td><td>Phụ phí mất cân bằng vỏ container</td></tr>
<tr><td><b>Telex release fee</b></td><td>Phí điện giao hàng</td></tr>
<tr><td><b>Phí nâng hạ</b> (Lift on/Lift off)</td><td>Nâng container lên xe, hạ container xuống bãi</td></tr>
</tbody></table></div>
<h3>DEM, DET và thời gian miễn phí</h3>
<p>Hãng tàu cho một số ngày <b>miễn phí (free time)</b>. Quá hạn sẽ phát sinh:</p>
<ul><li><b>DEM (Demurrage)</b>: phí lưu container <b>trong cảng</b> quá hạn – container có hàng nằm bãi chưa lấy.</li><li><b>DET (Detention)</b>: phí lưu container <b>ngoài cảng</b> quá hạn – đã kéo về kho nhưng chậm trả vỏ rỗng.</li><li><b>Storage</b>: phí lưu bãi do cảng thu.</li></ul>
<div class="ex"><b>Tình huống:</b> Hàng vào luồng đỏ, phải kiểm hoá, chờ kết quả kiểm dịch thêm 6 ngày. Free time chỉ 5 ngày. Chủ hàng bị tính DEM cho số ngày vượt. Người làm logistics giỏi là người <b>xin thêm free time từ lúc booking</b> khi biết hàng có nguy cơ kiểm tra lâu.</div>`,
  terms:[["VNACCS/VCIS","Hệ thống thông quan tự động của Việt Nam"],["Luồng xanh/vàng/đỏ","Ba mức kiểm tra hải quan"],["Kiểm hoá","Kiểm tra thực tế hàng hoá"],["THC","Phí xếp dỡ tại cảng"],["DEM / DET","Phí lưu container trong cảng / ngoài cảng"],["Free time","Thời gian miễn phí lưu container"]],
  practice:"Nhận được Arrival Notice với các phí: THC 130 USD/cont, D/O 40 USD/bộ, CIC 60 USD/cont, cleaning 10 USD/cont. Lô hàng 2 container 40'. Tính tổng phí phải trả để lấy D/O. Đáp án: (130 + 60 + 10) × 2 + 40 = 440 USD. Các con số chỉ là ví dụ.",
  quiz:[
   {q:"Tờ khai vào luồng vàng nghĩa là:",o:["Miễn kiểm tra hoàn toàn","Kiểm tra chi tiết hồ sơ, miễn kiểm tra thực tế hàng","Kiểm tra hồ sơ và kiểm tra thực tế hàng"],a:1,e:"Vàng = kiểm hồ sơ; Đỏ = kiểm hồ sơ + kiểm hoá."},
   {q:"Container đã kéo về kho, rút hàng xong nhưng trả vỏ trễ 4 ngày so với free time. Phí phát sinh là:",o:["DEM","DET","THC"],a:1,e:"DET là phí giữ container ngoài cảng quá hạn."},
   {q:"THC là:",o:["Phí xếp dỡ container tại cảng","Thuế nhập khẩu","Phí bảo hiểm"],a:0,e:"Terminal Handling Charge – phí làm hàng tại cảng."}
  ]
 }
 ],
 test:[
  {q:"Chứng từ nào có thể được mua bán, chuyển nhượng để chuyển quyền nhận hàng?",o:["Air Waybill","Original B/L theo lệnh","Seaway Bill"],a:1,e:"B/L gốc theo lệnh là chứng từ sở hữu, chuyển nhượng bằng ký hậu."},
  {q:"Trên MBL, người gửi hàng (shipper) thường là:",o:["Nhà máy sản xuất","Forwarder","Ngân hàng"],a:1,e:"Hãng tàu phát hành MBL cho forwarder; forwarder phát hành HBL cho chủ hàng thật."},
  {q:"Invoice ghi 1.000 thùng, Packing List ghi 1.000 thùng, B/L ghi 1.020 thùng. Rủi ro lớn nhất là:",o:["Không có rủi ro gì","Hải quan yêu cầu giải trình và ngân hàng có thể coi là bất hợp lệ","Chỉ phải trả thêm cước"],a:1,e:"Chứng từ phải thống nhất với nhau."},
  {q:"Việt Nam sử dụng mã HS bao nhiêu số?",o:["6","8","10"],a:1,e:"Việt Nam dùng 8 số theo AHTN."},
  {q:"Hàng xuất khẩu sang EU muốn khách được hưởng ưu đãi EVFTA cần:",o:["C/O mẫu E","EUR.1 hoặc tự chứng nhận xuất xứ theo quy định","Form D"],a:1,e:"EVFTA dùng EUR.1 hoặc cơ chế tự chứng nhận."},
  {q:"Luồng đỏ có nghĩa là:",o:["Hàng bị tịch thu","Kiểm tra hồ sơ và kiểm tra thực tế hàng hoá","Chỉ kiểm tra hồ sơ"],a:1,e:"Đỏ là mức kiểm tra cao nhất, có kiểm hoá."},
  {q:"Container có hàng nằm tại bãi cảng quá free time vì chủ hàng chưa làm xong thủ tục. Phí hãng tàu tính là:",o:["DEM","DET","Seal fee"],a:0,e:"DEM – lưu container trong cảng quá hạn."},
  {q:"Trị giá CIF 8.000 USD, thuế NK 15%, VAT 10%. Tổng thuế phải nộp là:",o:["2.000 USD","2.120 USD","1.200 USD"],a:1,e:"NK = 1.200; VAT = (8.000 + 1.200) × 10% = 920. Tổng 2.120 USD."}
 ]
},
{
 id:"m6", no:"06", title:"Logistics hiện đại & Nghề nghiệp", tone:"--c6",
 desc:"Thương mại điện tử, công nghệ, logistics xanh, rủi ro chuỗi cung ứng và con đường nghề nghiệp.",
 lessons:[
 {
  id:"6.1", title:"Logistics thương mại điện tử và giao hàng chặng cuối", min:20,
  goals:["Hiểu first mile, middle mile, last mile","Biết các thách thức đặc thù của TMĐT tại Việt Nam","Hiểu mô hình fulfillment"],
  body:`<h3>Ba chặng của một đơn hàng online</h3>
<ul><li><b>First mile</b> (chặng đầu): lấy hàng từ người bán về kho/bưu cục đầu tiên.</li><li><b>Middle mile</b> (chặng giữa): vận chuyển giữa các trung tâm phân loại, giữa các tỉnh, thường bằng xe tải lớn, đôi khi bằng máy bay.</li><li><b>Last mile</b> (chặng cuối): từ bưu cục gần nhất đến tay người mua. Đây là chặng <b>tốn kém và khó nhất</b> tính trên mỗi đơn: đơn nhỏ, địa chỉ phân tán, khách vắng nhà, ngõ hẻm khó tìm.</li></ul>
<h3>Đặc thù TMĐT tại Việt Nam</h3>
<ul><li><b>COD (thu tiền khi giao)</b> còn rất phổ biến: đơn vị vận chuyển phải thu hộ, đối soát và chuyển tiền cho người bán.</li><li><b>Tỷ lệ hoàn hàng</b> đáng kể: khách từ chối nhận, đổi ý, không liên lạc được – tạo áp lực lên logistics ngược.</li><li><b>Kỳ vọng tốc độ</b> ngày càng cao: giao trong ngày, giao 2 giờ ở thành phố lớn.</li><li><b>Mùa cao điểm</b>: các ngày đôi như 9/9, 10/10, 11/11, 12/12 và Tết làm sản lượng tăng vọt.</li><li>Nhiều đơn vị vận chuyển cạnh tranh: Giao Hàng Nhanh, Giao Hàng Tiết Kiệm, J&T Express, Viettel Post, VNPost, Ninja Van, cùng đơn vị vận chuyển của chính các sàn.</li></ul>
<h3>Fulfillment là gì?</h3>
<p>Fulfillment là dịch vụ trọn gói xử lý đơn hàng cho người bán: nhận hàng nhập kho, lưu trữ, nhận đơn tự động từ sàn hoặc website, lấy hàng, đóng gói, bàn giao vận chuyển, xử lý hàng hoàn. Người bán chỉ cần lo sản phẩm và bán hàng. Các sàn lớn đều có dịch vụ fulfillment riêng cho người bán.</p>
<h3>Các giải pháp cho chặng cuối</h3>
<ul><li><b>Tủ nhận hàng thông minh (locker)</b> và điểm nhận hàng tại cửa hàng tiện lợi.</li><li><b>Kho vệ tinh</b> (micro-fulfillment) đặt gần khu dân cư.</li><li><b>Tối ưu tuyến</b> bằng phần mềm, gom đơn theo khu.</li><li><b>Xe điện</b> giao hàng: giảm chi phí nhiên liệu và khí thải.</li></ul>
<div class="ex"><b>Chỉ số quan trọng của giao hàng TMĐT:</b> tỷ lệ giao thành công lần đầu, thời gian giao trung bình, tỷ lệ hoàn, tỷ lệ hư hỏng/thất lạc, thời gian đối soát COD.</div>`,
  terms:[["First / Middle / Last mile","Chặng đầu / giữa / cuối"],["COD","Cash On Delivery – thu tiền khi giao"],["Fulfillment","Dịch vụ xử lý đơn hàng trọn gói"],["Locker","Tủ nhận hàng thông minh"],["Return rate","Tỷ lệ hoàn hàng"]],
  practice:"Mở lịch sử đơn hàng trên một ứng dụng mua sắm bạn hay dùng. Chọn một đơn, xem trạng thái hành trình và xác định mốc nào là first mile, middle mile, last mile. Ghi lại tổng thời gian và chặng nào lâu nhất.",
  quiz:[
   {q:"Chặng nào thường tốn kém nhất tính trên mỗi đơn hàng TMĐT?",o:["First mile","Middle mile","Last mile"],a:2,e:"Last mile: đơn nhỏ, phân tán, khó giao – chi phí trên mỗi đơn cao nhất."},
   {q:"COD là gì?",o:["Một loại container","Thu tiền khi giao hàng","Mã chứng nhận xuất xứ"],a:1,e:"Cash On Delivery."},
   {q:"Dịch vụ fulfillment bao gồm:",o:["Chỉ vận chuyển chặng cuối","Lưu kho, xử lý đơn, đóng gói, bàn giao vận chuyển, xử lý hàng hoàn","Chỉ in nhãn vận chuyển"],a:1,e:"Fulfillment là xử lý đơn hàng trọn gói."}
  ]
 },
 {
  id:"6.2", title:"Công nghệ trong logistics", min:15,
  goals:["Phân biệt ERP, WMS, TMS, OMS","Biết công nghệ nhận diện và theo dõi hàng","Hiểu xu hướng tự động hoá và dữ liệu"],
  body:`<h3>Các hệ thống phần mềm chính</h3>
<div class="tbl"><table><thead><tr><th>Hệ thống</th><th>Làm gì</th></tr></thead><tbody>
<tr><td><b>ERP</b></td><td>Quản trị tổng thể doanh nghiệp: mua hàng, bán hàng, kế toán, tồn kho, sản xuất</td></tr>
<tr><td><b>WMS</b></td><td>Quản lý kho: vị trí, nhập, xuất, kiểm kê</td></tr>
<tr><td><b>TMS</b></td><td>Quản lý vận tải: lập kế hoạch tuyến, chọn nhà xe, theo dõi chuyến, đối soát cước</td></tr>
<tr><td><b>OMS</b></td><td>Quản lý đơn hàng từ nhiều kênh bán (website, sàn, cửa hàng)</td></tr>
<tr><td><b>EDI / API</b></td><td>Trao đổi dữ liệu tự động giữa hệ thống của các công ty: đơn hàng, booking, trạng thái lô hàng</td></tr>
</tbody></table></div>
<h3>Nhận diện và theo dõi</h3>
<ul><li><b>Mã vạch (barcode) và mã QR</b>: rẻ, phổ biến, phải quét từng mã.</li><li><b>RFID</b>: thẻ sóng vô tuyến, đọc được nhiều thẻ cùng lúc không cần nhìn thấy – kiểm kê nhanh hơn nhiều.</li><li><b>GPS</b>: theo dõi vị trí xe tải, container.</li><li><b>Cảm biến IoT</b>: theo dõi nhiệt độ container lạnh, độ ẩm, va đập theo thời gian thực.</li></ul>
<h3>Tự động hoá kho</h3>
<p>Robot tự hành (AGV, AMR) chở kệ hàng đến chỗ người lấy hàng thay vì người đi tìm hàng; băng chuyền và máy phân loại tự động (sorter) phân loại hàng chục nghìn bưu kiện mỗi giờ tại các trung tâm của đơn vị chuyển phát; hệ thống kho cao tầng tự động (AS/RS).</p>
<h3>Dữ liệu và AI</h3>
<p>Dữ liệu bán hàng, thời tiết, khuyến mãi được dùng để <b>dự báo nhu cầu</b> chính xác hơn, từ đó đặt hàng và bố trí tồn kho tốt hơn. AI còn giúp tối ưu tuyến giao hàng, dự đoán thời gian tàu đến, đọc và kiểm tra chứng từ tự động.</p>
<h3>Số hoá chứng từ</h3>
<p>Vận đơn điện tử (eB/L), khai hải quan điện tử, Cổng một cửa quốc gia, hoá đơn điện tử giúp giảm giấy tờ, giảm thời gian và lỗi. Người làm logistics hiện nay cần thành thạo ít nhất Excel và làm quen với một vài hệ thống phần mềm.</p>`,
  terms:[["ERP","Enterprise Resource Planning – hoạch định nguồn lực doanh nghiệp"],["TMS","Transportation Management System"],["EDI","Electronic Data Interchange – trao đổi dữ liệu điện tử"],["RFID","Nhận dạng bằng sóng vô tuyến"],["AGV / AMR","Xe tự hành / robot di động tự hành"],["eB/L","Vận đơn điện tử"]],
  practice:"Tự kiểm tra kỹ năng Excel: bạn đã biết dùng VLOOKUP (hoặc XLOOKUP), Pivot Table, SUMIF chưa? Nếu chưa, hãy ghi lại để học thêm – đây là ba hàm người làm logistics dùng gần như hằng ngày.",
  quiz:[
   {q:"Hệ thống nào chuyên lập kế hoạch tuyến và quản lý chuyến xe?",o:["WMS","TMS","OMS"],a:1,e:"TMS – Transportation Management System."},
   {q:"Ưu điểm chính của RFID so với mã vạch là:",o:["Rẻ hơn","Đọc được nhiều thẻ cùng lúc, không cần nhìn thấy trực tiếp","Không cần điện"],a:1,e:"RFID giúp kiểm kê và nhận hàng nhanh hơn nhiều."},
   {q:"Theo dõi nhiệt độ container lạnh theo thời gian thực dùng công nghệ:",o:["Cảm biến IoT","Mã vạch giấy","Fax"],a:0,e:"Cảm biến IoT gửi dữ liệu nhiệt độ liên tục."}
  ]
 },
 {
  id:"6.3", title:"Logistics xanh và quản trị rủi ro chuỗi cung ứng", min:20,
  goals:["Biết các giải pháp giảm phát thải trong logistics","Hiểu vì sao quy định carbon ảnh hưởng tới hàng xuất khẩu Việt Nam","Nhận diện các loại rủi ro và cách giảm thiểu"],
  body:`<h3>Logistics xanh</h3>
<p>Vận tải là một nguồn phát thải khí nhà kính lớn. Khách hàng, đặc biệt ở châu Âu, ngày càng yêu cầu nhà cung cấp báo cáo và giảm phát thải. Các giải pháp phổ biến:</p>
<ul><li><b>Chuyển đổi phương thức</b>: từ đường bộ sang đường thủy, đường sắt – phát thải trên mỗi tấn-km thấp hơn nhiều.</li><li><b>Tăng hệ số chất hàng</b>: tránh xe chạy rỗng chiều về, ghép hàng.</li><li><b>Tối ưu tuyến</b>: quãng đường ngắn hơn, ít thời gian chạy không tải.</li><li><b>Xe điện</b> cho giao hàng nội thành.</li><li><b>Bao bì</b>: giảm vật liệu thừa, dùng bao bì tái chế, tái sử dụng pallet.</li></ul>
<p><b>Cơ chế điều chỉnh biên giới carbon của EU (CBAM)</b> áp dụng với một số nhóm hàng như sắt thép, nhôm, xi măng, phân bón: chạy giai đoạn chuyển tiếp chỉ báo cáo từ tháng 10/2023 và chuyển sang giai đoạn có nghĩa vụ tài chính từ năm 2026. Doanh nghiệp xuất khẩu các mặt hàng này sang EU cần chuẩn bị dữ liệu phát thải.</p>
<h3>Các loại rủi ro chuỗi cung ứng</h3>
<div class="tbl"><table><thead><tr><th>Loại</th><th>Ví dụ</th></tr></thead><tbody>
<tr><td>Gián đoạn tuyến vận tải</td><td>Tàu Ever Given mắc kẹt ở kênh Suez (3/2021); từ cuối 2023 nhiều hãng tàu tránh Biển Đỏ, đi vòng Mũi Hảo Vọng, kéo dài hành trình Á – Âu thêm khoảng 10–14 ngày</td></tr>
<tr><td>Thiên tai, dịch bệnh</td><td>Bão lũ, đại dịch COVID-19 khiến nhà máy, cảng đóng cửa</td></tr>
<tr><td>Biến động cước</td><td>Cước container tăng gấp nhiều lần trong giai đoạn 2021 và các đợt khủng hoảng</td></tr>
<tr><td>Chính sách thương mại</td><td>Thuế quan mới, phòng vệ thương mại, quy định xuất xứ chặt hơn</td></tr>
<tr><td>Nhà cung cấp</td><td>Nhà cung cấp duy nhất gặp sự cố, phá sản</td></tr>
</tbody></table></div>
<h3>Cách giảm thiểu rủi ro</h3>
<ul><li><b>Đa dạng hoá</b> nhà cung cấp, tuyến vận chuyển, cảng (không phụ thuộc một nguồn duy nhất).</li><li><b>Tồn kho an toàn</b> cho mặt hàng quan trọng.</li><li><b>Hợp đồng dài hạn</b> với hãng tàu để ổn định giá và chỗ.</li><li><b>Bảo hiểm hàng hoá</b> đầy đủ.</li><li><b>Theo dõi sát</b> tin tức, lịch tàu; có kịch bản dự phòng.</li><li>Xu hướng <b>“Trung Quốc + 1”</b> và dịch chuyển sản xuất gần thị trường – Việt Nam là một điểm đến được hưởng lợi.</li></ul>`,
  terms:[["Green logistics","Logistics xanh"],["Modal shift","Chuyển đổi phương thức vận tải"],["CBAM","Cơ chế điều chỉnh biên giới carbon của EU"],["Disruption","Gián đoạn chuỗi cung ứng"],["China + 1","Đa dạng hoá sản xuất ngoài Trung Quốc"]],
  practice:"Đọc một bài báo gần đây về tình hình cước vận tải biển hoặc một sự cố chuỗi cung ứng. Tóm tắt trong 3 câu: chuyện gì xảy ra, ảnh hưởng tới ai, doanh nghiệp đã phản ứng thế nào.",
  quiz:[
   {q:"Chuyển một phần hàng từ xe tải sang sà lan nhằm giảm phát thải gọi là:",o:["Modal shift – chuyển đổi phương thức","Cross-docking","Reverse logistics"],a:0,e:"Đường thủy phát thải trên tấn-km thấp hơn đường bộ."},
   {q:"Khi tàu tránh Biển Đỏ và đi vòng Mũi Hảo Vọng, hậu quả trực tiếp là:",o:["Hành trình Á – Âu dài hơn, cước và thời gian tăng","Hành trình ngắn hơn","Không ảnh hưởng"],a:0,e:"Đi vòng châu Phi kéo dài hành trình thêm khoảng 10–14 ngày."},
   {q:"Cách giảm rủi ro phụ thuộc vào một nhà cung cấp duy nhất là:",o:["Đa dạng hoá nhà cung cấp","Giảm tồn kho về 0","Bỏ bảo hiểm"],a:0,e:"Có nguồn thay thế giúp chuỗi không đứt khi một nguồn gặp sự cố."}
  ]
 },
 {
  id:"6.4", title:"Nghề logistics và lộ trình tiếp theo", min:20,
  goals:["Biết các vị trí việc làm phổ biến trong logistics","Xác định kỹ năng cần rèn luyện","Lập kế hoạch học tiếp sau khoá này"],
  body:`<h3>Các vị trí phổ biến cho người mới</h3>
<div class="tbl"><table><thead><tr><th>Vị trí</th><th>Làm gì</th><th>Phù hợp với người</th></tr></thead><tbody>
<tr><td><b>Sales logistics / Freight sales</b></td><td>Tìm khách, báo giá cước, chăm sóc khách hàng</td><td>Thích giao tiếp, chịu áp lực doanh số</td></tr>
<tr><td><b>Customer Service (CS)</b></td><td>Theo dõi lô hàng, cập nhật cho khách, làm đầu mối giữa khách và các bộ phận</td><td>Cẩn thận, giao tiếp tốt, tiếng Anh khá</td></tr>
<tr><td><b>Chứng từ (Documentation)</b></td><td>Làm vận đơn, chứng từ, khai manifest, kiểm tra bộ chứng từ</td><td>Tỉ mỉ, chính xác, thích làm việc với giấy tờ</td></tr>
<tr><td><b>Operations (Ops) / Hiện trường</b></td><td>Làm thủ tục hải quan, giao nhận tại cảng, xử lý sự cố</td><td>Năng động, chịu được đi lại, xử lý tình huống nhanh</td></tr>
<tr><td><b>Pricing / Purchasing</b></td><td>Mua cước từ hãng tàu, hãng bay; xây bảng giá</td><td>Giỏi số liệu, đàm phán</td></tr>
<tr><td><b>Nhân viên XNK tại doanh nghiệp sản xuất</b></td><td>Làm hợp đồng, chứng từ, làm việc với forwarder, ngân hàng</td><td>Muốn nhìn toàn cảnh thương vụ</td></tr>
<tr><td><b>Kho vận / Planner</b></td><td>Vận hành kho, kế hoạch tồn kho, kế hoạch vận tải</td><td>Thích quy trình, phân tích dữ liệu</td></tr>
</tbody></table></div>
<h3>Kỹ năng cốt lõi</h3>
<ul><li><b>Tiếng Anh chuyên ngành</b>: đọc hiểu email, chứng từ, hợp đồng; giao tiếp với đại lý nước ngoài.</li><li><b>Excel</b>: VLOOKUP/XLOOKUP, Pivot Table, SUMIF, định dạng bảng báo giá.</li><li><b>Tính chính xác</b>: một con số sai trên chứng từ có thể gây phạt hoặc chậm hàng.</li><li><b>Xử lý sự cố và giao tiếp</b>: logistics luôn có việc phát sinh – tàu trễ, hàng thiếu, chứng từ sai.</li><li><b>Hiểu biết nghiệp vụ</b>: Incoterms, vận đơn, hải quan, mã HS – những gì bạn vừa học.</li></ul>
<h3>Chứng chỉ và tài liệu học tiếp</h3>
<ul><li><b>FIATA Diploma</b> về giao nhận vận tải quốc tế, đào tạo tại Việt Nam thông qua Hiệp hội Doanh nghiệp Dịch vụ Logistics Việt Nam (VLA).</li><li><b>Chứng chỉ nghiệp vụ khai hải quan</b> – cần để làm nhân viên đại lý hải quan.</li><li><b>Chứng chỉ của ASCM (APICS)</b>: CPIM (hoạch định), CSCP (chuỗi cung ứng), CLTD (logistics, vận tải, phân phối) – phù hợp khi đã có kinh nghiệm.</li><li><b>Tài liệu gốc</b>: sách Incoterms® 2020 của ICC, website Hải quan Việt Nam (customs.gov.vn), biểu thuế xuất nhập khẩu hiện hành.</li></ul>
<h3>Gợi ý 90 ngày tiếp theo</h3>
<ol><li><b>Tháng 1</b>: Ôn lại khoá này, học thuộc 100 thuật ngữ tiếng Anh logistics, luyện Excel.</li><li><b>Tháng 2</b>: Học sâu một mảng bạn thích nhất (forwarding, kho, hay XNK), đọc mẫu chứng từ thật, theo dõi tin tức ngành.</li><li><b>Tháng 3</b>: Tham gia hội nhóm nghề, tìm thực tập hoặc vị trí CS/Docs – nơi người mới học nghề nhanh nhất.</li></ol>`,
  terms:[["CS","Customer Service – chăm sóc khách hàng"],["Docs","Documentation – bộ phận chứng từ"],["Ops","Operations – hiện trường, giao nhận"],["Pricing","Bộ phận giá cước"],["FIATA","Liên đoàn các Hiệp hội Giao nhận Quốc tế"],["VLA","Hiệp hội Doanh nghiệp Dịch vụ Logistics Việt Nam"]],
  practice:"Tìm 3 tin tuyển dụng logistics cho người mới (Fresher/Junior). Ghi lại các yêu cầu chung. Đánh dấu yêu cầu nào bạn đã đáp ứng sau khoá học này và yêu cầu nào cần học thêm.",
  quiz:[
   {q:"Vị trí nào chuyên làm vận đơn, kiểm tra bộ chứng từ?",o:["Sales","Documentation (Docs)","Pricing"],a:1,e:"Bộ phận chứng từ phụ trách vận đơn, manifest, bộ chứng từ."},
   {q:"Chứng chỉ FIATA tại Việt Nam được đào tạo thông qua:",o:["VLA – Hiệp hội Doanh nghiệp Dịch vụ Logistics Việt Nam","Ngân hàng Nhà nước","Bộ Giáo dục"],a:0,e:"VLA là đơn vị triển khai chương trình FIATA tại Việt Nam."},
   {q:"Ba hàm Excel người làm logistics dùng thường xuyên gồm:",o:["VLOOKUP/XLOOKUP, Pivot Table, SUMIF","Chỉ hàm SUM","Macro VBA nâng cao"],a:0,e:"Đây là bộ công cụ tra cứu và tổng hợp số liệu cơ bản."}
  ]
 }
 ],
 test:[
  {q:"Một khách hàng TMĐT không có nhà khi shipper đến, đơn bị giao lại lần hai. Chỉ số nào bị ảnh hưởng xấu?",o:["Tỷ lệ giao thành công lần đầu","Vòng quay tồn kho","Số TEU"],a:0,e:"Giao thất bại lần đầu làm tăng chi phí chặng cuối."},
  {q:"Mùa cao điểm TMĐT ở Việt Nam thường gắn với:",o:["Các ngày đôi (9/9, 11/11, 12/12) và Tết","Chỉ tháng 7","Không có mùa cao điểm"],a:0,e:"Khuyến mãi ngày đôi và Tết làm sản lượng tăng vọt."},
  {q:"Phần mềm tiếp nhận đơn từ nhiều kênh bán (website, sàn, cửa hàng) là:",o:["OMS","TMS","ERP kế toán"],a:0,e:"Order Management System."},
  {q:"Kiểm kê nhanh hàng nghìn sản phẩm mà không cần quét từng mã, nên dùng:",o:["RFID","Mã vạch in giấy","Ghi chép tay"],a:0,e:"RFID đọc được nhiều thẻ cùng lúc."},
  {q:"CBAM của EU ảnh hưởng trước hết tới nhóm hàng nào?",o:["Sắt thép, nhôm, xi măng, phân bón…","Trái cây tươi","Phần mềm"],a:0,e:"CBAM áp dụng cho một số ngành phát thải cao."},
  {q:"Biện pháp nào KHÔNG giúp giảm rủi ro gián đoạn chuỗi cung ứng?",o:["Đa dạng hoá nhà cung cấp","Giữ tồn kho an toàn cho mặt hàng quan trọng","Phụ thuộc hoàn toàn vào một tuyến vận chuyển duy nhất"],a:2,e:"Phụ thuộc một nguồn làm tăng rủi ro."},
  {q:"Người mới muốn hiểu toàn cảnh một thương vụ, làm cả hợp đồng, chứng từ, ngân hàng nên cân nhắc vị trí:",o:["Nhân viên XNK tại doanh nghiệp sản xuất","Tài xế xe nâng","Nhân viên IT"],a:0,e:"Vị trí XNK ở doanh nghiệp tiếp xúc với hầu hết các khâu."},
  {q:"Kỹ năng nào được xem là cốt lõi với hầu hết vị trí logistics?",o:["Tiếng Anh chuyên ngành và Excel","Thiết kế đồ hoạ","Lập trình nhúng"],a:0,e:"Logistics làm việc nhiều với đối tác nước ngoài và số liệu."}
 ]
}
];

const COURSE = PART1.concat(PART2);
const PASS = 70;
const KEY = "logi0-v1";
const LETTERS = ["A","B","C","D"];

/* ---------- state ---------- */
function blank(){ return {done:{}, lq:{}, tests:{}, final:null, days:[], log:[], name:""}; }
function load(){ try{ const r = localStorage.getItem(KEY); if(r) return Object.assign(blank(), JSON.parse(r)); }catch(e){} return blank(); }
let S = load();
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){} }
function fmt(d){ return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function today(){ return fmt(new Date()); }
function logSession(key){
  const t = today();
  if(!S.days.includes(t)) S.days.push(t);
  if(!S.log.some(x=>x.k===key && x.d===t)) S.log.push({k:key,d:t});
  save();
}
function streak(){
  const set = new Set(S.days); const d = new Date(); let n = 0;
  if(!set.has(fmt(d))){ d.setDate(d.getDate()-1); if(!set.has(fmt(d))) return 0; }
  while(set.has(fmt(d))){ n++; d.setDate(d.getDate()-1); }
  return n;
}
function todayCount(){ const t = today(); return new Set(S.log.filter(x=>x.d===t).map(x=>x.k)).size; }

/* ---------- ISO 6346 check digit ---------- */
function checkDigit(code10){
  const map = {}; let v = 10;
  for(const ch of "ABCDEFGHIJKLMNOPQRSTUVWXYZ"){ if(v % 11 === 0) v++; map[ch] = v; v++; }
  let sum = 0;
  [...code10].forEach((c,i)=>{ const n = /\d/.test(c) ? +c : map[c]; sum += n * Math.pow(2,i); });
  return (sum % 11) % 10;
}
function boxCode(m){ const owner = "LOGU", serial = m.no + "2026"; return {owner, serial, cd: checkDigit(owner+serial)}; }

/* ---------- sessions ---------- */
const SESSIONS = [];
COURSE.forEach(m=>{ m.lessons.forEach(l=>SESSIONS.push({type:"L", m, l, key:"L:"+l.id})); SESSIONS.push({type:"T", m, key:"T:"+m.id}); });
SESSIONS.push({type:"F", key:"F"});
function isDone(s){
  if(s.type==="L") return !!S.done[s.l.id];
  if(s.type==="T") return ((S.tests[s.m.id]||{}).best ?? -1) >= PASS;
  return ((S.final||{}).best ?? -1) >= PASS;
}
function nextIdx(){ return SESSIONS.findIndex(s=>!isDone(s)); }
function findLesson(id){ for(const m of COURSE){ const l = m.lessons.find(x=>x.id===id); if(l) return {m,l}; } }
function modById(id){ return COURSE.find(m=>m.id===id); }
function sessionLabel(s){
  if(s.type==="L") return {kind:"Bài "+s.l.id, title:s.l.title, meta:"Khoảng "+s.l.min+" phút · Môn "+s.m.no+" · "+s.m.title};
  if(s.type==="T") return {kind:"Kiểm tra Môn "+s.m.no, title:s.m.title, meta:s.m.test.length+" câu · khoảng 15 phút · đạt từ "+PASS+"%"};
  return {kind:"Thi cuối khoá", title:"Tổng hợp 6 môn", meta:"20 câu · khoảng 25 phút · đạt từ "+PASS+"%"};
}

/* ---------- view plumbing ---------- */
const app = document.getElementById("app");
let V = {name:"home"};
let tick = null;
function go(v){ V = v; if(tick){ clearInterval(tick); tick = null; } render(); window.scrollTo(0,0); }
function render(){
  if(V.name==="home") app.innerHTML = homeHTML();
  else if(V.name==="mod") app.innerHTML = modHTML(modById(V.m));
  else if(V.name==="lesson") { app.innerHTML = lessonHTML(); startTimer(); }
  else if(V.name==="test" || V.name==="final") app.innerHTML = testHTML();
}

/* ---------- home ---------- */
function homeHTML(){
  const ni = nextIdx();
  const doneN = SESSIONS.filter(isDone).length;
  const scores = COURSE.map(m=>(S.tests[m.id]||{}).best).filter(x=>x!=null);
  const avg = scores.length ? Math.round(scores.reduce((a,b)=>a+b,0)/scores.length)+"%" : "—";
  const tc = todayCount();

  let todayCard;
  if(ni===-1){
    todayCard = `<div class="today"><p class="eyebrow">Hoàn thành khoá học</p><h2>Bạn đã đi hết 31 buổi</h2><p class="meta">Xem lại bất kỳ môn nào, hoặc làm lại bài thi cuối khoá để giữ kiến thức.</p><button class="btn btn-signal" data-act="open-final">Xem chứng nhận</button></div>`;
  } else {
    const s = SESSIONS[ni], L = sessionLabel(s);
    todayCard = `<div class="today"><p class="eyebrow">Buổi học hôm nay · Buổi ${ni+1}/${SESSIONS.length}</p>
      <h2>${L.kind}: ${L.title}</h2><p class="meta">${L.meta}</p>
      ${tc ? `<p class="note">Hôm nay bạn đã xong ${tc} buổi. Học thêm thì cứ tiếp tục, hoặc hẹn mai nhé.</p>` : `<p class="note">Mục tiêu: 1 buổi mỗi ngày, 15–30 phút.</p>`}
      <button class="btn btn-signal" data-act="start-next">Bắt đầu buổi học →</button></div>`;
  }

  const cells = SESSIONS.map((s,i)=>{
    const tone = s.m ? `style="--c:var(${s.m.tone})"` : "";
    const cls = ["cell", s.type==="T"?"t":"", s.type==="F"?"f":"", isDone(s)?"done":"", i===ni?"next":""].join(" ");
    const L = sessionLabel(s);
    return `<div class="${cls}" ${tone} title="Buổi ${i+1}: ${L.kind} – ${L.title}"></div>`;
  }).join("");

  const boxes = COURSE.map(m=>{
    const c = boxCode(m);
    const dn = m.lessons.filter(l=>S.done[l.id]).length;
    const t = S.tests[m.id];
    const pips = m.lessons.map(l=>`<i class="${S.done[l.id]?"on":""}"></i>`).join("") + `<i class="tst ${t&&t.best>=PASS?"on":""}"></i>`;
    return `<button class="box" style="--c:var(${m.tone})" data-act="open-mod" data-m="${m.id}" aria-label="Môn ${m.no}: ${m.title}">
      <span class="mark"><span>${c.owner} ${c.serial}<b>${c.cd}</b></span><span>22G1</span></span>
      <span class="mno">MÔN ${m.no}</span>
      <span class="mtitle">${m.title}</span>
      <span class="mdesc">${m.desc}</span>
      <span class="mfoot"><span class="pips">${pips}</span><span>${dn}/${m.lessons.length} bài${t?` · KT ${t.best}%`:""}</span></span>
    </button>`;
  }).join("");

  const f = S.final;
  return `<div class="wrap">
  <header class="top"><button class="brand" data-act="home"><i></i>Logistics Từ Số 0</button><span class="topmeta">6 môn · 31 buổi · 15–30 phút/ngày</span></header>
  <section class="hero">
    <div><p class="eyebrow">Khoá tự học cho người mới bắt đầu</p><h1>Logistics<br>Từ Số 0</h1>
    <p class="lede">Đi từ “logistics là gì” đến đọc vận đơn, chọn Incoterms và hiểu thủ tục hải quan. 24 bài học ngắn, mỗi môn có bài kiểm tra, cuối khoá có bài thi tổng hợp. Học khoảng 5–6 buổi mỗi tuần thì sau 6 tuần bạn hoàn thành.</p></div>
    ${todayCard}
  </section>
  <section class="manifest" aria-label="Tiến độ">
    <div class="mf-head"><h2>Bảng kê hành trình</h2><span class="eyebrow">Mỗi ô là một buổi học</span></div>
    <div class="strip">${cells}</div>
    <div class="legend"><span><i style="background:var(--surface-2)"></i>Bài học</span><span><i style="background-image:repeating-linear-gradient(90deg,transparent 0 3px,var(--line) 3px 4px)"></i>Kiểm tra môn</span><span><i style="border-style:dashed"></i>Thi cuối khoá</span><span><i style="border:2px solid var(--signal)"></i>Buổi tiếp theo</span></div>
    <div class="stats">
      <div class="stat"><b>${doneN}/${SESSIONS.length}</b><span>Buổi đã xong</span></div>
      <div class="stat"><b>${streak()}</b><span>Ngày học liên tiếp</span></div>
      <div class="stat"><b>${avg}</b><span>Điểm kiểm tra môn trung bình</span></div>
    </div>
  </section>
  <div class="sh"><h2>Lộ trình 6 môn</h2><p>Học theo thứ tự, nhưng bạn có thể mở bất kỳ môn nào.</p></div>
  <section class="yard">${boxes}</section>
  <section class="finalcard"><div class="seal">${f&&f.best>=PASS?"✓":"31"}</div>
    <div><h3>Thi cuối khoá</h3><p>20 câu ngẫu nhiên từ cả 6 môn, đạt từ ${PASS}% để nhận chứng nhận hoàn thành.${f?` Điểm cao nhất: <b>${f.best}%</b>.`:" Nên làm sau khi qua 6 bài kiểm tra môn."}</p></div>
    <button class="btn btn-ink" data-act="open-final">${f?"Làm lại":"Vào thi"}</button></section>
  <div class="sh"><h2>Một buổi học</h2><p>Khoảng 15–30 phút</p></div>
  <section class="howto">
    <div><b>10–15 phút</b><strong>Đọc bài</strong><p>Mục tiêu, nội dung, ví dụ thực tế ở Việt Nam.</p></div>
    <div><b>3 phút</b><strong>Thuật ngữ</strong><p>Ghi lại 4–7 từ tiếng Anh chuyên ngành.</p></div>
    <div><b>5 phút</b><strong>Thực hành</strong><p>Một bài tập nhỏ, tính toán hoặc tra cứu.</p></div>
    <div><b>3 phút</b><strong>Tự kiểm tra</strong><p>3 câu hỏi, có giải thích ngay.</p></div>
  </section>
  <footer class="foot"><span>Tiến độ được lưu trên trình duyệt của bạn.</span><span id="reset">${resetHTML(false)}</span></footer>
  </div>`;
}
function resetHTML(ask){
  return ask ? `<span class="confirm">Xoá toàn bộ tiến độ và điểm? <button class="btn btn-ghost" data-act="reset-yes" style="padding:6px 12px">Xoá</button><button class="linkbtn" data-act="reset-no">Huỷ</button></span>`
             : `<button class="linkbtn" data-act="reset-ask">Học lại từ đầu</button>`;
}

/* ---------- module ---------- */
function modHTML(m){
  const c = boxCode(m), t = S.tests[m.id], ni = nextIdx(), nk = ni>=0 ? SESSIONS[ni].key : "";
  const rows = m.lessons.map(l=>{
    const d = S.done[l.id], q = S.lq[l.id];
    return `<li><button class="row" data-act="open-lesson" data-l="${l.id}">
      <span class="st ${d?"ok":nk==="L:"+l.id?"nx":""}">${d?"✓":l.id}</span>
      <span><span class="t1">Bài ${l.id}${q!=null?` · tự kiểm tra ${q}/3`:""}</span><span class="t2">${l.title}</span></span>
      <span class="t3">${l.min} phút</span></button></li>`;
  }).join("");
  const tp = t && t.best>=PASS;
  return `<div class="read">
  <header class="top"><button class="brand" data-act="home"><i></i>Logistics Từ Số 0</button><span class="topmeta">Môn ${m.no}/06</span></header>
  <section class="mhead" style="--c:var(${m.tone})">
    <button class="back" data-act="home">← Lộ trình</button>
    <p class="mark" style="margin:6px 0 0"><span>${c.owner} ${c.serial}<b>${c.cd}</b></span><span>MÔN ${m.no}</span></p>
    <h1>${m.title}</h1><p>${m.desc}</p>
  </section>
  <ol class="rows">${rows}
    <li><button class="row" data-act="open-test" data-m="${m.id}">
      <span class="st ${tp?"ok":nk==="T:"+m.id?"nx":""}">${tp?"✓":"KT"}</span>
      <span><span class="t1">Kiểm tra cuối môn · ${m.test.length} câu · đạt từ ${PASS}%</span><span class="t2">${t?`Điểm cao nhất ${t.best}% · lần gần nhất ${t.last}%`:"Chưa làm"}</span></span>
      <span class="t3">15 phút</span></button></li>
  </ol>
  </div>`;
}

/* ---------- lesson ---------- */
function lessonHTML(){
  const {m,l} = findLesson(V.l);
  if(!V.ans) V.ans = {};
  if(!V.qz) V.qz = l.quiz.map(shuffleQ);
  const idx = m.lessons.indexOf(l);
  const prev = idx>0 ? m.lessons[idx-1] : null;
  const nextSess = SESSIONS[SESSIONS.findIndex(s=>s.key==="L:"+l.id)+1];
  const terms = l.terms.map(([t,d])=>`<div><dt>${t}</dt><dd>${d}</dd></div>`).join("");
  const answered = Object.keys(V.ans).length, correct = Object.entries(V.ans).filter(([i,o])=>V.qz[i].a===o).length;
  const qs = V.qz.map((q,i)=>qItem(q,i,"lq")).join("");
  const done = S.done[l.id];
  const nextLabel = nextSess ? (nextSess.type==="L" ? "Bài "+nextSess.l.id : nextSess.type==="T" ? "Kiểm tra Môn "+nextSess.m.no : "Thi cuối khoá") : "";
  return `<div class="read" style="--c:var(${m.tone})">
  <div class="lbar"><button class="back" data-act="open-mod" data-m="${m.id}">← Môn ${m.no} · ${m.title}</button>
    <span class="timer" aria-live="off"><span id="tclock">00:00</span><span class="tbar" title="Vạch giữa: 15 phút · hết thanh: 30 phút"><i id="tfill" style="width:0"></i></span></span></div>
  <p class="eyebrow">Bài ${l.id} · khoảng ${l.min} phút</p>
  <h1 class="lt">${l.title}</h1>
  <div class="goals"><h4>Sau bài này bạn sẽ</h4><ul>${l.goals.map(g=>`<li>${g}</li>`).join("")}</ul></div>
  <div class="body">${l.body}</div>
  <section class="blk"><h2>Thuật ngữ cần nhớ <small>${l.terms.length} từ</small></h2><dl class="terms">${terms}</dl></section>
  <section class="blk"><h2>Thực hành 5 phút</h2><p class="practice">${l.practice}</p></section>
  <section class="blk"><h2>Tự kiểm tra <small>${l.quiz.length} câu</small></h2><ol class="qlist">${qs}</ol>
    ${answered===l.quiz.length?`<p class="sc">Bạn trả lời đúng ${correct}/${l.quiz.length} câu.${correct<l.quiz.length?" Đọc lại phần giải thích trước khi sang bài mới.":" Rất tốt."}</p>`:""}</section>
  <div class="finish">
    <span>${prev?`<button class="btn btn-ghost" data-act="open-lesson" data-l="${prev.id}">← Bài ${prev.id}</button>`:""}</span>
    <span style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">
      ${done?`<span class="done-tag">✓ Đã hoàn thành</span>`:""}
      <button class="btn btn-signal" data-act="complete-lesson">${done?(nextSess?"Sang "+nextLabel+" →":"Về lộ trình"):"Hoàn thành bài"+(nextSess?" và sang "+nextLabel+" →":"")}</button>
    </span>
  </div>
  </div>`;
}
function startTimer(){
  const t0 = Date.now() - (V.elapsed||0);
  const upd = ()=>{
    const s = Math.floor((Date.now()-t0)/1000); V.elapsed = s*1000;
    const el = document.getElementById("tclock"), f = document.getElementById("tfill");
    if(!el){ clearInterval(tick); tick=null; return; }
    el.textContent = "Đã học " + String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");
    f.style.width = Math.min(100, s/1800*100)+"%";
  };
  upd(); tick = setInterval(upd, 1000);
}

/* ---------- quiz item ---------- */
function qItem(q,i,mode){
  const lesson = mode==="lq";
  const chosen = lesson ? V.ans[i] : V.ans[i];
  const reveal = lesson ? chosen!=null : V.submitted;
  const opts = q.o.map((o,j)=>{
    let cls = "opt";
    if(reveal){ cls += " locked"; if(j===q.a) cls += " right"; else if(j===chosen) cls += " wrong"; }
    else if(j===chosen) cls += " sel";
    return `<button class="${cls}" data-act="${lesson?"lq-pick":"t-pick"}" data-q="${i}" data-o="${j}" ${reveal?'aria-disabled="true"':""}><span class="k">${LETTERS[j]}</span><span>${o}</span></button>`;
  }).join("");
  let exp = "";
  if(reveal){
    const ok = chosen===q.a;
    exp = `<p class="exp"><b>${chosen==null?"Chưa trả lời.":ok?"Đúng.":"Chưa đúng."}</b> Đáp án ${LETTERS[q.a]}. ${q.e}</p>`;
  }
  return `<li class="q"><p class="qt"><span class="n">${String(i+1).padStart(2,"0")}</span><span>${q.q}</span></p><div class="opts">${opts}</div>${exp}</li>`;
}

/* ---------- tests ---------- */
function buildFinal(){
  const pool = [];
  COURSE.forEach(m=>{ m.test.forEach(q=>pool.push(q)); m.lessons.forEach(l=>l.quiz.forEach(q=>pool.push(q))); });
  // take ~3 per module evenly + fill randomly
  const byMod = COURSE.map(m=>[...m.test, ...m.lessons.flatMap(l=>l.quiz)]);
  const pick = [];
  byMod.forEach(arr=>{ shuffle(arr.slice()).slice(0,3).forEach(q=>pick.push(q)); });
  const rest = shuffle(pool.filter(q=>!pick.includes(q)));
  while(pick.length<20) pick.push(rest.pop());
  return shuffle(pick).map(shuffleQ);
}
function shuffleQ(q){ const idx = shuffle([...q.o.keys()]); return {q:q.q, o:idx.map(i=>q.o[i]), a:idx.indexOf(q.a), e:q.e}; }
function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function testHTML(){
  const isF = V.name==="final";
  const m = isF ? null : modById(V.m);
  const qs = V.qs;
  const n = qs.length, answered = Object.keys(V.ans).length;
  let head = "";
  if(V.submitted){
    const correct = qs.filter((q,i)=>V.ans[i]===q.a).length;
    const pct = Math.round(correct/n*100), pass = pct>=PASS;
    const nextI = nextIdx();
    head = `<section class="result ${pass?"pass":"fail"}"><div class="big">${pct}%</div>
      <div><h2>${pass?"Đạt":"Chưa đạt"} · ${correct}/${n} câu đúng</h2><p>${pass?(isF?"Chúc mừng bạn đã hoàn thành khoá Logistics Từ Số 0.":"Bạn đã qua môn này. Xem lại các câu sai bên dưới trước khi sang môn mới."):"Cần từ "+PASS+"% để qua. Đọc kỹ giải thích các câu sai, ôn lại bài liên quan rồi làm lại."}</p></div>
      <div class="acts">${pass&&nextI>=0?`<button class="btn btn-signal" data-act="start-next">Sang buổi tiếp theo →</button>`:""}
      <button class="btn ${pass?"btn-ghost":"btn-signal"}" data-act="t-retry">Làm lại${isF?" (đề mới)":""}</button>
      <button class="btn btn-ghost" data-act="${isF?"home":"open-mod"}" ${m?`data-m="${m.id}"`:""}>${isF?"Về lộ trình":"Về Môn "+m.no}</button></div></section>`;
    if(isF && pass) head = certHTML() + head;
  } else if(isF && S.final && S.final.best>=PASS){
    head = certHTML();
  }
  return `<div class="read">
  <div class="lbar"><button class="back" data-act="${isF?"home":"open-mod"}" ${m?`data-m="${m.id}"`:""}>← ${isF?"Lộ trình":"Môn "+m.no+" · "+m.title}</button><span class="timer">${n} câu</span></div>
  ${head}
  <p class="eyebrow">${isF?"Thi cuối khoá · 20 câu từ 6 môn":"Kiểm tra cuối môn"} · đạt từ ${PASS}%</p>
  <h1 class="lt">${isF?"Thi cuối khoá":"Kiểm tra Môn "+m.no+": "+m.title}</h1>
  ${V.submitted?"":`<p style="color:var(--muted);margin-top:-6px">Làm bài không xem lại tài liệu để biết mình thực sự nhớ gì. Chọn một đáp án cho mỗi câu, rồi bấm Nộp bài.</p>`}
  <ol class="qlist">${qs.map((q,i)=>qItem(q,i,"t")).join("")}</ol>
  ${V.submitted?"":`<div class="submitbar"><span>Đã trả lời ${answered}/${n}</span><button class="btn btn-signal" data-act="t-submit" ${answered<n?"disabled":""}>Nộp bài</button></div>`}
  </div>`;
}
function certHTML(){
  const d = (S.final&&S.final.date) || today();
  const [y,mo,da] = d.split("-");
  return `<section class="cert"><p class="eyebrow">Chứng nhận hoàn thành</p><h2>Logistics Từ Số 0</h2>
    <label for="cname" class="eyebrow" style="display:block;margin:12px 0 4px">Trao cho</label>
    <input id="cname" type="text" placeholder="Nhập tên của bạn" value="${(S.name||"").replace(/"/g,"&quot;")}">
    <p>Đã hoàn thành 6 môn, 24 bài học và bài thi cuối khoá với điểm cao nhất <b>${S.final.best}%</b> · ngày ${da}/${mo}/${y}</p></section>`;
}

/* ---------- events ---------- */
app.addEventListener("input", e=>{ if(e.target.id==="cname"){ S.name = e.target.value; save(); } });
app.addEventListener("click", e=>{
  const b = e.target.closest("[data-act]"); if(!b) return;
  const a = b.dataset.act;
  if(a==="home") return go({name:"home"});
  if(a==="open-mod") return go({name:"mod", m:b.dataset.m});
  if(a==="open-lesson") return go({name:"lesson", l:b.dataset.l, ans:{}});
  if(a==="open-test") return go({name:"test", m:b.dataset.m, qs:modById(b.dataset.m).test.map(shuffleQ), ans:{}, submitted:false});
  if(a==="open-final") return go({name:"final", qs:buildFinal(), ans:{}, submitted:false});
  if(a==="start-next"){
    const i = nextIdx(); if(i<0) return go({name:"home"});
    const s = SESSIONS[i];
    if(s.type==="L") return go({name:"lesson", l:s.l.id, ans:{}});
    if(s.type==="T") return go({name:"test", m:s.m.id, qs:s.m.test.map(shuffleQ), ans:{}, submitted:false});
    return go({name:"final", qs:buildFinal(), ans:{}, submitted:false});
  }
  if(a==="lq-pick"){
    const i = +b.dataset.q; if(V.ans[i]!=null) return;
    V.ans[i] = +b.dataset.o;
    const {l} = findLesson(V.l);
    if(Object.keys(V.ans).length===l.quiz.length){ S.lq[l.id] = Object.entries(V.ans).filter(([k,o])=>V.qz[k].a===o).length; save(); }
    const y = window.scrollY; render(); window.scrollTo(0,y); return;
  }
  if(a==="complete-lesson"){
    const {l} = findLesson(V.l);
    if(!S.done[l.id]){ S.done[l.id] = true; logSession("L:"+l.id); }
    const k = SESSIONS.findIndex(s=>s.key==="L:"+l.id), ns = SESSIONS[k+1];
    if(!ns) return go({name:"home"});
    if(ns.type==="L") return go({name:"lesson", l:ns.l.id, ans:{}});
    if(ns.type==="T") return go({name:"test", m:ns.m.id, qs:ns.m.test.map(shuffleQ), ans:{}, submitted:false});
    return go({name:"final", qs:buildFinal(), ans:{}, submitted:false});
  }
  if(a==="t-pick"){
    if(V.submitted) return;
    V.ans[+b.dataset.q] = +b.dataset.o;
    const y = window.scrollY; render(); window.scrollTo(0,y); return;
  }
  if(a==="t-submit"){
    const n = V.qs.length; if(Object.keys(V.ans).length<n) return;
    const pct = Math.round(V.qs.filter((q,i)=>V.ans[i]===q.a).length/n*100);
    if(V.name==="final"){
      const prev = S.final || {best:-1};
      S.final = {best:Math.max(prev.best,pct), last:pct, date: pct>=PASS && prev.best<PASS ? today() : (prev.date||null)};
      if(pct>=PASS) logSession("F");
    } else {
      const prev = S.tests[V.m] || {best:-1};
      S.tests[V.m] = {best:Math.max(prev.best,pct), last:pct};
      if(pct>=PASS) logSession("T:"+V.m);
    }
    save(); V.submitted = true; render(); window.scrollTo(0,0); return;
  }
  if(a==="t-retry"){
    if(V.name==="final") return go({name:"final", qs:buildFinal(), ans:{}, submitted:false});
    return go({name:"test", m:V.m, qs:modById(V.m).test.map(shuffleQ), ans:{}, submitted:false});
  }
  if(a==="reset-ask"){ document.getElementById("reset").innerHTML = resetHTML(true); return; }
  if(a==="reset-no"){ document.getElementById("reset").innerHTML = resetHTML(false); return; }
  if(a==="reset-yes"){ S = blank(); save(); return go({name:"home"}); }
});
render();
