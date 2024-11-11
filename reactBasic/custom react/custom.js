import { Children } from "react";

function customRender(createElm, container){
    const reactElemnt = document.createElement(createElm.type)
    reactElemnt.innerHTML = "click me"
    reactElemnt.setAttribute('href', createElm.props.href)
    reactElemnt.setAttribute('target', createElm.props.target)
    container.appendChild(reactElemnt);
    
}
const domEl = document.createElement(createElm.type)
domEl.innerHTML = 'click me throw loop'
for (const prop in createElm.props) {
     domEl.setAttribute(prop, createElm.props[prop])
    }
    container.appendChild(domEl)

}


const createElm = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'
    },
    Children: 'click me'
}

const mainContainer = document.querySelector('#root')

customRender(createElm, container)