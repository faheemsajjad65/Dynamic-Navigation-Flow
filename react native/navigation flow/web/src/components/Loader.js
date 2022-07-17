import React from 'react'

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from  'react-loader-spinner'

export default function Loader({color}) {
  return (
    <TailSpin color={color} height={60} width={60} />
  )
}
