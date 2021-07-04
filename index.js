var ti=0;
var title_str="this is a web site";
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

setInterval("clock_func()",200);
