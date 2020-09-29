import React ,{Fragment}from 'react'

function LienHe() {
    return (
        <Fragment>
              <div className="site-section bg-light" id="contact-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7">
          <h2 className="section-title mb-3">Liên hệ với chúng tôi</h2>
          <p className="mb-5">Mọi thông tin góp ý bên dưới đều gửi về đội ngũ phát triển phần mềm</p>
          <form method="post" data-aos="fade">
            <div className="form-group row">
              <div className="col-md-6 mb-3 mb-lg-0">
                <input type="text" className="form-control" placeholder="Họ" />
              </div>
              <div className="col-md-6">
                <input type="text" className="form-control" placeholder="Tên" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-12">
                <input type="text" className="form-control" placeholder="Tiêu đề" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-12">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-12">
                <textarea className="form-control" id cols={30} rows={10} placeholder="Viết nội dung tại đây . . ." defaultValue={""} />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <input type="button" className="btn btn-primary py-3 px-5 btn-block btn-pill" defaultValue="Gửi" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
        </Fragment>
    )
}

export default LienHe
