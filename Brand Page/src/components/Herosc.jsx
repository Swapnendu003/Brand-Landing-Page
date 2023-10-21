
const Hero = () => {
    return (
        <div className="main">
            <div className="content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="buttons">
                    <button id="one">Shop Now</button>
                    <button id="two">Category</button>
                </div>
                <div className="shop">
                    <p>Also Available On</p>
                    <div className="brand">
                        <img src="/public/images/flipkart.png" alt="" />
                        <img src="/public/images/amazon.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="image">
            <img src="/public/images/shoe_image.png" alt="" />
            </div>
        </div>
    )
}
export default Hero