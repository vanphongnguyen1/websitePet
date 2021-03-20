import { useMediaQuery } from 'react-responsive'

export const TabletHiden = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 991 })
  return !isTablet ? children : null
}
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 991 })
  return isTablet ? children : null
}

export const MobileHiden = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return !isMobile ? children : null
}
export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

export const MobileSmallHiden = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 575 })
  return !isMobile ? children : null
}
export const MobileSmall = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 575 })
  return isMobile ? children : null
}
