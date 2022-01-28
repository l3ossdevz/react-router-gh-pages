import React from "react";
import { useParams } from "react-router-dom";

const SayHi = () => {
    const params = useParams();
    return (
        <section className="hero is-large is-default">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <p className="title">Hello, {params.name}!</p>
                </div>
            </div>
        </section>
    );
};

export default SayHi;
