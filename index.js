var ti=0;
var ynum=0;
var title_str="this is a web site";
var m_x=0,m_y=0;

function down_source()
{
    window.open("https://github.com/qiufuyu123/qos");
}

function getRandomColor(){
    var rgb='rgba('+Math.floor(Math.random()*255)+','
             +Math.floor(Math.random()*255)+','
             +Math.floor(Math.random()*255)+','
             +Math.floor(Math.random()*10)+')';
    //console.log(rgb);
    return rgb;
}
function clock_func()
{
    if(ti>=title_str.length)
    {
        document.title=title_str;
        ti=0;
    }
    //console.log("at");
    document.title=title_str.slice(0,ti);
    ti++;
    
}
document.onmousemove=function move(e)
{
m_x=e.x;
m_y=e.y;
};

setInterval(() => {
    if(ynum>=50)
    {
        ynum=0;
        var s=document.getElementById("box");
        document.body.removeChild(s);
        s=document.createElement("div");
        s.id="box";
        document.body.appendChild(s);
    }
    ynum++;
    var y= document.createElement("div");
    y.className="yuan";
    y.id="yuan"+ynum;
    y.style.position="absolute"
    y.style.top=m_y+Math.random()*10;
    y.style.left=m_x+Math.random()*10;
    //y.style.backgroundColor="red";
    var wh=Math.random()*60+20;
    var r=Math.random()*255;
    y.style.backgroundColor=getRandomColor();
    y.style.width=wh;
    y.style.height=wh;
    var divbox= document.getElementById("box");
    divbox.appendChild(y);

    //增加后，遍历每一个进行缩放
    for (var i = 1; i < ynum; i++) {
        var div=document.getElementById("yuan"+i);
        var o_w=div.offsetWidth;
        div.style.width=div.style.height=o_w-10;
        if(o_w-10<10){
            div.style.visibility="hidden";
        }
    }
}, 200);
setInterval("clock_func()",200);
