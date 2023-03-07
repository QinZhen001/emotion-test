// https://emotion.sh/docs/babel-macros
import styled from "@emotion/styled";


const ObjectStyles = () => {

  const Child = styled('div')({
    color: 'red'
  })

  console.log('Child', Child)

  const Parent = styled('div')({
    [Child]: {
      color: 'blue'
    }
  })

  return <div>
    <Parent>
      <Child>blue</Child>
    </Parent>
    <Child>red</Child>
  </div>
}


export default ObjectStyles
