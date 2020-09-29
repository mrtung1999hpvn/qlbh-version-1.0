import React , {Fragment} from 'react'

function ThanhVienPhatTrien() {
    return (
        <Fragment>
            <div className="site-section" id="teachers-section">
    <div className="container">
      <div className="row mb-5 justify-content-center">
        <div className="col-lg-7 mb-5 text-center" data-aos="fade-up" data-aos-delay>
          <h2 className="section-title">Thành viên phát triển</h2>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque! Doloribus sunt non aut reiciendis, vel recusandae obcaecati hic dicta repudiandae in quas quibusdam ullam, illum sed veniam!</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={100}>
          <div className="teacher text-center">
            <img src="images/ThanhVienPhatTrien/MinhHai.jpg" alt="Image" className="img-fluid w-50 rounded-circle mx-auto mb-4" />
            <div className="py-2">
              <h3 className="text-black">Minh Hải</h3>
              <p className="position">Game Developer / Web Developer</p>
              <p> Xây dựng Front-end <br></br>Về giao diện người dùng (khách hàng) web CloudImage</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={200}>
          <div className="teacher text-center">
            <img src="images/ThanhVienPhatTrien/ThanhTung.jpg" alt="Image" className="img-fluid w-50 rounded-circle mx-auto mb-4" />
            <div className="py-2">
              <h3 className="text-black">Thanh Tùng</h3>
              <p className="position">Senior Web Developer</p>
              <p>Xây dựng Back-End<br></br>Định hướng phát triển dự án hỗ trợ TeamWork Front End và Back-End</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay={300}>
          <div className="teacher text-center">
            <img src="images/ThanhVienPhatTrien/HongMan.jpg" alt="Image" className="img-fluid w-50 rounded-circle mx-auto mb-4" />
            <div className="py-2">
              <h3 className="text-black">Hồng Mận</h3>
              <p className="position">Junior Tester / Web Developer</p>
              <p>Hỗ trợ kiểm thử phần mềm<br></br>Đưa ra những phân tích dữ liệu dưới database</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </Fragment>
    )
}

export default ThanhVienPhatTrien
