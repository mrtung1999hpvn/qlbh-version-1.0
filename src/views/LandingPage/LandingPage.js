import React,{Fragment} from 'react'
import Header from '../../components/Web-LandingPage/Header/Header'
import Body from '../../components/Web-LandingPage/Body/Body'
import Footer from '../../components/Web-LandingPage/Footer/Footer'
function LandingPage({onLogin}) {
    const _onLogin = (e)=>{
        onLogin(e)
    }
    return (
        <Fragment>
            <Header></Header>
            <Body onLogin={_onLogin}></Body>
            <Footer></Footer>
        </Fragment>
    )
}

export default LandingPage
