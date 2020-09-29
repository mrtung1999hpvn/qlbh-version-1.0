import React,{Fragment} from 'react'
import ThongTin from './Menubar/ThongTin'
import GoiDichVu from './Menubar/GoiDichVu'
import ThanhVienPhatTrien from './Menubar/ThanhVienPhatTrien'
import LienHe from './Menubar/LienHe'
import Main from './Main/Main'
function Body({onLogin}) {
  const _onLogin= (e)=>{
    onLogin(e)
  }
    return (
        <Fragment>
        
      <Main onLogin={_onLogin}></Main>

      {/* Thông tin */}
      <ThongTin></ThongTin>
      {/* Thông tin */}

      {/* Gói dịch vụ */}
      <GoiDichVu></GoiDichVu>
      {/* Gói dịch vụ */}

      {/* Thành viên phát triển */}
      <ThanhVienPhatTrien></ThanhVienPhatTrien>
      {/* Thành viên phát triển */}
  {/* <div className="site-section bg-image overlay" style={{backgroundImage: 'url("images/hero_1.jpg")'}}>
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8 text-center testimony">
          <img src="images/person_4.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
          <h3 className="mb-4">Jerome Jensen</h3>
          <blockquote>
            <p>“ Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem soluta sit eius necessitatibus voluptate excepturi beatae ad eveniet sapiente impedit quae modi quo provident odit molestias! Rem reprehenderit assumenda ”</p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section pb-0">
    <div className="future-blobs">
      <div className="blob_2">
        <img src="images/blob_2.svg" alt="Image" />
      </div>
      <div className="blob_1">
        <img src="images/blob_1.svg" alt="Image" />
      </div>
    </div>
    <div className="container">
      <div className="row mb-5 justify-content-center" data-aos="fade-up" data-aos-delay>
        <div className="col-lg-7 text-center">
          <h2 className="section-title">Why Choose Us</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 ml-auto align-self-start" data-aos="fade-up" data-aos-delay={100}>
          <div className="p-4 rounded bg-white why-choose-us-box">
            <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
              <div className="mr-3"><span className="custom-icon-inner"><span className="icon icon-graduation-cap" /></span></div>
              <div><h3 className="m-0">22,931 Yearly Graduates</h3></div>
            </div>
            <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
              <div className="mr-3"><span className="custom-icon-inner"><span className="icon icon-university" /></span></div>
              <div><h3 className="m-0">150 Universities Worldwide</h3></div>
            </div>
            <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
              <div className="mr-3"><span className="custom-icon-inner"><span className="icon icon-graduation-cap" /></span></div>
              <div><h3 className="m-0">Top Professionals in The World</h3></div>
            </div>
            <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
              <div className="mr-3"><span className="custom-icon-inner"><span className="icon icon-university" /></span></div>
              <div><h3 className="m-0">Expand Your Knowledge</h3></div>
            </div>
            <div className="d-flex align-items-center custom-icon-wrap custom-icon-light mb-3">
              <div className="mr-3"><span className="custom-icon-inner"><span className="icon icon-graduation-cap" /></span></div>
              <div><h3 className="m-0">Best Online Teaching Assistant Courses</h3></div>
            </div>
            <div className="d-flex align-items-center custom-icon-wrap custom-icon-light">
              <div className="mr-3"><span className="custom-icon-inner"><span className="icon icon-university" /></span></div>
              <div><h3 className="m-0">Best Teachers</h3></div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 align-self-end" data-aos="fade-left" data-aos-delay={200}>
          <img src="images/person_transparent.png" alt="Image" className="img-fluid" />
        </div>
      </div>
    </div>
  </div> */}


{/* Liên hệ */}
<LienHe></LienHe>
{/* Liên hệ */}
        </Fragment>
    )
}

export default Body
