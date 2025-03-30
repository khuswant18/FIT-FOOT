const Hero = () => {

    return (
        <main>

            <div className="content">

                <div className="quote">
                   <h1>
                    YOUR FEET<br/>
                    DESERVE<br/>
                    THE BEST
                    </h1>
                </div>

                <div className="desc">
                    <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                    </p>
                    </div>

                <div className="options">
                    <button className="option-button-1">Shop Now</button>
                    <button className="option-button-2">Category</button>
                </div>

                <div className="shop">
                    <p>Also Available On:</p>
                    <div className="apps">
                        <img src="/images/amazon.png" alt="image-1" />

                        <img src="/images/flipkart.png" alt="image-2" />
                    </div>
                </div>
            </div>

            
            <div className="main-image">
                <img src="/images/shoe_image.png" alt="" />
             </div>

        </main>
    )


}

export default Hero 