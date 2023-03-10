import { useEffect, useRef, useState } from 'react'
import "./index.css"

const TestInput = () => {

  const contentRef = useRef()
  const initFirstEle = () => {
    let fragment = document.createDocumentFragment();
    const bSpaceNode = document.createTextNode("\u200B");
    fragment.appendChild(bSpaceNode);
    insertHTMLNode(fragment)
  }

  const modifyContent = (command, value) => {
    document.execCommand(command, false, value);
  }


  useEffect(() => {
    modifyContent("defaultParagraphSeparator", "p");
    contentRef.current.focus()
    initFirstEle()
   
  }, [])

  const append = (text) => {
    let fragment = document.createDocumentFragment();
    let span = document.createElement("span");
    span.classList.add("tag");
    span.innerText = text;
    span.setAttribute("contenteditable", "false");      
    fragment.appendChild(span);

    const bSpaceNode = document.createTextNode("\u200B");
    fragment.appendChild(bSpaceNode)

    insertHTMLNode(fragment)
  }

  const insertHTMLNode = (node,) => {
    // 如果有选中的内容，就替换掉
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    // // 删除原有内容
    range.deleteContents();
    range.insertNode(node);
    // //  移动光标到下一个输入点
    selection.collapseToEnd();
  }

  const clickInsert = (item) => {
    // setList([...list, item])
    const { value } = item
    append(value)
  }

  const moveEnd = () => {

  }



  const getValue = () => {
    const range = document.createRange();
    range.selectNode(contentRef.current)
    const str = range.toString()
    alert("str: " + str)
  }

  return <div>
    <div
      ref={contentRef}
      className="edit"
      id="inputContent"
      contentEditable
      placeholder="请在这输入内容"
    >
    </div>
    <div className="btn-list">
      <button onClick={() => clickInsert({ name: '指标1', value: 'indicator1' })}>指标1</button>
      <button onClick={() => clickInsert({ name: '指标2', value: 'indicator2' })}>指标2</button>
      <button onClick={() => clickInsert({ name: '指标3', value: 'indicator3' })}>指标3</button>
      <button onClick={() => clickInsert({ name: '+', value: '+' })}>+</button>
      <button onClick={() => clickInsert({ name: '-', value: '-' })}>-</button>
      <button onClick={() => clickInsert({ name: '*', value: '*' })}>*</button>
      <button onClick={() => clickInsert({ name: '/', value: '/' })}>/</button>
      <button onClick={() => clickInsert({ name: '(', value: '(' })}>(</button>
      <button onClick={() => clickInsert({ name: ')', value: ')' })}>)</button>
    </div >
    <div className="btn-list" >
      <button onClick={() => moveEnd()}>move end</button>
      <button onClick={() => getValue()}>get value</button>
    </div>
  </div >
}


export default TestInput
