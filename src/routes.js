import React from 'react'
import Main from './components/main'
import PageCart from './components/Cart/pageCart'
import ShowTop from './components/main/ProductTop/ShowTop'
import ShowDogs from './components/main/ProductDogs/ShowDogs'
import ShowMews from './components/main/ProductMews/ShowMews'
import ShowAccess from './components/main/ProductAccess/ShowAccess'
import ShowPetOther from './components/main/PetsOther/ShowPetOther'
import RootInfoProduct from './components/Products/InfoProduct/index'
import News from './components/main/New/NewPet'
import NewPetAll from './components/main/New/NewPet/NewPetAll'
import PostNew from './components/main/New/NewPet/PostNew'
import ServicePet from './components/main/ServicePet'
import ShowGroupService from './components/main/ServicePet/ShowGroupService'
import PageSearchProduct from './components/main/PageSearchProduct'
import SettingUser from './components/SettingUser'
import Page404 from './components/page404'

export const routes = [
  {
    path: '/',
    exact: true,
    main: ({ match }) => <Main match={match}/>
  },
  {
    path: '/account',
    exact: true,
    main: ({ match }) => <SettingUser match={match}/>
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
    path: '/phu-kien',
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
    path: '/news',
    exact: true,
    auth: true,
    roles: [],
    main: ({match}) => <News match={match}/>
  },

  {
    path: '/news/:url',
    exact: true,
    auth: true,
    roles: [],
    main: ({match}) => <NewPetAll match={match}/>
  },

  {
    path: '/tin-tuc/:url',
    exact: true,
    auth: true,
    roles: [],
    main: ({match}) => <PostNew match={match}/>
  },

  {
    path: '/dich-vu',
    exact: true,
    auth: true,
    roles: [],
    main: ({match}) => <ServicePet match={match}/>
  },
  {
    path: '/dich-vu/:url',
    exact: true,
    auth: true,
    roles: [],
    main: ({match}) => <ShowGroupService match={match}/>
  },
  {
    path: '/tim-kiem/:url',
    exact: true,
    auth: true,
    roles: [],
    main: ({match}) => <PageSearchProduct match={match}/>
  },

  {
    path: '*',
    main: ({ match }) => <Page404 match={match}/>
  },
]
