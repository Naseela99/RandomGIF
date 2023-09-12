random = 'cats'

async function genImg(){
try{
var res = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=gc2yUMhgC27GVhUxKqztIcUTxvhi9sSc&s=${random}`,
{mode:'cors'})
var img = document.querySelector('img')

var r = await res.json()

img.src = r.data.images.original.url
        
    
}
catch(e){
    console.log(e)

    }
}

genImg()

new_btn = document.querySelector('.newimg')

new_btn.addEventListener('click',genImg)

new_btn = document.querySelector('.newimg')

new_btn.addEventListener('click',genImg)

search = document.querySelector('.searchbtn')

search.addEventListener('click',() => {
    genImgSearch()
})

async function genImgSearch(){
   
    q =document.querySelector('.searchq').value
    console.log(q)

    if (q!=''){
        random=q
        try{
        var res = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=gc2yUMhgC27GVhUxKqztIcUTxvhi9sSc&s=${q}`,
{mode:'cors'})
    var img = document.querySelector('img')
    r = await res.json()
    img.src = r.data.images.original.url
        
        }
        catch(e){
            console.log(e)
        }
    }
}
