import { useEffect } from "react"
import { boxCss } from "../css/index"

const AttachingProps = (props) => {


  useEffect(() => {
    console.log("AttachingProps props", props)
  }, [])


  return <div css={boxCss}>
    AttachingProps
    <div>
      <input
        type="password"
        css={{
          backgroundColor: "red",
          display: "block"
        }}
        {...props}
      />
    </div>
  </div>
}


export default AttachingProps
