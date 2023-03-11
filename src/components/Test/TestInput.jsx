import { useEffect, useRef, useState } from 'react'
import { useClickAway } from 'ahooks';
import "./index.css"

const TestInput = () => {

  const contentRef = useRef()
  const editRef = useRef()
  const [disabled, setDisabled] = useState(false)

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

    contentRef.current.addEventListener('focus', onFocus);

    () => {
      contentRef.current.removeEventListener('focus', onFocus)
    }

  }, [])

  // 当点击了编辑器外部 编辑器按钮disabled
  useClickAway(() => {
    setDisabled(true)
  }, editRef);

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

  const onBlur = () => {
    console.log("onBlur")
  }

  const onFocus = () => {
    setDisabled(false)
  }

  return <div ref={editRef}>
    <div
      ref={contentRef}
      className="edit"
      id="inputContent"
      contentEditable
      placeholder="请在这输入内容"
    // onBlur={onBlur}
    // onFocus={onFocus}
    >
    </div>
    <div className="btn-list" >
      <button disabled={disabled} onClick={() => clickInsert({ name: '指标1', value: 'indicator1' })}>指标1</button>
      <button disabled={disabled} onClick={() => clickInsert({ name: '指标2', value: 'indicator2' })}>指标2</button>
      <button disabled={disabled} onClick={() => clickInsert({ name: '指标3', value: 'indicator3' })}>指标3</button>
      <button disabled={disabled} onClick={() => clickInsert({ name: '+', value: '+' })}>+</button>
      <button disabled={disabled} onClick={() => clickInsert({ name: '-', value: '-' })}>-</button>
      <button disabled={disabled} onClick={() => clickInsert({ name: '*', value: '*' })}>*</button>
      <button disabled={disabled} onClick={() => clickInsert({ name: '/', value: '/' })}>/</button>
      <button disabled={disabled} onClick={() => clickInsert({ name: '(', value: '(' })}>(</button>
      <button disabled={disabled} onClick={() => clickInsert({ name: ')', value: ')' })}>)</button>
    </div >
    <div className="btn-list" >
      <button disabled={disabled} onClick={() => moveEnd()}>move end</button>
      <button disabled={disabled} onClick={() => getValue()}>get value</button>
    </div>
  </div >
}


export default TestInput
