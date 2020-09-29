import React,{Fragment} from 'react'

function DangKy() {
    return (
        <Fragment>
            <form action method="post" className="form-box">
                  <h3 className="h4 text-black mb-4">Đăng ký tài khoản</h3>
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email Addresss" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control" placeholder="Password" />
                  </div>
                  <div className="form-group mb-4">
                    <input type="password" className="form-control" placeholder="Re-type Password" />
                  </div>
                  <div className="form-group">
                    <input type="submit" className="btn btn-primary btn-pill" defaultValue="Đăng ký" />
                  </div>
                </form>
        </Fragment>
    )
}

export default DangKy
