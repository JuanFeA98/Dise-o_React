import React from 'react'

import '../styles/main.css'

export default function main() {
  return (
    <section className='Main'>
        <div className="Main--Content">
            <h4>
                Hello everybody!
            </h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quod sit nobis culpa natus, molestias eius error reprehenderit. Fugiat, quod unde. Sit id ipsam eaque? Eius, corrupti? Nostrum, commodi voluptas.
            </p>
        </div>
        <div className="Main--Categories">
            <div className="Main--Categories--content" id='DataScience'>
                <a href="">
                    <div className='Main--Categories--icon'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1157/1157001.png" alt="DataScience" />
                    </div>
                </a>
                <a href="">
                    <p>Data Science</p>
                </a>
            </div>
            <div className="Main--Categories--content" id='Backend'>
            <a href="">
                    <div className='Main--Categories--icon'>
                        <img src="https://cdn-icons.flaticon.com/png/512/5126/premium/5126176.png?token=exp=1656780309~hmac=6cefadbecddcafbe8fb53157be798cf9" alt="Backend" />
                    </div>
                </a>
                <a href="">
                    <p>Backend</p>
                </a>
            </div>
            <div className="Main--Categories--content" id='Frontend'>
            <a href="">
                    <div className='Main--Categories--icon'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png" alt="Frontend" />
                    </div>
                </a>
                <a href="">
                    <p>Frontend</p>
                </a>
            </div>
            <div className="Main--Categories--content"  id='Fullstack'>
            <a href="">
                    <div className='Main--Categories--icon'>
                        <img src="https://cdn-icons-png.flaticon.com/512/2620/2620971.png" alt="Fullstack" />
                    </div>
                </a>
                <a href="">
                    <p>Fullstack</p>
                </a>
            </div>
        </div>
    </section>
  )
}
