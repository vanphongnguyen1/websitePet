import React from 'react'
import { Breadcrumb } from 'antd'
import { NavLink } from 'react-router-dom'
import './pageTitle.scss'

const PageTitle = (props) => {
  const { match, params } = props

  return (
    <div className="page-title">
      <div className="container">
        <Breadcrumb>
          <Breadcrumb.Item>
            <NavLink to="/" className="page-title--text">
              Trang chủ
            </NavLink>
          </Breadcrumb.Item>

          {params && (
            <>
              <Breadcrumb.Item>
                <NavLink to={`/${params.group}`} className="page-title--text">
                  {params.group}
                </NavLink>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <NavLink to={`/${params.url}`} className="page-title--text">
                  {params.url}
                </NavLink>
              </Breadcrumb.Item>
            </>
          )}

          {match && (
            <Breadcrumb.Item>
              <NavLink to={match.url} className="page-title--text">
                {match.url.slice(1)}
              </NavLink>
            </Breadcrumb.Item>
          )}
        </Breadcrumb>
      </div>
    </div>
  )
}

export default PageTitle
