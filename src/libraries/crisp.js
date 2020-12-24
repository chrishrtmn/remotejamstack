import React from 'react'

class Crisp extends React.Component {
  componentDidMount() {
    window.$crisp = []
    window.CRISP_WEBSITE_ID = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID
    ;(function () {
      var d = document
      var s = d.createElement('script')

      s.src = 'https://client.crisp.chat/l.js'
      s.async = 1
      d.getElementsByTagName('head')[0].appendChild(s)
    })()
  }

  render() {
    return null
  }
}
export default Crisp
