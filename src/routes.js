import React from 'react'
import Main from './components/main'
import PageCart from './components/Cart/pageCart'
import ShowTop from './components/main/ProductTop/ShowTop'
import ShowDogs from './components/main/ProductDogs/ShowDogs'
import ShowMews from './components/main/ProductMews/ShowMews'
import ShowAccess from './components/main/ProductAccess/ShowAccess'
import ShowPetOther from './components/main/PetsOther/ShowPetOther'
import RootInfoProduct from './components/Products/InfoProduct/index'
import Page404 from './components/page404'

export const routes = [
  {
    path: '/',
    exact: true,
    main: ({ match }) => <Main match={match}/>
  },
  {
    path: '/cart',
    exact: true,
    main: ({ match }) => <PageCart match={match}/>
  },
  {
    path: '/product-hot',
    exact: true,
    main: ({ match }) => <ShowTop match={match}/>
  },
  {
    path: '/dogs',
    exact: true,
    main: ({match}) => <ShowDogs match={match}/>
  },
  {
    path: '/cats',
    exact: true,
    main: ({ match }) => <ShowMews match={match}/>
  },
  {
    path: '/accessories',
    exact: true,
    main: ({ match }) => <ShowAccess match={match}/>
  },
  {
    path: '/pet-other',
    exact: true,
    main: ({ match }) => <ShowPetOther match={match}/>
  },
  {
    path: '/:group/:lineage/:url',
    exact: true,
    auth: true,
    roles: [],
    main: ({match}) => <RootInfoProduct match={match}/>
  },

  {
    path: '*',
    main: ({ match }) => <Page404 match={match}/>
  },
]
