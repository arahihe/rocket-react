import "./About.css";
import img from "../../assets/michi.jpg";

function About() {
    return (
        <>
            <Card
                pic={img}
                name="Arahí Herrera"
                title="Dev JavaScript"
                email="herreraarahi@gmail.com"
                about="Fracasando en el desarrollo y la vida"
            />
        </>
    )
};

function Card(props) {
    return (
        <div className = 'card-about'>
            <img src={props.pic}/>
            <h2>{props.name}</h2>
            <p>{props.title}</p>
            <p>{props.email}</p>
            <p>{props.about}</p>
        </div>
    )
}

export default About;