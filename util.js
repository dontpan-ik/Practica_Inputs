//para todos los inputs

const event =document.querySelector('#btn')
const event2 =document.querySelector('#check')
const event3 =document.querySelector('#col')
const event4 =document.querySelector('#dat')
const event5 =document.querySelector('#datt')
const event6 =document.querySelector('#eml')
const event7 =document.querySelector('#fil')
const event8 =document.querySelector('#hdd')
const event9 =document.querySelector('#img')
const event10 =document.querySelector('#mnt')
const event11 =document.querySelector('#numb')
const event12 =document.querySelector('#pass')
const event13 =document.querySelector('#rad')
const event14 =document.querySelector('#rag')
const event15 =document.querySelector('#res')
const event16 =document.querySelector('#sch')
const event17 =document.querySelector('#sub')
const event18 =document.querySelector('#tl')
const event19 =document.querySelector('#txt')
const event20 =document.querySelector('#tm')
const event21 =document.querySelector('#url')
const event22 =document.querySelector('#wk')

//para todos los inputs

//button
event.addEventListener("click",e=>{
    var last="click"
    var btn = document.getElementById('btn').value
    document.getElementById('value_btn').innerHTML=btn
    document.getElementById('event_btn').innerHTML=last
})

event.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_btn').innerHTML=last
})
event.addEventListener("mouseout",e=>{
    console.log('ejecute mouseout')
    var last="mouseout"
    document.getElementById('event_btn').innerHTML=last
})
//CHECKBOX
event2.addEventListener("click",e=>{
    var last="click"
    var check = document.getElementById('check').value
    document.getElementById('value_check').innerHTML=check
    document.getElementById('event_check').innerHTML=last
})
event2.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_check').innerHTML=last
})
event2.addEventListener("mouseout",e=>{
    console.log('ejecute mouseout')
    var last="mouseout"
    document.getElementById('event_check').innerHTML=last
})
//COLOR
event3.addEventListener("click",e=>{
    var last="click"
    console.log('ejecute click')
    var col = document.getElementById('col').value
    console.log(col)
    document.getElementById('value_col').innerHTML=col
    document.getElementById('event_col').innerHTML=last
})
event3.addEventListener("mouseover",e=>{
    var last="mouseover"
    console.log('ejecute mouseover')
    document.getElementById('event_col').innerHTML=last
})
event3.addEventListener("mouseout",e=>{
    console.log('ejecute mouseout')
    var last="mouseout"
    document.getElementById('event_col').innerHTML=last
    var col = document.getElementById('col').value
    document.getElementById('value_col').innerHTML=col 
})
// DATE
event4.addEventListener("click",e=>{
    var last="click"
    var dat = document.getElementById('dat').value
    document.getElementById('value_dat').innerHTML=dat
    document.getElementById('event_dat').innerHTML=last
})
event4.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_dat').innerHTML=last
})
event4.addEventListener("mouseout",e=>{
    console.log('ejecute mouseout')
    var last="mouseout"
    document.getElementById('event_dat').innerHTML=last
    var dat = document.getElementById('dat').value
    document.getElementById('value_dat').innerHTML=dat 
})
// DATETIME LOCAL
event5.addEventListener("click",e=>{
    var last="click"
    var datt = document.getElementById('datt').value
    document.getElementById('value_datt').innerHTML=datt
    document.getElementById('event_datt').innerHTML=last
})
event5.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_datt').innerHTML=last
})
event5.addEventListener("mouseout",e=>{
    console.log('ejecute mouseout')
    var last="mouseout"
    document.getElementById('event_datt').innerHTML=last
    var datt = document.getElementById('datt').value
    document.getElementById('value_datt').innerHTML=datt 
})
// EMAIL
event6.addEventListener("click",e=>{
    var last="click"
    var eml = document.getElementById('eml').value
    document.getElementById('value_eml').innerHTML=eml
    document.getElementById('event_eml').innerHTML=last
})
event6.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_eml').innerHTML=last
})
event6.addEventListener("mouseout",e=>{
    console.log('ejecute mouseout')
    var last="mouseout"
    document.getElementById('event_eml').innerHTML=last
    var eml = document.getElementById('eml').value
    document.getElementById('value_eml').innerHTML=eml 
})
/*event6.addEventListener("onkeydown",e=>{
    console.log('ejecute onkeydown ')
    var eml = document.getElementById('eml').value
    document.getElementById('value_eml').innerHTML=eml
    
    

/////// UNS TEMPLATE 
event.addEventListener("mouseout",e=>{
    var last="mouseout"
    document.getElementById('event_').innerHTML=last
})





})*/
// FILE
event7.addEventListener("click",e=>{
    var last="click"
    var fil = document.getElementById('fil').value
    document.getElementById('value_fil').innerHTML=fil
    document.getElementById('event_fil').innerHTML=last
})
event7.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_fil').innerHTML=last
})
event7.addEventListener("mouseout",e=>{
    var last="mouseout"
    document.getElementById('event_fil').innerHTML=last
    var fil = document.getElementById('fil').value
    document.getElementById('value_fil').innerHTML=fil
})
// HIDDEN
event8.addEventListener("click",e=>{
    var last="click"
    var hdd = document.getElementById('hdd').value
    document.getElementById('value_hdd').innerHTML=hdd
    document.getElementById('event_hdd').innerHTML=last
})
event8.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_hdd').innerHTML=last
})
event8.addEventListener("mouseout",e=>{
    var last="mouseout"
    document.getElementById('event_hdd').innerHTML=last
    var hdd = document.getElementById('hdd').value
    document.getElementById('value_hdd').innerHTML=hdd
})
// IMAGE
event9.addEventListener("click",e=>{
    var last="click"
    var img = document.getElementById('img').value
    document.getElementById('value_img').innerHTML="..."
    document.getElementById('event_img').innerHTML=last
    document.getElementById("img").src="./img/kofO3.png"
})
event9.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_img').innerHTML=last
    document.getElementById("img").src="./img/kofO2.png"
})
event9.addEventListener("mouseout",e=>{
    var last="mouseout"
    document.getElementById('event_img').innerHTML=last
    var img = document.getElementById('img').value
    document.getElementById('value_img').innerHTML=hdd
    document.getElementById("img").src="./img/kofO1.png"
})
// MONTH
event10.addEventListener("click",e=>{
    var last="click"
    var mnt = document.getElementById('mnt').value
    document.getElementById('value_mnt').innerHTML=mnt
    document.getElementById('event_mnt').innerHTML=last
})
event10.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_mnt').innerHTML=last
})
event10.addEventListener("mouseout",e=>{
    var last="mouseout"
    document.getElementById('event_mnt').innerHTML=last
    var mnt = document.getElementById('mnt').value
    document.getElementById('value_mnt').innerHTML=mnt
})
// NUMBER
event11.addEventListener("click",e=>{
    var last="click"
    var numb = document.getElementById('numb').value
    document.getElementById('value_numb').innerHTML=numb
    document.getElementById('event_numb').innerHTML=last
})
event11.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_numb').innerHTML=last
})
event11.addEventListener("mouseout",e=>{
    var last="mouseout"
    document.getElementById('event_numb').innerHTML=last
    var numb = document.getElementById('numb').value
    document.getElementById('value_numb').innerHTML=numb
})
// PASSWORD
event12.addEventListener("click",e=>{
    var last="click"
    var pass = document.getElementById('pass').value
    document.getElementById('value_pass').innerHTML=pass
    document.getElementById('event_pass').innerHTML=last
})
event12.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_pass').innerHTML=last
})
event12.addEventListener("mouseout",e=>{
    var last="mouseout"
    document.getElementById('event_pass').innerHTML=last
    var pass = document.getElementById('pass').value
    document.getElementById('value_pass').innerHTML=pass
})
// RADIO
event13.addEventListener("click",e=>{
    var last="click"
    var rad = document.getElementById('rad').value
    document.getElementById('value_rad').innerHTML=rad
    document.getElementById('event_rad').innerHTML=last
})
event13.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_rad').innerHTML=last
})
event13.addEventListener("mouseout",e=>{
    var last="mouseout"
    document.getElementById('event_rad').innerHTML=last
    var rad = document.getElementById('rad').value
    document.getElementById('value_rad').innerHTML=rad
})
// RANGE
event14.addEventListener("click",e=>{
    var last="click"
    var rag = document.getElementById('rag').value
    document.getElementById('value_rag').innerHTML=rag
    document.getElementById('event_rag').innerHTML=last
})
event14.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_rag').innerHTML=last
})
event14.addEventListener("mouseout",e=>{
    var last="mouseout"
    document.getElementById('event_rag').innerHTML=last
    var rag = document.getElementById('rag').value
    document.getElementById('value_rag').innerHTML=rag
})
// RESET
event15.addEventListener("click",e=>{
    var last="click"
    var res = document.getElementById('res').value
    document.getElementById('value_res').innerHTML=res
    document.getElementById('event_res').innerHTML=last
})
event15.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_res').innerHTML=last
})
event15.addEventListener("mouseout",e=>{
    var last="mouseout"
    document.getElementById('event_res').innerHTML=last
    var res = document.getElementById('res').value
    document.getElementById('value_res').innerHTML=res
})
// SEARCH
event16.addEventListener("click",e=>{
    var last="click"
    var sch = document.getElementById('sch').value
    document.getElementById('value_sch').innerHTML=sch
    document.getElementById('event_sch').innerHTML=last
})
event16.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_sch').innerHTML=last
})
event16.addEventListener("mouseout",e=>{
    var last="mouseout"
    document.getElementById('event_sch').innerHTML=last
    var sch = document.getElementById('sch').value
    document.getElementById('value_sch').innerHTML=sch
})
// SUBMIT
event17.addEventListener("click",e=>{
    var last="click"
    var sub = document.getElementById('sub').value
    document.getElementById('value_sub').innerHTML=sub
    document.getElementById('event_sub').innerHTML=last
})
event17.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_sub').innerHTML=last
})
event17.addEventListener("mouseout",e=>{
    var last="mouseout"
    document.getElementById('event_sub').innerHTML=last
    var sub = document.getElementById('sub').value
    document.getElementById('value_sub').innerHTML=sub
})
// TEL
event18.addEventListener("click",e=>{
    var last="click"
    var tl = document.getElementById('tl').value
    document.getElementById('value_tl').innerHTML=tl
    document.getElementById('event_tl').innerHTML=last
})
event18.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_tl').innerHTML=last
})
event18.addEventListener("mouseout",e=>{
    var last="mouseout"
    document.getElementById('event_tl').innerHTML=last
    var tl = document.getElementById('tl').value
    document.getElementById('value_tl').innerHTML=tl
})
// TEXT
event19.addEventListener("click",e=>{
    var last="click"
    var txt = document.getElementById('txt').value
    document.getElementById('value_txt').innerHTML=txt
    document.getElementById('event_txt').innerHTML=last
})
event19.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_txt').innerHTML=last
})
event19.addEventListener("mouseout",e=>{
    var last="mouseout"
    document.getElementById('event_txt').innerHTML=last
    var txt = document.getElementById('txt').value
    document.getElementById('value_txt').innerHTML=txt
})
// TIME
event20.addEventListener("click",e=>{
    var last="click"
    var tm = document.getElementById('tm').value
    document.getElementById('value_tm').innerHTML=tm
    document.getElementById('event_tm').innerHTML=last
})
event20.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_tm').innerHTML=last
})
event20.addEventListener("mouseout",e=>{
    var last="mouseout"
    document.getElementById('event_tm').innerHTML=last
    var tm = document.getElementById('tm').value
    document.getElementById('value_tm').innerHTML=tm
})
// URL
event21.addEventListener("click",e=>{
    var last="click"
    var url = document.getElementById('url').value
    document.getElementById('value_url').innerHTML=url
    document.getElementById('event_url').innerHTML=last
})
event21.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_url').innerHTML=last
})
event21.addEventListener("mouseout",e=>{
    var last="mouseout"
    document.getElementById('event_url').innerHTML=last
    var url = document.getElementById('url').value
    document.getElementById('value_url').innerHTML=url
})
// WEEK
event22.addEventListener("click",e=>{
    var last="click"
    var wk = document.getElementById('wk').value
    document.getElementById('value_wk').innerHTML=wk
    document.getElementById('event_wk').innerHTML=last
})
event22.addEventListener("mouseover",e=>{
    var last="mouseover"
    document.getElementById('event_wk').innerHTML=last
})
event22.addEventListener("mouseout",e=>{
    var last="mouseout"
    document.getElementById('event_wk').innerHTML=last
    var wk = document.getElementById('wk').value
    document.getElementById('value_wk').innerHTML=wk
})


function loadJsonFile(){
    var request = new XMLHttpRequest();
    request.open("GET","files/info.json",true)
    request.responseType = 'text'
    console.log('Dentro')
    request.onload = function (){
        console.log('Dentro')
        if(request.status === 200){
            console.log('Dentro')
            
            var obj = JSON.parse(request.responseText)
            var value, event
            //console.log(obj)
            for(var i=0;i<obj.length;i++){
                value= "value_"+obj[i].id
                event= "event_"+obj[i].id
                console.log(value)
                document.getElementById(value).innerHTML=obj[i].value
                document.getElementById(event).innerHTML=obj[i].event
                //document.getElementById(obj[i].id).value=obj[i].value
            }

        }else{
            console.log('Nothing Happen')
        }   
    }
    request.send()
}

function swithToInput(){
    
}