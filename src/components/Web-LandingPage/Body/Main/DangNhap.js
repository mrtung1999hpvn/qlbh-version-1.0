import React,{Fragment} from 'react'

function DangNhap({onLogin}) {
    return (
        <Fragment>
            <form action method="post" className="form-box">
                  <h3 className="h4 text-black mb-4">Đăng nhập tài khoản</h3>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Tài khoản" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Mật khẩu" />
                  </div>
                  {/* <div className="form-group mb-4">
                    <input type="password" className="form-control" placeholder="Re-type Password" />
                  </div> */}
                  <div className="form-group">
                    <input type="button" className="btn btn-primary btn-pill" defaultValue="Đăng nhập" onClick={async()=>onLogin(true)}/>
                  </div>
                </form>
        </Fragment>
    )
}

export default DangNhap
