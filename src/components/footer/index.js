import React from 'react'
import { DATACONTACT, SUPORT, DATANAV} from '../dataConst'
import Logo from '../reuse/Logo'
import RegisFooter from './RegisFooter'
import { useHistory } from 'react-router-dom'
import './style.scss'

const Footer = () => {
  const history = useHistory()

  const handMenuFooter = url => {
    history.push(url)
  }

  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-9 col-12">
              <div className="footer__box">
                <div className="footer__box-logo">
                  <Logo />
                </div>
                  <ul className="footer__list">
                    {
                      DATACONTACT.map((item, index) => {
                        return (
                          <li className="footer__item" key={index} >
                            <span className={`footer__item--icon ${item.iconHeader}`} />
                            {item.text}
                          </li>
                        )
                      })
                    }
                  </ul>
              </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-6">
              <div className="footer__box">
                <h3 className="footer__title">MENU</h3>
                <ul className="footer__list-contact">
                  {
                    DATANAV.map((ele, i) => {
                      if ( ele.title === SUPORT) return '';

                      return (
                        <li className="footer__item" onClick={() => handMenuFooter(ele.to)} key={i}>
                          <p className="footer__link">{ele.title}</p>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>

            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="footer__box">
                <h3 className="footer__title">{SUPORT}</h3>
                <ul className="footer__list-contact">
                  {
                    DATANAV.map(item => {
                      if ( item.title === SUPORT) {
                        return item.child.map((ele, i) => {
                          return (
                            <li className="footer__item" key={i}>
                              <p className="footer__link">{ele.title}</p>
                            </li>
                          )
                        })
                      }
                      return ''
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
              <RegisFooter />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
