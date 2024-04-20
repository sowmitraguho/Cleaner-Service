import image from '../../assets/images.jpg'

const AboutUs = () => {
    return (
        <div className="py-24 bg-white text-center">
            <h1 className="text-5xl text-blue-500 pb-12">About US</h1>
            <div className="about container grid grid-cols-2 gap-4 text-justify mx-auto">
                <div className="about-left my-auto">
                    <img className='w-full h-96' src={image} alt="about us" />
                </div>
                <div className="about-right">
                    <h2 className="text-3xl text-slate-900 font-bold pb-4">Who Are We?</h2>
                    <p className="text-lg text-slate-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima asperiores atque mollitia qui tenetur facere iste porro earum quaerat aliquid voluptates deserunt iusto soluta temporibus eaque reiciendis architecto rem animi incidunt suscipit, cumque impedit ex? Voluptatum cum quo quas deleniti, tempora ad laudantium debitis rem asperiores repellat suscipit officia assumenda, dolor mollitia quis iste aliquam sunt distinctio nihil? Voluptatem, corporis. Suscipit ratione cum magni perspiciatis unde veritatis vitae quod, expedita, deleniti aut ex veniam, numquam facere voluptatem sint sunt accusamus exercitationem perferendis saepe vero quibusdam consequuntur dolore non earum. Ad reiciendis aperiam sit facere sunt quibusdam cumque aut corporis minus. Nostrum at necessitatibus, est quod molestiae veritatis totam sint! Similique maxime rerum adipisci aliquam molestiae, veritatis, repudiandae praesentium .</p>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;