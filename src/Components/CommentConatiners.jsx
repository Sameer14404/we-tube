
const Comment=({data})=>{
    const {name,text,replies}=data;
    return (
        <div className="flex bg-slate-200 p-5 m-5 rounded-lg">
            
            <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmCS3uMVc54NYJHXFUSIUFZrI3Zp00EZ6KcA&s" alt="logo"  className="h-8 w-8"/></div>
            <div className="p-3">
                <p className=" font-bold">name</p>
                <p>comments</p>
            </div>
        </div>
    )
}


const CommentList=({comments})=>{
    return comments.map((el)=>(<div key={el.id} >
    <Comment key={el.id} data={el}/>
    <div>
        <CommentList key={el.id} comments={el.replies}/>
    </div>
    </div>))
}
const CommentConatiners = () => {
  return (
    <div className='m-5 p-5'>

      <h1 className='text-2xl font-bold'>Comments:</h1>
      <CommentList comments={""}/>
    </div>
  )
}

export default CommentConatiners
