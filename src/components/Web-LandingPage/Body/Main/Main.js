import React,{Fragment,useState} from 'react'
import DangNhap from './DangNhap'
import DangKy from './DangKy'
function Main({onLogin}) {
    const [OnCheck,SetOnCheck] = useState(false);
    const OnClickDangKy = ()=>{
        SetOnCheck(!OnCheck)
    }
    const _onLogin = (e)=>{
        onLogin(e)
    }
    const ChangeForm= ()=>{
        if(!OnCheck)
        {
            return(<DangNhap onLogin={_onLogin}></DangNhap>)
        }
        else{
            return(<DangKy></DangKy>)
        }
    }
    return (
        <Fragment>
              <div className="intro-section" id="home-section">
    <div className="slide-1" style={{backgroundImage: 'url("images/hero_1.jpg")'}} data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4">
                <h1 data-aos="fade-up" data-aos-delay={100}>Lưu trữ đám mây hình ảnh</h1>
                <p className="mb-4" data-aos="fade-up" data-aos-delay={200}>
                Tải hình ảnh lên CloudImage. Bắt đầu với bộ nhớ lên tới 15GB. Miễn phí.
                </p>
    <p data-aos="fade-up" data-aos-delay={300} onClick={OnClickDangKy}><span className="btn btn-primary py-3 px-5 btn-pill" style={{background:'#7971ea',color:'white'}}>{!OnCheck ? 'Đăng ký ngay' : 'Đăng nhập'}</span></p>
              </div>
              <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay={500}>
                  {ChangeForm()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </Fragment>
    )
}

export default Main
