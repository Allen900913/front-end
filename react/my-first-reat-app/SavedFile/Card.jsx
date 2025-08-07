import profilepic from "./assets/girl1.jpg"

function Card (){
    return (
        <div className="card">
            <img className="card-img" src={profilepic} alt="目前圖片有問題" />
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">I make Youtube and play video games</p>
        </div>
    )
}

export default Card