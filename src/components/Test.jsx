import protoRoot from "../proto/proto.js";
// import { css } from '@emotion/css'
import { css } from '@emotion/react'

import { useEffect } from "react";

// 708
// [196, 255, 252, 128, 128, 253, 128, 128, 252, 128, 128, 253, 128, 128]
// [194, 255, 252, 128, 128, 253, 128, 128]
let arr = [223, 255, 252, 206, 69, 253, 128, 128, 252, 69, 196, 253, 128, 128, 252, 69, 196, 253, 128, 128, 252, 148, 47, 253, 128, 128, 252, 148, 47, 253, 128, 128, 252, 128, 128, 253, 128, 128, 252, 128, 128, 253, 128, 128, 252, 128, 128, 253, 128, 128, 252, 128, 128, 253, 128, 128, 252, 128, 128, 253, 128, 128, 252, 128, 128, 253, 128, 128, 252, 128, 128, 253, 128, 128, 252, 128, 128, 253, 128, 128, 252, 128, 128, 253, 128, 128, 252, 128, 128, 253, 128, 128, 252, 128, 128]

const color = 'white'
// let arr = [6, 100, 47, 32, 192, 196, 7, 48, 235, 163, 192, 141, 233, 48, 72, 234, 3, 82, 28, 10, 12, 229, 142, 187, 229, 190, 136, 233, 171, 152, 227, 128, 130, 24, 142, 7, 32, 1, 41, 0, 0, 0, 224, 55, 163, 216, 63, 96, 142, 7, 128]


// CEA-708
// [194, 255, 252, 16, 82, 253, 128, 128]
// payloadType: 4
// pts: 39.942233333333334
// type: 3


const test = () => {
  // const arr = [32, 220, 165, 132, 228, 1, 48, 172, 228, 249, 139, 233, 48, 72, 172, 12, 82, 25, 10, 9, 229, 151, 175, 229, 151, 175, 227, 128, 130, 24, 178, 5, 32, 1, 41, 0, 0, 0, 160, 148, 90, 216, 63, 96, 178, 5]


  // const num = arr[2]
  // arr = arr.slice(3, 3 + num)
  // // console.log(num, arr.length)

  // // console.log(arr.length)

  // const uint8Array = Uint8Array.from(arr)
  // let textstream = protoRoot.lookup("Text").decode(uint8Array);
  // console.log(111, textstream)


  const enc = new TextDecoder(); // always utf-8
  // const data = enc.encode("Hello World");

  arr = Uint8Array.from(arr)
  const data = enc.decode(arr)
  console.log(data)
}


// test()

const Test = () => {
  //   return <div
  //     className={css`
  //   padding: 32px;
  //   background-color: hotpink;
  //   font-size: 24px;
  //   border-radius: 4px;
  //   color: red;
  //   &:hover {
  //     color: ${color};
  //   }
  // `}
  //   >
  //     <h1>Test</h1>
  //   </div>

  // return <div css={
  //   css`
  //   padding: 32px;
  //   background-color: hotpink;
  //   font-size: 24px;
  //   border-radius: 4px;
  //   color: red;
  //   &:hover {
  //     color: ${color};
  //   }`
  // }>
  //   <h1>Test 1111</h1>
  // </div>



  return <div css={{
    padding: "32px",
    backgroundColor: 'hotpink',
  }}>
    <h1>Test 1111</h1>
  </div >
}


export default Test
