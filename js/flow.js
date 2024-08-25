ELEMENT_CLASS = 'element'
REMOVE_CLASS = 'remove'

function add_element(){
    let x = 100*Math.random()
    let y = 100*Math.random()
    let size = 10*Math.random()
 
    let container = document.getElementById('flow')
    let element = document.createElement('div')
        element.className = 'element'
        element.style.left    = x + 'vw'
        element.style.top     = y + 'vh'
        element.style.width   = size + 'vh'
        element.style.height  = size + 'vh'
    container.append(element)
}

async function append_class(class_0 = ELEMENT_CLASS, class_1 = REMOVE_CLASS){
    let items = document.getElementsByClassName(class_0)
    if (items.length>0){
        let count = Math.round(Math.random()*0.2*items.length)+1
        let i = 0
        let counter = 0
        while ((i<items.length)&&(counter < count)){
            if (!(items[i].classList.contains(class_1))){
                items[i].classList.add(class_1)
                counter++
            }
            i++
        }
    }
}

async function remove_element(class_name=REMOVE_CLASS){
    let items = document.getElementsByClassName(class_name)
    if (items.length > 0){
        while(items[0]){
            items[0].parentNode.removeChild(items[0])
        }
    }
}

async function start(){
    let count = 0
    while(true){
        await sleep(1000)
        count++
        append_class()
        if (count%10 == 0){
            remove_element()
            count = 0
        }
    }

}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

window.onload = start()

// setInterval(append_class,1000)

// setInterval(remove_element,3000)