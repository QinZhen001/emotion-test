// import ReactDOM = require('react-dom');
import { useEffect, useRef, useState } from 'react'
import "./index.css"


let endOffset = 0



// range.setStart(startNode,startOffset);
// range.setEnd(endNode,endOffset);


const TestInput = () => {

  const [list, setList] = useState([])
  const contentRef = useRef()


  const initFirstEle = () => {
    let fragment = document.createDocumentFragment();
    let blank_span = document.createElement("span");
    fragment.appendChild(blank_span);
    insertHTMLNode(fragment)
  }

  useEffect(() => {
    contentRef.current.focus()
    initFirstEle()
  }, [])

  const append = (text) => {
    let fragment = document.createDocumentFragment();
    const div = document.createElement('div')
    div.classList = ['tag']
    div.innerText = text
    div.setAttribute("contenteditable", "false");
    fragment.appendChild(div);
    // 解决方案是后面加一个空格
    // 创建一个空标签隔开
    let blank_span = document.createElement("span");
    fragment.appendChild(blank_span);

    insertHTMLNode(fragment)
  }

  const insertHTMLNode = (node) => {
    // 如果有选中的内容，就替换掉
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    // 删除原有内容
    range.deleteContents();
    range.insertNode(node);
    //  移动光标到下一个输入点
    selection.collapseToEnd();
  }

  const clickInsert = (item) => {
    // setList([...list, item])
    const { value } = item
    append(value)
  }

  const moveEnd = () => {


    // let sel = window.getSelection(),
    //   rang = document.createRange(),//创建一个rang对象
    //   firstChild = contentRef.current.firstChild,
    //   lastChild = contentRef.current.lastChild,
    //   innerLen = contentRef.current.innerText.length;

    // console.log("endOffset", endOffset)
    // console.log("firstChild", firstChild)
    // console.log("lastChild", lastChild)

    // rang.setStart(firstChild, 0);
    // rang.setEnd(lastChild, 0);
    // rang.collapse(false);

    // sel.removeAllRanges();//移除选中区域的range对象
    // sel.addRange(rang);//给选中区域添加range对象
    // sel.collapseToEnd();

    // console.log("rang 1111", rang)
    // console.log("sel 1111", sel)

    // const selection = window.getSelection();
    // const range = document.createRange();
    // range.selectNode(contentRef.current)
    // selection.addRange(range)
    // console.log("selection", selection)

    // const range = selection.getRangeAt(0);

    // console.log("selection moveEnd", selection)


    // const items = contentRef.current.querySelectorAll("span")
    // const last = items[items.length - 1]
    // console.log("items", items)

    // const range = document.createRange();
    // // range.selectNode(last)
    // range.selectNode(contentRef.current)
    // console.log(11111, range.toString())

    // // 选中节点的内容
    // range.selectNodeContents(contentRef.current);

    // range.collapseToEnd()
    // range.collapse(false)
    // range.select()

    // range.setStart(element.childNodes[0], pos);


    // range.select()

  }

  const onBlur = (e) => {
    // console.log("onblur", e)
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
      onBlur={onBlur}
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
